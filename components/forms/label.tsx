import * as React from "react";
import { twMerge } from "tailwind-merge";

export type LabelProps = React.ComponentPropsWithoutRef<"label">;

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={twMerge("text-sm font-medium text-zinc-700", className)}
      {...props}
    />
  );
}
