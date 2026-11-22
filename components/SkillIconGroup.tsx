import { Children, type ReactNode } from "react";

interface SkillIconGroupProps {
  children: ReactNode;
}

export default function SkillIconGroup({ children }: SkillIconGroupProps) {
  return (
    <div className="flex flex-wrap -space-x-2">
      {Children.map(children, (child, index) => (
        <div
          key={index}
          className="rounded-full bg-white p-2 border border-black/[0.08] transition-transform duration-200 hover:scale-110 hover:z-10 hover:bg-neutral-50"
        >
          {child}
        </div>
      ))}
    </div>
  );
}
