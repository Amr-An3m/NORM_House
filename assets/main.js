/**
 * ═══════════════════════════════════════════════════════════
 * NORM — Decision Architecture House
 * Main JavaScript Controller v3.5
 * ═══════════════════════════════════════════════════════════
 */

// ── Configuration & State ─────────────────────────────────────
const CONFIG = {
  defaultLang: 'ar',
  storageKey: 'lang',
  analyticsId: 'G-NORM2025',
  aos: {
    once: true,
    offset: 100,
    duration: 800,
    easing: 'ease-out-quad',
    delay: 100,
  },
  lenis: {
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    orientation: 'vertical',
  }
};

// ── Translation Management ────────────────────────────────────
let translations = {};

async function loadTranslations() {
  try {
    const response = await fetch('assets/translations.json');
    if (!response.ok) throw new Error('Network response was not ok');
    translations = await response.json();
    return true;
  } catch (error) {
    console.error('Failed to load translations:', error);
    return false;
  }
}

async function initLanguage() {
  const success = await loadTranslations();
  
  const savedLang = localStorage.getItem(CONFIG.storageKey);
  const browserLang = navigator.language.startsWith('en') ? 'en' : 'ar';
  const lang = savedLang || browserLang;
  
  applyLanguage(lang);
  
  // Reveal content after translations are ready
  document.documentElement.classList.remove('js-loading');
}

function applyLanguage(lang) {
  localStorage.setItem(CONFIG.storageKey, lang);
  
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.remove('lang-en', 'lang-ar');
  document.body.classList.add(`lang-${lang}`);

  // Update language toggle buttons
  document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
    const textEl = btn.querySelector('.lang-text');
    if (textEl) {
      textEl.textContent = lang === 'ar' ? 'EN' : 'AR';
    }
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang]?.[key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Update directional icons
  const iconSelectors = [
    '.btn-outline i',
    '.ir-arrow i',
    '.hero-actions .btn-outline i',
    '.meta-link i',
    '.insights-footer .btn-outline i',
    '.baseline-arrow-end i' // Methodology baseline arrow
  ];
  
  document.querySelectorAll(iconSelectors.join(',')).forEach(icon => {
    const isArrow = icon.classList.contains('fa-arrow-left') || icon.classList.contains('fa-arrow-right');
    if (isArrow) {
      icon.className = lang === 'ar' ? 'fas fa-arrow-left' : 'fas fa-arrow-right';
    }
  });

  if (window.AOS) window.AOS.refresh();

  // Redraw methodology arrows if already revealed (with delay for layout settlement)
  if (typeof drawBarArrows === 'function') {
    const section = document.querySelector('.diagram-section');
    const isRevealed = section && section.querySelector('.chart-bar.revealed');
    if (isRevealed) {
      setTimeout(drawBarArrows, 100);
    }
  }
}

// ── Navigation (Mobile Menu) ──────────────────────────────────
const UI = {
  navbar:       document.getElementById('navbar'),
  navMenu:      document.getElementById('navMenu'),
  mobileToggle: document.getElementById('mobileToggle'),
  mobileClose:  document.getElementById('mobileClose'),
  overlay:      document.getElementById('menuOverlay'),
  backBtn:      document.getElementById('backToTop'),
  progressBar:  document.getElementById('scrollProgress'),
  scrollInd:    document.getElementById('scrollIndicator'),
  loader:       document.getElementById('loaderScreen'),
  yearEl:       document.getElementById('currentYear'),
  methodTrack:  document.querySelector('.method-track'),
  methodDots:   document.querySelector('.method-dots'),
};

function toggleMenu(forceClose = false) {
  const isOpen = UI.navMenu.classList.contains('active');
  const shouldOpen = !isOpen && !forceClose;

  UI.navMenu.classList.toggle('active', shouldOpen);
  UI.overlay.classList.toggle('active', shouldOpen);
  UI.mobileToggle.setAttribute('aria-expanded', String(shouldOpen));

  const icon = UI.mobileToggle.querySelector('i');
  if (shouldOpen) {
    icon.classList.replace('fa-bars', 'fa-times');
    
    // 1. حساب ارتفاع النافبار لتفادي قفزة التصميم عند تغيير التموضع
    const navHeight = UI.navbar.offsetHeight;
    document.body.style.paddingTop = `${navHeight}px`;
    
    // 2. تثبيت النافبار كلياً في الشاشة
    UI.navbar.style.position = 'fixed';
    UI.navbar.style.width = '100%';
    
    // 3. إيقاف تمرير الخلفية
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  } else {
    icon.classList.replace('fa-times', 'fa-bars');
    
    // إرجاع كل شيء لحالته الطبيعية عند الإغلاق
    document.body.style.paddingTop = '';
    UI.navbar.style.position = '';
    UI.navbar.style.width = '';
    
    document.body.style.overflow = '';
    document.body.style.touchAction = '';
  }
}

// ── Touch/Swipe Gestures ─────────────────────────────────────
function initGestures() {
  let touchStartX = 0;
  let touchEndX = 0;

  UI.navMenu.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  UI.navMenu.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  function handleSwipe() {
    const lang = document.documentElement.lang;
    const swipeDistance = touchEndX - touchStartX;
    const threshold = 50;

    // RTL: Swipe right to close
    if (lang === 'ar' && swipeDistance > threshold) toggleMenu(true);
    // LTR: Swipe left to close
    if (lang === 'en' && swipeDistance < -threshold) toggleMenu(true);
  }
}

// ── Scroll & UI Updates ──────────────────────────────────────
let ticking = false;

function updateScrollUI() {
  try {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    if (UI.navbar) UI.navbar.classList.toggle('scrolled', scrollY > 60);
    if (UI.backBtn) UI.backBtn.classList.toggle('show', scrollY > 500);
    
    if (UI.progressBar && docHeight > 0) {
      UI.progressBar.style.width = `${(scrollY / docHeight) * 100}%`;
    }

    if (UI.scrollInd) {
      const hide = scrollY > 80;
      UI.scrollInd.style.opacity = hide ? '0' : '1';
      UI.scrollInd.style.pointerEvents = hide ? 'none' : 'auto';
    }
  } catch (err) {
    console.error('Scroll update error:', err);
  } finally {
    ticking = false;
  }
}

// ── Methodology Navigation (Mobile) ───────────────────────────
function initMethodologyDots() {
  if (!UI.methodTrack || !UI.methodDots) return;

  const steps = UI.methodTrack.querySelectorAll('.method-step');
  UI.methodDots.innerHTML = ''; // Clear

  steps.forEach((_, idx) => {
    const dot = document.createElement('div');
    dot.className = `dot ${idx === 0 ? 'active' : ''}`;
    dot.addEventListener('click', () => {
      const scrollPos = steps[idx].offsetLeft - UI.methodTrack.offsetLeft;
      UI.methodTrack.scrollTo({ left: scrollPos, behavior: 'smooth' });
    });
    UI.methodDots.appendChild(dot);
  });

  UI.methodTrack.addEventListener('scroll', () => {
    const scrollLeft = UI.methodTrack.scrollLeft;
    const width = UI.methodTrack.clientWidth;
    const activeIndex = Math.round(Math.abs(scrollLeft) / (width * 0.85)); // Adjusted for 88% width
    
    UI.methodDots.querySelectorAll('.dot').forEach((dot, idx) => {
      dot.classList.toggle('active', idx === activeIndex);
    });
  }, { passive: true });
}

// ── Initialization ──────────────────────────────────────────
function initAnalytics() {
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', CONFIG.analyticsId);
}

function init() {
  // 1. Language & Direction
  initLanguage();

  // 2. Event Listeners
  if (UI.mobileToggle) UI.mobileToggle.addEventListener('click', () => toggleMenu());
  if (UI.mobileClose) UI.mobileClose.addEventListener('click', () => toggleMenu(true));
  if (UI.overlay) UI.overlay.addEventListener('click', () => toggleMenu(true));

  document.querySelectorAll('.nav-links a, .menu-cta').forEach(link => {
    link.addEventListener('click', () => toggleMenu(true));
  });

  document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
    btn.addEventListener('click', () => {
      const currentLang = document.documentElement.lang;
      const newLang = currentLang === 'ar' ? 'en' : 'ar';
      applyLanguage(newLang);
      
      setTimeout(() => {
        if (window.innerWidth <= 1024) toggleMenu(true);
      }, 100);
    });
  });

  if (UI.backBtn) {
    UI.backBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollUI);
      ticking = true;
    }
  }, { passive: true });

  // 3. Reveal Animations (Intersection Observer)
  initRevealAnimations();

  initMethodologyDots();
  initGestures();
  
  // 4. Visual Luxury
  initParallax();

  // 5. Analytics
  initAnalytics();

  // 6. Methodology Diagram
  initBarDiagram();

  // 7. Cleanup & Loader
  if (UI.yearEl) UI.yearEl.textContent = new Date().getFullYear();
  
  window.addEventListener('load', () => {
    if (UI.loader) {
      setTimeout(() => UI.loader.classList.add('hidden'), 800);
    }
  });
}

/**
 * ══ Visual Luxury Effects ══════════════════════════════════
 */
function initParallax() {
  const geo = document.querySelector('.hero-geo');
  if (!geo) return;

  document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth - e.pageX * 2) / 100;
    const y = (window.innerHeight - e.pageY * 2) / 100;
    geo.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

/**
 * ══ Reveal Animations (AOS Replacement) ══════════════════════
 */
function initRevealAnimations() {
  const options = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-reveal-delay') || 0;
        setTimeout(() => {
          entry.target.classList.add('revealed');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
}

// ═══════════════════════════════════════════════════════════════
// BAR CHART DIAGRAM (Methodology Page)
// ═══════════════════════════════════════════════════════════════

function drawBarArrows() {
  const svg    = document.getElementById('chartArrows');
  const barsEl = document.getElementById('chartBars');
  if (!svg || !barsEl || window.innerWidth < 1024) return;

  svg.querySelectorAll('.chart-arr-path').forEach(p => p.remove());

  const rings = Array.from(barsEl.querySelectorAll('.bar-icon-ring'));
  if (rings.length < 2) return;

  const svgRect = svg.getBoundingClientRect();

  for (let i = 0; i < rings.length - 1; i++) {
    const r1 = rings[i].getBoundingClientRect();
    const r2 = rings[i + 1].getBoundingClientRect();
    const isRTL = document.documentElement.dir === 'rtl';

    // MATHEMATICAL Y CALCULATION:
    // To avoid arrows "rising" with the bars, we calculate their FINAL position 
    // based on the CSS --target-h variables.
    const getTargetH = (el) => {
      const bar = el.closest('.chart-bar');
      const style = window.getComputedStyle(bar);
      return parseInt(style.getPropertyValue('--target-h')) || 0;
    };

    const h1 = getTargetH(rings[i]);
    const h2 = getTargetH(rings[i+1]);

    const barsRect = barsEl.getBoundingClientRect();
    
    // X is measured from the current horizontal layout (which is stable)
    const x1 = (isRTL ? r1.left : r1.right) - svgRect.left;
    const x2 = (isRTL ? r2.right : r2.left) - svgRect.left;

    // Y is calculated from the bottom of the bars container minus the target height
    const y1 = (barsRect.bottom - h1) - svgRect.top;
    const y2 = (barsRect.bottom - h2) - svgRect.top;

    const midX = (x1 + x2) / 2;
    const cpY  = Math.min(y1, y2) - 40;

    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', `M${x1},${y1} C${midX},${cpY} ${midX},${cpY} ${x2},${y2}`);
    path.setAttribute('marker-end', 'url(#arr-tip)');
    path.classList.add('chart-arr-path');
    path.style.opacity = '0'; // Hidden initially
    
    // Setup for "drawing" animation
    svg.appendChild(path);
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;
  }

  // Staggered draw animation
  requestAnimationFrame(() => {
    svg.querySelectorAll('.chart-arr-path').forEach((p, i) => {
      setTimeout(() => {
        p.classList.add('visible');
        p.style.opacity = '0.85'; // Set opacity back
        p.style.strokeDashoffset = '0';
        p.style.transition = `stroke-dashoffset 1.5s ease, opacity 0.5s ease`;
      }, i * 400); // Slower stagger for premium feel
    });
  });
}

function initBarDiagram() {
  const section = document.querySelector('.diagram-section');
  if (!section) return;

  const bars = Array.from(section.querySelectorAll('.chart-bar'));
  if (bars.length === 0) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // Trigger only when a significant part of the section is visible
      if (entry.isIntersecting) {
        bars.forEach((bar, index) => {
          setTimeout(() => {
            bar.classList.add('revealed');
          }, index * 350); // Slower, more deliberate stagger
        });

        // Start drawing arrows only after bars have significantly grown
        setTimeout(drawBarArrows, (bars.length * 350) + 400);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 }); // Higher threshold as requested

  obs.observe(section);

  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1024) {
      // Small delay to ensure layout has settled
      clearTimeout(window.resizeTimer);
      window.resizeTimer = setTimeout(drawBarArrows, 200);
    } else {
      const svg = document.getElementById('chartArrows');
      if (svg) svg.querySelectorAll('.chart-arr-path').forEach(p => p.remove());
    }
  }, { passive: true });

  const glow = section.querySelector('.diagram-bg-glow');
  if (glow) {
    section.addEventListener('mousemove', (e) => {
      const r = section.getBoundingClientRect();
      const xP = (e.clientX - r.left) / r.width;
      const yP = (e.clientY - r.top)  / r.height;
      glow.style.transform = `translate(${(xP - 0.5) * 18}px, ${(yP - 0.5) * 10}px)`;
    }, { passive: true });
    section.addEventListener('mouseleave', () => {
      glow.style.transform = 'translate(0,0)';
    }, { passive: true });
  }
}

// ── Run ───────────────────────────────────────────────────────
init();