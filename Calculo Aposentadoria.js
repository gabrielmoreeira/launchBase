const nome = "Silvana";
const sexo = "F";
const idade = 40;
const contribuicao = 60;

if (sexo === "F") {
  if (idade + contribuicao >= 85) {
    console.log(`${nome} você pode se aposentar!`);
  } else {
    console.log(`${nome} você ainda não pode se aposentar!`);
  }
} else {
  if (idade + contribuicao >= 95) {
    console.log(`${nome} você pode se aposentar!`);
  } else {
    console.log(`${nome} você ainda não pode se aposentar!`);
  }
}
