const fs = require('fs');
const brands = ["faber","elica","kaff","glen","hindware","cata","gilma","hafele","siemens","smeg"];
const areas = ["sector-50-noida","sector-18-noida","vaishali","indirapuram","vasundhara","greater-noida-west"];

// Area ka pincode / landmark alag karne ke liye
const areaInfo = {
  "sector-50-noida": { pincode: "201301", landmark: "Near City Center Metro" },
  "sector-18-noida": { pincode: "201301", landmark: "Near DLF Mall" },
  "vaishali": { pincode: "201010", landmark: "Near Vaishali Metro" },
  "indirapuram": { pincode: "201014", landmark: "Near Shipra Mall" },
  "vasundhara": { pincode: "201012", landmark: "Near Vasundhara Sec-12" },
  "greater-noida-west": { pincode: "201318", landmark: "Near Gaur Chowk" }
};

let html = fs.readFileSync('index.html','utf8');

for (const b of brands) {
  for (const a of areas) {
    const prettyBrand = b.charAt(0).toUpperCase() + b.slice(1);
    const upperBrand = b.toUpperCase();
    const prettyArea = a.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const upperArea = prettyArea.toUpperCase();
    const info = areaInfo[a];
    const dir = `${b}-chimney-service-${a}`;
    fs.mkdirSync(dir, {recursive:true});

    let newHtml = html;

    // 1. TITLE Tag - Sabse important for Google
    newHtml = newHtml.replace(/<title>.*<\/title>/i, `<title>${prettyBrand} Chimney Service in ${prettyArea} ${info.pincode} | Same Day Repair | 15 Yrs Exp</title>`);

    // 2. Meta Description
    newHtml = newHtml.replace(/name="description" content=".*"/i, `name="description" content="Book ${prettyBrand} Chimney Service in ${prettyArea} ${info.landmark}. Same day repair, 90 days warranty. Call for ${prettyBrand} filter cleaning, noise & not working issue in ${prettyArea}."`);

    // 3. Logo & Top Bars - 100% Unique
    newHtml = newHtml.replace(/CHIMNEY EXPERT/g, `${upperBrand} EXPERT`);
    newHtml = newHtml.replace(/KAFF|SIEMENS|HAFELE/g, upperBrand);
    newHtml = newHtml.replace(/15 YEARS EXPERIENCE • SAME DAY SERVICE •/g, `15 YEARS EXPERIENCE • SAME DAY SERVICE IN ${upperArea} •`);
    newHtml = newHtml.replace(/15 YEARS EXPERIENCE IN NOIDA GHAZIABAD/g, `15 YEARS EXPERIENCE IN ${upperArea}`);
    newHtml = newHtml.replace(/NOIDA GHAZIABAD/g, upperArea);
    newHtml = newHtml.replace(/INDIRAPURAM|VAISHALI/gi, prettyArea);

    // 4. Main H1
    newHtml = newHtml.replace(/Kaff Chimney Service in Indirapuram|Siemens Chimney Service in Vaishali|Hafele Chimney Service in Vaishali/gi, `${prettyBrand} Chimney Service in ${prettyArea}`);

    // 5. Unique Paragraph - Har area ke liye alag content (Google Duplicate se bachega)
    const uniquePara = `Looking for trusted ${prettyBrand} Chimney Service in ${prettyArea} (${info.pincode})? We are ${info.landmark} with 15 years exp. Specialized in ${prettyBrand} Chimney Deep Cleaning, Not Working & Noise Problem in ${prettyArea}. Trusted by 18000+ Homes.`;
    newHtml = newHtml.replace(/Trusted by 18000\+ Homes.*Work Not Done/s, uniquePara);

    // 6. Brand list hata ke sirf ek brand
    newHtml = newHtml.replace(/Faber, Elica, Kaff, Glen, Hindware, Cata, Gilma, Hafele, Siemens, Smeg, Carysil/gi, prettyBrand);

    // 7. Cards pe Brand
    newHtml = newHtml.replace(/Chimney Deep Cleaning/g, `${prettyBrand} Chimney Deep Cleaning`);
    newHtml = newHtml.replace(/Chimney Not Working/g, `${prettyBrand} Chimney Not Working`);

    fs.writeFileSync(dir + "/index.html", newHtml);
  }
}
console.log("Done - 60 Unique Pages Generated");
