let text = document.getElementById('text');
let text2 = document.getElementById('text2');

function Hello(element, ...param){
    element.innerHTML ="Bonjour ";
    for (let word of param) {
        element.innerHTML += word + " " ;
    }
}

Hello(text,'les copains' ,'est les copines');
Hello(text2,'les copains' ,'est les copines' ,'les gens qui passe' ,'et tout le reste' );

//parti 2
let div = document.getElementById('div');

function calc( ...param){
    let somme = document.createElement('div');
    div.appendChild(somme)
    for (let num of param) {
        somme.innerHTML = num  ;
    }
}

calc(2  + 2 );
calc(4 + 4  + 4 );
calc(6 + 6 + 6 + 6);

//parti 3
let three = document.getElementById('three');

function multi( ...param){
    let add = document.createElement('div');
    three.appendChild(add)
    for (let num of param) {
        add.innerHTML = Math.floor(num)  ;
    }
}

multi(11.76 * 11.76)