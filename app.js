//let titulo = document.querySelector("h1");
//titulo.innerHTML  = "jogo do número secreto";
//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "Escolha um número entre 1 e 100"
let listaNumSorteado= [];
let numeroLimite = 100;
let numSecreto = gerarNuAleatório();
let tentativas = 1;

function exibir(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, "Brazilian Portuguese Female", {rate:1.3});    
}

function mInicial() {
    exibir("h1", "Jogo do número secreto");
    exibir("p", `Escolha um número entre 1 e ${numeroLimite}`);

}

mInicial();

function verificarChute(){
    let chute = document.querySelector("input").value;
    if(chute == numSecreto){
        exibir("h1", "Acertou!!");
        let pTentativas = tentativas > 1 ? "tentativas" : "tentativa";
        let mTentativas = `Você descobriu o número secreto com ${tentativas} ${pTentativas}!`;
        exibir("p", mTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(chute > numSecreto){
            exibir("p", "O número secreto é menor");
        }else{
            exibir("p", "O número secreto é maior"); 
        } 
        tentativas++;
        limpaCampo();  
    }
}

function gerarNuAleatório() {
    let numSorteado = parseInt(Math.random() * numeroLimite + 1);
    let TamanhoLista = listaNumSorteado.length;
    if (TamanhoLista == numeroLimite) {
        listaNumSorteado = [];
    }
    if (listaNumSorteado.includes(numSorteado)){
       return gerarNuAleatório();
    }else{
        listaNumSorteado.push(numSorteado);
        return numSorteado;
    }
    
}

function limpaCampo() {
    chute = document.querySelector("input");
    chute.value = "";
    
}

function reiniciarJogo() {
    numSecreto = gerarNuAleatório();
    limpaCampo();
    tentativas = 1;
    mInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}