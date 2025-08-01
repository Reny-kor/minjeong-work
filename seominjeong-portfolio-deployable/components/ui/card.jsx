export function Card({ children }) {
  return <div className="rounded-2xl border shadow p-4 bg-white">{children}</div>;
}
export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}