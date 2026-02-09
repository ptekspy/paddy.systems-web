"use client";

import * as React from "react";
import Link, { type LinkProps } from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import { Typography } from "@/components/typography/typography";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-50 data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
  {
    variants: {
      variant: {
        text: "",
        outlined: "border",
        contained: "",
      },
      color: {
        white: "",
        black: "",
      },
      size: {
        sm: "px-4 py-2 text-xs",
        md: "px-6 py-3",
        lg: "px-7 py-3.5",
      },
    },
    compoundVariants: [
      {
        variant: "contained",
        color: "black",
        className: "bg-zinc-900 text-white hover:bg-zinc-800",
      },
      {
        variant: "contained",
        color: "white",
        className:
          "bg-white !text-zinc-950 hover:bg-zinc-100 hover:!text-zinc-950",
      },
      {
        variant: "outlined",
        color: "black",
        className:
          "border-zinc-300 text-zinc-900 hover:border-zinc-400 hover:bg-zinc-50",
      },
      {
        variant: "outlined",
        color: "white",
        className: "border-white/40 text-white hover:border-white hover:bg-white/10",
      },
      {
        variant: "text",
        color: "black",
        className: "text-zinc-900 hover:bg-zinc-100",
      },
      {
        variant: "text",
        color: "white",
        className: "text-white hover:bg-white/10",
      },
      {
        color: "black",
        className: "focus-visible:ring-zinc-900",
      },
      {
        color: "white",
        className: "focus-visible:ring-white",
      },
    ],
    defaultVariants: {
      variant: "contained",
      color: "black",
      size: "md",
    },
  }
);

type AnchorButtonProps = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof buttonVariants> & {
    as: "a";
    disabled?: boolean;
  };

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    as?: "button";
  };

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

export const Button = React.forwardRef<
  HTMLAnchorElement | HTMLButtonElement,
  ButtonProps
>(({ as = "button", variant, color, size, className, children, ...props }, ref) => {
  const isDisabled = "disabled" in props ? Boolean(props.disabled) : false;
  const classes = twMerge(buttonVariants({ variant, color, size }), className);

  const contentColor: "white" | "black" =
    variant === "contained"
      ? color === "white"
        ? "black"
        : "white"
      : color === "white"
        ? "white"
        : "black";

  const content = (
    <Typography
      as="span"
      variant="small"
      weight="semibold"
      color={contentColor}
      className="leading-none"
    >
      {children}
    </Typography>
  );

  if (as === "a") {
    const { onClick, ...rest } = props as AnchorButtonProps;
    return (
      <Link
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={classes}
        data-disabled={isDisabled ? "true" : "false"}
        aria-disabled={isDisabled || undefined}
        tabIndex={isDisabled ? -1 : rest.tabIndex}
        data-testid="Button"
        onClick={(event) => {
          if (isDisabled) {
            event.preventDefault();
            event.stopPropagation();
            return;
          }
          onClick?.(event);
        }}
        {...rest}
      >
        {content}
      </Link>
    );
  }

  const { type, ...rest } = props as NativeButtonProps;

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      type={type ?? "button"}
      className={classes}
      data-disabled={isDisabled ? "true" : "false"}
      data-testid="Button"
      {...rest}
    >
      {content}
    </button>
  );
});

Button.displayName = "Button";

export { buttonVariants };
