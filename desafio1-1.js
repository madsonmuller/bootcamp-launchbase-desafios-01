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

// Cálculo de aposentadoria
// Comece criando constantes para armazenar nome, sexo, idade e contribuicao(em anos), por exemplo:
const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 31;
// Baseado nos valores acima utilize as fórmulas a seguir para calcular se a pessoa está apta ou não para se aposentar e no fim imprima uma mensagem em tela.
// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
if ( contribuicao <= 30) {
    if( idade + contribuicao <= 85) {
        console.log(`${nome}, você pode se aposentar!`);
    } else {
        console.log(`${nome}, você nao pode se aposentar devido ao sua contribuicao minima!`);
    }
} else {
    console.log(`${nome}, você ainda não pode se aposentar!`);
}
// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
// Com base nas regras acima imprima na tela as mensagens:
// SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
// SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!