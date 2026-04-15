interface DemoBadgeProps {
  label: string;
}

export function DemoBadge({ label }: DemoBadgeProps) {
  return <span className="demo-badge">{label}</span>;
}
