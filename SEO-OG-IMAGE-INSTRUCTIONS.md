# OpenGraph Image Instructions

## Creating the OG Image

The OpenGraph image is used when your portfolio is shared on social media platforms (Facebook, Twitter, LinkedIn, etc.). 

### Requirements:
- **Size:** 1200 x 630 pixels (1.91:1 aspect ratio)
- **Format:** PNG or JPG
- **File Location:** `public/og-image.png`
- **File Size:** Keep under 300KB for faster loading

### Recommended Design Elements:
1. Your name: "MD ANAYET MIAH"
2. Your title: "MERN Stack Developer" or "Full Stack Developer"
3. Location: "Sylhet, Bangladesh" (optional)
4. Technologies: Visual representation of MERN stack logos/icons
5. Contact info or website URL (optional)
6. Use your brand colors (primary: #6366F1, secondary: #8B5CF6, accent: #EC4899)

### Tools to Create:
- **Canva**: https://www.canva.com (has OG image templates)
- **Figma**: Free design tool
- **Photoshop/GIMP**: Professional image editing
- **Online OG Image Generators**: Search "OG image generator" online

### Quick Steps:
1. Create a 1200x630px canvas
2. Add your name, title, and branding
3. Export as PNG
4. Save to `public/og-image.png`
5. Rebuild: `npm run build`

### Testing:
After creating the image, test it at:
- https://www.opengraph.xyz/
- https://developers.facebook.com/tools/debug/
- https://cards-dev.twitter.com/validator

### Note:
If you already have a logo or design, you can use that and add text overlay to create your OG image.
