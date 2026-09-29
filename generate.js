const fs = require('fs');
const brands = ["faber","elica","kaff","glen","hindware","cata","gilma","hafele","siemens","smeg"];
const areas = ["sector-50-noida","sector-18-noida","vaishali","indirapuram","vasundhara","greater-noida-west"];
let html = fs.readFileSync('index.html','utf8');

for (const b of brands) {
  for (const a of areas) {
    const prettyBrand = b.charAt(0).toUpperCase() + b.slice(1);
    const prettyBrandUpper = b.toUpperCase();
    const prettyArea = a.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const dir = `${b}-chimney-service-${a}`;
    fs.mkdirSync(dir, {recursive:true});
    let newHtml = html;

    // Top black bar
    newHtml = newHtml.replace(/VAISHALI • FABER EXPERT|Noida Ghaziabad • Chimney Expert/gi, `${prettyArea.toUpperCase()} • ${prettyBrandUpper} EXPERT`);

    // Header logo - CHIMNEY EXPERT ki jagah FABER EXPERT
    newHtml = newHtml.replace(/>CHIMNEY<\/span>/gi, `>${prettyBrandUpper}</span>`);
    newHtml = newHtml.replace(/CHIMNEY\s*EXPERT/g, `${prettyBrandUpper} EXPERT`);

    // Main heading
    newHtml = newHtml.replace(/Faber Chimney Service in Vaishali|Chimney service repair not working solve in Noida Ghaziabad/gi, `${prettyBrand} Chimney Service in ${prettyArea}`);

    // 15 YEARS EXPERIENCE wala
    newHtml = newHtml.replace(/15 YEARS EXPERIENCE IN NOIDA GHAZIABAD/gi, `15 YEARS EXPERIENCE IN ${prettyArea.toUpperCase()} FOR ${prettyBrandUpper}`);

    // Card 01, 02, 03 pe Faber lagana
    newHtml = newHtml.replace(/>Chimney Deep Cleaning</g, `>${prettyBrand} Chimney Deep Cleaning<`);
    newHtml = newHtml.replace(/>Chimney Not Working</g, `>${prettyBrand} Chimney Not Working<`);
    newHtml = newHtml.replace(/>Chimney Noise Problem</g, `>${prettyBrand} Chimney Noise Problem<`);
    newHtml = newHtml.replace(/>Chimney Filter Cleaning</g, `>${prettyBrand} Chimney Filter Cleaning<`);
    
    // Saare brands ki list hata ke sirf ek brand
    newHtml = newHtml.replace(/Faber, Elica, Kaff, Glen, Hindware, Cata, Gilma, Hafele, Siemens, Smeg, Carysil/gi, prettyBrand);
    newHtml = newHtml.replace(/including Faber/gi, `including ${prettyBrand}`);

    fs.writeFileSync(dir + "/index.html", newHtml);
  }
}
