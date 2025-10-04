// frontend/app/(site)/_components/FlowStep.tsx
type FlowStepProps = {
  title: string;
  subtitle: string;
};

export default function FlowStep({ title, subtitle }: FlowStepProps) {
  return (
    <div className="card" style={{ padding: "1rem" }}>
      <h3 style={{ fontWeight: 700 }}>{title}</h3>
      <p className="p" style={{ marginTop: ".5rem" }}>{subtitle}</p>
    </div>
  );
}
