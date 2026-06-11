# SAMYUKT — Enterprise Technology & Digital Assets

Visit Here:- https://samyukt.vercel.app/

Empowering enterprises with modern technology solutions. 

Samyukt is a technology company dedicated to transforming how modern organizations operate. We build custom software tools, refactor legacy databases, automate repetitive workflows, and curate professional video media assets (through Samyukt Studios) to help businesses, startups, and government agencies operate with peak efficiency.

This repository hosts the **Samyukt Landing Page and Interactive Client Portal**, featuring custom branding, dynamic pricing utilities, and responsive design systems.

---

## 💎 Features Implemented

1. **Interactive Entry Sequence**: A custom geometric logo loader (`Loader.tsx`) with percentage status metrics validating secure page compilation.
2. **Interactive Canvas Particles**: A responsive HTML5 canvas particle background in the Hero section (`Hero.tsx`) that acts as an ambient nodes network reacting to mouse movements and hover coordinates.
3. **The Samyukt Method Flow**: An interactive click-to-transition 4-stage onboarding sequence (`Flow.tsx`) mapping how legacy workflows transition into cloud-ready automated models.
4. **Capabilities Metrics Grid**: A 6-column glassmorphic capabilities card grid (`Features.tsx`) complete with neon hover accents, technical icons, and core corporate metrics (e.g. +24% efficiency, 99.9% uptime, 10M+ daily API requests).
5. **Services Matrix**: A clean grid of available programs (`Services.tsx`) like Web Development (starting at $149) and Samyukt Studios alongside disabled "coming soon" enterprise modules (Consulting, Migration, custom API development).
6. **Studios Reel Subscription Slider**: A tabbed subscription calculator (`Pricing.tsx`) with a range slider allowing companies to choose monthly reels retention retainers ($20 per reel: 10 reels $200 / 20 reels $400 / 30 reels $600) with responsive feature check lists.
7. **Transition Accordion FAQs**: Collapsible FAQ answers (`FAQ.tsx`) solving data security, migration checksums, and scoping requests.
8. **Giant Footer Panels**: Vectr-inspired large-type bottom navigation panels (`Footer.tsx`) featuring hover translations and sliding vector arrow animations.

---

## 🛠️ Technology Stack

- **Core**: [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Styling**: Vanilla CSS Variables (Design tokens supporting Dark & Light mode toggling)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom Inline SVGs
- **Fonts**: Google Fonts (`Outfit` for headers, `Plus Jakarta Sans` for interface text)

---

## 📁 Repository Structure

```text
SAMYUKT/
├── public/                # Static assets and site icons
├── src/
│   ├── assets/            # Local asset folder
│   ├── components/        # Sub-modules
│   │   ├── FAQ.tsx        # Accordion questions
│   │   ├── Features.tsx   # Capabilities grid
│   │   ├── Flow.tsx       # Onboarding flow
│   │   ├── Footer.tsx     # Large link panels
│   │   ├── Header.tsx     # Sticky navigation & Theme toggle
│   │   ├── Hero.tsx       # Canvas animated banner
│   │   ├── Loader.tsx     # Custom intro screen
│   │   ├── Pricing.tsx    # Reel calculator & Web dev tabs
│   │   └── Services.tsx   # Available & roadmap items
│   ├── App.tsx            # Main layout container
│   ├── index.css          # Core design system & theme variables
│   └── main.tsx           # Entry React client mounting
├── index.html             # SEO meta-tags & page title
├── package.json           # Scripts & modules
└── tsconfig.json          # TypeScript build rules
```

---

## 🚀 Getting Started

To launch the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/prabhat-joshi-official/Samyukt.git
   cd Samyukt
   ```

2. **Install node dependencies**:
   ```bash
   npm install
   ```

3. **Expose development server**:
   ```bash
   npm run dev
   ```
   *The page will be live on [http://localhost:5173/](http://localhost:5173/).*

4. **Verify production bundle**:
   Ensure the TypeScript compilation and CSS assets bundle successfully with zero errors:
   ```bash
   npm run build
   ```
