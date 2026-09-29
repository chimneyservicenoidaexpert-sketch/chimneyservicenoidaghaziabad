lconst fs = require('fs');
let brands = ["faber","elica","kaff","glen","hindware","cata","gilma","hafele","siemens","smeg"];
let areas = ["sector-50-noida","sector-18-noida","vaishali","indirapuram","vasundhara","greater-noida-west"];
let base = fs.readFileSync('index.html','utf8');
brands.forEach(b=>{
  areas.forEach(a=>{
    let slug = b + "-chimney-service-" + a;
    let extra = "<div style='padding:20px;background:#f5f5f5;margin:20px'><h2>" + b + " service in " + a + "</h2><p>" + b + " chimney repair in " + a + " near you. Call 8796284796. Same day service.</p></div></body>";
    let html = base.replace("</body>", extra);
    fs.mkdirSync(slug, {recursive:true});
    fs.writeFileSync(slug + "/index.html", html);
  });
});
console.log("60 done");
