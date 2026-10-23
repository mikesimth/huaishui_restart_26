import GitHub from 'next-auth/providers/github'
import type { NextAuthConfig } from 'next-auth'

/**
 * Edge-compatible Auth.js config (no Prisma / Node-only APIs).
 * Used by proxy; keep Prisma adapter out of this file.
 */
export default {
  theme: {
    logo: 'https://next-auth.js.org/img/logo/logo-sm.png',
  },
  providers: [GitHub],
  basePath: '/auth',
  callbacks: {
    authorized({ request, auth }) {
      const { pathname } = request.nextUrl
      if (pathname.startsWith('/work/')) return !!auth
      return true
    },
    jwt({ token, user, trigger, session }) {
      if (user) {
        token.sub = user.id
      }
      if (trigger === 'update') token.name = session.user.name
      return token
    },
    session({ session, token }) {
      if (session.user && token.sub) {
        session.user.id = token.sub
      }
      return session
    },
  },
} satisfies NextAuthConfig
