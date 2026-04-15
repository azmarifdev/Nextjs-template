import Image from "next/image";
import Link from "next/link";

import { DemoBanner } from "@/components/common/demo-banner";
import { getDictionary, resolveLocale } from "@/i18n/config";
import { logger } from "@/lib/logger";

interface MarketingHomeProps {
  searchParams?: Record<string, string | string[] | undefined>;
}

export default async function MarketingHome({ searchParams = {} }: MarketingHomeProps) {
  const localeParam = Array.isArray(searchParams.lang) ? searchParams.lang[0] : searchParams.lang;
  const locale = resolveLocale(localeParam);
  const dict = getDictionary(locale);

  logger.info("Marketing home rendered", { locale });

  return (
    <main className="marketing-page">
      <section className="marketing-hero container">
        <p className="marketing-chip">{dict.marketing.badge}</p>
        <h1 className="marketing-title">{dict.marketing.title}</h1>
        <p className="marketing-subtitle">{dict.marketing.subtitle}</p>

        <DemoBanner badgeLabel={dict.demo.badge} message={dict.demo.banner} />

        <div className="marketing-actions">
          <Link className="btn btn-primary" href="/dashboard">
            {dict.marketing.ctaPrimary}
          </Link>
          <Link className="btn btn-secondary" href={`/about?lang=${locale}`}>
            {dict.marketing.ctaSecondary}
          </Link>
        </div>

        <Image
          src="/assets/banner.png"
          alt="Starter banner preview"
          width={1200}
          height={630}
          className="marketing-image"
          unoptimized
          priority
        />
      </section>
    </main>
  );
}
