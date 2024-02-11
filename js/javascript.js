// #region Theme Switcher
function setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}

function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-light');
    } else {
        setTheme('theme-dark');
    }
}

(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
        document.getElementById('theme-switcher-checkbox').checked = false;
    } else {
        setTheme('theme-light');
        document.getElementById('theme-switcher-checkbox').checked = true;
    }
})();
// #endregion

// #region Menubar
function toogleNavbar() {
    const body = document.querySelector('body')
    const navbarContent = document.getElementById('navbar-content')
    const isOpen = navbarContent.classList.contains('open')

    if (isOpen) {
        navbarContent.classList.remove('open')
        body.classList.remove('no-scroll')
    } else {
        navbarContent.classList.add('open')
        body.classList.add('no-scroll')
    }
}

function navigateTo(index) {
    const links = document.querySelectorAll('nav #navbar-content ul li a');
    Array.from(links).forEach((link, linkIndex) => {
        link.classList.remove('active');
        if (linkIndex === index) {
            link.classList.add('active');
        }
    })
    const isMobile = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) < 768;
    if (isMobile) {
        toogleNavbar();
    }
}

// FIXME: Mark the menubar item as active as scroll
/*
document.addEventListener('DOMContentLoaded', _ => {
    const links = document.querySelectorAll('nav #navbar-content ul li a');

    const getActiveSection = () => {
        let activeSection = '';
        const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        links.forEach((item) => {
            const section = document.querySelector(item.getAttribute('href'));
            if (section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                activeSection = item.getAttribute('href');
            }
        });

        return activeSection;
    };

    const setActiveMenuItem = () => {
        const activeSection = getActiveSection();

        links.forEach((item) => {
            if (item.getAttribute('href') === activeSection) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', setActiveMenuItem);
});
*/
// #endregion

// #region Carroseis
/*function carrosseis() {
    $(document).ready(function () {
        const slider = $(".person");
        const slider_obj = $(".comunidade");
        const prevButton = $("#esquerda");
        const nextButton = $("#direita");

        let currentSlide = 0;
        let autoRotationInterval;

        function goToSlide(slideIndex) {
            currentSlide = slideIndex;
            const translateX = -currentSlide * 120; // 120px é a largura de cada quadrado
            slider.css("transform", `translateX(${translateX}px)`);
            slider_obj.css("transform", `translateX(${translateX}px)`);
        }
        //pessoas
        function startAutoRotation() { //inicia rotação 
            autoRotationInterval = setInterval(function () {
                if (currentSlide <= 8) { // tamanho dos quarados
                    goToSlide(currentSlide + 1);
                } else {
                    // Ir suavemente de volta para o primeiro quadrado
                    slider.css("transition", "none");
                    goToSlide(0);
                    setTimeout(function () {
                        slider.css("transition", "transform 0.1s ease-in-out");
                    }, 0);
                }
            }, 2000); // Altere o valor para ajustar a velocidade da rotação
        }

        //obj
        function startAutoRotation_obj() { //inicia rotação 
            autoRotationInterval = setInterval(function () {
                if (currentSlide <= 8) { // tamanho dos quarados
                    goToSlide(currentSlide + 1);
                } else {
                    // Ir suavemente de volta para o primeiro quadrado
                    slider_obj.css("transition", "none");
                    goToSlide(0);
                    setTimeout(function () {
                        slider_obj.css("transition", "transform 0.7s ease-in-out");
                    }, 0);
                }
            }, 2000); // Altere o valor para ajustar a velocidade da rotação
        }

        function stopAutoRotation() {
            clearInterval(autoRotationInterval);
        }

        /*prevButton.click(function () { //seta esqr
            stopAutoRotation();
            if (currentSlide > 0) {
                goToSlide(currentSlide - 1);
            } else {
                // Ir suavemente para o último quadrado
                slider.css("transition", "none");
                goToSlide(8);
                setTimeout(function () {
                    slider.css("transition", "transform 0.5s ease-in-out");
                }, 0);
            }
            startAutoRotation();
        });
    
        nextButton.click(function () { // seta dire
            stopAutoRotation();
            if (currentSlide < 35) {
                goToSlide(currentSlide + 1);
            } else {
                // Ir suavemente de volta para o primeiro quadrado
                slider.css("transition", "none");
                goToSlide(0);
                setTimeout(function () {
                    slider.css("transition", "transform 0.5s ease-in-out");
                }, 0);
            }
            startAutoRotation();
        });

        startAutoRotation();
        startAutoRotation_obj();
    });
}*/
// #endregion

// #region Email
(function email() {
    document.getElementById("patrocinio_button").addEventListener("click", function () {
        // Endereço de email para o destinatário
        var destinatario = "trocar.ideia.projeto@gmail.com";

        // Assunto do email
        var assunto = "Parcerias com O PROJETO";

        // Corpo do email
        var corpoEmail = "";

        // Monta o link de email com os dados
        var linkEmail = "mailto:" + destinatario +
            "?subject=" + encodeURIComponent(assunto) +
            "&body=" + encodeURIComponent(corpoEmail);

        // Abre o cliente de email padrão com os dados preenchidos
        window.location.href = linkEmail;
    });
})();
// #endregion