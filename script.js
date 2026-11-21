/* ===================================================
   PETUALANGAN MUSLIM CILIK - Game Engine
   =================================================== */

'use strict';

// ══════════════════════════════════════════════
// GAME DATA
// ══════════════════════════════════════════════

const WORLDS = [
  {
    id: 0, name: 'Taman Rukun Islam', icon: '🕌', color: '#2d9b6e',
    desc: 'Kenali lima dasar agama Islam.',
    questions: [
      { type: 'mc', q: 'Ada berapa Rukun Islam?', opts: ['3','4','5','6'], ans: 2, exp: '✅ Rukun Islam berjumlah 5: Syahadat, Salat, Zakat, Puasa, dan Haji.' },
      { type: 'mc', q: 'Rukun Islam yang pertama adalah...', opts: ['Salat','Syahadat','Zakat','Puasa'], ans: 1, exp: '✅ Syahadat adalah pengakuan bahwa tiada Tuhan selain Allah dan Muhammad utusan-Nya.' },
      { type: 'mc', q: 'Umat Islam wajib salat dalam sehari semalam sebanyak...', opts: ['3 waktu','4 waktu','5 waktu','6 waktu'], ans: 2, exp: '✅ Salat wajib dilaksanakan 5 waktu: Subuh, Zuhur, Asar, Magrib, Isya.' },
      { type: 'mc', q: 'Puasa wajib dilakukan pada bulan...', opts: ['Syawal','Ramadan','Muharam','Rajab'], ans: 1, exp: '✅ Umat Islam wajib berpuasa pada bulan Ramadan.' },
      { type: 'tf', q: 'Zakat adalah salah satu Rukun Islam.', ans: true, exp: '✅ Benar! Zakat adalah Rukun Islam ketiga.' },
      { type: 'mc', q: 'Ibadah haji dilaksanakan di kota...', opts: ['Madinah','Yerusalem','Makkah','Kairo'], ans: 2, exp: '✅ Ibadah haji dilaksanakan di Makkah al-Mukarramah.' },
      { type: 'mc', q: 'Salat Subuh terdiri dari berapa rakaat fardu?', opts: ['2 rakaat','3 rakaat','4 rakaat','5 rakaat'], ans: 0, exp: '✅ Salat Subuh terdiri dari 2 rakaat fardu.' },
      { type: 'tf', q: 'Haji wajib bagi setiap Muslim tanpa syarat apapun.', ans: false, exp: '✅ Salah! Haji wajib bagi Muslim yang mampu (istita\'ah).' },
      { type: 'mc', q: 'Sebelum salat, kita harus bersuci dengan...', opts: ['Mandi','Wudu','Tidur','Bermain'], ans: 1, exp: '✅ Wudu adalah salah satu syarat sah salat.' },
      { type: 'sort', q: 'Urutkan Rukun Islam dari yang pertama!', items: ['Syahadat','Salat','Zakat','Puasa','Haji'], ans: ['Syahadat','Salat','Zakat','Puasa','Haji'], exp: '✅ Urutan Rukun Islam: 1) Syahadat, 2) Salat, 3) Zakat, 4) Puasa, 5) Haji.' }
    ]
  },
  {
    id: 1, name: 'Istana Rukun Iman', icon: '✨', color: '#9b6ef0',
    desc: 'Belajar enam Rukun Iman.',
    questions: [
      { type: 'mc', q: 'Ada berapa Rukun Iman dalam Islam?', opts: ['4','5','6','7'], ans: 2, exp: '✅ Rukun Iman berjumlah 6.' },
      { type: 'mc', q: 'Rukun Iman yang pertama adalah iman kepada...', opts: ['Malaikat','Allah','Kitab','Rasul'], ans: 1, exp: '✅ Rukun Iman pertama adalah iman kepada Allah.' },
      { type: 'mc', q: 'Malaikat diciptakan Allah dari...', opts: ['Tanah','Cahaya','Api','Air'], ans: 1, exp: '✅ Dalam ajaran Islam, malaikat diciptakan dari cahaya (nur).' },
      { type: 'mc', q: 'Kitab suci yang diturunkan kepada Nabi Muhammad SAW adalah...', opts: ['Taurat','Zabur','Injil','Al-Qur\'an'], ans: 3, exp: '✅ Al-Qur\'an diturunkan kepada Nabi Muhammad SAW.' },
      { type: 'tf', q: 'Nabi Muhammad SAW adalah nabi dan rasul terakhir.', ans: true, exp: '✅ Benar! Nabi Muhammad SAW adalah Nabi terakhir (Khatamul Anbiya).' },
      { type: 'mc', q: 'Malaikat yang bertugas menyampaikan wahyu adalah...', opts: ['Mikail','Jibril','Israfil','Izrail'], ans: 1, exp: '✅ Malaikat Jibril bertugas menyampaikan wahyu kepada para nabi.' },
      { type: 'mc', q: 'Malaikat yang bertugas meniup sangkakala adalah...', opts: ['Jibril','Mikail','Israfil','Raqib'], ans: 2, exp: '✅ Malaikat Israfil bertugas meniup sangkakala pada hari kiamat.' },
      { type: 'mc', q: 'Hari kiamat termasuk dalam Rukun Iman ke berapa?', opts: ['4','5','6','3'], ans: 1, exp: '✅ Iman kepada Hari Akhir adalah Rukun Iman ke-5.' },
      { type: 'tf', q: 'Percaya kepada qada dan qadar artinya percaya bahwa semua takdir dari Allah.', ans: true, exp: '✅ Benar! Qada dan qadar adalah ketetapan Allah atas segala sesuatu.' },
      { type: 'mc', q: 'Rukun Iman yang ke-6 (terakhir) adalah iman kepada...', opts: ['Kitab','Rasul','Hari Akhir','Qada dan Qadar'], ans: 3, exp: '✅ Rukun Iman keenam adalah iman kepada Qada dan Qadar.' }
    ]
  },
  {
    id: 2, name: 'Jejak Para Nabi', icon: '📖', color: '#e0a800',
    desc: 'Kenali kisah 25 nabi dan rasul.',
    questions: [
      { type: 'mc', q: 'Nabi pertama yang diutus Allah adalah...', opts: ['Adam AS','Nuh AS','Ibrahim AS','Musa AS'], ans: 0, exp: '✅ Nabi Adam AS adalah manusia pertama dan nabi pertama.' },
      { type: 'mc', q: 'Nabi yang membuat kapal besar atas perintah Allah adalah...', opts: ['Yusuf AS','Nuh AS','Yunus AS','Sulaiman AS'], ans: 1, exp: '✅ Nabi Nuh AS membuat bahtera besar atas perintah Allah untuk menyelamatkan orang beriman dari banjir.' },
      { type: 'mc', q: 'Nabi yang mendapat mukjizat membelah laut adalah...', opts: ['Isa AS','Ibrahim AS','Musa AS','Yahya AS'], ans: 2, exp: '✅ Dengan izin Allah, Nabi Musa AS membelah Laut Merah.' },
      { type: 'mc', q: 'Nabi yang pernah berada dalam perut ikan besar adalah...', opts: ['Yunus AS','Hud AS','Saleh AS','Luth AS'], ans: 0, exp: '✅ Nabi Yunus AS berdoa dari dalam perut ikan (nun): "Laa ilaaha illaa anta subhaanaka innii kuntu minadh-zhaalimiin."' },
      { type: 'tf', q: 'Nabi Ibrahim AS adalah ayah dari Nabi Ismail AS.', ans: true, exp: '✅ Benar! Nabi Ibrahim AS adalah ayah Nabi Ismail AS dan Nabi Ishaq AS.' },
      { type: 'mc', q: 'Nabi yang dapat memahami bahasa hewan adalah...', opts: ['Nabi Sulaiman AS','Nabi Idris AS','Nabi Harun AS','Nabi Ilyas AS'], ans: 0, exp: '✅ Allah memberi Nabi Sulaiman AS kemampuan memahami bahasa hewan dan jin.' },
      { type: 'mc', q: 'Nabi yang terkenal sangat sabar ketika diuji penyakit adalah...', opts: ['Nabi Ayyub AS','Nabi Yusuf AS','Nabi Adam AS','Nabi Luth AS'], ans: 0, exp: '✅ Nabi Ayyub AS dikenal karena kesabarannya dalam menghadapi ujian.' },
      { type: 'mc', q: 'Nabi yang dibuang ke dalam sumur oleh saudara-saudaranya adalah...', opts: ['Nabi Yusuf AS','Nabi Musa AS','Nabi Idris AS','Nabi Nuh AS'], ans: 0, exp: '✅ Kisah Nabi Yusuf AS mengajarkan kesabaran dan saling memaafkan.' },
      { type: 'tf', q: 'Jumlah nabi dan rasul yang wajib diketahui ada 25 orang.', ans: true, exp: '✅ Benar! Dalam ilmu akidah dasar, ada 25 nabi dan rasul yang wajib diketahui.' },
      { type: 'mc', q: 'Nabi terakhir yang diutus Allah kepada umat manusia adalah...', opts: ['Nabi Isa AS','Nabi Musa AS','Nabi Muhammad SAW','Nabi Ibrahim AS'], ans: 2, exp: '✅ Nabi Muhammad SAW adalah nabi terakhir dan penutup para nabi.' }
    ]
  },
  {
    id: 3, name: 'Desa Doa', icon: '🤲', color: '#ff7b5c',
    desc: 'Hafal doa dan zikir sehari-hari.',
    questions: [
      { type: 'mc', q: 'Sebelum makan kita dianjurkan membaca...', opts: ['Bismillah','Selamat pagi','Alhamdulillah','Innalillah'], ans: 0, exp: '✅ Kita dianjurkan membaca "Bismillahirrahmanirrahim" sebelum makan.' },
      { type: 'mc', q: 'Setelah makan kita mengucapkan...', opts: ['Astaghfirullah','Alhamdulillah','Allahu Akbar','Insyaallah'], ans: 1, exp: '✅ "Alhamdulillah" berarti segala puji bagi Allah, diucapkan sebagai syukur.' },
      { type: 'mc', q: 'Ketika bertemu sesama Muslim, kita mengucapkan...', opts: ['Permisi','Sampai nanti','Assalamu\'alaikum','Selamat tidur'], ans: 2, exp: '✅ "Assalamu\'alaikum Warahmatullahi Wabarakatuh" adalah salam dan doa keselamatan.' },
      { type: 'tf', q: 'Ketika bersin, kita dianjurkan mengucapkan "Alhamdulillah".', ans: true, exp: '✅ Benar! Orang yang bersin dianjurkan mengucapkan "Alhamdulillah".' },
      { type: 'mc', q: 'Jika berjanji untuk melakukan sesuatu, kita mengucapkan...', opts: ['Insyaallah','Astaghfirullah','Subhanallah','Masyaallah'], ans: 0, exp: '✅ "Insyaallah" berarti "jika Allah menghendaki."' },
      { type: 'mc', q: 'Ketika meminta ampun kepada Allah, kita membaca...', opts: ['Astaghfirullah','Bismillah','Assalamualaikum','Allahu Akbar'], ans: 0, exp: '✅ "Astaghfirullah" berarti "Aku memohon ampun kepada Allah."' },
      { type: 'tf', q: '"Subhanallah" diucapkan saat kita takjub melihat keindahan ciptaan Allah.', ans: true, exp: '✅ Benar! "Subhanallah" berarti "Maha Suci Allah," diucapkan saat kagum.' },
      { type: 'mc', q: 'Zikir yang berarti "Allah Maha Besar" adalah...', opts: ['Subhanallah','Alhamdulillah','Allahu Akbar','La ilaha illallah'], ans: 2, exp: '✅ "Allahu Akbar" berarti "Allah Maha Besar."' },
      { type: 'mc', q: 'Saat akan memulai pekerjaan baik, kita membaca...', opts: ['Basmalah','Doa tidur','Takbir saja','Hamdalah'], ans: 0, exp: '✅ Basmalah ("Bismillahirrahmanirrahim") dibaca saat memulai kegiatan baik.' },
      { type: 'mc', q: 'Ketika mendengar berita duka atau musibah, kita mengucapkan...', opts: ['Alhamdulillah','Innalillahi wa inna ilaihi raji\'un','Masyaallah','Bismillah'], ans: 1, exp: '✅ "Innalillahi wa inna ilaihi raji\'un" berarti "Sesungguhnya kami milik Allah dan kepada-Nya kami kembali."' }
    ]
  },
  {
    id: 4, name: 'Kampung Akhlak', icon: '💚', color: '#60b8f5',
    desc: 'Latih adab dan perilaku terpuji.',
    questions: [
      { type: 'mc', q: 'Jika bertemu guru, sebaiknya kita...', opts: ['Menyapa dan memberi salam','Berteriak','Mengabaikan','Mengejek'], ans: 0, exp: '✅ Menghormati guru termasuk akhlak terpuji yang diajarkan Islam.' },
      { type: 'mc', q: 'Jika teman terjatuh, kita sebaiknya...', opts: ['Menertawakan','Membantu dan menolongnya','Meninggalkan','Mengejek'], ans: 1, exp: '✅ Menolong teman yang kesusahan adalah perbuatan terpuji.' },
      { type: 'tf', q: 'Islam mengajarkan kita untuk jujur dalam perkataan dan perbuatan.', ans: true, exp: '✅ Benar! Kejujuran (amanah) adalah akhlak mulia yang sangat dianjurkan Islam.' },
      { type: 'mc', q: 'Jika meminjam barang teman, kita harus...', opts: ['Merusaknya','Menyembunyikan','Menjaga dan mengembalikan','Memberikan ke orang lain'], ans: 2, exp: '✅ Barang pinjaman harus dijaga dengan baik dan dikembalikan tepat waktu.' },
      { type: 'mc', q: 'Sikap yang benar saat menemukan sampah di lantai adalah...', opts: ['Membuang ke tempat sampah','Membiarkan saja','Menendang ke pojok','Menyembunyikan'], ans: 0, exp: '✅ Islam mengajarkan kita untuk menjaga kebersihan. "Kebersihan adalah sebagian dari iman."' },
      { type: 'tf', q: 'Meminta maaf saat melakukan kesalahan adalah sikap yang terpuji.', ans: true, exp: '✅ Benar! Berani meminta maaf menunjukkan sikap bertanggung jawab dan rendah hati.' },
      { type: 'mc', q: 'Saat teman berbeda pendapat, kita harus...', opts: ['Menghina','Mendengarkan dengan baik','Memusuhi','Berteriak marah'], ans: 1, exp: '✅ Menghargai pendapat orang lain dan berdiskusi dengan baik adalah akhlak mulia.' },
      { type: 'mc', q: 'Kepada orang tua, kita harus bersikap...', opts: ['Hormat dan sayang','Sombong','Durhaka','Acuh tak acuh'], ans: 0, exp: '✅ Islam sangat menekankan bakti kepada orang tua (birrul walidain).' },
      { type: 'mc', q: 'Ketika mendapat bantuan dari orang lain, kita mengucapkan...', opts: ['Terima kasih','Diam saja','Marah','Meninggalkan'], ans: 0, exp: '✅ Mengucapkan terima kasih adalah bentuk menghargai kebaikan orang lain.' },
      { type: 'tf', q: 'Islam mengajarkan kita untuk berbuat baik kepada tetangga.', ans: true, exp: '✅ Benar! Nabi SAW sangat menekankan pentingnya berbuat baik kepada tetangga.' }
    ]
  },
  {
    id: 5, name: 'Masjid Pengetahuan', icon: '🌟', color: '#e55f9b',
    desc: 'Tantangan pengetahuan Islam lanjutan.',
    questions: [
      { type: 'mc', q: 'Arah kiblat umat Islam adalah menuju...', opts: ['Masjid Nabawi','Ka\'bah','Masjidil Aqsa','Gunung Uhud'], ans: 1, exp: '✅ Umat Islam menghadap Ka\'bah di Makkah ketika salat.' },
      { type: 'mc', q: 'Masjid suci tempat Ka\'bah berada adalah...', opts: ['Masjidil Haram','Masjid Nabawi','Masjid Quba','Masjid Istiqlal'], ans: 0, exp: '✅ Ka\'bah berada di dalam Masjidil Haram di Makkah al-Mukarramah.' },
      { type: 'mc', q: 'Bulan pertama dalam kalender Hijriah adalah...', opts: ['Ramadan','Syawal','Muharam','Rajab'], ans: 2, exp: '✅ Muharam adalah bulan pertama dalam kalender Hijriah.' },
      { type: 'mc', q: 'Hari raya yang dirayakan setelah bulan Ramadan adalah...', opts: ['Iduladha','Idulfitri','Maulid Nabi','Isra Mi\'raj'], ans: 1, exp: '✅ Idulfitri dirayakan setiap tanggal 1 Syawal, setelah Ramadan.' },
      { type: 'mc', q: 'Orang yang mengumandangkan azan disebut...', opts: ['Imam','Khatib','Muazin','Makmum'], ans: 2, exp: '✅ Muazin adalah orang yang bertugas mengumandangkan azan.' },
      { type: 'tf', q: 'Al-Qur\'an terdiri dari 114 surah.', ans: true, exp: '✅ Benar! Al-Qur\'an terdiri dari 114 surah.' },
      { type: 'mc', q: 'Surah pertama dalam Al-Qur\'an adalah...', opts: ['Al-Ikhlas','Al-Fatihah','An-Nas','Al-Baqarah'], ans: 1, exp: '✅ Al-Fatihah adalah surah pembuka (pertama) dalam mushaf Al-Qur\'an.' },
      { type: 'mc', q: 'Malam yang lebih baik dari seribu bulan disebut...', opts: ['Lailatul Qadar','Malam Jumat','Malam Nisfu Sya\'ban','Malam Idulfitri'], ans: 0, exp: '✅ Lailatul Qadar disebutkan dalam Surah Al-Qadr sebagai malam yang lebih baik dari seribu bulan.' },
      { type: 'mc', q: 'Salat Jumat adalah kewajiban bagi...', opts: ['Semua Muslim','Muslim laki-laki dewasa yang mampu','Hanya imam masjid','Semua perempuan'], ans: 1, exp: '✅ Salat Jumat wajib bagi Muslim laki-laki yang sudah baligh dan mampu hadir.' },
      { type: 'tf', q: 'Puasa di bulan Ramadan batal jika kita tidak sengaja makan atau minum.', ans: false, exp: '✅ Salah! Menurut mayoritas ulama, makan atau minum yang tidak disengaja tidak membatalkan puasa.' }
    ]
  }
];

const MEDALS = [
  { id: 'rukun_islam', name: 'Penjelajah Rukun Islam', icon: '🕌', desc: 'Selesaikan Dunia 1', worldReq: 0 },
  { id: 'rukun_iman',  name: 'Penjaga Rukun Iman',    icon: '✨', desc: 'Selesaikan Dunia 2', worldReq: 1 },
  { id: 'jejak_nabi',  name: 'Pengikut Jejak Nabi',   icon: '📖', desc: 'Selesaikan Dunia 3', worldReq: 2 },
  { id: 'desa_doa',   name: 'Hafiz Doa',              icon: '🤲', desc: 'Selesaikan Dunia 4', worldReq: 3 },
  { id: 'akhlak',     name: 'Akhlak Mulia',           icon: '💚', desc: 'Selesaikan Dunia 5', worldReq: 4 },
  { id: 'pengetahuan',name: 'Santri Berprestasi',     icon: '🌟', desc: 'Selesaikan Dunia 6', worldReq: 5 },
  { id: 'perfect',    name: 'Muslim Sempurna',        icon: '🏆', desc: 'Semua jawaban benar di satu dunia', worldReq: -1 },
  { id: 'graduate',   name: 'Sarjana Muslim Cilik',   icon: '🎓', desc: 'Selesaikan semua 6 dunia', worldReq: -1 }
];

// ══════════════════════════════════════════════
// STATE
// ══════════════════════════════════════════════

let state = {
  player: '',
  char: 'boy',
  soundOn: true,
  stars: 0,
  coins: 0,
  totalAnswered: 0,
  totalCorrect: 0,
  worldsDone: [],
  medals: [],
  currentWorld: null,
  currentQ: 0,
  score: 0,
  answered: false,
  sortSelected: []
};

// ══════════════════════════════════════════════
// HELPERS / STORAGE
// ══════════════════════════════════════════════

function saveState() {
  const save = {
    player: state.player, char: state.char, soundOn: state.soundOn,
    stars: state.stars, coins: state.coins,
    totalAnswered: state.totalAnswered, totalCorrect: state.totalCorrect,
    worldsDone: state.worldsDone, medals: state.medals
  };
  localStorage.setItem('pmc_v2', JSON.stringify(save));
}

function loadState() {
  try {
    const raw = localStorage.getItem('pmc_v2');
    if (!raw) return;
    const save = JSON.parse(raw);
    Object.assign(state, save);
  } catch (e) { /* ignore */ }
}

function el(id) { return document.getElementById(id); }

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  el(id).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateTopbar() {
  el('stars').textContent = state.stars;
  el('coins').textContent = state.coins;
}

function showToast(msg, duration = 2500) {
  const t = el('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

function launchConfetti(count = 60) {
  const container = el('confettiContainer');
  const colors = ['#ffd044','#2d9b6e','#9b6ef0','#ff7b5c','#60b8f5','#ff4da6','#fff'];
  const shapes = ['█','●','▲','★','✦'];
  container.innerHTML = '';
  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    piece.style.cssText = `
      left: ${Math.random() * 100}%;
      color: ${colors[Math.floor(Math.random() * colors.length)]};
      font-size: ${8 + Math.random() * 14}px;
      animation-duration: ${1.4 + Math.random() * 2.2}s;
      animation-delay: ${Math.random() * .8}s;
    `;
    container.appendChild(piece);
  }
  setTimeout(() => { container.innerHTML = ''; }, 4000);
}

// Simple audio feedback via Web Audio API
function playBeep(freq = 440, type = 'sine', dur = 0.12) {
  if (!state.soundOn) return;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain); gain.connect(ctx.destination);
    osc.type = type; osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.18, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + dur);
    osc.start(); osc.stop(ctx.currentTime + dur);
  } catch (e) { /* silent fail */ }
}

function playCorrect() {
  playBeep(523, 'sine', .08);
  setTimeout(() => playBeep(659, 'sine', .1), 90);
  setTimeout(() => playBeep(784, 'sine', .15), 180);
}

function playWrong() {
  playBeep(300, 'sawtooth', .15);
  setTimeout(() => playBeep(240, 'sawtooth', .18), 140);
}

function playClick() {
  playBeep(600, 'sine', .05);
}

// ══════════════════════════════════════════════
// SCREENS
// ══════════════════════════════════════════════

// ── Home ──
function initHome() {
  el('playerName').value = state.player || '';
  updateTopbar();
}

function goHome() {
  initHome();
  showScreen('screen-home');
}

// ── Character Select ──
function renderCharSelect() {
  document.querySelectorAll('.char-card').forEach(card => {
    card.classList.toggle('selected', card.dataset.char === state.char);
  });
}

// ── Adventure Map ──
function renderMap() {
  el('welcomeMsg').textContent = state.player
    ? `Assalamu\'alaikum, ${state.player}! Siap melanjutkan petualangan?`
    : 'Pilih dunia yang ingin kamu jelajahi!';
  el('worldsDone').textContent = state.worldsDone.length;

  const grid = el('worldGrid');
  grid.innerHTML = '';
  WORLDS.forEach((w, i) => {
    const done = state.worldsDone.includes(i);
    const card = document.createElement('article');
    card.className = `world-card${done ? ' completed' : ''}`;
    card.style.setProperty('--world-color', w.color);
    card.innerHTML = `
      <div class="world-badge">${done ? '✅' : ''}</div>
      <span class="world-emoji">${w.icon}</span>
      <div class="world-num">DUNIA ${i + 1}</div>
      <h3>${w.name}</h3>
      <p>${w.desc}</p>
      <button class="world-btn">${done ? '🔄 Main Lagi' : '▶ Mulai Misi'}</button>
    `;
    card.querySelector('.world-btn').addEventListener('click', () => {
      playClick();
      startWorld(i);
    });
    grid.appendChild(card);
  });
}

// ── Game ──
function startWorld(worldIndex) {
  state.currentWorld = worldIndex;
  state.currentQ = 0;
  state.score = 0;
  state.answered = false;
  showScreen('screen-game');
  renderQuestion();
}

function renderQuestion() {
  const world = WORLDS[state.currentWorld];
  const q = world.questions[state.currentQ];
  const total = world.questions.length;
  state.answered = false;

  el('questionLabel').textContent = `Soal ${state.currentQ + 1}/${total}`;
  el('worldTitle').textContent = world.name;
  el('progressPct').textContent = `${Math.round((state.currentQ + 1) / total * 100)}%`;
  el('progressBar').style.width = `${((state.currentQ + 1) / total) * 100}%`;
  el('gameScore').textContent = state.score;

  const charEmoji = state.char === 'girl' ? '👧🏻' : '🧒🏻';
  const area = el('gameArea');

  if (q.type === 'mc') {
    area.innerHTML = buildMCQuestion(q, charEmoji);
    area.querySelectorAll('.answer-btn').forEach((btn, idx) => {
      btn.addEventListener('click', () => handleMCAnswer(idx, q.ans, q.exp));
    });
  } else if (q.type === 'tf') {
    area.innerHTML = buildTFQuestion(q, charEmoji);
    area.querySelectorAll('.tf-btn').forEach(btn => {
      btn.addEventListener('click', () => handleTFAnswer(btn.dataset.val === 'true', q.ans, q.exp));
    });
  } else if (q.type === 'sort') {
    state.sortSelected = [];
    area.innerHTML = buildSortQuestion(q, charEmoji);
    area.querySelectorAll('.sort-choice').forEach(btn => {
      btn.addEventListener('click', () => handleSortClick(btn, q));
    });
    area.querySelector('#sortCheckBtn').addEventListener('click', () => checkSort(q));
  }

  area.querySelector('.btn-next').addEventListener('click', nextQuestion);
}

function buildMCQuestion(q, charEmoji) {
  const labels = ['A','B','C','D'];
  const opts = q.opts.map((o, i) => `
    <button class="answer-btn" data-idx="${i}">
      <span class="ans-label">${labels[i]}</span>
      <span>${o}</span>
    </button>
  `).join('');
  return `
    <div class="question-card">
      <div class="mascot">${charEmoji}</div>
      <p class="q-category">📝 PILIHAN GANDA</p>
      <h2 class="q-text">${q.q}</h2>
      <div class="answers-grid">${opts}</div>
      <div class="feedback-box" id="feedbackBox"></div>
      <button class="btn-next" disabled>Berikutnya ➜</button>
    </div>`;
}

function buildTFQuestion(q, charEmoji) {
  return `
    <div class="question-card">
      <div class="mascot">${charEmoji}</div>
      <p class="q-category">✅ BENAR ATAU SALAH</p>
      <h2 class="q-text">${q.q}</h2>
      <div class="tf-grid">
        <button class="tf-btn tf-true" data-val="true">✅<br>BENAR</button>
        <button class="tf-btn tf-false" data-val="false">❌<br>SALAH</button>
      </div>
      <div class="feedback-box" id="feedbackBox"></div>
      <button class="btn-next" disabled>Berikutnya ➜</button>
    </div>`;
}

function buildSortQuestion(q, charEmoji) {
  const shuffled = [...q.items].sort(() => Math.random() - 0.5);
  const choices = shuffled.map((item, i) =>
    `<button class="sort-choice" data-word="${item}" data-idx="${i}">${item}</button>`
  ).join('');
  return `
    <div class="question-card">
      <div class="mascot">${charEmoji}</div>
      <p class="q-category">🔢 SUSUN URUTAN</p>
      <h2 class="q-text">${q.q}</h2>
      <div class="word-sort-wrap">
        <div class="sort-slots" id="sortSlots"><em style="color:#aaa;font-size:13px">Klik kata di bawah untuk disusun...</em></div>
        <div class="sort-choices" id="sortChoices">${choices}</div>
      </div>
      <button id="sortCheckBtn" class="btn-secondary" style="width:100%;margin-bottom:12px" disabled>✔ Cek Urutan</button>
      <div class="feedback-box" id="feedbackBox"></div>
      <button class="btn-next" disabled>Berikutnya ➜</button>
    </div>`;
}

function handleMCAnswer(chosen, correct, exp) {
  if (state.answered) return;
  state.answered = true;
  state.totalAnswered++;

  const btns = document.querySelectorAll('.answer-btn');
  btns.forEach((b, i) => {
    b.disabled = true;
    if (i === correct) b.classList.add('correct');
    else if (i === chosen) b.classList.add('wrong');
  });

  const fb = el('feedbackBox');
  if (chosen === correct) {
    state.score += 10;
    state.totalCorrect++;
    el('gameScore').textContent = state.score;
    fb.className = 'feedback-box good';
    fb.textContent = `🎉 MasyaAllah, benar! ${exp}`;
    playCorrect();
    launchConfetti(25);
  } else {
    fb.className = 'feedback-box bad';
    fb.textContent = `💡 Belum tepat. ${exp}`;
    playWrong();
  }

  document.querySelector('.btn-next').disabled = false;
  const q = WORLDS[state.currentWorld].questions;
  document.querySelector('.btn-next').textContent =
    state.currentQ >= q.length - 1 ? 'Lihat Hasil 🏆' : 'Berikutnya ➜';
}

function handleTFAnswer(chosen, correct, exp) {
  if (state.answered) return;
  state.answered = true;
  state.totalAnswered++;

  const btns = document.querySelectorAll('.tf-btn');
  btns.forEach(b => {
    b.disabled = true;
    const val = b.dataset.val === 'true';
    if (val === correct) b.classList.add('correct');
    else if (val === chosen && chosen !== correct) b.classList.add('wrong');
  });

  const fb = el('feedbackBox');
  if (chosen === correct) {
    state.score += 10;
    state.totalCorrect++;
    el('gameScore').textContent = state.score;
    fb.className = 'feedback-box good';
    fb.textContent = `🎉 MasyaAllah, benar! ${exp}`;
    playCorrect();
    launchConfetti(25);
  } else {
    fb.className = 'feedback-box bad';
    fb.textContent = `💡 Belum tepat. ${exp}`;
    playWrong();
  }

  document.querySelector('.btn-next').disabled = false;
  const q = WORLDS[state.currentWorld].questions;
  document.querySelector('.btn-next').textContent =
    state.currentQ >= q.length - 1 ? 'Lihat Hasil 🏆' : 'Berikutnya ➜';
}

function handleSortClick(btn, q) {
  if (btn.disabled) return;
  const word = btn.dataset.word;
  state.sortSelected.push(word);
  btn.disabled = true;
  btn.style.opacity = '0.4';

  const slots = el('sortSlots');
  if (state.sortSelected.length === 1) slots.innerHTML = '';
  const slot = document.createElement('span');
  slot.className = 'sort-slot';
  slot.textContent = word;
  slots.appendChild(slot);

  const checkBtn = el('sortCheckBtn');
  if (state.sortSelected.length === q.items.length) {
    checkBtn.disabled = false;
  }
}

function checkSort(q) {
  if (state.answered) return;
  state.answered = true;
  state.totalAnswered++;
  el('sortCheckBtn').disabled = true;
  document.querySelectorAll('.sort-choice').forEach(b => b.disabled = true);

  const isCorrect = JSON.stringify(state.sortSelected) === JSON.stringify(q.ans);
  const fb = el('feedbackBox');
  if (isCorrect) {
    state.score += 10;
    state.totalCorrect++;
    el('gameScore').textContent = state.score;
    fb.className = 'feedback-box good';
    fb.textContent = `🎉 MasyaAllah, urutannya benar! ${q.exp}`;
    playCorrect();
    launchConfetti(25);
  } else {
    fb.className = 'feedback-box bad';
    fb.textContent = `💡 Belum tepat. Urutan yang benar: ${q.ans.join(' → ')}. ${q.exp}`;
    playWrong();
  }

  document.querySelector('.btn-next').disabled = false;
  const questions = WORLDS[state.currentWorld].questions;
  document.querySelector('.btn-next').textContent =
    state.currentQ >= questions.length - 1 ? 'Lihat Hasil 🏆' : 'Berikutnya ➜';
}

function nextQuestion() {
  if (!state.answered) return;
  playClick();
  const world = WORLDS[state.currentWorld];
  if (state.currentQ < world.questions.length - 1) {
    state.currentQ++;
    renderQuestion();
  } else {
    finishWorld();
  }
}

function finishWorld() {
  const wi = state.currentWorld;
  const world = WORLDS[wi];
  const scorePercent = state.score / (world.questions.length * 10) * 100;
  const earnedStars = scorePercent >= 100 ? 3 : scorePercent >= 70 ? 2 : scorePercent >= 40 ? 1 : 0;
  const earnedCoins = state.score;

  // Update global stats
  if (!state.worldsDone.includes(wi)) state.worldsDone.push(wi);
  state.stars += earnedStars;
  state.coins += earnedCoins;

  // Check medals
  if (!state.medals.includes(MEDALS[wi].id) && wi < 6) {
    state.medals.push(MEDALS[wi].id);
    showToast(`🏅 Medali baru: ${MEDALS[wi].name}!`);
  }
  if (scorePercent === 100 && !state.medals.includes('perfect')) {
    state.medals.push('perfect');
    setTimeout(() => showToast('🏆 Medali Muslim Sempurna didapatkan!'), 2000);
  }
  if (state.worldsDone.length >= 6 && !state.medals.includes('graduate')) {
    state.medals.push('graduate');
    setTimeout(() => showToast('🎓 Selamat! Semua dunia selesai! Kamu mendapat sertifikat!'), 2500);
  }

  saveState();
  updateTopbar();

  // Render result
  const trophy = scorePercent >= 100 ? '🏆' : scorePercent >= 70 ? '🥇' : scorePercent >= 40 ? '🥈' : '🥉';
  el('resultTrophy').textContent = trophy;
  el('resultEyebrow').textContent = `DUNIA ${wi + 1}: ${world.name}`;
  el('resultTitle').textContent =
    scorePercent >= 100 ? `MasyaAllah, ${state.player || 'Sahabat'}! Sempurna!` :
    scorePercent >= 70  ? `Hebat, ${state.player || 'Sahabat'}! Bagus sekali!` :
    scorePercent >= 40  ? `${state.player || 'Sahabat'}, terus semangat!` :
    `Yuk, ${state.player || 'Sahabat'}, coba lagi!`;

  el('resultMsg').textContent =
    scorePercent >= 100 ? 'Semua jawaban benar! Kamu benar-benar Muslim Cilik yang hebat! 🌟' :
    scorePercent >= 70  ? 'Kerja bagus! Terus semangat menuntut ilmu. Ilmu adalah cahaya! 💡' :
    scorePercent >= 40  ? 'Tidak apa-apa, terus belajar ya. Allah menyukai orang yang giat belajar!' :
    'Jangan menyerah! Ulangi misi ini agar semakin pintar ya!';

  const starDisplay = ['⭐','⭐','⭐'].map((s, i) =>
    `<span style="opacity:${i < earnedStars ? 1 : .2}">${s}</span>`).join('');
  el('resultStars').innerHTML = starDisplay;

  const newMedal = state.medals.includes(MEDALS[wi].id) ? MEDALS[wi].icon : '';
  el('resultMedals').textContent = newMedal;
  el('gainedStars').textContent = earnedStars;
  el('gainedCoins').textContent = earnedCoins;

  if (scorePercent >= 70) launchConfetti(80);
  showScreen('screen-result');
}

// ── Rewards ──
function renderRewards() {
  el('rwStars').textContent = state.stars;
  el('rwCoins').textContent = state.coins;
  el('rwWorlds').textContent = state.worldsDone.length;
  const acc = state.totalAnswered > 0
    ? Math.round((state.totalCorrect / state.totalAnswered) * 100) : 0;
  el('rwAccuracy').textContent = acc + '%';

  const grid = el('medalGrid');
  grid.innerHTML = '';
  MEDALS.forEach(m => {
    const earned = state.medals.includes(m.id);
    const item = document.createElement('div');
    item.className = `medal-item${earned ? ' earned' : ''}`;
    item.innerHTML = `
      <div class="medal-icon">${m.icon}</div>
      <div class="medal-name">${m.name}</div>
      <div class="medal-desc">${m.desc}</div>
    `;
    grid.appendChild(item);
  });

  // Certificate
  const certSection = el('certSection');
  if (state.worldsDone.length >= 6) {
    certSection.style.display = 'block';
    el('certText').innerHTML = `
      Dengan bangga kami memberikan sertifikat ini kepada<br>
      <strong style="font-size:22px;color:#1a6e4c">${state.player || 'Muslim Cilik'}</strong><br>
      atas keberhasilan menyelesaikan seluruh 6 Dunia Petualangan<br>
      dalam permainan <strong>Petualangan Muslim Cilik</strong>.<br><br>
      Total Bintang: ⭐ ${state.stars} | Total Koin: 🪙 ${state.coins}<br>
      Semoga ilmu yang didapat menjadi amal jariyah.<br>
      <em>"Tuntutlah ilmu dari buaian hingga liang lahat."</em>
    `;
  } else {
    certSection.style.display = 'none';
  }
}

// ══════════════════════════════════════════════
// EVENT LISTENERS
// ══════════════════════════════════════════════

// Home
el('startBtn').addEventListener('click', () => {
  playClick();
  const name = el('playerName').value.trim();
  state.player = name || 'Sahabat Muslim';
  saveState();
  renderMap();
  showScreen('screen-map');
});

el('charSelectBtn').addEventListener('click', () => {
  playClick();
  renderCharSelect();
  showScreen('screen-char');
});

el('rewardsHomeBtn').addEventListener('click', () => {
  playClick();
  renderRewards();
  showScreen('screen-rewards');
});

el('howBtn').addEventListener('click', () => {
  playClick();
  showScreen('screen-help');
});

// Sound Toggle
el('soundToggleBtn').addEventListener('click', () => {
  state.soundOn = !state.soundOn;
  el('soundToggleBtn').textContent = state.soundOn ? '🔊' : '🔇';
  saveState();
  showToast(state.soundOn ? '🔊 Suara dinyalakan' : '🔇 Suara dimatikan');
});

// Character Select
document.querySelectorAll('.char-card .btn-select-char').forEach(btn => {
  btn.addEventListener('click', () => {
    playClick();
    const card = btn.closest('.char-card');
    state.char = card.dataset.char;
    document.querySelectorAll('.char-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
    saveState();
    const name = state.char === 'girl' ? 'Muslimah' : 'Muslim';
    showToast(`👍 Karakter ${name} dipilih!`);
    setTimeout(() => {
      renderMap();
      showScreen('screen-map');
    }, 900);
  });
});

el('charBackBtn').addEventListener('click', () => { playClick(); goHome(); });

// Map
el('mapBackBtn').addEventListener('click', () => { playClick(); goHome(); });

// Game
el('gameBackBtn').addEventListener('click', () => {
  playClick();
  renderMap();
  showScreen('screen-map');
});

// Result
el('againBtn').addEventListener('click', () => {
  playClick();
  startWorld(state.currentWorld);
});

el('resultMapBtn').addEventListener('click', () => {
  playClick();
  renderMap();
  showScreen('screen-map');
});

// Rewards
el('rewardsBackBtn').addEventListener('click', () => { playClick(); goHome(); });

// Help
el('helpBackBtn').addEventListener('click', () => { playClick(); goHome(); });

// ══════════════════════════════════════════════
// INIT
// ══════════════════════════════════════════════

(function init() {
  loadState();
  updateTopbar();
  el('soundToggleBtn').textContent = state.soundOn ? '🔊' : '🔇';
  if (state.player) el('playerName').value = state.player;
})();
