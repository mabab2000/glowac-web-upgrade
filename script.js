document.addEventListener('DOMContentLoaded', function() {
  // Hamburger menu
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if(navToggle && navLinks) {
    navToggle.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });
  }

  // Dropdown submenus for mobile
  if (window.innerWidth <= 700) {
    document.querySelectorAll('.dropdown-sub > a').forEach(function(link) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const parent = this.parentElement;
        parent.classList.toggle('open');
      });
    });
  }
});