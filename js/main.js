const imgPasirWhite = 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80';
const imgPasirYellow = 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80';
const imgBatuSplit = 'https://images.unsplash.com/photo-1535732820275-9ffd998cac22?auto=format&fit=crop&w=600&q=80';
const imgBatuKali = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80';
const imgBataMerah = 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80';
const imgTanahUrug = 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=600&q=80';

const PCAT = {"pasir-bangka":"PASIR BANGKA","pasir-cor":"PASIR COR & BANGUNAN","split":"BATU SPLIT","batu":"BATU & PONDASI","urugan":"BAHAN URUGAN"};
const products = [
    { id: 1, name: "Pasir Bangka Belitung", category: "pasir-bangka", desc: "Pasir putih berkualitas premium, minim lumpur, terbaik untuk hasil plester halus.", fullDesc: "Pasir Bangka Belitung bertekstur halus dan umumnya dipilih untuk plesteran serta acian. Hubungi kami untuk ketersediaan terbaru.", lumpur: "Pasir Bangka", tekstur: "Halus, terang", aplikasi: "Plester halus, acian", img: "images/produk/pasir-bangka-belitung.jpg" },
    { id: 2, name: "Pasir Bangka Belitung Kuning", category: "pasir-bangka", desc: "Pasir bangka belitung berwarna kuning untuk kebutuhan konstruksi.", fullDesc: "Pasir Bangka Belitung Kuning untuk berbagai pekerjaan konstruksi. Sebutkan jenis pekerjaan Anda, kami bantu pilihkan.", lumpur: "Pasir Bangka", tekstur: "Sedang, kuning", aplikasi: "Konstruksi umum", img: "images/produk/pasir-bangka-belitung-kuning.jpg" },
    { id: 3, name: "Pasir Bangka Cream", category: "pasir-bangka", desc: "Pasir bangka warna cream untuk kebutuhan konstruksi.", fullDesc: "Pasir Bangka Cream untuk berbagai pekerjaan konstruksi. Tanyakan ketersediaan dan harga terbaru.", lumpur: "Pasir Bangka", tekstur: "Sedang, cream", aplikasi: "Konstruksi umum", img: "images/produk/pasir-bangka-cream.jpg" },
    { id: 4, name: "Pasir Cilegon", category: "pasir-cor", desc: "Pasir pasang & cor berkualitas tinggi, ideal untuk beton dan plesteran.", fullDesc: "Pasir Cilegon dipakai untuk pekerjaan pasang dan cor, ideal untuk beton dan plesteran. Hubungi kami untuk detail.", lumpur: "Pasir Cor & Bangunan", tekstur: "Sedang", aplikasi: "Pasang, cor beton, plester", img: "images/produk/pasir-cilegon.jpg" },
    { id: 5, name: "Pasir Rangkas", category: "pasir-cor", desc: "Pasir pasang bertekstur baik, sangat cocok untuk pasang bata dan plester.", fullDesc: "Pasir Rangkas bertekstur baik dan cocok untuk pasang bata serta plester. Tanyakan ketersediaan terbaru.", lumpur: "Pasir Cor & Bangunan", tekstur: "Sedang", aplikasi: "Pasang bata, plester", img: "images/produk/pasir-rangkas.jpg" },
    { id: 6, name: "Pasir Rangkas Abadi", category: "pasir-cor", desc: "Varian pasir Rangkas untuk kebutuhan konstruksi.", fullDesc: "Pasir Rangkas Abadi untuk kebutuhan konstruksi. Tanyakan perbedaan dan kegunaan terbaiknya kepada kami.", lumpur: "Pasir Cor & Bangunan", tekstur: "Gelap, bertekstur", aplikasi: "Konstruksi umum", img: "images/produk/pasir-rangkas-abadi.jpg" },
    { id: 7, name: "Pasir Jalupang", category: "pasir-cor", desc: "Pasir Jalupang untuk berbagai kebutuhan pembangunan.", fullDesc: "Pasir Jalupang untuk berbagai kebutuhan pembangunan. Hubungi kami untuk informasi detail dan harga.", lumpur: "Pasir Cor & Bangunan", tekstur: "Sedang", aplikasi: "Konstruksi umum", img: "images/produk/pasir-jalupang.jpg" },
    { id: 8, name: "Pasir Jalupang Kuning", category: "pasir-cor", desc: "Pasir Jalupang berwarna kuning untuk kebutuhan konstruksi.", fullDesc: "Pasir Jalupang Kuning untuk berbagai kebutuhan pembangunan. Tanyakan ketersediaan terbaru.", lumpur: "Pasir Cor & Bangunan", tekstur: "Sedang, kuning", aplikasi: "Konstruksi umum", img: "images/produk/pasir-jalupang-kuning.jpg" },
    { id: 9, name: "Pasir Jawilan", category: "pasir-cor", desc: "Pasir Jawilan untuk kebutuhan pembangunan dan renovasi.", fullDesc: "Pasir Jawilan untuk kebutuhan pembangunan dan renovasi. Hubungi kami untuk informasi detail.", lumpur: "Pasir Cor & Bangunan", tekstur: "Kasar, bertekstur", aplikasi: "Konstruksi umum", img: "images/produk/pasir-jawilan.jpg" },
    { id: 10, name: "Pasir Hitam Cor M-Sand", category: "pasir-cor", desc: "Pasir hitam M-Sand untuk campuran cor beton.", fullDesc: "Pasir Hitam Cor M-Sand untuk campuran cor beton. Konsultasikan campuran yang tepat dengan tukang atau pengawas Anda.", lumpur: "Pasir Cor & Bangunan", tekstur: "Hitam, kasar", aplikasi: "Cor beton", img: "images/produk/pasir-hitam-cor-msand.jpg" },
    { id: 11, name: "Pasir Tayan Kalimantan", category: "pasir-cor", desc: "Pasir asal Tayan, Kalimantan, untuk kebutuhan konstruksi.", fullDesc: "Pasir Tayan Kalimantan untuk kebutuhan konstruksi. Tanyakan ketersediaan dan pengiriman.", lumpur: "Pasir Cor & Bangunan", tekstur: "Sedang", aplikasi: "Konstruksi umum", img: "images/produk/pasir-tayan-kalimantan.jpg" },
    { id: 12, name: "Batu Split Uk 1-2", category: "split", desc: "Batu split ukuran 1-2 untuk jalan dan beton.", fullDesc: "Batu split ukuran 1-2, umumnya dipakai untuk pekerjaan jalan dan beton. Hubungi kami untuk ketersediaan.", lumpur: "Batu Split", tekstur: "Pecahan, ukuran 1-2", aplikasi: "Jalan, beton", img: "images/produk/batu-split-uk-1-2.jpg" },
    { id: 13, name: "Batu Split Uk 2-3", category: "split", desc: "Batu split ukuran 2-3 untuk jalan dan beton.", fullDesc: "Batu split ukuran 2-3, umumnya dipakai untuk pekerjaan jalan dan beton. Hubungi kami untuk ketersediaan.", lumpur: "Batu Split", tekstur: "Pecahan, ukuran 2-3", aplikasi: "Jalan, beton", img: "images/produk/batu-split-uk-2-3.jpg" },
    { id: 14, name: "Batu Split Uk 3-5", category: "split", desc: "Batu split ukuran 3-5 untuk jalan dan beton.", fullDesc: "Batu split ukuran 3-5, umumnya dipakai untuk pekerjaan jalan dan beton. Hubungi kami untuk ketersediaan.", lumpur: "Batu Split", tekstur: "Pecahan, ukuran 3-5", aplikasi: "Jalan, beton", img: "images/produk/batu-split-uk-3-5.jpg" },
    { id: 15, name: "Batu Split Cilegon", category: "split", desc: "Batu split asal Cilegon untuk jalan dan beton.", fullDesc: "Batu split asal Cilegon untuk jalan dan beton. Sebutkan ukuran yang Anda perlukan.", lumpur: "Batu Split", tekstur: "Pecahan", aplikasi: "Jalan, beton", img: "images/produk/batu-split-cilegon.jpg" },
    { id: 16, name: "Batu Screening", category: "split", desc: "Batu pecah kecil berukuran 5-10 mm, ideal untuk campuran aspal, paving block, dan beton ringan.", fullDesc: "Batu screening berukuran 5-10 mm, ideal untuk campuran aspal, paving block, dan beton ringan.", lumpur: "Batu Split", tekstur: "Pecahan kecil, 5-10 mm", aplikasi: "Aspal, paving block, beton ringan", img: "images/produk/batu-screening.jpg" },
    { id: 17, name: "Batu Basecourse", category: "batu", desc: "Batu basecourse untuk lapis pondasi jalan dan beton.", fullDesc: "Batu basecourse untuk pekerjaan jalan dan beton. Tanyakan ukuran dan ketersediaannya.", lumpur: "Batu & Pondasi", tekstur: "Batu pecah campuran", aplikasi: "Jalan, beton", img: "images/produk/batu-basecourse.jpg" },
    { id: 18, name: "Batu Makadam", category: "urugan", desc: "Batu pecah berbagai ukuran untuk kebutuhan cor beton, jalan, dan fondasi.", fullDesc: "Batu Makadam untuk kebutuhan cor beton, jalan, dan fondasi. Hubungi kami untuk ukuran dan ketersediaan.", lumpur: "Bahan Urugan", tekstur: "Batu pecah", aplikasi: "Jalan, beton, fondasi", img: "images/produk/batu-makadam.jpg" },
    { id: 19, name: "Batu Limestone", category: "urugan", desc: "Batu limestone (batu kapur) untuk bahan urugan dan pengerasan lahan/jalan.", fullDesc: "Batu Limestone untuk bahan urugan dan pengerasan lahan atau jalan. Tanyakan ukuran dan ketersediaannya.", lumpur: "Bahan Urugan", tekstur: "Batu kapur, terang", aplikasi: "Urugan, pengerasan lahan/jalan", img: "images/produk/batu-limestone.jpg" },
    { id: 20, name: "Abu Batu", category: "pasir-cor", desc: "Abu batu hasil pemecahan batu, bertekstur halus untuk alas, pengisi, dan campuran paving.", fullDesc: "Abu batu umumnya dipakai sebagai alas, pengisi, dan campuran paving. Hubungi kami untuk detail.", lumpur: "Pasir Cor & Bangunan", tekstur: "Halus", aplikasi: "Alas, pengisi, paving", img: "images/produk/abu-batu.jpg" },
    { id: 21, name: "Batu Belah / Pondasi", category: "batu", desc: "Batu alam besar dan kokoh, sangat cocok untuk fondasi bangunan dan penahan tanah.", fullDesc: "Batu Belah untuk pondasi dan bangunan, serta penahan tanah. Tanyakan ukuran dan volume yang tersedia.", lumpur: "Batu & Pondasi", tekstur: "Batu alam besar", aplikasi: "Pondasi, penahan tanah", img: "images/produk/batu-belah-pondasi.jpg" },
    { id: 22, name: "Batu Bata Merah", category: "batu", desc: "Bata merah untuk pasangan dinding rumah dan bangunan.", fullDesc: "Bata merah untuk pasangan dinding. Tanyakan ukuran, jumlah, dan estimasi harga.", lumpur: "Batu & Pondasi", tekstur: "Bata merah", aplikasi: "Pasangan dinding", img: "images/produk/batu-bata-merah.jpg" },
    { id: 23, name: "Sirdam", category: "urugan", desc: "Sirdam untuk kebutuhan jalan dan beton.", fullDesc: "Sirdam untuk kebutuhan jalan dan beton. Tanyakan spesifikasi dan ketersediaan.", lumpur: "Bahan Urugan", tekstur: "Campuran batu dan tanah", aplikasi: "Jalan, urugan", img: "images/produk/sirdam.jpg" },
    { id: 24, name: "Batu Sirtu Alam Urugan", category: "urugan", desc: "Batu sirtu alam untuk kebutuhan urugan.", fullDesc: "Batu Sirtu Alam untuk urugan lahan dan pengerasan. Hubungi kami untuk volume dan pengiriman.", lumpur: "Bahan Urugan", tekstur: "Batu alam bulat", aplikasi: "Urugan", img: "images/produk/batu-sirtu-alam-urugan.jpg" },
    { id: 25, name: "Pasir Urug Kasar / Brangkal Urugan", category: "urugan", desc: "Pasir urug kasar dan brangkal untuk urugan dan fondasi.", fullDesc: "Pasir urug kasar atau brangkal untuk urugan dan fondasi. Tanyakan ukuran dan volume yang tersedia.", lumpur: "Bahan Urugan", tekstur: "Kasar, campuran batu", aplikasi: "Urugan, fondasi", img: "images/produk/pasir-urug-kasar-brangkal.jpg" },
    { id: 26, name: "Tanah Merah Urugan", category: "urugan", desc: "Tanah merah untuk urugan dan penimbunan lahan.", fullDesc: "Tanah merah untuk urugan dan penimbunan lahan. Tanyakan volume dan ketersediaan.", lumpur: "Bahan Urugan", tekstur: "Tanah merah", aplikasi: "Urugan, penimbunan", img: "images/produk/tanah-merah.jpg" }
];

function renderProducts(items) {
    const grid = document.getElementById('productGrid');
    if(!grid) return;
    grid.innerHTML = '';

    items.forEach(prod => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-img">
                <img src="${prod.img}" alt="${prod.name}" loading="lazy" decoding="async" width="600" height="400">
                <span class="product-tag">${PCAT[prod.category]||prod.category}</span>
            </div>
            <div class="product-info">
                <h4>${prod.name}</h4>
                <p>${prod.desc}</p>
                <div class="product-actions">
                    <button class="btn-more" onclick="openModal(${prod.id})"><i class="fa-solid fa-eye"></i> Detail</button>
                    <a href="https://wa.me/628811653722?text=Halo%20Warso%20Jaya%20Pasir,%20saya%20mau%20pesan%20${encodeURIComponent(prod.name)}" class="btn-order-product" target="_blank" rel="noopener">
                        <i class="fa-brands fa-whatsapp"></i> Pesan
                    </a>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

function openModal(id) {
    const prod = products.find(p => p.id === id);
    if(!prod) return;
    document.getElementById('modalTitle').innerText = prod.name;
    document.getElementById('modalDesc').innerText = prod.fullDesc;
    document.getElementById('modalImg').src = prod.img;
    document.getElementById('modalSpecLumpur').innerText = prod.lumpur || 'Sangat Rendah';
    document.getElementById('modalSpecTekstur').innerText = prod.tekstur || 'Halus & Tajam';
    document.getElementById('modalSpecAplikasi').innerText = prod.aplikasi || 'Konstruksi Umum';
    document.getElementById('modalWaBtn').href = `https://wa.me/628811653722?text=Halo%20Warso%20Jaya%20Pasir,%20saya%20tertarik%20dengan%20${encodeURIComponent(prod.name)}`;
    document.getElementById('detailModal').classList.add('active');
}

function closeModal() {
    const modal = document.getElementById('detailModal');
    if(modal) modal.classList.remove('active');
}

let currentCategory = 'all';
function filterCategory(cat, btn) {
    currentCategory = cat;
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');
    filterProducts();
}

function filterProducts() {
    const searchInput = document.getElementById('searchInput');
    if(!searchInput) return;
    const query = searchInput.value.toLowerCase();
    const filtered = products.filter(p => {
        const matchesCat = (currentCategory === 'all' || p.category === currentCategory);
        const matchesSearch = p.name.toLowerCase().includes(query) || p.desc.toLowerCase().includes(query);
        return matchesCat && matchesSearch;
    });
    renderProducts(filtered);
}

let selectedRating = 5;
function setRating(r) {
    selectedRating = r;
    const stars = document.querySelectorAll('#starInput i');
    stars.forEach((star, index) => {
        if(index < r) star.classList.add('active');
        else star.classList.remove('active');
    });
}

function toast(msg){let t=document.getElementById('toast');if(!t){t=document.createElement('div');t.id='toast';t.className='toast';t.setAttribute('role','status');document.body.appendChild(t)}t.textContent=msg;t.classList.add('show');clearTimeout(t._h);t._h=setTimeout(()=>t.classList.remove('show'),3500)}

function submitTestimonial(e) {
    e.preventDefault();
    const name = document.getElementById('testiName').value.trim();
    const project = document.getElementById('testiProject').value.trim();
    const text = document.getElementById('testiText').value.trim();
    if(!name || !text){toast('Nama dan ulasan wajib diisi.');return;}

    const card = document.createElement('div');
    card.className = 'testimonial-card';
    const stars = document.createElement('div');
    stars.className = 'stars';
    stars.innerHTML = '<i class="fa-solid fa-star"></i>'.repeat(selectedRating);
    const p = document.createElement('p');
    p.style.cssText = 'font-style:italic;margin-bottom:15px;';
    p.textContent = '"' + text + '"';
    const s = document.createElement('strong');
    s.textContent = name;
    const pr = document.createElement('p');
    pr.style.cssText = 'font-size:0.8rem;color:var(--text-muted);';
    pr.textContent = project;
    card.append(stars, p, s, pr);

    document.getElementById('testiGrid').prepend(card);
    document.getElementById('testiForm').reset();
    setRating(5);
    toast('Terima kasih! Ulasan Anda sudah ditambahkan (hanya tampil di perangkat ini).');
}

const WA_NUMBER = '628811653722';
function calculateMaterial() {
    const ids = ['length','width','thickness'];
    const v = {}; let filled = false, bad = false;
    ids.forEach(id => {
        const box = document.getElementById(id); if(!box) return;
        const wrap = box.closest('.calc-input');
        let err = wrap.querySelector('.field-err');
        if(!err){err = document.createElement('div'); err.className='field-err'; wrap.appendChild(err);}
        const raw = box.value.trim(); let m = '';
        if(raw !== ''){ filled = true;
            if(isNaN(+raw)) m='Masukkan angka yang valid.';
            else if(+raw < 0) m='Tidak boleh negatif.';
            else if(+raw === 0) m='Harus lebih dari 0.'; }
        wrap.classList.toggle('has-err', !!m); err.textContent = m; if(m) bad = true;
        v[id] = +raw || 0;
    });
    const resultBox = document.getElementById('volumeResult');
    const truckEst = document.getElementById('truckEst');
    const wa = document.getElementById('calcWa');
    const ok = filled && !bad && v.length>0 && v.width>0 && v.thickness>0;
    const volume = ok ? v.length * v.width * (v.thickness/100) : 0;
    if(resultBox) resultBox.innerText = volume.toFixed(2) + ' m³';
    if(truckEst) truckEst.innerText = ok
        ? `Perkiraan: ± ${Math.ceil(volume/3.5)} rit truk engkel (3.5 m³ / rit)`
        : 'Perkiraan: 0 rit truk engkel';
    if(wa){
        wa.classList.toggle('show', ok);
        if(ok){
            const type = document.getElementById('materialType').selectedOptions[0].text;
            const msg = `Halo Warso Jaya Pasir, saya ingin berkonsultasi mengenai kebutuhan material.\n\nMaterial: ${type}\nUkuran: ${v.length} m × ${v.width} m\nTebal: ${v.thickness} cm\nEstimasi kebutuhan: ${volume.toFixed(2)} m³\n\nMohon informasi harga dan ketersediaannya.`;
            wa.href = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
        }
    }
}

const articleData = {
    RetakDinding: {
        tag: "Panduan Plesteran",
        title: "Panduan Lengkap Memilih Pasir Plester vs Pasir Cor Agar Dinding Tidak Retak",
        content: "Salah satu penyebab paling sering dinding rumah mengalami retak rambut adalah kadar lumpur tinggi di atas 5%. Gunakan pasir dengan butiran halus seperti Pasir Bangka Putih atau Pasir Cuci Plester."
    },
    HitungCor: {
        tag: "Tips Cor Beton",
        title: "Cara Akurat Menghitung Kebutuhan Pasir & Batu Split untuk Cor Dak Beton Lantai 2",
        content: "Gunakan rasio standar 1 Semen : 2 Pasir Cor : 3 Batu Split. Pilih batu split 1/2 murni tanpa debu tanah agar ikatan beton tidak rapuh."
    },
    PasirBangka: {
        tag: "Studi Material",
        title: "Mengenal Keunggulan Pasir Bangka Putih Dibandingkan Pasir Lokal Lainnya",
        content: "Pasir Bangka Putih memiliki kadar Silica (SiO2) di atas 90% dengan kadar lumpur kurang dari 1%, membuat acian cepat kering dan hemat penggunaan semen."
    }
};

function readArticle(key) {
    const art = articleData[key];
    if(!art) return;
    document.getElementById('articleModalTag').innerText = art.tag;
    document.getElementById('articleModalTitle').innerText = art.title;
    document.getElementById('articleModalContent').innerHTML = art.content;
    document.getElementById('articleModal').classList.add('active');
}

function closeArticleModal() {
    const articleModal = document.getElementById('articleModal');
    if(articleModal) articleModal.classList.remove('active');
}

function renderPopular(){
    const g=document.getElementById('popularGrid'); if(!g) return;
    [1,3,9].forEach(id=>{const p=products.find(x=>x.id===id); if(!p) return;
        const c=document.createElement('div'); c.className='product-card';
        c.innerHTML=`<div class="product-img"><img loading="lazy" src="${p.img}" alt="${p.name}"></div><div class="product-info"><h4>${p.name}</h4><p>${p.desc}</p><div class="product-actions"><a href="https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo Warso Jaya Pasir, saya ingin menanyakan harga dan ketersediaan '+p.name+'.')}" class="btn-order-product" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Tanya Harga</a></div></div>`;
        g.appendChild(c);});
}
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeModal();closeArticleModal();}});
window.addEventListener('scroll',()=>{const h=document.querySelector('header');if(h)h.classList.toggle('scrolled',scrollY>10)},{passive:true});
window.onload = function() {
    renderProducts(products);
    renderPopular();
    const t=document.getElementById('menuToggle'),n=document.querySelector('.nav-links');
    if(t&&n) t.addEventListener('click',()=>{const o=n.classList.toggle('open');t.setAttribute('aria-expanded',o);t.setAttribute('aria-label',o?'Tutup menu':'Buka menu')});
};
function initHome(){
    const g=document.getElementById('homeGrid'); 
    if(g){
        const draw=t=>{
            const list=t==='all'?[4,1,5,13,18,26].map(i=>products.find(p=>p.id===i)):products.filter(p=>t==='batu'?(p.category==='split'||p.category==='batu'):p.category.startsWith(t));
            g.innerHTML='';
            list.forEach(p=>{const c=document.createElement('div');c.className='product-card';
                c.innerHTML=`<div class="product-img"><img loading="lazy" src="${p.img}" alt="${p.name}"><span class="product-tag">${PCAT[p.category]||p.category}</span></div><div class="product-info"><h4>${p.name}</h4><p>${p.desc}</p><div class="product-actions"><button class="btn-more" onclick="openModal(${p.id})"><i class="fa-solid fa-eye"></i> Detail</button><a href="https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Halo Warso Jaya Pasir, saya ingin menanyakan harga dan ketersediaan '+p.name+'.')}" class="btn-order-product" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Tanya Harga</a></div></div>`;
                g.appendChild(c);});
        };
        document.querySelectorAll('#homeTabs button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('#homeTabs button').forEach(x=>x.classList.remove('on'));b.classList.add('on');draw(b.dataset.t)}));
        draw('all');
    }
    const els=document.querySelectorAll('.reveal');
    if('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion:reduce)').matches){
        const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
        els.forEach(e=>io.observe(e));
    } else els.forEach(e=>e.classList.add('in'));
}
document.addEventListener('DOMContentLoaded',initHome);

/* ===== Efek v3 ===== */
(function(){
  const bar=document.getElementById('topProgress'),hd=document.querySelector('header'),hero=document.querySelector('.hero-pro');
  const up=document.createElement('button');up.id='toTop';up.setAttribute('aria-label','Kembali ke atas');up.innerHTML='<i class="fa-solid fa-arrow-up"></i>';
  up.onclick=()=>scrollTo({top:0,behavior:'smooth'});document.addEventListener('DOMContentLoaded',()=>document.body.appendChild(up));
  let last=0,tick=false;
  addEventListener('scroll',()=>{if(tick)return;tick=true;requestAnimationFrame(()=>{
    const y=scrollY,max=document.documentElement.scrollHeight-innerHeight;
    if(bar)bar.style.width=(max>0?y/max*100:0)+'%';
    up.classList.toggle('show',y>600);
    if(hd){hd.classList.toggle('hide',y>last&&y>300&&!document.querySelector('.nav-links.open'));}
    if(hero&&y<900)hero.style.setProperty('--py',(y*.25)+'px');
    last=y;tick=false;});},{passive:true});
  /* tilt 3D kartu produk (hanya mouse) */
  if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!matchMedia('(prefers-reduced-motion:reduce)').matches){
    document.addEventListener('mousemove',e=>{
      const c=e.target.closest&&e.target.closest('.product-card');
      document.querySelectorAll('.product-card.tilt').forEach(x=>{if(x!==c)x.style.transform=''});
      if(!c)return;c.classList.add('tilt');const r=c.getBoundingClientRect();
      const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      c.style.transform=`perspective(800px) rotateX(${-y*6}deg) rotateY(${x*6}deg) translateY(-6px)`;});
    document.addEventListener('mouseleave',()=>document.querySelectorAll('.product-card.tilt').forEach(x=>x.style.transform=''));
  }
})();

document.addEventListener('DOMContentLoaded',function(){
  var c=document.getElementById('artContent'),toc=document.getElementById('toc');
  if(c&&toc){
    var hs=c.querySelectorAll('h2');
    hs.forEach(function(h,i){h.id='bagian-'+(i+1);var li=document.createElement('li'),a=document.createElement('a');a.href='#'+h.id;a.textContent=h.textContent;li.appendChild(a);toc.appendChild(li)});
    if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){toc.querySelectorAll('a').forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})}})},{rootMargin:'-20% 0px -70% 0px'});hs.forEach(function(h){io.observe(h)})}
    var cp=document.getElementById('copyLink');if(cp)cp.onclick=function(){(navigator.clipboard?navigator.clipboard.writeText(location.href):Promise.reject()).then(function(){toast('Tautan disalin')}).catch(function(){toast('Salin tautan dari bilah alamat')})};
  }
});

/* ===== Testimoni v2 ===== */
function submitTestimonial(e){
  e.preventDefault();
  var name=document.getElementById('testiName').value.trim(),project=document.getElementById('testiProject').value.trim(),text=document.getElementById('testiText').value.trim();
  if(!name||!text){toast('Nama dan ulasan wajib diisi.');return;}
  var card=document.createElement('article');card.className='t-card';
  var q=document.createElement('span');q.className='t-quote';q.textContent='\u201C';
  var st=document.createElement('div');st.className='stars';st.innerHTML='<i class="fa-solid fa-star"></i>'.repeat(selectedRating);
  var p=document.createElement('p');p.textContent=text;
  var who=document.createElement('div');who.className='t-who';
  var av=document.createElement('div');av.className='t-av';av.textContent=name.charAt(0).toUpperCase();
  var box=document.createElement('div'),b=document.createElement('b'),sp=document.createElement('span');b.textContent=name;sp.textContent=project;box.append(b,sp);
  who.append(av,box);card.append(q,st,p,who);
  document.getElementById('testiGrid').prepend(card);
  document.getElementById('testiForm').reset();setRating(5);
  toast('Ulasan ditampilkan di perangkat ini. Kirim via WhatsApp agar sampai ke kami.');
}
document.addEventListener('DOMContentLoaded',function(){
  var w=document.getElementById('waReview');
  if(w)w.addEventListener('click',function(){
    var n=document.getElementById('testiName').value.trim(),pr=document.getElementById('testiProject').value.trim(),t=document.getElementById('testiText').value.trim();
    if(!n||!t){toast('Isi nama dan ulasan dulu ya.');return;}
    var msg='Halo Warso Jaya Pasir, saya ingin mengirim ulasan.\n\nRating: '+selectedRating+'/5\nNama: '+n+'\nProyek/Lokasi: '+pr+'\nUlasan: '+t;
    window.open('https://wa.me/'+WA_NUMBER+'?text='+encodeURIComponent(msg),'_blank','noopener');
  });
});

/* ===== Kinerja: fade-in gambar ===== */
(function(){
  function ok(e){var t=e.target;if(t&&t.tagName==='IMG')t.classList.add('loaded')}
  document.addEventListener('load',ok,true);document.addEventListener('error',ok,true);
  function sweep(){document.querySelectorAll('img').forEach(function(i){if(i.complete)i.classList.add('loaded')})}
  document.addEventListener('DOMContentLoaded',function(){sweep();new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(function(n){if(n.querySelectorAll){n.querySelectorAll('img').forEach(function(i){if(i.complete)i.classList.add('loaded')});if(n.tagName==='IMG'&&n.complete)n.classList.add('loaded')}})})}).observe(document.body,{childList:true,subtree:true})});
  setTimeout(sweep,4000); /* jaring pengaman */
})();

/* ===== Lightbox galeri ===== */
document.addEventListener('DOMContentLoaded',function(){
  var items=document.querySelectorAll('.g-item');if(!items.length)return;
  var d=document.createElement('dialog');d.id='lightbox';d.innerHTML='<button type="button" aria-label="Tutup">\u00D7</button><img alt=""><p></p>';document.body.appendChild(d);
  d.querySelector('button').onclick=function(){d.close()};d.addEventListener('click',function(e){if(e.target===d)d.close()});
  items.forEach(function(it){it.tabIndex=0;it.setAttribute('role','button');
    function open(){var im=it.querySelector('img');d.querySelector('img').src=im.src;d.querySelector('img').alt=im.alt;d.querySelector('p').textContent=it.querySelector('figcaption').textContent;d.showModal()}
    it.addEventListener('click',open);it.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}})});
});

/* ===== Hitung naik angka ===== */
document.addEventListener('DOMContentLoaded',function(){
  var els=document.querySelectorAll('.count');if(!els.length)return;
  function run(el){var to=+el.dataset.to,t0=null,d=1400;if(matchMedia('(prefers-reduced-motion:reduce)').matches){el.textContent=to;return}
    function f(t){if(!t0)t0=t;var k=Math.min((t-t0)/d,1),e=1-Math.pow(1-k,3);el.textContent=Math.round(to*e);if(k<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
  if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){run(e.target);io.unobserve(e.target)}})},{threshold:.4});els.forEach(function(e){io.observe(e)})}
  else els.forEach(function(e){e.textContent=e.dataset.to});
});
