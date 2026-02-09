import * as React from "react";
import { twMerge } from "tailwind-merge";

type BulletListProps = React.ComponentPropsWithoutRef<"ul"> & {
  tone?: "black" | "white";
  items?: string[];
};

export function BulletList({ className, tone = "black", items, children, ...props }: BulletListProps) {
  const classes = twMerge(
    "space-y-2 list-disc pl-5",
    tone === "white" ? "text-zinc-200" : "text-zinc-700",
    className
  );

  return (
    <ul className={classes} {...props}>
      {items
        ? items.map((item, index) => <li key={`${item}-${index}`}>{item}</li>)
        : children}
    </ul>
  );
}
