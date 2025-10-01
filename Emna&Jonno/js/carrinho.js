const products = [
  { id: 1, name: 'Anel Luxo', price: 1200, img: 'https://via.placeholder.com/250x150?text=Anel+Luxo' },
  { id: 2, name: 'Pulseira Prata', price: 800, img: 'https://via.placeholder.com/250x150?text=Pulseira+Prata' },
  { id: 3, name: 'Relógio Premium', price: 2500, img: 'https://via.placeholder.com/250x150?text=Rel%C3%B3gio+Premium' }
];

const prodContainer = document.getElementById('products');
const cartIcon = document.getElementById('cart-icon');
const cartCount = document.getElementById('cart-count');
const cartItemsEl = document.getElementById('cart-items');
const cartTotalEl = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function formatPrice(v) {
  return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function renderProducts() {
  prodContainer.innerHTML = '';
  products.forEach(p => {
    const div = document.createElement('div');
    div.className = 'product';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p>${formatPrice(p.price)}</p>
      <button data-id="${p.id}">Adicionar ao Carrinho</button>
    `;
    prodContainer.appendChild(div);
  });
}

function updateCartUI() {
  cartCount.textContent = cart.reduce((sum, i) => sum + i.quantity, 0);
  cartItemsEl.innerHTML = '';
  if (!cart.length) {
    cartItemsEl.innerHTML = '<p style="text-align:center;color:#999;margin-top:1rem;">Carrinho vazio.</p>';
    cartTotalEl.textContent = 'Total: R$ 0,00';
    return;
  }
  let total = 0;
  cart.forEach(item => {
    const prod = products.find(p => p.id === item.id);
    const itemTotal = prod.price * item.quantity;
    total += itemTotal;

    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img src="${prod.img}" alt="${prod.name}">
      <div class="cart-item-name">${prod.name}</div>
      <div class="cart-item-controls">
        <button class="qty-btn" data-action="decrease" data-id="${prod.id}">−</button>
        <div class="qty-display">${item.quantity}</div>
        <button class="qty-btn" data-action="increase" data-id="${prod.id}">+</button>
        <div style="min-width:60px;font-weight:600;text-align:right;">${formatPrice(itemTotal)}</div>
        <button class="remove-btn" data-id="${prod.id}" title="Remover">×</button>
      </div>
    `;
    cartItemsEl.appendChild(div);
  });
  cartTotalEl.textContent = `Total: ${formatPrice(total)}`;
}

prodContainer.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    const id = parseInt(e.target.dataset.id);
    const idx = cart.findIndex(i => i.id === id);
    if (idx > -1) cart[idx].quantity++;
    else cart.push({ id, quantity: 1 });
    saveCart(); renderCartUI();
  }
});

cartItemsEl.addEventListener('click', e => {
  const id = parseInt(e.target.dataset.id);
  if (e.target.classList.contains('remove-btn')) {
    cart = cart.filter(i => i.id !== id);
  } else if (e.target.dataset.action === 'increase') {
    cart.find(i => i.id === id).quantity++;
  } else if (e.target.dataset.action === 'decrease') {
    const item = cart.find(i => i.id === id);
    item.quantity--;
    if (item.quantity <= 0) cart = cart.filter(i => i.id !== id);
  }
  saveCart(); renderCartUI();
});

checkoutBtn.addEventListener('click', () => {
  alert('Compra finalizada! Valor: ' + cartTotalEl.textContent);
  cart = []; saveCart(); renderCartUI();
});

function renderCartUI() {
  renderProducts(); updateCartUI();
}

cartIcon.addEventListener('click', () => {
  document.getElementById('cart').scrollIntoView({ behavior: 'smooth' });
});

renderCartUI();
