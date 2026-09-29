const fs = require('fs');
const brands = ["faber","elica","kaff","glen","hindware","cata","gilma","hafele","siemens","smeg"];
const areas = ["sector-50-noida","sector-18-noida","vaishali","indirapuram","vasundhara","greater-noida-west"];
let html = fs.readFileSync('index.html','utf8');

for (const b of brands) {
  for (const a of areas) {
    const prettyBrand = b.charAt(0).toUpperCase() + b.slice(1);
    const upperBrand = b.toUpperCase();
    const prettyArea = a.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const dir = `${b}-chimney-service-${a}`;
    fs.mkdirSync(dir, {recursive:true});
    let newHtml = html;

    // 1. LOGO - CHIMNEY EXPERT ki jagah FABER EXPERT - Ye tera main point hai
    newHtml = newHtml.replace(/CHIMNEY EXPERT/g, `${upperBrand} EXPERT`);
    newHtml = newHtml.replace(/>CHIMNEY</g, `>${upperBrand}<`);
    newHtml = newHtml.replace(/CHIMNEY\s*<\/span>/g, `${upperBrand}</span>`);

    // 2. Baki sab jagah
    newHtml = newHtml.replace(/Chimney service repair not working solve in Noida Ghaziabad/gi, `${prettyBrand} Chimney Service in ${prettyArea}`);
    newHtml = newHtml.replace(/Faber Chimney Service in Vaishali/gi, `${prettyBrand} Chimney Service in ${prettyArea}`);
    newHtml = newHtml.replace(/15 YEARS EXPERIENCE IN NOIDA GHAZIABAD/gi, `15 YEARS EXPERIENCE IN ${prettyArea.toUpperCase()} FOR ${upperBrand}`);
    newHtml = newHtml.replace(/NOIDA GHAZIABAD/g, `${prettyArea.toUpperCase()}`);

    // 3. Cards pe Faber
    newHtml = newHtml.replace(/Chimney Deep Cleaning/g, `${prettyBrand} Chimney Deep Cleaning`);
    newHtml = newHtml.replace(/Chimney Not Working/g, `${prettyBrand} Chimney Not Working`);
    newHtml = newHtml.replace(/Chimney Noise Problem/g, `${prettyBrand} Chimney Noise Problem`);

    // 4. Brand list hatao
    newHtml = newHtml.replace(/Faber, Elica, Kaff, Glen, Hindware, Cata, Gilma, Hafele, Siemens, Smeg, Carysil/gi, prettyBrand);

    fs.writeFileSync(dir + "/index.html", newHtml);
  }
}
