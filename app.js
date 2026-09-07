const news = [
  {game:'valorant', tag:'VALORANT / VCT PACIFIC', title:'Paper Rex เปิดตัวผู้เล่นใหม่ พร้อมลุยศึก Pacific Stage 2', desc:'การกลับมาของ something ที่แฟนๆ รอคอย อาจเปลี่ยนเกมของทีม', time:'2 ชั่วโมงที่แล้ว', img:'https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=700&q=80'},
  {game:'lol', tag:'LEAGUE OF LEGENDS / LCK', title:'T1 ยังคงไร้พ่ายในสัปดาห์ที่ 4 ของ Summer Split', desc:'ชัยชนะเหนือ Gen.G ทำให้พวกเขาขยับขึ้นเป็นจ่าฝูงเดี่ยว', time:'4 ชั่วโมงที่แล้ว', img:'https://images.unsplash.com/photo-1603481546238-487240415921?auto=format&fit=crop&w=700&q=80'},
  {game:'pubg', tag:'PUBG / GLOBAL', title:'ทีมไทยพร้อมลุย PUBG Global Series ที่ริยาด', desc:'เป้าหมายเดียวคือถ้วยแชมป์ และเงินรางวัลก้อนใหญ่', time:'6 ชั่วโมงที่แล้ว', img:'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?auto=format&fit=crop&w=700&q=80'},
  {game:'valorant', tag:'VALORANT / ROSTER WATCH', title:'DRX ประกาศไลน์อัพใหม่ เตรียมล้างตาในรอบเพลย์ออฟ', desc:'พวกเขามีเวลาสองสัปดาห์เพื่อหาจังหวะที่ลงตัวที่สุด', time:'เมื่อวานนี้', img:'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=700&q=80'}
];
const feedPosts = [
  {name:'MildFPS', avatar:'M', color:'#e8c4b7', time:'12 นาทีที่แล้ว', text:'เกม T1 วันนี้คืออ่านขาดทุกจังหวะจริงๆ แบบนี้แหละที่เรียกว่า experience', likes:24},
  {name:'Jirayu S.', avatar:'J', color:'#b8d4c4', time:'38 นาทีที่แล้ว', text:'ใครดู VCT คืนนี้บ้างครับ คิดว่า PRX จะปิดเกม 2-0 ไหวไหม 🔥', likes:11}
];
const newsGrid = document.querySelector('#newsGrid');
const toast = document.querySelector('#toast');
function renderNews(filter='all', query='') {
  const items = news.filter(item => (filter === 'all' || item.game === filter) && (!query || `${item.title} ${item.tag}`.toLowerCase().includes(query.toLowerCase())));
  newsGrid.innerHTML = items.length ? items.map(item => `<article class="news-card"><img src="${item.img}" alt="${item.title}" loading="lazy"><span class="tag">${item.tag}</span><h3>${item.title}</h3><p>${item.desc}</p><time>${item.time}</time></article>`).join('') : '<p class="empty-state">ไม่พบข่าวที่ตรงกับการค้นหา</p>';
}
function renderFeed() {
  document.querySelector('#feed').innerHTML = feedPosts.map((post, index) => `<article class="feed-post"><div class="feed-head"><div class="avatar" style="background:${post.color}">${post.avatar}</div><div><span class="feed-name">${post.name}</span><span class="feed-time">${post.time}</span></div></div><p class="feed-text">${post.text}</p><div class="feed-actions"><button class="like-btn" data-index="${index}">♡ <span>${post.likes}</span></button><button class="reply-btn">↩ ตอบกลับ</button><span>•••</span></div></article>`).join('');
  document.querySelectorAll('.like-btn').forEach(button => button.addEventListener('click', () => { const post = feedPosts[button.dataset.index]; post.likes += button.classList.toggle('liked') ? 1 : -1; button.innerHTML = `${button.classList.contains('liked') ? '♥' : '♡'} <span>${post.likes}</span>`; }));
}
function showToast(message) { toast.textContent = message; toast.classList.add('show'); setTimeout(() => toast.classList.remove('show'), 1800); }
renderNews(); renderFeed();
document.querySelectorAll('.game-filter').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.game-filter').forEach(item => item.classList.remove('active')); button.classList.add('active'); renderNews(button.dataset.game, document.querySelector('#searchInput').value); }));
document.querySelector('#searchToggle').addEventListener('click', () => { document.querySelector('#searchBar').classList.toggle('open'); if (document.querySelector('#searchBar').classList.contains('open')) document.querySelector('#searchInput').focus(); });
document.querySelector('#closeSearch').addEventListener('click', () => document.querySelector('#searchBar').classList.remove('open'));
document.querySelector('#searchInput').addEventListener('input', event => { const active = document.querySelector('.game-filter.active').dataset.game; renderNews(active, event.target.value); });
document.querySelector('#postInput').addEventListener('input', event => document.querySelector('#charCount').textContent = `${event.target.value.length} / 180`);
document.querySelector('#postButton').addEventListener('click', () => { const input = document.querySelector('#postInput'); const text = input.value.trim(); if (!text) { showToast('พิมพ์ความเห็นก่อนโพสต์นะ'); return; } feedPosts.unshift({name:'Kittisak', avatar:'K', color:'#c4dce4', time:'เมื่อสักครู่นี้', text, likes:0}); input.value = ''; document.querySelector('#charCount').textContent = '0 / 180'; renderFeed(); showToast('โพสต์ของคุณถูกเผยแพร่แล้ว'); });
document.querySelector('#viewAll').addEventListener('click', () => { renderNews(); showToast('แสดงข่าวทั้งหมดแล้ว'); });
document.querySelectorAll('[data-scroll]').forEach(button => button.addEventListener('click', () => document.querySelector(`#${button.dataset.scroll}`).scrollIntoView()));
