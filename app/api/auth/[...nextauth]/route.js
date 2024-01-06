import { CONNECT_MONGO_DB } from "@/libs/ConnectMongoDB";
import UserMODEL from "@/model/UserModel";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email } = user;
        const { provider } = account;
        await CONNECT_MONGO_DB();
        const IF_USER_EXIST = await UserMODEL.findOne({ email });

        if (!IF_USER_EXIST) {
          try {
            const res = await fetch(`${process.env.URL_VALUE}/api/user`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ name, email, provider }),
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
