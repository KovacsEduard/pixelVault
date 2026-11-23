const G=[
{id:1,n:"Cyberpunk 2077",c:"RPG",y:2020,p:17990,h:[300,320],d:"Nyílt világú akció-szerepjáték a jövő Night City városában, ahol a döntéseid alakítják a történetet.",min:"Intel Core i7-6700 / Ryzen 5 1600|12 GB RAM|GeForce GTX 1060 6GB",rec:"Intel Core i7-12700 / Ryzen 7 7800X3D|16 GB RAM|GeForce RTX 2060 SUPER"},
{id:2,n:"The Witcher 3: Wild Hunt",c:"RPG",y:2015,p:8990,h:[150,30],d:"Geralt, a szörnyvadász utazik egy hatalmas, háború sújtotta világban, hogy megtalálja az elveszett lányát.",min:"Intel Core i5-2500K / AMD Phenom II X4 940|6 GB RAM|GeForce GTX 660",rec:"Intel Core i7-3770 / AMD FX-8350|8 GB RAM|GeForce GTX 770"},
{id:3,n:"Elden Ring",c:"RPG",y:2022,p:19990,h:[42,20],d:"Fedezd fel az Elköztek földjeit egy FromSoftware által alkotott, kíméletlen, de lenyűgöző fantasy világban.",min:"Intel Core i5-8400 / Ryzen 3 3300X|12 GB RAM|GeForce GTX 1060 3GB",rec:"Intel Core i7-8700K / Ryzen 5 3600X|16 GB RAM|GeForce GTX 1070 8GB"},
{id:4,n:"Counter-Strike 2",c:"Akciójáték",y:2023,p:0,h:[35,210],d:"A világ legnépszerűbb taktikai FPS-e: csapatban játszott, kompetitív lövöldözés új grafikával.",min:"Intel Core i5 750|8 GB RAM|DirectX 11 kompatibilis, 1 GB VRAM",rec:"Modern négymagos processzor|16 GB RAM|GeForce GTX 1060 vagy jobb"},
{id:5,n:"Red Dead Redemption 2",c:"Akciójáték",y:2019,p:15990,h:[10,35],d:"Arthur Morgan és a Van der Linde banda története a vadnyugat végnapjaiban, hatalmas nyílt világgal.",min:"Intel Core i5-2500K / AMD FX-6300|8 GB RAM|GeForce GTX 770 2GB",rec:"Intel Core i7-4770K / Ryzen 5 1500X|12 GB RAM|GeForce GTX 1060 6GB"},
{id:6,n:"Hades",c:"Akciójáték",y:2020,p:7490,h:[355,15],d:"Törj ki az alvilágból ebben a díjnyertes roguelike akciójátékban, ahol minden halál új kezdet.",min:"Kétmagos 2,4 GHz-es processzor|4 GB RAM|1 GB VRAM-os videokártya",rec:"Kétmagos 3 GHz-es processzor|8 GB RAM|GeForce GTX 960"},
{id:7,n:"Stardew Valley",c:"Szimulátor",y:2016,p:4790,h:[100,60],d:"Örökölj egy elhanyagolt farmot, műveld meg a földet, barátkozz a falusiakkal és építsd fel az új életed.",min:"2 GHz-es processzor|2 GB RAM|256 MB videomemória",rec:"Kétmagos 2,5 GHz-es processzor|4 GB RAM|512 MB videomemória"},
{id:8,n:"Sid Meier's Civilization VI",c:"Stratégia",y:2016,p:11990,h:[210,40],d:"Építs birodalmat az ókortól a jövőig, és vezesd népedet a győzelemhez a körökre osztott stratégiában.",min:"Intel Core i3 2,5 GHz / AMD Phenom II 2,6 GHz|4 GB RAM|1 GB VRAM-os videokártya",rec:"Intel Core i5 2,5 GHz / AMD FX 8350|8 GB RAM|GeForce GTX 770 2GB"},
{id:9,n:"Forza Horizon 5",c:"Sport",y:2021,p:19990,h:[20,185],d:"Száguldj Mexikó pazar tájain több mint 500 autóval a legnagyobb nyílt világú versenyjátékban.",min:"Intel Core i5-4460|8 GB RAM|GeForce GTX 970",rec:"Intel Core i5-8400|16 GB RAM|GeForce GTX 1070"},
{id:10,n:"Resident Evil 4",c:"Horror",y:2023,p:16990,h:[0,345],d:"Leon S. Kennedy az elrabolt elnöklány nyomába ered egy rettegett spanyol faluban. Újragondolt klasszikus.",min:"Ryzen 5 3600 / Intel Core i7-7700|16 GB RAM|GeForce GTX 1050 Ti",rec:"Ryzen 5 3600 / Intel Core i7-8700|16 GB RAM|GeForce GTX 1070"},
{id:11,n:"Euro Truck Simulator 2",c:"Szimulátor",y:2012,p:3990,h:[30,200],d:"Vezess kamionokat Európa útjain, építs saját fuvarozócéget és ismerd meg a kontinens városait.",min:"Kétmagos 2,4 GHz-es processzor|4 GB RAM|GeForce GTS 450",rec:"Négymagos 3 GHz-es processzor|6 GB RAM|GeForce GTX 760"},
{id:12,n:"Hollow Knight",c:"Akciójáték",y:2017,p:3790,h:[240,270],d:"Fedezd fel Hallownest elveszett birodalmát ebben a kézzel rajzolt, hangulatos metroidvania kalandban.",min:"Intel Core 2 Duo E5200|4 GB RAM|GeForce 9800GTX+",rec:"Intel Core i5|8 GB RAM|GeForce GTX 560"},
{id:13,n:"Baldur's Gate 3",c:"RPG",y:2023,p:19990,h:[28,260],d:"Gyűjts csapatot, és járd be Faerûnt a Dungeons & Dragons szabályai szerint, ahol minden döntésednek súlya van.",min:"Intel Core i5-4690 / AMD FX 4350|8 GB RAM|GeForce GTX 970 / Radeon RX 480 4GB",rec:"Intel Core i7-8700K / Ryzen 5 3600|16 GB RAM|GeForce RTX 2060 Super / Radeon RX 5700 XT"},
{id:14,n:"Black Myth: Wukong",c:"Akciójáték",y:2024,p:19990,h:[18,45],d:"Kínai mitológiára épülő látványos akció-szerepjáték, ahol a Majomkirály legendás útját éled át.",min:"Intel Core i5-8400 / Ryzen 5 1600|16 GB RAM|GeForce GTX 1060 6GB",rec:"Intel Core i7-9700 / Ryzen 5 5500|16 GB RAM|GeForce RTX 2060 / Radeon RX 5700 XT"},
{id:15,n:"Helldivers 2",c:"Akciójáték",y:2024,p:14990,h:[55,215],d:"Kooperatív, felülnézetes-harmadik személyű lövöldözős, ahol csapatban védi a Galaxis szabadságát a Super Earth katonája.",min:"Intel Core i7-4790K / Ryzen 5 1500X|16 GB RAM|GeForce GTX 1050 Ti 4GB",rec:"Intel Core i7-9700K / Ryzen 7 3700X|16 GB RAM|GeForce RTX 2060 8GB"},
{id:16,n:"Palworld",c:"Szimulátor",y:2024,p:9990,h:[130,190],d:"Fogj be különös lényeket, építs bázist és túlélj egy hatalmas, nyílt világú kalandban egyedül vagy barátokkal.",min:"Intel Core i5-3570K|16 GB RAM|GeForce GTX 1050 2GB",rec:"Intel Core i9-9900K|32 GB RAM|GeForce RTX 2070"},
{id:17,n:"Hogwarts Legacy",c:"RPG",y:2023,p:20000,h:[265,215],d:"Légy a varázsvilág diákja az 1800-as évek Roxfortjában, és fedezd fel a kastély és környéke titkait.",min:"Intel Core i5-6600 / Ryzen 5 1400|16 GB RAM|GeForce GTX 960 4GB",rec:"Intel Core i7-8700 / Ryzen 5 3600|16 GB RAM|GeForce GTX 1080 Ti"},
{id:18,n:"Balatro",c:"Stratégia",y:2024,p:5490,h:[350,10],d:"Pókerre épülő roguelike kártyajáték, ahol egyre vadabb jokerekkel és kombinációkkal gyűjthetsz pontot.",min:"Kétmagos 2 GHz-es processzor|4 GB RAM|1 GB VRAM-os videokártya",rec:"Négymagos 2,5 GHz-es processzor|4 GB RAM|2 GB VRAM-os videokártya"},
{id:19,n:"Lethal Company",c:"Horror",y:2023,p:3490,h:[95,160],d:"Kooperatív horror, ahol csapatként gyűjtögettek hulladékot elhagyott holdakról egy ijesztő szörnyek lakta világban.",min:"Négymagos 3 GHz-es processzor|8 GB RAM|GeForce GTX 960",rec:"Intel Core i5-8400|16 GB RAM|GeForce GTX 1060"},
{id:20,n:"Monster Hunter Wilds",c:"Akciójáték",y:2025,p:17990,h:[22,170],d:"Vadássz hatalmas szörnyekre a változó időjárású, élő ökoszisztémában, egyedül vagy akár négyen is.",min:"Intel Core i5-10400 / Ryzen 5 3600X|16 GB RAM|GeForce GTX 1660 Super",rec:"Intel Core i5-11600K / Ryzen 5 5600X|16 GB RAM|GeForce RTX 2060 Super"},
{id:21,n:"Hollow Knight: Silksong",c:"Akciójáték",y:2025,p:5990,h:[345,240],d:"Hornet útja Pharloom királyságában: gyors, kihívást jelentő metroidvania a Hollow Knight folytatásaként.",min:"Intel Core i5-3470|4 GB RAM|GeForce GTX 560 Ti",rec:"Intel Core i5-6600|8 GB RAM|GeForce GTX 960"},
{id:22,n:"Clair Obscur: Expedition 33",c:"RPG",y:2025,p:17990,h:[40,230],d:"Belle Époque ihletésű, körökre osztott szerepjáték valós idejű elemekkel, ahol minden évben egy újabb kor hal meg.",min:"Intel Core i7-6700K / Ryzen 5 2600|16 GB RAM|GeForce GTX 1060 / Radeon RX 580",rec:"Intel Core i7-10700 / Ryzen 5 5600X|16 GB RAM|GeForce RTX 2070 / Radeon RX 6700 XT"},
{id:23,n:"EA SPORTS FC 25",c:"Sport",y:2024,p:16990,h:[140,215],d:"A futball legnagyobb játéka új taktikai rendszerrel, több ezer valódi játékossal és bajnoksággal.",min:"Intel Core i5-6600K / Ryzen 5 1600|8 GB RAM|GeForce GTX 1050 Ti / Radeon RX 570",rec:"Intel Core i7-6800K / Ryzen 5 2600|12 GB RAM|GeForce GTX 1660 / Radeon RX 5700"},

];
const STEAM_IDS={1:1091500,2:292030,3:1245620,4:730,5:1174180,6:1145360,7:413150,8:289070,9:1551360,10:2050650,11:227300,12:367520,13:1086940,14:2358720,15:553850,16:1623730,17:990080,18:2379780,19:1966720,20:2246340,21:1030300,22:1903340,23:2669320};
const BAD=["fasz","kurva","geci","picsa","szar","fos","buzi","cigany","anyad","kurva","fuck","shit","bitch","cunt","nigger","dick","pussy","asshole"];
const $=s=>document.querySelector(s);
const F=n=>n===0?"Ingyenes":n.toLocaleString("hu-HU")+" Ft";
const IC={sun:'<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',moon:'<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>',cart:'<circle cx="9" cy="20" r="1"/><circle cx="18" cy="20" r="1"/><path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.5L21 8H6"/>',trash:'<path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 11v6M14 11v6"/>',check:'<path d="M20 6 9 17l-5-5"/>',card:'<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M2 10h20M6 15h4"/>',x:'<path d="M18 6 6 18M6 6l12 12"/>',plus:'<path d="M12 5v14M5 12h14"/>',minus:'<path d="M5 12h14"/>',pad:'<path d="M6 12h4M8 10v4"/><circle cx="15" cy="11" r="1"/><circle cx="18" cy="13" r="1"/><path d="M17.3 5H6.7a4 4 0 0 0-3.9 3.2L2 15a3 3 0 0 0 5.2 2.2L9 15h6l1.8 2.2A3 3 0 0 0 22 15l-.8-6.8A4 4 0 0 0 17.3 5z"/>',tag:'<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8z"/><circle cx="7.5" cy="7.5" r="1"/>',cal:'<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',bolt:'<path d="M13 2 3 14h9l-1 8 10-12h-9z"/>',grid:'<path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z"/>',download:'<path d="M12 3v12m0 0-4-4m4 4 4-4M4 21h16"/>',warn:'<path d="M12 3 2 21h20zM12 10v5M12 18h.01"/>',search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',coin:'<circle cx="12" cy="12" r="9"/><path d="M12 7v10M9.5 9.5h4a1.5 1.5 0 0 1 0 3h-3a1.5 1.5 0 0 0 0 3h4"/>',sort:'<path d="M3 6h18M6 12h12M10 18h4"/>',cpu:'<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',ram:'<rect x="2" y="7" width="20" height="10" rx="1"/><path d="M6 17v3M10 17v3M14 17v3M18 17v3M6 11h2M11 11h2M16 11h2"/>',gpu:'<rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',chevL:'<path d="m15 18-6-6 6-6"/>',chevR:'<path d="m9 18 6-6-6-6"/>',play:'<path d="M6 4l14 8-14 8z"/>',pause:'<path d="M7 5h3v14H7zm7 0h3v14h-3z"/>'};
const I=n=>'<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">'+IC[n]+'</svg>';
const ART={"RPG":'<path d="M0 215V150l60-50 50 40 70-70 80 80 60-45 140 90v20z" fill="#000" opacity=".28"/><circle cx="340" cy="60" r="26" fill="#fff" opacity=".18"/>',"Akciójáték":'<path d="M-20 215 120-10M60 215 200-10M300 215 440-10M380 215 520-10" stroke="#fff" stroke-width="14" opacity=".08"/><circle cx="230" cy="107" r="80" fill="none" stroke="#fff" stroke-width="3" opacity=".14"/>',"Szimulátor":'<circle cx="370" cy="55" r="34" fill="#fff" opacity=".2"/><path d="M0 215V165q80-50 160-10t160-10 140 20v50z" fill="#000" opacity=".26"/>',"Stratégia":'<g fill="none" stroke="#fff" opacity=".14" stroke-width="2"><path d="M60 40l30-17 30 17v35l-30 17-30-17zM120 75l30-17 30 17v35l-30 17-30-17zM300 130l30-17 30 17v35l-30 17-30-17zM360 95l30-17 30 17v35l-30 17-30-17z"/></g>',"Sport":'<path d="M230-10 0 215h460z" fill="#000" opacity=".3"/><path d="M230 0v215" stroke="#fff" stroke-width="6" stroke-dasharray="14 12" opacity=".25"/>',"Horror":'<g fill="#000" opacity=".35"><path d="M20 215 40 70l20 145zM85 215l20-170 20 170zM350 215l20-140 20 140zM410 215l18-100 18 100z"/></g><circle cx="230" cy="107" r="130" fill="#000" opacity=".18"/>'};
const SALE={14:20,16:30,17:45,19:50,23:60,1:30,2:60,3:25,5:50,6:20,8:50,9:40,10:35};
G.forEach(g=>{g.o=g.p;const s=SALE[g.id];if(s&&g.p){g.s=s;g.p=Math.round(g.p*(100-s)/1000)*10}});
const PR=(g,big)=>{const st=big?' style="font-size:24px"':'';if(g.s)return'<span class="pw"><span><span class="pct">-'+g.s+'%</span> <s class="old">'+F(g.o)+'</s></span><span class="price"'+st+'>'+F(g.p)+'</span></span>';return'<span class="price'+(g.p?'':' free')+'"'+st+'>'+F(g.p)+'</span>'};
const svgCover=g=>{const s=Math.max(20,Math.min(40,Math.round(640/g.n.length)));const v='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460 215"><defs><linearGradient id="a" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="hsl('+g.h[0]+',75%,42%)"/><stop offset="1" stop-color="hsl('+g.h[1]+',70%,12%)"/></linearGradient></defs><rect width="460" height="215" fill="url(#a)"/><circle cx="390" cy="40" r="110" fill="#fff" opacity=".07"/><circle cx="50" cy="200" r="90" fill="#000" opacity=".18"/>'+(ART[g.c]||"")+'<text x="230" y="118" text-anchor="middle" font-family="Arial Black,Arial,sans-serif" font-weight="900" font-size="'+s+'" fill="#fff">'+g.n.replace(/&/g,"&amp;")+'</text></svg>';return"data:image/svg+xml,"+encodeURIComponent(v)};
const cover=g=>{if(g.img)return g.img;const sid=STEAM_IDS[g.id];if(sid)return"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/"+sid+"/header.jpg";return svgCover(g)};
const gallery=g=>{if(Array.isArray(g.imgs)&&g.imgs.length)return g.imgs;const main=cover(g),fb=svgCover(g);return main===fb?[fb]:[main,fb]};
window.__pvFallback=id=>{const g=G.find(x=>x.id==id);return g?svgCover(g):""};
const st={q:"",cats:new Set(),cat:"Összes",min:"",max:"",yr:"",so:"n"};
let cart={};
try{cart=JSON.parse(localStorage.getItem("pv-cart")||"{}")||{}}catch(e){cart={}}
const save=()=>{try{localStorage.setItem("pv-cart",JSON.stringify(cart))}catch(e){}};
const cats=["Összes",...new Set(G.map(g=>g.c))];
$("#chips").innerHTML=cats.map(c=>'<button class="chip'+(c==="Összes"?" on":"")+'" data-c="'+c+'">'+I(c==="Összes"?"grid":"tag")+' '+c+'</button>').join("");
$("#yr").innerHTML='<option value="">Minden év</option>'+[...new Set(G.map(g=>g.y))].sort((a,b)=>b-a).map(y=>'<option>'+y+'</option>').join("");
const norm=s=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
const hasBad=s=>BAD.some(w=>norm(s).includes(w));
function render(){const gr=$("#grid");gr.style.minHeight=Math.max(gr.offsetHeight,Math.round(innerHeight*.85))+"px";
let r=G.filter(g=>(!st.cats.size||st.cats.has(g.c))&&(!st.yr||g.y==st.yr)&&(!st.min||g.p>=+st.min)&&(!st.max||g.p<=+st.max)&&(!st.q||norm(g.n+" "+g.c).includes(norm(st.q))));
const so=st.so;r.sort((a,b)=>so==="pa"?a.p-b.p:so==="pd"?b.p-a.p:so==="yd"?b.y-a.y:a.n.localeCompare(b.n,"hu"));
$("#grid").innerHTML=r.length?r.map(g=>'<article class="card" data-id="'+g.id+'"><img alt="'+g.n+'" src="'+cover(g)+'" loading="lazy" onerror="this.onerror=null;this.src=window.__pvFallback('+g.id+')"><div class="cb"><div class="meta"><span class="tag">'+I("tag")+g.c+'</span><span>'+I("cal")+g.y+'</span></div><h3>'+g.n+'</h3><p>'+g.d+'</p><div class="buy">'+PR(g)+'<button class="add" data-add="'+g.id+'">'+I("cart")+'Kosárba</button></div></div></article>').join(""):'<div class="empty">'+I("search")+' Nincs a feltételeknek megfelelő játék.</div>';
revealCards();
}
function drawCart(){
const ids=Object.keys(cart).filter(i=>cart[i]>0);let t=0,n=0;
$("#items").innerHTML=ids.length?ids.map(i=>{const g=G.find(x=>x.id==i);t+=g.p*cart[i];n+=cart[i];return'<div class="it"><img alt="'+g.n+'" src="'+cover(g)+'" onerror="this.onerror=null;this.src=window.__pvFallback('+g.id+')"><div><b>'+g.n+'</b>'+F(g.p)+'<div class="q"><button data-q="-1" data-i="'+i+'">'+I("minus")+'</button><span>'+cart[i]+'</span><button data-q="1" data-i="'+i+'">'+I("plus")+'</button></div></div><button class="rm" data-rm="'+i+'" title="Törlés" aria-label="Törlés">'+I("trash")+'</button></div>'}).join(""):'<p style="color:var(--mu);padding:30px 0;text-align:center">'+I("cart")+' A kosarad üres.</p>';
$("#tot").textContent=F(t).replace("Ingyenes","0 Ft");$("#cnt").textContent=n;$("#pay").disabled=!ids.length;save();
}

let slideState={imgs:[],idx:0,timer:null,playing:false,gameId:null};
function stopSlideshow(){
if(slideState.timer){clearInterval(slideState.timer);slideState.timer=null}
slideState.playing=false;
const pb=$("#slPlay");if(pb)pb.innerHTML=I("play")+'<span>Slideshow</span>';
}
function updateSlide(idx){
if(!slideState.imgs.length)return;
slideState.idx=(idx+slideState.imgs.length)%slideState.imgs.length;
const img=$("#slImg");
if(img){
img.style.opacity="0";
setTimeout(()=>{
img.src=slideState.imgs[slideState.idx];
img.style.opacity="1";
},90);
}
document.querySelectorAll("#slDots button").forEach((b,i)=>b.classList.toggle("on",i===slideState.idx));
const ct=$("#slCount");if(ct)ct.textContent=(slideState.idx+1)+" / "+slideState.imgs.length;
}
function startSlideshow(){
if(slideState.imgs.length<2)return;
stopSlideshow();
slideState.playing=true;
const pb=$("#slPlay");if(pb)pb.innerHTML=I("pause")+'<span>Szünet</span>';
slideState.timer=setInterval(()=>updateSlide(slideState.idx+1),2800);
}
function closeModal(){
stopSlideshow();
$("#mo").classList.remove("on");
}

function openGame(id){
stopSlideshow();
const g=G.find(x=>x.id==id);
const imgs=gallery(g);
slideState={imgs,idx:0,timer:null,playing:false,gameId:g.id};
const L=(a,k)=>a.split("|").map((v,i)=>'<li><b>'+I(["cpu","ram","gpu"][i])+k[i]+'</b>'+v+'</li>').join("");
const K=["Processzor","Memória","Videokártya"];
const multi=imgs.length>1;
$("#mb").innerHTML='<div class="sl"><img id="slImg" alt="'+g.n+'" src="'+imgs[0]+'" onerror="this.onerror=null;this.src=window.__pvFallback('+g.id+')">'+(multi?'<button type="button" class="sl-btn prev" id="slPrev" aria-label="Előző kép">'+I("chevL")+'</button><button type="button" class="sl-btn next" id="slNext" aria-label="Következő kép">'+I("chevR")+'</button><div class="sl-bar"><div class="sl-dots" id="slDots">'+imgs.map((_,i)=>'<button type="button" class="'+(i===0?"on":"")+'" data-sl="'+i+'" aria-label="'+(i+1)+'. kép"></button>').join("")+'</div><div class="sl-ctrl"><span id="slCount">1 / '+imgs.length+'</span><button type="button" class="sl-play" id="slPlay">'+I("play")+'<span>Slideshow</span></button></div></div>':'')+'</div><div class="mb"><div class="meta"><span class="tag">'+I("tag")+g.c+'</span><span>'+I("cal")+'Megjelenés: '+g.y+'</span></div><h2>'+g.n+'</h2><p style="color:var(--mu);margin-top:10px">'+g.d+'</p><div class="req"><div><h4>Minimális követelmények</h4><ul style="padding:0">'+L(g.min,K)+'</ul></div><div><h4>Ajánlott követelmények</h4><ul style="padding:0">'+L(g.rec,K)+'</ul></div></div><div class="buy">'+PR(g,1)+'<button class="add" data-add="'+g.id+'" style="padding:13px 26px">'+I("cart")+'Kosárba</button></div></div>';
$("#mo").classList.add("on");
}

const toast=()=>{};
document.addEventListener("click",e=>{
const t=e.target;
const a=t.closest("[data-add]");if(a){cart[a.dataset.add]=(cart[a.dataset.add]||0)+1;drawCart();const cn=$("#cnt");cn.classList.remove("bump");void cn.offsetWidth;cn.classList.add("bump");const o=a.innerHTML;a.innerHTML=I("check")+"Hozzáadva";setTimeout(()=>{a.innerHTML=o},900);e.stopPropagation();return}
if(t.closest("#slPrev")){stopSlideshow();updateSlide(slideState.idx-1);return}
if(t.closest("#slNext")){stopSlideshow();updateSlide(slideState.idx+1);return}
if(t.closest("#slPlay")){slideState.playing?stopSlideshow():startSlideshow();return}
const sdot=t.closest("[data-sl]");if(sdot){stopSlideshow();updateSlide(+sdot.dataset.sl);return}
const c=t.closest(".chip");if(c){const v=c.dataset.c;if(v==="Összes")st.cats.clear();else if(st.cats.has(v))st.cats.delete(v);else st.cats.add(v);document.querySelectorAll(".chip").forEach(x=>x.classList.toggle("on",x.dataset.c==="Összes"?!st.cats.size:st.cats.has(x.dataset.c)));render();return}
const nl=t.closest("[data-cat]");if(nl){st.cat=nl.dataset.cat;document.querySelectorAll(".chip").forEach(x=>x.classList.toggle("on",x.dataset.c===st.cat));render();return}
const q=t.closest("[data-q]");if(q){const i=q.dataset.i;cart[i]=Math.max(0,cart[i]+ +q.dataset.q);if(!cart[i])delete cart[i];drawCart();return}
const r=t.closest("[data-rm]");if(r){delete cart[r.dataset.rm];drawCart();return}
const mg=t.closest("[data-g]");if(mg){openGame(mg.dataset.g);return}
const card=t.closest(".card");if(card){openGame(card.dataset.id);return}
if(t===$("#mo")||t===$("#mx")||t.closest("#mx"))closeModal();
if(t===$("#dov")||t===$("#dx")||t.closest("#dx")){$("#dr").classList.remove("on");$("#dov").classList.remove("on")}
});
document.addEventListener("keydown",e=>{
if(!$("#mo").classList.contains("on"))return;
if(e.key==="Escape")closeModal();
else if(e.key==="ArrowLeft"){stopSlideshow();updateSlide(slideState.idx-1)}
else if(e.key==="ArrowRight"){stopSlideshow();updateSlide(slideState.idx+1)}
});
$("#cartOpen").onclick=()=>{$("#dr").classList.add("on");$("#dov").classList.add("on")};
$("#pay").onclick=()=>{const po=document.createElement("div");po.className="ov on";po.style.zIndex=90;po.innerHTML='<div class="pbox"><div class="spin"></div><h3>Fizetés folyamatban</h3><p>Fizetendő összeg: <b>'+$("#tot").textContent+'</b></p><span class="st">'+I("card")+' Jóváhagyásra vár</span><p>A tranzakció a bank jóváhagyására vár. Kérjük, ne zárd be az oldalt.</p><button>Rendben</button></div>';po.addEventListener("click",e=>{if(e.target===po||e.target.tagName==="BUTTON")po.remove()});document.body.appendChild(po)};
const num=el=>{el.addEventListener("keydown",e=>{if(e.key.length===1&&!/\d/.test(e.key)&&!e.ctrlKey&&!e.metaKey)e.preventDefault()});el.addEventListener("input",()=>{el.value=el.value.replace(/\D/g,"").slice(0,6);st[el.id==="pmin"?"min":"max"]=el.value;syncR();render()});el.addEventListener("paste",e=>{e.preventDefault();const t=(e.clipboardData.getData("text")||"").replace(/\D/g,"").slice(0,6);el.value=t;el.dispatchEvent(new Event("input"))})};
num($("#pmin"));num($("#pmax"));
$("#q").addEventListener("input",e=>{let v=e.target.value.replace(/[^\p{L}\p{N} \-:'.]/gu,"").slice(0,40);if(hasBad(v)){e.target.value="";st.q="";$("#warn").textContent="⚠️ Kérjük, ne használj durva kifejezéseket a keresőben.";render();return}$("#warn").textContent="";e.target.value=v;st.q=v;render()});
$("#yr").onchange=e=>{st.yr=e.target.value;render()};
$("#so").onchange=e=>{st.so=e.target.value;render()};
$(".logo i").innerHTML=I("pad");$("#cartOpen").innerHTML=I("cart")+' Kosár<b id="cnt">0</b>';$(".pill").innerHTML=I("bolt")+" Őszi leárazás – akár 60% kedvezmény";$(".cta").innerHTML=I("search")+" Böngészés indítása";$("#pay").innerHTML=I("card")+" Fizetés kártyával";$("#mx").innerHTML=I("x");$("#dx").innerHTML=I("x");$("#dr h2").innerHTML=I("cart")+" Kosarad";$("#shop h2").innerHTML=I("grid")+" Játékkatalógus";
document.querySelectorAll(".stats>div").forEach((d,i)=>d.insertAdjacentHTML("afterbegin",'<div class="si">'+I(["pad","grid","download"][i])+'</div>'));
document.querySelectorAll(".filters label").forEach((l,i)=>{const t=l.firstChild,s=document.createElement("span");s.innerHTML=I(["coin","coin","cal","sort"][i])+" "+t.textContent;l.replaceChild(s,t)});
const r1=$("#r1"),r2=$("#r2"),rf=$("#rf"),MAXR=20000;
const fm=n=>(+n).toLocaleString("hu-HU")+" Ft";
function fill(){const a=+r1.value,b=+r2.value;rf.style.left=a/MAXR*100+"%";rf.style.right=100-b/MAXR*100+"%";$("#rv1").textContent=fm(a);$("#rv2").textContent=fm(b)}
function syncR(){r1.value=Math.min(+st.min||0,MAXR);r2.value=st.max===""?MAXR:Math.min(+st.max,MAXR);fill()}
[r1,r2].forEach(r=>r.addEventListener("input",()=>{let a=+r1.value,b=+r2.value;if(a>b){if(r===r1){a=b;r1.value=a}else{b=a;r2.value=b}}st.min=a>0?String(a):"";st.max=b<MAXR?String(b):"";$("#pmin").value=st.min;$("#pmax").value=st.max;fill();render()}));
fill();
const root=document.documentElement;
const eff=()=>root.dataset.theme||(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");
function setTh(t){root.dataset.theme=t;$("#tg").innerHTML=I(t==="dark"?"sun":"moon");try{localStorage.setItem("pv-theme",t)}catch(e){}}
let sv=null;try{sv=localStorage.getItem("pv-theme")}catch(e){}
setTh(sv==="light"||sv==="dark"?sv:eff());
$("#tg").onclick=()=>setTh(eff()==="dark"?"light":"dark");
const mh=G.map(g=>'<span data-g="'+g.id+'">'+g.n+'</span>').join("");$("#mt").innerHTML=mh+mh;
const IO=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const t=e.target;t.classList.add("in");IO.unobserve(t);setTimeout(()=>{t.style.transitionDelay=""},900)}}),{threshold:.08});
function revealCards(){document.querySelectorAll(".card:not(.in)").forEach((c,i)=>{c.style.transitionDelay=Math.min(i,8)*60+"ms";IO.observe(c)})}
document.addEventListener("pointermove",e=>{const c=e.target.closest&&e.target.closest(".card");if(c){const r=c.getBoundingClientRect();c.style.setProperty("--mx",e.clientX-r.left+"px");c.style.setProperty("--my",e.clientY-r.top+"px")}});
document.querySelectorAll(".stats b").forEach(b=>{const m=b.textContent.match(/^(\d+)(\+?)$/);if(!m)return;const n=+m[1],t0=performance.now();const step=t=>{const p=Math.min((t-t0)/1200,1);b.textContent=Math.round(n*(1-Math.pow(1-p,3)))+m[2];if(p<1)requestAnimationFrame(step)};requestAnimationFrame(step)});
document.addEventListener("focusout",()=>{$("#grid").style.minHeight=""});
render();drawCart();
