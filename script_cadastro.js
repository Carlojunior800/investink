function toSubmit() {
    return false;
}
function validaForm() {
    var pega_email = document.getElementById("email_login").value;

    if (!isNaN(pega_email) || pega_email != "@") {
        document.getElementById("email_login").style.backgroundColor = "red";
    } else if (isNaN(pega_email) || pega_email != " ") {
        document.getElementById("email_login").style.backgroundColor = "white";
    }

    var pega_nome = document.getElementById("nome_login").value;
    if (!isNaN(pega_nome) || pega_nome == " " || pega_nome != 'string') {
        document.getElementById("nome_login").style.backgroundColor = "red";

    } else if (isNaN(pega_nome) || pega_nome != " ") {
        document.getElementById("nome_login").style.backgroundColor = "white";
    }
}
//Cadastro ----------------------------------------------------------

function validaCadastro() {
    var check_nome = 0;
    var check_email = 0;
    var check_senha = 0;
    var check_nasc = 0;
    var check_cpf = 0;

    var pega_nome = document.getElementById("nome_cad").value;
    if (!isNaN(pega_nome) || pega_nome == " ") {
        document.getElementById("nome_cad").style.backgroundColor = "red";
        check_nome = false;
    } else {
        document.getElementById("nome_cad").style.backgroundColor = "white";
        check_nome = true;
    }

    var pega_email = document.getElementById("email_cad").value;
    if (!isNaN(pega_email) || pega_email == " " || pega_email == '@') {
        document.getElementById("email_cad").style.backgroundColor = "red";
        check_email = false;
    } else {
        document.getElementById("email_cad").style.backgroundColor = "white";
        check_email = true;
    }

    var pega_nasc = document.getElementById("nasc_cad").value;
    var fulldata = new Date(pega_nasc);
    var data_ano = 2021 - fulldata.getFullYear();
    console.log(data_ano)
    if (!isNaN(pega_nasc) || pega_nasc == " " || data_ano > 130 || data_ano <= 0) {
        document.getElementById("nasc_cad").style.backgroundColor = "red";
        check_nasc = false;
    } else {
        document.getElementById("nasc_cad").style.backgroundColor = "white";
        check_nasc = true;
    }

    var pega_senha = document.getElementById("senha_cad").value;
    if (!isNaN(pega_senha) || pega_senha == " " || pega_senha.length < 8) {
        document.getElementById("senha_cad").style.backgroundColor = "red";
        check_senha = false;
    }
    if (pega_senha.length >= 8) {
        document.getElementById("senha_cad").style.backgroundColor = "white";
        check_senha = true;
    }

    var pega_cpf = document.getElementById("cpf_cad").value;
    if (!isNaN(pega_senha) || pega_cpf == " ") {
        document.getElementById("cpf_cad").style.backgroundColor = "red";
        check_cpf = false;
    }
    if (pega_cpf.length >= 8) {
        document.getElementById("cpf_cad").style.backgroundColor = "white";
        check_cpf = true;
    }

    if (check_nome && check_senha && check_email && check_nasc && check_cpf) {

        var recebe_nome_cadastro = document.getElementById("nome_cad").value;
        var recebe_idade_cadastro = document.getElementById("nasc_cad").value;
        var recebe_email_cadastro = document.getElementById("email_cad").value;
        var recebe_cpf_cadastro = document.getElementById("cpf_cad").value;
        var gen_fem = document.getElementById('genf');
        var gen_m = document.getElementById('genm');
        if (gen_fem.checked) {
            var genero = gen_fem.value;
        } else {
            var genero = gen_m.value;
        }

        document.getElementById("h1_bem_vindo").innerHTML = "Bem vindo"
        document.getElementById("parag_bem_vindo").innerHTML = `Olá ${recebe_nome_cadastro}, seu login é ${recebe_email_cadastro}, sua data de nascimento é ${recebe_idade_cadastro}, seu gênero é definido como ${genero} e você pode usar seu CPF ${recebe_cpf_cadastro} como senha!`
    }

}

function escondeBemVindo() {
    document.getElementById("frase_login").style.display = "none";
}

function aumentarFonte() {
    for (yy = 0; yy < 5; yy++) {
        document.getElementsByClassName('li_header')[yy].style.fontSize = "1.6vw";
        document.getElementsByClassName('li_header')[yy].style.marginLeft = "2vh";
        document.getElementsByClassName('li_footer')[yy].style.fontSize = "1.4vw";
    } 
}

function diminuirFonte() {
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

        for (yy = 0; yy < 5; yy++) {
            document.getElementsByClassName('li_header')[yy].style.color = "#E7E7E7";
            document.getElementsByClassName('li_footer')[yy].style.color = "#E7E7E7";
        }
        return dark_mode = 0;
    }
}