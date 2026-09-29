const fs = require('fs');
const brands = ["faber","elica","kaff","glen","hindware","cata","gilma","hafele","siemens","smeg"];
const areas = ["sector-50-noida","sector-18-noida","vaishali","indirapuram","vasundhara","greater-noida-west"];
let html = fs.readFileSync('index.html','utf8');

for (const b of brands) {
 for (const a of areas) {
  const prettyBrand = b.charAt(0).toUpperCase() + b.slice(1);
  const prettyArea = a.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const dir = `${b}-chimney-service-${a}`;
  fs.mkdirSync(dir, {recursive:true});
  let newHtml = html
    .replace(/Chimney service repair not working solve in Noida Ghaziabad/g, `${prettyBrand} Chimney Service in ${prettyArea}`)
    .replace(/NOIDA GHAZIABAD/g, prettyArea.toUpperCase());
  fs.writeFileSync(dir + "/index.html", newHtml);
 }
}
