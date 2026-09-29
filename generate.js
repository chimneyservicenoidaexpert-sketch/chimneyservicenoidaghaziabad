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
let urls = [];
brands.forEach(b=>{
areas.forEach(a=>{
let slug = b + "-chimney-service-" + a;
let html = base.replace("</body>","<div><h1>"+b+" "+a+"</h1></div></body>");
fs.mkdirSync(slug,{recursive:true});
fs.writeFileSync(slug+"/index.html",html);
urls.push("https://chimneyservicenoidaghaziabad.vercel.app/"+slug+"/");
});
});
let sitemap = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
urls.forEach(u=>{ sitemap += '<url><loc>'+u+'</loc></url>'; });
sitemap += '</urlset>';
fs.writeFileSync('sitemap.xml', sitemap);
console.log("60 + sitemap done");
