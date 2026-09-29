const fs = require('fs');

let brands = {
  faber: {name:"Faber", problem:"Touch sensor and auto-clean PCB failure is most common in Faber", homes:"1800+"},
  elica: {name:"Elica", problem:"Motor bearing noise and low suction issue in Elica", homes:"1650+"},
  kaff: {name:"Kaff", problem:"Dead PCB issue due to voltage in Kaff", homes:"1400+"},
  glen: {name:"Glen", problem:"Filter choking and blower oil deposit in Glen", homes:"1200+"},
  hindware: {name:"Hindware", problem:"Touch panel water damage in Hindware", homes:"1100+"},
  cata: {name:"Cata", problem:"Motor capacitor weak issue in Cata", homes:"900+"},
  gilma: {name:"Gilma", problem:"Duct whistle noise issue in Gilma", homes:"850+"},
  hafele: {name:"Hafele", problem:"Sensor calibration failure in Hafele", homes:"800+"},
  siemens: {name:"Siemens", problem:"PCB moisture failure in Siemens", homes:"750+"},
  smeg: {name:"Smeg", problem:"Blower balancing issue in Smeg", homes:"700+"}
};

let areas = {
  "sector-50-noida": {full:"Sector 50 Noida", landmark:"Central Market, Amrapali Princely Estate", pin:"201301"},
  "sector-18-noida": {full:"Sector 18 Noida", landmark:"Atta Market, GIP Mall", pin:"201301"},
  "vaishali": {full:"Vaishali", landmark:"Mahagun Metro Mall, Sector 4-6", pin:"201010"},
  "indirapuram": {full:"Indirapuram", landmark:"Aditya Mall, Jaipuria Enclave", pin:"201014"},
  "vasundhara": {full:"Vasundhara", landmark:"Sahibabad, Sector 1-22", pin:"201012"},
  "greater-noida-west": {full:"Greater Noida West", landmark:"Gaur City, Cherry County", pin:"201318"}
};

let template = fs.readFileSync('index.html','utf8');

for(let bKey in brands){
  for(let aKey in areas){
    let b = brands[bKey];
    let a = areas[aKey];
    let slug = `${bKey}-chimney-service-${aKey}`;
    let uniqueDiv = `<div class="mt-10 max-w-4xl text-[14px] leading-[1.9] text-zinc-700 space-y-4 bg-zinc-50 p-6 rounded-[20px] border"><h2 class="text-[20px] font-bold text-black">${b.name} Chimney Service in ${a.full} - ${a.pin}</h2><p><b>${b.name} chimney service in ${a.full}</b> near ${a.landmark} Pincode ${a.pin} since 2009. In ${a.full} ${b.homes} homes trust us. ${b.problem}. Technician reaches in 45 mins with genuine parts.</p><p>Why ${b.name} fails in ${a.full}? Oil choking due to frying in ${a.landmark} societies. We do chemical cleaning, motor, PCB repair at home. 90 days warranty in ${a.full}. Call 8796284796 for ${b.name} chimney service in ${a.full}.</p></div>`;
    let newHtml = template.replace(/<title>.*?<\/title>/, `<title>${b.name} Chimney Service in ${a.full} | ${a.landmark} | ${a.pin} | Same Day</title>`);
    let finalHtml = newHtml.replace('</main>', `${uniqueDiv}</main>`);
    if(finalHtml === newHtml) finalHtml = newHtml + uniqueDiv;
    fs.mkdirSync(slug,{recursive:true});
    fs.writeFileSync(`${slug}/index.html`, finalHtml);
  }
}
console.log("60 done");
