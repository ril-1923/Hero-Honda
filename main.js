// ===== Bootstrap JS =====
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js'

// ===== Shared Navbar Component =====
export function renderNavbar(activePage) {
  const pages = [
    { name: 'Home', href: '/' },
    { name: 'Models', href: '/models.html' },
    { name: 'Gallery', href: '/gallery.html' },
    { name: 'About', href: '/about.html' },
    { name: 'Contact', href: '/contact.html' },
  ]

  const links = pages
    .map(
      (p) => `
      <li class="nav-item">
        <a class="nav-link nav-link-custom ${activePage === p.name ? 'active' : ''}" href="${p.href}">${p.name}</a>
      </li>`
    )
    .join('')

  return `
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom" id="mainNav">
      <div class="container">
        <a class="navbar-brand navbar-brand-custom" href="/">
          <i class="bi bi-lightning-charge-fill"></i>
          HERO HONDA
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMain" aria-controls="navMain" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navMain">
          <ul class="navbar-nav">
            ${links}
          </ul>
        </div>
      </div>
    </nav>`
}

// ===== Shared Footer Component =====
export function renderFooter() {
  return `
    <footer class="footer">
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-4 col-md-6">
            <div class="footer-brand">
              <i class="bi bi-lightning-charge-fill"></i>
              HERO HONDA
            </div>
            <p class="footer-text">
              Crafting legendary motorcycles that combine cutting-edge technology with unmatched performance. Ride the legend.
            </p>
            <div class="footer-social">
              <a href="#" aria-label="Facebook"><i class="bi bi-facebook"></i></a>
              <a href="#" aria-label="Twitter"><i class="bi bi-twitter-x"></i></a>
              <a href="#" aria-label="Instagram"><i class="bi bi-instagram"></i></a>
              <a href="#" aria-label="YouTube"><i class="bi bi-youtube"></i></a>
            </div>
          </div>
          <div class="col-lg-2 col-md-6 col-6">
            <h6>Models</h6>
            <ul class="footer-links">
              <li><a href="/models.html">Splendor Pro</a></li>
              <li><a href="/models.html">CBZ Xtreme</a></li>
              <li><a href="/models.html">Karizma ZMR</a></li>
              <li><a href="/models.html">Hunk</a></li>
              <li><a href="/models.html">Passion Pro</a></li>
            </ul>
          </div>
          <div class="col-lg-2 col-md-6 col-6">
            <h6>Company</h6>
            <ul class="footer-links">
              <li><a href="/about.html">About Us</a></li>
              <li><a href="/gallery.html">Gallery</a></li>
              <li><a href="/contact.html">Contact</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Press</a></li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6">
            <h6>Newsletter</h6>
            <p class="footer-text">Get the latest updates on new models and exclusive offers.</p>
            <form class="d-flex gap-2" onsubmit="return false;">
              <input type="email" class="form-control-custom" placeholder="Your email" style="flex:1;" />
              <button class="btn-theme" style="white-space:nowrap;" onclick="this.textContent='Subscribed!';">Subscribe</button>
            </form>
          </div>
        </div>
        <div class="footer-bottom">
          &copy; 2026 Hero Honda Motors. All rights reserved. | Ride Safe. Ride Free.
        </div>
      </div>
    </footer>`
}

// ===== Scroll Animation Observer =====
export function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  )

  document.querySelectorAll(
    '.fade-in-up, .fade-in, .slide-in-left, .slide-in-right, .scale-in'
  ).forEach((el) => observer.observe(el))
}

// ===== Navbar Scroll Effect =====
export function initNavbarScroll() {
  const nav = document.getElementById('mainNav')
  if (!nav) return
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      nav.classList.add('scrolled')
    } else {
      nav.classList.remove('scrolled')
    }
  })
}

// ===== Counter Animation =====
export function initCounters() {
  const counters = document.querySelectorAll('[data-counter]')
  if (counters.length === 0) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target
          const target = parseInt(el.dataset.counter, 10)
          const suffix = el.dataset.suffix || ''
          const duration = 2000
          const start = performance.now()

          const animate = (now) => {
            const elapsed = now - start
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            const value = Math.floor(eased * target)
            el.textContent = value.toLocaleString() + suffix
            if (progress < 1) requestAnimationFrame(animate)
            else el.textContent = target.toLocaleString() + suffix
          }
          requestAnimationFrame(animate)
          observer.unobserve(el)
        }
      })
    },
    { threshold: 0.5 }
  )

  counters.forEach((c) => observer.observe(c))
}

// ===== Page Bootstrap =====
export function initPage(activePage) {
  document.body.insertAdjacentHTML('afterbegin', renderNavbar(activePage))
  document.body.insertAdjacentHTML('beforeend', renderFooter())
  initNavbarScroll()
  initScrollAnimations()
  initCounters()
}
