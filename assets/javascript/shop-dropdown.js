const shopDropdownBtn = document.getElementById('show-btn');
const shopDropdownContent = document.getElementById('show-content');

function toggleShowDropdown() {
    shopDropdownContent.classList.toggle('active');
}

shopDropdownBtn.addEventListener('click', toggleShowDropdown);

const sortDropdownBtn = document.getElementById('sort-btn');
const sortDropdownContent = document.getElementById('sort-content');

function toggleSortDropdown() {
    sortDropdownContent.classList.toggle('active');
}

sortDropdownBtn.addEventListener('click', toggleSortDropdown);