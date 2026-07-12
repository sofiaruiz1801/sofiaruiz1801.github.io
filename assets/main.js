/* ===========================================================
   Sofía Ruiz — Portfolio · main.js
   =========================================================== */

/* ---------- i18n dictionary (English overrides; HTML defaults to Spanish) ---------- */
const I18N = {
  en: {
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.credentials': 'Credentials',
    'nav.contact': 'Contact',

    'hero.status': 'Open to new opportunities',
    'hero.role': 'Fullstack Developer',
    'hero.roleAccent': 'Backend & AI',
    'hero.tagline': 'I build end-to-end solutions with Node.js, NestJS and TypeScript, and integrate artificial intelligence (RAG, chatbots, LLMs) to solve real-world problems.',
    'hero.location': 'Córdoba, Argentina',
    'hero.remote': 'Remote / International',
    'hero.langs': 'English C2 · Native Spanish',
    'hero.ctaProjects': 'View projects',
    'hero.ctaCv': 'Download CV',

    'about.title': 'About',
    'about.p1': 'Fullstack developer with a <strong>backend</strong> focus, oriented toward automation, integrations and <strong>applied artificial intelligence</strong> for digital products. My background in exact sciences and teaching gives me an analytical, structured approach to problem-solving.',
    'about.p2': 'I develop end-to-end solutions with Node.js, TypeScript, React and PostgreSQL, and work with AI tools like Claude, GPT and Gemini to accelerate development. Self-taught, resourceful and execution-oriented. Currently pursuing a Systems Engineering degree at UTN.',
    'about.fact1': 'hours of intensive training (Henry)',
    'about.fact2': 'backend/fullstack projects',
    'about.fact3': 'English level (Proficient)',

    'ai.badge': '✦ What sets me apart',
    'ai.title': 'AI-Powered Development',
    'ai.lead': "I don't just use AI to write code faster — I build AI features that ship to production.",
    'ai.c1.title': 'RAG over pgvector',
    'ai.c1.body': 'Retrieval-Augmented Generation system for context-aware answers grounded in proprietary data.',
    'ai.c2.title': 'Streaming chatbot',
    'ai.c2.body': 'Analysis chatbot with real-time responses via Server-Sent Events (SSE).',
    'ai.c3.title': 'AI-assisted development',
    'ai.c3.body': 'Heavy use of Claude, GPT, Gemini and Antigravity to accelerate development, debugging and iterative prototyping.',

    'skills.title': 'Tech stack',
    'skills.g1': 'AI & Innovation',
    'skills.g2': 'Backend & Development',
    'skills.g3': 'Databases',
    'skills.g4': 'Integrations & Automation',
    'skills.g5': 'Cloud & Tools',

    'exp.title': 'Experience',
    'exp.featured': 'Featured',
    'exp.present': 'Present',
    'exp.job1.role': 'Formal internship (Mar–Jun 2026), now an ongoing project collaborator',
    'exp.job1.lead': 'Led the end-to-end development of the scheduling & appointments module of a therapy-management platform (backend, web and mobile app), as part of the SoyHenry program internship.',
    'exp.job1.b1': 'Designed and fully implemented the <strong>appointments</strong> and <strong>schedule configuration</strong> modules: backend logic, REST APIs, integrations and frontend.',
    'exp.job1.b2': 'Advanced scheduling system with daily/weekly/monthly views, visual status management and <strong>configuration versioning</strong> for scheduled operational changes.',
    'exp.job1.b3': 'Contributed to the <strong>AI service</strong>: RAG over pgvector, a streaming analysis chatbot (SSE) and metrics dashboards.',
    'exp.job1.b4': 'Integrations: <strong>Google Calendar</strong> (OAuth, invitations, Meet), <strong>Resend</strong> (transactional emails), Nager.Date (holidays) and rigorous <strong>timezone handling (IANA)</strong>.',
    'exp.job1.b5': '<strong>TDD</strong> approach, with strong care for code quality and maintainability.',
    'exp.job2.role': 'Math, Physics & Chemistry Teacher · Academia La Piero',
    'exp.job2.lead': 'I design and facilitate learning experiences for university freshmen, applying active methodologies and educational technology (Moodle). Logical analysis, complex problem-solving and clear communication of technical concepts.',
    'exp.job3.role': 'Integrating Teacher · Choirs & Orchestras Program (Ministry of Education)',
    'exp.job3.lead': 'Operational, administrative and pedagogical coordination of musical ensembles across multiple institutions. A liaison role between schools, teaching staff and families.',

    'proj.title': 'Projects',
    'proj.p1': 'Backend services for an appointment scheduling and administrative management platform. Internal task automation with Cron Jobs and async processes, external integrations and production performance tuning. Henry bootcamp final project.',
    'proj.p2.title': 'E-commerce Platform',
    'proj.p2.desc': 'REST APIs for products, users, orders and checkout. Role-based authentication and authorization, transactional logic and scalable backend architecture.',
    'proj.p3': 'Backend of a collaborative platform, built as a team in TypeScript. API design and service architecture.',
    'proj.p4': 'Fullstack appointment-management app for an educational academy. Booking system and schedule administration.',
    'proj.more': 'See all repositories on GitHub →',

    'cred.title': 'Credentials',
    'cred.rec.title': 'Letter of Recommendation',
    'cred.rec.desc': 'DualTherapist — an unreserved recommendation from the project founders (ES / EN).',
    'cred.dt.title': 'Internship Certificate · DualTherapist',
    'cred.dt.desc': '90 days as a Full-Stack Developer. Web, mobile and AI service (RAG, chatbot, OAuth).',
    'cred.henry.title': 'Certificate · Henry Full Stack',
    'cred.henry.desc': '800 hours of Full Stack Web Development. JS, TypeScript, React, Node, SQL/NoSQL.',
    'cred.view': 'View document →',
    'cred.eduTitle': 'Education',
    'cred.chem': 'Chemical Engineering',
    'cred.trainingTitle': 'Additional training',
    'cred.inProgress': 'In progress',

    'contact.title': "Let's build something together",
    'contact.lead': "I'm open to backend, fullstack and AI-development roles — remote or in Córdoba. I reply fast.",

    'footer.built': 'Designed & developed by me',
  },
};

/* Store the original Spanish HTML so we can restore it when toggling back */
const originalES = {};
document.querySelectorAll('[data-i18n]').forEach((el) => {
  originalES[el.getAttribute('data-i18n')] = el.innerHTML;
});

function applyLang(lang) {
  const dict = lang === 'en' ? I18N.en : null;
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (lang === 'en' && dict[key] !== undefined) {
      el.innerHTML = dict[key];
    } else if (lang === 'es') {
      el.innerHTML = originalES[key];
    }
  });

  document.documentElement.lang = lang;

  // Swap CV link
  const cv = document.getElementById('cvLink');
  if (cv) cv.href = lang === 'en' ? 'assets/docs/cv-en.pdf' : 'assets/docs/cv-es.pdf';

  // Toggle button state
  document.querySelectorAll('.lang-toggle__opt').forEach((o) => {
    o.classList.toggle('active', o.dataset.lang === lang);
  });

  localStorage.setItem('lang', lang);
}

/* ---------- Language toggle ---------- */
const langToggle = document.getElementById('langToggle');
langToggle.addEventListener('click', () => {
  const current = localStorage.getItem('lang') || 'es';
  applyLang(current === 'es' ? 'en' : 'es');
});
applyLang(localStorage.getItem('lang') || 'es');

/* ---------- Nav: scrolled state + burger ---------- */
const nav = document.getElementById('nav');
const navLinks = document.getElementById('navLinks');
const burger = document.getElementById('navBurger');

window.addEventListener('scroll', () => {
  nav.classList.toggle('nav--scrolled', window.scrollY > 20);
  // progress bar
  const h = document.documentElement;
  const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
  document.getElementById('scrollProgress').style.width = pct + '%';
});

burger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach((a) =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

/* ---------- Scroll reveal ---------- */
const revealEls = document.querySelectorAll('.section, .tl-item, .proj-card, .ai-card, .cred-card');
revealEls.forEach((el) => el.classList.add('reveal'));
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealEls.forEach((el) => io.observe(el));

/* ---------- Active section highlight ---------- */
const sections = document.querySelectorAll('main section[id]');
const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        const id = e.target.id;
        document.querySelectorAll('.nav__links a').forEach((a) =>
          a.classList.toggle('active', a.getAttribute('href') === '#' + id)
        );
      }
    });
  },
  { rootMargin: '-45% 0px -50% 0px' }
);
sections.forEach((s) => spy.observe(s));

/* ---------- Footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();
