const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
  const value = event.currentTarget.value.trim();

  outputEl.textContent = value === '' ? 'Anonymous' : value;
});
