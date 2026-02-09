import { posts } from "./posts";

export default function WritingPage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Writing
        </p>
        <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">
          Systems planning notes
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600">
          Short, structured posts about change-readiness, white-labelling, and
          sequencing complex platform work.
        </p>
      </section>

      <div className="grid gap-6">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/writing/${post.slug}`}
            className="rounded-2xl border border-zinc-200 bg-white p-6 transition hover:border-zinc-300 hover:shadow-sm"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
            <h2 className="mt-4 text-xl font-semibold text-zinc-900">
              {post.title}
            </h2>
            <p className="mt-3 text-sm text-zinc-600">{post.excerpt}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
