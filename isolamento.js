// function mostrar() {
//     console.log("Olá mundo");
// }

const { findConfigFile } = require("typescript");

// mostrar();

const pessoas = [
    { name: 'Joao', surname: 'Da Neve', idade: '35' },
    { name: 'Maria', surname: 'Da Neve', idade: '36' },
    { name: 'Joquimas', surname: 'Da Neve', idade: '37' }
];
var objeto = { name: 'Carlos', surname: 'Chico', idade: 2 };

console.log(typeof objeto);

console.log(objeto);

console.log(objeto.name);


for (let indice = 0; indice < pessoas.length; indice++) {

    console.log(pessoas[indice]);

}

// let indice = 0;

// while(indice < pessoas.length) {

//     console.log(pessoas[indice])
//     indice++
// }

console.log('Aqui é o forEach')

pessoas.forEach((pessoa) => {
    console.log(pessoa.surname);
} )
