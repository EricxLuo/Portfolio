export default function BackgroundEffects() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="site-grid absolute inset-0 opacity-40" />
      <div className="noise absolute inset-0 opacity-[0.035]" />
    </div>
  );
}
