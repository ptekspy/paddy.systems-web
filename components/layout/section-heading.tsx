import * as React from "react";
import { twMerge } from "tailwind-merge";
import { Flex } from "@/components/layout/flex";
import { Typography } from "@/components/typography/typography";

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
    <Flex direction="column" gap="base" className={twMerge("", className)}>
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
    </Flex>
  );
}
