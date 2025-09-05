<!-- FreeTheHomie Chat Platform -->

<h1 align="center">FreeTheHomie 🗣️✨</h1>

<p align="center">
  <b>AI-Powered Fundraising Platform</b><br/>
  <a href="https://vercel.com/digital-herencia/free-the-homie">Live Demo</a> • 
  <a href="#-features">Features</a> • 
  <a href="#-tech-stack">Tech Stack</a> • 
  <a href="#-getting-started">Getting Started</a> • 
  <a href="#-configuration">Configuration</a>
</p>

<p align="center">
  <a href="https://vercel.com/digital-herencia/free-the-homie"><img src="https://img.shields.io/badge/Deploy-Vercel-000?logo=vercel" alt="Vercel"/></a>
  <a href="https://v0.app/chat/projects/jb9UThzEonh"><img src="https://img.shields.io/badge/Built%20with-v0.app-blue?logo=vercel" alt="v0.app"/></a>
  <img src="https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react" alt="React"/>
  <img src="https://img.shields.io/badge/License-MIT-green" alt="License"/>
</p>

---

> **FreeTheHomie** is a next-generation fundraising platform with **merchandising storefronts** to fund community causes. Built with **Next.js 15**, **React 19**, and **Radix + shadcn/ui**, it delivers a fast, accessible, mobile-first experience with automated deployment via Vercel.  
---

<p align="center">
  <img src="https://raw.githubusercontent.com/DigitalHerencia/FreeTheHomie/refs/heads/main/public/freethehomie.png" alt="FreeTheHomie Screenshot" width="100%" style="border-radius:12px;margin:1rem 0;">
</p>

---

## ✨ Features

- **👕 Fundraising Storefront:** Sell merch or collectibles to support campaigns  
- **🔄 Auto-Sync:** GitHub + Vercel integration keeps production up-to-date  
- **📱 Mobile-First UI:** Built with Radix primitives, shadcn/ui, Tailwind 4  
- **🎨 Theming:** Dark/light mode, brand-consistent design  
- **📊 Engagement Analytics:** Track visits, chat interactions, conversions  
- **🔧 Configurable:** Easy environment setup for campaigns, chat flows, and branding  
- **⚡ Edge-Ready:** Deployed on Vercel Edge for fast global performance  

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router) + React 19  
- **UI & Styling:** Tailwind CSS 4, Radix UI, shadcn/ui, Lucide React Icons  
- **Animations & UX:** Framer Motion, Vaul (drawer/overlay), React Resizable Panels  
- **Forms & Validation:** React Hook Form, Zod  
- **State & Theme:** React Context, next-themes  
- **Charts:** Recharts for engagement insights  
- **Build & Deploy:** Vercel CI/CD, GitHub Actions (optional)  
- **Other Tools:** Sonner (toasts), date-fns (formatting), cmdk (command palette)  

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+  
- pnpm or npm (project ships with pnpm lockfile)  
- Vercel account linked to your GitHub repo  
- v0.app project for AI chat integration  

### Quick Start

```bash
git clone https://github.com/DigitalHerencia/FreeTheHomie.git
cd FreeTheHomie
pnpm install
pnpm dev
```

Visit http://localhost:3000 to see the storefront running locally.

### Production Deployment

```bash
Copy code
pnpm build
pnpm start   # or deploy via Vercel CLI
vercel --prod
```

🔧 Configuration
Create a .env.local file with the following:

```bash
V0_PROJECT_ID=jb9UThzEonh
NEXT_PUBLIC_SITE_URL=https://your-vercel-deployment.vercel.app
```

# Optional analytics / custom config
You can override colors, fonts, and layout via tailwind.config.ts and components.json.

📖 How It Works

1. Design chat flows in v0.app visual builder
2. Push changes → repo auto-syncs → Vercel deploys latest build
3. Users interact with your AI-powered chat + storefront
4. Engagement data can be visualized with built-in analytics components

🤝 Contributing

Contributions welcome!
  - Branch Naming: feature/<feature>, fix/<issue>
  - Commit Style: Conventional commits (feat:, fix:, docs:)
  - Testing: Manual and automated tests before PR submission

📝 License

MIT License – see LICENSE for details.

<p align="center"> <b>FreeTheHomie – Fund the Movement. Deploy the Future. 🗣️✨</b> </p> 
