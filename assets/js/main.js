/* ============================================================
   61 KINGDOM — Global JavaScript
   Handles: scroll reveal, nav transparency, smooth scroll
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── SCROLL REVEAL ── */
  const reveals = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  }, { threshold: 0.08 });
  reveals.forEach(el => revealObserver.observe(el));

  /* ── NAV: transparent on hero pages, solid on scroll ── */
  const nav = document.getElementById('mainNav');
  if (nav) {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        nav.classList.remove('transparent');
        nav.classList.add('scrolled');
      } else {
        nav.classList.add('transparent');
        nav.classList.remove('scrolled');
      }
    };
    // Only start transparent if page has a hero
    if (document.querySelector('.hero')) {
      nav.classList.add('transparent');
    }
    window.addEventListener('scroll', handleScroll);
  }

  /* ── FILE UPLOAD LABEL ── */
  const photoFile = document.getElementById('photoFile');
  if (photoFile) {
    photoFile.addEventListener('change', function () {
      const file = this.files[0];
      const label = document.getElementById('fileLabel');
      const nameDisplay = document.getElementById('fileName');
      if (file && label) {
        label.textContent = 'File selected';
        if (nameDisplay) {
          nameDisplay.textContent = file.name;
          nameDisplay.style.display = 'block';
        }
      }
    });
  }

  /* ── FORM SUBMIT FEEDBACK ── */
  const forms = document.querySelectorAll('form[data-feedback]');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (btn) {
        btn.textContent = 'Submitted ✓';
        btn.style.background = '#4a7c5a';
        btn.disabled = true;
      }
    });
  });

});
