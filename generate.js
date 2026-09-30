const fs=require('fs');
const brands=["cata","elica","faber","gilma","glen","hafele","hindware","kaff","siemens","smeg"];
const areas=["greater-noida","indirapuram","sector-18-noida","sector-50-noida","vaishali","vasundhara"];
const PHONE="8796284796";

const template=(PB,PA,brand,area,seed)=>`<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${PB} Chimney Service in ${PA}</title>
<meta name="description" content="${PB} Chimney Service in ${PA} - Call ${PHONE}">
<style>
*{margin:0;padding:0;box-sizing:border-box}body{font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto;background:#fff;color:#111}
.header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.9);backdrop-filter:blur(20px);display:flex;justify-content:space-between;align-items:center;padding:12px 16px;border-bottom:1px solid #eee}
.logo{font-weight:900;font-size:15px}.logo span{color:#00A651}
.call-top{background:#111;color:#fff;padding:8px 18px;border-radius:100px;text-decoration:none;font-size:13px;font-weight:700}
.hero{position:relative;padding:60px 20px;text-align:center;overflow:hidden}
.hero::before{content:'';position:absolute;inset:0;background:url('https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=1000') center/cover;filter:blur(18px) brightness(1.2);opacity:.35;z-index:-1}
.hero h1{font-size:38px;font-weight:900;line-height:1.1;min-height:110px;letter-spacing:-1px}.green{color:#00A651}
.type-sub{font-size:14px;color:#666;margin-top:8px;min-height:18px;font-weight:600}
.grid{max-width:700px;margin:20px auto;padding:0 16px;display:grid;grid-template-columns:1fr 1fr;gap:12px}
.card{background:#fff;border:1px solid #eee;border-radius:18px;padding:16px;cursor:pointer;position:relative}
.card .icon{width:42px;height:42px;background:#FFF3E0;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;color:#ff6d00;margin-bottom:10px}
.card h3{font-size:14px;font-weight:800}.card p{font-size:11px;color:#888;margin-top:4px;font-weight:600}
.card .orange{color:#ff6d00}
.content{max-width:750px;margin:30px auto;padding:0 20px}.content h2{font-size:22px;font-weight:800;margin:25px 0 10px}.content p{font-size:15px;color:#333;margin-bottom:12px;line-height:1.7}
.form-box{background:#f9f9f9;border:1px solid #eee;border-radius:24px;padding:22px;max-width:420px;margin:30px auto}
.form-box input{width:100%;padding:14px;border:1px solid #e5e5e5;border-radius:12px;margin:8px 0;background:#fff;font-size:15px}
.form-box button{width:100%;padding:14px;background:#111;color:#fff;border:none;border-radius:12px;font-weight:700;margin-top:10px}
.modal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.5);backdrop-filter:blur(8px);z-index:100;padding:20px;overflow:auto}
.modal-box{background:#fff;border-radius:20px;max-width:500px;margin:40px auto;padding:22px;animation:pop .3s}
@keyframes pop{from{transform:scale(.9)}to{transform:scale(1)}}
.reviews{max-width:700px;margin:30px auto;padding:0 16px}.rev{background:#fff;border:1px solid #eee;border-radius:16px;padding:14px;margin:10px 0;display:flex;gap:10px}
.rev img{width:36px;height:36px;border-radius:50%}.stars{color:#ffb400;font-size:13px}.verified{color:#1a73e8;font-size:11px;font-weight:700}
.bottom-bar{position:fixed;bottom:0;left:0;right:0;background:#fff;border-top:1px solid #eee;padding:12px 16px;display:flex;gap:10px;z-index:60}
.bottom-bar a{flex:1;text-align:center;padding:14px;border-radius:12px;text-decoration:none;font-weight:800;font-size:14px}
.book-btn{background:#fff;border:1.5px solid #111;color:#111}.call-btn{background:#00A651;color:#fff}
.disclaimer{text-align:center;font-size:11px;color:#888;padding:20px;background:#fafafa;margin-top:20px}
@keyframes blink{0%,100%{opacity:1}50%{opacity:0}} .cursor{animation:blink 1s infinite}
</style></head><body>

<div class="header"><div class="logo"><span>${PB.toUpperCase()}</span> CHIMNEY • ${PA}</div><a href="tel:${PHONE}" class="call-top">Call Now</a></div>

<div class="hero">
<h1 id="mainTitle"></h1>
<div class="type-sub" id="typeSub"></div>
</div>

<div class="grid">
<div class="card" onclick="openM('clean')"><div class="icon">🧹</div><h3>Deep Cleaning</h3><p class="orange type-card" data-text="Click to check problem"></p></div>
<div class="card" onclick="openM('noise')"><div class="icon">🔊</div><h3>Noise Issue Fixed</h3><p class="orange type-card" data-text="Click to check problem"></p></div>
<div class="card" onclick="openM('notwork')"><div class="icon">⚡</div><h3>Not Working</h3><p class="orange type-card" data-text="Click to check problem"></p></div>
<div class="card" onclick="openM('suction')"><div class="icon">💨</div><h3>Low Suction</h3><p class="orange type-card" data-text="Click to check problem"></p></div>
</div>

<div class="content">
<h2><span class="green">${PB}</span> Chimney Service in ${PA} - Expert Repair</h2>
<p>If you are looking for trusted <b>${PB} Chimney Service in ${PA}</b>, we are your local experts. In ${PA}, kitchens produce heavy oil smoke which clogs ${PB} filters in 3 months. Our team in ${PA} provides 60 minutes doorstep service for ${PB} with genuine parts. We have completed 2100+ services for ${PB} in ${PA} alone. Common issues we fix daily for ${PB} in ${PA} are noise from motor bearing jam, auto-clean not working due to PCB fault, chimney not starting due to touch panel failure, oil dripping due to filter choke, and low suction due to blower dust. Our process for ${PB} in ${PA}: free inspection, transparent estimate, same time repair with 90 days warranty bill.</p>
<p>Why regular service important for ${PB} in ${PA}? ${PA} area has hard water and voltage fluctuation which damages ${PB} motor. Carbon layer inside ${PB} blower reduces suction by 70% and increases power bill. Our 7-step deep cleaning for ${PB} in ${PA} includes chemical dip, hot wash, blower cleaning, motor oiling and suction test. Takes 60 minutes. Service charge only Rs.499 in ${PA}. We use original ${PB} compatible spare parts - Motor, PCB, Capacitor, Touch Panel. All services in ${PA} for ${PB} come with GST bill and 90 days warranty. We are independent service provider for ${PB} in ${PA}, not authorized company service, but we provide better faster service than company in ${PA}. Book ${PB} service in ${PA} now at ${PHONE} and get same day repair.</p>
</div>

<div class="form-box">
<h3 style="text-align:center">Book ${PB} Service in ${PA}</h3>
<p style="text-align:center;color:#888;font-size:12px;margin:5px 0 10px">iPhone style instant booking</p>
<input id="n" placeholder="Your Name">
<input id="p" placeholder="Mobile Number">
<button onclick="location.href='tel:${PHONE}'">Book Now</button>
</div>

<div class="reviews">
<h3>Google Reviews • Verified</h3>
<div class="rev"><img src="https://i.pravatar.cc/100?img=12"><div><b>Rohit Sharma <span class="verified">✔ Verified • 2 days ago</span></b><div class="stars">★★★★★</div><p>${PB} chimney in ${PA} - noise fixed in 30 min. Very professional work.</p></div></div>
<div class="rev"><img src="https://i.pravatar.cc/100?img=32"><div><b>Anjali Verma <span class="verified">✔ Verified • 5 days ago</span></b><div class="stars">★★★★★</div><p>Best ${PB} deep cleaning in ${PA}. Suction like new. Highly recommended.</p></div></div>
<div class="rev"><img src="https://i.pravatar.cc/100?img=15"><div><b>Amit Singh <span class="verified">✔ Verified • 1 week ago</span></b><div class="stars">★★★★☆</div><p>${PB} not working repaired with warranty in ${PA}. Good service.</p></div></div>
</div>

<div id="modal" class="modal" onclick="this.style.display='none'"><div class="modal-box" onclick="event.stopPropagation()"><span style="float:right;font-size:20px;cursor:pointer" onclick="document.getElementById('modal').style.display='none'">×</span><div id="mContent"></div><a href="tel:${PHONE}" style="display:block;background:#00A651;color:#fff;text-align:center;padding:14px;border-radius:12px;text-decoration:none;font-weight:800;margin-top:15px">Book Now - ${PHONE}</a></div></div>

<div class="disclaimer">We are Independent service provider for ${PB} in ${PA}. Not authorized by ${PB}. ${PB} is registered trademark.<br>© 2026 ${PB} Service ${PA}</div>

<div class="bottom-bar"><a href="#" class="book-btn" onclick="document.querySelector('.form-box').scrollIntoView({behavior:'smooth'});return false;">Book Now</a><a href="tel:${PHONE}" class="call-btn">Call Now</a></div>
<div style="height:80px"></div>

<script>
const titles=["<span class=green>${PB}</span> Chimney Service in ${PA}","<span class=green>${PB}</span> Chimney Noise Issue Fixed","${PB} Chimney Repair <span class=green>90 Days Warranty</span>"];
let ti=0,ci=0,ct="";function typeTitle(){if(ti>=titles.length)ti=0;let t=titles[ti];let el=document.getElementById('mainTitle');if(ci<t.length){el.innerHTML=t.substring(0,ci+1)+'<span class=cursor>|</span>';ci++;setTimeout(typeTitle,40);}else{setTimeout(()=>{ci=0;ti++;typeTitle();},2500);}}typeTitle();
const subTexts=["Professional repair • Same day • 90 Days warranty","Trusted by 1800+ families in ${PA}","Original parts for ${PB} in ${PA}"];
let si=0;function typeSub(){document.getElementById('typeSub').innerText=subTexts[si];si=(si+1)%subTexts.length;}typeSub();setInterval(typeSub,3000);
document.querySelectorAll('.type-card').forEach(el=>{let txt=el.dataset.text;let i=0;function t(){if(i<=txt.length){el.innerText=txt.substring(0,i);i++;setTimeout(t,70);}else{setTimeout(()=>{i=0;t();},5000);}}t();});
function openM(k){const d={clean:"<h3>Deep Cleaning in ${PA}</h3><p>7-step cleaning for ${PB} in ${PA}: filter chemical dip, hot wash, blower cleaning, motor oiling, body polish, suction test. Removes 100% oil. Cost Rs.499. Time 60 min. Suction increase 90%.</p><p>Benefit in ${PA}: no oil dripping, low noise, less power.</p>",noise:"<h3>${PB} Noise Issue Fixed in ${PA}</h3><p>Loud noise due to bearing jam, loose fan. We clean shaft, replace bearing, tighten blade. Cost Rs.300-800 for ${PB} in ${PA}. 90 days warranty.</p>",notwork:"<h3>${PB} Not Working in ${PA}</h3><p>PCB fault, touch failure, wiring loose. We test with multimeter and replace with genuine compatible part for ${PB} in ${PA}.</p>",suction:"<h3>${PB} Low Suction in ${PA}</h3><p>Filter choke, motor slow, duct block. We clean filters, check RPM, clear duct. 100% suction guarantee for ${PB} in ${PA}.</p>"};document.getElementById('mContent').innerHTML=d[k];document.getElementById('modal').style.display='block';}
</script>
</body></html>`;

brands.forEach(b=>{areas.forEach(a=>{
  const PA=a.replace(/-/g,' ').replace(/\b\w/g,l=>l.toUpperCase());
  const PB=b.charAt(0).toUpperCase()+b.slice(1);
  fs.writeFileSync(\`\${b}-chimney-service-\${a}.html\`, template(PB,PA,b,a,1));
})});
