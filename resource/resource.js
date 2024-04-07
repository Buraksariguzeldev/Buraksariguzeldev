document.addEventListener("DOMContentLoaded", function() {
    var headings = document.querySelectorAll('.heading');

    headings.forEach(function(heading) {
        heading.addEventListener('click', function() {
            var subNav = this.nextElementSibling; // Başlığın bir sonraki kardeş elementi (alt menü)

            // Alt menüyü göster veya gizle
            if (subNav && subNav.classList.contains('sub-nav')) {
                if (subNav.style.display === 'none' || subNav.style.display === '') {
                    subNav.style.display = 'block';
                } else {
                    subNav.style.display = 'none';
                }
            }
        });
    });

    // Sayfa yüklendiğinde tüm alt menüleri kapat
    var subMenus = document.querySelectorAll('.sub-nav');
    subMenus.forEach(function(subMenu) {
        subMenu.style.display = 'none';
    });
});