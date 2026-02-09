export type WritingPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  sections: Array<
    | { type: "paragraph"; content: string }
    | { type: "list"; content: string[] }
  >;
};

export const posts: WritingPost[] = [
  {
    slug: "white-labelling-is-architecture",
    title: "White-labelling isn’t branding. It’s architecture.",
    excerpt:
      "White-labelling changes the shape of your system. Treat it as a structural decision, not a paint job.",
    date: "February 9, 2026",
    readTime: "5 min read",
    sections: [
      {
        type: "paragraph",
        content:
          "White-labelling is rarely about colours or logos. The moment you promise a unique experience per customer, you inherit new responsibilities: configuration boundaries, data separation, and operational complexity.",
      },
      {
        type: "paragraph",
        content:
          "The common failure mode is to fork features quietly and carry the cost later. That cost shows up as tangled permissions, divergent schemas, and support teams debugging mystery behaviour.",
      },
      {
        type: "list",
        content: [
          "Define tenant boundaries before you scale options.",
          "Name the risks you are willing to carry (and the ones you aren’t).",
          "Sequence the work so the hardest boundaries are proven early.",
        ],
      },
      {
        type: "paragraph",
        content:
          "A readiness assessment surfaces these decisions early, while the change is still cheap. That clarity turns a vague initiative into a plan with guardrails.",
      },
    ],
  },
  {
    slug: "tenant-boundaries",
    title: "Tenant boundaries: the decision that decides everything.",
    excerpt:
      "The most important choice in multi-tenant work is where you draw the line. Get it wrong and everything downstream suffers.",
    date: "February 9, 2026",
    readTime: "6 min read",
    sections: [
      {
        type: "paragraph",
        content:
          "Tenant boundaries are the foundation of every change-readiness plan. They define how you isolate data, configure behaviour, and operate the platform safely.",
      },
      {
        type: "paragraph",
        content:
          "Teams often delay this decision to keep momentum. The cost is ambiguity: every feature becomes a special case, and every release carries hidden coupling.",
      },
      {
        type: "list",
        content: [
          "Start with a decision matrix: data, identity, operations, and support.",
          "Model the riskiest tenant scenarios before promising timelines.",
          "Document assumptions so leadership can make a go/delay call.",
        ],
      },
      {
        type: "paragraph",
        content:
          "A clear boundary decision turns an uncertain programme into a sequence you can defend.",
      },
    ],
  },
];
