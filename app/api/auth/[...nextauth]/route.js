import { CONNECT_MONGO_DB } from "@/libs/ConnectMongoDB";
import UserMODEL from "@/model/UserModel";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configuring Google and Github Provider with Client Id and Secret
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
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
  },
};

const Handler = NextAuth(authOptions);
export { Handler as GET, Handler as POST };
