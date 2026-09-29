const fs = require('fs');
const path = require('path');
let base = fs.readFileSync('index.html','utf8');

const brands = ['faber','elica','kaff','glen','hindware','cata','gilma','hafele','siemens','smeg'];
const areas = ['sector-50-noida','sector-18-noida','vaishali','indirapuram','vasundhara','greater-noida-west'];

brands.forEach(brand => {
  areas.forEach(area => {
    const folder = `${brand}-chimney-service-${area}`;
    const brandCap = brand.charAt(0).toUpperCase() + brand.slice(1); // Faber
    const brandUp = brand.toUpperCase(); // FABER
    const areaPretty = area.replace(/-/g,' ').replace(/\b\w/g, l=>l.toUpperCase()); // Sector 50 Noida

    let html = base;

    // 1. Logo Header
    html = html.replace(/CHIMNEY<\/span>/g, `${brandUp}</span>`);
    html = html.replace(/CHIMNEY EXPERT/g, `${brandUp} EXPERT`);
    
    // 2. Main H1 Title
    html = html.replace(/.*Chimney Service.*Ghaziabad.*/gi, `${brandCap} Chimney Service in ${areaPretty} - Same Day Repair`);
    
    // 3. Area text
    html = html.replace(/NOIDA GHAZIABAD/g, areaPretty.toUpperCase());
    html = html.replace(/Noida Ghaziabad/g, areaPretty);
    html = html.replace(/in Noida Ghaziabad/g, `in ${areaPretty}`);

    if(!fs.existsSync(folder)) fs.mkdirSync(folder, {recursive:true});
    fs.writeFileSync(path.join(folder,'index.html'), html);
    console.log('Done', folder);
  });
});
