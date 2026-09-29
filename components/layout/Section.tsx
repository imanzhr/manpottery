import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

export function Section({
  children,
  className,
  as: Component = "section",
}: SectionProps) {
  return (
    <Component className={cn("py-20 sm:py-28 lg:py-36", className)}>
      {children}
    </Component>
  );
}
