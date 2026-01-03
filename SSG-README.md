# Portfolio - Static Site Generation (SSG) Setup

This portfolio is now configured as a **fully static site** using Next.js Static Site Generation (SSG). This means the entire site is pre-rendered at build time and can be deployed to any static hosting service without requiring a Node.js server.

## 🎯 What is SSG?

Static Site Generation (SSG) pre-renders all pages at build time, creating static HTML files. Benefits include:
- ⚡ **Blazing fast performance** - No server-side processing needed
- 💰 **Lower hosting costs** - Can be hosted on free static hosting services
- 🔒 **Better security** - No server to attack
- 📈 **Better SEO** - Content is immediately available to search engines
- 🌍 **Global CDN deployment** - Easy to distribute worldwide

## 🚀 Build & Deploy

### Build the static site:
```bash
npm run build
```

This will generate a static site in the `out` directory.

### Preview the static site locally:
```bash
npx serve@latest out
```

### Deploy to Vercel (Recommended):
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify:
1. Drag and drop the `out` folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect your GitHub repo to Netlify

### Deploy to GitHub Pages:
1. Push the `out` folder to a `gh-pages` branch
2. Enable GitHub Pages in repository settings

## 📧 Contact Form Setup (EmailJS)

Since static sites can't have API routes, the contact form uses **EmailJS** to send emails directly from the browser.

### Setup Instructions:

1. **Sign up for EmailJS**: Go to [https://www.emailjs.com/](https://www.emailjs.com/) and create a free account

2. **Create an Email Service**:
   - Go to Email Services
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions

3. **Create an Email Template**:
   - Go to Email Templates
   - Click "Create New Template"
   - Use these template variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{subject}}` - Email subject
     - `{{message}}` - Email message
     - `{{to_name}}` - Your name (MD ANAYET MIAH)

4. **Get Your Credentials**:
   - Service ID: Found in Email Services
   - Template ID: Found in Email Templates
   - Public Key: Found in Account > API Keys

5. **Configure Environment Variables**:
   - Copy `env.example` to `.env.local`
   - Add your EmailJS credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

6. **Rebuild the site**:
   ```bash
   npm run build
   ```

## 📊 GitHub Stats

GitHub statistics are now pulled from the static data in `src/lib/data.js`. Update the `githubStats` object in that file to reflect your current stats.

## 🗂️ Project Structure

```
anayet-portfolio/
├── out/                    # Generated static site (after build)
├── src/
│   ├── app/
│   │   ├── page.js        # Main page (now client component)
│   │   └── layout.js      # Root layout
│   ├── components/        # React components
│   └── lib/
│       └── data.js        # Static data source
├── next.config.mjs        # Next.js config (with output: 'export')
└── package.json
```

## ⚙️ Configuration Changes Made

1. **next.config.mjs**:
   - Added `output: 'export'` for static export
   - Added `images.unoptimized: true` (required for static export)

2. **src/app/page.js**:
   - Converted from server component to client component
   - Removed server-side GitHub API fetching
   - Now uses static data from `data.js`

3. **src/components/Contact.jsx**:
   - Replaced API route with EmailJS
   - Contact form now works in static environment

4. **Removed API routes**:
   - API routes don't work in static export
   - Contact functionality moved to EmailJS

## 🔄 Updating Content

All content is managed in `src/lib/data.js`. Update this file to change:
- Personal information
- Projects
- Skills
- Experience
- GitHub stats
- And more...

After updating, rebuild the site:
```bash
npm run build
```

## 📝 Notes

- The site is fully static and doesn't require a Node.js server
- All data is embedded at build time
- Contact form requires EmailJS configuration to work
- Images from external sources are unoptimized (trade-off for static export)

## 🎨 Development

For development, use:
```bash
npm run dev
```

This runs the Next.js development server with hot reload.

---

Built with ❤️ by MD ANAYET MIAH
