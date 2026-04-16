export const env = {
  appName: process.env.NEXT_PUBLIC_APP_NAME || "Next.js Starter-Kit",
  sessionSecret: process.env.AUTH_SESSION_SECRET || "dev-only-secret",
  apiBaseUrl: process.env.NEXT_PUBLIC_API_BASE_URL || ""
};
