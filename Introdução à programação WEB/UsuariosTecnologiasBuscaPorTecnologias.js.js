const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

function checaSeUsuarioUsaCSS(usuario) {
  for (let index = 0; index < usuario.tecnologias.length; index++) {
    if ((usuario.tecnologias[index] == "CSS")) {
      return true;
    }
  }
}

for (let i = 0; i < usuarios.length; i++) {

  // Usuários e tecnologias
  console.log(usuarios[i].nome + " trabalha com " + usuarios[i].tecnologias);

  // Busca por tecnologias
  const usuarioTrabalhaComCss = checaSeUsuarioUsaCSS(usuarios[i]);
  if (usuarioTrabalhaComCss) {
    console.log(`O usuário ${usuarios[i].nome} tabalha com CSS`);
  }
}
