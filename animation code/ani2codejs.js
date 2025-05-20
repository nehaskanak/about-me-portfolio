const detailsElements = document.querySelectorAll('details');

detailsElements.forEach((detail) => {
  detail.addEventListener('toggle', () => {
    if (detail.open) {
      // Close other open details
      detailsElements.forEach((el) => {
        if (el !== detail && el.open) {
          el.removeAttribute('open');
        }
      });
    }
  });
});
