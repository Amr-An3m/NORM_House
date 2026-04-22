// ═══════════════════════════════════════════════════════════
// NORM — Decision Architecture House  |  main.js  v3.1
// ═══════════════════════════════════════════════════════════

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

let currentLang = localStorage.getItem('lang') || 'ar';

// ── Language Switcher ────────────────────────────────────────
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  document.documentElement.lang = lang;
  document.documentElement.dir  = lang === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.remove('lang-en', 'lang-ar');
  document.body.classList.add(`lang-${lang}`);

  // Active state + aria-pressed on lang buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });

  // Apply all translations
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang]?.[key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Fix icon directions for RTL/LTR
  document.querySelectorAll('.btn-outline i, .ir-arrow i, .hero-actions .btn-outline i').forEach(icon => {
    const isArrow = icon.classList.contains('fa-arrow-left') || icon.classList.contains('fa-arrow-right');
    if (isArrow) {
      icon.className = lang === 'ar' ? 'fas fa-arrow-left' : 'fas fa-arrow-right';
    }
  });

  // Refresh AOS after direction change (correct method name)
  if (window.AOS) window.AOS.refresh();
}

document.querySelectorAll('.lang-btn').forEach(btn =>
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang))
);

// ── Mobile Menu ──────────────────────────────────────────────
const mobileToggle = document.getElementById('mobileToggle');
const navMenu      = document.getElementById('navMenu');

if (mobileToggle) {
  mobileToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('active');
    mobileToggle.setAttribute('aria-expanded', String(isOpen));
    mobileToggle.setAttribute('aria-label', isOpen ? 'غلق القائمة' : 'فتح القائمة');
    mobileToggle.innerHTML = isOpen
      ? '<i class="fas fa-times" aria-hidden="true"></i>'
      : '<i class="fas fa-bars" aria-hidden="true"></i>';
  });
}

// Close menu on nav-link click
document.querySelectorAll('.nav-links a').forEach(link =>
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    if (mobileToggle) {
      mobileToggle.setAttribute('aria-expanded', 'false');
      mobileToggle.setAttribute('aria-label', 'فتح القائمة');
      mobileToggle.innerHTML = '<i class="fas fa-bars" aria-hidden="true"></i>';
    }
  })
);

// ── AOS Init ─────────────────────────────────────────────────
AOS.init({ once: true, offset: 80, duration: 900, easing: 'ease-out-cubic' });

// ── Scroll Events (optimized with requestAnimationFrame) ─────
const navbar        = document.getElementById('navbar');
const backBtn       = document.getElementById('backToTop');
const progressBar   = document.getElementById('scrollProgress');
const scrollIndicator = document.getElementById('scrollIndicator');

let ticking = false;

function updateScrollUI() {
  const scrollY   = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;

  // Navbar Transition
  if (navbar) navbar.classList.toggle('scrolled', scrollY > 60);

  // Back-to-top visibility
  if (backBtn) backBtn.classList.toggle('show', scrollY > 500);

  // Scroll progress bar
  if (progressBar && docHeight > 0) {
    progressBar.style.width = `${(scrollY / docHeight) * 100}%`;
  }

  // Hero scroll indicator fade
  if (scrollIndicator) {
    const shouldHide = scrollY > 80;
    scrollIndicator.style.opacity = shouldHide ? '0' : '1';
    scrollIndicator.style.pointerEvents = shouldHide ? 'none' : 'auto';
  }

  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateScrollUI);
    ticking = true;
  }
}, { passive: true });

// ── Back to Top ──────────────────────────────────────────────
if (backBtn) {
  backBtn.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ── Loading Screen ───────────────────────────────────────────
window.addEventListener('load', () => {
  const loader = document.getElementById('loaderScreen');
  if (loader) {
    setTimeout(() => loader.classList.add('hidden'), 1900);
  }
});

// ── Dynamic Copyright Year ───────────────────────────────────
const yearEl = document.getElementById('currentYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Init Language ────────────────────────────────────────────
setLanguage(currentLang);