// first import.
import Headroom from 'js/headroom';

document.addEventListener('DOMContentLoaded', function() {
  // grab the header element.
  const Header = document.querySelector('header');

  // construct an instance of Headroom, passing the header element.
  if (Header) {
    const headroom = new Headroom(Header, {
      offset: 0,
      tolerance: {
        up: 0,
        down: 0
      },
      classes: {
        initial: 'header--fixed',
        top: 'top',
        notTop: 'not-top'
      }
    });

    // initialise
    headroom.init();
  }

  // Simple scrollytelling behavior for paper pages.
  const scrollyBlocks = document.querySelectorAll('.scrolly-prototype');
  scrollyBlocks.forEach((block) => {
    const kicker = block.querySelector('.scrolly-kicker');
    const title = block.querySelector('.scrolly-title');
    const caption = block.querySelector('.scrolly-caption');
    const image = block.querySelector('.scrolly-image');
    const steps = Array.from(block.querySelectorAll('.scrolly-step'));

    if (!steps.length) return;

    const setActive = (el) => {
      steps.forEach((step) => step.classList.remove('active'));
      el.classList.add('active');

      if (kicker && el.dataset.kicker) kicker.textContent = el.dataset.kicker;
      if (title && el.dataset.title) title.textContent = el.dataset.title;
      if (caption && el.dataset.caption) caption.textContent = el.dataset.caption;
      if (image && el.dataset.image) image.src = el.dataset.image;
    };

    setActive(steps[0]);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target);
          }
        });
      },
      {
        threshold: 0.65,
        rootMargin: '0px 0px -15% 0px'
      }
    );

    steps.forEach((step) => observer.observe(step));
  });
});
