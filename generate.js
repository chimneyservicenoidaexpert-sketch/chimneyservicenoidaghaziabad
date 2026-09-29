const fs = require('fs');
const path = require('path');
const base = fs.readFileSync('index.html','utf8');
const brands = ['faber','elica','kaff','glen','hindware','cata','gilma','hafele','siemens','smeg'];
const areas = ['sector-50-noida','sector-18-noida','vaishali','indirapuram','vasundhara','greater-noida-west'];
const suf = ['Same Day Repair','Expert Technicians','Deep Cleaning','Filter Change','Installation','Suction Fix','Low Price','At Home Service','15 Yrs Exp','Book Now'];
let n=0;
brands.forEach(b=>{
 areas.forEach(a=>{
  const f=b+'-chimney-service-'+a;
  const bCap=b[0].toUpperCase()+b.slice(1);
  const bUp=b.toUpperCase();
  const aP=a.split('-').join(' ');
  const t=suf[n%suf.length];
  let h=base;
  h=h.split('CHIMNEY').join(bUp);
  h=h.split('Chimney').join(bCap);
  h=h.split('chimney').join(b);
  h=h.replace(/<title>.*?<\/title>/i,'<title>'+bCap+' Chimney Service in '+aP+' - '+t+'</title>');
  if(!fs.existsSync(f)) fs.mkdirSync(f,{recursive:true});
  fs.writeFileSync(path.join(f,'index.html'),h);
  n++;
 });
});
