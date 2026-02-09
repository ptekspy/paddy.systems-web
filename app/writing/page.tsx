import type { Metadata } from "next";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { Typography } from "@/components/ui/typography";
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
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4">
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
      </section>

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
            <div className="flex flex-wrap items-center gap-3">
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
            </div>
            <Typography as="h2" variant="h4" color="white" weight="semibold" className="mt-4">
              {post.title}
            </Typography>
            <Typography as="p" variant="small" color="white" className="mt-3 text-zinc-300">
              {post.excerpt}
            </Typography>
          </Card>
        ))}
      </div>
    </div>
  );
}
