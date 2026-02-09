import * as React from "react";
import { twMerge } from "tailwind-merge";

const baseClasses =
  "h-12 rounded-xl border border-zinc-300/60 bg-white px-4 text-base text-zinc-900 shadow-sm shadow-zinc-900/5 outline-none transition focus:border-zinc-900/70 focus:ring-2 focus:ring-zinc-900/10";

export type SelectProps = React.ComponentPropsWithoutRef<"select">;

export function Select({ className, ...props }: SelectProps) {
  return <select className={twMerge(baseClasses, className)} {...props} />;
}
