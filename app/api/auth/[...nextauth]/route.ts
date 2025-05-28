import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

if (!process.env.NEXTAUTH_SECRET) {
  throw new Error("NEXTAUTH_SECRET is not defined");
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/",
    signOut: "/",
    error: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Redirect to the dashboard after successful login
      return url.startsWith(baseUrl) ? url : `${baseUrl}/dashboard`;
    },
  },
});

export { handler as GET, handler as POST };