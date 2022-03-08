const sidebarBtn = document.querySelector('.nav-mobile-button');
const sidebar = document.querySelector('.nav-mobile');
const sidebarItem = document.querySelectorAll('.nav-mobile-item');
const sidebarclose = document.querySelector('.nav-mobile-close-btn');

function toggleSidebar() {
  sidebar.classList.toggle('nav-mobile-active');
}

sidebarBtn.addEventListener('click', toggleSidebar);
sidebarclose.addEventListener('click', toggleSidebar);
sidebarItem.forEach(item => item.addEventListener('click', toggleSidebar));