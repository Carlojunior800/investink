// INÍCIO SCRIPT LANDING PAGE

function aumentarFonte(){
            // FONTES
            document.getElementById('h1_banner').style.fontSize = "5.8vh";
            document.getElementById('h1_time').style.fontSize = "6vh";
            document.getElementById('p_banner').style.fontSize = "2.9vh";
            for (z = 0; z < 3; z++) {
                document.getElementsByClassName('h1_sn')[z].style.fontSize = "5.5vh";
                document.getElementsByClassName('p_sn')[z].style.fontSize = "2.9vh";
            }
            for (yy = 0; yy < 5; yy++) {
                document.getElementsByClassName('nomes_pessoas')[yy].style.fontSize = "4.5vh";
                document.getElementsByClassName('cargo_pessoas')[yy].style.fontSize = "3.2vh";
                document.getElementsByClassName('descricao_pessoa')[yy].style.fontSize = "2.2vh";
                document.getElementsByClassName('li_header')[yy].style.fontSize = "1.6vw";
                document.getElementsByClassName('li_header')[yy].style.marginLeft = "2vh";
                document.getElementsByClassName('li_footer')[yy].style.fontSize = "1.4vw";
            }
            // FIM FONTES
}
function diminuirFonte(){
    // FONTES
    document.getElementById('h1_banner').style.fontSize = "5.6vh";
    document.getElementById('h1_time').style.fontSize = "5vh";
    document.getElementById('p_banner').style.fontSize = "2.5vh";
    for (z = 0; z < 3; z++) {
        document.getElementsByClassName('h1_sn')[z].style.fontSize = "5vh";
        document.getElementsByClassName('p_sn')[z].style.fontSize = "2.3vh";
    }
    for (yy = 0; yy < 5; yy++) {
        document.getElementsByClassName('nomes_pessoas')[yy].style.fontSize = "4vh";
        document.getElementsByClassName('cargo_pessoas')[yy].style.fontSize = "2.5vh";
        document.getElementsByClassName('descricao_pessoa')[yy].style.fontSize = "2vh";
        document.getElementsByClassName('li_header')[yy].style.fontSize = "1.3vw";
        document.getElementsByClassName('li_footer')[yy].style.fontSize = "1.3vw";
    }
    // FIM FONTES
}

document.getElementById('dark_mode').addEventListener('click', $dark_mode_on)
var dark_mode = 0;
function $dark_mode_on() {
    if (dark_mode == 0) {
        document.getElementById('dark_mode').src = "img/icons/dark_mode_off.png";
        document.getElementsByClassName('logo')[0].src = "img/logo.png";
        document.getElementsByClassName('banner_index')[0].style.backgroundImage = "url(a.png)";
        document.getElementsByClassName('banner_retangle')[0].style.backgroundColor = "rgba(231, 197, 45, 0.712)";
        document.getElementsByClassName('time')[0].style.backgroundColor = "#E7E7E7";
        document.getElementById('h1_banner').style.color = "#1D262D";
        document.getElementById('h1_time').style.color = "#1D262D";
        document.getElementById('h1_time').style.backgroundColor = "#C4C4C4";
        document.getElementById('p_banner').style.color = "#1D262D";
        document.getElementById('botao_banner').style.color = "#1D262D";
        document.getElementsByClassName('universal_header')[0].style.backgroundColor = "rgba(112, 112, 112, 0.562)";
        document.getElementsByClassName('universal_footer')[0].style.backgroundColor = "rgba(112, 112, 112, 0.562)";
        for (z = 0; z < 3; z++) {
            document.getElementsByClassName('h1_sn')[z].style.color = "#1D262D";
            document.getElementsByClassName('p_sn')[z].style.color = "#1D262D";
        }
        for (yy = 0; yy < 5; yy++) {
            document.getElementsByClassName('nomes_pessoas')[yy].style.color = "#1D262D";
            document.getElementsByClassName('cargo_pessoas')[yy].style.color = "#1D262D";
            document.getElementsByClassName('descricao_pessoa')[yy].style.color = "#1D262D";
            document.getElementsByClassName('li_header')[yy].style.color = "#1D262D";
            document.getElementsByClassName('li_footer')[yy].style.color = "#1D262D";
        }
        var lent = document.getElementsByClassName('github');
        for (zx = 0; zx < lent.length; zx++){
            document.getElementsByClassName('git')[zx].src = 'img/icons/git_pessoas.png';
            document.getElementsByClassName('insta')[zx].src = 'img/icons/insta_pessoas.png';
            document.getElementsByClassName('linkin')[zx].src = 'img/icons/linkedin_pessoas.png';
        }
        document.getElementsByClassName('texto1')[0].style.backgroundColor = "#E7E7E7";
        document.getElementsByClassName('texto2')[0].style.backgroundColor = "#E7E7E7";
        document.getElementsByClassName('texto3')[0].style.backgroundColor = "#E7E7E7";

        return dark_mode = 1;
    }
    if (dark_mode == 1) {
        document.getElementById('dark_mode').src = "img/icons/dark_mode_on.png";
        document.getElementsByClassName('logo')[0].src = "img/logo_dm.png";
        document.getElementsByClassName('banner_index')[0].style.backgroundImage = "url(b_dm.png)";
        document.getElementsByClassName('banner_retangle')[0].style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        document.getElementsByClassName('time')[0].style.backgroundColor = "#1D262D";
        document.getElementById('h1_time').style.color = "#E7E7E7";
        document.getElementById('h1_time').style.backgroundColor = "#363c41";
        document.getElementById('h1_banner').style.color = "#E7E7E7";
        document.getElementById('p_banner').style.color = "#E7E7E7";
        document.getElementById('botao_banner').style.color = "#E7E7E7";
        document.getElementsByClassName('universal_header')[0].style.backgroundColor = "rgba(0, 0, 0, 0.562)";
        document.getElementsByClassName('universal_footer')[0].style.backgroundColor = "rgba(0, 0, 0, 0.562)";
        for (z = 0; z < 3; z++) {
            document.getElementsByClassName('h1_sn')[z].style.color = "#E7E7E7";
            document.getElementsByClassName('p_sn')[z].style.color = "#E7E7E7";
        }
        for (yy = 0; yy < 5; yy++) {
            document.getElementsByClassName('nomes_pessoas')[yy].style.color = "#E7E7E7";
            document.getElementsByClassName('cargo_pessoas')[yy].style.color = "#E7E7E7";
            document.getElementsByClassName('descricao_pessoa')[yy].style.color = "#E7E7E7";
            document.getElementsByClassName('li_header')[yy].style.color = "#E7E7E7";
            document.getElementsByClassName('li_footer')[yy].style.color = "#E7E7E7";
        }
        var lent = document.getElementsByClassName('github');
        for (zx = 0; zx < lent.length; zx++){
            console.log(zx)
            document.getElementsByClassName('git')[zx].src = 'githubdm.png';
            document.getElementsByClassName('insta')[zx].src = 'instagramdm.png';
            document.getElementsByClassName('linkin')[zx].src = 'linkedindm.png';
        }
        document.getElementsByClassName('texto1')[0].style.backgroundColor = "#1D262D";
        document.getElementsByClassName('texto2')[0].style.backgroundColor = "#1D262D";
        document.getElementsByClassName('texto3')[0].style.backgroundColor = "#1D262D";
        return dark_mode = 0;
    }
}

// INÍCIO SCRIPT CADASTRO

function validaNome() {
    var pega_nome = document.getElementById("nome_login").value;

    if (!isNaN(pega_nome) || pega_nome == " ") {
        document.getElementById("nome_login").style.backgroundColor = "red";

    } else {
        document.getElementById("nome_login").style.backgroundColor = "green";
    }
}

function validaEmail() {
    var pega_email = document.getElementById("email_login").value;

    if (!isNaN(pega_email) || pega_email == " ") {
        document.getElementById("email_login").style.backgroundColor = "red";
    } else {
        document.getElementById("email_login").style.backgroundColor = "green";
    }
}

//Cadastro ----------------------------------------------------------

function ValidaNomeCad() {
    var pega_nome = document.getElementById("nome_cad").value;

    if (!isNaN(pega_nome) || pega_nome == " ") {
        document.getElementById("nome_cad").style.backgroundColor = "red";

    } else {
        document.getElementById("nome_cad").style.backgroundColor = "green";
    }
}

function ValidaEmailCad() {
    var pega_email = document.getElementById("email_cad").value;

    if (!isNaN(pega_email) || pega_email == " ") {
        document.getElementById("email_cad").style.backgroundColor = "red";
    } else {
        document.getElementById("email_cad").style.backgroundColor = "green";
    }
}


function ValidaSenha() {
    var pega_senha = document.getElementById("senha_cad").value;

    if (!isNaN(pega_senha) || pega_senha == " ") {
        document.getElementById("senha_cad").style.backgroundColor = "red";
    } else {
        document.getElementById("senha_cad").style.backgroundColor = "green";
    }
}

function ValidaCPF() {
    var pega_cpf = document.getElementById("cpf_cad")
    if (isNaN(pega_cpf) || pega_cpf == " ") {
        document.getElementById("cpf_cad").style.backgroundColor = "red";
    } else {
        document.getElementById("cpf_cad").style.backgroundColor = "green";
    }
}


function check_number() {
    var check = new RegExp(/^(0|[1-9]\d*)$/);
    var idade = document.getElementById('nasc_cad').value;
    if (!idade || !$checking || idade < 0 || idade >= 130) {
        document.getElementById('nasc_cad').style.background = 'red';
        var $checking = check.test(idade);
    } if (idade && $checking && idade > 0 && idade < 130) {
        document.getElementById('nasc_cad').style.background = 'green';
        return idade;
    }
}

// FIM SCRIPT CADASTRO