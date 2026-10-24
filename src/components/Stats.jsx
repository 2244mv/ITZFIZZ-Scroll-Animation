const stats = [
  {
    value: "01",
    label: "Design with intention",
  },
  {
    value: "02",
    label: "Motion with meaning",
  },
  {
    value: "03",
    label: "Details that connect",
  },
  {
    value: "∞",
    label: "Ideas in motion",
  },
];

export default function Stats() {
  return (
    <div className="stats-grid" id="impact">
      {stats.map((stat) => (
        <article className="stat-card" key={stat.value}>
          <span className="stat-index">/ {stat.value}</span>
          <span className="stat-value">
            {stat.value === "∞" ? "∞" : `0${Number(stat.value)}`}
          </span>
          <span className="stat-label">{stat.label}</span>
        </article>
      ))}
    </div>
  );
}
