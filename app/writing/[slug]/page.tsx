import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CallToAction } from "@/components/marketing/call-to-action";
import { BulletList } from "@/components/lists/bullet-list";
import { Typography } from "@/components/typography/typography";
import { Flex } from "@/components/layout/flex";
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
    <Flex as="article" direction="column" gap="xl" className="mx-auto max-w-3xl">
      <Flex as="header" direction="column" gap="base">
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
        <Flex wrap="wrap" align="center" gap="base">
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
        </Flex>
      </Flex>

      <Flex direction="column" gap="lg">
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
      </Flex>

      <CallToAction
        title="Next step"
        description="If you’re planning a high-risk change, request a readiness assessment and get a defensible plan."
        href="/contact"
        buttonLabel="Request an assessment"
        tone="black"
        align="left"
      />
    </Flex>
  );
}
