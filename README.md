
# OURYX Next.js Landing Page

This is a Next.js project implementing the Figma design for OURYX, a high-end fintech trading platform.

## Features

- **Responsive Design**: Mobile-first approach using Tailwind CSS.
- **Animations**: Smooth transitions and effects using Framer Motion.
- **Modern UI**: Custom color palette (Gold/Deep Navy) and typography (Poppins).
- **Components included**:
  - `Navbar`: Responsive navigation with mobile menu.
  - `Hero`: Hero section with animated text and stats.
  - `InvestYourWay`: Tabbed interface for asset classes.
  - `TradeWithoutLimits`: Feature showcase for trading platforms.
  - `WhyWeAreDifferent`: Grid layout for key selling points.
  - `MarketAnalysis`: Cards for economic tools and news.
  - `Footer`: Comprehensive footer with links and risk warning.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/globals.css`: Global styles and Tailwind imports.
- `app/layout.tsx`: Root layout with font configuration.
- `app/page.tsx`: Main landing page assembling all components.
- `components/`: Reusable UI components.
- `tailwind.config.ts`: Custom Tailwind configuration with brand colors.

## Customization

You can customize the colors and fonts in `tailwind.config.ts` and `app/globals.css`.
To replace the placeholder images/icons, update the `lucide-react` icons in the components or add your own images to `public/` and use `next/image`.
