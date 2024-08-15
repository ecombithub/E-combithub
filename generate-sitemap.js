const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

const urls = [
  { url: 'https://ecombithub.com/', changefreq: 'daily', priority: 1.0 },
  { url: 'https://ecombithub.com/blog', changefreq: 'daily', priority: 0.8 },
  { url: 'https://ecombithub.com/about', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://ecombithub.com/contact', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://ecombithub.com/build', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://ecombithub.com/design', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://ecombithub.com/migration', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://ecombithub.com/app', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://ecombithub.com/store', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://ecombithub.com/speed', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://ecombithub.com/seo', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://ecombithub.com/meg', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://ecombithub.com/terms-and-conditions', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://ecombithub.com/privacy-policy', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://ecombithub.com/shopify/app/build', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://ecombithub.com/shopify/app/api-key', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://ecombithub.com/shopify/app/cancel-subscription', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://ecombithub.com/shopify/subscription-cancel', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://ecombithub.com/shopify/app/publish', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://ecombithub.com/shopify/app/choose-right', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://ecombithub.com/shopify/store-convert-to-mobile-app', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://ecombithub.com/shopify/app/promote', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://ecombithub.com/shopify/app/hire-developer', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://ecombithub.com/shopify/app/install', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://ecombithub.com/shopify/app/marketing-plan', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://ecombithub.com/shopify-store-affiliate-program', changefreq: 'monthly', priority: 0.8 },
  { url: 'https://ecombithub.com/shopify/app/reviews', changefreq: 'monthly', priority: 0.8 },
];


const sitemapStream = new SitemapStream({ hostname: 'https://ecombithub.com' });


const readableStream = Readable.from(urls);


readableStream.pipe(sitemapStream);


streamToPromise(sitemapStream).then((sitemapContent) => {

  fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapContent);
  console.log('Sitemap created successfully!');
});
