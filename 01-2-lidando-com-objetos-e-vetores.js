// Construção e impressão de objetos
// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:
// Nome: Rocketseat
// Cor: Roxo
// Foco: Programação
// Endereço: Rua: Rua Guilherme Gembala, Número: 260

const usuario = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereco: {
      rua: "Rua Guilherme Gembala",
      numero: 260
    }
};

console.log(`A empresa Rocketseat está localizada em ${usuario.endereco.rua}, ${usuario.endereco.numero}`);

// Vetores e objetos
// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.
const programador = {
    nome: "Felipe",
    idade: 26,
    tecnologias: [
        { nome: 'C++', especialidade: 'Desktop' },
        { nome: 'Python', especialidade: 'Data Science' },
        { nome: 'JavaScript', especialidade: 'Web/Mobile' }
    ]
};

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}`);
