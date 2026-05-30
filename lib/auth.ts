import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const DEMO_EMAIL = "admin@digiblygroup.com.au";
const DEMO_PASSWORD = "digibly2025";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        if (
          credentials.email === DEMO_EMAIL &&
          credentials.password === DEMO_PASSWORD
        ) {
          return {
            id: "1",
            email: DEMO_EMAIL,
            name: "Alex Johnson",
            company: "Demo Company Pty Ltd",
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/client-portal/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.company = (user as { company?: string }).company;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as { company?: string }).company = token.company as string;
      }
      return session;
    },
  },
};
