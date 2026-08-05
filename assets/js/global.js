'use strict';
(function () {
  var gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-45VKBJH25R";
  document.head.appendChild(gaScript);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-45VKBJH25R');
})();
(function (w, d, s, l, i) {
  w[l] = w[l] || [];
  w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
  var f = d.getElementsByTagName(s)[0],
    j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
  j.async = true;
  j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
  if (f && f.parentNode) {
    f.parentNode.insertBefore(j, f);
  }
})(window, document, 'script', 'dataLayer', 'GTM-M673BJ8N');

const CONFIG = {
  animationDuration: 800,
  scrollOffset: 100,
  debounceDelay: 150,
  apiTimeout: 10000,
  apiBaseUrl: '/api',
  maxFileSize: 10 * 1024 * 1024,
  allowedFileTypes: ['image/jpeg', 'image/png', 'image/webp', 'application/pdf', 'application/msword']
};
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
function throttle(func, limit) {
  let inThrottle;
  return function (...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
function sanitizeHTML(str) {
  const temp = document.createElement('div');
  temp.textContent = str;
  return temp.innerHTML;
}
function showToast(message, type = 'info', duration = 3000) {
  const toast = document.createElement('div');
  toast.className = `toast-notification toast-${type}`;
  toast.textContent = message;
  toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        background: ${type === 'success' ? '#48BB78' : type === 'error' ? '#F56565' : '#4299E1'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'slideOutRight 0.3s ease-out';
    setTimeout(() => toast.remove(), 300);
  }, duration);
}
document.addEventListener('DOMContentLoaded', function () {
  initializeApp();
});
function initializeApp() {
  updateCurrentYear();
  initializeAOS();
  initializeCookieConsent();
  initializeNavbar();
  initializePWA();
  initializeFAQ();
  initializeBackToTop();
  initializeSmoothScroll();
  initializeLazyLoading();
  initializeServiceWorker();
  initCounters();
}
function updateCurrentYear() {
  const yearElements = document.querySelectorAll('#currentYear, [data-year], #liveYear, #liveYear404');
  const currentYear = new Date().getFullYear();
  yearElements.forEach(el => el.textContent = currentYear);
}
function initializeAOS() {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: CONFIG.animationDuration,
      once: true,
      offset: CONFIG.scrollOffset,
      easing: 'ease-in-out',
      disable: 'mobile'
    });
  }
}
function initializeCookieConsent() {
  const cookieConsent = document.getElementById('cookieConsent');
  const acceptBtn = document.getElementById('acceptCookies');
  const declineBtn = document.getElementById('declineCookies');
  if (!cookieConsent) return;
  if (!localStorage.getItem('cookieConsent')) {
    setTimeout(() => {
      cookieConsent.classList.add('show');
    }, 2000);
  }
  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      try {
        localStorage.setItem('cookieConsent', 'accepted');
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
      } catch (e) {}
      cookieConsent.classList.remove('show');
    });
  }
  if (declineBtn) {
    declineBtn.addEventListener('click', () => {
      try {
        localStorage.setItem('cookieConsent', 'declined');
        localStorage.setItem('cookieConsentDate', new Date().toISOString());
      } catch (e) {}
      cookieConsent.classList.remove('show');
    });
  }
}
function initializeNavbar() {
  const navbar = document.querySelector('.navbar') || document.getElementById('mainNav');
  if (!navbar) return;
  const handleScroll = throttle(() => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, 100);
  window.addEventListener('scroll', handleScroll);
  const navLinks = document.querySelectorAll('.nav-link');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    });
  });
}
function initializePWA() {
  let deferredPrompt = null;
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  // If already running as installed app, hide all install prompts
  if (isStandalone) {
    document.querySelectorAll('[data-pwa-install], #installPrompt').forEach(el => el.style.display = 'none');
    return;
  }

  // Ensure PWA install banner container exists
  let banner = document.getElementById('installPrompt');
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'installPrompt';
    banner.className = 'pwa-banner-content-wrap pwa-install-banner';
    banner.innerHTML = `
      <div class="pwa-banner-content">
        <img src="/assets/images/yr-tech-growth-logo.webp" alt="YR Tech Growth Icon" class="pwa-banner-icon" width="40" height="40">
        <div class="pwa-banner-info">
          <div class="pwa-banner-title">Install YR Tech Growth App</div>
          <p class="pwa-banner-desc">Fast access, offline mode & instant agency updates</p>
        </div>
      </div>
      <div class="pwa-banner-actions">
        <button id="installApp" class="pwa-btn-install"><i class="fa-solid fa-download me-1"></i> Install App</button>
        <button id="dismissPrompt" class="pwa-btn-dismiss">Later</button>
      </div>
    `;
    document.body.appendChild(banner);
  }

  // Create iOS installation guide modal
  let iosModal = document.getElementById('iosPwaModal');
  if (!iosModal && isIOS) {
    iosModal = document.createElement('div');
    iosModal.id = 'iosPwaModal';
    iosModal.className = 'ios-pwa-modal-overlay';
    iosModal.innerHTML = `
      <div class="ios-pwa-modal">
        <div class="ios-modal-header">
          <div class="ios-modal-title">
            <img src="/assets/images/yr-tech-growth-logo.webp" alt="App Icon" style="width: 28px; height: 28px; border-radius: 6px;">
            Install on iOS
          </div>
          <button class="ios-modal-close" id="closeIosPwaModal">&times;</button>
        </div>
        <div class="ios-step">
          <div class="ios-step-num">1</div>
          <div class="ios-step-text">
            Tap the <span class="ios-icon-badge"><i class="fa-solid fa-arrow-up-from-bracket"></i> Share</span> button in your Safari toolbar below.
          </div>
        </div>
        <div class="ios-step">
          <div class="ios-step-num">2</div>
          <div class="ios-step-text">
            Scroll down the options list and select <span class="ios-icon-badge"><i class="fa-regular fa-square-plus"></i> Add to Home Screen</span>.
          </div>
        </div>
        <div class="ios-step">
          <div class="ios-step-num">3</div>
          <div class="ios-step-text">
            Tap <strong>Add</strong> at the top right corner to install YR Tech Growth on your home screen!
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(iosModal);

    const closeIosBtn = document.getElementById('closeIosPwaModal');
    if (closeIosBtn) {
      closeIosBtn.addEventListener('click', () => {
        iosModal.classList.remove('show');
        try { localStorage.setItem('pwaInstallDismissed', 'true'); } catch (e) {}
      });
    }
    iosModal.addEventListener('click', (e) => {
      if (e.target === iosModal) {
        iosModal.classList.remove('show');
      }
    });
  }

  const showBanner = () => {
    try {
      if (localStorage.getItem('pwaInstallDismissed') === 'true') return;
    } catch (e) {}
    if (banner) banner.classList.add('show');
  };

  const hideBanner = () => {
    if (banner) banner.classList.remove('show');
  };

  // Android & Desktop Chrome / Edge prompt handler
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    showBanner();
  });

  // iOS Safari specific banner display logic
  if (isIOS && !isStandalone) {
    setTimeout(() => {
      showBanner();
    }, 3000);
  }

  // Handle click on any install button (Banner, Header, Custom Buttons)
  const triggerInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      try {
        const choice = await deferredPrompt.userChoice;
        if (choice && choice.outcome === 'accepted') {
          hideBanner();
        }
      } catch (err) {}
      deferredPrompt = null;
    } else if (isIOS && iosModal) {
      hideBanner();
      iosModal.classList.add('show');
    } else {
      // Fallback for desktop browsers where beforeinstallprompt didn't trigger
      alert('To install YR Tech Growth App, open your browser menu (3 dots or share button) and select "Install app" or "Add to Home Screen".');
    }
  };

  document.addEventListener('click', (e) => {
    const target = e.target.closest('#installApp, [data-pwa-install], .pwa-install-trigger');
    if (target) {
      e.preventDefault();
      triggerInstall();
    }
  });

  const dismissBtn = document.getElementById('dismissPrompt');
  if (dismissBtn) {
    dismissBtn.addEventListener('click', () => {
      hideBanner();
      try {
        localStorage.setItem('pwaInstallDismissed', 'true');
      } catch (e) {}
    });
  }

  window.addEventListener('appinstalled', () => {
    hideBanner();
    deferredPrompt = null;
    if (iosModal) iosModal.classList.remove('show');
  });
}
function initializeFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', function () {
      const faqItem = this.parentElement;
      const isActive = faqItem.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        const q = item.querySelector('.faq-question');
        if (q) q.setAttribute('aria-expanded', 'false');
      });
      if (!isActive) {
        faqItem.classList.add('active');
        this.setAttribute('aria-expanded', 'true');
      }
    });
  });
}
function initializeBackToTop() {
  let backToTop = document.querySelector('.back-to-top-footer');
  if (!backToTop) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTop.style.display = 'flex';
    } else {
      backToTop.style.display = 'none';
    }
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
function initializeSmoothScroll() {
  document.querySelectorAll('a[href*="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      const hashIndex = href.lastIndexOf('#');
      if (hashIndex === -1) return;

      const hash = href.substring(hashIndex);
      if (hash === '#' || hash === '#!') return;

      const path = href.substring(0, hashIndex);
      const currentPath = window.location.pathname;
      const isSamePage = path === '' || path === currentPath ||
        (path === '/index.html' && (currentPath === '/' || currentPath === '/index.html')) ||
        (path === '/' && (currentPath === '/' || currentPath === '/index.html'));

      if (isSamePage) {
        const target = document.querySelector(hash);
        if (target) {
          e.preventDefault();
          const offsetTop = target.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
          history.pushState(null, null, hash);
        }
      }
    });
  });
}
function initializeLazyLoading() {
  const lazyImages = document.querySelectorAll('.lazy, [loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) img.src = img.dataset.src;
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '50px 0px', threshold: 0.01 });
    lazyImages.forEach(img => imageObserver.observe(img));
  } else {
    lazyImages.forEach(img => {
      if (img.dataset.src) img.src = img.dataset.src;
      img.classList.add('loaded');
    });
  }
}
function initializeServiceWorker() {
  const isSecureContext = window.isSecureContext || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  
  if ('serviceWorker' in navigator && isSecureContext) {
    window.addEventListener('load', async () => {
      try {
        const swPath = new URL('sw.js', window.location.origin).pathname;
        await navigator.serviceWorker.register(swPath);
      } catch (error) {
        // Silent
      }
    });
  }
}

// =============== ADVANCED COUNTER ANIMATION ===============
function initCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  if (!counters.length) return;
  let hasAnimated = false;

  const animateCounter = (element) => {
    if (element.classList.contains('animated')) return;
    
    const target = parseFloat(element.getAttribute('data-target')) || 0;
    const suffix = element.getAttribute('data-suffix') || '';
    const decimalPlaces = parseInt(element.getAttribute('data-decimal'), 10) || 0;
    const isFormat = element.getAttribute('data-format') || '';
    
    const duration = 2000;
    const startTime = Date.now();
    const startValue = 0;

    const formatValue = (value) => {
      if (isFormat === 'currency') {
        return 'M' + (value / 1000000).toFixed(1);
      }
      return decimalPlaces > 0 ? value.toFixed(decimalPlaces) : Math.round(value);
    };

    const updateCounter = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easeProgress = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = startValue + (target - startValue) * easeProgress;
      element.textContent = formatValue(currentValue) + suffix;

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        element.classList.add('animated');
      }
    };

    updateCounter();
  };

  if ('IntersectionObserver' in window) {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasAnimated) {
          counters.forEach(counter => animateCounter(counter));
          hasAnimated = true;
          observer.disconnect();
        }
      });
    }, observerOptions);

    const firstStatBox = counters[0].closest('.stat-box') || counters[0].parentElement;
    if (firstStatBox) {
      observer.observe(firstStatBox);
    } else {
      counters.forEach(counter => animateCounter(counter));
    }
  } else {
    counters.forEach(counter => animateCounter(counter));
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCounters);
} else {
  initCounters();
}



