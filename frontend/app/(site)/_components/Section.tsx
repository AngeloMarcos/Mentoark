export default function Section({ children, className = "" }: any) {
  return <section className={`section ${className}`}>{children}</section>;
}
