export default function PrivacyPage() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <h1 className="text-3xl font-semibold text-zinc-900">Privacy</h1>
      <p className="text-zinc-600">
        This site does not use analytics or tracking cookies by default. If you
        submit the contact form, the information you provide is used solely to
        respond to your request.
      </p>
      <p className="text-zinc-600">
        For privacy questions, reach out via
        <a
          href="mailto:hello@paddy.systems"
          className="ml-1 font-semibold text-zinc-900"
        >
          hello@paddy.systems
        </a>
        .
      </p>
    </div>
  );
}
