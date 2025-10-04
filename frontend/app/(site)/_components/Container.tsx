// frontend/app/(site)/_components/Container.tsx
import * as React from "react";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children?: React.ReactNode;
};

export default function Container({ className = "", children, ...rest }: ContainerProps) {
  const base = "mx-auto w-full max-w-7xl px-4";
  return (
    <div className={[base, className].filter(Boolean).join(" ")} {...rest}>
      {children}
    </div>
  );
}
