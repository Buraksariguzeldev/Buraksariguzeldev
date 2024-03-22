document.addEventListener('DOMContentLoaded', function () {
    try {
        /* HTML Kaynakları */
        const kaynakyolu1 = '../bsd_html/1.kaynakmenu.html';

        /* CSS Dosyaları */
        const cssUrl1 = '../bsd_css/1.kaynakmenu.css';
        const cssUrl2 = '../bsd_css/3.Renkclass.css';

        /* Favicon */
        const favicon1 = '../../img/bsd_logo.png';

        /* JavaScript Dosyaları */
        const jsUrl1 = '../../icon/all.js';
//      ff
        fetch(kaynakyolu1)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');

                /* Navbar İçeriği */
                const navbarContainer = doc.querySelector('.bsd-navbar10');
                const divContent = navbarContainer.innerHTML;
                console.log(divContent);

                const navbarContainers =
                document.querySelectorAll('#bsd-navbar10');
                navbarContainers.forEach(container => {
                    container.innerHTML = divContent;
                });

                /* Footer İçeriği */
                fetch(kaynakyolu1)
                    .then(response => response.text())
                    .then(data => {
                        const parser = new DOMParser();
                        const doc = parser.parseFromString(data, 'text/html');
                        const footerContainer =
                        doc.querySelector('.bsd-footerbar10');
                        const footerContent = footerContainer.innerHTML;
                        console.log(footerContent);

                        const footerContainers =
                        document.querySelectorAll('#bsd-footerbar10');
                        footerContainers.forEach(container => {
                            container.innerHTML = footerContent;
                        });
                    })
                    .catch(error => {
                        console.error('İkinci Fetch hatası:', error);
                    });
            })
            .catch(error => {
                console.error('İlk Fetch hatası:', error);
            });

        /* CSS Dosyalarını Ekleyin */
        const linkElement1 = document.createElement('link');
        linkElement1.rel = 'stylesheet';
        linkElement1.href = cssUrl1;
        document.head.appendChild(linkElement1);

        const linkElement2 = document.createElement('link');
        linkElement2.rel = 'stylesheet';
        linkElement2.href = cssUrl2;
        document.head.appendChild(linkElement2);

        /* Favicon Ekleyin */
        const linkElementFavicon = document.createElement('link');
        linkElementFavicon.rel = 'shortcut icon';
        linkElementFavicon.type = 'image/x-jpeg'; // veya image/x-icon, image/jpeg, vb. türüne göre değiştirin
        linkElementFavicon.href = favicon1;
        document.head.appendChild(linkElementFavicon);

        /* JavaScript Dosyalarını Ekleyin */
        const scriptElement1 = document.createElement('script');
        scriptElement1.src = jsUrl1;
        document.head.appendChild(scriptElement1);
        
    } catch (error) {
        console.error('Genel hata:', error);
    }
});
