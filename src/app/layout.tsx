import "@/styles/globals.css";

import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import type { ReactNode } from "react";

import { env } from "@/lib/env";
import { AppProviders } from "@/providers";

import { rootMetadata } from "../../config/root-metadata";

export const metadata: Metadata = rootMetadata;

export default async function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body data-site-url={env.NEXT_PUBLIC_SITE_URL}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {/* Keep global providers in one place to make onboarding easier. */}
          <AppProviders>{children}</AppProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
