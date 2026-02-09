export default function WhiteLabellingReadinessPage() {
  return (
    <div className="flex flex-col gap-16">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Assessment
          </p>
          <h1 className="text-4xl font-semibold text-zinc-900 md:text-5xl">
            White-labelling readiness assessment
          </h1>
          <p className="text-lg text-zinc-600">
            Know what will break before it breaks. Identify the architectural
            and operational risks of white-labelling before you commit.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/contact"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Request an assessment
            </a>
            <a
              href="/contact"
              className="text-sm font-semibold text-zinc-700 hover:text-zinc-900"
            >
              Send me a sample report →
            </a>
          </div>
        </div>
        <div className="rounded-3xl border border-zinc-200 bg-white p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            The trap
          </p>
          <div className="mt-6 space-y-4 text-sm text-zinc-700">
            <p>
              Teams assume white-labelling is configurable UX. The reality is a
              change to your data model, auth boundaries, and support surface.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Configuration sprawl</li>
              <li>Feature divergence</li>
              <li>Auth and tenant boundary drift</li>
              <li>Debugging and support complexity</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-zinc-900">
            Assessment outputs
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-zinc-600">
            <li>Tenant boundary decisions and trade-offs.</li>
            <li>Risk hotspots with mitigation strategies.</li>
            <li>Sequencing plan and proof milestones.</li>
            <li>“Don’t do this” list for anti-patterns.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-zinc-900">
            Example sections
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-zinc-600">
            <li>Sample risk statements and impact grading.</li>
            <li>Plan headings and phase sequencing.</li>
            <li>Decision matrix for tenant separation.</li>
          </ul>
        </div>
      </section>

      <section className="rounded-3xl border border-zinc-200 bg-zinc-900 p-10 text-white">
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Request the assessment</h2>
          <p className="text-zinc-200">
            Get a clear picture of what will break, what will slow you down, and
            what to do first.
          </p>
          <div>
            <a
              href="/contact"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
            >
              Request an assessment
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
