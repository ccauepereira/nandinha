import type { StatItem } from '../../data/content/story';
export function StatList({ items }: { items: readonly StatItem[] }) {
  return (
    <dl className="stat-list">
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>
            {item.value}
            {item.suffix}
            <span className="stat-track" aria-hidden="true">
              <span
                style={{ width: `${Math.min(100, (item.value / item.max) * 100)}%` }}
              />
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
