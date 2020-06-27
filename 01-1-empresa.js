const usuario = {
    nome: "Felipe",
    empresa = {
        nome: "Rocketseat",
        cor: "Roxo",
        foco: "Programação",
        endereco: {
          rua: "Rua Guilherme Gembala",
          numero: 260
        }
    }
}

console.log(`A empresa Rocketseat está localizada em ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}`);