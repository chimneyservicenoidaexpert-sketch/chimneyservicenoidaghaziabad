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
    
    let newHtml = html;
    
    // 1. Title / Heading change
    newHtml = newHtml.replace(/Chimney service repair not working solve in Noida Ghaziabad/gi, `${prettyBrand} Chimney Service in ${prettyArea}`);
    
    // 2. Top bar
    newHtml = newHtml.replace(/15 YEARS EXPERIENCE.*NOIDA GHAZIABAD/s, `${prettyArea.toUpperCase()} • ${prettyBrand.toUpperCase()} EXPERT`);
    
    // 3. IMPORTANT - Saare brands ki list hata ke sirf ek brand
    newHtml = newHtml.replace(/including Faber, Elica, Kaff, Glen, Hindware, Cata, Gilma, Hafele, Siemens, Smeg, Carysil/gi, `including ${prettyBrand}`);
    newHtml = newHtml.replace(/Faber, Elica, Kaff, Glen, Hindware, Cata, Gilma, Hafele, Siemens, Smeg, Carysil/g, `${prettyBrand}`);
    newHtml = newHtml.replace(/Faber, Elica, Kaff/gi, `${prettyBrand}`);

    // 4. Har jagah Chimney word ke aage Brand laga de
    newHtml = newHtml.replace(/>Chimney Not Working/g, `>${prettyBrand} Chimney Not Working`);
    newHtml = newHtml.replace(/>Chimney Noise Problem/g, `>${prettyBrand} Chimney Noise Problem`);

    fs.writeFileSync(dir + "/index.html", newHtml);
  }
}
