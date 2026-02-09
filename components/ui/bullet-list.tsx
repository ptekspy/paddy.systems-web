import * as React from "react";
import { twMerge } from "tailwind-merge";
import { Flex } from "@/components/ui/flex";
import { Typography } from "@/components/ui/typography";

type BulletListProps = {
  items: string[];
  tone?: "black" | "white";
  className?: string;
};

export function BulletList({ items, tone = "black", className }: BulletListProps) {
  const textColor = tone === "white" ? "text-zinc-300" : "text-zinc-600";
  const bulletColor = tone === "white" ? "bg-white" : "bg-zinc-900";

  return (
    <ul className={twMerge("space-y-3", className)}>
      {items.map((item) => (
        <Flex as="li" key={item} gap="base">
          <span className={twMerge("mt-2 h-2 w-2 rounded-full", bulletColor)} />
          <Typography as="span" variant="small" color={tone} className={textColor}>
            {item}
          </Typography>
        </Flex>
      ))}
    </ul>
  );
}
