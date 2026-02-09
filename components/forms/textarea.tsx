import * as React from "react";
import { twMerge } from "tailwind-merge";

const baseClasses =
  "min-h-[140px] rounded-xl border border-zinc-300/60 bg-white px-4 py-3 text-base text-zinc-900 shadow-sm shadow-zinc-900/5 outline-none transition focus:border-zinc-900/70 focus:ring-2 focus:ring-zinc-900/10";

export type TextareaProps = React.ComponentPropsWithoutRef<"textarea">;

export function Textarea({ className, ...props }: TextareaProps) {
  return <textarea className={twMerge(baseClasses, className)} {...props} />;
}
