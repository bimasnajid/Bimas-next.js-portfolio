const { SitemapStream, streamToPromise } = require("sitemap");
const { createGzip } = require("zlib");
const fs = require("fs");
const path = require("path");

async function generateSitemap() {
  const sitemap = new SitemapStream({
    hostname: "http://localhost:3000/", // Ganti dengan URL basis situs Anda
  });

  // Tambahkan URL ke sitemap
  sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
  sitemap.write({ url: "/about", changefreq: "daily", priority: 0.9 });
  sitemap.write({ url: "/projects", changefreq: "daily", priority: 0.9 });
  sitemap.write({
    url: "/projects/archive",
    changefreq: "daily",
    priority: 0.7,
  });

  sitemap.end();

  const sitemapXML = await streamToPromise(sitemap);

  // Kompresi sitemapXML
  const gzippedSitemap = createGzip();
  const sitemapStream = fs.createWriteStream(
    path.join(__dirname, "./public/sitemap.xml.gz")
  );

  // Pipa sitemapXML ke gzip dan kemudian ke file
  sitemapXML.pipe(gzippedSitemap).pipe(sitemapStream);

  console.log("Sitemap telah dibuat dan dikompresi.");
}

generateSitemap();
