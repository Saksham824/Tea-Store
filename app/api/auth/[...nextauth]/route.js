import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';
import User from '@/models/User';
import { mongodb } from '@/lib/mongodb';

export const authoptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      await mongodb();
      const existingUser = await User.findOne({ email: user.email });

      if (!existingUser) {
        const newUser = new User({
          email: user.email,
          username: user.email.split("@")[0],
          profilepic: user.image || "",  // Save GitHub profile pic
        });
        await newUser.save();
        user.name = newUser.username;
      } else {
        user.name = existingUser.username;
      }

      return true; // must return true to allow login
    },
    async session({ session, token, user }) {
      await mongodb();
      const dbUser = await User.findOne({ email: session.user.email });
      if (dbUser) {
        session.user.username = dbUser.username;
        session.user.profilepic = dbUser.profilepic;
      }
      return session;
    },
  }
};

const handler = NextAuth(authoptions);
export { handler as GET, handler as POST };
