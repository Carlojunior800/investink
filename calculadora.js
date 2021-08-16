// INÍCIO SCRIPT LANDING PAGE
document.getElementById('dark_mode').addEventListener('click', $dark_mode_on)
var dark_mode = 0;
function $dark_mode_on() {
    if (dark_mode == 0) {
        document.getElementById('dark_mode').src = "img/icons/dark_mode_on.png";
        document.getElementsByClassName('logo')[0].src = "img/logo.png";
        document.getElementsByClassName('body_calculadora')[0].style.backgroundImage = "url(img/bgs/bg_calc.png)";
        document.getElementById("img_cientifica").src = "img/icons/white_cientifica.png";
        document.getElementById("h1_calculadora").style.color = "#B98424";
        document.getElementById("resultado").style.background = "#1D262D";
        document.getElementById("resultado").style.color = "white";
        document.getElementsByClassName('universal_header')[0].style.backgroundColor = "rgba(112, 112, 112, 0.562)";
        document.getElementsByClassName('universal_footer')[0].style.backgroundColor = "rgba(112, 112, 112, 0.562)";
        for (yy = 0; yy < 5; yy++) {
            document.getElementsByClassName('li_header')[yy].style.color = "#1D262D";
            document.getElementsByClassName('li_footer')[yy].style.color = "#1D262D";
        }

        return dark_mode = 1;
    }
    if (dark_mode == 1) {
        document.getElementById('dark_mode').src = "img/icons/dark_mode_off.png";
        document.getElementsByClassName('logo')[0].src = "img/logo_dm.png";
        document.getElementsByClassName('body_calculadora')[0].style.backgroundImage = "url(img/bgs/bg_white.png)";
        document.getElementById("img_cientifica").src = "img/icons/black_cientifica.png";
        document.getElementById("h1_calculadora").style.color = "white";
        document.getElementById("resultado").style.background = "white";
        document.getElementsByClassName('universal_header')[0].style.backgroundColor = "rgba(0, 0, 0, 0.562)";
        document.getElementsByClassName('universal_footer')[0].style.backgroundColor = "rgba(0, 0, 0, 0.562)";
    
        for (yy = 0; yy < 5; yy++) {
            document.getElementsByClassName('li_header')[yy].style.color = "#E7E7E7";
            document.getElementsByClassName('li_footer')[yy].style.color = "#E7E7E7";
        }
    }

        return dark_mode = 0;
    }

function aumentarFonte() {
    document.getElementById('h1_calculadora').style.fontSize = "6vh";
    for (yy = 0; yy < 5; yy++) {
        document.getElementsByClassName('li_header')[yy].style.fontSize = "1.6vw";
        document.getElementsByClassName('li_header')[yy].style.marginLeft = "2vh";
        document.getElementsByClassName('li_footer')[yy].style.fontSize = "1.4vw";
    }

}
function diminuirFonte() {
    document.getElementById('h1_calculadora').style.fontSize = "5vh";
    for (yy = 0; yy < 5; yy++) {
        document.getElementsByClassName('li_header')[yy].style.fontSize = "1.3vw";
        document.getElementsByClassName('li_footer')[yy].style.fontSize = "1.3vw";
    }
}

// INICIO SCRIPT CALCULADORA
function adicionaItens(numeros) {
    var numero = document.querySelector('.campo-resultado').innerHTML;
    document.querySelector('.campo-resultado').innerHTML = numero + numeros;
}

function limpaTela() {
    document.querySelector('.campo-resultado').innerHTML = "";
}

function limpaNumPorNum() {
    var limpaNum = document.querySelector('.campo-resultado').innerHTML;
    document.querySelector('.campo-resultado').innerHTML = limpaNum.substring(0, limpaNum.length - 1);
}

function calcular() {
    var resultado = document.querySelector('.campo-resultado').innerHTML;
    if (resultado) {
        document.querySelector('.campo-resultado').innerHTML = eval(resultado);
        console.log(resultado);
    } else {
        document.querySelector('.campo-resultado').innerHTML = 0;
    }
}

function adicionaItens(numeros) {
    var numero = document.querySelector('.campo-resultado').innerHTML;
    document.querySelector('.campo-resultado').innerHTML = numero + numeros;
}

function calcularRaiz() {
    var raiz = document.querySelector('.campo-resultado').innerHTML;
    document.querySelector('.campo-resultado').innerHTML = Math.sqrt(raiz);
}
function aoQuadrado() {
    var quadrado = document.querySelector('.campo-resultado').innerHTML;
    document.querySelector('.campo-resultado').innerHTML = Math.pow(quadrado, 2);
}
function aoCubo() {
    var cubo = document.querySelector('.campo-resultado').innerHTML;
    document.querySelector('.campo-resultado').innerHTML = Math.pow(cubo, 3);
}
function PiPi() {
    var pi = document.querySelector('.campo-resultado').innerHTML;
    document.querySelector('.campo-resultado').innerHTML = Math.PI;
}
function limpaTela() {
    document.querySelector('.campo-resultado').innerHTML = "";
}

function limpaNumPorNum() {
    var limpaNum = document.querySelector('.campo-resultado').innerHTML;
    document.querySelector('.campo-resultado').innerHTML = limpaNum.substring(0, limpaNum.length - 1);
}

function calcular() {
    var resultado = document.querySelector('.campo-resultado').innerHTML;
    if (resultado) {
        document.querySelector('.campo-resultado').innerHTML = eval(resultado);
        console.log(resultado);
    } else {
        document.querySelector('.campo-resultado').innerHTML = 0;
    }
}

document.getElementById('img_cientifica').addEventListener('click', $cientifica_on)
var modo_cientifico = 0;
function $cientifica_on() {
    if (modo_cientifico == 0) {
        for (u = 0; u < 4; u++) {
            document.getElementsByClassName('botoes_cientifica')[u].style.display = 'none';
        }
        document.getElementById('botao_modo').style.opacity = "0";
        document.getElementById('img_cientifica').src = "img/icons/white_cientifica.png";
        document.getElementsByClassName('campo-resultado')[0].style.width = '18vw';
        document.getElementById('img_cientifica').style.left = "28vw";
        document.getElementsByClassName('corpo-calculadora')[0].style.width = '20vw';
        return modo_cientifico = 1;
    }
    if (modo_cientifico == 1) {
        for (u = 0; u < 4; u++) {
            document.getElementsByClassName('botoes_cientifica')[u].style.display = 'inline';
        }
        document.getElementById('botao_c1').style.opacity = "1";
        document.getElementById('botao_c2').style.opacity = "1";
        document.getElementById('botao_c3').style.opacity = "1";
        document.getElementById('botao_c4').style.opacity = "1";
        document.getElementById('botao_modo').style.opacity = "1";
        document.getElementById('img_cientifica').style.left = "33vw";
        document.getElementsByClassName('campo-resultado')[0].style.width = '22vw';
        document.getElementsByClassName('corpo-calculadora')[0].style.width = '24.5vw';
        document.getElementById('img_cientifica').src = "img/icons/black_cientifica.png";
        return modo_cientifico = 0;
    }
}

document.querySelector("#items").addEventListener('wheel', e => {
    if (e.deltaY > 0) {
        e.target.scrollBy(300, 0);
    } else {
        e.target.scrollBy(-300, 0);
    }
});