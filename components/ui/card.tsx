import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const cardVariants = cva("rounded-3xl border", {
  variants: {
    tone: {
      black: "border-white/10 bg-zinc-950 text-white",
      white: "border-zinc-200 bg-white text-zinc-900",
    },
    padding: {
      md: "p-6",
      lg: "p-8",
      xl: "p-10",
    },
  },
  defaultVariants: {
    tone: "white",
    padding: "lg",
  },
});

export type CardProps<T extends React.ElementType = "div"> = {
  as?: T;
} & VariantProps<typeof cardVariants> &
  Omit<React.ComponentPropsWithoutRef<T>, "as" | "color">;

export function Card<T extends React.ElementType = "div">({
  as,
  tone,
  padding,
  className,
  ...props
}: CardProps<T>) {
  const Component = as ?? "div";

  return (
    <Component
      className={twMerge(cardVariants({ tone, padding }), className)}
      {...props}
    />
  );
}

export { cardVariants };
