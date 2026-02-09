import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
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
              <ul key={index} className="list-disc space-y-2 pl-6">
                {section.content.map((item) => (
                  <li key={item}>
                    <Typography as="span" variant="p" color="black">
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>
            );
          }

          return (
            <Typography key={index} as="p" variant="p" color="black">
              {section.content}
            </Typography>
          );
        })}
      </div>

      <div className="rounded-2xl border border-white/10 bg-zinc-950 p-6 text-white">
        <Typography as="p" variant="small" color="white" weight="semibold">
          Next step
        </Typography>
        <Typography as="p" variant="small" color="white" className="mt-2 text-zinc-300">
          If you’re planning a high-risk change, request a readiness assessment
          and get a defensible plan.
        </Typography>
        <Button
          as="a"
          href="/contact"
          variant="contained"
          color="white"
          className="mt-4"
        >
          Request an assessment
        </Button>
      </div>
    </article>
  );
}
