/* ==========================================================================
   BAKERY SHOP - SINGLE MASTER JAVASCRIPT (script.js)
   Handles all pages, state management, interactions, modals, and animations
   ========================================================================== */

(function () {
  'use strict';

  // --- STATE MANAGEMENT ---
  const storedWishlist = JSON.parse(localStorage.getItem('bakery_wishlist'));
  const STATE = {
    cart: JSON.parse(localStorage.getItem('bakery_cart')) || [],
    wishlist: (storedWishlist && storedWishlist.length > 0) ? storedWishlist : ['prod-2', 'prod-8', 'prod-3'],
    userRole: localStorage.getItem('bakery_user_role') || 'user'
  };

  // Products Database for Quick View & Dynamic Interactions
  const PRODUCTS = [
    {
      id: 'prod-1',
      name: 'Artisanal Sourdough Loaf',
      category: 'Breads',
      categorySlug: 'breads',
      price: 6.50,
      originalPrice: 8.00,
      rating: 4.9,
      reviews: 128,
      badge: 'Freshly Baked',
      badgeClass: 'badge-fresh',
      image: 'assets/croissant-hero.webp',
      description: 'Slow-fermented for 36 hours using our heritage wild yeast starter. Crispy golden crust with an airy, tangy interior.'
    },
    {
      id: 'prod-2',
      name: 'Belgian Truffle Cake',
      category: 'Cakes',
      categorySlug: 'cakes',
      price: 34.00,
      originalPrice: 42.00,
      rating: 5.0,
      reviews: 246,
      badge: 'Bestseller',
      badgeClass: 'badge-bestseller',
      image: 'assets/sourdough-bread.webp',
      description: 'Layers of moist dark chocolate sponge enveloped in 70% Belgian chocolate ganache, topped with handmade dark truffles.'
    },
    {
      id: 'prod-3',
      name: 'French Butter Croissant',
      category: 'Pastries',
      categorySlug: 'pastries',
      price: 3.75,
      originalPrice: null,
      rating: 4.8,
      reviews: 95,
      badge: 'New',
      badgeClass: 'badge-fresh',
      image: 'assets/artisan-baguette.webp',
      description: 'Laminated with pure Normandy butter for 81 delicate, flaky layers. Golden on the outside and tender inside.'
    },
    {
      id: 'prod-4',
      name: 'Velvet Vanilla Cupcakes',
      category: 'Cupcakes',
      categorySlug: 'cupcakes',
      price: 18.00,
      originalPrice: 22.00,
      rating: 4.9,
      reviews: 140,
      badge: 'Popular',
      badgeClass: 'badge-bestseller',
      image: 'assets/chocolate-eclair.webp',
      description: 'Box of 6 signature Madagascar vanilla cupcakes crowned with whipped mascarpone buttercream and edible gold flakes.'
    },
    {
      id: 'prod-5',
      name: 'Pistachio Glazed Donut',
      category: 'Donuts',
      categorySlug: 'donuts',
      price: 4.25,
      originalPrice: 5.00,
      rating: 4.7,
      reviews: 88,
      badge: 'Special',
      badgeClass: 'badge-discount',
      image: 'assets/raspberry-tart.webp',
      description: 'Brioche donut dipped in roasted Sicilian pistachio glaze, finished with crushed pistachios and sea salt.'
    },
    {
      id: 'prod-6',
      name: 'Gourmet Macarons (12 pcs)',
      category: 'Desserts',
      categorySlug: 'desserts',
      price: 26.00,
      originalPrice: 30.00,
      rating: 4.9,
      reviews: 175,
      badge: 'Gift Box',
      badgeClass: 'badge-gold',
      image: 'assets/french-macarons.webp',
      description: 'Handcrafted Parisian almond shells with assorted fillings: salted caramel, raspberry rose, matcha, and dark chocolate.'
    },
    {
      id: 'prod-7',
      name: 'New York Baked Cheesecake',
      category: 'Cakes',
      categorySlug: 'cakes',
      price: 38.00,
      originalPrice: null,
      rating: 4.8,
      reviews: 112,
      badge: 'Classic',
      badgeClass: 'badge-fresh',
      image: 'assets/cheesecake.webp',
      description: 'Dense, velvety cream cheese on a spiced graham cracker crust, topped with fresh strawberry compote.'
    },
    {
      id: 'prod-8',
      name: 'Chunky Sea Salt Choc Cookies',
      category: 'Cookies',
      categorySlug: 'cookies',
      price: 14.50,
      originalPrice: 18.00,
      rating: 4.9,
      reviews: 210,
      badge: 'Bestseller',
      badgeClass: 'badge-bestseller',
      image: 'assets/choc-cookies.webp',
      description: 'Box of 8 freshly baked cookies loaded with molten dark chocolate chunks and Maldon sea salt flakes.'
    }
  ];

  // Helper Functions
  function saveCart() {
    localStorage.setItem('bakery_cart', JSON.stringify(STATE.cart));
    updateCartUI();
  }

  function saveWishlist() {
    localStorage.setItem('bakery_wishlist', JSON.stringify(STATE.wishlist));
    updateWishlistUI();
  }

  // --- SUPPRESS POPUP ALERTS ACROSS WEBSITE ---
  window.alert = function () {
    console.log('Popup alert suppressed:', ...arguments);
  };
  window.confirm = function () {
    return true;
  };
  window.prompt = function () {
    return null;
  };

  // Safe non-intrusive logger (No popup alerts)
  function showToast(message, type = 'success') {
    console.log(`[Bakery ${type.toUpperCase()}]:`, message);
  }

  // --- CART MANAGEMENT ---
  function addToCart(productId, quantity = 1) {
    window.location.href = '404.html';
  }

  function removeFromCart(productId) {
    window.location.href = '404.html';
  }

  function updateCartQuantity(productId, delta) {
    window.location.href = '404.html';
  }

  function updateCartUI() {
    // Badges update
    document.querySelectorAll('.cart-count-badge').forEach(b => {
      b.textContent = '0';
    });
  }

  // --- WISHLIST MANAGEMENT ---
  function toggleWishlist(productId) {
    window.location.href = '404.html';
  }

  function updateWishlistUI() {
    document.querySelectorAll('.wishlist-count-badge').forEach(b => {
      b.textContent = '3';
    });
  }

  // --- QUICK VIEW MODAL ---
  function openQuickView(productId) {
    window.location.href = '404.html';
  }

  function closeQuickView() {
    const modal = document.getElementById('quickview-modal');
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // --- SPECIAL OFFER COUNTDOWN ---
  function initCountdown() {
    const hoursEl = document.getElementById('cd-hours');
    const minsEl = document.getElementById('cd-minutes');
    const secsEl = document.getElementById('cd-seconds');

    if (!hoursEl || !minsEl || !secsEl) return;

    // Set countdown 14 hours ahead from initial load
    let totalSeconds = 14 * 3600 + 45 * 60 + 30;

    setInterval(() => {
      if (totalSeconds <= 0) {
        totalSeconds = 24 * 3600;
      }
      totalSeconds--;

      const h = Math.floor(totalSeconds / 3600);
      const m = Math.floor((totalSeconds % 3600) / 60);
      const s = totalSeconds % 60;

      hoursEl.textContent = h < 10 ? '0' + h : h;
      minsEl.textContent = m < 10 ? '0' + m : m;
      secsEl.textContent = s < 10 ? '0' + s : s;
    }, 1000);
  }

  // --- ANIMATED COUNTERS ---
  function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    if (counters.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        counter.textContent = target.toLocaleString() + (counter.getAttribute('data-suffix') || '');
      });
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.getAttribute('data-target'), 10);
          const duration = 1600; // ms
          const stepTime = 25;
          const steps = duration / stepTime;
          const increment = target / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              counter.textContent = target.toLocaleString() + (counter.getAttribute('data-suffix') || '');
              clearInterval(timer);
            } else {
              counter.textContent = Math.floor(current).toLocaleString() + (counter.getAttribute('data-suffix') || '');
            }
          }, stepTime);

          obs.unobserve(counter);
        }
      });
    }, { threshold: 0.1 });

    counters.forEach(c => observer.observe(c));
  }

  // --- TIMELINE SCROLL ENTRANCE ANIMATIONS ---
  function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    if (timelineItems.length === 0) return;

    if (!('IntersectionObserver' in window)) {
      timelineItems.forEach(item => item.classList.add('in-view'));
      return;
    }

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px'
    });

    timelineItems.forEach(item => observer.observe(item));
  }

  // --- FAQ ACCORDION ---
  function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
      const header = item.querySelector('.faq-header');
      if (header) {
        header.addEventListener('click', () => {
          const isActive = item.classList.contains('active');
          faqItems.forEach(i => i.classList.remove('active'));
          if (!isActive) {
            item.classList.add('active');
          }
        });
      }
    });
  }

  // --- CAKE ESTIMATOR (Services & Contact) ---
  function initCakeEstimator() {
    const typeSelect = document.getElementById('est-type');
    const flavorSelect = document.getElementById('est-flavor');
    const sizeSelect = document.getElementById('est-size');
    const tiersSelect = document.getElementById('est-tiers');
    const priceDisplay = document.getElementById('est-price-total');

    if (!typeSelect || !sizeSelect || !priceDisplay) return;

    function calculate() {
      let base = 35.00;
      const typeVal = parseFloat(typeSelect.value) || 0;
      const flavorVal = parseFloat(flavorSelect ? flavorSelect.value : 0) || 0;
      const sizeVal = parseFloat(sizeSelect.value) || 0;
      const tiersVal = parseFloat(tiersSelect ? tiersSelect.value : 1) || 1;

      const total = (base + typeVal + flavorVal + sizeVal) * (tiersVal === 2 ? 1.6 : (tiersVal === 3 ? 2.3 : 1));
      priceDisplay.textContent = `$${total.toFixed(2)}`;
    }

    [typeSelect, flavorSelect, sizeSelect, tiersSelect].forEach(el => {
      if (el) el.addEventListener('change', calculate);
    });

    calculate();
  }

  // --- SUBSCRIPTION BILLING SWITCHER ---
  function initSubscriptionSwitcher() {
    const monthlyBtn = document.getElementById('sub-monthly-btn');
    const weeklyBtn = document.getElementById('sub-weekly-btn');
    const cards = document.querySelectorAll('.sub-plan-card');

    if (!monthlyBtn || !weeklyBtn) return;

    weeklyBtn.addEventListener('click', () => {
      weeklyBtn.classList.add('active');
      monthlyBtn.classList.remove('active');
      cards.forEach(c => {
        const weeklyPrice = c.getAttribute('data-weekly');
        const priceEl = c.querySelector('.sub-plan-price');
        if (priceEl) priceEl.innerHTML = `$${weeklyPrice} <span>/ week</span>`;
      });
    });

    monthlyBtn.addEventListener('click', () => {
      monthlyBtn.classList.add('active');
      weeklyBtn.classList.remove('active');
      cards.forEach(c => {
        const monthlyPrice = c.getAttribute('data-monthly');
        const priceEl = c.querySelector('.sub-plan-price');
        if (priceEl) priceEl.innerHTML = `$${monthlyPrice} <span>/ month</span>`;
      });
    });
  }

  // --- CATEGORY FILTERING (Home & Products) ---
  function initProductFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-grid-item');

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        productCards.forEach(card => {
          if (filter === 'all' || card.getAttribute('data-category') === filter) {
            card.style.display = '';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // --- PARSE USERNAME & FULL NAME FROM EMAIL ---
  function parseUserFromEmail(email) {
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return {
        fullName: 'Madeleine Dupont',
        firstName: 'Madeleine',
        email: email || 'madeleine.dupont@example.com'
      };
    }

    const prefix = email.split('@')[0];
    const words = prefix
      .replace(/[0-9]+/g, ' ')
      .replace(/[^a-zA-Z\s]/g, ' ')
      .trim()
      .split(/\s+/)
      .filter(w => w.length > 0);

    if (words.length === 0) {
      const fallback = prefix.charAt(0).toUpperCase() + prefix.slice(1);
      return {
        fullName: fallback,
        firstName: fallback,
        email: email
      };
    }

    const capitalizedWords = words.map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase());
    const fullName = capitalizedWords.join(' ');
    const firstName = capitalizedWords[0];

    return {
      fullName: fullName,
      firstName: firstName,
      email: email
    };
  }

  // --- FORMS VALIDATION & SUBMISSION ---
  function initFormValidations() {
    // Helper to wire input clearing
    const wireClearOnInput = (form) => {
      if (!form) return;
      form.querySelectorAll('input, select, textarea').forEach(input => {
        const clearField = () => {
          input.classList.remove('is-invalid');
          const group = input.closest('.form-group') || input.parentElement;
          if (group) {
            const err = group.querySelector('.field-error, .newsletter-error-msg');
            if (err) {
              err.classList.remove('visible');
              err.style.display = 'none';
            }
          }
        };
        input.addEventListener('input', clearField);
        input.addEventListener('change', clearField);
      });
    };

    // 1. General Contact Form
    const contactForm = document.getElementById('bakery-contact-form');
    if (contactForm) {
      wireClearOnInput(contactForm);
      const nameInput = contactForm.querySelector('#contact-name');
      const emailInput = contactForm.querySelector('#contact-email');
      const phoneInput = contactForm.querySelector('#contact-phone');
      const typeInput = contactForm.querySelector('#contact-type');
      const msgInput = contactForm.querySelector('#contact-message');

      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        let firstInvalid = null;

        if (nameInput && !nameInput.value.trim()) {
          nameInput.classList.add('is-invalid');
          let err = nameInput.parentElement.querySelector('.field-error');
          if (err) { err.textContent = 'Name is required'; err.classList.add('visible'); err.style.display = 'block'; }
          isValid = false;
          if (!firstInvalid) firstInvalid = nameInput;
        }

        if (emailInput) {
          const val = emailInput.value.trim();
          let err = emailInput.parentElement.querySelector('.field-error');
          if (!val) {
            emailInput.classList.add('is-invalid');
            if (err) { err.textContent = 'Email is required'; err.classList.add('visible'); err.style.display = 'block'; }
            isValid = false;
            if (!firstInvalid) firstInvalid = emailInput;
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
            emailInput.classList.add('is-invalid');
            if (err) { err.textContent = 'Please enter a valid email address'; err.classList.add('visible'); err.style.display = 'block'; }
            isValid = false;
            if (!firstInvalid) firstInvalid = emailInput;
          }
        }

        if (phoneInput && !phoneInput.value.trim()) {
          phoneInput.classList.add('is-invalid');
          let err = phoneInput.parentElement.querySelector('.field-error');
          if (err) { err.textContent = 'Phone number is required'; err.classList.add('visible'); err.style.display = 'block'; }
          isValid = false;
          if (!firstInvalid) firstInvalid = phoneInput;
        }

        if (typeInput && !typeInput.value) {
          typeInput.classList.add('is-invalid');
          let err = typeInput.parentElement.querySelector('.field-error');
          if (err) { err.textContent = 'Inquiry type is required'; err.classList.add('visible'); err.style.display = 'block'; }
          isValid = false;
          if (!firstInvalid) firstInvalid = typeInput;
        }

        if (msgInput && !msgInput.value.trim()) {
          msgInput.classList.add('is-invalid');
          let err = msgInput.parentElement.querySelector('.field-error');
          if (err) { err.textContent = 'Message is required'; err.classList.add('visible'); err.style.display = 'block'; }
          isValid = false;
          if (!firstInvalid) firstInvalid = msgInput;
        }

        if (!isValid) {
          if (firstInvalid) firstInvalid.focus();
          showToast('Please fill in the required fields.', 'error');
          return;
        }

        showToast('Thank you! Your message has been sent.', 'success');
        contactForm.reset();
        setTimeout(() => {
          window.location.href = '404.html';
        }, 800);
      });
    }

    // 2. Custom Cake Request Form
    const customCakeForm = document.getElementById('custom-cake-form');
    if (customCakeForm) {
      wireClearOnInput(customCakeForm);
      const occasionInput = customCakeForm.querySelector('#cake-occasion');
      const flavorInput = customCakeForm.querySelector('#cake-flavor');
      const guestsInput = customCakeForm.querySelector('#cake-guests');
      const dateInput = customCakeForm.querySelector('#cake-date');
      const themeInput = customCakeForm.querySelector('#cake-theme');
      const msgInput = customCakeForm.querySelector('#cake-msg');

      customCakeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        let firstInvalid = null;

        if (occasionInput && !occasionInput.value) {
          occasionInput.classList.add('is-invalid');
          let err = occasionInput.parentElement.querySelector('.field-error');
          if (err) { err.textContent = 'Cake occasion is required'; err.classList.add('visible'); err.style.display = 'block'; }
          isValid = false;
          if (!firstInvalid) firstInvalid = occasionInput;
        }

        if (flavorInput && !flavorInput.value) {
          flavorInput.classList.add('is-invalid');
          let err = flavorInput.parentElement.querySelector('.field-error');
          if (err) { err.textContent = 'Desired flavor is required'; err.classList.add('visible'); err.style.display = 'block'; }
          isValid = false;
          if (!firstInvalid) firstInvalid = flavorInput;
        }

        if (guestsInput && (!guestsInput.value || parseInt(guestsInput.value, 10) < 1)) {
          guestsInput.classList.add('is-invalid');
          let err = guestsInput.parentElement.querySelector('.field-error');
          if (err) { err.textContent = 'Guest count is required'; err.classList.add('visible'); err.style.display = 'block'; }
          isValid = false;
          if (!firstInvalid) firstInvalid = guestsInput;
        }

        if (dateInput && !dateInput.value) {
          dateInput.classList.add('is-invalid');
          let err = dateInput.parentElement.querySelector('.field-error');
          if (err) { err.textContent = 'Event date is required'; err.classList.add('visible'); err.style.display = 'block'; }
          isValid = false;
          if (!firstInvalid) firstInvalid = dateInput;
        }

        if (themeInput && !themeInput.value.trim()) {
          themeInput.classList.add('is-invalid');
          let err = themeInput.parentElement.querySelector('.field-error');
          if (err) { err.textContent = 'Design preference is required'; err.classList.add('visible'); err.style.display = 'block'; }
          isValid = false;
          if (!firstInvalid) firstInvalid = themeInput;
        }

        if (msgInput && !msgInput.value.trim()) {
          msgInput.classList.add('is-invalid');
          let err = msgInput.parentElement.querySelector('.field-error');
          if (err) { err.textContent = 'Custom message is required'; err.classList.add('visible'); err.style.display = 'block'; }
          isValid = false;
          if (!firstInvalid) firstInvalid = msgInput;
        }

        if (!isValid) {
          if (firstInvalid) firstInvalid.focus();
          showToast('Please fill out all required cake details.', 'error');
          return;
        }

        showToast('Custom cake request received! Redirecting...', 'success');
        customCakeForm.reset();
        setTimeout(() => {
          window.location.href = '404.html';
        }, 800);
      });
    }

    // 3. Login Form
    const loginForm = document.getElementById('bakery-login-form');
    if (loginForm) {
      try {
        loginForm.reset();
      } catch (e) {}
      const emailInput = loginForm.querySelector('#login-email');
      const passInput = loginForm.querySelector('#login-pass');
      if (emailInput) emailInput.value = '';
      if (passInput) passInput.value = '';

      wireClearOnInput(loginForm);

      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        let firstInvalid = null;

        if (emailInput) {
          const val = emailInput.value.trim();
          let err = emailInput.parentElement.querySelector('.field-error');
          if (!val) {
            emailInput.classList.add('is-invalid');
            if (err) { err.textContent = 'Email is required'; err.classList.add('visible'); err.style.display = 'block'; }
            isValid = false;
            if (!firstInvalid) firstInvalid = emailInput;
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
            emailInput.classList.add('is-invalid');
            if (err) { err.textContent = 'Please enter a valid email address'; err.classList.add('visible'); err.style.display = 'block'; }
            isValid = false;
            if (!firstInvalid) firstInvalid = emailInput;
          }
        }

        if (passInput && !passInput.value.trim()) {
          passInput.classList.add('is-invalid');
          let err = passInput.parentElement.querySelector('.field-error');
          if (err) { err.textContent = 'Password is required'; err.classList.add('visible'); err.style.display = 'block'; }
          isValid = false;
          if (!firstInvalid) firstInvalid = passInput;
        }

        if (!isValid) {
          if (firstInvalid) firstInvalid.focus();
          showToast('Please complete all required login fields.', 'error');
          return;
        }

        const emailVal = emailInput ? emailInput.value.trim() : '';
        const userData = parseUserFromEmail(emailVal);
        const role = localStorage.getItem('bakery_user_role') || 'user';
        const roleLabel = role === 'client' ? 'Client / B2B' : 'Customer';

        // Store active user details in localStorage
        localStorage.setItem('bakery_user_email', userData.email);
        localStorage.setItem('bakery_user_name', userData.fullName);
        localStorage.setItem('bakery_first_name', userData.firstName);
        localStorage.setItem('bakery_user_role', role);
        localStorage.setItem('bakery_user_role_label', roleLabel);

        showToast(`Welcome back, ${userData.firstName}! Logging in as ${roleLabel}...`, 'success');
        setTimeout(() => {
          window.location.href = role === 'client' ? 'client-dashboard.html' : 'user-dashboard.html';
        }, 1000);
      });
    }

    // 4. Signup Form
    const signupForm = document.getElementById('bakery-signup-form');
    if (signupForm) {
      try {
        signupForm.reset();
      } catch (e) {}
      const nameInput = signupForm.querySelector('#signup-name');
      const phoneInput = signupForm.querySelector('#signup-phone');
      const emailInput = signupForm.querySelector('#signup-email');
      const passInput = signupForm.querySelector('#signup-pass');
      const confirmPassInput = signupForm.querySelector('#signup-confirm-pass');

      if (nameInput) nameInput.value = '';
      if (phoneInput) phoneInput.value = '';
      if (emailInput) emailInput.value = '';
      if (passInput) passInput.value = '';
      if (confirmPassInput) confirmPassInput.value = '';

      wireClearOnInput(signupForm);

      signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;
        let firstInvalid = null;

        if (nameInput && !nameInput.value.trim()) {
          nameInput.classList.add('is-invalid');
          let err = nameInput.parentElement.querySelector('.field-error');
          if (err) { err.textContent = 'Full name is required'; err.classList.add('visible'); err.style.display = 'block'; }
          isValid = false;
          if (!firstInvalid) firstInvalid = nameInput;
        }

        if (phoneInput && !phoneInput.value.trim()) {
          phoneInput.classList.add('is-invalid');
          let err = phoneInput.parentElement.querySelector('.field-error');
          if (err) { err.textContent = 'Phone number is required'; err.classList.add('visible'); err.style.display = 'block'; }
          isValid = false;
          if (!firstInvalid) firstInvalid = phoneInput;
        }

        if (emailInput) {
          const val = emailInput.value.trim();
          let err = emailInput.parentElement.querySelector('.field-error');
          if (!val) {
            emailInput.classList.add('is-invalid');
            if (err) { err.textContent = 'Email is required'; err.classList.add('visible'); err.style.display = 'block'; }
            isValid = false;
            if (!firstInvalid) firstInvalid = emailInput;
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
            emailInput.classList.add('is-invalid');
            if (err) { err.textContent = 'Please enter a valid email address'; err.classList.add('visible'); err.style.display = 'block'; }
            isValid = false;
            if (!firstInvalid) firstInvalid = emailInput;
          }
        }

        if (passInput && !passInput.value) {
          passInput.classList.add('is-invalid');
          let err = passInput.parentElement.querySelector('.field-error');
          if (err) { err.textContent = 'Password is required'; err.classList.add('visible'); err.style.display = 'block'; }
          isValid = false;
          if (!firstInvalid) firstInvalid = passInput;
        }

        if (confirmPassInput) {
          let err = confirmPassInput.parentElement.querySelector('.field-error');
          if (!confirmPassInput.value) {
            confirmPassInput.classList.add('is-invalid');
            if (err) { err.textContent = 'Please confirm your password'; err.classList.add('visible'); err.style.display = 'block'; }
            isValid = false;
            if (!firstInvalid) firstInvalid = confirmPassInput;
          } else if (passInput && passInput.value !== confirmPassInput.value) {
            confirmPassInput.classList.add('is-invalid');
            if (err) { err.textContent = 'Passwords do not match'; err.classList.add('visible'); err.style.display = 'block'; }
            isValid = false;
            if (!firstInvalid) firstInvalid = confirmPassInput;
          }
        }

        if (!isValid) {
          if (firstInvalid) firstInvalid.focus();
          showToast('Please fill in all required registration fields.', 'error');
          return;
        }

        const nameVal = nameInput ? nameInput.value.trim() : '';
        const emailVal = emailInput ? emailInput.value.trim() : '';
        const firstName = nameVal.split(' ')[0] || nameVal;

        // Store active user details in localStorage
        localStorage.setItem('bakery_user_email', emailVal);
        localStorage.setItem('bakery_user_name', nameVal);
        localStorage.setItem('bakery_first_name', firstName);

        showToast(`Account created for ${firstName}! Redirecting to login...`, 'success');
        setTimeout(() => {
          window.location.href = 'login.html';
        }, 1200);
      });
    }

    // 5. Newsletter Forms (Footer and Page Sections)
    document.querySelectorAll('.newsletter-form').forEach(form => {
      const emailInput = form.querySelector('input[type="email"], .newsletter-email-input, .footer-newsletter-input');
      let errorMsgEl = form.querySelector('.newsletter-error-msg');
      const submitBtn = form.querySelector('button[type="submit"], .footer-newsletter-btn');

      if (!errorMsgEl) {
        errorMsgEl = document.createElement('span');
        errorMsgEl.className = 'newsletter-error-msg';
        form.appendChild(errorMsgEl);
      }

      const hideError = () => {
        if (emailInput) emailInput.classList.remove('is-invalid');
        const wrap = form.querySelector('.blog-newsletter-input-wrap, .newsletter-input-group');
        if (wrap) wrap.classList.remove('is-invalid');
        if (errorMsgEl) {
          errorMsgEl.classList.remove('visible');
          errorMsgEl.style.display = 'none';
        }
      };

      const showError = (msg) => {
        if (emailInput) {
          emailInput.classList.add('is-invalid');
          emailInput.focus();
        }
        const wrap = form.querySelector('.blog-newsletter-input-wrap, .newsletter-input-group');
        if (wrap) wrap.classList.add('is-invalid');
        if (errorMsgEl) {
          errorMsgEl.textContent = msg;
          errorMsgEl.classList.add('visible');
          errorMsgEl.style.display = 'block';
        }
        showToast(msg, 'error');
      };

      if (emailInput) {
        emailInput.addEventListener('input', hideError);
        emailInput.addEventListener('change', hideError);
      }

      const handleNewsletterSubmit = (e) => {
        if (e) e.preventDefault();
        if (!emailInput) return;

        const emailVal = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailVal) {
          showError('Email is required');
          return;
        }

        if (!emailRegex.test(emailVal)) {
          showError('Please enter a valid email address');
          return;
        }

        hideError();
        showToast('Thank you for subscribing to our bakery newsletter!', 'success');
        emailInput.value = '';
        setTimeout(() => {
          window.location.href = '404.html';
        }, 800);
      };

      form.addEventListener('submit', handleNewsletterSubmit);
      if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
          e.preventDefault();
          handleNewsletterSubmit(e);
        });
      }
    });
  }

  // --- ACCOUNT TYPE SWITCHER (Login / Signup) ---
  function initAccountTypeSwitchers() {
    const pills = document.querySelectorAll('.account-type-pill');
    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('active'));
        pill.classList.add('active');
        const role = pill.getAttribute('data-role');
        const roleLabel = role === 'client' ? 'Client / B2B' : 'Customer';
        localStorage.setItem('bakery_user_role', role);
        localStorage.setItem('bakery_user_role_label', roleLabel);
        showToast(`Selected ${roleLabel} account`, 'info');
      });
    });

    // Flavor Preferences chips on Signup
    const prefChips = document.querySelectorAll('.pref-chip');
    prefChips.forEach(chip => {
      chip.addEventListener('click', () => {
        chip.classList.toggle('selected');
      });
    });
  }

  // --- DASHBOARD INTERACTIONS & DEDICATED TAB SWITCHING ---
  function initDashboard() {
    const sidebarToggle = document.getElementById('sidebar-toggle-btn');
    const sidebar = document.querySelector('.dashboard-sidebar') || document.querySelector('.client-sidebar');

    let sidebarBackdrop = document.querySelector('.dashboard-sidebar-backdrop');
    if (!sidebarBackdrop && sidebar) {
      sidebarBackdrop = document.createElement('div');
      sidebarBackdrop.className = 'dashboard-sidebar-backdrop';
      document.body.appendChild(sidebarBackdrop);
    }

    if (sidebarToggle && sidebar) {
      sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        if (sidebarBackdrop) {
          sidebarBackdrop.classList.toggle('active', sidebar.classList.contains('open'));
        }
      });

      if (sidebarBackdrop) {
        sidebarBackdrop.addEventListener('click', () => {
          sidebar.classList.remove('open');
          sidebarBackdrop.classList.remove('active');
        });
      }

      const sidebarCloseBtns = document.querySelectorAll('.sidebar-close-btn, #sidebar-close-btn');
      sidebarCloseBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          sidebar.classList.remove('open');
          if (sidebarBackdrop) {
            sidebarBackdrop.classList.remove('active');
          }
        });
      });
    }

    // Tab Switching System (User & Client Dashboards)
    const navLinks = document.querySelectorAll('.sidebar-menu-list .sidebar-nav-item[href^="#"], .client-menu-list .sidebar-nav-item[href^="#"]');
    const tabContents = document.querySelectorAll('.dashboard-tab-content, .client-tab-content');

    function activateTab(targetId, updateHash = true) {
      if (!targetId || targetId === '#') return;
      const cleanId = targetId.startsWith('#') ? targetId.substring(1) : targetId;
      const targetSection = document.getElementById(cleanId);

      if (targetSection && (targetSection.classList.contains('dashboard-tab-content') || targetSection.classList.contains('client-tab-content'))) {
        // Hide all tab contents
        tabContents.forEach(tab => tab.classList.remove('active'));
        // Show target tab content
        targetSection.classList.add('active');

        // Update active sidebar nav link
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${cleanId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        // Close mobile sidebar if open
        if (sidebar && sidebar.classList.contains('open')) {
          sidebar.classList.remove('open');
          if (sidebarBackdrop) {
            sidebarBackdrop.classList.remove('active');
          }
        }

        // Update URL hash without jumping
        if (updateHash && window.location.hash !== `#${cleanId}`) {
          history.pushState(null, null, `#${cleanId}`);
        }

        // Smooth scroll to top of main content
        const main = document.querySelector('.dashboard-main') || document.querySelector('.client-main');
        if (main) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }

    // Sidebar navigation click handler
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          e.preventDefault();
          activateTab(targetId);
        }
      });
    });

    // In-page tab switch triggers (e.g. Track Order button in table, Quick Actions)
    document.querySelectorAll('[data-tab-target]').forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const target = trigger.getAttribute('data-tab-target');
        if (target) {
          activateTab(target);
        }
      });
    });

    // Handle Direct URL hash or back/forward navigation
    window.addEventListener('hashchange', () => {
      if (window.location.hash) {
        activateTab(window.location.hash, false);
      }
    });

    // Initial tab activation on load
    if (window.location.hash && document.getElementById(window.location.hash.substring(1))) {
      activateTab(window.location.hash, false);
    } else if (tabContents.length > 0) {
      // Default to first tab (usually #overview)
      const firstTab = tabContents[0];
      if (firstTab && firstTab.id) {
        activateTab(firstTab.id, false);
      }
    }

    // Populate Dynamic User Profile Data from Login Session
    function populateDashboardUserData() {
      const storedEmail = localStorage.getItem('bakery_user_email');
      const storedName = localStorage.getItem('bakery_user_name');
      const storedFirstName = localStorage.getItem('bakery_first_name');
      const storedRole = localStorage.getItem('bakery_user_role') || 'user';
      const storedRoleLabel = localStorage.getItem('bakery_user_role_label') || (storedRole === 'client' ? 'Client / B2B' : 'Customer');

      // 1. Customer Dashboard Elements
      const greetingSpan = document.getElementById('user-greeting-firstname');
      const topbarEmail = document.getElementById('user-topbar-email') || document.getElementById('user-topbar-fullname');
      const topbarRole = document.getElementById('user-topbar-role');
      const userAvatarInitial = document.getElementById('user-avatar-initial');
      const settingsNameInput = document.getElementById('user-settings-fullname');
      const settingsEmailInput = document.getElementById('user-settings-email');

      if (greetingSpan) {
        greetingSpan.textContent = storedFirstName || (storedName ? storedName.split(' ')[0] : 'Madeleine');
      }
      if (topbarEmail) {
        topbarEmail.textContent = storedEmail || 'madeleine.dupont@example.com';
        topbarEmail.setAttribute('title', storedEmail || 'madeleine.dupont@example.com');
      }
      if (topbarRole) {
        topbarRole.textContent = storedRoleLabel;
      }
      if (userAvatarInitial) {
        const initialSrc = storedFirstName || storedName || storedEmail || 'M';
        userAvatarInitial.textContent = initialSrc.trim().charAt(0).toUpperCase();
      }
      if (settingsNameInput) {
        settingsNameInput.value = storedName || 'Madeleine Dupont';
      }
      if (settingsEmailInput) {
        settingsEmailInput.value = storedEmail || 'madeleine.dupont@example.com';
      }

      // 2. Client / B2B Dashboard Elements
      const clientTopbarEmail = document.getElementById('client-topbar-email') || document.getElementById('client-topbar-fullname');
      const clientTopbarRole = document.getElementById('client-topbar-role');
      const clientAvatarInitial = document.getElementById('client-avatar-initial');
      const clientConciergeEntity = document.getElementById('client-concierge-entity');
      const clientSettingsNameInput = document.getElementById('client-settings-fullname');
      const clientSettingsEmailInput = document.getElementById('client-settings-email');

      if (clientTopbarEmail) {
        clientTopbarEmail.textContent = storedEmail || 'accounts@grandelysee.com';
        clientTopbarEmail.setAttribute('title', storedEmail || 'accounts@grandelysee.com');
      }
      if (clientTopbarRole) {
        clientTopbarRole.textContent = storedRoleLabel;
      }
      if (clientAvatarInitial) {
        const clientInitialSrc = storedFirstName || storedName || storedEmail || 'A';
        clientAvatarInitial.textContent = clientInitialSrc.trim().charAt(0).toUpperCase();
      }
      if (clientConciergeEntity) {
        clientConciergeEntity.textContent = storedName || 'Grand Elysée Events';
      }
      if (clientSettingsNameInput) {
        clientSettingsNameInput.value = storedName || 'Grand Elysée Events';
      }
      if (clientSettingsEmailInput) {
        clientSettingsEmailInput.value = storedEmail || 'accounts@grandelysee.com';
      }
    }

    populateDashboardUserData();

    // Customer Settings Form Save Handler
    const userSettingsForm = document.getElementById('user-settings-form');
    if (userSettingsForm) {
      userSettingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        const newName = document.getElementById('user-settings-fullname')?.value.trim();
        const newEmail = document.getElementById('user-settings-email')?.value.trim();
        if (newName) {
          localStorage.setItem('bakery_user_name', newName);
          localStorage.setItem('bakery_first_name', newName.split(' ')[0]);
        }
        if (newEmail) {
          localStorage.setItem('bakery_user_email', newEmail);
        }
        populateDashboardUserData();
        showToast('Profile & delivery details updated successfully!', 'success');
      });
    }

    // Client Settings Form Save Handler
    const clientSettingsForm = document.getElementById('client-settings-form');
    if (clientSettingsForm) {
      clientSettingsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        const newName = document.getElementById('client-settings-fullname')?.value.trim();
        const newEmail = document.getElementById('client-settings-email')?.value.trim();
        if (newName) {
          localStorage.setItem('bakery_user_name', newName);
          localStorage.setItem('bakery_first_name', newName.split(' ')[0]);
        }
        if (newEmail) {
          localStorage.setItem('bakery_user_email', newEmail);
        }
        populateDashboardUserData();
        showToast('Corporate settings updated successfully!', 'success');
      });
    }

    // Route other interior dashboard links, buttons, icons, and actions to 404.html (excluding sidebar menus and mobile sidebar toggle)
    const dashboardMainContainers = document.querySelectorAll('.dashboard-main, .client-main');
    dashboardMainContainers.forEach(container => {
      container.addEventListener('click', (e) => {
        const target = e.target.closest('a, button, i, svg, [data-action], [onclick], .quick-action-card, .offer-promo-card, .promo-tag-code, .stat-card-icon, .product-card, .wishlist-card, .wishlist-folder-card, .paired-item-card, .order-filter-btn, .spending-stat-card');
        if (!target) return;

        // Allow mobile sidebar toggle button
        if (target.id === 'sidebar-toggle-btn' || target.closest('#sidebar-toggle-btn')) {
          return;
        }

        // Allow settings save buttons
        if (target.closest('#user-settings-form, #client-settings-form') && (target.type === 'submit' || target.getAttribute('type') === 'submit')) {
          return;
        }

        // Form controls allow focus/editing
        if (['input', 'select', 'textarea', 'label', 'option'].includes(target.tagName.toLowerCase())) {
          return;
        }

        e.preventDefault();
        e.stopImmediatePropagation();
        window.location.href = '404.html';
      }, true);

      container.addEventListener('submit', (e) => {
        if (e.target.id === 'user-settings-form' || e.target.id === 'client-settings-form') {
          return;
        }
        e.preventDefault();
        e.stopImmediatePropagation();
        window.location.href = '404.html';
      });
    });
  }

  // --- NAVBAR SCROLL & MOBILE MENU ---
  function initNavbar() {
    const navbar = document.querySelector('.bakery-navbar');
    const hamburger = document.querySelector('.hamburger-btn');
    const drawer = document.querySelector('.mobile-nav-drawer');
    const backdrop = document.querySelector('.nav-backdrop');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });

    if (hamburger && drawer && backdrop) {
      const closeMobileDrawer = () => {
        hamburger.classList.remove('active');
        drawer.classList.remove('open');
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
      };

      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        drawer.classList.toggle('open');
        backdrop.classList.toggle('active');
        document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
      });

      backdrop.addEventListener('click', closeMobileDrawer);

      const drawerCloseBtn = drawer.querySelector('.mobile-drawer-close-btn');
      if (drawerCloseBtn) {
        drawerCloseBtn.addEventListener('click', closeMobileDrawer);
      }

      drawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMobileDrawer);
      });
    }

    // Cart Drawer Toggle / Cart Button Redirection to 404
    const cartToggles = document.querySelectorAll('.cart-toggle-btn');
    cartToggles.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        window.location.href = '404.html';
      });
    });
  }

  // --- PASSWORD VISIBILITY TOGGLE ---
  function initPasswordToggles() {
    document.querySelectorAll('.password-toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const wrap = btn.closest('.password-input-wrap');
        if (!wrap) return;
        const input = wrap.querySelector('input');
        const icon = btn.querySelector('i');
        if (!input) return;

        if (input.type === 'password') {
          input.type = 'text';
          if (icon) {
            icon.classList.remove('fa-eye');
            icon.classList.add('fa-eye-slash');
          }
        } else {
          input.type = 'password';
          if (icon) {
            icon.classList.remove('fa-eye-slash');
            icon.classList.add('fa-eye');
          }
        }
      });
    });
  }

  // --- GLOBAL 404 REDIRECTION FOR ALL CONTENT BUTTONS, LINKS & ICONS ---
  function initGlobal404Redirection() {
    const path = window.location.pathname.toLowerCase();
    const isExcludedPage = path.endsWith('login.html') || 
                           path.endsWith('signup.html') || 
                           path.endsWith('404.html') ||
                           document.getElementById('bakery-login-form') || 
                           document.getElementById('bakery-signup-form');

    if (isExcludedPage) return;

    // Both dashboards have their own isolated handling in initDashboard()
    const isDashboard = document.querySelector('.dashboard-layout, .client-layout, .dashboard-main, .client-main');
    if (isDashboard) return;

    // Global listener on document in capturing phase to intercept all buttons, links, and icons
    document.addEventListener('click', (e) => {
      const target = e.target.closest('a, button, i, svg, [data-action], [onclick], .social-icon-btn, .category-card, .product-card, .event-service-card, .blog-card, .baker-card, .trending-tag, .banner-pill, .cake-pill, .product-wishlist-btn, .add-to-cart-btn, .quick-action-card, .icon-box, .stat-card-icon, .quick-action-icon, .stage-icon, .category-btn-icon, .paired-item-card, .wishlist-folder-card');
      if (!target) return;

      // 1. Account Icon & Cart Button in Navbar redirect to 404
      if (target.closest('.nav-action-btn, .cart-toggle-btn, [title="Account"], [title="View Cart"]')) {
        e.preventDefault();
        e.stopImmediatePropagation();
        window.location.href = '404.html';
        return;
      }

      // 2. Exclude Main Nav links, Brand logo, Mobile Drawer, Hamburger button
      if (target.closest('.bakery-navbar, .mobile-nav-drawer, .nav-backdrop, .nav-brand, .mobile-drawer-brand, .hamburger-btn')) {
        return;
      }

      // 3. Footer links handling:
      if (target.closest('.bakery-footer, footer')) {
        const link = target.closest('a');
        if (!link) return;
        const href = (link.getAttribute('href') || '').trim().toLowerCase();

        // Allow navigation only for the primary 5 pages and root logo
        const validPages = ['index.html', 'about.html', 'services.html', 'blog.html', 'contact.html'];
        const isValidNavPage = validPages.some(page => href === page || href.endsWith('/' + page));
        if (isValidNavPage) {
          return;
        }

        // All other footer links (Socials, Shop Fresh, Phone, Email, Map button, Legal links, #) redirect to 404
        e.preventDefault();
        e.stopImmediatePropagation();
        window.location.href = '404.html';
        return;
      }

      // 4. Exclude Cart Close button & Password visibility toggle
      if (target.id === 'cart-close-btn' || target.classList.contains('cart-close-btn') || target.closest('#cart-close-btn') || target.classList.contains('password-toggle-btn') || target.closest('.password-toggle-btn')) {
        return;
      }

      // 5. If inside a form and is submit trigger, let form submit handler perform validation first
      const form = target.closest('form');
      if (form && (target.type === 'submit' || target.getAttribute('type') === 'submit' || (target.tagName.toLowerCase() === 'button' && !target.getAttribute('type')))) {
        return;
      }

      // 6. Allow standard form input fields & selects
      if (['input', 'select', 'textarea', 'label', 'option'].includes(target.tagName.toLowerCase())) {
        return;
      }

      // 7. All other clicked buttons, links, and icons redirect to 404.html
      e.preventDefault();
      e.stopImmediatePropagation();
      window.location.href = '404.html';
    }, true);
  }

  // --- GLOBAL EXPORTS ---
  window.Bakery = {
    addToCart,
    removeFromCart,
    changeQty: updateCartQuantity,
    toggleWishlist,
    openQuickView,
    closeQuickView,
    showToast
  };

  // --- INITIALIZE ALL ON DOM READY ---
  document.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initCountdown();
    initCounters();
    initTimelineAnimations();
    initFAQ();
    initCakeEstimator();
    initSubscriptionSwitcher();
    initProductFilters();
    initFormValidations();
    initPasswordToggles();
    initAccountTypeSwitchers();
    initDashboard();
    initGlobal404Redirection();

    // Initial cart & wishlist rendering
    updateCartUI();
    updateWishlistUI();
  });
})();
