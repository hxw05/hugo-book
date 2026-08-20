(() => {
  'use strict';

  const KEY = 'whx-theme';
  const MODES = ['light', 'dark', 'auto'];
  const LABELS = { light: '浅色', dark: '深色', auto: '自动' };

  const value = document.getElementById('theme-value');
  const link = document.getElementById('theme-toggle');
  if (!value || !link) return;

  const root = document.documentElement;
  const saved = localStorage.getItem(KEY);
  let mode = MODES.includes(saved) ? saved : (MODES.includes(root.dataset.theme) ? root.dataset.theme : 'auto');

  function apply(m) {
    mode = m;
    root.dataset.theme = m;
    value.textContent = LABELS[m];
    localStorage.setItem(KEY, m);
  }

  link.addEventListener('click', (e) => {
    e.preventDefault();
    apply(MODES[(MODES.indexOf(mode) + 1) % MODES.length]);
  });

  apply(mode);
})();
