export default function ContactPage() {
  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-4">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Contact
        </p>
        <h1 className="text-3xl font-semibold text-zinc-900 md:text-4xl">
          Request an assessment
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600">
          Share a short description of the change you’re considering. You’ll get
          a response within two business days.
        </p>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <form
          className="rounded-3xl border border-zinc-200 bg-white p-8"
          action="mailto:hello@paddy.systems"
          method="post"
          encType="text/plain"
        >
          <div className="grid gap-6">
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-zinc-900" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
                placeholder="Your name"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-zinc-900" htmlFor="email">
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
                placeholder="you@company.com"
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-semibold text-zinc-900" htmlFor="details">
                Change summary
              </label>
              <textarea
                id="details"
                name="details"
                required
                rows={5}
                className="rounded-2xl border border-zinc-200 px-4 py-3 text-sm"
                placeholder="What are you planning to change? What deadline or risk worries you?"
              />
            </div>
            <button
              type="submit"
              className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Send request
            </button>
          </div>
        </form>

        <div className="flex flex-col gap-6">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-zinc-900">What to expect</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-600">
              <li>Initial response within two business days.</li>
              <li>Clarifying call if the change is complex.</li>
              <li>Assessment delivered in 1–2 weeks.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-zinc-200 bg-white p-6">
            <h2 className="text-lg font-semibold text-zinc-900">Prefer email?</h2>
            <p className="mt-2 text-sm text-zinc-600">
              Send a note directly to
              <a
                href="mailto:hello@paddy.systems"
                className="ml-1 font-semibold text-zinc-900"
              >
                hello@paddy.systems
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
