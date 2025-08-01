import { CONNECT_MONGO_DB } from "@/libs/ConnectMongoDB";
import UserMODEL from "@/model/UserModel";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

export const authOptions = {
  // Configuring Google, Github, and Credentials Providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) {
          return null;
        }

        await CONNECT_MONGO_DB();

        // Check if the user exists in the database
        const user = await UserMODEL.findOne({
          username: credentials.username,
        });
        if (!user) {
          return null; // User not found
        }

        // Validate the password
        const isMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );
        if (!isMatch) {
          return null; // Password does not match
        }

        // If credentials are valid, return the user object
        return {
          id: user._id.toString(), // NextAuth requires an id field
          name: user.name,
          email: user.email,
          username: user.username,
        };
      },
    }),
  ],

  // The Next auth secret is used during production
  secret: process.env.NEXTAUTH_SECRET,

  // Upon User Login The data is added to the database using the given code
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google" || account.provider === "github") {
        const { id, name, email } = user;

        const { provider } = account;
        await CONNECT_MONGO_DB();
        const IF_USER_EXIST = await UserMODEL.findOne({ email });

        if (!IF_USER_EXIST) {
          try {
            const res = await UserMODEL.create({
              authId: id,
              name: name,
              email: email,
              provider: provider,
            });

            if (res.ok) {
              return user;
            }
          } catch (error) {
            console.log(error);
          }
        }
      }
      return user;
    },
    // The JWT callback is important for including extra user data in the session token
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
      }
      return token;
    },
    // The session callback populates the session object with the user data from the JWT
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
      }
      return session;
    },
  },

  // This is a new page that handles the login page redirect
  pages: {
    signIn: "/login", // Redirect to your custom login page
  },
};

const Handler = NextAuth(authOptions);
export { Handler as GET, Handler as POST };
