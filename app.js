const news = [
  {game:'valorant', tag:'VALORANT / VCT PACIFIC', title:'Paper Rex เปิดตัวผู้เล่นใหม่ พร้อมลุยศึก Pacific Stage 2', desc:'การกลับมาของ something ที่แฟนๆ รอคอย อาจเปลี่ยนเกมของทีม', detail:'Paper Rex เปิดตัวผู้เล่นใหม่อย่างเป็นทางการก่อนเข้าสู่ Pacific Stage 2 โดยทีมวางแผนปรับสไตล์การเล่นให้ยืดหยุ่นขึ้น ทั้งในช่วงดราฟต์และการเล่นรอบกลางเกม\n\nการเปลี่ยนแปลงครั้งนี้ทำให้แฟนๆ จับตาดูว่าทีมจะรักษาจังหวะการบุกที่เป็นเอกลักษณ์ พร้อมลดข้อผิดพลาดในช่วงปิดเกมได้มากแค่ไหน', time:'2 ชั่วโมงที่แล้ว', img:'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=700&q=80'},
  {game:'lol', tag:'LEAGUE OF LEGENDS / LCK', title:'T1 ยังคงไร้พ่ายในสัปดาห์ที่ 4 ของ Summer Split', desc:'ชัยชนะเหนือ Gen.G ทำให้พวกเขาขยับขึ้นเป็นจ่าฝูงเดี่ยว', detail:'T1 ยังคงรักษาฟอร์มร้อนแรงในสัปดาห์ที่ 4 หลังคว้าชัยเหนือ Gen.G ด้วยการควบคุมแผนที่และวัตถุประสงค์สำคัญอย่างแม่นยำ\n\nชัยชนะครั้งนี้ทำให้ทีมขยับขึ้นเป็นจ่าฝูงเดี่ยว และเพิ่มความมั่นใจก่อนเข้าสู่ช่วงตารางแข่งที่เข้มข้นที่สุดของ Summer Split', time:'4 ชั่วโมงที่แล้ว', img:'https://images.unsplash.com/photo-1603481546238-487240415921?auto=format&fit=crop&w=700&q=80'},
  {game:'pubg', tag:'PUBG / GLOBAL', title:'ทีมไทยพร้อมลุย PUBG Global Series ที่ริยาด', desc:'เป้าหมายเดียวคือถ้วยแชมป์ และเงินรางวัลก้อนใหญ่', detail:'ตัวแทนทีมไทยเตรียมเดินทางสู่ริยาดเพื่อแข่งขัน PUBG Global Series ท่ามกลางทีมชั้นนำจากทั่วโลก\n\nทีมงานเปิดเผยว่าการซ้อมเน้นการอ่านวงและการตัดสินใจช่วงท้ายเกมเป็นพิเศษ เพราะทุกคะแนนมีผลต่อการลุ้นแชมป์และเงินรางวัลก้อนใหญ่', time:'6 ชั่วโมงที่แล้ว', img:'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?auto=format&fit=crop&w=700&q=80'},
  {game:'valorant', tag:'VALORANT / ROSTER WATCH', title:'DRX ประกาศไลน์อัพใหม่ เตรียมล้างตาในรอบเพลย์ออฟ', desc:'พวกเขามีเวลาสองสัปดาห์เพื่อหาจังหวะที่ลงตัวที่สุด', detail:'DRX ประกาศไลน์อัพใหม่พร้อมเป้าหมายกลับเข้าสู่เส้นทางลุ้นแชมป์ในรอบเพลย์ออฟ ทีมจะใช้เวลาสองสัปดาห์ข้างหน้าเพื่อปรับบทบาทและสร้างระบบการสื่อสารให้ลงตัว\n\nเกมแรกของรอบต่อไปจะเป็นบททดสอบสำคัญว่าการเปลี่ยนแปลงครั้งนี้ช่วยยกระดับทีมได้มากเพียงใด', time:'เมื่อวานนี้', img:'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=700&q=80'},
  {game:'lol', tag:'LEAGUE OF LEGENDS / META', title:'แพตช์ใหม่เปลี่ยนเมตา ทีมโปรเร่งปรับแผนก่อนรอบสำคัญ', desc:'ตัวเลือกในเลนกลางและการแย่งวัตถุประสงค์กลายเป็นหัวใจของเกม', detail:'แพตช์ล่าสุดทำให้จังหวะการแย่งวัตถุประสงค์มีความสำคัญมากขึ้น ทีมชั้นนำเริ่มทดลองแชมเปี้ยนและเส้นทางเดินเกมรูปแบบใหม่\n\nนักวิเคราะห์มองว่าทีมที่ปรับตัวได้เร็วจะได้เปรียบอย่างมากในช่วงสัปดาห์สุดท้ายของการแข่งขัน', time:'เมื่อวานนี้', img:'https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=700&q=80'},
  {game:'pubg', tag:'PUBG / TEAM THAILAND', title:'ตัวแทนไทยเผยแผนการเล่น เน้นความนิ่งในเกมท้าย', desc:'การตัดสินใจที่รอบคอบอาจเป็นกุญแจพาทีมเก็บแต้มต่อเนื่อง', detail:'ตัวแทนไทยเตรียมแผนการเล่นที่เน้นการเก็บข้อมูลและรักษาทรัพยากรให้พร้อมสำหรับช่วงท้ายเกม\n\nเป้าหมายแรกคือการเก็บคะแนนให้สม่ำเสมอ ก่อนเร่งจังหวะในวันที่รูปเกมเปิดมากที่สุด', time:'2 วันที่แล้ว', img:'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=700&q=80'},
  {game:'valorant', tag:'VALORANT / ANALYSIS', title:'5 จังหวะ Clutch ที่นิยามเกมรอบสัปดาห์', desc:'อ่านเกมให้ขาดและกล้าตัดสินใจในวินาทีที่กดดันที่สุด', detail:'จากการพลิกสถานการณ์แบบหนึ่งต่อสามไปจนถึงการอ่านแฟลชของคู่แข่ง จังหวะ clutch เหล่านี้แสดงให้เห็นว่าความนิ่งมีผลต่อผลการแข่งขันแค่ไหน\n\nทีมโค้ชหลายทีมเริ่มนำคลิปเหล่านี้ไปใช้ในการวิเคราะห์การตัดสินใจของผู้เล่น', time:'2 วันที่แล้ว', img:'https://images.unsplash.com/photo-1603481546238-487240415921?auto=format&fit=crop&w=700&q=80'}
];
const feedPosts = [
  {name:'MildFPS', avatar:'M', color:'#e8c4b7', time:'12 นาทีที่แล้ว', text:'เกม T1 วันนี้คืออ่านขาดทุกจังหวะจริงๆ แบบนี้แหละที่เรียกว่า experience', likes:24},
  {name:'Jirayu S.', avatar:'J', color:'#b8d4c4', time:'38 นาทีที่แล้ว', text:'ใครดู VCT คืนนี้บ้างครับ คิดว่า PRX จะปิดเกม 2-0 ไหวไหม 🔥', likes:11},
  {name:'PloyCaster', avatar:'P', color:'#ddd0a8', time:'1 ชั่วโมงที่แล้ว', text:'ชอบที่ทีมไทยใน PUBG กล้าเล่นแผนใหม่มากขึ้น ดูแล้วมีลุ้นในรอบท้ายจริงๆ', likes:18},
  {name:'MidDiff', avatar:'D', color:'#c8c1df', time:'2 ชั่วโมงที่แล้ว', text:'แพตช์นี้ทำให้เกมเร็วขึ้นมาก ใครมีแชมเปี้ยนลับในเลนกลางมาแชร์กันหน่อยครับ', likes:9},
  {name:'AimLabTH', avatar:'A', color:'#c8d8e0', time:'3 ชั่วโมงที่แล้ว', text:'จังหวะ clutch ของแมตช์เมื่อคืนควรเอาไปทำเป็นคลิปสอนเลย อ่านเกมสุดๆ', likes:31},
  {name:'NookGG', avatar:'N', color:'#e0c9b9', time:'5 ชั่วโมงที่แล้ว', text:'ตารางแข่งช่วงนี้แน่นมาก แต่ดีที่มี Leto Esport รวมข่าวกับแมตช์ไว้ให้ดูในที่เดียว', likes:14}
];
const newsGrid = document.querySelector('#newsGrid');
const toast = document.querySelector('#toast');
const sidebar = document.querySelector('.sidebar');
const sidebarToggle = document.querySelector('#sidebarToggle');
const mobileMenuToggle = document.querySelector('#mobileMenuToggle');
const mobileSidebarBackdrop = document.querySelector('#mobileSidebarBackdrop');
const thaiDate = document.querySelector('#thaiDate');
const thaiTime = document.querySelector('#thaiTime');
function updateThaiClock() {
  const now = new Date();
  thaiDate.textContent = new Intl.DateTimeFormat('th-TH', { timeZone: 'Asia/Bangkok', weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' }).format(now);
  thaiTime.textContent = new Intl.DateTimeFormat('th-TH', { timeZone: 'Asia/Bangkok', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }).format(now);
}
updateThaiClock();
setInterval(updateThaiClock, 1000);
sidebarToggle.addEventListener('click', () => {
  const collapsed = sidebar.classList.toggle('collapsed');
  sidebarToggle.setAttribute('aria-expanded', String(!collapsed));
  sidebarToggle.setAttribute('aria-label', collapsed ? 'ขยายเมนู' : 'ย่อเมนู');
  sidebarToggle.textContent = collapsed ? '›' : '‹';
  localStorage.setItem('leto-sidebar-collapsed', String(collapsed));
});
function setMobileSidebar(open) {
  sidebar.classList.toggle('mobile-open', open);
  mobileSidebarBackdrop.classList.toggle('open', open);
  mobileMenuToggle.classList.toggle('open', open);
  mobileMenuToggle.setAttribute('aria-expanded', String(open));
  mobileMenuToggle.setAttribute('aria-label', open ? 'ปิดเมนู' : 'เปิดเมนู');
}
mobileMenuToggle.addEventListener('click', () => setMobileSidebar(!sidebar.classList.contains('mobile-open')));
mobileSidebarBackdrop.addEventListener('click', () => setMobileSidebar(false));
document.querySelectorAll('.nav-item').forEach(link => link.addEventListener('click', () => setMobileSidebar(false)));
if (localStorage.getItem('leto-sidebar-collapsed') === 'true') {
  sidebar.classList.add('collapsed');
  sidebarToggle.setAttribute('aria-expanded', 'false');
  sidebarToggle.setAttribute('aria-label', 'ขยายเมนู');
  sidebarToggle.textContent = '›';
}
const sectionLinks = [...document.querySelectorAll('.nav-item[data-section]')];
function setActiveSection(section) { sectionLinks.forEach(link => link.classList.toggle('active', link.dataset.section === section)); }
sectionLinks.forEach(link => link.addEventListener('click', () => setActiveSection(link.dataset.section)));
const watchedSections = sectionLinks.map(link => document.querySelector(`#${link.dataset.section}`)).filter(Boolean);
const sectionObserver = new IntersectionObserver(entries => {
  const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (visible) setActiveSection(visible.target.id);
}, { rootMargin: '-18% 0px -62% 0px', threshold: [0.1, 0.3, 0.6] });
watchedSections.forEach(section => sectionObserver.observe(section));
function renderNews(filter='all', query='') {
  const items = news.filter(item => (filter === 'all' || item.game === filter) && (!query || `${item.title} ${item.tag}`.toLowerCase().includes(query.toLowerCase())));
  newsGrid.innerHTML = items.length ? items.map(item => `<article class="news-card" tabindex="0" data-news-title="${item.title}"><img src="${item.img}" alt="${item.title}" loading="lazy"><span class="tag">${item.tag}</span><h3>${item.title}</h3><p>${item.desc}</p><time>${item.time}</time><span class="read-more">อ่านรายละเอียด ↗</span></article>`).join('') : '<p class="empty-state">ไม่พบข่าวที่ตรงกับการค้นหา</p>';
  document.querySelectorAll('.news-card').forEach(card => { const open = () => openNewsModal(news.find(item => item.title === card.dataset.newsTitle)); card.addEventListener('click', open); card.addEventListener('keydown', event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); } }); });
}
async function copyShareText(text) {
  try { if (navigator.clipboard) { await navigator.clipboard.writeText(text); return; } } catch (error) {}
  const helper = document.createElement('textarea'); helper.value = text; helper.setAttribute('readonly', ''); helper.style.position = 'fixed'; helper.style.opacity = '0'; document.body.appendChild(helper); helper.select(); document.execCommand('copy'); helper.remove();
}
function renderFeed() {
  document.querySelector('#feed').innerHTML = feedPosts.map((post, index) => `<article class="feed-post"><div class="feed-head"><div class="avatar" style="background:${post.color}">${post.avatar}</div><div><span class="feed-name">${post.name}</span><span class="feed-time">${post.time}</span></div></div><p class="feed-text">${post.text}</p><div class="feed-actions"><button class="like-btn" data-index="${index}">♡ <span>${post.likes}</span></button><button class="share-btn" data-index="${index}">↗ แชร์</button><button class="reply-btn">↩ ตอบกลับ</button><span>•••</span></div></article>`).join('');
  document.querySelectorAll('.like-btn').forEach(button => button.addEventListener('click', () => { const post = feedPosts[button.dataset.index]; post.likes += button.classList.toggle('liked') ? 1 : -1; button.innerHTML = `${button.classList.contains('liked') ? '♥' : '♡'} <span>${post.likes}</span>`; }));
  document.querySelectorAll('.share-btn').forEach(button => button.addEventListener('click', async () => { const post = feedPosts[button.dataset.index]; const shareData = { title:`${post.name} บน Leto Esport`, text:post.text, url:window.location.href }; try { if (navigator.share) await navigator.share(shareData); else { await copyShareText(`${post.text} - ${window.location.href}`); showToast('คัดลอกโพสต์แล้ว'); } } catch (error) { if (error.name !== 'AbortError') showToast('แชร์โพสต์ไม่สำเร็จ'); } }));
}
function openNewsModal(item) { if (!item) return; document.querySelector('#modalImage').src = item.img; document.querySelector('#modalImage').alt = item.title; document.querySelector('#modalTag').textContent = item.tag; document.querySelector('#modalTitle').textContent = item.title; document.querySelector('#modalTime').textContent = item.time; document.querySelector('#modalBody').innerHTML = item.detail.split('\n\n').map(paragraph => `<p>${paragraph}</p>`).join(''); document.querySelector('#newsModal').classList.add('open'); document.querySelector('#newsModal').setAttribute('aria-hidden', 'false'); }
function closeNewsModal() { document.querySelector('#newsModal').classList.remove('open'); document.querySelector('#newsModal').setAttribute('aria-hidden', 'true'); }
function showToast(message) { toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 1800); }
const themeToggle = document.querySelector('#themeToggle');
function setTheme(theme) { document.documentElement.dataset.theme = theme; document.body.style.backgroundColor = theme === 'dark' ? '#171a1d' : ''; document.body.style.color = theme === 'dark' ? '#f4f2ec' : ''; themeToggle.setAttribute('aria-pressed', theme === 'dark'); localStorage.setItem('leto-theme', theme); }
setTheme(localStorage.getItem('leto-theme') || 'light');
themeToggle.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
const heroSlides = [...document.querySelectorAll('.hero-slide')];
const heroDots = document.querySelector('#heroDots');
let heroIndex = 0;
let heroTimer;
heroDots.innerHTML = heroSlides.map((slide, index) => `<button class="hero-dot${index === 0 ? ' active' : ''}" aria-label="ดูสไลด์ที่ ${index + 1}"></button>`).join('');
function showHeroSlide(index) { heroIndex = (index + heroSlides.length) % heroSlides.length; const slide = heroSlides[heroIndex]; const action = document.querySelector('#heroAction'); const isActivity = slide.classList.contains('activity-hero-slide'); heroSlides.forEach(item => item.classList.remove('active')); slide.classList.add('active'); document.querySelectorAll('.hero-dot').forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === heroIndex)); document.querySelector('#heroTag').textContent = slide.dataset.tag; document.querySelector('#heroTitle').innerHTML = `${slide.dataset.title.split('|')[0]}<br><em>${slide.dataset.title.split('|')[1]}</em>`; document.querySelector('#heroDescription').textContent = slide.dataset.desc; document.querySelector('#heroAuthor').textContent = slide.dataset.author; document.querySelector('#heroTime').textContent = slide.dataset.time; action.innerHTML = isActivity ? 'เริ่มกิจกรรม <span>↗</span>' : 'อ่านเรื่องเต็ม <span>↗</span>'; action.onclick = () => isActivity ? window.location.href = 'game.html' : document.querySelector('#news').scrollIntoView(); }
function resetHeroTimer() { clearInterval(heroTimer); heroTimer = setInterval(() => showHeroSlide(heroIndex + 1), 6000); }
document.querySelector('#heroPrev').addEventListener('click', () => { showHeroSlide(heroIndex - 1); resetHeroTimer(); });
document.querySelector('#heroNext').addEventListener('click', () => { showHeroSlide(heroIndex + 1); resetHeroTimer(); });
document.querySelectorAll('.hero-dot').forEach((dot, index) => dot.addEventListener('click', () => { showHeroSlide(index); resetHeroTimer(); }));
document.querySelector('#featuredSlider').addEventListener('mouseleave', resetHeroTimer);
showHeroSlide(0);
resetHeroTimer();
renderNews(); renderFeed();
document.querySelectorAll('.game-filter').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.game-filter').forEach(item => item.classList.remove('active')); button.classList.add('active'); renderNews(button.dataset.game, document.querySelector('#searchInput').value); }));
document.querySelector('#searchToggle').addEventListener('click', () => { document.querySelector('#searchBar').classList.toggle('open'); if (document.querySelector('#searchBar').classList.contains('open')) document.querySelector('#searchInput').focus(); });
document.querySelector('#closeSearch').addEventListener('click', () => document.querySelector('#searchBar').classList.remove('open'));
document.querySelector('#searchInput').addEventListener('input', event => { const active = document.querySelector('.game-filter.active').dataset.game; renderNews(active, event.target.value); });
document.querySelector('#postInput').addEventListener('input', event => document.querySelector('#charCount').textContent = `${event.target.value.length} / 180`);
document.querySelector('#postButton').addEventListener('click', () => { const input = document.querySelector('#postInput'); const text = input.value.trim(); if (!text) { showToast('พิมพ์ความเห็นก่อนโพสต์นะ'); return; } feedPosts.unshift({name:'Kittisak', avatar:'K', color:'#c4dce4', time:'เมื่อสักครู่นี้', text, likes:0}); input.value = ''; document.querySelector('#charCount').textContent = '0 / 180'; renderFeed(); showToast('โพสต์ของคุณถูกเผยแพร่แล้ว'); });
document.querySelector('#viewAll').addEventListener('click', () => { renderNews(); showToast('แสดงข่าวทั้งหมดแล้ว'); });
document.querySelectorAll('[data-scroll]').forEach(button => button.addEventListener('click', () => document.querySelector(`#${button.dataset.scroll}`).scrollIntoView()));
document.querySelector('#modalClose').addEventListener('click', closeNewsModal);
document.querySelector('[data-close-modal]').addEventListener('click', closeNewsModal);
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeNewsModal(); });
const authModal = document.querySelector('#authModal');
const authTitle = document.querySelector('#authTitle');
const authSubtitle = document.querySelector('#authSubtitle');
const authSubmit = document.querySelector('#authSubmit');
const authNote = document.querySelector('#authNote');
const nameField = document.querySelector('#nameField');
function setAuthMode(mode) {
  const register = mode === 'register';
  document.querySelectorAll('.auth-tab').forEach(tab => tab.classList.toggle('active', tab.dataset.authTab === mode));
  authTitle.textContent = register ? 'สร้างบัญชีใหม่' : 'ยินดีต้อนรับกลับ';
  authSubtitle.textContent = register ? 'สมัครสมาชิกเพื่อร่วมกิจกรรมและคอมมูนิตี้' : 'เข้าสู่ระบบเพื่อร่วมกิจกรรมและคอมมูนิตี้';
  authSubmit.textContent = register ? 'สมัครสมาชิก' : 'เข้าสู่ระบบ';
  nameField.hidden = !register;
  authNote.innerHTML = register ? 'มีบัญชีแล้ว? <button type="button" data-auth-tab="login">เข้าสู่ระบบ</button>' : 'ยังไม่มีบัญชี? <button type="button" data-auth-tab="register">สมัครสมาชิก</button>';
  authNote.querySelector('button').addEventListener('click', () => setAuthMode(register ? 'login' : 'register'));
}
function openAuth(mode) { authModal.classList.add('open'); authModal.setAttribute('aria-hidden', 'false'); setAuthMode(mode); document.querySelector('#authEmail').focus(); }
function closeAuth() { authModal.classList.remove('open'); authModal.setAttribute('aria-hidden', 'true'); }
document.querySelectorAll('[data-auth]').forEach(button => button.addEventListener('click', () => openAuth(button.dataset.auth)));
document.querySelectorAll('[data-auth-tab]').forEach(button => button.addEventListener('click', () => setAuthMode(button.dataset.authTab)));
document.querySelector('#authClose').addEventListener('click', closeAuth);
document.querySelector('[data-close-auth]').addEventListener('click', closeAuth);
document.querySelector('#authForm').addEventListener('submit', event => { event.preventDefault(); showToast(document.querySelector('#authSubmit').textContent + 'สำเร็จแล้ว'); closeAuth(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape') closeAuth(); });
