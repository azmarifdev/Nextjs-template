import "@testing-library/jest-dom/vitest";

if (!process.env.NEXT_PUBLIC_SITE_URL) {
  process.env.NEXT_PUBLIC_SITE_URL = "http://127.0.0.1:3000";
}
