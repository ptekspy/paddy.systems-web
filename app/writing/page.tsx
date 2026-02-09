import type { Metadata } from "next";
import { Card } from "@/components/layout/card";
import { SectionHeading } from "@/components/layout/section-heading";
import { Typography } from "@/components/typography/typography";
import { Flex } from "@/components/layout/flex";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Writing — paddy.systems",
  description:
    "Short, structured posts about change-readiness, white-labelling, and sequencing complex platform work.",
  openGraph: {
    title: "Writing — paddy.systems",
    description:
      "Short, structured posts about change-readiness, white-labelling, and sequencing complex platform work.",
    type: "website",
  },
};

export default function WritingPage() {
  return (
    <Flex direction="column" className="gap-10">
      <Flex as="section" direction="column" gap="md">
        <Typography
          as="p"
          variant="caption"
          color="black"
          weight="semibold"
          className="tracking-[0.28em] text-zinc-500"
        >
          Writing
        </Typography>
        <SectionHeading
          title="Systems planning notes"
          subtitle="Short, structured posts about change-readiness, white-labelling, and sequencing complex platform work."
        />
      </Flex>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Card
            key={post.slug}
            as="a"
            href={`/writing/${post.slug}`}
            tone="black"
            padding="md"
            className="rounded-2xl text-white transition hover:border-white/30"
          >
            <Flex wrap="wrap" align="center" gap="base">
              <Typography
                as="span"
                variant="caption"
                color="white"
                weight="semibold"
                className="tracking-[0.2em] text-zinc-400"
              >
                {post.date}
              </Typography>
              <Typography as="span" variant="caption" color="white" className="text-zinc-400">
                •
              </Typography>
              <Typography
                as="span"
                variant="caption"
                color="white"
                weight="semibold"
                className="tracking-[0.2em] text-zinc-400"
              >
                {post.readTime}
              </Typography>
            </Flex>
            <Typography as="h2" variant="h4" color="white" weight="semibold" className="mt-4">
              {post.title}
            </Typography>
            <Typography as="p" variant="small" color="white" className="mt-3 text-zinc-300">
              {post.excerpt}
            </Typography>
          </Card>
        ))}
      </div>
    </Flex>
  );
}
