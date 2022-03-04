const searchDropdownContent = document.querySelector(".search-dropdown-content");
const searchDropdownBtn = document.querySelector(".search-dropdown-btn");
function searchDropdown() {
    if (searchDropdownContent.className.indexOf("w3-show") == -1) { 
        searchDropdownContent.className += " w3-show";
    } else {
        searchDropdownContent.className = searchDropdownContent.className.replace(" w3-show", "");
    }
}

searchDropdownBtn.addEventListener("click", searchDropdown);