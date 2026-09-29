const fs = require('fs');
const path = require('path');
const base = fs.readFileSync('index.html', 'utf8');

const brands = ['faber','elica','kaff','glen','hindware','cata','gilma','hafele','siemens','smeg'];
const areas = ['sector-50-noida','sector-18-noida','vaishali','indirapuram','vasundhara','greater-noida-west'];

brands.forEach(brand => {
  areas.forEach(area => {
    const folder = `${brand}-chimney-service-${area}`;
    const brandCap = brand.charAt(0).toUpperCase() + brand.slice(1);
    const areaCap = area.replace(/-/g,' ').replace(/\b\w/g, l=>l.toUpperCase());
    
    let html = base
      .replace(/CHIMNEY EXPERT/gi, `${brandCap} EXPERT`)
      .replace(/Chimney Service in .*? -/gi, `${brandCap} Chimney Service in ${areaCap} -`)
      .replace(/Chimney Service/gi, `${brandCap} Chimney Service`);

    // Tailwind fix - agar nahi hai to add karo
    if(!html.includes('cdn.tailwindcss.com')){
      html = html.replace('</head>', '<script src="https://cdn.tailwindcss.com"></script></head>');
    }

    if(!fs.existsSync(folder)) fs.mkdirSync(folder, {recursive:true});
    fs.writeFileSync(path.join(folder,'index.html'), html);
    console.log('Created', folder);
  });
});
