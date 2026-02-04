# 🚀 Deployment Instructions

## GitHub Setup

1. **Push to GitHub Repository**:
   ```bash
   # If you haven't already, authenticate with GitHub
   git remote set-url origin https://github.com/sailendrakondapalli/valentine.git
   git push -u origin master
   ```

2. **Alternative: Manual Upload**:
   - Go to https://github.com/sailendrakondapalli/valentine
   - Click "uploading an existing file"
   - Drag and drop the entire valentine-website folder contents

## Vercel Deployment

### Option 1: Direct GitHub Integration (Recommended)

1. **Go to Vercel**: https://vercel.com
2. **Sign in** with your GitHub account
3. **Import Project**: Click "New Project"
4. **Select Repository**: Choose `sailendrakondapalli/valentine`
5. **Configure**:
   - Framework Preset: `Create React App`
   - Root Directory: `./` (if you uploaded the contents directly)
   - Build Command: `npm run build`
   - Output Directory: `build`
6. **Deploy**: Click "Deploy"

### Option 2: Manual Upload

1. **Build the project locally**:
   ```bash
   npm run build
   ```
2. **Upload build folder** to Vercel manually

## Environment Variables (if needed)

No environment variables required for this static site.

## Custom Domain (Optional)

After deployment, you can add a custom domain in Vercel settings.

## 🎯 Expected Result

Your Valentine's website will be live at:
- `https://valentine-[random-id].vercel.app`
- Or your custom domain

## 📱 Features That Will Work

✅ All pages and navigation
✅ Animations and effects
✅ Image gallery (with your uploaded photos)
✅ Mobile responsive design
✅ Floating hearts and confetti
✅ Typewriter effect in love letter

## 🔧 Troubleshooting

If images don't show after deployment:
1. Check that images are in `public/images/` folder
2. Verify paths in `src/data/content.js` start with `/images/`
3. Clear browser cache and refresh

## 💡 Post-Deployment Customization

After deployment, you can:
1. Update content in `src/data/content.js`
2. Add more photos to `public/images/`
3. Customize colors and styling
4. Add more pages or features

Happy Valentine's Day! 💕