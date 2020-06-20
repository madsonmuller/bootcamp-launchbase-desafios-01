// Cálculo de IMC
// Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.
// Comece criando constantes para armazenar o nome, peso, altura e sexo de uma pessoa, por exemplo:
const name = "Felipe"
const peso = 80
const altura = 1.63;
// A partir desses dados armazene em uma constante chamada imc o cálculo do índice de massa corporal definido pela fórmula abaixo:
const imc = peso / (altura * altura)
// SE o IMC maior ou igual a 30: Carlos você está acima do peso;
// SE o IMC menor que 29.9: Carlos você não está acima do peso;
if(imc >= 30) {
    console.log(`${name} você está acima do peso`);
} else {
    console.log(`${name} você não está acima do peso`);
}