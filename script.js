// =====================================================
// SCRIPT.JS - Under Development Page Logic
// =====================================================

// ---- Translations ----
const translations = {
  fr: {
    badgeText:      'En construction',
    line1:          'Notre nouveau site',
    line2:          'arrive bientot',
    subtext:        "Nous travaillons dur pour vous offrir quelque chose d'exceptionnel.\nRevenez nous voir tres bientot !",
    labelDays:      'Jours',
    labelHours:     'Heures',
    labelMinutes:   'Minutes',
    labelSeconds:   'Secondes',
    progressLabel:  'Progression du developpement',
    notifyTitle:    'Soyez notifie au lancement',
    notifyBtn:      'Me notifier',
    placeholder:    'votre@email.com',
    successText:    'Merci ! Nous vous contacterons bientot.',
    footerText:     '\u00A9 2026 \u00B7 Tous droits reserves',
    contactPhoneLabel:    'Des questions ? Appelez-nous',
    contactLocationLabel: 'Notre emplacement',
    contactMapLink:       'Voir sur Google Maps',
  },
  en: {
    badgeText:      'Under Development',
    line1:          'Our new site is',
    line2:          'coming soon',
    subtext:        "We are working hard to bring you something exceptional.\nStay tuned, we will be back very soon!",
    labelDays:      'Days',
    labelHours:     'Hours',
    labelMinutes:   'Minutes',
    labelSeconds:   'Seconds',
    progressLabel:  'Development progress',
    notifyTitle:    'Get notified at launch',
    notifyBtn:      'Notify me',
    placeholder:    'your@email.com',
    successText:    'Thank you! We will be in touch soon.',
    footerText:     '\u00A9 2026 \u00B7 All rights reserved',
    contactPhoneLabel:    'Questions? Call us',
    contactLocationLabel: 'Our location',
    contactMapLink:       'View on Google Maps',
  }
};

let currentLang = 'fr';

function setLang(lang) {
  currentLang = lang;
  const t = translations[lang];

  document.getElementById('badge-text').textContent    = t.badgeText;
  document.getElementById('line1').textContent         = t.line1;
  document.getElementById('line2').textContent         = t.line2;

  const sub = document.getElementById('subtext');
  const lines = t.subtext.split('\n');
  sub.innerHTML = lines[0] + '<br />' + lines[1];

  document.getElementById('label-days').textContent    = t.labelDays;
  document.getElementById('label-hours').textContent   = t.labelHours;
  document.getElementById('label-minutes').textContent = t.labelMinutes;
  document.getElementById('label-seconds').textContent = t.labelSeconds;

  document.getElementById('progress-label').textContent = t.progressLabel;
  document.getElementById('notify-title').textContent   = t.notifyTitle;
  document.getElementById('notify-btn-text').textContent = t.notifyBtn;
  document.getElementById('email-input').placeholder   = t.placeholder;
  document.getElementById('success-text').textContent  = t.successText;
  document.getElementById('footer-text').textContent   = t.footerText;
  document.getElementById('contact-phone-label').textContent    = t.contactPhoneLabel;
  document.getElementById('contact-location-label').textContent = t.contactLocationLabel;
  document.getElementById('contact-map-link').textContent       = t.contactMapLink;

  // Active button style
  document.getElementById('btn-fr').classList.toggle('active', lang === 'fr');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');

  // HTML lang attribute
  document.documentElement.lang = lang;
}

// ---- Countdown ----
const launchDate = new Date();
launchDate.setDate(launchDate.getDate() + 7);

function updateCountdown() {
  const now  = new Date();
  const diff = launchDate - now;
  if (diff <= 0) {
    document.getElementById('days').textContent    = '00';
    document.getElementById('hours').textContent   = '00';
    document.getElementById('minutes').textContent = '00';
    document.getElementById('seconds').textContent = '00';
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);

  document.getElementById('days').textContent    = String(d).padStart(2,'0');
  document.getElementById('hours').textContent   = String(h).padStart(2,'0');
  document.getElementById('minutes').textContent = String(m).padStart(2,'0');
  document.getElementById('seconds').textContent = String(s).padStart(2,'0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ---- Notify form ----
function handleSubmit(e) {
  e.preventDefault();
  const form    = e.target;
  const success = document.getElementById('notify-success');
  form.classList.add('hidden');
  success.classList.remove('hidden');
}

// ---- Entrance animations (stagger) ----
window.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll(
    '.logo-wrap, .badge, .headline, .subtext, .divider, .countdown-wrap, .progress-section, .notify-section'
  );
  items.forEach((el, i) => {
    el.style.opacity  = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.6s ease ${i * 0.1}s, transform 0.6s ease ${i * 0.1}s`;
    requestAnimationFrame(() => {
      el.style.opacity  = '1';
      el.style.transform = 'translateY(0)';
    });
  });
});
