function validaDados() {

    var invalid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/; //expressao regular  
    var nome = document.getElementById('txtnome');
    var email = document.getElementById('txtemail');


    caixa_nome = document.querySelector('.msg-nome');
    caixa_nome.style.display = 'none';

    caixa_telefone = document.querySelector('.msg-telefone');
    caixa_telefone.style.display = 'none';

    caixa_email = document.querySelector('.msg-email');
    caixa_email.style.display = 'none';


    if (nome.value.length < 5) {

        caixa_nome.innerHTML = "Favor inserir nome completo!";
        caixa_nome.style.display = 'block';
        nome.focus();
        return false;
    }

    if (document.getElementById('txtemail').value.length == 0) {
        caixa_email.innerHTML = "Favor preencher campo E-mail";
        caixa_email.style.display = 'block';
        email.focus();
        return false;
    }


    if (invalid.test(email.value) == false) {
        caixa_email.innerHTML = "Endereço de E-mail Inválido";
        caixa_email.style.display = 'block';
        email.focus();
        return false;
    }

    if (document.getElementById('txttelefone').value.length == 0) {
        caixa_telefone.innerHTML = "Favor preencher campo Telefone!";
        caixa_telefone.style.display = 'block';

        return false;
    }


}

function inicializaJS() {
    document.getElementById('txtnome').focus();
}


var slideIndex = 1;
var slideIndex2 = 2;

showSlidesAutomatic();

function plusSlides(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n)
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('mySlides');
    var dots = document.getElementsByClassName('dot');

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }


    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active ", "")
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active ";


}


function showSlidesAutomatic() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex2++;
    if (slideIndex2 > slides.length) { slideIndex2 = 1 }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active ", "")
    }

    slides[slideIndex2 - 1].style.display = "block";
    dots[slideIndex2 - 1].className += " active ";

    setTimeout(showSlidesAutomatic, 3000);
}


