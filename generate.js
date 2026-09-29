const fs = require('fs');
const brands = ["faber","elica","kaff","glen","hindware","cata","gilma","hafele","siemens","smeg"];
const areas = ["sector-50-noida","sector-18-noida","vaishali","indirapuram","vasundhara","greater-noida-west"];
const areaPin = {
  "sector-50-noida":"201301","sector-18-noida":"201301","vaishali":"201010",
  "indirapuram":"201014","vasundhara":"201012","greater-noida-west":"201318"
};

let baseHtml = fs.readFileSync('index.html','utf8');

for (const b of brands) {
  for (const a of areas) {
    const PrettyBrand = b.charAt(0).toUpperCase() + b.slice(1);
    const UPPER = b.toUpperCase();
    const PrettyArea = a.replace(/-/g,' ').replace(/\b\w/g, l=>l.toUpperCase());
    const UPPER_AREA = PrettyArea.toUpperCase();
    const dir = `${b}-chimney-service-${a}`;
    fs.mkdirSync(dir, {recursive:true});

    let h = baseHtml;

    // TITLE - Unique
    h = h.replace(/<title>.*?<\/title>/is, `<title>${PrettyBrand} Chimney Service in ${PrettyArea} ${areaPin[a]} | Same Day Repair</title>`);
    
    // LOGO - CHIMNEY ki jagah BRAND (Tera main point)
    h = h.replace(/CHIMNEY\s*<\/span>\s*<span[^>]*>EXPERT/si, `${UPPER}</span><span> EXPERT`);
    h = h.replace(/>CHIMNEY</g, `>${UPPER}<`);
    h = h.replace(/CHIMNEY EXPERT/gi, `${UPPER} EXPERT`);

    // TOP BLACK BAR
    h = h.replace(/15 YEARS EXPERIENCE.*?(Noida Ghaziabad|Indira.*?|Sector.*?|Vaishali|Vasundhara|Greater.*?)(.*?)<\/div>/is, `15 YEARS EXPERIENCE • SAME DAY SERVICE IN ${UPPER_AREA} • ${UPPER_AREA}</div>`);
    
    // MAIN H1 - Bada wala heading jo abhi nahi badal raha
    h = h.replace(/Chimney service repair not working solve in Noida Ghaziabad/gi, `${PrettyBrand} Chimney Service in ${PrettyArea} - Same Day Repair`);
    
    // 15 YEARS EXPERIENCE IN NOIDA GHAZIABAD
    h = h.replace(/15 YEARS EXPERIENCE IN NOIDA GHAZIABAD/gi, `15 YEARS EXPERIENCE IN ${UPPER_AREA}`);

    // Niche ka para - Unique banaya taki Google spam na mare
    h = h.replace(/Looking for trusted.*?Trusted by 18000\+ Homes\./is, `Looking for trusted ${PrettyBrand} Chimney Service in ${PrettyArea} (${areaPin[a]})? We provide same day ${PrettyBrand} chimney deep cleaning, not working & noise solution in ${PrettyArea}. Trusted by 18000+ homes.`);

    // Elica Elica wala double bug fix
    h = h.replace(new RegExp(`${PrettyBrand} ${PrettyBrand}`, 'g'), PrettyBrand);

    fs.writeFileSync(`${dir}/index.html`, h);
  }
}
console.log('60 Unique Pages Generated Done!');
