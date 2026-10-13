/*
 * DATA TESTIMONI PELANGGAN
 * Pastikan ulasan dan nama di bawah merupakan testimoni pelanggan yang nyata
 * dan telah mendapat izin untuk dipublikasikan.
 */
var TESTIMONI_DATA = [
  { nama:"Ahmad Fauzi", peran:"Pelanggan - Tangerang", rating:5, teks:"Order Pasir Tayan di Warso Jaya benar-benar tidak mengecewakan. Pasirnya bersih, minim lumpur, dan respon admin fast respon banget. Pengiriman langsung sampai lokasi di Tangerang tanpa kendala!" },
  { nama:"Budi Santoso", peran:"Pelanggan Material", rating:5, teks:"Sangat puas belanja material di sini. Bebas ongkos bongkar muat sesuai dengan promonya. Driver ramah dan batu makadamnya kualitas super!" },
  { nama:"Haji Ridwan", peran:"Proyek Perumahan", rating:5, teks:"Sudah berlangganan untuk proyek perumahan saya. Pasir Hitam Cor MSand-nya padat dan bikin adonan semen makin kokoh. Sukses terus WARSO JAYA!" },
  { nama:"Dedi Kurniawan", peran:"Pelanggan Material", rating:5, teks:"Batu belah pondasinya ukurannya pas, kokoh, dan tidak banyak pecahan kecil. Pengiriman cepat begitu ditransfer langsung meluncur truknya." },
  { nama:"Eko Prasetyo", peran:"Renovasi Rumah", rating:5, teks:"Pelayanan mantap! Gratis ongkirnya beneran tanpa ada biaya tersembunyi. Pasir Rangkas Abadi yang dipesan kualitasnya jos untuk plester dinding." },
  { nama:"Hendra Saputra", peran:"Pelanggan - Urugan Rumah", rating:5, teks:"Tanah merah urugannya bagus banget, padat dan bersih dari sampah. Sangat membantu untuk peninggian pekarangan rumah saya." },
  { nama:"Irfan Wijaya", peran:"Proyek Jalan", rating:5, teks:"Batu Limestone dan Sirdamnya pas banget buat pengerasan jalan proyek desa kami. Harga sangat bersaing dibanding toko material lain!" },
  { nama:"Lukman Hakim", peran:"Pelanggan Material", rating:5, teks:"Awalnya ragu beli online, tapi ternyata WARSO JAYA terpercaya banget. Pasir Bangka Belitungnya halus, putih bersih, cocok buat pasang keramik." },
  { nama:"Muhammad Arifin", peran:"Renovasi Dapur", rating:5, teks:"Proses order via WhatsApp sangat praktis. Rekomendasi pasir dari adminnya pas dengan kebutuhan proyek renovasi dapur saya." },
  { nama:"Nugroho Pratama", peran:"Pelanggan Material", rating:5, teks:"Abu batunya sangat cocok buat cetak paving block. Butirannya seragam dan cepat kering pas dicampur semen. Bintang 5 buat pelayanannya!" },
  { nama:"Rian Hidayat", peran:"Pelanggan Material", rating:5, teks:"Bata merahnya matang sempurna, tidak gampang patah pas dibongkar. Terima kasih bonus ongkos kulinya, mas!" },
  { nama:"Syaiful Bahri", peran:"Pelanggan Material", rating:5, teks:"Pasir Jalupang Kuningnya top banget! Hasil plesteran halus dan tidak retak-retak rambut. Bakal jadi langganan tetap ini." },
  { nama:"Taufik Hidayat", peran:"Pelanggan Material", rating:5, teks:"Muatan penuh takaran jujur! Ini yang paling penting kalau beli material pasir & batu. WARSO JAYA recommended seller!" },
  { nama:"Wahyu Setiawan", peran:"Pelanggan - Pengiriman", rating:5, teks:"Pengiriman super kilat, pagi pesan siang barang sudah sampai lokasi. Driver jago masuk gang sempit." },
  { nama:"Yudi Gunawan", peran:"Pelanggan Material", rating:5, teks:"Batu Sirtu Alam urugannya padat dan bercampur sempurna antara batu dan pasirnya. Sangat puas dengan layanannya." },
  { nama:"Agus Hermawan", peran:"Pelanggan Material", rating:5, teks:"Pasir Jawilannya jos ganjos buat pasang bata dan cor ringan. Harga murah tapi kualitas tidak murah!" },
  { nama:"Bambang Rusli", peran:"Pelanggan Material", rating:5, teks:"Admin ramah, pengiriman tepat waktu, material sesuai dengan foto katalog. Mantap WARSO JAYA!" },
  { nama:"Candra Kirana", peran:"Renovasi Rumah", rating:5, teks:"Gratis ongkos bongkar sangat menghemat biaya operasional renovasi rumah. Sukses selalu untuk usahanya!" },
  { nama:"Fajar Lesmana", peran:"Pelanggan Material", rating:5, teks:"Kualitas material benar-benar terjamin. Pasir bebas lumpur bikin pemakaian semen jadi lebih hemat." },
  { nama:"Ginanjar Slamet", peran:"Pelanggan - Jabodetabek", rating:5, teks:"Toko material terpercaya di Jabodetabek! Pengiriman sesuai pesanan dan armada truknya banyak jadi tidak perlu antre lama." },
  { nama:"Herman Susilo", peran:"Pelanggan Material", rating:4, teks:"Kualitas Pasir Tayan sangat bagus dan padat. Pengiriman agak sedikit terlambat karena kendala macet di jalan, tapi driver mengabari dengan sopan." },
  { nama:"Indra Kusuma", peran:"Pelanggan Material", rating:4, teks:"Batu makadamnya bagus dan sesuai takaran. Hanya saja respon WA sempat agak lambat pas jam makan siang, tapi selebihnya pelayanan oke banget." },
  { nama:"Rizky Febrian", peran:"Pelanggan Material", rating:4, teks:"Material bagus dan bongkar muat gratis. Sayang lokasi proyek saya jalannya agak becek jadi truk harus parkir sedikit lebih jauh, tapi kulinya tetap bantu sampai selesai." },
  { nama:"Pak Bambang", peran:"Mandor Bangunan - Tangerang", rating:5, teks:"Respon cepat via WA, harga bersahabat dan takaran truknya pas. Langganan kirim pasir plester di Pagedangan." }
];
(function(){
  function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!==undefined)e.textContent=x;return e;}
  document.addEventListener("DOMContentLoaded",function(){
    var g=document.getElementById("testiGrid");if(!g)return;
    var inv=g.querySelector(".t-invite"),LIMIT=6,cards=[];
    TESTIMONI_DATA.forEach(function(t){
      var c=el("article","t-card");c.appendChild(el("span","t-quote","\u201C"));
      var st=el("div","stars");st.setAttribute("aria-label","Rating "+t.rating+" dari 5");st.innerHTML='<i class="fa-solid fa-star"></i>'.repeat(Math.max(1,Math.min(5,t.rating||5)));c.appendChild(st);
      c.appendChild(el("p","",t.teks));
      var w=el("div","t-who"),av=el("div","t-av",(t.nama||"?").charAt(0).toUpperCase()),b=el("div"),n=el("b","",t.nama),s=el("span","",t.peran||"");
      b.append(n,s);w.append(av,b);c.appendChild(w);cards.push(c);g.insertBefore(c,inv);
    });
    if(cards.length>LIMIT){
      cards.slice(LIMIT).forEach(function(c){c.hidden=true;});
      var btn=el("button","btn-outline-dark t-more","Lihat selengkapnya ("+cards.length+")");btn.type="button";btn.setAttribute("aria-expanded","false");
      btn.onclick=function(){cards.forEach(function(c){c.hidden=false;});btn.remove();};
      g.parentNode.appendChild(btn);
    }
  });
})();
