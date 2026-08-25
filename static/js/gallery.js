(function () {
  'use strict';

  /* ── 1. Gallery orientation grouping ───────────────────────────────────
     After all images in a .talk-gallery load, split figures into two
     sub-rows: one for landscape (4:3 crop), one for portrait (full).
     Each row is only created if photos of that type exist.
  ────────────────────────────────────────────────────────────────────── */

  function isPortrait(img) {
    return img.naturalHeight > img.naturalWidth * 1.15;
  }

  function processGallery(gallery) {
    var figures = Array.from(gallery.querySelectorAll(':scope > figure'));
    var images  = figures.map(function (f) { return f.querySelector('img'); }).filter(Boolean);
    if (!images.length) return;

    // 2 photos or fewer look fine in the default grid — skip regrouping
    if (figures.length <= 2) {
      attachLightbox(gallery);
      return;
    }

    var loaded = 0;

    function onAllLoaded() {
      var landscapes = [];
      var portraits  = [];

      figures.forEach(function (fig) {
        var img = fig.querySelector('img');
        if (img && isPortrait(img)) {
          portraits.push(fig);
        } else {
          landscapes.push(fig);
        }
      });

      // Clear gallery and rebuild with grouped rows
      gallery.innerHTML = '';
      // Switch to flex-column so rows stack vertically regardless of grid settings
      gallery.style.display = 'flex';
      gallery.style.flexDirection = 'column';
      gallery.style.gap = '1.5rem';

      if (landscapes.length) {
        var lRow = document.createElement('div');
        lRow.className = 'tg-row tg-row--landscape';
        landscapes.forEach(function (f) { lRow.appendChild(f); });
        gallery.appendChild(lRow);
      }

      if (portraits.length) {
        var pRow = document.createElement('div');
        pRow.className = 'tg-row tg-row--portrait';
        portraits.forEach(function (f) { pRow.appendChild(f); });
        gallery.appendChild(pRow);
      }

      // Re-attach lightbox after DOM rebuild
      attachLightbox(gallery);
    }

    images.forEach(function (img) {
      if (img.complete && img.naturalWidth > 0) {
        loaded++;
        if (loaded === images.length) onAllLoaded();
      } else {
        img.addEventListener('load', function () {
          loaded++;
          if (loaded === images.length) onAllLoaded();
        });
        // In case the image errors out, still count it
        img.addEventListener('error', function () {
          loaded++;
          if (loaded === images.length) onAllLoaded();
        });
      }
    });
  }

  document.querySelectorAll('.talk-gallery').forEach(processGallery);

  /* ── 2. Lightbox ────────────────────────────────────────────────────────
     Click any gallery image (or .talk-featured-pair) to open full-screen.
     Click backdrop or press Escape to close.
  ────────────────────────────────────────────────────────────────────── */

  var overlay = document.createElement('div');
  overlay.id = 'gallery-lightbox';
  overlay.innerHTML =
    '<div class="gl-backdrop"></div>' +
    '<div class="gl-stage">' +
    '  <button class="gl-close" aria-label="Close">&times;</button>' +
    '  <img class="gl-img" src="" alt="" />' +
    '  <p class="gl-caption"></p>' +
    '</div>';
  document.body.appendChild(overlay);

  var glImg     = overlay.querySelector('.gl-img');
  var glCaption = overlay.querySelector('.gl-caption');

  function openLightbox(src, alt, caption) {
    glImg.src = src;
    glImg.alt = alt || '';
    glCaption.textContent = caption || '';
    overlay.classList.add('gl-open');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    overlay.classList.remove('gl-open');
    document.body.style.overflow = '';
    setTimeout(function () { glImg.src = ''; }, 300);
  }

  overlay.querySelector('.gl-backdrop').addEventListener('click', closeLightbox);
  overlay.querySelector('.gl-close').addEventListener('click', closeLightbox);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });

  function attachLightbox(root) {
    root.querySelectorAll('img').forEach(function (img) {
      if (img._lightboxAttached) return;
      img._lightboxAttached = true;
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', function () {
        var caption = '';
        var fig = img.closest('figure');
        if (fig) {
          var cap = fig.querySelector('figcaption');
          if (cap) caption = cap.textContent;
        }
        openLightbox(img.src, img.alt, caption);
      });
    });
  }

  function attachBackgroundLightbox(el) {
    if (el._lightboxAttached) return;
    var src = el.getAttribute('data-lightbox-src');
    if (!src) return;

    function openFromElement() {
      openLightbox(
        src,
        el.getAttribute('aria-label') || '',
        el.getAttribute('data-lightbox-caption') || ''
      );
    }

    el._lightboxAttached = true;
    el.addEventListener('click', openFromElement);
    el.addEventListener('keydown', function (event) {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openFromElement();
    });
  }

  // Attach to featured-pair immediately (no regrouping needed)
  document.querySelectorAll('.talk-featured-pair').forEach(attachLightbox);
  document.querySelectorAll('.paper-single .paper-figure').forEach(attachLightbox);
  document.querySelectorAll('.paper-lightbox-trigger').forEach(attachBackgroundLightbox);

})();
