// #region Preloader

window.addEventListener("load", () => {
    const loader = document.querySelector(".preloader");
    loader.classList.add("hidden");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
    });
});

window.addEventListener("load", () => {
    console.log("Page loaded");
    const loader = document.querySelector(".preloader");
    console.log("Preloader found:", loader);
    loader.classList.add("hidden");
    loader.addEventListener("transitionend", () => {
        console.log("Transition ended");
        document.body.removeChild(loader);
    });
});
  
// #endregion

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

// #region Interatividade Nav e Footer
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('#navbar-content ul a');
    const footerLinks = document.querySelectorAll('.menu a');

    function removeActiveClasses() {
        navLinks.forEach(link => link.classList.remove('active'));
        footerLinks.forEach(link => link.classList.remove('active'));
    }

    function addActiveClass(hash) {
        document.querySelectorAll(`a[href="${hash}"]`).forEach(link => link.classList.add('active'));
    }

    function handleLinkClick(event) {
        const hash = event.currentTarget.getAttribute('href');
        removeActiveClasses();
        addActiveClass(hash);
    }

    navLinks.forEach(link => link.addEventListener('click', handleLinkClick));
    footerLinks.forEach(link => link.addEventListener('click', handleLinkClick));
});

// #endregion


// #region Abrir em outra guia

function openInNewTab(url) {
    window.open(url, '_blank');
}

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

// #region Menu Patrocinios

const OptionElements = document.querySelectorAll(".option");
const CreativityLogo = document.querySelector(".creativity_logo");
const DumontLogo = document.querySelector(".dumont_logo");
const RyndackLogo = document.querySelector(".ryndack_logo");
const parceiroT1 = document.querySelector(".parceiro_titulo_1");
const parceiroT2 = document.querySelector(".parceiro_titulo_2");
const parceiroT3 = document.querySelector(".parceiro_titulo_3");
const parceiroD1 = document.querySelector(".parceiro_descricao_1");
const parceiroD2 = document.querySelector(".parceiro_descricao_2");
const parceiroD3 = document.querySelector(".parceiro_descricao_3");
const btnCreativity = document.querySelector(".btn_creativity");
const btnDumont = document.querySelector(".btn_dumont");
const btnRyndack = document.querySelector(".btn_ryndack");

function showCreativity(){
    addActive(CreativityLogo);
    addActive(parceiroT1);
    addActive(parceiroD1);
    addActive(btnCreativity)

    removeActive(DumontLogo);
    removeActive(parceiroT2);
    removeActive(parceiroD2);
    removeActive(btnDumont);
    removeActive(RyndackLogo);
    removeActive(parceiroT3);
    removeActive(parceiroD3);
    removeActive(btnRyndack);
}

function showDumont(){
    addActive(DumontLogo);
    addActive(parceiroT2);
    addActive(parceiroD2);
    addActive(btnDumont)

    removeActive(CreativityLogo);
    removeActive(parceiroT1);
    removeActive(parceiroD1);
    removeActive(btnCreativity)
    removeActive(RyndackLogo);
    removeActive(parceiroT3);
    removeActive(parceiroD3);
    removeActive(btnRyndack);
}

function showRyndack(){
    addActive(RyndackLogo);
    addActive(parceiroT3);
    addActive(parceiroD3);
    addActive(btnRyndack)

    removeActive(CreativityLogo);
    removeActive(parceiroT1);
    removeActive(parceiroD1);
    removeActive(btnCreativity)
    removeActive(DumontLogo);
    removeActive(parceiroT2);
    removeActive(parceiroD2);
    removeActive(btnDumont)
}

function addActive(element) {
    if (element) {
        element.classList.add("active");
    }
}

function removeActive(element) {
    if (element) {
        element.classList.remove("active");
    }
}

if (OptionElements && OptionElements.length > 0) {
    OptionElements.forEach(function (element) {
        element.addEventListener("click", function () {
            const selectedValue = parseInt(this.getAttribute("value"));

            removeActive(CreativityLogo);
            removeActive(parceiroT1);
            removeActive(parceiroD1);
            removeActive(btnCreativity);
            removeActive(DumontLogo);
            removeActive(parceiroT2);
            removeActive(parceiroD2);
            removeActive(btnDumont);
            removeActive(RyndackLogo);
            removeActive(parceiroT3);
            removeActive(parceiroD3);
            removeActive(btnRyndack);

            switch (selectedValue) {
                case 1:
                    showCreativity();
                    break;
                case 2:
                    showDumont();
                    break;
                case 3:
                    showRyndack();
                    break;
                default:
                    break;
            }
        });
    });
}

showCreativity();

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