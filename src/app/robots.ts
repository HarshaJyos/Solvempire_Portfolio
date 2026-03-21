import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        // Specifically allow AI crawlers to index our intentional content
        userAgent: ['GPTBot', 'ChatGPT-User', 'CCBot', 'Google-Extended', 'Anthropic-Control'],
        allow: '/',
      },
      {
        userAgent: '*',
        disallow: ['/api/', '/account/', '/admin/'], // Adjust based on your sensitive routes
      },
    ],
    sitemap: 'https://solvempire.com/sitemap.xml',
  };
}
