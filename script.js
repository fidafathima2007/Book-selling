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
  const lowStock  = book.stock <= 5;
  return `
    <article class="book-card reveal" data-id="${book.id}" data-category="${book.category}" data-price="${book.price}" data-rating="${book.rating}" data-year="${book.year}">
      <div class="book-card-image">
        <img src="${book.cover}" alt="${book.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/200x300/1a1a2e/d4af37?text=Book'">
        ${book.badge ? `<span class="book-badge badge-${book.badge.toLowerCase().replace(/\s+/g,'-')}">${book.badge}</span>` : ''}
        ${discount > 0 ? `<span class="book-discount">-${discount}%</span>` : ''}
        <div class="book-card-overlay">
          <button class="btn-quick-view" data-id="${book.id}" aria-label="Quick view ${book.title}"><i class="fas fa-eye"></i> Quick View</button>
        </div>
      </div>
      <div class="book-card-body">
        <span class="book-category">${book.category}</span>
        <h3 class="book-title"><a href="product.html?id=${book.id}">${book.title}</a></h3>
        <p class="book-author">by ${book.author}</p>
        <div class="book-rating">${stars}<span class="rating-count">(${book.reviews.toLocaleString()})</span></div>
        ${lowStock ? `<p class="low-stock"><i class="fas fa-fire"></i> Only ${book.stock} left!</p>` : ''}
        <div class="book-price-row">
          <div class="book-price">
            <span class="price-current">$${book.price.toFixed(2)}</span>
            ${book.originalPrice ? `<span class="price-original">$${book.originalPrice.toFixed(2)}</span>` : ''}
          </div>
          <div class="book-actions">
            <button class="btn-wishlist ${inWishlist ? 'active' : ''}" data-wishlist-id="${book.id}" aria-label="Add to wishlist">
              <i class="${inWishlist ? 'fas' : 'far'} fa-heart"></i>
            </button>
            <button class="btn-add-cart" data-cart-id="${book.id}" aria-label="Add to cart">
              <i class="fas fa-shopping-bag"></i>
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

function renderStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) html += '<i class="fas fa-star"></i>';
    else if (i - rating < 1) html += '<i class="fas fa-star-half-alt"></i>';
    else html += '<i class="far fa-star"></i>';
  }
  return `<span class="stars">${html}</span><span class="rating-num">${rating}</span>`;
}

// ============================================================
// QUICK VIEW MODAL
// ============================================================
const Modal = {
  open(bookId) {
    const book = BOOKS.find(b => b.id === bookId);
    if (!book) return;
    const discount = book.originalPrice ? Math.round((1 - book.price / book.originalPrice) * 100) : 0;
    const modal = document.getElementById('quick-view-modal');
    if (!modal) return;
    modal.querySelector('.modal-body').innerHTML = `
      <div class="modal-book">
        <div class="modal-book-img">
          <img src="${book.cover}" alt="${book.title}" onerror="this.src='https://via.placeholder.com/200x300/1a1a2e/d4af37?text=Book'">
          ${discount > 0 ? `<span class="book-discount">-${discount}%</span>` : ''}
        </div>
        <div class="modal-book-info">
          <span class="book-category">${book.category}</span>
          <h2>${book.title}</h2>
          <p class="book-author">by <strong>${book.author}</strong></p>
          <div class="book-rating">${renderStars(book.rating)}<span class="rating-count">(${book.reviews.toLocaleString()} reviews)</span></div>
          <div class="modal-price">
            <span class="price-current">$${book.price.toFixed(2)}</span>
            ${book.originalPrice ? `<span class="price-original">$${book.originalPrice.toFixed(2)}</span>` : ''}
          </div>
          <p class="modal-desc">${book.description}</p>
          ${book.stock <= 5 ? `<p class="low-stock"><i class="fas fa-fire"></i> Only ${book.stock} left in stock!</p>` : ''}
          <div class="modal-actions">
            <div class="qty-selector">
              <button class="qty-btn" data-action="minus">−</button>
              <input type="number" class="qty-input" value="1" min="1" max="${book.stock}">
              <button class="qty-btn" data-action="plus">+</button>
            </div>
            <button class="btn-primary btn-add-to-cart" data-cart-id="${book.id}"><i class="fas fa-shopping-bag"></i> Add to Cart</button>
          </div>
          <a href="product.html?id=${book.id}" class="btn-view-full">View Full Details <i class="fas fa-arrow-right"></i></a>
        </div>
      </div>
    `;
    // Qty logic
    const qtyInput = modal.querySelector('.qty-input');
    modal.querySelectorAll('.qty-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        let val = parseInt(qtyInput.value) || 1;
        if (btn.dataset.action === 'plus') val = Math.min(val + 1, book.stock);
        else val = Math.max(val - 1, 1);
        qtyInput.value = val;
      });
    });
    modal.querySelector('.btn-add-to-cart')?.addEventListener('click', () => {
      Cart.add(book.id, parseInt(qtyInput.value) || 1);
    });
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  },
  close() {
    const modal = document.getElementById('quick-view-modal');
    modal?.classList.remove('active');
    document.body.style.overflow = '';
  },
  init() {
    const modal = document.getElementById('quick-view-modal');
    if (!modal) return;
    modal.addEventListener('click', e => { if (e.target === modal) this.close(); });
    modal.querySelector('.modal-close')?.addEventListener('click', () => this.close());
    document.addEventListener('keydown', e => { if (e.key === 'Escape') this.close(); });
  }
};

// ============================================================
// GLOBAL EVENT DELEGATION
// ============================================================
function initGlobalEvents() {
  document.addEventListener('click', e => {
    // Add to cart
    const cartBtn = e.target.closest('[data-cart-id]');
    if (cartBtn && !cartBtn.classList.contains('btn-add-to-cart')) {
      Cart.add(parseInt(cartBtn.dataset.cartId));
      cartBtn.classList.add('added');
      setTimeout(() => cartBtn.classList.remove('added'), 800);
    }
    // Wishlist
    const wishBtn = e.target.closest('[data-wishlist-id]');
    if (wishBtn) {
      Wishlist.toggle(parseInt(wishBtn.dataset.wishlistId));
    }
    // Quick view
    const qvBtn = e.target.closest('.btn-quick-view');
    if (qvBtn) {
      Modal.open(parseInt(qvBtn.dataset.id));
    }
  });
}

// ============================================================
// NEWSLETTER
// ============================================================
function initNewsletter() {
  const form = document.querySelector('.newsletter-form');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    if (!email) return;
    Toast.show('Thank you for subscribing!', 'success');
    form.reset();
  });
}

// ============================================================
// FAQ ACCORDION
// ============================================================
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-question')?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ============================================================
// LOADING SCREEN
// ============================================================
function initLoader() {
  const loader = document.getElementById('page-loader');
  if (!loader) return;
  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.classList.add('hidden');
      setTimeout(() => loader.remove(), 600);
    }, 800);
  });
}

// ============================================================
// HOME PAGE — Featured Books
// ============================================================
function initHomePage() {
  if (!document.body.classList.contains('page-home')) return;

  // Featured books (first 6)
  const featuredGrid = document.getElementById('featured-books');
  if (featuredGrid) {
    featuredGrid.innerHTML = BOOKS.slice(0, 6).map(b => renderBookCard(b)).join('');
  }

  // Bestsellers carousel
  const carousel = document.getElementById('bestsellers-track');
  if (carousel) {
    const sorted = [...BOOKS].sort((a, b) => b.reviews - a.reviews).slice(0, 8);
    carousel.innerHTML = sorted.map(b => renderBookCard(b)).join('');
    initCarousel();
  }

  HeroSlider.init();
  Countdown.init();
  ScrollReveal.init();
}

function initCarousel() {
  const track = document.getElementById('bestsellers-track');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');
  if (!track) return;

  let idx = 0;
  const getVisible = () => window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3;

  function slide(dir) {
    const cards = track.children;
    const visible = getVisible();
    const max = cards.length - visible;
    idx = Math.max(0, Math.min(idx + dir, max));
    const cardW = cards[0]?.offsetWidth + 24 || 280;
    track.style.transform = `translateX(-${idx * cardW}px)`;
  }

  prevBtn?.addEventListener('click', () => slide(-1));
  nextBtn?.addEventListener('click', () => slide(1));

  // Auto slide
  let autoSlide = setInterval(() => slide(1), 3500);
  track.parentElement?.addEventListener('mouseenter', () => clearInterval(autoSlide));
  track.parentElement?.addEventListener('mouseleave', () => {
    autoSlide = setInterval(() => {
      const visible = getVisible();
      if (idx >= track.children.length - visible) idx = -1;
      slide(1);
    }, 3500);
  });
}

// ============================================================
// SHOP PAGE
// ============================================================
function initShopPage() {
  if (!document.body.classList.contains('page-shop')) return;

  let filteredBooks = [...BOOKS];
  let currentPage = 1;
  const PER_PAGE = 8;

  const grid = document.getElementById('shop-grid');
  const searchInput = document.getElementById('search-input');
  const categoryFilter = document.getElementById('filter-category');
  const ratingFilter = document.getElementById('filter-rating');
  const priceMin = document.getElementById('price-min');
  const priceMax = document.getElementById('price-max');
  const priceMinVal = document.getElementById('price-min-val');
  const priceMaxVal = document.getElementById('price-max-val');
  const sortSelect = document.getElementById('sort-select');
  const resultCount = document.getElementById('result-count');
  const pagination = document.getElementById('pagination');

  // Populate categories
  if (categoryFilter) {
    const cats = [...new Set(BOOKS.map(b => b.category))];
    cats.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat; opt.textContent = cat;
      categoryFilter.appendChild(opt);
    });
  }

  function applyFilters() {
    const search = searchInput?.value.toLowerCase() || '';
    const category = categoryFilter?.value || '';
    const rating = parseFloat(ratingFilter?.value || '0');
    const minP = parseFloat(priceMin?.value || '0');
    const maxP = parseFloat(priceMax?.value || '9999');
    const sort = sortSelect?.value || 'default';

    filteredBooks = BOOKS.filter(b => {
      const matchSearch = !search || b.title.toLowerCase().includes(search) || b.author.toLowerCase().includes(search);
      const matchCat = !category || b.category === category;
      const matchRating = b.rating >= rating;
      const matchPrice = b.price >= minP && b.price <= maxP;
      return matchSearch && matchCat && matchRating && matchPrice;
    });

    if (sort === 'price-asc') filteredBooks.sort((a, b) => a.price - b.price);
    else if (sort === 'price-desc') filteredBooks.sort((a, b) => b.price - a.price);
    else if (sort === 'newest') filteredBooks.sort((a, b) => b.year - a.year);
    else if (sort === 'rating') filteredBooks.sort((a, b) => b.rating - a.rating);

    currentPage = 1;
    renderGrid();
  }

  function renderGrid() {
    if (!grid) return;
    const start = (currentPage - 1) * PER_PAGE;
    const page = filteredBooks.slice(start, start + PER_PAGE);

    if (resultCount) resultCount.textContent = `${filteredBooks.length} books found`;

    if (page.length === 0) {
      grid.innerHTML = '<div class="no-results"><i class="fas fa-search"></i><p>No books found. Try different filters.</p></div>';
    } else {
      grid.innerHTML = page.map(b => renderBookCard(b)).join('');
      ScrollReveal.init();
    }

    renderPagination();
  }

  function renderPagination() {
    if (!pagination) return;
    const total = Math.ceil(filteredBooks.length / PER_PAGE);
    if (total <= 1) { pagination.innerHTML = ''; return; }
    let html = '';
    for (let i = 1; i <= total; i++) {
      html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" data-page="${i}">${i}</button>`;
    }
    pagination.innerHTML = html;
    pagination.querySelectorAll('.page-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        currentPage = parseInt(btn.dataset.page);
        renderGrid();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    });
  }

  // Price range
  if (priceMin && priceMax) {
    const updatePriceDisplay = () => {
      if (priceMinVal) priceMinVal.textContent = `$${priceMin.value}`;
      if (priceMaxVal) priceMaxVal.textContent = `$${priceMax.value}`;
      applyFilters();
    };
    priceMin.addEventListener('input', updatePriceDisplay);
    priceMax.addEventListener('input', updatePriceDisplay);
  }

  searchInput?.addEventListener('input', applyFilters);
  categoryFilter?.addEventListener('change', applyFilters);
  ratingFilter?.addEventListener('change', applyFilters);
  sortSelect?.addEventListener('change', applyFilters);

  document.getElementById('reset-filters')?.addEventListener('click', () => {
    if (searchInput) searchInput.value = '';
    if (categoryFilter) categoryFilter.value = '';
    if (ratingFilter) ratingFilter.value = '0';
    if (priceMin) priceMin.value = priceMin.min;
    if (priceMax) priceMax.value = priceMax.max;
    applyFilters();
  });

  applyFilters();
}

// ============================================================
// PRODUCT DETAIL PAGE
// ============================================================
function initProductPage() {
  if (!document.body.classList.contains('page-product')) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const book = BOOKS.find(b => b.id === id) || BOOKS[0];
  const discount = book.originalPrice ? Math.round((1 - book.price / book.originalPrice) * 100) : 0;

  // Populate product details
  const titleEl = document.getElementById('product-title');
  const authorEl = document.getElementById('product-author');
  const ratingEl = document.getElementById('product-rating');
  const priceEl = document.getElementById('product-price');
  const descEl = document.getElementById('product-desc');
  const imgEl = document.getElementById('product-image');
  const badgeEl = document.getElementById('product-badge');
  const stockEl = document.getElementById('product-stock');
  const isbnEl = document.getElementById('product-isbn');
  const yearEl = document.getElementById('product-year');
  const catEl = document.getElementById('product-category');

  if (titleEl) titleEl.textContent = book.title;
  if (authorEl) authorEl.textContent = `by ${book.author}`;
  if (ratingEl) ratingEl.innerHTML = renderStars(book.rating) + `<span class="rating-count">(${book.reviews.toLocaleString()} reviews)</span>`;
  if (priceEl) priceEl.innerHTML = `<span class="price-current">$${book.price.toFixed(2)}</span>${book.originalPrice ? `<span class="price-original">$${book.originalPrice.toFixed(2)}</span>` : ''}${discount > 0 ? `<span class="discount-badge">-${discount}% OFF</span>` : ''}`;
  if (descEl) descEl.textContent = book.description;
  if (imgEl) { imgEl.src = book.cover; imgEl.alt = book.title; }
  if (badgeEl && book.badge) { badgeEl.textContent = book.badge; badgeEl.style.display = 'inline'; }
  if (stockEl) stockEl.innerHTML = book.stock <= 5 ? `<i class="fas fa-fire"></i> Only ${book.stock} left!` : `<i class="fas fa-check-circle"></i> In Stock (${book.stock} available)`;
  if (isbnEl) isbnEl.textContent = book.isbn;
  if (yearEl) yearEl.textContent = book.year;
  if (catEl) catEl.textContent = book.category;

  document.title = `${book.title} — Luminary Books`;

  // Qty
  const qtyInput = document.getElementById('qty-input');
  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      let val = parseInt(qtyInput?.value || 1);
      if (btn.dataset.action === 'plus') val = Math.min(val + 1, book.stock);
      else val = Math.max(val - 1, 1);
      if (qtyInput) qtyInput.value = val;
    });
  });

  document.getElementById('add-to-cart-main')?.addEventListener('click', () => {
    Cart.add(book.id, parseInt(qtyInput?.value || 1));
  });

  document.getElementById('wishlist-main')?.addEventListener('click', function() {
    Wishlist.toggle(book.id);
    this.dataset.wishlistId = book.id;
    Wishlist.updateButtons();
  });

  // Related books
  const relGrid = document.getElementById('related-books');
  if (relGrid) {
    const related = BOOKS.filter(b => b.id !== book.id && b.category === book.category).slice(0, 4);
    relGrid.innerHTML = (related.length ? related : BOOKS.filter(b => b.id !== book.id).slice(0, 4)).map(b => renderBookCard(b)).join('');
  }

  // Sample reviews
  const reviews = [
    { name: "Sarah M.", rating: 5, text: "Absolutely captivating! Couldn't put it down. A must-read for everyone.", date: "Jan 2025" },
    { name: "James K.", rating: 4, text: "Beautiful writing, thought-provoking themes. Highly recommend!", date: "Dec 2024" },
    { name: "Emily R.", rating: 5, text: "One of the best books I've ever read. Emotional and brilliant.", date: "Nov 2024" }
  ];
  const reviewList = document.getElementById('review-list');
  if (reviewList) {
    reviewList.innerHTML = reviews.map(r => `
      <div class="review-item reveal">
        <div class="review-header">
          <div class="review-avatar">${r.name.charAt(0)}</div>
          <div><strong>${r.name}</strong><span class="review-date">${r.date}</span></div>
          <div class="stars">${'<i class="fas fa-star"></i>'.repeat(r.rating)}</div>
        </div>
        <p>${r.text}</p>
      </div>
    `).join('');
  }

  ScrollReveal.init();
}

// ============================================================
// CART PAGE
// ============================================================
function initCartPage() {
  if (!document.body.classList.contains('page-cart')) return;
  renderCartPage();
}

function renderCartPage() {
  const cart = Cart.get();
  const container = document.getElementById('cart-items');
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');
  const shippingEl = document.getElementById('cart-shipping');
  const emptyEl = document.getElementById('cart-empty');
  const summaryEl = document.getElementById('cart-summary');

  if (!container) return;

  if (cart.length === 0) {
    if (emptyEl) emptyEl.style.display = 'flex';
    if (summaryEl) summaryEl.style.display = 'none';
    container.innerHTML = '';
    return;
  }

  if (emptyEl) emptyEl.style.display = 'none';
  if (summaryEl) summaryEl.style.display = 'block';

  container.innerHTML = cart.map(item => {
    const book = BOOKS.find(b => b.id === item.id);
    if (!book) return '';
    return `
      <div class="cart-item" data-cart-item="${book.id}">
        <img src="${book.cover}" alt="${book.title}" onerror="this.src='https://via.placeholder.com/80x120/1a1a2e/d4af37?text=Book'">
        <div class="cart-item-info">
          <h4><a href="product.html?id=${book.id}">${book.title}</a></h4>
          <p>by ${book.author}</p>
          <span class="cart-item-cat">${book.category}</span>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" data-action="minus" data-id="${book.id}">−</button>
          <span class="qty-display">${item.qty}</span>
          <button class="qty-btn" data-action="plus" data-id="${book.id}">+</button>
        </div>
        <div class="cart-item-price">$${(book.price * item.qty).toFixed(2)}</div>
        <button class="cart-item-remove" data-remove="${book.id}" aria-label="Remove ${book.title}"><i class="fas fa-times"></i></button>
      </div>
    `;
  }).join('');

  // Events
  container.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.dataset.id);
      const item = Cart.get().find(i => i.id === id);
      const book = BOOKS.find(b => b.id === id);
      if (!item || !book) return;
      let qty = item.qty;
      if (btn.dataset.action === 'plus') qty = Math.min(qty + 1, book.stock);
      else qty = qty - 1;
      Cart.update(id, qty);
      renderCartPage();
    });
  });

  container.querySelectorAll('[data-remove]').forEach(btn => {
    btn.addEventListener('click', () => {
      Cart.remove(parseInt(btn.dataset.remove));
      renderCartPage();
      Toast.show('Item removed from cart', 'info');
    });
  });

  // Totals
  const subtotal = Cart.total();
  const shipping = subtotal > 35 ? 0 : 4.99;
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;
  if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
  if (totalEl) totalEl.textContent = `$${(subtotal + shipping).toFixed(2)}`;

  // Coupon
  document.getElementById('apply-coupon')?.addEventListener('click', () => {
    const code = document.getElementById('coupon-input')?.value.trim().toUpperCase();
    if (code === 'LUMINARY20') Toast.show('Coupon applied! 20% off', 'success');
    else Toast.show('Invalid coupon code', 'error');
  });
}

// ============================================================
// CHECKOUT PAGE
// ============================================================
function initCheckoutPage() {
  if (!document.body.classList.contains('page-checkout')) return;

  // Render order summary
  const cart = Cart.get();
  const orderList = document.getElementById('order-items');
  if (orderList) {
    orderList.innerHTML = cart.map(item => {
      const book = BOOKS.find(b => b.id === item.id);
      if (!book) return '';
      return `<div class="order-item"><span>${book.title} × ${item.qty}</span><span>$${(book.price * item.qty).toFixed(2)}</span></div>`;
    }).join('');
  }

  const subtotal = Cart.total();
  const shipping = subtotal > 35 ? 0 : 4.99;
  const total = subtotal + shipping;
  const orderTotal = document.getElementById('order-total');
  const orderSubtotal = document.getElementById('order-subtotal');
  const orderShipping = document.getElementById('order-shipping');
  if (orderSubtotal) orderSubtotal.textContent = `$${subtotal.toFixed(2)}`;
  if (orderShipping) orderShipping.textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
  if (orderTotal) orderTotal.textContent = `$${total.toFixed(2)}`;

  // Payment tabs
  document.querySelectorAll('.payment-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.payment-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.payment-content').forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById(tab.dataset.tab)?.classList.add('active');
    });
  });

  // Form validation & submit
  const form = document.getElementById('checkout-form');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim()) {
        field.classList.add('error');
        valid = false;
      } else {
        field.classList.remove('error');
      }
    });
    if (!valid) { Toast.show('Please fill in all required fields', 'error'); return; }
    // Show success modal
    document.getElementById('order-success-modal')?.classList.add('active');
    Cart.clear();
  });

  form?.querySelectorAll('[required]').forEach(field => {
    field.addEventListener('input', () => field.classList.remove('error'));
  });

  document.getElementById('success-close')?.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}

// ============================================================
// INIT — Run on DOM ready
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  ThemeToggle.init();
  Navbar.init();
  BackToTop.init();
  Modal.init();
  initGlobalEvents();
  initNewsletter();
  initFAQ();
  Cart.updateBadge();
  Wishlist.updateButtons();

  initHomePage();
  initShopPage();
  initProductPage();
  initCartPage();
  initCheckoutPage();
});
