import Image from "next/image";
import Link from "next/link";

import { getDictionary, resolveLocale } from "@/i18n/config";

interface AboutPageProps {
  searchParams?: Record<string, string | string[] | undefined>;
}

export default async function AboutPage({ searchParams = {} }: AboutPageProps) {
  const localeParam = Array.isArray(searchParams.lang) ? searchParams.lang[0] : searchParams.lang;
  const locale = resolveLocale(localeParam);
  const dict = getDictionary(locale);

  return (
    <main className="marketing-page">
      <section className="container about-section">
        <Image src="/assets/logo.png" alt="Starter logo" width={96} height={96} unoptimized />
        <h1 className="about-title">{dict.marketing.aboutTitle}</h1>
        <p className="about-body">{dict.marketing.aboutBody}</p>

        <div className="feature-grid">
          <article className="card">
            <h2 className="text-title-sm">{dict.marketing.features.f1Title}</h2>
            <p className="help-text">{dict.marketing.features.f1Body}</p>
          </article>
          <article className="card">
            <h2 className="text-title-sm">{dict.marketing.features.f2Title}</h2>
            <p className="help-text">{dict.marketing.features.f2Body}</p>
          </article>
          <article className="card">
            <h2 className="text-title-sm">{dict.marketing.features.f3Title}</h2>
            <p className="help-text">{dict.marketing.features.f3Body}</p>
          </article>
        </div>

        <Link href={`/?lang=${locale}`} className="link-inline">
          {dict.marketing.nav.home}
        </Link>
      </section>
    </main>
  );
}
