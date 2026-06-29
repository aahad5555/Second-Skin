/* =========================================================
   SECOND SKIN — Cart (localStorage)
   ========================================================= */

const CART_KEY = "secondskin_cart";
const FREE_SHIP_THRESHOLD = 0; // shipping always free; kept for messaging logic

function getCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  renderCartCount();
  renderDrawer();
}
function cartKey(id, size) { return id + "::" + size; }

function addToCart(id, size, qty = 1) {
  const product = getProduct(id);
  if (!product) return;
  const cart = getCart();
  const key = cartKey(id, size);
  const existing = cart.find(i => i.key === key);
  if (existing) existing.qty += qty;
  else cart.push({ key, id, size, qty, name: product.name, price: product.price, img: product.img, category: product.category });
  saveCart(cart);
  openDrawer();
  showToast(`${product.name} (${size}) added to your bag`);
}

function updateQty(key, delta) {
  const cart = getCart();
  const item = cart.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  const next = item.qty <= 0 ? cart.filter(i => i.key !== key) : cart;
  saveCart(next);
}
function removeItem(key) { saveCart(getCart().filter(i => i.key !== key)); }
function cartCount() { return getCart().reduce((n, i) => n + i.qty, 0); }
function cartSubtotal() { return getCart().reduce((s, i) => s + i.price * i.qty, 0); }

function renderCartCount() {
  document.querySelectorAll(".cart-count").forEach(el => {
    const n = cartCount();
    el.textContent = n;
    el.style.display = n > 0 ? "inline-flex" : "none";
  });
}

/* ---------- Drawer ---------- */
function openDrawer() {
  document.getElementById("drawer")?.classList.add("open");
  document.getElementById("drawer-overlay")?.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeDrawer() {
  document.getElementById("drawer")?.classList.remove("open");
  document.getElementById("drawer-overlay")?.classList.remove("open");
  document.body.style.overflow = "";
}

function renderDrawer() {
  const wrap = document.getElementById("drawer-items");
  const foot = document.getElementById("drawer-foot");
  if (!wrap) return;
  const cart = getCart();
  if (cart.length === 0) {
    wrap.innerHTML = `<div class="drawer-empty">
        <p style="margin-bottom:18px;">Your bag is empty.</p>
        <a href="shop.html" class="btn btn-outline" onclick="closeDrawer()">Shop Jackets</a>
      </div>`;
    if (foot) foot.style.display = "none";
    return;
  }
  if (foot) foot.style.display = "block";
  wrap.innerHTML = cart.map(i => `
    <div class="drawer-item">
      <img src="${i.img}" alt="${i.name}">
      <div>
        <h4>${i.name}</h4>
        <div class="meta">${i.category} · Size ${i.size}</div>
        <div class="meta">${formatPrice(i.price)}</div>
        <div class="qty">
          <button onclick="updateQty('${i.key}',-1)" aria-label="Decrease">−</button>
          <span>${i.qty}</span>
          <button onclick="updateQty('${i.key}',1)" aria-label="Increase">+</button>
        </div>
      </div>
      <button class="di-remove" onclick="removeItem('${i.key}')">Remove</button>
    </div>`).join("");

  const sub = cartSubtotal();
  document.getElementById("drawer-subtotal").textContent = formatPrice(sub);
}

function checkout() {
  if (getCart().length === 0) return;
  // Launch hook: replace with Shopify / Stripe Checkout session.
  showToast("Connect Stripe or Shopify Checkout to complete payment →");
}

/* ---------- Toast ---------- */
let toastTimer;
function showToast(msg) {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast"; t.className = "toast";
    document.body.appendChild(t);
  }
  t.innerHTML = `<span>✓</span> ${msg}`;
  t.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 3200);
}

document.addEventListener("DOMContentLoaded", () => { renderCartCount(); renderDrawer(); });
