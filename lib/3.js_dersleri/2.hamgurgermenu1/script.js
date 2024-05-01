function toggleMenu() {
    var menu = document.getElementById("menu");
    var menuToggleIcon = document.querySelector('.menu-toggle i');

    if (menu.classList.contains('active')) {
        menu.classList.remove('active');
        menuToggleIcon.classList.remove('fa-times');
        menuToggleIcon.classList.add('fa-bars');
    } else {
        menu.classList.add('active');
        menuToggleIcon.classList.remove('fa-bars');
        menuToggleIcon.classList.add('fa-times');
    }
}