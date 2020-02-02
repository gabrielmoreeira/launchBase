const usuario = {
  nome: "Diego",
  cor: "Roxo",
  Foco: "Programação",
  Endereco: {
    Rua: "Rua Guilherme Gembala",
    Numero: 260
  }
};

console.log(
  `A empresa RocketSeat está localizada em ${usuario.Endereco.Rua}, ${usuario.Endereco.Numero}`
);
