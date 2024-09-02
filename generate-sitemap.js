const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

const urls = [
  { url: '/' },
  { url: '/blog' },
  { url: '/about' },
  { url: '/contact' },
  { url: '/app' },
  { url: '/terms-and-conditions' },
  { url: '/privacy-policy' },
  { url: '/shopify/app/build' },
  { url: '/shopify/app/api-key' },
  { url: '/shopify/app/cancel-subscription' },
  { url: '/shopify/subscription-cancel' },
  { url: '/shopify/app/publish' },
  { url: '/shopify/app/choose-right' },
  { url: '/shopify/store-convert-to-mobile-app' },
  { url: '/shopify/app/hire-developer' },
  { url: '/shopify/app/install' },
  { url: '/shopify/app/marketing-plan' },
];

const sitemapStream = new SitemapStream({ hostname: 'https://ecombithub.com' });
const readableStream = Readable.from(urls);

readableStream.pipe(sitemapStream);

streamToPromise(sitemapStream)
  .then((sitemapContent) => {
    fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapContent);
    console.log('Sitemap created successfully!');
  })
  .catch((error) => {
    console.error('Error creating sitemap:', error);
  });



// const fs = require('fs');
// const path = require('path');
// const { SitemapStream, streamToPromise } = require('sitemap');
// const { Readable } = require('stream');

// const urls = [
//   { url: '/'},
//   { url: '/blog' },
//   { url: '/about' },
//   { url: '/contact' },
//   { url: '/app' },
//   { url: '/terms-and-conditions' },
//   { url: '/privacy-policy' },
//   { url: '/shopify/app/:handle' },
//   { url: '/shopify/:handle' },
// ];

// const sitemapStream = new SitemapStream({ hostname: 'https://ecombithub.com' });
// const readableStream = Readable.from(urls);

// readableStream.pipe(sitemapStream);

// streamToPromise(sitemapStream)
//   .then((sitemapContent) => {
//     fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapContent);
//     console.log('Sitemap created successfully!');
//   })
//   .catch((error) => {
//     console.error('Error creating sitemap:', error);
//   });
