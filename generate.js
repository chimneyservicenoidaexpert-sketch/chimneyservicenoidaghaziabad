const fs = require('fs');
const path = require('path');
const base = fs.readFileSync('index.html','utf8');

const brands = ['faber','elica','kaff','glen','hindware','cata','gilma','hafele','siemens','smeg'];
const areas = ['sector-50-noida','sector-18-noida','vaishali','indirapuram','vasundhara','greater-noida-west'];

brands.forEach(brand => {
  areas.forEach(area => {
    const folder = `${brand}-chimney-service-${area}`;
    const brandCap = brand.charAt(0).toUpperCase() + brand.slice(1);
    const brandUp = brand.toUpperCase();
    const areaPretty = area.replace(/-/g,' ').replace(/\b\w/g, l=>l.toUpperCase());

    let html = base;

    // Title tag change for 60 pages only
    html = html.replace(/<title>.*?<\/title>/i, `<title>${brandCap} Chimney Service in ${areaPretty} - Same Day Repair | 15 Yrs Exp</title>`);

    // H1 change
    html = html.replace(/Chimney Service repair not working solve in Noida Ghaziabad/gi, `${brandCap} Chimney Service in ${areaPretty} - Same Day Repair`);

    // Logo
    html = html.replace(/CHIMNEY EXPERT/g, `${brandUp} EXPERT`);

    if(!fs.existsSync(folder)) fs.mkdirSync(folder, {recursive:true});
    fs.writeFileSync(path.join(folder,'index.html'), html);
    console.log('Created', folder);
  });
});
