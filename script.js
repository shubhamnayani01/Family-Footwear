/* ══════════════════════════════════════
   FAMILY FOOTWEAR — SCRIPT.JS (v2)
   ══════════════════════════════════════ */

'use strict';

/* ─── PRODUCT DATA ──────────────────────────────────────────────────── */
const PRODUCTS = [
  // NEW ARRIVALS — use real Unsplash product images
  { id:1,  name:'Classic Derby Shoes',        category:'men',    type:'shoe',   price:1299, img:'images/Casual.png',    isNew:true,  isBest:false, stars:4.8 },
  { id:2,  name:'Embroidered Party Heels',    category:'women',  type:'shoe',   price:1599, img:'images/ladies.png',    isNew:true,  isBest:false, stars:4.9 },
  { id:3,  name:'Kids Canvas Sneakers',       category:'kids',   type:'shoe',   price:699,  img:'images/kids01.png',    isNew:true,  isBest:false, stars:4.7 },
  { id:4,  name:'Pro Running Sports Shoes',   category:'sports', type:'sports', price:1899, img:'images/sports.png',       isNew:true,  isBest:false, stars:4.9 },
  { id:5,  name:'Daily Comfort Slippers',     category:'men',    type:'sandal', price:399,  img:'images/slippers.png',    isNew:true,  isBest:false, stars:4.6 },
  { id:6,  name:'Pro Sports shoes',           category:'women',  type:'sandal', price:899,  img:'images/sports-shoes.jpeg',       isNew:true,  isBest:false, stars:4.8 },
  { id:7,  name:'Kids Velcro School Shoes',   category:'kids',   type:'shoe',   price:549,  img:'images/school.png',       isNew:true,  isBest:false, stars:4.7 },
  { id:8,  name:'Casual Woven Loafers',       category:'men',    type:'shoe',   price:999,  img:'https://images.unsplash.com/photo-1533867617858-e7b97e060509?w=400&q=80&auto=format&fit=crop',    isNew:true,  isBest:false, stars:4.8 },

  // BEST SELLERS
  { id:9,  name:'Formal Oxford Shoes',        category:'men',    type:'shoe',   price:1499, img:'images/lakhani.png',    isNew:false, isBest:true,  stars:5.0 },
  { id:10, name:'Flat Men\'s Sandals',        category:'men',   type:'sandal',  price:749,  img:'images/mens sandal.jpeg',    isNew:false, isBest:true,  stars:4.9 },
  { id:11, name:'High Ankle Sports Shoes',    category:'sports', type:'sports', price:2199, img:'images/casuals3.png',    isNew:false, isBest:true,  stars:4.9 },
  { id:12, name:'Party Wear Juttis',          category:'women',  type:'shoe',   price:1199, img:'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?w=400&q=80&auto=format&fit=crop',    isNew:false, isBest:true,  stars:4.8 },
  { id:13, name:'Women\'s Rubber scoll',      category:'women',  type:'sandal', price:349, img:'images/ladies-scoll.jpeg',    isNew:false, isBest:true,  stars:4.7 },
  { id:14, name:'Men\'s daily wear scoll',    category:'men',    type:'sandal', price:799,  img:'images/daily-wear.jpeg',    isNew:false, isBest:true,  stars:4.8 },
  { id:15, name:'Gym Training Shoes',         category:'sports', type:'sports', price:1699, img:'images/sports shoes2.jpeg',       isNew:false, isBest:true,  stars:4.9 },
  { id:16, name:'Bridal Heels',               category:'women',  type:'shoe',   price:2499, img:'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&q=80&auto=format&fit=crop',       isNew:false, isBest:true,  stars:5.0 },
];

/* ─── BRANDS DATA ────────────────────────────────────────────────────── */
const BRANDS = [
  { name: 'Lakhani',  tag: 'Sports & Lifestyle' },
  { name: 'Campus', tag: 'Performance' },
  { name: 'Columbus', tag: 'Sport Fashion' },
  { name: 'Vkc', tag: 'Classic & Comfort' },
  { name: 'Sparx', tag: 'Casual Wear' },
  { name: 'Flite', tag: 'Active Footwear' },
];

/* ─── FILTER STATE ───────────────────────────────────────────────────── */
const filterState = { category: 'all', type: 'all', price: 2000 };

/* ─── STAR RENDERER ──────────────────────────────────────────────────── */
function renderStars(rating) {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(empty);
}

/* ─── PRODUCT CARD ───────────────────────────────────────────────────── */
function renderCard(product, badgeType) {
  const waMsg   = encodeURIComponent(`Hello Family Footwear! 👋\nI want details about *${product.name}* (₹${product.price.toLocaleString('en-IN')}).\nPlease share more info, availability and sizes. Thank you!`);
  const badgeHtml = badgeType === 'new'
    ? '<span class="product-badge badge-new">New</span>'
    : badgeType === 'popular'
      ? '<span class="product-badge badge-popular">⭐ Most Popular</span>'
      : '';
  return `
    <div class="product-card reveal"
      data-category="${product.category}"
      data-type="${product.type}"
      data-price="${product.price}">
      <div class="product-img-wrap">
        ${badgeHtml}
        <img
          src="${product.img}"
          alt="${product.name} — ${product.category} footwear at Family Footwear Nakhatrana"
          loading="lazy" />
      </div>
      <div class="product-body">
        <div class="product-name">${product.name}</div>
        <div class="product-mini-stars">${renderStars(product.stars)}</div>
        <div class="product-cat">${product.category} · ${product.type}</div>
        <div class="product-footer">
          <span class="product-price">₹${product.price.toLocaleString('en-IN')}</span>
          <a href="https://wa.me/919725275550?text=${waMsg}"
             class="product-wa-btn" target="_blank" rel="noopener">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.1.2-.3.2-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4C7.5 8 7 9.1 7 10.3c0 1.3.8 2.5 1.5 3.4C9.9 15.5 12 17 14.3 17.6c.5.1 1 .2 1.5.2.5 0 1.5-.2 2.1-.9.7-.7.9-1.5.6-1.9-.2-.3-.4-.3-.7-.4z"/>
              <path d="M12 2C6.5 2 2 6.5 2 12c0 1.9.5 3.7 1.4 5.3L2 22l4.8-1.3C8.3 21.5 10.1 22 12 22c5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.5c-1.7 0-3.4-.5-4.8-1.3l-.3-.2-3.4.9.9-3.3-.2-.3C3.5 15 3 13.5 3 12 3 7 7 3 12 3s9 4 9 9-4 9-9 9z"/>
            </svg>
            Ask Price
          </a>
        </div>
      </div>
    </div>`;
}

/* ─── RENDER PRODUCT GRIDS ───────────────────────────────────────────── */
function renderGrids() {
  const arrivalsGrid = document.getElementById('arrivalsGrid');
  const bestGrid     = document.getElementById('bestGrid');
  if (arrivalsGrid) arrivalsGrid.innerHTML = PRODUCTS.filter(p => p.isNew).map(p  => renderCard(p,'new')).join('');
  if (bestGrid)     bestGrid.innerHTML     = PRODUCTS.filter(p => p.isBest).map(p => renderCard(p,'popular')).join('');
  observeReveal();
}

/* ─── BRANDS SLIDER ──────────────────────────────────────────────────── */
function renderBrands() {
  const track = document.getElementById('brandsTrack');
  if (!track) return;
  // Double the array for seamless infinite scroll
  const all = [...BRANDS, ...BRANDS];
  track.innerHTML = all.map(b => `
    <div class="brand-logo" aria-label="${b.name}">
      <div class="brand-logo-name">${b.name}</div>
      <div class="brand-logo-tag">${b.tag}</div>
    </div>`).join('');
}

/* ─── FILTER ──────────────────────────────────────────────────────────── */
function applyFilters() {
  document.querySelectorAll('.product-card').forEach(card => {
    const catOk   = filterState.category === 'all' || card.dataset.category === filterState.category;
    const typeOk  = filterState.type     === 'all' || card.dataset.type     === filterState.type;
    const priceOk = parseInt(card.dataset.price) <= filterState.price;
    card.classList.toggle('hidden', !(catOk && typeOk && priceOk));
  });
}

function setFilter(dimension, value, el) {
  filterState[dimension] = value;
  const groupId = dimension === 'category' ? 'categoryFilters' : 'typeFilters';
  document.getElementById(groupId).querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  applyFilters();
}

function setPrice(val) {
  filterState.price = parseInt(val);
  document.getElementById('priceLabel').textContent = `₹${parseInt(val).toLocaleString('en-IN')}`;
  applyFilters();
}

function filterProducts(cat) {
  filterState.category = cat;
  document.getElementById('categoryFilters').querySelectorAll('.chip').forEach(c =>
    c.classList.toggle('active', c.dataset.filter === cat));
  applyFilters();
  document.getElementById('arrivals').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ─── CATEGORY MODAL ─────────────────────────────────────────────────── */
const catDefs = {
  men:    { label: "Men's Shoes",       filter: p => p.category === 'men'    },
  women:  { label: "Women's Sandals",   filter: p => p.category === 'women'  },
  kids:   { label: 'Kids Footwear',     filter: p => p.category === 'kids'   },
  sports: { label: 'Sports Shoes',      filter: p => p.category === 'sports' },
  daily:  { label: 'Daily Wear',        filter: p => p.type === 'sandal'     },
  party:  { label: 'Party Wear',        filter: p => p.category === 'women' && p.type === 'shoe' },
};

function openModal(cat) {
  const def = catDefs[cat]; if (!def) return;
  const items = PRODUCTS.filter(def.filter);
  document.getElementById('modalTitle').textContent = def.label;
  document.getElementById('modalGrid').innerHTML = items.map(p => renderCard(p, null)).join('');
  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
  observeReveal();
}
function closeModal() {
  document.getElementById('productModal').classList.remove('open');
  document.body.style.overflow = '';
}
document.querySelectorAll('.cat-card').forEach(card =>
  card.addEventListener('click', () => openModal(card.dataset.filter)));

/* ─── NAVBAR ─────────────────────────────────────────────────────────── */
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');
const navOverlay = document.getElementById('navOverlay');

window.addEventListener('scroll', () =>
  navbar.classList.toggle('scrolled', window.scrollY > 60), { passive: true });

function openNav() {
  navLinks.classList.add('open');
  navOverlay.classList.add('open');
  hamburger.classList.add('open');
  hamburger.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}
function closeNav() {
  navLinks.classList.remove('open');
  navOverlay.classList.remove('open');
  hamburger.classList.remove('open');
  hamburger.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}
hamburger.addEventListener('click', () =>
  navLinks.classList.contains('open') ? closeNav() : openNav());
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));

/* ─── AVAILABILITY FORM ───────────────────────────────────────────────── */
function checkAvailability() {
  const name    = document.getElementById('availName').value.trim();
  const phone   = document.getElementById('availPhone').value.trim();
  const product = document.getElementById('availProduct').value.trim();
  const qty     = document.getElementById('availQty').value.trim() || '1';
  if (!name || !product) {
    alert('Please enter your name and product description.'); return;
  }
  const msg = encodeURIComponent(
    `Hello Family Footwear! 👋\n\n` +
    `I would like to check product availability:\n` +
    `👤 Name: ${name}\n` +
    `📱 Phone: ${phone || 'N/A'}\n` +
    `👟 Product: ${product}\n` +
    `🔢 Quantity: ${qty}\n\n` +
    `Please confirm stock availability. Thank you!`
  );
  window.open(`https://wa.me/919725275550?text=${msg}`, '_blank');
}

/* ─── FAQ ACCORDION ──────────────────────────────────────────────────── */
function toggleFaq(btn) {
  const item     = btn.closest('.faq-item');
  const answer   = item.querySelector('.faq-a');
  const expanded = btn.getAttribute('aria-expanded') === 'true';

  // Close all others
  document.querySelectorAll('.faq-q[aria-expanded="true"]').forEach(other => {
    if (other !== btn) {
      other.setAttribute('aria-expanded', 'false');
      other.closest('.faq-item').querySelector('.faq-a').classList.remove('open');
    }
  });

  btn.setAttribute('aria-expanded', String(!expanded));
  answer.classList.toggle('open', !expanded);
}

/* ─── CONFETTI ───────────────────────────────────────────────────────── */
function launchConfetti() {
  const wrap = document.getElementById('confettiWrap');
  if (!wrap) return;
  const colors = ['#FFD700','#FF6B6B','#4ECDC4','#FFF','#F5D98B','#FF8C00','#FF69B4'];
  const shapes = ['■','●','▲','★','◆'];
  Array.from({length: 55}).forEach(() => {
    const el = document.createElement('span');
    el.className = 'confetti-piece';
    el.textContent = shapes[Math.floor(Math.random() * shapes.length)];
    el.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${-Math.random() * 20 - 5}%;
      color: ${colors[Math.floor(Math.random() * colors.length)]};
      font-size: ${8 + Math.random() * 10}px;
      animation-duration: ${3 + Math.random() * 4}s;
      animation-delay: ${Math.random() * 3}s;
    `;
    wrap.appendChild(el);
  });
}

/* ─── COUNTDOWN TIMER ────────────────────────────────────────────────── */
function runCountdown() {
  // Set sale end: next Diwali-ish date
  const saleEnd = new Date();
  saleEnd.setDate(saleEnd.getDate() + 18); // 18 days from today
  saleEnd.setHours(23, 59, 59, 0);

  function tick() {
    const now  = new Date();
    const diff = saleEnd - now;
    if (diff <= 0) return;

    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000)  / 60000);

    const cdD = document.getElementById('cd-d');
    const cdH = document.getElementById('cd-h');
    const cdM = document.getElementById('cd-m');
    if (cdD) cdD.textContent = String(d).padStart(2,'0');
    if (cdH) cdH.textContent = String(h).padStart(2,'0');
    if (cdM) cdM.textContent = String(m).padStart(2,'0');
  }
  tick();
  setInterval(tick, 60000);
}

/* ─── SCROLL REVEAL ──────────────────────────────────────────────────── */
function observeReveal() {
  const items = document.querySelectorAll('.reveal:not(.visible)');
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 70);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  items.forEach(el => io.observe(el));
}

/* ─── PRODUCT PHOTOS GALLERY ─────────────────────────────────────────── */

// Product photo gallery — exact WhatsApp filenames mapped to categories
const PG_PHOTOS = [
  // Alzabo / Jumplite — casual & daily wear
  { src: 'images/WhatsApp Image 2026-03-14 at 3.42.14 PM.jpeg',      cat: 'men',    alt: 'Casual shoes — Family Footwear Nakhatrana' },
  { src: 'images/images/WhatsApp Image 2026-03-14 at 3.42.15 PM (1).jpeg',  cat: 'women',  alt: 'Sandals — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 3.42.15 PM.jpeg',      cat: 'women',  alt: 'Sandals — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 3.42.17 PM (1).jpeg',  cat: 'men',    alt: 'Lakhani Touch shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 3.42.17 PM.jpeg',      cat: 'men',    alt: 'Lakhani shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 3.42.18 PM (1).jpeg',  cat: 'sports', alt: 'Sports shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 3.42.19 PM (3).jpeg',  cat: 'men',    alt: 'Casual shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 3.42.19 PM.jpeg',      cat: 'men',    alt: 'Casual shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 3.42.20 PM (1).jpeg',  cat: 'men',    alt: 'Casual shoes — Family Footwear Nakhatrana' },
  // Drlik brand — sports & casual
  { src: 'images/WhatsApp Image 2026-03-14 at 3.42.20 PM.jpeg',      cat: 'sports', alt: 'Drlik sports shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 3.42.21 PM (1).jpeg',  cat: 'sports', alt: 'Drlik sports shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 3.42.21 PM (2).jpeg',  cat: 'sports', alt: 'Drlik sports shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 3.42.21 PM.jpeg',      cat: 'sports', alt: 'Drlik sports shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 3.42.22 PM (1).jpeg',  cat: 'sports', alt: 'Columbus Massager shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 3.42.22 PM (2).jpeg',  cat: 'sports', alt: 'Drlik sports shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 3.42.22 PM (3).jpeg',  cat: 'men',    alt: 'Columbus Hand Free sandals — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 3.42.22 PM.jpeg',      cat: 'men',    alt: 'Columbus Paragon casual — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 3.42.23 PM (1).jpeg',  cat: 'sports', alt: 'Sports shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 3.42.23 PM (2).jpeg',  cat: 'sports', alt: 'Sports shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 3.42.23 PM.jpeg',      cat: 'sports', alt: 'Sports shoes — Family Footwear Nakhatrana' },
  // Mixed batch — 11.12 AM
  { src: 'images/WhatsApp Image 2026-03-14 at 11.12.36 AM (1).jpeg', cat: 'kids',   alt: 'Kids shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 11.12.36 AM (2).jpeg', cat: 'kids',   alt: 'Kids shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 11.12.37 AM (1).jpeg', cat: 'men',    alt: 'Casual shoes — Family Footwear Nakhatrana' },
  // Flymax brand — 12.31 PM batch
  { src: 'images/WhatsApp Image 2026-03-14 at 12.31.20 PM (1).jpeg', cat: 'sports', alt: 'Flymax sports shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 12.31.20 PM (2).jpeg', cat: 'sports', alt: 'Flymax sports shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 12.31.20 PM.jpeg',     cat: 'sports', alt: 'Flymax sports shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 12.31.21 PM (1).jpeg', cat: 'sports', alt: 'Flymax sports shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 12.31.21 PM (2).jpeg', cat: 'sports', alt: 'Flymax sports shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 12.31.21 PM.jpeg',     cat: 'sports', alt: 'Flymax sports shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 12.31.22 PM (1).jpeg', cat: 'sports', alt: 'Flymax sports shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 12.31.22 PM (2).jpeg', cat: 'sports', alt: 'Flymax catalogue — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 12.31.22 PM.jpeg',     cat: 'sports', alt: 'Flymax sports shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 12.31.23 PM (1).jpeg', cat: 'sports', alt: 'Flymax sports shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 12.31.23 PM (2).jpeg', cat: 'sports', alt: 'Flymax sports shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 12.31.24 PM (2).jpeg', cat: 'sports', alt: 'Flymax sports shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 12.31.24 PM.jpeg',     cat: 'sports', alt: 'Flymax sports shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 12.31.25 PM (1).jpeg', cat: 'sports', alt: 'Sports shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 12.31.25 PM.jpeg',     cat: 'sports', alt: 'Sports shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 12.31.26 PM (2).jpeg', cat: 'men',    alt: 'Casual shoes — Family Footwear Nakhatrana' },
  { src: 'images/WhatsApp Image 2026-03-14 at 12.31.26 PM.jpeg',     cat: 'men',    alt: 'Casual shoes — Family Footwear Nakhatrana' },
];

const PG_BATCH    = 16; // how many to show initially / per load-more
let pgVisible     = PG_BATCH;
let pgCurrentCat  = 'all';
let pgLbIndex     = 0;
let pgFilteredArr = [...PG_PHOTOS];

function pgGetFiltered() {
  return pgCurrentCat === 'all'
    ? PG_PHOTOS
    : PG_PHOTOS.filter(p => p.cat === pgCurrentCat);
}

function pgRender() {
  const grid = document.getElementById('pgMasonry');
  if (!grid) return;
  pgFilteredArr = pgGetFiltered();

  grid.innerHTML = pgFilteredArr.map((photo, idx) => {
    const hidden = idx >= pgVisible ? 'pg-hidden' : '';
    const delay  = (idx % PG_BATCH) * 55;
    return `
      <div class="pg-item ${hidden}" data-idx="${idx}" data-cat="${photo.cat}"
           style="animation-delay:${delay}ms"
           onclick="pgLbOpen(${idx})">
        <img src="${photo.src}" alt="${photo.alt}" loading="lazy" />
        <div class="pg-item-overlay">
          <span class="pg-item-zoom">View Full</span>
        </div>
      </div>`;
  }).join('');

  // Show/hide load more
  const loadWrap = document.getElementById('pgLoadWrap');
  if (loadWrap) loadWrap.style.display = pgVisible >= pgFilteredArr.length ? 'none' : 'block';
}

function pgFilter(cat, el) {
  pgCurrentCat = cat;
  pgVisible    = PG_BATCH;
  document.querySelectorAll('.pg-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  pgRender();
}

function pgLoadMore() {
  pgVisible += PG_BATCH;
  pgRender();
}

/* ─── LIGHTBOX ───────────────────────────────────────────────────────── */
function pgLbOpen(idx) {
  pgLbIndex = idx;
  pgLbShow();
  document.getElementById('pgLightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function pgLbClose() {
  document.getElementById('pgLightbox').classList.remove('open');
  document.body.style.overflow = '';
}

function pgLbShow() {
  const photo = pgFilteredArr[pgLbIndex];
  const img   = document.getElementById('pgLbImg');
  const ctr   = document.getElementById('pgLbCounter');
  const wa    = document.getElementById('pgLbWa');

  img.classList.add('swapping');
  setTimeout(() => {
    img.src = photo.src;
    img.alt = photo.alt;
    img.classList.remove('swapping');
  }, 180);

  ctr.textContent = `${pgLbIndex + 1} / ${pgFilteredArr.length}`;
  const waMsg = encodeURIComponent(`Hello Family Footwear! 👋\nI'm interested in the product shown in photo #${pgLbIndex + 1}.\nCould you share details, price and availability? Thank you!`);
  wa.href = `https://wa.me/919725275550?text=${waMsg}`;
}

function pgLbNav(dir) {
  pgLbIndex = (pgLbIndex + dir + pgFilteredArr.length) % pgFilteredArr.length;
  pgLbShow();
}

/* ─── KEYBOARD CONTROLS ──────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  const lb = document.getElementById('pgLightbox');
  const lbOpen = lb && lb.classList.contains('open');
  if (lbOpen) {
    if (e.key === 'ArrowLeft')  pgLbNav(-1);
    if (e.key === 'ArrowRight') pgLbNav(1);
    if (e.key === 'Escape')     pgLbClose();
  } else {
    if (e.key === 'Escape') { closeModal(); closeNav(); }
  }
});

// Touch/swipe support for lightbox
(function() {
  let startX = 0;
  const lb = document.getElementById('pgLightbox');
  if (!lb) return;
  lb.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener('touchend',   e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) pgLbNav(diff > 0 ? 1 : -1);
  }, { passive: true });
})();



/* ─── INIT ───────────────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  renderGrids();
  renderBrands();
  pgRender();
  launchConfetti();
  runCountdown();

  // Stagger hero reveals
  document.querySelectorAll('.hero-content .reveal').forEach((el, i) =>
    setTimeout(() => el.classList.add('visible'), 250 + i * 160));

  observeReveal();

  // Observe offer banner for confetti trigger
  const offerObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      launchConfetti(); offerObs.disconnect();
    }
  }, { threshold: 0.3 });
  const offerBanner = document.getElementById('offers');
  if (offerBanner) offerObs.observe(offerBanner);
});
