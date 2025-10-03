// Navbar shadow on scroll
const navbar = document.getElementById('navbar');
const onScroll = () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};
window.addEventListener('scroll', onScroll);
onScroll(); // initialize

// Smooth scrolling for all [data-scroll] buttons/links
const smoothScroll = (selector) => {
  const el = document.querySelector(selector);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

document.querySelectorAll('[data-scroll]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const target = e.currentTarget.getAttribute('data-scroll');
    smoothScroll(target);
    // close mobile menu if open
    if (mobileMenu.classList.contains('open')) toggleMobile(false);
  });
});

// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');

function toggleMobile(force) {
  const open = typeof force === 'boolean' ? force : !mobileMenu.classList.contains('open');
  mobileMenu.style.display = open ? 'block' : 'none';
  mobileMenu.classList.toggle('open', open);
  mobileToggle.setAttribute('aria-expanded', String(open));
  // swap icon (burger <-> close)
  mobileToggle.innerHTML = open
    ? `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
         <path d="M6 18L18 6M6 6l12 12"/>
       </svg>`
    : `<svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
         stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
         <path d="M4 6h16M4 12h16M4 18h16"/>
       </svg>`;
}
mobileToggle.addEventListener('click', () => toggleMobile());

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
