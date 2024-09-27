
const numCaracter = document.querySelector('#rangeCaracter');
const caracteres = document.querySelector('#caracteres');
const cbmaiuscula = document.querySelector('#maiuscula');
const cbminuscula = document.querySelector('#minuscula');
const cbnumeros = document.querySelector('#numeros');

document.querySelector('#caracteres').value = numCaracter.value;

rangeCaracter.oninput = function(){
    document.querySelector('#caracteres').value = this.value;
}

// let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXY0123456789";
let novaPass = "";


function generatePassword(){

    let maiuscula = "ABCDEFGHIJKLMNOPQRSTUVWXY"
    let minuscula ="abcdefghijklmnopqrstuvwxyz"
    let numeros = "0123456789"
    let charset ="";
    // console.log("teste");

    if (document.getElementById('maiuscula').checked) {
        charset += maiuscula;
    }
    if (document.getElementById('minuscula').checked){
        charset += minuscula;
    }
    if (document.getElementById('numeros').checked){
        charset += numeros;
    }

    // alert(charset);
    let pass = "";
    for(let i = 0, n=charset.length; i < numCaracter.value; ++i){
        pass += charset.charAt(Math.floor(Math.random() * n))
    }


    document.getElementById("npass").innerHTML = pass;
    novaPass = pass;

}

function copyPassword(){

    navigator.clipboard.writeText(novaPass);
    
}
