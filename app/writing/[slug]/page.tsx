import { notFound } from "next/navigation";
import { posts } from "../posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
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
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Writing
        </p>
        <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">
          {post.title}
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      <div className="flex flex-col gap-6 text-lg text-zinc-700">
        {post.sections.map((section, index) => {
          if (section.type === "list") {
            return (
              <ul key={index} className="list-disc space-y-2 pl-6 text-base">
                {section.content.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          }

          return (
            <p key={index} className="text-base leading-7">
              {section.content}
            </p>
          );
        })}
      </div>

      <div className="rounded-2xl border border-zinc-200 bg-white p-6">
        <p className="text-sm font-semibold text-zinc-900">Next step</p>
        <p className="mt-2 text-sm text-zinc-600">
          If you’re planning a high-risk change, request a readiness assessment
          and get a defensible plan.
        </p>
        <a
          href="/contact"
          className="mt-4 inline-flex rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800"
        >
          Request an assessment
        </a>
      </div>
    </article>
  );
}
