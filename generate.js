const fs = require('fs');
const brands = ["faber","elica","kaff","glen","hindware","cata","gilma","hafele","siemens","smeg"];
const areas = ["sector-50-noida","sector-18-noida","vaishali","indirapuram","vasundhara","greater-noida-west"];
const html = fs.readFileSync('index.html','utf8');
for (const b of brands) {
  for (const a of areas) {
    const dir = `${b}-chimney-service-${a}`;
    fs.mkdirSync(dir, {recursive:true});
    fs.writeFileSync(dir + "/index.html", html);
  }
}
