# 💕 Valentine's Day Love Website

A beautiful, romantic website built with React to showcase your love story. Perfect for Valentine's Day or any special occasion!

## 🌟 Features

- **Romantic Design**: Soft pinks, reds, and whites with elegant animations
- **Mobile Responsive**: Looks beautiful on all devices
- **Interactive Elements**: Floating hearts, typewriter effects, confetti animations
- **Multiple Pages**:
  - Home with welcome message and love stats
  - Our Story timeline
  - Memories photo gallery
  - Special moments cards
  - Love letter with typewriter effect
  - Why I Love You list
  - Final surprise with confetti

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Open in Browser**
   Navigate to `http://localhost:3000`

## 🎨 Customization

### 1. Personal Information
Edit `src/data/content.js` to customize:
- Her name and relationship details
- Your story timeline events
- Special moments and dates
- Love letter content
- Reasons why you love her

### 2. Photos
- Add your photos to `public/images/` folder
- Update the image paths in `src/data/content.js`
- Recommended image sizes: 800x600px or similar aspect ratio

### 3. Colors & Styling
- Main colors are defined in `src/App.css`
- Each page has its own CSS file for specific styling
- Easy to modify color schemes and animations

## 📱 Pages Overview

1. **Home** (`/`) - Welcome message with floating hearts
2. **Our Story** (`/our-story`) - Timeline of your relationship
3. **Memories** (`/memories`) - Photo gallery with hover effects
4. **Special Moments** (`/special-moments`) - Important dates and events
5. **Love Letter** (`/love-letter`) - Heartfelt letter with typewriter effect
6. **Why I Love You** (`/why-i-love-you`) - List of reasons with animations
7. **Final Surprise** (`/surprise`) - Valentine's message with confetti

## 🛠️ Tech Stack

- **React** - Frontend framework
- **React Router** - Navigation
- **Framer Motion** - Animations
- **React Icons** - Icon library
- **CSS3** - Styling with gradients and animations

## 📦 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Your site is live!

### Vercel
1. Connect your GitHub repository
2. Vercel will automatically build and deploy

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/valentine-website",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy: `npm run deploy`

## 💡 Tips for Personalization

1. **Replace placeholder content** in `src/data/content.js` with your actual story
2. **Add real photos** to make the memories section meaningful
3. **Customize the love letter** to reflect your relationship
4. **Update dates and events** to match your timeline
5. **Modify colors** if you prefer different romantic themes

## 🎁 Optional Enhancements

- Add background music toggle
- Implement password protection
- Add more interactive animations
- Include video messages
- Create a guest book feature

## 📝 License

This project is open source and available under the MIT License.

## 💖 Made with Love

Created as a digital love letter template. Customize it to tell your unique love story!

---

**Happy Valentine's Day! 💕**