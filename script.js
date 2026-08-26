/* ===================== DATA ===================== */
const SKILLS = [
  { name: "HTML", cat: "frontend", desc: "Semantic, accessible page structure." },
  { name: "CSS", cat: "frontend", desc: "Layout, animation and responsive design." },
  { name: "JavaScript", cat: "frontend", desc: "Interactive, dynamic client-side logic." },
  { name: "React", cat: "frontend", desc: "Component-based UI development." },
  { name: "Bootstrap", cat: "frontend", desc: "Rapid, responsive UI prototyping." },
  { name: "Tailwind CSS", cat: "frontend", desc: "Utility-first styling workflow." },
  { name: "Python", cat: "programming", desc: "My primary language for scripting & ML." },
  { name: "Java", cat: "programming", desc: "Object-oriented programming fundamentals." },
  { name: "C", cat: "programming", desc: "Core programming & data structures." },
  { name: "SQL", cat: "programming", desc: "Relational data querying & management." },
  { name: "Django", cat: "backend", desc: "Full-featured Python web framework." },
  { name: "Flask", cat: "backend", desc: "Lightweight Python web apps & APIs." },
  { name: "Node.js", cat: "backend", desc: "JavaScript on the server side." },
  { name: "Pandas", cat: "ml", desc: "Data wrangling & analysis in Python." },
  { name: "NumPy", cat: "ml", desc: "Numerical computing foundation." },
  { name: "Scikit-learn", cat: "ml", desc: "Classical machine learning models." },
  { name: "NLTK", cat: "ml", desc: "Natural language processing toolkit." },
  { name: "Matplotlib", cat: "ml", desc: "Data visualization & plotting." },
  { name: "Git", cat: "tools", desc: "Version control for every project." },
  { name: "GitHub", cat: "tools", desc: "Hosting, collaboration & portfolios." },
  { name: "VS Code", cat: "tools", desc: "My daily development environment." },
];

const PROJECTS = [
  {
    num: "01", key: "CINEMIND", title: "CineMind", sub: "Movie Recommendation System",
    desc: "A movie recommendation web application using movie datasets and the TMDB API to help users discover movies.",
    tags: ["Python", "Flask", "HTML", "CSS", "JavaScript", "TMDB API"],
    problem: "Finding a movie worth watching means sifting through endless catalogues with little personalised guidance.",
    solution: "A Flask web app that recommends similar movies based on user selection, pulling live posters, ratings and genres from the TMDB API.",
    features: ["Content-based recommendation logic", "Live movie metadata via TMDB API", "Clean, searchable interface"],
    contribution: "Designed and built the full application — from the recommendation logic to the Flask backend and frontend UI.",
    github: "https://github.com/TarunSonaji/CineMind-Movie-Recommendation-System", demo: "https://cinemind-movie-recommendation-system-1.onrender.com"
  },
  {
    num: "02", key: "TRUTHGUARD", title: "TruthGuard", sub: "Fake News Detection System",
    desc: "A machine-learning-based web application that analyzes news content and predicts whether it is potentially fake or genuine using NLP and machine-learning techniques.",
    tags: ["Python", "Flask", "Scikit-learn", "NLP", "TF-IDF"],
    problem: "Misinformation spreads quickly, and readers often lack a quick way to sanity-check an article.",
    solution: "An NLP pipeline that vectorizes article text with TF-IDF and classifies it as real or fake using a trained ML model, served through a simple Flask interface.",
    features: ["TF-IDF text vectorization", "Trained classification model", "Simple paste-and-check interface"],
    contribution: "Built the preprocessing pipeline, trained and evaluated the model, and wrapped it in a Flask app.",
    github: "https://github.com/TarunSonaji/TruthGuard-AI-powerded-Fake-News-Detection", demo: "https://truthguard-ai-powered-fake-news-detection.onrender.com"
  },
  {
    num: "03", key: "AURORA", title: "Aurora Weather", sub: "Weather Application",
    desc: "A visually immersive weather application providing real-time weather information with dynamic weather-based visuals and responsive design.",
    tags: ["HTML", "CSS", "JavaScript", "OpenWeatherMap API"],
    problem: "Weather apps are often functional but visually flat, with no sense of the actual conditions.",
    solution: "A responsive weather app that pulls live data from the OpenWeatherMap API and adapts its visuals to current conditions.",
    features: ["Real-time weather data", "Dynamic condition-based visuals", "Fully responsive layout"],
    contribution: "Built the interface, API integration and responsive behaviour end-to-end.",
    github: "#", demo: "#"
  },
  {
    num: "04", key: "SENTIMENT", title: "Review Sentiment Analysis", sub: "Feature-Level Rating Aggregation",
    desc: "A feature-level sentiment analysis system that analyzes customer reviews and generates ratings for individual product features.",
    tags: ["Python", "Django", "MySQL", "NLTK VADER", "Pandas", "Matplotlib"],
    problem: "Overall star ratings hide how customers feel about specific product features.",
    solution: "A Django application that runs VADER sentiment scoring on review text and aggregates results per feature, visualised with Matplotlib.",
    features: ["Feature-level sentiment scoring", "MySQL-backed review storage", "Aggregated rating visualisations"],
    contribution: "Implemented the sentiment pipeline, database schema and the Django views for displaying results.",
    github: "#", demo: "#"
  },
  {
    num: "05", key: "GENDER", title: "Customer Gender Prediction", sub: "Online Shopping Behavior",
    desc: "An academic machine-learning project focused on predicting customer gender based on online shopping behavior.",
    tags: ["Python", "Machine Learning", "Data Analysis"],
    problem: "Understanding customer segments from behavioural data alone is a common retail analytics challenge.",
    solution: "A classification model trained on shopping-behaviour data to predict customer gender, evaluated with standard ML metrics.",
    features: ["Data cleaning & feature analysis", "Classification model training", "Model evaluation & comparison"],
    contribution: "Handled data preparation, model selection and evaluation as an academic ML exercise.",
    github: "#", demo: "#"
  }
];

/* ===================== THEME ===================== */
const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');
if (savedTheme) root.setAttribute('data-theme', savedTheme);
themeToggle.setAttribute('aria-pressed', savedTheme === 'light');

themeToggle.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
  const next = current === 'light' ? 'dark' : 'light';
  if (next === 'dark') root.removeAttribute('data-theme');
  else root.setAttribute('data-theme', 'light');
  localStorage.setItem('theme', next);
  themeToggle.setAttribute('aria-pressed', next === 'light');
});

/* ===================== NAV ===================== */
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
navToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
navMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navMenu.classList.remove('open');
  navToggle.setAttribute('aria-expanded', false);
}));

const navEl = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  navEl.classList.toggle('compact', window.scrollY > 40);
}, { passive: true });

const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.nav-link');
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.toggle('active', l.dataset.section === entry.target.id));
    }
  });
}, { rootMargin: '-40% 0px -50% 0px' });
sections.forEach(s => sectionObserver.observe(s));

/* ===================== SCROLL REVEAL ===================== */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

/* ===================== HERO ROLE ROTATOR ===================== */
const roles = ["Frontend Developer", "Python Developer", "ML Enthusiast", "AI Explorer"];
const rotatorEl = document.getElementById('roleRotator');
let roleIndex = 0, charIndex = roles[0].length, deleting = false;

function tickRotator() {
  const word = roles[roleIndex];
  if (!deleting) {
    charIndex++;
    if (charIndex > word.length) { deleting = true; setTimeout(tickRotator, 1400); return; }
  } else {
    charIndex--;
    if (charIndex < 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; charIndex = 0; }
  }
  rotatorEl.textContent = roles[roleIndex].slice(0, charIndex);
  setTimeout(tickRotator, deleting ? 45 : 85);
}
setTimeout(tickRotator, 1200);

/* ===================== COUNTERS ===================== */
const counters = document.querySelectorAll('.stat-num[data-count]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    const target = parseInt(el.dataset.count, 10);
    let current = 0;
    const step = Math.max(1, Math.round(target / 30));
    const iv = setInterval(() => {
      current += step;
      if (current >= target) { current = target; clearInterval(iv); }
      el.textContent = current;
    }, 40);
    counterObserver.unobserve(el);
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

/* ===================== SKILLS RENDER ===================== */
const skillsCloud = document.getElementById('skillsCloud');
SKILLS.forEach(s => {
  const chip = document.createElement('div');
  chip.className = 'skill-chip';
  chip.dataset.cat = s.cat;
  chip.innerHTML = `${s.name}<span class="skill-desc">${s.desc}</span>`;
  skillsCloud.appendChild(chip);
});
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const cat = btn.dataset.cat;
    document.querySelectorAll('.skill-chip').forEach(chip => {
      chip.classList.toggle('hide', cat !== 'all' && chip.dataset.cat !== cat);
    });
  });
});

/* ===================== PROJECTS RENDER ===================== */
const projectList = document.getElementById('projectList');
PROJECTS.forEach((p, i) => {
  const panel = document.createElement('article');
  panel.className = 'project-panel';
  panel.tabIndex = 0;
  panel.setAttribute('role', 'button');
  panel.setAttribute('aria-label', `View details for ${p.title}`);
  panel.innerHTML = `
    <div class="project-visual"><span class="p-num">${p.num}</span></div>
    <div class="project-info">
      <span class="project-index">${p.num} — ${p.key}</span>
      <h3>${p.title}</h3>
      <p class="project-sub">${p.sub}</p>
      <p class="project-desc">${p.desc}</p>
      <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="project-cta"><span class="view-link">View Project →</span></div>
    </div>
  `;
  panel.addEventListener('mousemove', (e) => {
    const r = panel.getBoundingClientRect();
    panel.style.setProperty('--mx', `${e.clientX - r.left}px`);
    panel.style.setProperty('--my', `${e.clientY - r.top}px`);
  });
  const open = () => openModal(p);
  panel.addEventListener('click', open);
  panel.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  projectList.appendChild(panel);
});

/* ===================== MODAL ===================== */
const modalOverlay = document.getElementById('modalOverlay');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
let lastFocused = null;

function openModal(p) {
  lastFocused = document.activeElement;
  modalBody.innerHTML = `
    <h3 id="modalTitle">${p.title}</h3>
    <p class="m-sub">${p.sub}</p>
    <h4>Problem</h4><p>${p.problem}</p>
    <h4>Solution</h4><p>${p.solution}</p>
    <h4>Key Features</h4><ul>${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
    <h4>My Contribution</h4><p>${p.contribution}</p>
    <h4>Technologies</h4>
    <div class="project-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    <div class="m-links">
      <a class="btn btn-outline btn-small" href="${p.github}" target="_blank" rel="noopener">GitHub</a>
      <a class="btn btn-primary btn-small" href="${p.demo}" target="_blank" rel="noopener">Live Demo</a>
    </div>
  `;
  modalOverlay.classList.add('open');
  modalClose.focus();
  document.body.style.overflow = 'hidden';
}
function closeModal() {
  modalOverlay.classList.remove('open');
  document.body.style.overflow = '';
  if (lastFocused) lastFocused.focus();
}
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modalOverlay.classList.contains('open')) closeModal(); });

/* ===================== EXPERIENCE TIMELINE FILL ===================== */
const timelineFill = document.querySelector('.timeline-fill');
const timelineEl = document.getElementById('timeline');
if (timelineFill && timelineEl) {
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) { timelineFill.style.height = '100%'; timelineObserver.disconnect(); }
    });
  }, { threshold: 0.3 });
  timelineObserver.observe(timelineEl);
}

/* ===================== CONTACT FORM (client-side only) ===================== */
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;
  const name = document.getElementById('cf-name');
  const email = document.getElementById('cf-email');
  const message = document.getElementById('cf-message');
  const errName = document.getElementById('err-name');
  const errEmail = document.getElementById('err-email');
  const errMessage = document.getElementById('err-message');
  errName.textContent = ''; errEmail.textContent = ''; errMessage.textContent = '';

  if (!name.value.trim()) { errName.textContent = 'Please enter your name.'; valid = false; }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) { errEmail.textContent = 'Please enter a valid email.'; valid = false; }
  if (!message.value.trim() || message.value.trim().length < 10) { errMessage.textContent = 'Message should be at least 10 characters.'; valid = false; }

  if (!valid) return;

  status.textContent = 'Thanks — your message has been noted. (Connect this form to an email service or backend to receive messages.)';
  form.reset();
});

/* ===================== MAGNETIC BUTTONS ===================== */
document.querySelectorAll('.magnetic').forEach(btn => {
  btn.addEventListener('mousemove', (e) => {
    const r = btn.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    btn.style.transform = `translate(${x * 0.18}px, ${y * 0.3}px)`;
  });
  btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
});

/* ===================== CURSOR GLOW ===================== */
const cursorGlow = document.querySelector('.cursor-glow');
let glowActive = false;
window.addEventListener('mousemove', (e) => {
  cursorGlow.style.left = `${e.clientX}px`;
  cursorGlow.style.top = `${e.clientY}px`;
  if (!glowActive) { cursorGlow.classList.add('active'); glowActive = true; }
});
window.addEventListener('mouseleave', () => cursorGlow.classList.remove('active'));

/* ===================== HERO PARTICLE CANVAS ===================== */
(function initParticles() {
  const canvas = document.getElementById('heroCanvas');
  const ctx = canvas.getContext('2d');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let particles = [];
  let w, h;

  function resize() {
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }
  function createParticles() {
    const count = Math.min(60, Math.floor((w * h) / 22000));
    particles = Array.from({ length: count }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.6,
    }));
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = 'rgba(87,232,200,0.55)';
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    });
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 110) {
          ctx.strokeStyle = `rgba(139,124,246,${0.12 * (1 - d / 110)})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
    }
    if (!reduceMotion) requestAnimationFrame(draw);
  }

  resize(); createParticles();
  if (!reduceMotion) draw(); else draw();
  window.addEventListener('resize', () => { resize(); createParticles(); });
})();

/* ===================== FOOTER YEAR ===================== */
document.getElementById('year').textContent = new Date().getFullYear();
