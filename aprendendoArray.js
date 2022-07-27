// O  que é Array? Array é uma coleção de alguma coisa, 
// pode ser de tampinhas de garrafas ate quatas letras tem alfabeto. Pode ser criado se ele existir dentro do meu programa.

const latinhas = ["Koka-Kola", "Esprite"]; //let quer dizer que eu permito mudar, ja a variavel començando com const ele
//vai se manter constante, ou seja, precisarar "criar" um array diferente.

latinhas .push("colecao-especial"); // O push faz com que eu adicione um item adicional dentro do meu array. 

console.log("Push:",latinhas);

const latinhasNaoEsprite = latinhas.filter(latinha => {
    return latinha !== "Esprite";
}); // Eu pego aquilo que eu quero, seja um item ou vários.

console.log("Usando filter:",latinhasNaoEsprite);

const latinhaKoka = latinhas.find(latinha => {
    return latinha === "Koka-Kola";
});// Mesma coisa do Filter, mas o comportamendo dele é diferente. Pois assim que ele encontrar o que eu pedi, ele
// para de executar o codigo e ja me mostra o item que é diferente ou igual aquele que eu pedi para ser mostrado.
// O metodo find ceia um novo Array.

console.log("Find:",latinhaKoka);

// Includes é umm metodo atrelado ao meu array que ele me retornara sim ou não(Verdadeiro ou Falso na linguagem Java).

const found = latinhas.includes("colecao-especial" , 1);

console.log("Includes:",found);

// O metodo [..latinhas] (chave) se chama spread
const novasLatinhas = [...latinhas, "Tubaina"]; 
//Funciona como um push que ele atualiza, mas tambem pode me dar um novo. 

console.log("Usando Spread:",novasLatinhas);

const latinhasAtualizadas = novasLatinhas.slice(-2)
// Slice ele corta o array ou começa a mostrar da posição que pedi pra ele mostrar.

console.log("Metodo Slice:",latinhasAtualizadas);

latinhas.pop() //Push e pop são comandos que alterao diretamente o meu array, e me retorna um novo item.

console.log("Metodo Pop:",latinhas);



const fruits = ["🍎", "🍇"];

const apples = fruits.map(function(fruit) {
    return "🍎"
}); // O map trtansforma meu array.

console.log("Original:",fruits)
console.log("Map aplicado:" ,  apples);



const fruitsReverse = [...fruits].reverse(); //Para poder usar ele preciso usar o spread, e então ele me devolve o array invertido.

console.log("Reverse aplicado:",fruitsReverse);

fruits.forEach(function(fruit) {
    console.log(fruit);
})

// Quase todos os metodos me retornam um novo array. Exceto o forEach, forEach não me retorna nada