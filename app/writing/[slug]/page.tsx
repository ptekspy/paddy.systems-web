import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CallToAction } from "@/components/cta";
import { BulletList } from "@/components/ui/bullet-list";
import { Typography } from "@/components/ui/typography";
import { posts } from "../posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    return {
      title: "Writing — paddy.systems",
    };
  }

  return {
    title: `${post.title} — paddy.systems`,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} — paddy.systems`,
      description: post.excerpt,
      type: "article",
    },
  };
}

export default function WritingPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find((item) => item.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto flex max-w-3xl flex-col gap-8">
      <header className="flex flex-col gap-3">
        <Typography
          as="p"
          variant="caption"
          color="black"
          weight="semibold"
          className="tracking-[0.28em] text-zinc-500"
        >
          Writing
        </Typography>
        <Typography as="h1" variant="h2" color="black" weight="semibold">
          {post.title}
        </Typography>
        <div className="flex flex-wrap items-center gap-3">
          <Typography
            as="span"
            variant="caption"
            color="black"
            weight="semibold"
            className="tracking-[0.2em] text-zinc-500"
          >
            {post.date}
          </Typography>
          <Typography as="span" variant="caption" color="black" className="text-zinc-500">
            •
          </Typography>
          <Typography
            as="span"
            variant="caption"
            color="black"
            weight="semibold"
            className="tracking-[0.2em] text-zinc-500"
          >
            {post.readTime}
          </Typography>
        </div>
      </header>

      <div className="flex flex-col gap-6">
        {post.sections.map((section, index) => {
          if (section.type === "list") {
            return (
              <BulletList
                key={index}
                items={section.content}
                tone="black"
                className="pl-6"
              />
            );
          }

          return (
            <Typography key={index} as="p" variant="p" color="black">
              {section.content}
            </Typography>
          );
        })}
      </div>

      <CallToAction
        title="Next step"
        description="If you’re planning a high-risk change, request a readiness assessment and get a defensible plan."
        href="/contact"
        buttonLabel="Request an assessment"
        tone="black"
        align="left"
      />
    </article>
  );
}
