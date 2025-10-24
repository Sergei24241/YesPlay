const passwordInput = document.getElementById('password');
const toggleBtn = document.getElementById('togglePassword');

toggleBtn?.addEventListener('click', () => {
  const isPassword = passwordInput.type === 'password';
  passwordInput.type = isPassword ? 'text' : 'password';
});

const timeBtn = document.querySelectorAll('.time-btn');
timeBtn.forEach(btn => {
  btn?.addEventListener('click', () => {
    timeBtn.forEach(btn => btn.classList.remove('active-btn'));
    btn.classList.add('active-btn');
  });
});

const catBtn = document.querySelectorAll('.cat-btn');
catBtn.forEach(btn => {
  btn?.addEventListener('click', () => {
    catBtn.forEach(btn => btn.classList.remove('activeCat-btn'));
    btn.classList.add('activeCat-btn');
  });
});
