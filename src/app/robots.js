export default function robots() {
  const baseUrl = 'https://ana-yet.vercel.app';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
