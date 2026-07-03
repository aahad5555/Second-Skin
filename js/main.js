/* =========================================================
   SECOND SKIN — Shared UI (header, footer, nav, renderers)
   ========================================================= */

const MEGA_FEATURE_IMG = {
  default: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
  noir:    "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?auto=format&fit=crop&w=800&q=80",
  tan:     "https://images.unsplash.com/photo-1623854156816-4c4fc355ffc7?auto=format&fit=crop&w=800&q=80",
  shearling: "https://images.unsplash.com/photo-1700168077358-692db90c8b7f?auto=format&fit=crop&w=800&q=80",
  womens:  "https://images.unsplash.com/photo-1602370463198-086436840055?auto=format&fit=crop&w=800&q=80",
  kids:    "https://images.unsplash.com/photo-1648009847493-db3a2f961bce?auto=format&fit=crop&w=800&q=80",
  accessories: "https://images.unsplash.com/photo-1637868796504-32f45a96d5a0?auto=format&fit=crop&w=800&q=80"
};

function headerHTML() {
  return `
  <div class="announce">Complimentary worldwide shipping · Handcrafted in Sialkot</div>
  <header class="header">
    <nav class="nav">
      <a href="index.html" class="brand">SECOND SKIN</a>
      <ul class="nav-links">
        <li class="has-mega">
          <a href="shop.html">Shop</a>
          <div class="mega">
            <div>
              <h4>Shop</h4>
              <ul>
                <li><a href="shop.html?g=Men" data-feat="noir">Men</a></li>
                <li><a href="shop.html?g=Women" data-feat="womens">Women</a></li>
                <li><a href="shop.html?g=Kids" data-feat="kids">Kids</a></li>
                <li><a href="shop.html?g=Accessories" data-feat="accessories">Accessories</a></li>
                <li><a href="custom.html">Made to Measure</a></li>
              </ul>
            </div>
            <div>
              <h4>The Styles</h4>
              <ul>
                <li><a href="shop.html?cat=Biker" data-feat="noir">Biker</a></li>
                <li><a href="shop.html?cat=Moto" data-feat="womens">Moto</a></li>
                <li><a href="shop.html?cat=Café Racer" data-feat="tan">Café Racer</a></li>
                <li><a href="shop.html?cat=Shearling" data-feat="shearling">Shearling</a></li>
                <li><a href="shop.html?cat=Bags" data-feat="accessories">Bags</a></li>
                <li><a href="shop.html?cat=Wallets" data-feat="accessories">Wallets</a></li>
              </ul>
            </div>
            <a class="mega-feature" id="mega-feature" href="shop.html" style="background-image:url('${MEGA_FEATURE_IMG.default}')">
              <div class="cap"><p>Shop Ready-To-Wear →</p></div>
            </a>
          </div>
        </li>
        <li><a href="custom.html">Made to Measure</a></li>
        <li><a href="collections.html">Collections</a></li>
        <li><a href="craft.html">Our Craft</a></li>
        <li><a href="journal.html">Journal</a></li>
      </ul>
      <div class="nav-actions">
        <a href="shop.html" class="desktop-only" aria-label="Search">
          <svg class="icon" viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4-4"/></svg>
        </a>
        <button onclick="openDrawer()" aria-label="Cart">Bag <span class="cart-count">0</span></button>
        <button class="burger" onclick="toggleMobile()" aria-label="Menu"><span></span><span></span><span></span></button>
      </div>
    </nav>
  </header>

  <div class="mobile-menu" id="mobile-menu">
    <button class="mobile-close" onclick="toggleMobile()" aria-label="Close">×</button>
    <a href="shop.html?g=Men">Men</a>
    <a href="shop.html?g=Women">Women</a>
    <a href="shop.html?g=Kids">Kids</a>
    <a href="shop.html?g=Accessories">Accessories</a>
    <a href="custom.html">Made to Measure</a>
    <a href="collections.html">Collections</a>
    <a href="craft.html">Our Craft</a>
    <a href="journal.html">Journal</a>
  </div>`;
}

function drawerHTML() {
  return `
  <div class="drawer-overlay" id="drawer-overlay" onclick="closeDrawer()"></div>
  <aside class="drawer" id="drawer" aria-label="Shopping bag">
    <div class="drawer-head">
      <h3>Your Bag</h3>
      <button onclick="closeDrawer()" aria-label="Close" style="font-size:22px;">×</button>
    </div>
    <div class="drawer-items" id="drawer-items"></div>
    <div class="drawer-foot" id="drawer-foot">
      <div class="row"><span>Subtotal</span><span class="total" id="drawer-subtotal">$0</span></div>
      <div class="row muted" style="color:var(--stone);font-size:13px;"><span>Shipping</span><span>Free</span></div>
      <button class="btn btn-primary" onclick="checkout()">Checkout</button>
      <p class="ship-note">Free worldwide shipping · Handcrafted in Sialkot</p>
    </div>
  </aside>`;
}

function footerHTML() {
  return `
  <footer class="footer">
    <div class="footer-cols">
      <div>
        <h4>Shop</h4>
        <ul>
          <li><a href="shop.html?g=Men">Men</a></li>
          <li><a href="shop.html?g=Women">Women</a></li>
          <li><a href="shop.html?g=Kids">Kids</a></li>
          <li><a href="shop.html?g=Accessories">Accessories</a></li>
          <li><a href="custom.html">Made to Measure</a></li>
        </ul>
      </div>
      <div>
        <h4>Our Craft</h4>
        <ul>
          <li><a href="craft.html">The Leather</a></li>
          <li><a href="craft.html">How It's Made</a></li>
          <li><a href="craft.html">Leather Care</a></li>
        </ul>
      </div>
      <div>
        <h4>Help</h4>
        <ul>
          <li><a href="#">Shipping</a></li>
          <li><a href="custom.html#measure">Size Guide</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="custom.html#faq">FAQ</a></li>
        </ul>
      </div>
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="craft.html">About</a></li>
          <li><a href="journal.html">Journal</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© 2026 Second Skin. All rights reserved.</span>
      <div class="pay">Visa · Mastercard · Amex · Apple&nbsp;Pay · Shop&nbsp;Pay</div>
      <span>Privacy · Terms · United States (USD $)</span>
    </div>
    <div class="footer-wordmark">SECOND SKIN</div>
  </footer>`;
}

function toggleMobile() {
  const m = document.getElementById("mobile-menu");
  m.classList.toggle("open");
  document.body.style.overflow = m.classList.contains("open") ? "hidden" : "";
}

/* ---------- Product card ---------- */
function productCardHTML(p) {
  return `
  <article class="product-card" onclick="location.href='product.html?id=${p.id}'">
    <div class="pc-media">
      ${p.tag ? `<span class="pc-tag">${p.tag}</span>` : ""}
      <img class="main" src="${p.img}" alt="${p.name}" loading="lazy">
      <img class="alt" src="${p.alt}" alt="${p.name} on body" loading="lazy">
      <div class="pc-quick" onclick="event.stopPropagation(); quickAdd('${p.id}')">Add to Bag</div>
    </div>
    <div class="pc-info">
      <div class="cat">${p.category}</div>
      <h3>${p.name}</h3>
      <div class="price">${formatPrice(p.price)}</div>
    </div>
  </article>`;
}

function quickAdd(id) {
  const p = getProduct(id);
  if (!p) return;
  const s = sizesFor(p);
  addToCart(id, s[Math.floor((s.length - 1) / 2)], 1); // sensible middle size; PDP offers full choice
}

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach(e => io.observe(e));
}

/* ---------- Mega feature hover swap ---------- */
function initMegaHover() {
  const feat = document.getElementById("mega-feature");
  if (!feat) return;
  document.querySelectorAll(".mega [data-feat]").forEach(a => {
    a.addEventListener("mouseenter", () => {
      const key = a.getAttribute("data-feat");
      feat.style.backgroundImage = `url('${MEGA_FEATURE_IMG[key] || MEGA_FEATURE_IMG.default}')`;
    });
  });
}

/* ---------- Header bg on scroll ---------- */
function initHeaderScroll() {
  const h = document.querySelector(".header");
  if (!h) return;
  const onScroll = () => { h.style.background = window.scrollY > 40 ? "rgba(244,241,236,0.96)" : "rgba(244,241,236,0.85)"; };
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Mount shared chrome ---------- */
function mountChrome() {
  const head = document.getElementById("site-header");
  const foot = document.getElementById("site-footer");
  if (head) head.innerHTML = headerHTML();
  if (foot) foot.innerHTML = footerHTML();
  document.body.insertAdjacentHTML("beforeend", drawerHTML());
  renderCartCount();
  renderDrawer();
  initMegaHover();
  initHeaderScroll();
  initReveal();
}

document.addEventListener("DOMContentLoaded", mountChrome);
