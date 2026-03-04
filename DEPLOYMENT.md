# Grabthar's Hammer Website - Deployment Guide

## 🎸 What's Been Built

A fully functional multi-page website for Grabthar's Hammer featuring:

### Pages
- **Home/About** - Hero section, band bio, member overview, and call-to-action
- **Shows** - Upcoming and past performance listings with booking CTA
- **Gallery** - Media gallery with placeholders for photos and videos
- **Contact** - Contact information and mailto links for bookings

### Features
- ✅ Retro 90s aesthetic with custom color palette
- ✅ Responsive design (mobile-friendly)
- ✅ Social media links (Facebook, Instagram, YouTube)
- ✅ Sticky navigation header
- ✅ Smooth page transitions
- ✅ Custom favicon and metadata
- ✅ Configured for GitHub Pages deployment

### Color Palette
- Deep Purple: `#2a1143`
- Medium Purple: `#9853a1`
- Blue-Gray: `#7c8197`
- Coral: `#f37b70`
- Peach: `#fab383`
- Light Gray-Blue: `#b3b3c6`

## 🚀 Deploying to GitHub Pages

### Prerequisites
1. Create a GitHub repository named `GHammer` (case sensitive)
2. Initialize git in this directory if not already done:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Grabthar's Hammer website"
   ```

### Deploy Steps

1. **Link to your GitHub repository:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/GHammer.git
   git branch -M main
   git push -u origin main
   ```

2. **Deploy to GitHub Pages:**
   ```bash
   npm run deploy
   ```

3. **Enable GitHub Pages:**
   - Go to your repository settings on GitHub
   - Navigate to "Pages" section
   - Source should automatically be set to `gh-pages` branch
   - Your site will be live at: `https://YOUR_USERNAME.github.io/GHammer/`

## 🔧 Development

### Run locally:
```bash
npm run dev
```
Visit: `http://localhost:5173/GHammer/`

### Build for production:
```bash
npm run build
```

### Preview production build:
```bash
npm run preview
```

## 📝 Customization Guide

### Update Content

1. **Band Member Info** - Edit `src/pages/Home.tsx` (member cards section)
2. **Show Dates** - Edit `src/pages/Shows.tsx` (upcomingShows and pastShows arrays)
3. **Social Media URLs** - Update in:
   - `src/components/Footer.tsx`
   - `src/pages/Gallery.tsx`
   - `src/pages/Contact.tsx`
4. **Contact Email** - Update `grabtharshammernc@gmail.com` in `src/pages/Contact.tsx`

### Add Real Media

1. **Photos** - Add images to `public/` folder and update `src/pages/Gallery.tsx`
2. **Videos** - Embed YouTube videos in Gallery page
3. **Replace placeholders** - Update the galleryItems array with real content

### Change Repository Name

If you want to use a different repository name:
1. Update `base` in `vite.config.ts`
2. Update `basename` in `src/main.tsx`
3. Redeploy

## 📱 Mobile Responsive

All pages are fully responsive with breakpoints at:
- Desktop: 1024px+
- Tablet: 768px - 1023px
- Mobile: < 768px

## 🎨 Style Customization

- **Colors**: Edit `src/styles/theme.ts`
- **Fonts**: Change font families in component CSS files
- **Global styles**: Edit `src/index.css`

## 🔗 Important Files

- `vite.config.ts` - Vite configuration (GitHub Pages base path)
- `src/main.tsx` - Router configuration with basename
- `index.html` - Meta tags and favicon
- `package.json` - Deployment scripts

## 📦 Technologies Used

- React 19
- TypeScript
- React Router v7
- Vite 8
- CSS3 (custom styling)
- gh-pages (deployment)

---

**Ready to deploy?** Run `npm run deploy` and your site will be live! 🎸🔥
