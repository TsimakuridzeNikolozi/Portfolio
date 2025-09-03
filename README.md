# 🚀 Nikolozi Tsimakuridze - Portfolio

A modern, interactive portfolio website showcasing my journey as a Full-Stack Web3 Developer. Built with cutting-edge technologies and featuring 3D animations, smooth transitions, and responsive design.

## ✨ Features

### 🎨 3D Elements

- **Animated 3D Character**: Low-poly character working at a laptop with smooth animations
- **Interactive Globe**: 3D world map with animated arcs and connection points
- **Dynamic Lighting**: Lighting setup with ambient and directional lights

### 🌟 Modern UI/UX

- **Smooth Animations**: GSAP-powered scroll-triggered animations
- **Gradient Effects**: Beautiful gradient text and backgrounds
- **Glass Morphism**: Modern frosted glass effects throughout the interface

### 📱 Portfolio Sections

- **Hero Section**: Animated introduction with 3D character
- **Work Experience**: Professional journey with detailed descriptions
- **Education & Certifications**: Academic achievements and certifications
- **Technical Skills**: Interactive skill showcase with technology logos
- **Testimonials**: Client and colleague recommendations
- **Contact Form**: Functional contact form with EmailJS integration

### ⚡ Performance Optimizations

- **Code Splitting**: Optimized bundle sizes with manual chunks
- **Asset Optimization**: Compressed images and optimized 3D models
- **Gzip/Brotli Compression**: Reduced file sizes for faster loading

## 🛠️ Tech Stack

### Frontend Framework

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server

### 3D Graphics & Animation

- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers and abstractions
- **three-globe** - Interactive 3D globe component
- **GSAP** - Professional animation library
- **@gsap/react** - React integration for GSAP

### Styling & UI

- **Tailwind CSS 4** - Utility-first CSS framework
- **@tailwindcss/vite** - Vite plugin for Tailwind
- **Clsx & Tailwind Merge** - Conditional class management
- **Motion** - Animation library

### Additional Features

- **EmailJS** - Contact form functionality
- **React Hot Toast** - Beautiful toast notifications
- **React Responsive** - Responsive breakpoint management
- **File Saver** - Resume download functionality

### Development Tools

- **ESLint** - Code linting with TypeScript support
- **Prettier** - Code formatting
- **Terser** - JavaScript minification
- **Wrangler** - Cloudflare Workers deployment

## 📁 Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── models/         # 3D model components
│   │   └── hero_models/# Hero section 3D models
│   ├── reusable/       # Generic reusable components
│   └── [sections]/     # Section-specific components
├── sections/           # Main portfolio sections
├── constants/          # Application constants
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── providers/          # Context providers
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── data/               # Static data files
```

## 🔧 Available Scripts

| Script                   | Description                     |
| ------------------------ | ------------------------------- |
| `npm run dev`            | Start development server        |
| `npm run build`          | Build for production            |
| `npm run preview`        | Preview production build        |
| `npm run lint`           | Run ESLint                      |
| `npm run lint:fix`       | Fix ESLint issues               |
| `npm run format`         | Format code with Prettier       |
| `npm run format:check`   | Check code formatting           |
| `npm run preview:worker` | Preview with Cloudflare Workers |
| `npm run deploy:worker`  | Deploy to Cloudflare Workers    |

## 🌐 Deployment

### Cloudflare Workers (Current Setup)

The project is configured for deployment on Cloudflare Workers:

```bash
npm run deploy:worker
```

### Other Platforms

The built files in `/dist` can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3

### Models Used

- **Working Character**: Low-poly animated character (CC-BY-4.0 license)
  - Source: Sketchfab by Agor_2012
  - Features: Typing animation, professional workspace setup

### Asset Optimization

- WebP images for better compression
- Compressed 3D models (.glb format)
- SVG icons for crisp scaling
- Optimized font loading

## 🔮 Performance Features

### Build Optimizations

- **Manual Chunks**: Separate bundles for Three.js and GSAP
- **Tree Shaking**: Unused code elimination
- **Minification**: Terser with console removal
- **Compression**: Gzip and Brotli compression

### Runtime Optimizations

- **Memoization**: React.memo for expensive components
- **Asset Preloading**: Critical assets preloaded
- **Debounced Events**: Optimized scroll and resize handlers

## 🎯 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
