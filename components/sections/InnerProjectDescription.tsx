import { type ReactNode } from "react";

interface InnerProjectDescriptionProps {
  children: ReactNode;
}

export default function InnerProjectDescription({
  children,
}: InnerProjectDescriptionProps) {
  return <div className="space-y-4">{children}</div>;
}
