// auth.ts (o src/auth.ts, si usás src/)

import GitHub from "next-auth/providers/github";
import NextAuth, { NextAuthConfig } from "next-auth";
import Facebook from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prisma";
import CredentialsProvider from "next-auth/providers/credentials";
import { signInEmailPassword } from "@/auth/actions/auth-action";


type CredentialInputs = {
  email: string;
  password: string;
};


export const authConfig: NextAuthConfig = {

  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID || '',
      clientSecret: process.env.GITHUB_CLIENT_SECRET || '',
    }),
    Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID || '',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || '',
      authorization: {
        params: {
          scope: 'email',
        },
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Correo Electronico", type: "email", placeholder: "usuario@google.com" },
        password: { label: "Password", type: "password", placeholder: "Contraseña" },
      },
      async authorize(credentials: CredentialInputs, req) {
        const user = await signInEmailPassword(credentials!.email, credentials!.password)

        if (user) {
          return user
        }
        return null
      }
    })
  ],

  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },

    async jwt({ token, user, account, profile }) {
      const dbUser = await prisma.user.findUnique({ where: { email: token.email ?? 'no-email' } })
      if (dbUser?.isActive === false) {
        throw new Error('User is not active');
      }

      token.roles = dbUser?.roles ?? ['no-roles'];
      token.id = dbUser?.id ?? 'no-id';

      return token
    },
    async session({ session, token, user }) {
      console.log({ token });

      if (session && session.user) {

        session.user.roles = token.roles
        session.user.id = token.id

      }


      return session;
    }
  },



  // ¡Agregá esto si falta!
  secret: process.env.NEXTAUTH_SECRET,
};

export const { auth, handlers, signIn, signOut } = NextAuth(authConfig);
