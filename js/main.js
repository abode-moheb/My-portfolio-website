const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (str) =>
  String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

function render() {
  document.title = `${DATA.name} — Portfolio`;
  $$("[data-bind]").forEach((el) => (el.textContent = DATA[el.dataset.bind]));
  $(".hero-name").innerHTML = `<span class="gradient-text">${esc(DATA.name)}</span>`;
  $("#avatar").src = DATA.avatar;
  $("#cvBtn").href = DATA.cvLink;

  $("#aboutTitle").textContent = DATA.about.title;
  $("#aboutText").innerHTML = DATA.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join("");
  const info = $("#aboutInfo");
  info.classList.add("card");
  info.innerHTML = DATA.about.info
    .map((i) => `<li><span>${esc(i.label)}</span><span>${esc(i.value)}</span></li>`)
    .join("");
  $("#stats").innerHTML = DATA.about.stats
    .map(
      (s, i) => `
      <div class="stat card reveal" style="transition-delay:${i * 0.1}s">
        <div class="stat-num gradient-text" data-count="${s.number}" data-suffix="${esc(s.suffix)}">0</div>
        <div class="stat-label">${esc(s.label)}</div>
      </div>`
    )
    .join("");

  $("#skillsGrid").innerHTML = DATA.skills
    .map(
      (group, gi) => `
      <div class="skill-card card reveal" style="transition-delay:${gi * 0.12}s">
        <h3>${esc(group.category)}</h3>
        ${group.items
          .map(
            (s) => `
          <div class="skill">
            <div class="skill-top"><span>${esc(s.name)}</span><span class="pct" data-pct="${s.level}">0%</span></div>
            <div class="bar"><div class="bar-fill" data-level="${s.level}"></div></div>
          </div>`
          )
          .join("")}
      </div>`
    )
    .join("");

  $("#projectsGrid").innerHTML = DATA.projects
    .map(
      (p, i) => `
      <article class="project card reveal" style="transition-delay:${(i % 3) * 0.1}s">
        <div class="project-img">
          <img src="${esc(p.image)}" alt="${esc(p.title)}" loading="lazy" />
          <span class="project-cat">${esc(p.category)}</span>
          <div class="project-overlay">
            ${p.live ? `<a href="${esc(p.live)}" target="_blank" rel="noopener">Live Demo ↗</a>` : ""}
            ${p.code ? `<a href="${esc(p.code)}" target="_blank" rel="noopener">Source Code</a>` : ""}
          </div>
        </div>
        <div class="project-body">
          <h3>${esc(p.title)}</h3>
          <p>${esc(p.description)}</p>
          <div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        </div>
      </article>`
    )
    .join("");

  $("#servicesGrid").innerHTML = DATA.services
    .map(
      (s, i) => `
      <div class="service card reveal" style="transition-delay:${(i % 3) * 0.1}s">
        <div class="service-icon">${s.icon}</div>
        <h3>${esc(s.title)}</h3>
        <p>${esc(s.description)}</p>
      </div>`
    )
    .join("");

  const c = DATA.contact;
  $("#contactText").textContent = c.text;
  $("#contactList").innerHTML = `
    <li><span class="ic">✉️</span><div><small>Email</small><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></div></li>
    <li><span class="ic">📞</span><div><small>Phone</small><a href="tel:${esc(c.phone.replace(/\s/g, ""))}">${esc(c.phone)}</a></div></li>
    <li><span class="ic">📍</span><div><small>Location</small><span>${esc(c.location)}</span></div></li>`;
  $("#socials").innerHTML = c.socials
    .map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)}</a>`)
    .join("");
}

function typeWriter() {
  const el = $("#typed");
  let r = 0, i = 0, deleting = false;
  (function tick() {
    const word = DATA.roles[r];
    el.textContent = word.slice(0, i);
    if (!deleting && i < word.length) i++;
    else if (deleting && i > 0) i--;
    else if (!deleting) { deleting = true; return setTimeout(tick, 1600); }
    else { deleting = false; r = (r + 1) % DATA.roles.length; }
    setTimeout(tick, deleting ? 45 : 90);
  })();
}

function animateCount(el, target, suffix = "", duration = 1600) {
  const start = performance.now();
  (function step(now) {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (p < 1) requestAnimationFrame(step);
  })(start);
}

function observe() {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        el.classList.add("visible");

        $$(".bar-fill", el).forEach((b) => (b.style.width = b.dataset.level + "%"));
        $$(".pct", el).forEach((p) => animateCount(p, +p.dataset.pct, "%"));
        $$("[data-count]", el).forEach((n) => animateCount(n, +n.dataset.count, n.dataset.suffix));

        io.unobserve(el);
      });
    },
    { threshold: 0.15 }
  );
  $$(".reveal").forEach((el) => io.observe(el));

  const links = $$(".nav-links a:not(.btn)");
  const navIO = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((l) => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  $$("section[id]").forEach((s) => navIO.observe(s));
}

function interactions() {
  const nav = $("#nav"), toTop = $("#toTop"), progress = $(".scroll-progress");
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    nav.classList.toggle("scrolled", y > 40);
    toTop.classList.toggle("show", y > 600);
    const h = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = (y / h) * 100 + "%";
  }, { passive: true });
  toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

  const burger = $("#burger"), menu = $("#navLinks");
  const setMenu = (open) => {
    burger.classList.toggle("open", open);
    menu.classList.toggle("open", open);
    document.body.classList.toggle("menu-open", open);
  };
  burger.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
  $$("a", menu).forEach((a) => a.addEventListener("click", () => setMenu(false)));

  const glow = $(".cursor-glow");
  window.addEventListener("mousemove", (e) => { glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px"; });

  if (matchMedia("(hover: hover) and (pointer: fine)").matches) $$(".project").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const r = card.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      card.style.transform = `perspective(900px) rotateY(${x * 8}deg) rotateX(${-y * 8}deg) translateY(-6px)`;
    });
    card.addEventListener("mouseleave", () => (card.style.transform = ""));
  });

  $("#contactForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const name = $("#fName").value, email = $("#fEmail").value, msg = $("#fMsg").value;
    const body = encodeURIComponent(`${msg}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${DATA.contact.email}?subject=${encodeURIComponent("New message from " + name)}&body=${body}`;
    $("#formNote").textContent = "Thanks! Your email app should open now ✨";
    e.target.reset();
  });
}

render();
typeWriter();
observe();
interactions();
