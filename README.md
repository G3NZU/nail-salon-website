# The Goddess Of Nails 💅

A modern, elegant website for a professional nail salon business. This static website showcases services, gallery, and contact information with bilingual support (English/Spanish).

## 🌟 Features

- **Bilingual Support**: Seamlessly switch between English and Spanish
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices
- **Modern UI**: Clean and professional design with custom color scheme
- **Service Showcase**: Display of available nail care services
- **Gallery Section**: Visual portfolio of nail art and services
- **Contact Information**: Easy access to business contact details
- **Custom Fonts**: Professional typography using Google Fonts (Adamina & Castoro Titling)

## 🚀 Technologies Used

This is a modern static website built with the following technologies:

- **[Next.js 14](https://nextjs.org/)** - React framework for production
- **[React 18](https://react.dev/)** - JavaScript library for building user interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[PostCSS](https://postcss.org/)** - CSS transformation tool
- **[Vercel](https://vercel.com/)** - Deployment platform (Live in production)

### Project Structure

```
nail-salon-website/
├── app/                  # Next.js App Router
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout with fonts
│   └── page.tsx         # Main page component
├── components/          # React components
│   ├── Header.tsx       # Header with language switcher
│   ├── Welcome.tsx      # Welcome/Hero section
│   ├── Services.tsx     # Services section
│   ├── Gallery.tsx      # Gallery section
│   └── Contact.tsx      # Contact section
├── public/              # Static assets
│   ├── logo.png
│   ├── flag-es.svg
│   └── flag-uk.svg
└── Configuration files
```

## 📋 Prerequisites

Before you begin, ensure you have installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nail-salon-website
```

2. Install dependencies:
```bash
npm install
```

## 💻 Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

The page will auto-update as you edit files.

## 🏗️ Build

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 🧹 Linting

Run the linter to check code quality:

```bash
npm run lint
```

## 🌐 Deployment

This project is deployed on **Vercel**, providing:
- Automatic deployments from Git
- Global CDN for fast loading times
- Serverless functions support
- Built-in analytics

To deploy your own instance:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Import the project in [Vercel](https://vercel.com/new)
3. Vercel will automatically detect Next.js and configure the build settings
4. Your site will be deployed and receive a production URL

## 📱 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## 🎨 Customization

### Colors

The project uses custom colors defined in `tailwind.config.ts`:
- **Primary**: `#d946a6` (Pink)
- **Secondary**: `#f97316` (Orange)

### Fonts

Custom Google Fonts are configured in `app/layout.tsx`:
- **Adamina** - Primary font
- **Castoro Titling** - Decorative font

## 📄 License

This project is private and created for a specific nail salon business. (This repo is a public copy)

## 🙏 Acknowledgments

- Built with modern web technologies for optimal performance
- Designed for user experience and accessibility
- Optimized for search engines (SEO)
