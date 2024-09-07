const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');


const urls = [
  { url: '/', title: 'Home' },
  { url: '/blog', title: 'Blog - ecombithub' },
  { url: '/about', title: 'About Us' },
  { url: '/contact', title: 'Contact Us' },
  { url: '/app', title: 'App' },
  { url: '/terms-and-conditions', title: 'Terms and Conditions' },
  { url: '/privacy-policy', title: 'Privacy Policy' },
  { url: '/shopify/app/build', title: 'Shopify App Build' },
  { url: '/shopify/app/api-key', title: 'Shopify App API Key' },
  { url: '/shopify/app/cancel-subscription', title: 'Shopify App Cancel Subscription' },
  { url: '/shopify/subscription-cancel', title: 'Shopify Subscription Cancel' },
  { url: '/shopify/app/publish', title: 'Shopify App Publish' },
  { url: '/shopify/app/choose-right', title: 'Shopify App Choose Right' },
  { url: '/shopify/store-convert-to-mobile-app', title: 'Shopify Store Convert to Mobile App' },
  { url: '/shopify/app/hire-developer', title: 'Shopify App Hire Developer' },
  { url: '/shopify/app/install', title: 'Shopify App Install' },
  { url: '/shopify/app/marketing-plan', title: 'Shopify App Marketing Plan' },
];

const sitemapStream = new SitemapStream({ hostname: 'https://ecombithub.com' });
const readableStream = Readable.from(urls.map(({ url }) => ({ url })));

readableStream.pipe(sitemapStream);

streamToPromise(sitemapStream)
  .then((sitemapContent) => {
    fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapContent);
    console.log('Sitemap created successfully!');
  })
  .catch((error) => {
    console.error('Error creating sitemap:', error);
  });

// Create JSON file with titles
const urlsWithTitles = urls.map(({ url, title }) => ({ url, title }));
fs.writeFileSync(path.join(__dirname, 'public', 'urls-with-titles.json'), JSON.stringify(urlsWithTitles, null, 2));
console.log('URLs with titles created successfully!');












// const fs = require('fs');
// const path = require('path');
// const { SitemapStream, streamToPromise } = require('sitemap');
// const { Readable } = require('stream');

// const urls = [
//   { url: '/' },
//   { url: '/blog' },
//   { url: '/about' },
//   { url: '/contact' },
//   { url: '/app' },
//   { url: '/terms-and-conditions' },
//   { url: '/privacy-policy' },
//   { url: '/shopify/app/build' },
//   { url: '/shopify/app/api-key' },
//   { url: '/shopify/app/cancel-subscription' },
//   { url: '/shopify/subscription-cancel' },
//   { url: '/shopify/app/publish' },
//   { url: '/shopify/app/choose-right' },
//   { url: '/shopify/store-convert-to-mobile-app' },
//   { url: '/shopify/app/hire-developer' },
//   { url: '/shopify/app/install' },
//   { url: '/shopify/app/marketing-plan' },
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



// // const fs = require('fs');
// // const path = require('path');
// // const { SitemapStream, streamToPromise } = require('sitemap');
// // const { Readable } = require('stream');

// // const urls = [
// //   { url: '/'},
// //   { url: '/blog' },
// //   { url: '/about' },
// //   { url: '/contact' },
// //   { url: '/app' },
// //   { url: '/terms-and-conditions' },
// //   { url: '/privacy-policy' },
// //   { url: '/shopify/app/:handle' },
// //   { url: '/shopify/:handle' },
// // ];

// // const sitemapStream = new SitemapStream({ hostname: 'https://ecombithub.com' });
// // const readableStream = Readable.from(urls);

// // readableStream.pipe(sitemapStream);

// // streamToPromise(sitemapStream)
// //   .then((sitemapContent) => {
// //     fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemapContent);
// //     console.log('Sitemap created successfully!');
// //   })
// //   .catch((error) => {
// //     console.error('Error creating sitemap:', error);
// //   });
