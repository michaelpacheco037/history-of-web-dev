// Use an original project image if a linked web image cannot load.
const images = document.querySelectorAll('img[data-fallback]');

images.forEach(function (image) {
  function useFallback() {
    if (image.dataset.fallback) {
      const fallback = image.dataset.fallback;
      image.alt = image.dataset.fallbackAlt;
      delete image.dataset.fallback;
      image.src = fallback;

      // The fallback image has a different source from the linked image.
      const credit = image.closest('figure').querySelector('.image-credit');
      credit.textContent = 'Image from the original project.';
      const caption = image.closest('figure').querySelector('.image-caption');
      caption.textContent = image.dataset.fallbackCaption;
    } else {
      image.closest('figure').classList.add('image-missing');
    }
  }

  image.addEventListener('error', useFallback);

  // Also handle an image that failed before this deferred script ran.
  if (image.complete && image.naturalWidth === 0) {
    useFallback();
  }
});

// A small example of JavaScript changing a page, in chapter 2.
const demoButton = document.getElementById('demo-button');
const demoMessage = document.getElementById('demo-message');

if (demoButton && demoMessage) {
  demoButton.hidden = false;
  demoButton.addEventListener('click', function () {
    const changed = demoMessage.classList.toggle('changed');
    demoMessage.textContent = changed ? 'Same page. A new greeting!' : 'Hello, world!';
    demoButton.textContent = changed ? 'Reset the greeting' : 'Change the greeting';
  });
}
