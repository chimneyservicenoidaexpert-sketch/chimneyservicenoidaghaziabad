const fs=require('fs');
const path=require('path');
const base=fs.readFileSync('index.html','utf8');
const brands=['faber','elica','kaff','glen','hindware','cata','gilma','hafele','siemens','smeg'];
const areas=['sector-50-noida','sector-18-noida','vaishali','indirapuram','vasundhara','greater-noida-west'];
let n=0;
brands.forEach(b=>{
 areas.forEach(a=>{
  const f=b+'-chimney-service-'+a;
  const bCap=b[0].toUpperCase()+b.slice(1);
  const bUp=b.toUpperCase();
  const aP=a.split('-').join(' ');
  let h=base;
  h=h.split('CHIMNEY').join(bUp);
  h=h.split('Chimney').join(bCap);
  h=h.split('chimney').join(b);
  const ttl='<title>'+bCap+' Chimney Service in '+aP+' - '+n+'</title>';
  h=h.replace(/<title>.*?<\/title>/i,ttl);
  if(!fs.existsSync(f))
   fs.mkdirSync(f,{recursive:true});
  fs.writeFileSync(path.join(f,'index.html'),h);
  n++;
 });
});
