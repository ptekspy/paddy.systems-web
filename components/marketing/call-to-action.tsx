import * as React from "react";
import { Card } from "../layout/card";
import { Typography } from "../typography/typography";
import { Button } from "../actions/button";

type CallToActionProps = {
  title: string;
  description: string;
  href: string;
  buttonLabel: string;
  tone?: "black" | "white";
  align?: "left" | "center";
};

export function CallToAction({
  title,
  description,
  href,
  buttonLabel,
  tone = "black",
  align = "center",
}: CallToActionProps) {
  const isDark = tone === "black";

  return (
    <Card
      tone={tone}
      padding="xl"
      className={
        align === "left"
          ? "flex flex-col gap-6"
          : "flex flex-col items-center gap-6 text-center"
      }
    >
      <div className={align === "left" ? "space-y-4" : "space-y-4"}>
        <Typography variant="h3" color={isDark ? "white" : "black"} weight="semibold">
          {title}
        </Typography>
        <Typography
          color={isDark ? "white" : "black"}
          className={isDark ? "text-zinc-200" : "text-zinc-600"}
        >
          {description}
        </Typography>
      </div>
      <div className={align === "left" ? "flex flex-wrap gap-3" : "flex flex-wrap gap-3"}>
        <Button
          href={href}
          variant="contained"
          color={isDark ? "white" : "black"}
        >
          {buttonLabel}
        </Button>
      </div>
    </Card>
  );
}
