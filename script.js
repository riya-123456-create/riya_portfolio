/* ===================================================================
   Riya Rawat - Personal Portfolio Script
   Interactivity: Theme Switcher, Mobile Nav, ScrollSpy, Copy Email, Form
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  // -----------------------------------------------------------------
  // 1. Dynamic Current Year in Footer
  // -----------------------------------------------------------------
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // -----------------------------------------------------------------
  // 2. Dark / Light Theme Toggle (with LocalStorage)
  // -----------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('riya_portfolio_theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Set initial theme
  if (storedTheme) {
    document.documentElement.setAttribute('data-theme', storedTheme);
  } else if (prefersDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('riya_portfolio_theme', newTheme);
    });
  }

  // -----------------------------------------------------------------
  // 3. Mobile Navigation Menu Toggle
  // -----------------------------------------------------------------
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  const toggleMenu = () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburgerBtn.classList.toggle('active', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', isOpen);
  };

  const closeMenu = () => {
    navMenu.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  };

  if (hamburgerBtn && navMenu) {
    hamburgerBtn.addEventListener('click', toggleMenu);

    // Close menu when clicking any nav link
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        closeMenu();
      }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMenu();
      }
    });
  }

  // -----------------------------------------------------------------
  // 4. ScrollSpy: Highlight Active Nav Link on Scroll
  // -----------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');

  const handleScrollSpy = () => {
    const scrollY = window.pageYOffset + 120;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop;
      const sectionId = current.getAttribute('id');
      const targetLink = document.querySelector(`.nav-menu a[href*="#${sectionId}"]`);

      if (targetLink) {
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          targetLink.classList.add('active');
        }
      }
    });
  };

  window.addEventListener('scroll', handleScrollSpy, { passive: true });

  // -----------------------------------------------------------------
  // 5. One-Click Copy Email to Clipboard
  // -----------------------------------------------------------------
  const copyBtn = document.getElementById('copy-email-btn');
  const emailElement = document.getElementById('email-address');

  if (copyBtn && emailElement) {
    copyBtn.addEventListener('click', async () => {
      const emailToCopy = emailElement.textContent.trim();

      try {
        await navigator.clipboard.writeText(emailToCopy);
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span class="copy-text">Copied!</span>
        `;
        copyBtn.style.borderColor = 'var(--accent-success)';
        copyBtn.style.color = 'var(--accent-success)';

        setTimeout(() => {
          copyBtn.innerHTML = originalText;
          copyBtn.style.borderColor = '';
          copyBtn.style.color = '';
        }, 2200);
      } catch (err) {
        console.warn('Could not copy email to clipboard', err);
      }
    });
  }

  // -----------------------------------------------------------------
  // 6. Contact Form Interactive Feedback
  // -----------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  if (contactForm && formFeedback) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const senderName = nameInput ? nameInput.value.trim() : 'Friend';

      // Provide clear friendly client-side feedback
      formFeedback.className = 'form-feedback success';
      formFeedback.innerHTML = `
        Thank you, <strong>${escapeHtml(senderName)}</strong>! Your message preview was submitted.
        <br><small style="opacity: 0.85;">(Note: To receive real emails directly into your inbox, connect a service like Formspree or EmailJS - see README.md)</small>
      `;
      formFeedback.style.display = 'block';

      // Reset form
      contactForm.reset();

      // Automatically hide notice after 8 seconds
      setTimeout(() => {
        formFeedback.style.display = 'none';
      }, 8000);
    });
  }

  // Helper to prevent basic XSS in client-rendered feedback
  function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }
});
