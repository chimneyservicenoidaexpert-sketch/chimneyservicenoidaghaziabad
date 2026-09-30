const fs=require('fs');
const brands=["cata","elica","faber","gilma","glen","hafele","hindware","kaff","siemens","smeg"];
const areas=["greater-noida","indirapuram","sector-18-noida","sector-50-noida","vaishali","vasundhara"];
const PHONE="8796284796";
const WA="918796284796";

// Har Area ka content alag banega isse - Spam se bachega + Rank #1 ayega
const areaData={
"greater-noida":"Gaur Chowk, Pari Chowk, ATS Village, Cherry County, Panchsheel Green, Alpha 1, Beta 2",
"indirapuram":"Aditya Mega City, Shipra Sun City, Jaipuria Greens, Gyan Khand, Niti Khand, Vaibhav Khand",
"sector-18-noida":"Atta Market, GIP Mall, Sector 27, Sector 26, Wave City, Sector 20",
"sector-50-noida":"Central Market, Sector 50, Sector 51, Hoshiyarpur, Barola, Sector 76",
"vaishali":"Shopprix Mall, Mahagun Metro Mall, Ramprastha Greens, Sector 4-5, PNB Road, Sector 3",
"vasundhara":"Sector 12-15, Ramprastha, Mohan Nagar, Rajendra Nagar, Kaushambi, Sahibabad"
};

function makeHTML(PB,PA,areaSlug){
const seoTitle = `${PB} Chimney Service ${PA}`;
const society = areaData[areaSlug];
const seoDesc = `${PB} Chimney Service in ${PA} - Same Day 60 Min Doorstep Repair in ${society}. 2100+ Homes Trust Us in ${PA}. Call ${PHONE}.`;
return `<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${seoTitle}</title>
<meta name="title" content="${seoTitle}">
<meta name="description" content="${seoDesc}">
<meta property="og:title" content="${seoTitle}">
<meta property="og:description" content="${seoDesc}">
<meta property="og:type" content="website">
<meta property="og:url" content="https://chimneyservicenoidaghaziabad.vercel.app/${PB.toLowerCase()}-chimney-service-${areaSlug}.html">
<meta name="twitter:title" content="${seoTitle}">
<link rel="canonical" href="https://chimneyservicenoidaghaziabad.vercel.app/${PB.toLowerCase()}-chimney-service-${areaSlug}.html">
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
<script type="application/ld+json">{"@context":"https://schema.org","@type":"LocalBusiness","name":"${seoTitle}","description":"${seoDesc}","telephone":"${PHONE}","areaServed":"${PA}, ${society}","priceRange":"Rs 299-1999"}</script>
<style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:-apple-system,BlinkMacSystemFont,Arial;background:#fff;color:#111;line-height:1.6}
.header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.82);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);display:flex;justify-content:space-between;align-items:center;padding:11px 14px;border-bottom:1px solid #eee}
.logo{font-weight:900;font-size:13px;display:flex;align-items:center;gap:7px}.logo span{color:#00A651}
.logo-icon{width:28px;height:28px;background:#111;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:15px;color:#fff}
.verified-plate{background:#e8f5e9;border:1px solid #a5d6a7;color:#2e7d32;padding:3px 8px;border-radius:100px;font-size:10px;font-weight:800;display:flex;align-items:center;gap:3px}
.call-top{background:#111;color:#fff;padding:8px 15px;border-radius:100px;text-decoration:none;font-size:12px;font-weight:700;min-width:95px;text-align:center}
.hero{position:relative;padding:40px 20px 30px;text-align:center;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1000') center/cover;filter:blur(18px);opacity:.3;z-index:-1}
.hero h1{font-size:34px;font-weight:900;line-height:1.1;min-height:90px;letter-spacing:-.5px;transition:opacity.5s ease}.green{color:#00A651}
.cursor{animation:blink 1s infinite}@keyframes blink{50%{opacity:0}}
.hero p{font-size:13px;color:#555;margin-top:10px;font-weight:600}
.grid{max-width:700px;margin:18px auto;padding:0 14px;display:grid;grid-template-columns:1fr 1fr;gap:10px}
.card{background:#fff;border:1px solid #eee;border-radius:16px;padding:14px;cursor:pointer;transition:.2s}.card:active{transform:scale(.97)}
.card.icon{width:40px;height:40px;background:#FFF3E0;border-radius:11px;display:flex;align-items:center;justify-content:center;font-size:18px;margin-bottom:7px}
.card h3{font-size:13px;font-weight:800}.card p{font-size:10px;color:#ff6d00;font-weight:700;margin-top:2px}
.form-box{background:#f9fafb;border:1px solid #e5e7eb;border-radius:22px;padding:20px;max-width:430px;margin:20px auto;box-shadow:0 4px 20px rgba(0,0,0,.04)}
.form-box h3{text-align:center;font-size:17px;margin-bottom:4px;min-height:26px}.form-box.sub{ text-align:center;font-size:11px;color:#888;margin-bottom:12px}
.form-box input,.form-box select{width:100%;padding:13px;border:1px solid #e5e5e5;border-radius:12px;margin:6px 0;background:#fff;font-size:14px}
.form-box button{width:100%;padding:14px;background:#111;color:#fff;border:none;border-radius:12px;font-weight:800;margin-top:8px;font-size:14px}
.content{max-width:750px;margin:22px auto;padding:0 18px}.content h2{font-size:20px;font-weight:800;margin:24px 0 10px}.content p{font-size:14px;color:#333;margin-bottom:12px;line-height:1.8;text-align:justify}
.keywords{max-width:750px;margin:18px auto;padding:0 18px;display:flex;flex-wrap:wrap;gap:7px}.keywords span{background:#e8f5e9;color:#1b5e20;border:1px solid #c8e6c9;padding:6px 11px;border-radius:100px;font-size:11px;font-weight:700}
.map-box{max-width:700px;margin:22px auto;padding:0 14px}.map-box iframe{width:100%;height:240px;border:0;border-radius:16px}
.disclaimer{max-width:700px;margin:20px auto;background:#fff8e1;border:1px solid #ffecb3;padding:14px;border-radius:12px;text-align:center;font-size:11px;color:#5d4037;line-height:1.5}
.popup{display:none;position:fixed;inset:0;background:rgba(0,0,0,.55);backdrop-filter:blur(4px);z-index:200;align-items:center;justify-content:center;padding:18px}
.popup.show{display:flex}.popup-box{background:#fff;padding:24px;border-radius:22px;text-align:center;max-width:330px;width:100%;animation:pop.28s ease}
@keyframes pop{from{transform:scale(.85);opacity:0}to{transform:scale(1);opacity:1}}
.popup-box a{display:block;background:#00A651;color:#fff;padding:15px;border-radius:12px;text-decoration:none;font-weight:800;margin-top:14px}
.bottom-bar{position:fixed;bottom:0;left:0;right:0;background:rgba(255,255,255,.95);backdrop-filter:blur(15px);border-top:1px solid #eee;padding:10px 14px;display:flex;gap:8px;z-index:60}
.bottom-bar a{flex:1;text-align:center;padding:13px;border-radius:12px;text-decoration:none;font-weight:800;font-size:13px}
.book-btn{background:#fff;border:1.5px solid #111;color:#111;animation:shake 1.4s infinite}
.call-btn{background:#00A651;color:#fff;animation:shake 1.4s infinite.35s}
@keyframes shake{0%,100%{transform:translateY(0)}25%{transform:translateY(-4px)}50%{transform:translateY(0)}}
</style></head><body>
<div class="header"><div class="logo"><div class="logo-icon">⌾</div><div><span>${PB.toUpperCase()}</span> CHIMNEY • ${PA}</div> <span class="verified-plate">✔ Verified Service</span></div><a href="tel:${PHONE}" class="call-top">Call Now</a></div>

<div class="hero"><h1 id="mainTitle"></h1><p>Same Day Service • 60 Min Doorstep • 90 Days Warranty • ${PA}</p></div>

<div class="grid">
<div class="card" onclick="openM('clean')"><div class="icon">🧹</div><h3>Deep Cleaning</h3><p>Click to check problem</p></div>
<div class="card" onclick="openM('noise')"><div class="icon">🔊</div><h3>Noise Issue Fixed</h3><p>Click to check problem</p></div>
<div class="card" onclick="openM('repair')"><div class="icon">🔧</div><h3>Not Working Repair</h3><p>Click to check problem</p></div>
<div class="card" onclick="openM('suction')"><div class="icon">💨</div><h3>Low Suction / Oil</h3><p>Click to check problem</p></div>
</div>

<div class="form-box" id="bookForm">
<h3 id="bookTitle"></h3>
<div class="sub">iPhone style booking - Technician in ${PA} in 60 mins - ${society}</div>
<input id="cName" placeholder="Your Name">
<input id="cAddr" placeholder="Full Address in ${PA}">
<input id="cPin" placeholder="Pincode">
<select id="cService"><option value="">Select Service Type</option><option>Noise Issue Repair</option><option>Deep Cleaning Service</option><option>Not Working / PCB Repair</option><option>Installation & Ducting</option><option>Low Suction / Oil Dripping</option><option>Motor Replacement</option></select>
<button onclick="sendToWhatsApp('${PB}','${PA}')">Book Now</button>
</div>

<div class="content">
<h2><span class="green">${PB}</span> Chimney Service in ${PA} - Trusted by 2100+ Families in ${society}</h2>
<p>If you are searching for reliable <b>${PB} Chimney Service in ${PA}</b>, your search ends here. We are local experts for ${PB} brand in ${PA} providing same day doorstep service in 60 minutes covering ${society}. Kitchens in ${PA} produce heavy oil, tadka, smoke which clogs ${PB} chimney filters within 3 months. That is why ${PB} chimneys in ${PA} need professional cleaning every 4 months. Our team in ${PA} has completed 2100+ ${PB} chimney services in societies like ${society} and all apartments in ${PA}. We provide ${PB} chimney deep cleaning, noise issue fix, not working repair, low suction fix, oil dripping solution, auto-clean not working, touch panel repair, PCB repair, motor replacement for ${PB} in ${PA}.</p>
<p><b>Common Problems we fix daily for ${PB} in ${PA} - Local Cases from ${society}:</b> 1) ${PB} Chimney Making Loud Noise in ${PA} due to bearing jam and loose blower - we clean shaft and replace bearing for ${PB} in ${PA}. In ${society} flats, noise problem is more because duct length is high. 2) ${PB} Chimney Not Starting in ${PA} due to PCB and touch sensor fault - we check power and replace PCB for ${PB} in ${PA}. 3) ${PB} Chimney Low Suction in ${PA} due to filter choked with oil and blower carbon - we do chemical wash and hot water cleaning for ${PB} in ${PA}. 4) ${PB} Chimney Oil Dripping in ${PA} - filter cleaning solves 90% cases for ${PB} in ${PA}. 5) ${PB} Chimney Auto Clean Not Working in ${PA} due to thermal sensor and oil collector full in ${society} kitchens. Our process for ${PB} in ${PA} is simple: Free inspection in ${PA}, transparent estimate, same day repair with 90 days warranty and GST bill for ${PB} in ${PA}. We use original compatible spare parts for ${PB} in ${PA} and provide 90 days service warranty for ${PB} in ${PA}.</p>
<p><b>Why Regular ${PB} Service Important in ${PA}?</b> ${PA} area has hard water, high humidity, voltage fluctuation which damages ${PB} motor. Carbon layer inside ${PB} blower reduces suction by 70% and increases electricity bill and kitchen becomes oily. Our 7-step deep cleaning for ${PB} in ${PA} includes: Step 1 chemical dip for ${PB} filters in ${PA}, Step 2 hot high-pressure wash, Step 3 blower dry cleaning, Step 4 motor shaft oiling, Step 5 oil collector cleaning, Step 6 suction RPM test, Step 7 body polish for ${PB} in ${PA}. Time taken 60 minutes in ${PA}. Result - suction like new for ${PB} in ${PA}. We are independent service provider for ${PB} in ${PA}, not authorized company service center, but we are faster, affordable and provide warranty for ${PB} in ${PA}. Book ${PB} chimney service in ${PA} now and get same day technician in ${society}. ${PB} chimney service center in ${PA} alternative - we cover all ${PA}. ${PB} chimney cleaning, ${PB} chimney repair, ${PB} chimney installation in ${PA} available 7 days. Call ${PB} service in ${PA} now.</p>
<p><b>${PB} Chimney Installation in ${PA} - Expert in ${society}:</b> We also install new ${PB} chimney in ${PA} with proper ducting size 6 inch, correct height 26 inch from gas, no sharp bend for ${PB} in ${PA}. Proper installation increases life of ${PB} by 5 years in ${PA}. Flats in ${society} have false ceiling issue, we handle it with extra bracket for ${PB} in ${PA}. We provide installation for ${PB} in ${PA} for all kitchen types like L-shape, parallel in ${society}. ${PB} AMC available in ${PA} - 3 services per year for ${PB} in ${PA} with priority service in ${society}. ${PB} suction 1200m3, filter baffle, charcoal filter cleaning for ${PB} in ${PA} included. If you live in ${PA} specially ${society}, call us for ${PB} service now - 60 min doorstep.</p>
</div>

<div class="keywords">
<span>${PB} Chimney Cleaning in ${PA}</span><span>${PB} Chimney Repair in ${PA}</span><span>${PB} Chimney Installation in ${PA}</span><span>${PB} Noise Fix in ${PA}</span><span>${PB} Service Center in ${PA}</span><span>${PB} Deep Cleaning in ${PA}</span><span>${PB} Service in ${society}</span>
</div>

<div class="map-box"><h3 style="font-size:14px;margin-bottom:8px">📍 We Serve in ${PA} - ${society} - Live Map</h3><iframe src="https://maps.google.com/maps?q=${areaSlug}+${PA}+${society}&z=13&output=embed" loading="lazy"></iframe></div>

<div class="disclaimer">⚠️ <b>Disclaimer:</b> We are an <b>Independent Service Provider</b> for ${PB} Chimney Service in ${PA}. We are NOT authorized service center of ${PB}. ${PB} is registered trademark of its respective owner. We provide paid after-warranty service in ${PA} on chargeable basis. All services in ${PA} for ${PB} come with GST bill and 90 days warranty. © 2026 ${PB} Service ${PA}.</div>

<div id="modal" class="popup" onclick="this.classList.remove('show')"><div class="popup-box" onclick="event.stopPropagation()"><div id="mContent"></div><button onclick="document.getElementById('bookForm').scrollIntoView({behavior:'smooth'});document.getElementById('modal').classList.remove('show')" style="width:100%;padding:12px;background:#111;color:#fff;border:none;border-radius:10px;margin-top:12px;font-weight:700">Book Now</button></div></div>

<div id="callPopup" class="popup"><div class="popup-box"><h3>Call ${PB} Service in ${PA}</h3><p style="font-size:12px;color:#666;margin-top:6px">Technician in ${PA} - 60 Min • Verified • ${society}</p><a href="tel:${PHONE}">📞 Call Now - ${PHONE}</a><p style="font-size:12px;color:#888;margin-top:12px;cursor:pointer" onclick="document.getElementById('callPopup').classList.remove('show')">Close</p></div></div>

<div class="bottom-bar"><a href="#bookForm" class="book-btn" onclick="document.getElementById('bookForm').scrollIntoView({behavior:'smooth'});return false;">Book Now</a><a href="tel:${PHONE}" class="call-btn">Call Now</a></div>
<div style="height:75px"></div>

<script>
// 1. HERO SLIDESHOW ONLY - NO TYPEWRITER
const titles=["<span class=\\"green\\">${PB}</span> Chimney Service in ${PA}","<span class=\\"green\\">${PB}</span> Chimney Noise Issue Fixed","${PB} Repair <span class=\\"green\\">90 Days Warranty</span>"];
let ti=0;
function showSlide(){
 let el=document.getElementById('mainTitle');
 el.style.opacity=0;
 setTimeout(()=>{
   el.innerHTML=titles[ti];
   el.style.opacity=1;
   ti=(ti+1)%titles.length;
 },300);
}
showSlide();
setInterval(showSlide,2500);

// 2. TYPEWRITER ON BOOK FORM ONLY
const bookText="Book ${PB} Service in ${PA}";
let bi=0;
function typeBook(){
 let el=document.getElementById('bookTitle');
 if(bi<=bookText.length){
   el.innerHTML=bookText.substring(0,bi)+'<span class="cursor">|</span>';
   bi++;
   setTimeout(typeBook,80);
 }else{
   setTimeout(()=>{bi=0;typeBook();},2000);
 }
}
typeBook();

setTimeout(()=>{document.getElementById('callPopup').classList.add('show');},5000);
function openM(k){const d={clean:"<h3>🧹 Deep Cleaning for ${PB} in ${PA}</h3><p>7-step cleaning for ${PB} in ${PA} near ${society} - filter chemical dip, hot wash.</p>",noise:"<h3>🔊 Noise Fix for ${PB} in ${PA}</h3><p>Bearing jam, loose fan. We clean shaft, replace bearing for ${PB} in ${PA} - ${society}. 90 days warranty.</p>",repair:"<h3>🔧 Repair for ${PB} in ${PA}</h3><p>PCB fault, touch failure. Genuine part for ${PB} in ${PA} - ${society}.</p>",suction:"<h3>💨 Low Suction for ${PB} in ${PA}</h3><p>Filter choke, motor slow. We clean filters and check RPM for ${PB} in ${PA} - ${society}.</p>"};document.getElementById('mContent').innerHTML=d[k];document.getElementById('modal').classList.add('show');}
function sendToWhatsApp(PB,PA){
let name=document.getElementById('cName').value.trim();
let addr=document.getElementById('cAddr').value.trim();
let pin=document.getElementById('cPin').value.trim();
let serv=document.getElementById('cService').value;
if(!name){alert("Please Enter Your Name");document.getElementById('cName').focus();return;}
if(!addr){alert("Please Enter Full Address");document.getElementById('cAddr').focus();return;}
if(!pin){alert("Please Enter Pincode");document.getElementById('cPin').focus();return;}
if(!serv){alert("Please Select Service Type");document.getElementById('cService').focus();return;}
let msg="*New Booking*%0A*Brand:* "+PB+"%0A*Area:* "+PA+"%0A*Society:* ${society}%0A*Name:* "+name+"%0A*Address:* "+addr+"%0A*Pincode:* "+pin+"%0A*Service:* "+serv;
window.open("https://wa.me/${WA}?text="+msg,"_blank");
}
</script>
</body></html>`;
}
brands.forEach(b=>{areas.forEach(a=>{
const PA=a.replace(/-/g,' ').replace(/\\b\\w/g,l=>l.toUpperCase());
const PB=b.charAt(0).toUpperCase()+b.slice(1);
fs.writeFileSync(b+"-chimney-service-"+a+".html",makeHTML(PB,PA,a));
});});
console.log("Done 60 pages Google-Safe #1 Rank Ready");
