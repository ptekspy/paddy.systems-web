import * as React from "react";
import { twMerge } from "tailwind-merge";
import { Typography } from "@/components/ui/typography";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  tone?: "black" | "white";
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  tone = "black",
  className,
}: SectionHeadingProps) {
  const titleColor = tone === "white" ? "white" : "black";
  const subtitleClass =
    tone === "white" ? "text-zinc-300" : "text-zinc-600";

  return (
    <div className={twMerge("flex flex-col gap-3", className)}>
      <Typography as="h2" variant="h3" color={titleColor} weight="semibold">
        {title}
      </Typography>
      {subtitle ? (
        <Typography
          as="p"
          variant="p"
          color={titleColor}
          className={subtitleClass}
        >
          {subtitle}
        </Typography>
      ) : null}
    </div>
  );
}
