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
  analyticsId: 'G-XXXXXXXXXX',
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

// ── Translation Dictionary ──────────────────────────────────
const translations = {
  ar: {
    nav_about:        'من نحن',
    nav_methodology:  'المنهجية',
    nav_insights:     'الرؤى',
    nav_contact:      'التواصل',
    cta_start:        'ابدأ التأهيل',

    hero_label:  'دار هندسة القرار',
    hero_title:  'نصمّم أنظمة قرار للمشاريع والاستثمارات المعقدة.',
    hero_sub:    'نضبط القرار قبل أن يتحول إلى التزام تنفيذي.',
    hero_text:   'مهمتنا ليست تقديم استشارة تنفيذية، بل هندسة المنطق الذي سيحكم قراراتك القادمة. نحن نتدخل حيث يتوقف المستشار المالي عن العمل وتبدأ المخاطر التشغيلية الحقيقية.',
    hero_cta:    'اطّلع على المنهجية',
    scroll_down: 'تمرير',

    gap_label:    'فجوة القرار',
    gap_title:    'أين يحدث الخلل؟',
    gap_p1_title: 'قرارات غير منضبطة',
    gap_p1_text:  'غياب المنهجية الضابطة يفتح الباب أمام القرارات العاطفية والمتسرعة.',
    gap_p2_title: 'فجوة التنفيذ',
    gap_p2_text:  'الرؤية الاستراتيجية تتعثر حين تغيب المنظومة المؤسسية الواضحة.',
    gap_p3_title: 'تآكل الأصول',
    gap_p3_text:  'الالتزام المالي المبكر دون هندسة منطق الأعمال يكلف الكثير.',

    methodology_label: 'مسار المنظومة',
    methodology_title: 'نحو قرارات مؤسسية منضبطة',
    methodology_desc:  'ثلاث مراحل مترابطة لتحويل الرؤية إلى واقع مستدام.',
    method_1_title:    'تصميم أطر القرار',
    method_1_desc:     'نقوم بتصميم "منطق" العمل ونموذج الاستثمار قبل الالتزام المالي، لنضمن لك نموذجاً قادراً على الصمود والنمو.',
    method_2_title:    'قيادة المنطق',
    method_2_desc:     'نضع بوابات القرار (Decision Gates) التي تحمي الملاك وتضمن اتساق كل خطوة تنفيذية مع الأهداف الكبرى.',
    method_3_title:    'التمكين المؤسسي',
    method_3_desc:     'نبني الأنظمة والمنصات التي تضمن بقاء المعرفة والقدرة داخل كيانك، لضمان استدامة الأثر.',

    about_label: 'من نحن',
    about_title: 'من نحن (NORM)',
    about_desc:  'نحن نتموضع كعقل مؤسسي ضابط (Governing Mind)؛ نمنح قيادتك "المسطرة والمعيار" ليكون كل قرار مدعوماً ببصمة فكرية بشرية رفيعة، ومعززاً بأدوات تقنية متطورة، ومستنداً لخبرات ميدانية ذاقت تحديات الواقع قبل أن تصيغ نظريات النجاح.',
    about_cta:   'عن NORM',
    card_eyebrow: 'دار هندسة القرار · Decision Architecture',
    card_caption: 'العقل المؤسسي الضابط',
    card_feat_1:  'الذكاء الاستراتيجي',
    card_feat_2:  'هندسة القرار',
    card_feat_3:  'استدامة الأثر',

    insights_label:  'رؤى مختارة',
    insights_title:  'أحدث الأوراق البيضاء',
    insight_1_cat:   'الاستراتيجية',
    insight_1_title: 'هندسة النمو والتمويل في المجموعات الكبرى',
    insight_1_desc:  'كيف نعيد صياغة الهياكل المالية والاستثمارية لضمان الاستدامة وتقليل المخاطر قبل التنفيذ الفعلي.',
    insight_1_date:  'أبريل 2025',
    insight_1_read:  '8 دقائق',
    insight_2_cat:   'حوكمة الأزمات',
    insight_2_title: 'معالجة التعثر وحماية الأصول',
    insight_2_desc:  'خطوات عملية لإعادة بناء الكيانات الصناعية والعائلية المتعثرة وتأمين الأصول التشغيلية.',
    insight_2_date:  'مارس 2025',
    insight_2_read:  '6 دقائق',

    cta_label: 'لنبدأ العمل معًا',
    cta_title: 'لنبدأ اليوم هندسة قرارك القادم.',
    cta_btn:   'ابدأ عملية التأهيل',

    footer_tagline:  'هندسة القرار. استدامة الأثر.',
    footer_title_links: 'روابط المنظومة',
    footer_link1:    'المنهجية',
    footer_link2:    'المنظومات',
    footer_link3:    'الرؤى',
    footer_title_contact: 'بيانات التواصل',
    footer_location: 'جدة، المملكة العربية السعودية',
    footer_legal:    'محتوى هذا الموقع لأغراض تعريفية فقط. علاقة العمل تبدأ بنموذج تأهيل رسمي وتحكمها اتفاقيات سرية.',
    footer_rights:   'جميع الحقوق محفوظة. سيادة المعرفة المؤسسية.'
  },
  en: {
    nav_about:        'About',
    nav_methodology:  'Methodology',
    nav_insights:     'Insights',
    nav_contact:      'Contact',
    cta_start:        'Start Qualification',

    hero_label:  'Decision Architecture House',
    hero_title:  'We design decision systems for complex projects and investments.',
    hero_sub:    'We calibrate the decision before it becomes an executive commitment.',
    hero_text:   'We work with owners and senior leadership to refine strategic decisions before implementation, and to build a reliable institutional path.',
    hero_cta:    'Explore Methodology',
    scroll_down: 'Scroll',

    gap_label:    'Decision Gap',
    gap_title:    'Where does the failure occur?',
    gap_p1_title: 'Undisciplined Decisions',
    gap_p1_text:  'Without a governing framework, emotional and hasty decisions become inevitable.',
    gap_p2_title: 'Execution Gap',
    gap_p2_text:  'Strategic vision falters when a clear institutional system is absent.',
    gap_p3_title: 'Asset Erosion',
    gap_p3_text:  'Early financial commitment without business logic engineering costs dearly.',

    methodology_label: 'System Pathway',
    methodology_title: 'Towards Disciplined Institutional Decisions',
    methodology_desc:  'Three interconnected phases to transform vision into sustainable reality.',
    method_1_title:    'Decision Framework Design',
    method_1_desc:     'We design the business "logic" and investment model before financial commitment, ensuring a resilient and scalable model.',
    method_2_title:    'Logic Leadership',
    method_2_desc:     'We establish Decision Gates that protect owners and ensure every executive step aligns with higher strategic goals.',
    method_3_title:    'Institutional Enablement',
    method_3_desc:     'We build the systems and platforms that ensure knowledge and capability remain within your entity, sustaining impact.',

    about_label: 'About Us',
    about_title: 'We are NORM',
    about_desc:  'We position ourselves as a Governing Mind; providing your leadership with the "Scale and Standard" to ensure every decision is backed by refined human intellect, advanced tools, and field expertise forged by real challenges.',
    about_cta:   'About NORM',
    card_eyebrow: 'Decision Architecture House',
    card_caption: 'Governing Mind',
    card_feat_1:  'Strategic Intelligence',
    card_feat_2:  'Decision Architecture',
    card_feat_3:  'Sustained Impact',

    insights_label:  'Selected Insights',
    insights_title:  'Latest White Papers',
    insight_1_cat:   'Strategy',
    insight_1_title: 'Growth & Finance Engineering in Major Groups',
    insight_1_desc:  'How we reshape financial and investment structures to ensure sustainability and reduce risk before execution.',
    insight_1_date:  'April 2025',
    insight_1_read:  '8 min read',
    insight_2_cat:   'Crisis Governance',
    insight_2_title: 'Distress Resolution & Asset Protection',
    insight_2_desc:  'Practical steps to rebuild distressed industrial and family entities and secure operational assets.',
    insight_2_date:  'March 2025',
    insight_2_read:  '6 min read',

    cta_label: "Let's Work Together",
    cta_title: "Let's engineer your next decision today.",
    cta_btn:   'Begin Qualification Process',

    footer_tagline:  'Decision Engineering. Sustained Impact.',
    footer_title_links: 'System Links',
    footer_link1:    'Methodology',
    footer_link2:    'Systems',
    footer_link3:    'Insights',
    footer_title_contact: 'Contact Information',
    footer_location: 'Jeddah, Saudi Arabia',
    footer_legal:    'This website content is for informational purposes only. A working relationship begins with a formal qualification form governed by confidentiality agreements.',
    footer_rights:   'All rights reserved. Institutional Knowledge Sovereignty.'
  }
};

// ── Language Management ───────────────────────────────────────
function initLanguage() {
  const savedLang = localStorage.getItem(CONFIG.storageKey);
  const browserLang = navigator.language.startsWith('en') ? 'en' : 'ar';
  const lang = savedLang || browserLang;
  
  applyLanguage(lang);
}

function applyLanguage(lang) {
  localStorage.setItem(CONFIG.storageKey, lang);
  
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.remove('lang-en', 'lang-ar');
  document.body.classList.add(`lang-${lang}`);

  // Update UI components
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang]?.[key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update directional icons
  document.querySelectorAll('.btn-outline i, .ir-arrow i, .hero-actions .btn-outline i').forEach(icon => {
    const isArrow = icon.classList.contains('fa-arrow-left') || icon.classList.contains('fa-arrow-right');
    if (isArrow) {
      icon.className = lang === 'ar' ? 'fas fa-arrow-left' : 'fas fa-arrow-right';
    }
  });

  if (window.AOS) window.AOS.refresh();
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
};

function toggleMenu(forceClose = false) {
  const isOpen = UI.navMenu.classList.contains('active');
  const shouldOpen = !isOpen && !forceClose;

  UI.navMenu.classList.toggle('active', shouldOpen);
  UI.overlay.classList.toggle('active', shouldOpen);
  UI.mobileToggle.setAttribute('aria-expanded', String(shouldOpen));
  UI.mobileToggle.setAttribute('aria-label', shouldOpen ? 'إغلاق القائمة' : 'فتح القائمة');
  
  const icon = UI.mobileToggle.querySelector('i');
  if (shouldOpen) {
    icon.classList.replace('fa-bars', 'fa-times');
    document.body.style.overflow = 'hidden';
  } else {
    icon.classList.replace('fa-times', 'fa-bars');
    document.body.style.overflow = '';
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

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      applyLanguage(btn.dataset.lang);
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

  // 3. Libraries Initialization
  if (window.AOS) AOS.init(CONFIG.aos);
  
  if (window.Lenis) {
    const lenis = new Lenis(CONFIG.lenis);
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  // 4. Analytics
  initAnalytics();

  // 5. Cleanup & Loader
  if (UI.yearEl) UI.yearEl.textContent = new Date().getFullYear();
  
  window.addEventListener('load', () => {
    if (UI.loader) {
      setTimeout(() => UI.loader.classList.add('hidden'), 1000);
    }
    
    // Methodology Swipe Hint (Mobile)
    const track = document.querySelector('.method-track');
    if (window.innerWidth < 768 && track) {
        setTimeout(() => {
            track.scrollTo({ left: 50, behavior: 'smooth' });
            setTimeout(() => {
                track.scrollTo({ left: 0, behavior: 'smooth' });
            }, 500);
        }, 2500);
    }
  });
}

// ── Run ───────────────────────────────────────────────────────
init();