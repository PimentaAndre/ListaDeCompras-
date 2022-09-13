// // function mostrar() {
// //     console.log("Olá mundo");
// // }

// const { findConfigFile } = require("typescript");

// // mostrar();

const pessoas = [
    { name: 'Joao', surname: 'Da Neve', idade: '35' },
    { name: 'Maria', surname: 'Da Neve', idade: '36' },
    { name: 'Joaquim', surname: 'Da Neve', idade: '37' }
];

const novoNovo = {name: 'Carlos', surname: 'Da Neve', idade: '35'}

pessoas.splice(0,1, novoNovo)

console.log(pessoas)
// const nameToBeUpdate = 'Jão' // Usar o findIndex na linha 19


// const index = pessoas.findIndex(pessoa => {
//     return pessoa.name === 'Joao'
// })

// pessoas[index].name = nameToBeUpdate

// console.log('Encontrando pessoa', index)

// console.log("FindIndex de cria", pessoas);
let pessoaEncontrada;

pessoas.forEach(pessoa => {
    console.log('No forEach', pessoa);
    if (pessoa.name === 'Joao'){
        pessoaEncontrada = pessoa
    } 
})

// const novaPessoa = pessoas.find(pessoa => {
//     console.log(pessoa);
//     return pessoa.name === 'Joao'
// })

console.log('pessoaEncontrada', pessoaEncontrada);
// novaPessoa.name = nameToBeUpdate

// console.log('Encontrando pessoa', novaPessoa)
// console.log('Pessoa Jão', pessoas);

// const newName = 'João atualizado'

// const pessoa = pessoas[0]

// console.log('Aqui é o forEach', pessoa)

// // pessoa.forEach((pessoa) => {
// //     console.log(pessoa.surname);
// // } )

// pessoa.name = newName

// console.log('Pessoa João', pessoas);

