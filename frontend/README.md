# Swiss Padel Stars - Static Deployment

This repository contains the frontend application for Swiss Padel Stars, configured for static deployment to GitHub Pages.

## ✨ Features

- **Static Frontend**: All pages work without backend dependencies
- **Mock Data**: Uses static mock data instead of API calls
- **GitHub Pages Ready**: Optimized for free deployment
- **Responsive Design**: Works on all device sizes
- **Modern Tech Stack**: React + TypeScript + Vite + Tailwind CSS

## 🚀 Quick Deployment to GitHub Pages

### Option 1: Automatic Deployment (Recommended)

1. **Fork/Clone this repository**
2. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"
3. **Push to main branch** - The site will auto-deploy via GitHub Actions
4. **Access your site** at `https://yourusername.github.io/your-repo-name`

### Option 2: Manual Deployment

1. **Install dependencies**:
   ```bash
   cd frontend
   npm install
   ```

2. **Build for production**:
   ```bash
   npm run build
   ```

3. **Deploy the `dist` folder** to your hosting service

## 🛠 Local Development

```bash
# Install dependencies
cd frontend
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📝 Configuration

### Environment Variables

Create `.env.local` for local development:
```env
VITE_STATIC_DEPLOYMENT=false  # Enables admin features locally
```

For production (GitHub Pages), the app automatically uses static mode.

### Repository Name Configuration

If your repository name is not the domain root, update `.env.production`:
```env
VITE_BASE_URL=/your-repo-name/
```

## 📂 Project Structure

```
frontend/
├── src/
│   ├── pages/           # Main application pages
│   ├── components/      # Reusable components
│   ├── layout/          # Layout components
│   ├── data/            # Mock data for static deployment
│   ├── assets/          # Images and static files
│   └── admin/           # Admin panel (disabled in static mode)
├── public/              # Public assets
├── .github/workflows/   # GitHub Actions for deployment
└── dist/                # Built files (generated)
```

## 🎯 Static Mode Features

When deployed statically:
- ✅ All public pages work perfectly
- ✅ Contact form shows confirmation (doesn't actually send)
- ✅ All images and content display correctly
- ✅ Responsive design and animations
- ❌ Admin panel is disabled
- ❌ Real form submissions (shows mock success)
- ❌ User authentication

## 🎨 Customization

### Adding Content

1. **Events**: Edit `src/data/mockData.ts` → `mockEvents`
2. **Gallery**: Edit `src/data/mockData.ts` → `mockGalleryItems`
3. **Sponsors**: Edit `src/data/mockData.ts` → `mockSponsors`
4. **Images**: Add to `src/assets/images/` and update imports

### Styling

- Uses Tailwind CSS for styling
- Custom styles in component files
- Global styles in `src/index.css`

## 🔧 Troubleshooting

### Build Issues
- Ensure all images are in `src/assets/images/`
- Check import paths are correct
- Run `npm install` if dependencies are missing

### Deployment Issues
- Verify GitHub Pages is enabled
- Check repository name matches base URL
- Ensure GitHub Actions have proper permissions

### Routing Issues
- The app uses React Router with BrowserRouter
- GitHub Pages supports SPA routing with proper configuration

## 📧 Support

For deployment issues, check:
1. GitHub Actions logs in the "Actions" tab
2. Browser console for JavaScript errors
3. Network tab for failed resource loads

## 🚀 Performance

The static build is optimized with:
- Code splitting
- Image optimization
- CSS minification
- Tree shaking
- Lazy loading for admin components

Your site should load quickly and work offline after first visit!
