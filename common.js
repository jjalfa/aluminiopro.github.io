// Menu toggle
document.getElementById('menuToggle').addEventListener('click', function(){
  const nav = document.querySelector('.site-header .main-nav');
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});

// Theme toggle (persist in localStorage)
const themeBtn = document.getElementById('themeToggle');
function setTheme(isDark){
  if(isDark) document.documentElement.classList.add('dark');
  else document.documentElement.classList.remove('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  if(themeBtn) themeBtn.textContent = isDark ? '☀️' : '🌙';
}
if(themeBtn){
  // initialize
  const saved = localStorage.getItem('theme');
  if(saved === 'dark') setTheme(true);
  else setTheme(false);
  themeBtn.addEventListener('click', function(){ setTheme(!document.documentElement.classList.contains('dark')); });
}

// Visit counter using localStorage (increments on homepage load)
function updateVisitCounter(){
  let visits = parseInt(localStorage.getItem('visits')||'0') + 1;
  localStorage.setItem('visits', visits);
  const el = document.getElementById('visitCount');
  if(el) el.textContent = visits;
}


