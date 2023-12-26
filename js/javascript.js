//CARROSSEIS
function carrosseis(){

$(document).ready(function () {
    const slider = $(".person");
    const slider_obj = $(".comunidade");
    const prevButton = $("#esquerda");
    const nextButton = $("#direita");

    let currentSlide = 0;
    let autoRotationInterval;

    function goToSlide(slideIndex) {
        currentSlide = slideIndex;
        const translateX = -currentSlide * 500; // 120px é a largura de cada quadrado
        slider.css("transform", `translateX(${translateX}px)`);
        slider_obj.css("transform", `translateX(${translateX}px)`);
    }
//pessoas
    function startAutoRotation() { //inicia rotação 
        autoRotationInterval = setInterval(function () {
            if (currentSlide <= 15 ) { // tamanho dos quarados
                goToSlide(currentSlide + 1);
            } else {
                // Ir suavemente de volta para o primeiro quadrado
                slider.css("transition", "none");
                goToSlide(0);
                setTimeout(function () {
                    slider.css("transition", "transform 0.7s ease-in-out");
                }, 0);
            }
        }, 2000); // Altere o valor para ajustar a velocidade da rotação
    }

    //obj
    function startAutoRotation_obj() { //inicia rotação 
        autoRotationInterval = setInterval(function () {
            if (currentSlide <= 8  ) { // tamanho dos quarados
                goToSlide(currentSlide + 1);
            } else {
                // Ir suavemente de volta para o primeiro quadrado
                slider_obj.css("transition", "none");
                goToSlide(0);
                setTimeout(function () {
                    slider_obj.css("transition", "transform 0.5s ease-in-out");
                }, 0);
            }
        }, 2000); // Altere o valor para ajustar a velocidade da rotação
    }

    function stopAutoRotation() {
        clearInterval(autoRotationInterval);
    }

    prevButton.click(function () { //seta esqr
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

}
//EMAIL

function email(){
    document.getElementById("patrocinio_button").addEventListener("click", function() {
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
}

//HAMBURGUER CELULAR 
function hambur_cel(){
    var nav = document.querySelector(".navegador")
    var close_hamb = document.getElementById("hamb_cel_close")
    var hamb_cel = document.getElementById("hamb_cel")    
    //ABRIR
    hamb_cel.addEventListener("click", function() {
        
        nav.style.display = 'block';
        this.style.display = 'none';
        close_hamb.style.display = 'block';
    })
    //FECHAR    
    close_hamb.addEventListener("click", function(){
        this.style.display = 'none';
        nav.style.display = 'none';
        hamb_cel.style.display = 'block';
    })
}   

function light_and_dark(){
    var body = document.body;
    var moonIcon = document.getElementById("moon");
    var sunIcon = document.getElementById("sun");

    body.classList.toggle('dark');

    moonIcon.style.display = body.classList.contains('dark') ? 'none' : 'inline';
    sunIcon.style.display = body.classList.contains('dark') ? 'inline' : 'none';
    

}


carrosseis();
email();
hambur_cel();
light_and_dark();

