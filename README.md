# APM Docs (Next.js + Tailwind)

This is the **Agro Predict Web Documentation** repository. It contains the full whitepaper, one-pager, and developer docs built with Next.js and Tailwind CSS.

## Features
- Full **Whitepaper** & **One-Pager** integration
- Developer-focused documentation pages
- Responsive **Sidebar Navigation**
- Dark theme with **Green & Gold accents**
- Markdown-driven content for easy editing

## Folder Structure

/apm-docs
│
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── README.md
│
├── styles/
│   └── globals.css
│
├── components/
│   ├── Layout.js
│   └── Sidebar.js
│
├── pages/
│   ├── _app.js
│   ├── index.js
│   │
│   └── docs/
│       ├── architecture.js
│       ├── how-it-works.js
│       ├── tokenomics.js
│       ├── roadmap.js
│       ├── team.js
│       └── faq.js
│
└── docs/
    ├── introduction.md
    ├── architecture.md
    ├── faq.md
    ├── team.md
    ├── roadmap.md
    ├── tokenomic.md
    ├── whitepaper.md
    ├── one-pager.md
    └── how-it-works.md

## Getting Started

1. Clone this repository:
```bash
git clone https://github.com/Saleemahhh1/Apm-documentation-.git

2. Install dependencies:



npm install

3. Run locally:



npm run dev

4. Open http://localhost:3000 in your browser.



Deployment

Connect repository to Vercel.

Push changes; Vercel will automatically deploy the site.


Contributing

Add or update markdown files in /docs for content changes.

Use /pages/docs/*.js wrappers for rendering new markdown files.

Update Sidebar.js if you add new pages.


License

MIT License

---# Apm-document
