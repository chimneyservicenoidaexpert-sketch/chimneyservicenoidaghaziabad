const fs = require('fs');
const brands = ["cata","elica","faber","gilma","glen","hafele","hindware","kaff","siemens","smeg"];
const areas = ["greater-noida","indirapuram","sector-18-noida","sector-50-noida","vaishali","vasundhara"];

function uniquePara(PB, PA, seed) {
  const paras = [
    `If you are searching for ${PB} chimney service in ${PA}, you are at right place. Kitchens in ${PA} face heavy oil and masala smoke daily, which chokes your ${PB} chimney filters in just 3 months. Our local team in ${PA} provides same-day doorstep repair for all ${PB} models.`,
    `${PA} is one of the busiest locations in Noida Ghaziabad where ${PB} chimneys are used heavily. Common complaints we get for ${PB} in ${PA} are loud noise, motor jam, auto-clean not working, and oil dripping. Our technician carries original ${PB} spare parts for ${PA} customers.`,
    `We have served 1500+ families for ${PB} in ${PA} alone. Whether you have a ${PB} wall-mounted, island or curved glass model in ${PA}, our expert can repair it. We handle PCB repair, touch sensor, blower motor, capacitor and filter replacement for ${PB} in ${PA}.`,
    `Why ${PB} chimney needs service every 4 months in ${PA}? Due to high humidity and oily cooking in ${PA}, carbon layer forms inside blower. This reduces suction and increases electricity bill. Our deep cleaning in ${PA} restores your ${PB} chimney to new condition.`,
    `We are not ${PB} company, we are independent service experts for ${PB} in ${PA}. We use 100% genuine parts compatible with ${PB}. All services in ${PA} come with 90 days warranty, GST bill and no visiting charge if service done. Call 9876543210 for ${PB} in ${PA}.`
  ];
  // shuffle based on seed to make unique
  return paras.sort((a,b)=> (a.length*seed)%7 - (b.length*seed)%5 ).join(' ');
}

const template = (PB, PA, brand, area, seed) => `<!DOCTYPE html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${PB} Chimney Service in ${PA} | Independent Expert Service</title>
<meta name="description" content="Independent ${PB} chimney service in ${PA}. Noise, not working, deep cleaning. 90 days warranty. Call 9876543210. Not authorized by ${PB}.">
<style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:Inter,Arial,sans-serif;background:#fff;color:#222;line-height:1.7}
.hdr{background:#fff;border-bottom:1px solid #eee;padding:12px;text-align:center;position:sticky;top:0;z-index:20}
.hero{max-width:900px;margin:0 auto;padding:50px 20px;text-align:center}
.hero h1{font-size:32px;font-weight:800;min-height:80px} .hero h1 span{color:#c62828}
.call{background:#c62828;color:#fff;padding:14px 32px;border-radius:8px;text-decoration:none;font-weight:700;display:inline-block;margin-top:20px;animation:shake 2.5s infinite}
@keyframes shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-2px)}40%{transform:translateX(2px)}}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:14px;max-width:1000px;margin:20px auto;padding:0 15px}
.card{background:#fff;border:1px solid #e5e5e5;border-radius:12px;padding:18px;cursor:pointer;transition:.2s}
.card:hover{border-color:#c62828;transform:translateY(-2px)}
.card h3{font-size:16px}
.content{max-width:800px;margin:25px auto;padding:0 20px}
.content p{margin-bottom:14px;font-size:15.5px;color:#333}
.modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:50;padding:20px;overflow:auto}
.modal-box{background:#fff;max-width:600px;margin:40px auto;border-radius:12px;padding:25px}
.modal-box h2{color:#c62828;margin-bottom:10px}
.modal-box p{font-size:14px;margin-bottom:8px}
.close{float:right;font-size:22px;cursor:pointer}
.map-box{text-align:center;padding:30px 15px;background:#f9fafb;margin-top:30px;border-top:1px solid #eee}
.disclaimer{background:#fff3cd;border:1px solid #ffe69c;padding:15px;border-radius:8px;margin:20px auto;max-width:800px;font-size:13px;text-align:center}
footer{background:#111;color:#888;text-align:center;padding:25px;font-size:12px}
</style></head><body>
<div class="hdr"><b>${PB} SERVICE ${PA.toUpperCase()}</b> | 9876543210</div>

<div class="hero">
<h1 id="type"></h1>
<p style="color:#555;margin-top:12px">Professional ${PB} Repair in ${PA} • Same Day Service</p>
<a href="tel:9876543210" class="call">📞 CALL 9876543210</a>
</div>

<div class="grid">
<div class="card" onclick="openM('clean')"><h3>🧹 Deep Cleaning</h3><p>Oil & carbon removal. Tap for details.</p></div>
<div class="card" onclick="openM('noise')"><h3>🔊 Noise Issue</h3><p>Loud sound & vibration fix. Tap for details.</p></div>
<div class="card" onclick="openM('notwork')"><h3>⚡ Not Working</h3><p>Chimney not starting, PCB fault. Tap.</p></div>
<div class="card" onclick="openM('suction')"><h3>💨 Low Suction</h3><p>Filter choke & motor issue. Tap.</p></div>
</div>

<div class="content">
<h2>${PB} Chimney Service Center in ${PA}</h2>
<p>${uniquePara(PB, PA, seed)}</p>
<p>Our process for ${PB} in ${PA} is simple: 1) Call booking 2) Technician reaches in 60 mins in ${PA} 3) Free inspection of your ${PB} chimney 4) Transparent estimate 5) Same time repair with warranty. We cover full ${PA} including nearby sectors, societies and apartments. If your ${PB} chimney in ${PA} is more than 1 year old and never serviced, suction is already down by 60%. Don't wait for complete motor failure.</p>
<p>Local expertise matters for ${PA}. Water hardness, voltage fluctuation and cooking style in ${PA} affect ${PB} chimney life. Our team in ${PA} knows exact solution for ${PB}. We also provide AMC for ${PB} in ${PA} - 3 services in a year at just Rs.1999 with free filter replacement support. This is best for families in ${PA} who cook 2-3 times daily.</p>
</div>

<div id="modal" class="modal" onclick="this.style.display='none'"><div class="modal-box" onclick="event.stopPropagation()">
<span class="close" onclick="document.getElementById('modal').style.display='none'">×</span>
<div id="mcontent"></div>
<a href="tel:9876543210" style="display:block;background:#c62828;color:#fff;text-align:center;padding:14px;border-radius:8px;text-decoration:none;font-weight:700;margin-top:15px">BOOK THIS SERVICE - 9876543210</a>
</div></div>

<div class="map-box">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Google_Maps_Logo_2020.svg/512px-Google_Maps_Logo_2020.svg.png" width="60" style="opacity:.8"><br>
<p style="margin:10px 0;font-weight:700">We Serve Full ${PA}</p>
<iframe src="https://maps.google.com/maps?q=${PA}%20Noida&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="220" style="border:0;border-radius:12px;max-width:600px"></iframe>
</div>

<div class="disclaimer">
<b>Disclaimer:</b> We are an <b>Independent</b> service provider for ${PB} chimneys in ${PA}. We are NOT authorized by ${PB} company. ${PB} is a registered trademark of its owner. We provide only after-warranty paid service with genuine compatible parts in ${PA}.
</div>

<footer>© 2026 ${PB} Chimney Service in ${PA} | Independent Service | <a href="/index.html" style="color:#fff">Home</a></footer>

<script>
const txt="${PB} Chimney Service in ${PA}"; let j=0; function typeW(){ if(j<txt.length){ document.getElementById('type').innerHTML+=txt.charAt(j); j++; setTimeout(typeW,60);} } typeW();
function openM(t){
 const data={
  clean: "<h2>Deep Cleaning Service in ${PA}</h2><p>We do 7-step deep cleaning for ${PB} in ${PA}: Filter removal, chemical dip, hot water wash, blower cleaning, motor oiling, body polishing, suction test. Removes 100% oil. Takes 60 mins. Service charge Rs.499 only in ${PA}. Increases suction by 90% and reduces noise. Recommended every 4 months for ${PB} in ${PA}. Includes free inspection of motor and PCB. Original cleaning chemicals used.</p><p>Benefits in ${PA}: No oil dripping, no smell, low noise, less power consumption. We serve all societies in ${PA}.</p>",
  noise: "<h2>${PB} Noise Issue Repair in ${PA}</h2><p>Loud noise in ${PB} chimney in ${PA} is due to motor bearing jam, loose fan, or oil in blower. Our expert in ${PA} will open blower, clean shaft, replace bearing if needed, tighten blade and test. Cost Rs.300-800 for ${PB} in ${PA} depending on part. 90 days warranty. Noise issue if ignored damages motor permanently. Same day fix in ${PA}.</p>",
  notwork: "<h2>${PB} Not Working Repair in ${PA}</h2><p>${PB} chimney not starting in ${PA}? Main reasons: PCB fault, touch panel failure, wiring loose, capacitor dead. We test power supply, check PCB with multimeter, replace faulty part with genuine compatible part for ${PB} in ${PA}. Touch panel for ${PB} in ${PA} available. Visiting in 60 mins in ${PA}.</p>",
  suction: "<h2>${PB} Low Suction Repair in ${PA}</h2><p>Low suction in ${PA} due to filter choke, motor slow, duct block. We clean all 3 filters, check motor RPM, clear duct if blocked. Suction test done before/after for ${PB} in ${PA}. 100% suction guarantee for ${PB} in ${PA} after our service. AMC available.</p>"
 };
 document.getElementById('mcontent').innerHTML=data[t]; document.getElementById('modal').style.display='block';
}
</script>
</body></html>`;

brands.forEach((b,i)=>{areas.forEach((a,j)=>{
  const file=`${b}-chimney-service-${a}.html`;
  const PA=a.replace(/-/g,' ').replace(/\b\w/g,l=>l.toUpperCase());
  const PB=b.charAt(0).toUpperCase()+b.slice(1);
  const seed = (i*7 + j*13 + PB.length);
  fs.writeFileSync(file, template(PB,PA,b,a,seed));
})});
