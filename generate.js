const fs = require('fs');
let brands = [
"faber","elica","kaff","glen","hindware",
"cata","gilma","hafele","siemens","smeg"
];
let areas = [
"sector-50-noida",
"sector-18-noida",
"vaishali",
"indirapuram",
"vasundhara",
"greater-noida-west"
];
let base = fs.readFileSync('index.html','utf8');
brands.forEach(b=>{
areas.forEach(a=>{
let slug = b + "-chimney-service-" + a;
let html = base.replace("</body>","<div>"+b+" "+a+"</div></body>");
fs.mkdirSync(slug,{recursive:true});
fs.writeFileSync(slug+"/index.html",html);
});
});
console.log("60 done");
