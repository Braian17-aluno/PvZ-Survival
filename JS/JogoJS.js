let pontos = 10
let pontuacao = document.querySelector(".pontos")

// mover inimigos - automático
function moverdireita2(){
    let div2Left= parseInt(getComputedStyle(div2).left);
    let fundoWidth= parseInt(getComputedStyle(fundo).width);
    let div2Width= parseInt(getComputedStyle(div2).width);
    if (fundoWidth >= 915){
        div2.style.left = div2Left +5;
        }
    if (fundoWidth <= 915){
        div2.style.left = div2Left +3;
    }
    if ( div2Left >=  fundoWidth - div2Width){
        clearInterval(z);
        z = setInterval ("moveresquerda2()",15);
    }
}
function moveresquerda2(){
    let div2Left= parseInt(getComputedStyle(div2).left);
    let fundoWidth= parseInt(getComputedStyle(fundo).width);
    if (fundoWidth >= 915){
    div2.style.left = div2Left -5;
    }
    if (fundoWidth <= 915){
        div2.style.left = div2Left -3;
        }
    if (div2Left <= 0){
        clearInterval(z);
        z = setInterval ("moverdireita2()",15);
        pontos--
        pontuacao.innerHTML="Pontuação: "+pontos
        if(pontos <= 0){
            alert("Você perdeu!")
            alert("Reiniciando...")
            location.reload();
        }
    }
}
function moverdireita1(){
    let div1Left=parseInt(getComputedStyle(div1).left);
    let fundoWidth= parseInt(getComputedStyle(fundo).width);
    let div1Width= parseInt(getComputedStyle(div1).width);
    if(fundoWidth >= 915){
    div1.style.left = div1Left + 5;
    }
    if(fundoWidth <= 915){
        div1.style.left = div1Left + 3;
        }
    if (div1Left >=  fundoWidth - div1Width){
        clearInterval(m);
        m = setInterval ("moveresquerda1()",15);
    }
}
function moveresquerda1(){
    let div1Left= parseInt(getComputedStyle(div1).left);
    let fundoWidth= parseInt(getComputedStyle(fundo).width);
    if(fundoWidth >= 915){
        div1.style.left = div1Left - 5;
        }
        if(fundoWidth <= 915){
            div1.style.left = div1Left - 3;
        }
    if (div1Left <= 0){
        clearInterval(m);
        m = setInterval ("moverdireita1()",15);
        pontos--
        pontuacao.innerHTML="Pontuação: "+pontos
        if(pontos <= 0){
            alert("Você perdeu!")
            alert("Reiniciando...")
            location.reload();
        }
    }
}
//Player
let player = document.querySelector('.player');
let moveBy = 2;

window.addEventListener('load', () => {
player.style.position = 'relative';
player.style.left = 0;
player.style.top = 0;
});

window.addEventListener('keydown', (e) => {
    //let area = document.querySelector("#area");
    //let areaWidth = parseInt(getComputedStyle(area).width)
    let fundoHeight = parseInt(getComputedStyle(fundo).height);
    //let playerLeft= parseInt(getComputedStyle(player).left);
    let playerTop = parseInt(getComputedStyle(player).top);
  // let playerWidth = parseInt(getComputedStyle(player).width);
    let playerHeight= parseInt(getComputedStyle(player).height);

switch (e.key) {
  /*
  case 'a':
  if (playerLeft <= 0){
          break;
  }
  player.style.left = parseInt(player.style.left) - moveBy + 'vw';
          break;

  case 'd':
  if (playerLeft >= areaWidth  - playerWidth){
          break;
  }
  player.style.left = parseInt(player.style.left) + moveBy + 'vw';
          break;
  */
  case 'w':
  if (playerTop<= 0){
          break;
  }
  player.style.top = parseInt(player.style.top) - moveBy + 'vw';
          break;
  case 's':
  if (playerTop >= fundoHeight  - playerHeight){
          break;
  }
  player.style.top = parseInt(player.style.top) + moveBy + 'vw';
          break;
}

});
let atira = new Audio('../Audio/gunshot.mp3')
let c = 0
window.addEventListener('keyup', (e) => {
    if (e.key == 'q'){
        if (c == 0){
        atirar();
        c++
        }
        if (c == 1){
            setInterval("atirar()",3000)
            c++
        }

    }
});

function botaoatira(){
    if (c == 0){
        atirar();
        c++
        }
        if (c == 1){
            setInterval("atirar()",3000)
            c++
        }

}
/*
if (circle >= fundoWidth  - circleWidth){
window.addEventListener('load', () => {
circle.style.position = 'absolute';
circle.style.left = 10;
circle.style.top = 0;
});
}
*/


// Mover player  - através dos botões
function move(Direcao) {
    let moveB = 4
    let area = document.querySelector("#area");
    let areaWidth = parseInt(getComputedStyle(area).width)
    let fundoHeight = parseInt(getComputedStyle(fundo).height);
    let playerLeft= parseInt(getComputedStyle(player).left);
    let playerTop = parseInt(getComputedStyle(player).top);
    let playerWidth = parseInt(getComputedStyle(player).width);
    let playerHeight= parseInt(getComputedStyle(player).height);

    switch(Direcao){
        case "acima": 

        if (playerTop<= 0){
            break;
        }
        player.style.top = parseInt(player.style.top) - moveB + 'vw';
        break;

        case "baixo":
    
        if (playerTop >= fundoHeight  - playerHeight){
                break;
        }
        player.style.top = parseInt(player.style.top) + moveB + 'vw';
                break;
        /*
        case "esquerda":

        if (playerLeft <= 0){
                break;
        }
        player.style.left = parseInt(player.style.left) - moveB + 'vw';
                break;
        
        case "direita":

        if (playerLeft >= areaWidth  - playerWidth){
                break;
        }
        player.style.left = parseInt(player.style.left) + moveB + 'vw';
                break;
                */
    }
}
function atirar(){
    atira.play();
    //let left = parseInt(window.getComputedStyle(player).getPropertyValue("left"));
    let top = parseInt(window.getComputedStyle(player).getPropertyValue("top"));
    let tiros = document.querySelector(".tiros");
    let tiro = document.createElement("div");
    tiro.setAttribute("class","tiro");
    tiros.appendChild(tiro);
    setInterval(()=>{
        let tiroLeft = parseInt(getComputedStyle(tiro).left);
        let tiroTop = parseInt(getComputedStyle(tiro).top);
        let div1 = document.querySelector("#div1")
        let div2 = document.querySelector("#div2")
        let div1Left=parseInt(getComputedStyle(div1).left);
        let div2Left= parseInt(getComputedStyle(div2).left);
        let div1Top=parseInt(getComputedStyle(div1).top);
        let div2Top= parseInt(getComputedStyle(div2).top);
        let div2Height= parseInt(getComputedStyle(div2).height);
        let div2Width= parseInt(getComputedStyle(div2).width);
        let div1Height= parseInt(getComputedStyle(div1).height);
        let div1Width= parseInt(getComputedStyle(div1).width);

        if (((tiroLeft >= div1Left)&&(tiroLeft <= div1Left + div1Width))&&
            ((tiroTop >= div1Top)&&(tiroTop <= div1Top + div1Height))){
                para();
                
        }
        
        if (((tiroLeft >= div2Left)&&(tiroLeft <= div2Left + div2Width))&&
            ((tiroTop >= div2Top)&&(tiroTop <= div2Top + div2Height))){
                para2();
                
            
        }
        
        let balaDireita = parseInt(window.getComputedStyle(tiro).getPropertyValue("left"));
        tiro.style.top = top +30+"px"
        tiro.style.left = balaDireita + 5
    },1);
    setTimeout("remover()",2000);
    
}

function remover(){
    let tiros = document.querySelector(".tiros");
    tiros.innerHTML=""
}
// Transportar Inimigos
function para2(){
    pontos+=2
    let div2 = document.querySelector("#div2")
    div2.style.left = Math.floor(Math.random()*50 + 35)+"vw"
    div2.style.top = Math.floor(Math.random()*35 + 1)+"vw"
    pontuacao.innerHTML="Pontuação: " + pontos
    if(pontos >= 20){
        alert("Você venceu!");
        alert("Reiniciando...");
        location.reload();
    }
   
}
function para() {
    pontos+=2
    let div1 = document.querySelector("#div1")
    div1.style.left = Math.floor(Math.random()*50 + 35)+"vw"
    div1.style.top = Math.floor(Math.random()*35 + 1)+"vw"
    pontuacao.innerHTML="Pontuação: " + pontos
    if(pontos >= 20){
        alert("Você venceu!");
        alert("Reiniciando...");
        location.reload();
    }
   
}

function para3(){
    let area = document.querySelector("#area")
    let player = document.querySelector('.player');
    area.removeChild(player);
    alert("Você perdeu!");
    alert("Reiniciando...");
    location.reload();
}


    function colisao(){
    
    let div1Left= parseInt(getComputedStyle(div1).left);
    let div1Top= parseInt(getComputedStyle(div1).top);
    let div1Height= parseInt(getComputedStyle(div1).height);
    let div1Width= parseInt(getComputedStyle(div1).width);

    let div2Left= parseInt(getComputedStyle(div2).left);
    let div2Top= parseInt(getComputedStyle(div2).top);
    let div2Height= parseInt(getComputedStyle(div2).height);
    let div2Width= parseInt(getComputedStyle(div2).width);

    let playerLeft= parseInt(getComputedStyle(player).left);
    let playerTop = parseInt(getComputedStyle(player).top);
 
        
        if (((playerLeft >= div1Left)&&(playerLeft <= div1Left + div1Width))&&
            ((playerTop >= div1Top)&&(playerTop <= div1Top + div1Height))){
                para3();
                
        }
        
        if (((playerLeft >= div2Left)&&(playerLeft <= div2Left + div2Width))&&
            ((playerTop >= div2Top)&&(playerTop <= div2Top + div2Height))){
                para3();
                
            
        }
        

    }
    



//Ao carregar a página estas linhas são executadas. 

        let contador = 0;
        let cont = 0;
        let m = setInterval("moverdireita1()", 15); //Funções que são chamadas a cada 15 e 5 milisegundos
        let z = setInterval("moverdireita2()", 15);
        let n = setInterval("colisao()", 5);
        


document.querySelector("#atirar").addEventListener("click",()=>{botaoatira()});
//document.querySelector("#esquerda").addEventListener("click",()=>{ move('esquerda')});
//document.querySelector("#direita").addEventListener("click",()=>{ move('direita')});
document.querySelector("#baixo").addEventListener("click",()=>{ move('baixo')});
document.querySelector("#acima").addEventListener("click", ()=>{move('acima')});

alert("Olá! Use as teclas 'w' para se mexer pra cima e 's' para se mexer pra baixo! (ou use as flechas!)");
alert("Use a tecla 'q'(ou aperte o botão das ervilhas) para COMEÇAR a atirar! Você não vai parar de atirar depois disso.");
alert("Quando você acertar um inimigo você ganha dois pontos, com 20 pontos você ganha!");
alert("Se um inimigo tocar no fundo do gramado você perde um ponto, com 0 pontos você perde!");
alert("Se um inimigo te tocar você perde instantaneamente!");
alert("Bom Jogo!");
