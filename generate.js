const fs = require('fs');

// Purane galat folders delete karo
const files = fs.readdirSync('.');
files.forEach(f => {
  if (f.includes('chimney-service') && fs.lstatSync(f).isDirectory()) {
    fs.rmSync(f, { recursive: true, force: true });
    console.log('Deleted folder: ' + f);
  }
});

const brands = ["cata","elica","faber","gilma","glen","hafele","hindware","kaff","siemens","smeg"];
const areas = ["greater-noida","indirapuram","sector-18-noida","sector-50-noida","vaishali","vasundhara"];

brands.forEach(brand => {
  areas.forEach(area => {
    const fileName = `${brand}-chimney-service-${area}.html`;
    const prettyArea = area.replace(/-/g, ' ').replace(/\b\w/g, l=>l.toUpperCase());
    const prettyBrand = brand.charAt(0).toUpperCase() + brand.slice(1);
    const html = `<!DOCTYPE html><html><head><title>${prettyBrand} Chimney Service in ${prettyArea}</title><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{font-family:Arial;max-width:800px;margin:0 auto;padding:20px}h1{color:#d32f2f}.cta{background:#d32f2f;color:white;padding:12px 20px;text-decoration:none;border-radius:5px;display:inline-block}</style></head><body><h1>${prettyBrand} Chimney Service in ${prettyArea}</h1><p>Expert ${prettyBrand} chimney repair & service in ${prettyArea}.</p><a href="tel:9876543210" class="cta">Call 9876543210</a><p><a href="/index.html">Back to Home</a></p></body></html>`;
    fs.writeFileSync(fileName, html);
    console.log('Created FILE: ' + fileName);
  });
});
