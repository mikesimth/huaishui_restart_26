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
    jwt({ token, trigger, session }) {
      if (trigger === 'update') token.name = session.user.name
      return token
    },
  },
} satisfies NextAuthConfig
