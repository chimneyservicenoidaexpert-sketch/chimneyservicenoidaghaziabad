const fs=require('fs');
const brands=["faber","elica","kaff","glen","hindware","cata","gilma","hafele","siemens","smeg"];
const areas=["sector-50-noida","sector-18-noida","vaishali","indirapuram","vasundhara","greater-noida-west"];
const base=fs.readFileSync('index.html','utf8');
brands.forEach(b=>{
  areas.forEach(a=>{
    const folder=`${b}-chimney-service-${a}`;
    fs.mkdirSync(folder,{recursive:true});
    const content=base.replace(/<title>.*<\/title>/, `<title>${b} Chimney Service in ${a}</title>`);
    fs.writeFileSync(`${folder}/index.html`, content);
  });
});
console.log("60 pages done");
