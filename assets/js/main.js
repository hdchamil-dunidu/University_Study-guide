/* ── MAIN.JS ── */

// ── NAV TOGGLE (mobile) ──────────────────────────────────────
const toggle = document.querySelector('.nav-toggle');
const links  = document.querySelector('.nav-links');
if (toggle && links) {
  toggle.addEventListener('click', () => links.classList.toggle('open'));
  // Close on link click
  links.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => links.classList.remove('open'))
  );
}

// ── FILTERS + RESOURCE RENDER ────────────────────────────────
let activeModule = 'all';
let activeType   = 'all';

function renderResources() {
  const grid  = document.getElementById('resources-grid');
  const empty = document.getElementById('empty-state');
  if (!grid) return;

  const filtered = RESOURCES.filter(r => {
    const matchModule = activeModule === 'all' || r.module === activeModule;
    const matchType   = activeType   === 'all' || r.type   === activeType;
    return matchModule && matchType;
  });

  if (filtered.length === 0) {
    grid.innerHTML = '';
    if (empty) empty.style.display = 'block';
    return;
  }
  if (empty) empty.style.display = 'none';

  const typeLabel = { mock: 'Mock Exam', ref: 'Reference Sheet', notes: 'Notes' };

  grid.innerHTML = filtered.map(r => `
    <div class="resource-card" data-module="${r.module}" data-type="${r.type}">
      <div class="rc-head">
        <span class="rc-module">${r.module}</span>
        <span class="rc-type ${r.type}">${typeLabel[r.type] || r.type}</span>
      </div>
      <h3>${r.title}</h3>
      <p>${r.desc}</p>
      <div class="rc-actions">
        ${r.openUrl ? `<a href="${r.openUrl}" target="_blank" rel="noopener" class="rc-btn rc-btn-open">Open →</a>` : ''}
        ${r.dlUrl   ? `<a href="${r.dlUrl}"   download               class="rc-btn rc-btn-dl">⬇ Download</a>` : ''}
      </div>
    </div>
  `).join('');
}

// Wire up filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const filterType = btn.dataset.filter;
    const value      = btn.dataset.value;

    // Update active class within same group
    document.querySelectorAll(`.filter-btn[data-filter="${filterType}"]`)
      .forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    if (filterType === 'module') activeModule = value;
    if (filterType === 'type')   activeType   = value;

    renderResources();
  });
});

// Module cards in Y1S2 → filter + scroll to resources
document.querySelectorAll('.module-card').forEach(card => {
  card.addEventListener('click', e => {
    e.preventDefault();
    const mod = card.dataset.module;
    // Set filter
    document.querySelectorAll('.filter-btn[data-filter="module"]')
      .forEach(b => b.classList.remove('active'));
    const btn = document.querySelector(`.filter-btn[data-filter="module"][data-value="${mod}"]`);
    if (btn) btn.classList.add('active');
    activeModule = mod;
    renderResources();
    document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' });
  });
});

// Initial render
renderResources();

// ── FEEDBACK FORM ────────────────────────────────────────────
const form    = document.getElementById('feedback-form');
const success = document.getElementById('form-success');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    // Here you can hook up a real backend, Formspree, EmailJS, etc.
    // For now just show success message.
    form.reset();
    if (success) success.style.display = 'block';
    setTimeout(() => { if (success) success.style.display = 'none'; }, 4000);
  });
}

// ── FAKE ONLINE COUNT (cosmetic) ────────────────────────────
const onlineEl = document.getElementById('online-count');
if (onlineEl) {
  const base = Math.floor(Math.random() * 4) + 1;
  onlineEl.textContent = base;
}

// ── ACTIVE NAV LINK ON SCROLL ────────────────────────────────
const sections = document.querySelectorAll('section[id], div[id]');
const navAs    = document.querySelectorAll('.nav-links a[href^="#"]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAs.forEach(a => {
        a.style.color = a.getAttribute('href') === `#${entry.target.id}`
          ? 'var(--accent)' : '';
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => observer.observe(s));
