# Om Shala

Sound healing experiences, brought online. Om Shala offers guided sound bath sessions — public, private, online, and on-site — and this is the marketing site where people learn about the practice, meet the facilitator, and book a session.

**Live site:** [omshala.vercel.app](https://omshala.vercel.app)

## Overview

Built as a fast, animation-forward single-page marketing site with a warm, editorial visual language (Cormorant Garamond + Inter, ambient background effects, scroll-driven reveals) rather than a generic template feel.

**Pages**
- `/` — Home
- `/events/public` — Public sound bath sessions
- `/events/private` — Private / corporate sessions
- `/contact` — Contact

## Tech stack

- **Vite** + **React** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** for components
- **Framer Motion** for page transitions and scroll reveals
- **React Router** for routing
- **TanStack Query** for data fetching
- **Supabase** for backend/data
- Deployed on **Vercel**

## Getting started

Requires Node.js and npm ([install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)).

\`\`\`sh
# Clone the repository
git clone https://github.com/aayush0818/omshala.git
cd omshala

# Install dependencies
npm install

# Copy env template and fill in your Supabase project details
cp .env.example .env

# Start the dev server
npm run dev
\`\`\`

The app runs at `http://localhost:8080` by default.

## Environment variables

Create a `.env` file (see `.env.example`) with:

\`\`\`
VITE_SUPABASE_PROJECT_ID="your-project-id"
VITE_SUPABASE_PUBLISHABLE_KEY="your-publishable-key"
VITE_SUPABASE_URL
