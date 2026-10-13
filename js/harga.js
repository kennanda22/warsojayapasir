/* ===== DATA HARGA — ubah angka di sini saja =====
   Urutan harga: [Tangerang, Jakarta, Depok, Bogor, Bekasi]  |  null = "Hubungi Kami"
   Satuan: per rit colt diesel 6,1 m³ (kecuali yang disebut lain di "unit") */
var HG_CITIES=["Tangerang","Jakarta","Depok","Bogor","Bekasi"];
var HG_UNIT="Colt Diesel 6,1 m³";
var HG=[
 ["Pasir Bangka Cream","pasir",[2750000,2800000,2800000,2850000,2850000]],
 ["Pasir Bangka Putih","pasir",[2800000,2850000,2850000,2900000,2900000]],
 ["Pasir Bangka Kuning","pasir",[2750000,2800000,2800000,2850000,2850000]],
 ["Pasir Bangka Super","pasir",null],
 ["Pasir Cilegon","pasir",[1800000,1850000,1900000,1950000,1950000]],
 ["Pasir Rangkas","pasir",[2300000,2350000,2350000,2400000,2400000]],
 ["Pasir Rangkas Abadi","pasir",[2350000,2500000,2450000,2500000,2650000]],
 ["Pasir Jalupang","pasir",[2550000,2600000,2600000,2650000,2650000]],
 ["Pasir Jalupang Kuning","pasir",null],
 ["Pasir Jawilan","pasir",[2650000,2700000,2700000,2750000,2750000]],
 ["Pasir Hitam Cor M-Sand","pasir",[2500000,2550000,2550000,2600000,2650000]],
 ["Pasir Tayan Kalimantan","pasir",[2650000,2700000,2700000,2750000,2750000]],
 ["Batu Split Uk 1-2","batu",[2900000,3000000,2950000,3100000,3100000]],
 ["Batu Split Uk 2-3","batu",[2900000,3000000,2950000,3100000,3100000]],
 ["Batu Split Uk 3-5","batu",[2850000,2950000,2900000,3050000,3050000]],
 ["Batu Screening","batu",[2950000,3050000,3050000,3050000,3150000]],
 ["Batu Basecourse","batu",[2600000,2650000,2650000,2700000,2750000]],
 ["Batu Makadam","urugan",[1950000,2100000,2100000,2150000,2200000]],
 ["Batu Limestone","urugan",null],
 ["Abu Batu","pasir",[2550000,2600000,2600000,2650000,2650000]],
 ["Batu Belah / Pondasi","batu",[2200000,2300000,2300000,2350000,2350000]],
 ["Batu Bata Merah","batu",null,"Per buah"],
 ["Sirdam","urugan",[1950000,2100000,2100000,2150000,2200000]],
 ["Batu Sirtu Alam Urugan","urugan",[1500000,1600000,1600000,1600000,1700000]],
 ["Pasir Urug Kasar / Brangkal Urugan","urugan",null],
 ["Tanah Merah Urugan","urugan",[1250000,1300000,1300000,1300000,1350000]]
];
(function(){
  var WA="628811653722",$=function(s){return document.querySelector(s)};
  var st={city:1,cat:"all",q:"",sort:"katalog"};
  function rp(n){return "Rp "+n.toLocaleString("id-ID")}
  function img(n){try{var p=products.find(function(x){return x.name===n});return p?p.img:""}catch(e){return ""}}
  function wa(txt){return "https://wa.me/"+WA+"?text="+encodeURIComponent(txt)}
  function catLabel(c){return c==="pasir"?"Pasir":c==="batu"?"Batu":"Urugan"}
  function price(r,c){return r[2]?r[2][c]:null}
  function rows(){
    var c=st.city==="all"?1:st.city;
    var l=HG.filter(function(r){
      var okc=st.cat==="all"||(st.cat==="batu"?(r[1]==="batu"||r[1]==="urugan"):r[1]===st.cat);
      return okc&&(!st.q||r[0].toLowerCase().indexOf(st.q)>-1)});
    if(st.sort!=="katalog"){
      l=l.slice().sort(function(a,b){var pa=price(a,c),pb=price(b,c);
        if(pa===null&&pb===null)return 0;if(pa===null)return 1;if(pb===null)return -1;
        return st.sort==="murah"?pa-pb:pb-pa});
    }
    return l;
  }
  function msg(r,cityName){
    return "Halo Warso Jaya Pasir, saya ingin menanyakan/memesan "+r[0]+" ("+(r[3]||HG_UNIT)+")"+(cityName?" untuk pengiriman ke "+cityName:"")+". Mohon info ketersediaan dan harganya.";
  }
  function render(){
    var all=st.city==="all",l=rows(),h="",b="";
    h="<tr><th>Produk</th>"+(all?HG_CITIES.map(function(c){return "<th class='hg-num'>"+c+"</th>"}).join(""):"<th class='hg-num'>Harga "+HG_CITIES[st.city]+"</th>")+"<th class='hg-act'></th></tr>";
    l.forEach(function(r){
      var im=img(r[0]),unit=r[3]||HG_UNIT,cn=all?"":HG_CITIES[st.city];
      b+="<tr><td class='hg-prod'>"+(im?"<img src='"+im+"' alt='' loading='lazy' decoding='async' width='56' height='56'>":"")+"<div><b>"+r[0]+"</b><span>"+catLabel(r[1])+" · "+unit+"</span></div></td>";
      if(all){HG_CITIES.forEach(function(c,i){var p=price(r,i);b+="<td class='hg-num'>"+(p?"<strong>"+rp(p)+"</strong>":"<em>Hubungi</em>")+"</td>"})}
      else{var p=price(r,st.city);b+="<td class='hg-num'>"+(p?"<strong>"+rp(p)+"</strong><small>per rit</small>":"<em>Hubungi Kami</em>")+"</td>"}
      b+="<td class='hg-act'><a class='hg-btn' target='_blank' rel='noopener' href='"+wa(msg(r,cn))+"' aria-label='Pesan "+r[0]+" lewat WhatsApp'><i class='fa-brands fa-whatsapp'></i><span>Pesan</span></a></td></tr>";
    });
    $("#hgHead").innerHTML=h;
    $("#hgBody").innerHTML=b||"<tr><td colspan='8' class='hg-empty'>Produk tidak ditemukan.</td></tr>";
    $("#hgCount").textContent=l.length+" produk";
    requestAnimationFrame(barSync);
  }
  /* bar geser kiri-kanan (thumb buatan sendiri, selalu terlihat) */
  function barSync(){
    var sc=$("#hgScroll"),tr=$("#hgTrack"),th=$("#hgThumb"),bar=$("#hgBar");if(!sc||!tr)return;
    var over=sc.scrollWidth>sc.clientWidth+2;
    bar.classList.toggle("on",over||st.city==="all");bar.classList.toggle("static",!over);
    var tw=tr.clientWidth,ratio=Math.min(1,sc.clientWidth/sc.scrollWidth),w=Math.max(48,tw*ratio),max=tw-w,
        span=sc.scrollWidth-sc.clientWidth,left=span>0?sc.scrollLeft/span*max:0;
    th.style.width=w+"px";th.style.transform="translateX("+left+"px)";
  }
  function barInit(){
    var sc=$("#hgScroll"),tr=$("#hgTrack"),th=$("#hgThumb");if(!sc||!tr)return;
    sc.addEventListener("scroll",function(){requestAnimationFrame(barSync)},{passive:true});
    var drag=null;
    th.addEventListener("pointerdown",function(e){drag={x:e.clientX,l:sc.scrollLeft};th.setPointerCapture(e.pointerId);th.classList.add("drag");e.preventDefault()});
    th.addEventListener("pointermove",function(e){if(!drag)return;var tw=tr.clientWidth,w=th.offsetWidth,max=Math.max(1,tw-w),span=sc.scrollWidth-sc.clientWidth;sc.scrollLeft=drag.l+(e.clientX-drag.x)/max*span});
    function end(){drag=null;th.classList.remove("drag")}th.addEventListener("pointerup",end);th.addEventListener("pointercancel",end);
    tr.addEventListener("pointerdown",function(e){if(e.target===th)return;var r=tr.getBoundingClientRect(),w=th.offsetWidth,max=Math.max(1,r.width-w),x=Math.min(max,Math.max(0,e.clientX-r.left-w/2));sc.scrollTo({left:x/max*(sc.scrollWidth-sc.clientWidth),behavior:"smooth"})});
    $("#hgL").addEventListener("click",function(){sc.scrollBy({left:-Math.max(240,sc.clientWidth*.6),behavior:"smooth"})});
    $("#hgR").addEventListener("click",function(){sc.scrollBy({left:Math.max(240,sc.clientWidth*.6),behavior:"smooth"})});
    window.addEventListener("resize",barSync);
  }
  function chips(id,attr,cb){
    document.querySelectorAll(id+" button").forEach(function(btn){btn.addEventListener("click",function(){
      document.querySelectorAll(id+" button").forEach(function(x){x.classList.remove("on")});btn.classList.add("on");cb(btn.dataset[attr]);render();est()})});
  }
  /* estimator */
  function est(){
    var sel=$("#esProd"),qty=Math.max(1,parseInt($("#esQty").value)||1),ci=parseInt($("#esCity").value);
    var r=HG.filter(function(x){return x[0]===sel.value})[0],p=r&&price(r,ci),out=$("#esOut"),btn=$("#esWa");
    if(!r)return;
    if(p){out.innerHTML="<small>Perkiraan total</small><b>"+rp(p*qty)+"</b><span>"+qty+" rit × "+rp(p)+" ("+HG_CITIES[ci]+")</span>"}
    else{out.innerHTML="<small>Perkiraan total</small><b>Hubungi Kami</b><span>Harga untuk produk ini belum tercantum</span>"}
    btn.href=wa("Halo Warso Jaya Pasir, saya ingin memesan "+r[0]+" sebanyak "+qty+" rit ("+(r[3]||HG_UNIT)+") untuk pengiriman ke "+HG_CITIES[ci]+(p?" (perkiraan total "+rp(p*qty)+")":"")+". Mohon info ketersediaan.");
  }
  document.addEventListener("DOMContentLoaded",function(){
    if(!$("#hgBody"))return;
    chips("#hgCity","c",function(v){st.city=v==="all"?"all":parseInt(v)});
    chips("#hgCat","k",function(v){st.cat=v});
    $("#hgSearch").addEventListener("input",function(e){st.q=e.target.value.toLowerCase().trim();render()});
    $("#hgSort").addEventListener("change",function(e){st.sort=e.target.value;render()});
    $("#esProd").innerHTML=HG.map(function(r){return "<option>"+r[0]+"</option>"}).join("");
    $("#esCity").innerHTML=HG_CITIES.map(function(c,i){return "<option value='"+i+"'"+(i===1?" selected":"")+">"+c+"</option>"}).join("");
    ["#esProd","#esCity","#esQty"].forEach(function(s){$(s).addEventListener("input",est)});
    barInit();render();est();
  });
})();
