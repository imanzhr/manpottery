import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  emphasizeEyebrow?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  emphasizeEyebrow = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block font-medium mb-4",
            emphasizeEyebrow
              ? "font-display text-3xl tracking-normal text-[#3d3833] sm:text-4xl lg:text-5xl"
              : "text-xs uppercase tracking-[0.2em] text-terracotta"
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-display leading-tight mb-4",
          emphasizeEyebrow
            ? "text-lg text-[#c4956a] sm:text-xl lg:text-2xl"
            : "text-3xl text-stone sm:text-4xl lg:text-5xl"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="text-warm-gray text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
