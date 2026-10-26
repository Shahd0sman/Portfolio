export default function SectionTitle({ children }) {
  return (
    <h2 className="section-title">
      <span className="spark">✦</span>
      <span className="scribble">{children}</span>
    </h2>
  );
}
