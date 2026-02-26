/* ============================================================
   LUMINARY BOOKS — Main JavaScript
   Premium Book-Selling Platform
   ============================================================ */

'use strict';

// ============================================================
// PRODUCT DATA — 14 Sample Books
// ============================================================
const BOOKS = [
  {
    id: 1,
    title: "The Midnight Library",
    author: "Matt Haig",
    price: 18.99,
    originalPrice: 24.99,
    rating: 4.8,
    reviews: 2847,
    category: "Fiction",
    cover: "https://images-na.ssl-images-amazon.com/images/P/0525559477.01.L.jpg",
    badge: "Bestseller",
    stock: 12,
    year: 2020,
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived.",
    isbn: "978-0525559474"
  },
  {
    id: 2,
    title: "Atomic Habits",
    author: "James Clear",
    price: 16.99,
    originalPrice: 22.00,
    rating: 4.9,
    reviews: 5632,
    category: "Self-Help",
    cover: "https://images-na.ssl-images-amazon.com/images/P/0735211299.01.L.jpg",
    badge: "New",
    stock: 8,
    year: 2018,
    description: "Tiny Changes, Remarkable Results. An Easy & Proven Way to Build Good Habits & Break Bad Ones.",
    isbn: "978-0735211292"
  },
  {
    id: 3,
    title: "Dune",
    author: "Frank Herbert",
    price: 14.99,
    originalPrice: 19.99,
    rating: 4.7,
    reviews: 8901,
    category: "Sci-Fi",
    cover: "https://images-na.ssl-images-amazon.com/images/P/0441013597.01.L.jpg",
    badge: "Classic",
    stock: 25,
    year: 1965,
    description: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world.",
    isbn: "978-0441013593"
  },
  {
    id: 4,
    title: "The Thursday Murder Club",
    author: "Richard Osman",
    price: 15.99,
    originalPrice: 20.00,
    rating: 4.6,
    reviews: 3211,
    category: "Mystery",
    cover: "https://images-na.ssl-images-amazon.com/images/P/1984880985.01.L.jpg",
    badge: "Sale",
    stock: 3,
    year: 2020,
    description: "Four septuagenarians meet weekly to investigate unsolved murders. When a real murder takes place on their doorstep, the Thursday Murder Club is on the case.",
    isbn: "978-1984880987"
  },
  {
    id: 5,
    title: "Project Hail Mary",
    author: "Andy Weir",
    price: 17.99,
    originalPrice: 23.00,
    rating: 4.9,
    reviews: 4102,
    category: "Sci-Fi",
    cover: "https://images-na.ssl-images-amazon.com/images/P/0593135202.01.L.jpg",
    badge: "Bestseller",
    stock: 18,
    year: 2021,
    description: "A lone astronaut must save the earth from disaster. A lone survivor must piece together his mission and save not just Earth, but the universe.",
    isbn: "978-0593135204"
  },
  {
    id: 6,
    title: "Think Again",
    author: "Adam Grant",
    price: 19.99,
    originalPrice: 27.00,
    rating: 4.7,
    reviews: 1987,
    category: "Self-Help",
    cover: "https://images-na.ssl-images-amazon.com/images/P/1984878107.01.L.jpg",
    badge: "New",
    stock: 14,
    year: 2021,
    description: "The Power of Knowing What You Don't Know. In our rapidly changing world, the skill we need most is the ability to rethink and unlearn.",
    isbn: "978-1984878106"
  },
  {
    id: 7,
    title: "The Song of Achilles",
    author: "Madeline Miller",
    price: 13.99,
    originalPrice: 18.00,
    rating: 4.8,
    reviews: 6744,
    category: "Fiction",
    cover: "https://images-na.ssl-images-amazon.com/images/P/0062060621.01.L.jpg",
    badge: "Award Winner",
    stock: 20,
    year: 2012,
    description: "A tale of gods, kings, immortal fame, and the human heart. Greece in the age of heroes. Patroclus, an awkward young prince, has been exiled to the court of King Peleus.",
    isbn: "978-0062060624"
  },
  {
    id: 8,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    price: 16.99,
    originalPrice: 22.00,
    rating: 4.6,
    reviews: 12450,
    category: "History",
    cover: "https://images-na.ssl-images-amazon.com/images/P/0062316117.01.L.jpg",
    badge: "Classic",
    stock: 30,
    year: 2011,
    description: "A Brief History of Humankind. From a renowned historian comes a groundbreaking narrative of humanity's creation and evolution.",
    isbn: "978-0062316110"
  },
  {
    id: 9,
    title: "The Four Winds",
    author: "Kristin Hannah",
    price: 17.49,
    originalPrice: 22.99,
    rating: 4.7,
    reviews: 3889,
    category: "Historical Fiction",
    cover: "https://images-na.ssl-images-amazon.com/images/P/1250178606.01.L.jpg",
    badge: "Bestseller",
    stock: 7,
    year: 2021,
    description: "From the #1 New York Times bestselling author of The Nightingale and The Great Alone comes an epic novel of love, heroism, and hope.",
    isbn: "978-1250178602"
  },
  {
    id: 10,
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    price: 18.49,
    originalPrice: 24.00,
    rating: 4.5,
    reviews: 2100,
    category: "Sci-Fi",
    cover: "https://images-na.ssl-images-amazon.com/images/P/0593311299.01.L.jpg",
    badge: "Award Winner",
    stock: 11,
    year: 2021,
    description: "From the Nobel-prize winning author, a moving portrait of the dangers of technology and the vital importance of love.",
    isbn: "978-0593311295"
  },
  {
    id: 11,
    title: "Educated",
    author: "Tara Westover",
    price: 15.49,
    originalPrice: 19.99,
    rating: 4.8,
    reviews: 9234,
    category: "Biography",
    cover: "https://images-na.ssl-images-amazon.com/images/P/0399590501.01.L.jpg",
    badge: "Memoir",
    stock: 22,
    year: 2018,
    description: "A memoir about a young girl who, kept out of school, leaves her survivalist family and goes on to earn a PhD from Cambridge University.",
    isbn: "978-0399590504"
  },
  {
    id: 12,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 12.99,
    originalPrice: 16.99,
    rating: 4.7,
    reviews: 15678,
    category: "Fiction",
    cover: "https://images-na.ssl-images-amazon.com/images/P/0062315005.01.L.jpg",
    badge: "Classic",
    stock: 50,
    year: 1988,
    description: "A magical story about following your dreams and listening to your heart. One of the best-selling books in history.",
    isbn: "978-0062315007"
  },
  {
    id: 13,
    title: "The Maid",
    author: "Nita Prose",
    price: 16.49,
    originalPrice: 21.00,
    rating: 4.5,
    reviews: 1456,
    category: "Mystery",
    cover: "https://images-na.ssl-images-amazon.com/images/P/0593314832.01.L.jpg",
    badge: "New",
    stock: 9,
    year: 2022,
    description: "A positively bewitching debut novel about an endearing outsider unraveling a murder in a glitzy hotel—perfect for fans of Clue.",
    isbn: "978-0593314838"
  },
  {
    id: 14,
    title: "Empire of Pain",
    author: "Patrick Radden Keefe",
    price: 19.49,
    originalPrice: 26.00,
    rating: 4.8,
    reviews: 2789,
    category: "Non-Fiction",
    cover: "https://images-na.ssl-images-amazon.com/images/P/0385545681.01.L.jpg",
    badge: "Award Winner",
    stock: 16,
    year: 2021,
    description: "The Dark History of the Sackler Dynasty. A masterful portrait of an American dynasty and the catastrophe they helped create.",
    isbn: "978-0385545686"
  }
];

// ============================================================
// CART SYSTEM — LocalStorage based
// ============================================================
const Cart = {
  get() {
    return JSON.parse(localStorage.getItem('luminary_cart') || '[]');
  },
  save(cart) {
    localStorage.setItem('luminary_cart', JSON.stringify(cart));
    this.updateBadge();
  },
  add(bookId, qty = 1) {
    const cart = this.get();
    const book = BOOKS.find(b => b.id === bookId);
    if (!book) return;
    const existing = cart.find(i => i.id === bookId);
    if (existing) {
      existing.qty = Math.min(existing.qty + qty, book.stock);
    } else {
      cart.push({ id: bookId, qty });
    }
    this.save(cart);
    Toast.show(`"${book.title}" added to cart!`, 'success');
  },
  remove(bookId) {
    const cart = this.get().filter(i => i.id !== bookId);
    this.save(cart);
  },
  update(bookId, qty) {
    const cart = this.get();
    const item = cart.find(i => i.id === bookId);
    if (item) {
      if (qty <= 0) { this.remove(bookId); return; }
      item.qty = qty;
      this.save(cart);
    }
  },
  count() {
    return this.get().reduce((sum, i) => sum + i.qty, 0);
  },
  total() {
    return this.get().reduce((sum, i) => {
      const b = BOOKS.find(b => b.id === i.id);
      return sum + (b ? b.price * i.qty : 0);
    }, 0);
  },
  updateBadge() {
    document.querySelectorAll('.cart-badge').forEach(el => {
      const count = this.count();
      el.textContent = count;
      el.style.display = count > 0 ? 'flex' : 'none';
    });
  },
  clear() {
    localStorage.removeItem('luminary_cart');
    this.updateBadge();
  }
};

// ============================================================
// WISHLIST SYSTEM
// ============================================================
const Wishlist = {
  get() {
    return JSON.parse(localStorage.getItem('luminary_wishlist') || '[]');
  },
  toggle(bookId) {
    const list = this.get();
    const book = BOOKS.find(b => b.id === bookId);
    if (!book) return;
    const idx = list.indexOf(bookId);
    if (idx > -1) {
      list.splice(idx, 1);
      Toast.show(`Removed from wishlist`, 'info');
    } else {
      list.push(bookId);
      Toast.show(`"${book.title}" added to wishlist!`, 'success');
    }
    localStorage.setItem('luminary_wishlist', JSON.stringify(list));
    this.updateButtons();
  },
  has(bookId) {
    return this.get().includes(bookId);
  },
  updateButtons() {
    document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
      const id = parseInt(btn.dataset.wishlistId);
      btn.classList.toggle('active', this.has(id));
      btn.querySelector('i').className = this.has(id) ? 'fas fa-heart' : 'far fa-heart';
    });
  }
};

// ============================================================
// TOAST NOTIFICATIONS
// ============================================================
const Toast = {
  show(message, type = 'success') {
    const container = document.getElementById('toast-container') || this.createContainer();
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    const icons = { success: 'fa-check-circle', error: 'fa-times-circle', info: 'fa-info-circle', warning: 'fa-exclamation-circle' };
    toast.innerHTML = `<i class="fas ${icons[type] || icons.success}"></i><span>${message}</span>`;
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 3200);
  },
  createContainer() {
    const div = document.createElement('div');
    div.id = 'toast-container';
    document.body.appendChild(div);
    return div;
  }
};

// ============================================================
// DARK / LIGHT MODE
// ============================================================
const ThemeToggle = {
  init() {
    const saved = localStorage.getItem('luminary_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    this.updateButton(saved);
    document.querySelectorAll('#theme-toggle, #theme-toggle-mobile').forEach(btn => {
      btn?.addEventListener('click', () => this.toggle());
    });
  },
  toggle() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('luminary_theme', next);
    this.updateButton(next);
  },
  updateButton(theme) {
    document.querySelectorAll('#theme-toggle, #theme-toggle-mobile').forEach(btn => {
      if (!btn) return;
      btn.innerHTML = theme === 'dark'
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
      btn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    });
  }
};

// ============================================================
// NAVBAR — Sticky + Mobile
// ============================================================
const Navbar = {
  init() {
    const nav = document.querySelector('.navbar');
    if (!nav) return;
    window.addEventListener('scroll', () => {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    });
    // Mobile menu
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.querySelector('.nav-links');
    toggle?.addEventListener('click', () => {
      menu?.classList.toggle('open');
      const icon = toggle.querySelector('i');
      if (icon) icon.className = menu?.classList.contains('open') ? 'fas fa-times' : 'fas fa-bars';
    });
    // Close on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        menu?.classList.remove('open');
        const icon = toggle?.querySelector('i');
        if (icon) icon.className = 'fas fa-bars';
      });
    });
  }
};

// ============================================================
// BACK TO TOP
// ============================================================
const BackToTop = {
  init() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 400);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
};

// ============================================================
// SCROLL ANIMATIONS
// ============================================================
const ScrollReveal = {
  init() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
};

// ============================================================
// HERO SLIDER
// ============================================================
const HeroSlider = {
  slides: [
    { headline: "Stories That Stay With You Forever", sub: "Discover bestselling novels curated for curious minds", bg: "linear-gradient(135deg, #0a0a12 0%, #1a0a2e 50%, #0d1117 100%)" },
    { headline: "Expand Your Mind, Transform Your Life", sub: "Premium non-fiction and self-development books", bg: "linear-gradient(135deg, #0d1117 0%, #0a2218 50%, #1a1a0a 100%)" },
    { headline: "Journey Through Time and Space", sub: "Epic science fiction and fantasy collections", bg: "linear-gradient(135deg, #12000a 0%, #0d0a2e 50%, #0a1220 100%)" }
  ],
  current: 0,
  init() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    const headlineEl = hero.querySelector('.hero-headline');
    const subEl = hero.querySelector('.hero-sub');
    const dotsContainer = hero.querySelector('.hero-dots');
    if (!headlineEl || !subEl) return;

    // Create dots
    if (dotsContainer) {
      this.slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.className = `hero-dot ${i === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Slide ${i + 1}`);
        dot.addEventListener('click', () => { this.current = i; this.update(hero, headlineEl, subEl, dotsContainer); });
        dotsContainer.appendChild(dot);
      });
    }

    this.update(hero, headlineEl, subEl, dotsContainer);
    setInterval(() => {
      this.current = (this.current + 1) % this.slides.length;
      this.update(hero, headlineEl, subEl, dotsContainer);
    }, 5500);
  },
  update(hero, headlineEl, subEl, dotsContainer) {
    const slide = this.slides[this.current];
    hero.style.background = slide.bg;
    headlineEl.style.opacity = '0';
    headlineEl.style.transform = 'translateY(20px)';
    subEl.style.opacity = '0';
    setTimeout(() => {
      headlineEl.textContent = slide.headline;
      subEl.textContent = slide.sub;
      headlineEl.style.transition = 'all 0.6s ease';
      subEl.style.transition = 'all 0.6s ease 0.15s';
      headlineEl.style.opacity = '1';
      headlineEl.style.transform = 'translateY(0)';
      subEl.style.opacity = '1';
    }, 300);
    if (dotsContainer) {
      dotsContainer.querySelectorAll('.hero-dot').forEach((d, i) => d.classList.toggle('active', i === this.current));
    }
  }
};

// ============================================================
// COUNTDOWN TIMER
// ============================================================
const Countdown = {
  init() {
    const el = document.getElementById('countdown');
    if (!el) return;
    // Set 24h from now
    let target = localStorage.getItem('luminary_sale_end');
    if (!target || Date.now() > parseInt(target)) {
      target = Date.now() + 24 * 60 * 60 * 1000;
      localStorage.setItem('luminary_sale_end', target);
    }
    const update = () => {
      const diff = parseInt(target) - Date.now();
      if (diff <= 0) { el.innerHTML = '<span>Sale Ended</span>'; return; }
      const h = Math.floor(diff / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      const fmt = n => String(n).padStart(2, '0');
      el.innerHTML = `<div class="cd-unit"><span class="cd-num">${fmt(h)}</span><span class="cd-label">hrs</span></div><span class="cd-sep">:</span><div class="cd-unit"><span class="cd-num">${fmt(m)}</span><span class="cd-label">min</span></div><span class="cd-sep">:</span><div class="cd-unit"><span class="cd-num">${fmt(s)}</span><span class="cd-label">sec</span></div>`;
    };
    update();
    setInterval(update, 1000);
  }
};

// ============================================================
// BOOK CARD RENDERER
// ============================================================
function renderBookCard(book, opts = {}) {
  const discount = book.originalPrice ? Math.round((1 - book.price / book.originalPrice) * 100) : 0;
  const stars = renderStars(book.rating);
  const inWishlist = Wishlist.has(book.id);
  const lowStock 
