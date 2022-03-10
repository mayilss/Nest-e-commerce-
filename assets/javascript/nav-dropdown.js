const navDropdownBtn = document.querySelector('.nav-dropdown-btn');
const navDropdownContent = document.querySelector('.nav-dropdown-btn-content');

function toggleNavDropdown() {
    navDropdownContent.classList.toggle('nav-dropdown-active');
}

navDropdownBtn.addEventListener('click', toggleNavDropdown);