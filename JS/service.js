document.getElementById('year').textContent = new Date().getFullYear();

// ===== DARK/LIGHT MODE TOGGLE =====
function toggleTheme() {
    const body = document.body;
    const themeBtn = document.getElementById('themeToggle');
    
    body.classList.toggle('green-mode');
    
    if (body.classList.contains('green-mode')) {
        themeBtn.innerHTML = '☀️ Light Mode';
        localStorage.setItem('theme', 'dark');
    } else {
        themeBtn.innerHTML = '☘️ Green Mode';
        localStorage.setItem('theme', 'light');
    }
}

function loadThemePreference() {
    const savedTheme = localStorage.getItem('theme');
    const themeBtn = document.getElementById('themeToggle');
    
    if (savedTheme === 'green') {
        document.body.classList.add('green-mode');
        if (themeBtn) themeBtn.innerHTML = '☀️ Light Mode';
    } else {
        document.body.classList.remove('green-mode');
        if (themeBtn) themeBtn.innerHTML = '☘️ Green Mode';
    }
}

// ===== PUSH SOLUTION MENU FUNCTIONS =====
const sideMenuBtn = document.getElementById('sideMenuBtn');
const sideMenu = document.getElementById('sideMenu');
const mainContentWrapper = document.getElementById('mainContentWrapper');

function openMenu() {
    sideMenu.classList.add('open');
    sideMenuBtn.classList.add('active');
    mainContentWrapper.classList.add('pushed');
}

function closeMenu() {
    sideMenu.classList.remove('open');
    sideMenuBtn.classList.remove('active');
    mainContentWrapper.classList.remove('pushed');
}

function toggleMenu() {
    if (mainContentWrapper.classList.contains('pushed')) {
        closeMenu();
    } else {
        openMenu();
    }
}

// ===== CLOSE MENU WHEN CLICKING OUTSIDE =====
function handleOutsideClick(event) {
    const isMenuOpen = mainContentWrapper.classList.contains('pushed');
    
    if (!isMenuOpen) return;
    
    if (!sideMenu.contains(event.target) && !sideMenuBtn.contains(event.target)) {
        closeMenu();
    }
}

// ===== CLOSE ON ESCAPE KEY =====
function handleEscapeKey(event) {
    if (event.key === 'Escape') {
        const isMenuOpen = mainContentWrapper.classList.contains('pushed');
        if (isMenuOpen) {
            closeMenu();
        }
    }
}

// ===== SWIPE GESTURES FOR MOBILE =====
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(event) {
    touchStartX = event.changedTouches[0].screenX;
}

function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].screenX;
    handleSwipe();
}

function handleSwipe() {
    const swipeDistance = touchEndX - touchStartX;
    const isMenuOpen = mainContentWrapper.classList.contains('pushed');
    
    // Right swipe (open menu)
    if (swipeDistance > 50 && !isMenuOpen) {
        openMenu();
    }
    
    // Left swipe (close menu)
    if (swipeDistance < -50 && isMenuOpen) {
        closeMenu();
    }
}

// ===== KEYBOARD SHORTCUT (Ctrl+M) =====
function handleKeyboardShortcut(event) {
    if (event.ctrlKey && event.key === 'm') {
        event.preventDefault();
        toggleMenu();
    }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
    // Load theme preference
    loadThemePreference();
    
    // Add event listeners
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn) {
        themeBtn.addEventListener('click', toggleTheme);
    }
    
    if (sideMenuBtn) {
        sideMenuBtn.addEventListener('click', toggleMenu);
    }
    
    document.addEventListener('click', handleOutsideClick);
    document.addEventListener('keydown', handleEscapeKey);
    document.addEventListener('keydown', handleKeyboardShortcut);
    document.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('touchend', handleTouchEnd);
});

console.log('Push Solution Loaded!');
console.log('Features: Menu pushes content to the right');
console.log('Tips: Click the green button, swipe from left edge, or press Ctrl+M');


// Animation while scrolling
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      } else {
        entry.target.classList.remove('is-visible');
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: '0px 0px -80px 0px'
  }
);

reveals.forEach(el => observer.observe(el));



// Page Transition Effect
document.querySelectorAll('a[href]').forEach(link => {
  const url = link.getAttribute('href');

  if (url.startsWith('#') || link.target === '_blank') return;

  link.addEventListener('click', e => {
    e.preventDefault();

    document.querySelector('.page').classList.add('page-exit');

    setTimeout(() => {
      window.location.href = url;
    }, 400);
  });
});
