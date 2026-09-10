import"https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function b(a){return`
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
            ${[{name:"Home",href:"/"},{name:"Models",href:"/models.html"},{name:"Gallery",href:"/gallery.html"},{name:"About",href:"/about.html"},{name:"Contact",href:"/contact.html"}].map(i=>`
      <li class="nav-item">
        <a class="nav-link nav-link-custom ${a===i.name?"active":""}" href="${i.href}">${i.name}</a>
      </li>`).join("")}
          </ul>
        </div>
      </div>
    </nav>`}function v(){return`
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
    </footer>`}function g(){const a=new IntersectionObserver(o=>{o.forEach(r=>{r.isIntersecting&&r.target.classList.add("visible")})},{threshold:.1,rootMargin:"0px 0px -50px 0px"});document.querySelectorAll(".fade-in-up, .fade-in, .slide-in-left, .slide-in-right, .scale-in").forEach(o=>a.observe(o))}function p(){const a=document.getElementById("mainNav");a&&window.addEventListener("scroll",()=>{window.scrollY>50?a.classList.add("scrolled"):a.classList.remove("scrolled")})}function y(){const a=document.querySelectorAll("[data-counter]");if(a.length===0)return;const o=new IntersectionObserver(r=>{r.forEach(i=>{if(i.isIntersecting){const e=i.target,t=parseInt(e.dataset.counter,10),s=e.dataset.suffix||"",c=2e3,d=performance.now(),l=f=>{const u=f-d,n=Math.min(u/c,1),m=1-Math.pow(1-n,3),h=Math.floor(m*t);e.textContent=h.toLocaleString()+s,n<1?requestAnimationFrame(l):e.textContent=t.toLocaleString()+s};requestAnimationFrame(l),o.unobserve(e)}})},{threshold:.5});a.forEach(r=>o.observe(r))}function w(a){document.body.insertAdjacentHTML("afterbegin",b(a)),document.body.insertAdjacentHTML("beforeend",v()),p(),g(),y()}export{w as i};
