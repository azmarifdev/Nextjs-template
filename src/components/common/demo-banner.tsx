import { DemoBadge } from "@/components/common/demo-badge";

interface DemoBannerProps {
  badgeLabel: string;
  message: string;
}

export function DemoBanner({ badgeLabel, message }: DemoBannerProps) {
  return (
    <div className="demo-banner" role="note" aria-live="polite">
      <DemoBadge label={badgeLabel} />
      <p className="demo-banner-text">{message}</p>
    </div>
  );
}
