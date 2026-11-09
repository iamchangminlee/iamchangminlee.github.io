(() => {
  const hoverPointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const previews = [];

  for (const row of document.querySelectorAll('.pub-row')) {
    const trigger = row.querySelector('.teaser-trigger');
    const panel = row.querySelector('.teaser-preview');
    const image = panel?.querySelector('img');
    if (!trigger || !panel || !image) continue;

    let dismissed = false;
    let fullImageRequested = false;

    const close = (restoreFocus = false, suppressHover = false) => {
      row.classList.remove('is-previewing');
      panel.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
      dismissed = suppressHover && row.matches(':hover');
      if (restoreFocus) trigger.focus({ preventScroll: true });
    };

    const open = (moveFocus = false) => {
      dismissed = false;
      panel.hidden = false;
      if (moveFocus || row.contains(document.activeElement)) {
        panel.focus({ preventScroll: true });
      }
      row.classList.add('is-previewing');
      trigger.setAttribute('aria-expanded', 'true');

      if (!fullImageRequested && image.dataset.fullSrc) {
        fullImageRequested = true;
        const fullImage = new Image();
        fullImage.addEventListener('load', () => { image.src = fullImage.src; });
        fullImage.addEventListener('error', () => { fullImageRequested = false; });
        fullImage.src = image.dataset.fullSrc;
      }
    };

    trigger.addEventListener('pointerenter', (event) => {
      if (hoverPointer.matches && event.pointerType === 'mouse' && !dismissed) open();
    });
    trigger.addEventListener('click', () => open(true));
    panel.addEventListener('click', () => close(true, true));
    row.addEventListener('pointerleave', (event) => {
      dismissed = false;
      if (event.pointerType === 'mouse') close(panel === document.activeElement);
    });
    row.addEventListener('focusout', (event) => {
      if (panel.hidden) return;
      if (!(event.relatedTarget instanceof Node && row.contains(event.relatedTarget))) {
        close(false, row.matches(':hover'));
      }
    });
    previews.push({ panel, close });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    for (const { panel, close } of previews) {
      if (!panel.hidden) close(panel.contains(document.activeElement), true);
    }
  });
})();
