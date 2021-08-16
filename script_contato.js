function aumentarFonte() {
    document.getElementById('h1_contato').style.fontSize = "4.5vh";
    document.getElementsByClassName('teste')[0].innerHTML = 'Nome:';
    document.getElementsByClassName('teste')[1].innerHTML = 'E-mail:';
    document.getElementsByClassName('teste')[2].innerHTML = 'Mensagem:';
    for (yy = 0; yy < 5; yy++) {
        document.getElementsByClassName('li_header')[yy].style.fontSize = "1.6vw";
        document.getElementsByClassName('li_header')[yy].style.marginLeft = "2vh";
        document.getElementsByClassName('li_footer')[yy].style.fontSize = "1.4vw";
    }
}
function diminuirFonte() {
    document.getElementById('h1_contato').style.fontSize = "4vh";
    document.getElementById('envio_contato').style.fontSize = "3vh";
    document.getElementsByClassName('teste')[0].innerHTML = '';
    document.getElementsByClassName('teste')[1].innerHTML = '';
    document.getElementsByClassName('teste')[2].innerHTML = '';
    for (yy = 0; yy < 5; yy++) {
        document.getElementsByClassName('li_header')[yy].style.fontSize = "1.3vw";
        document.getElementsByClassName('li_footer')[yy].style.fontSize = "1.3vw";
    }
}


document.getElementById('dark_mode').addEventListener('click', $dark_mode_on)
var dark_mode = 0;
function $dark_mode_on() {
    if (dark_mode == 0) {
        document.getElementById('dark_mode').src = "img/icons/dark_mode_off.png";
        document.getElementsByClassName('logo')[0].src = "img/logo.png";
        document.getElementsByClassName('universal_header')[0].style.backgroundColor = "rgba(112, 112, 112, 0.562)";
        document.getElementsByClassName('universal_footer')[0].style.backgroundColor = "rgba(112, 112, 112, 0.562)";
        document.getElementById('h1_contato').style.color = "#1D262D";
        document.getElementsByClassName('teste')[0].style.color = '#1D262D';
        document.getElementsByClassName('teste')[1].style.color = '#1D262D';
        document.getElementsByClassName('teste')[2].style.color = '#1D262D';
        document.getElementById('envio_contato').style.color = "#1D262D";
        document.getElementsByClassName("body_contato")[0].style.backgroundImage = "url(img/bgs/vector-DEC-2020-39.jpg)";
        for (yy = 0; yy < 5; yy++) {
            document.getElementsByClassName('li_header')[yy].style.color = "#1D262D";
            document.getElementsByClassName('li_footer')[yy].style.color = "#1D262D";
        }

        return dark_mode = 1;
    }
    if (dark_mode == 1) {
        document.getElementById('dark_mode').src = "img/icons/dark_mode_on.png";
        document.getElementsByClassName('logo')[0].src = "img/logo_dm.png";
        document.getElementsByClassName('universal_header')[0].style.backgroundColor = "rgba(0, 0, 0, 0.562)";
        document.getElementsByClassName('universal_footer')[0].style.backgroundColor = "rgba(0, 0, 0, 0.562)";
        // console.log(document.getElementsByClassName("body_contato")[0])
        // document.getElementsByClassName("body_contato")[0].style.backgroundImage = 'url("a.jpg")';
        document.getElementsByClassName("body_contato")[0].style.backgroundImage = 'url("bg-dm.png")';
        for (yy = 0; yy < 5; yy++) {
            document.getElementById('h1_contato').style.color = "#E7E7E7";
            document.getElementsByClassName('teste')[0].style.color = '#E7E7E7';
            document.getElementsByClassName('teste')[1].style.color = '#E7E7E7';
            document.getElementsByClassName('teste')[2].style.color = '#E7E7E7';
            document.getElementById('envio_contato').style.color = "#E7E7E7";
            document.getElementsByClassName('li_header')[yy].style.color = "#E7E7E7";
            document.getElementsByClassName('li_footer')[yy].style.color = "#E7E7E7";
        }
        return dark_mode = 0;
    }
}

function validar() {
    var name = document.getElementById('nome_contato').value;
    var mensagem = document.getElementById('mensagem_contato').value;
    if (name == "") {
        alert('Nome inválido!')
        document.getElementById('nome_contato').style.backgroundColor = 'rgba(230, 65, 65, 0.603)';
    } else {
        document.getElementById('nome_contato').style.backgroundColor = 'white';
    }

    email = document.getElementById('econtato').value;
    const re_email = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var checagem_email =  re_email.test(email);
    if (!checagem_email){
        alert('E-mail inválido!')
        document.getElementById('econtato').style.backgroundColor = 'rgba(230, 65, 65, 0.603)';
    } else{
        document.getElementById('econtato').style.backgroundColor = 'white';
    }

    if (mensagem == "") {
        alert('Mensagem vazia!')
        document.getElementById('mensagem_contato').style.background = 'rgba(230, 65, 65, 0.603)';
    } else {
        document.getElementById('mensagem_contato').style.backgroundColor = 'white';
    }
}

