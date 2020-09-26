const replaceX = nome => {
  const phrase = "Tryber x aqui!";
  const newPhrase = phrase.replace("x", nome);
  return newPhrase;
}

var softSkills = ["Criatividade", "Empatia", "Autoconsciência", "Autorregulação", "Automotivação"];

const logList = list => {
  let allSkills = "";
  for (let index = 0; index < list.length;  index++) {
    allSkills += `${list[index]}
  `
  }
  return allSkills;
}

const addSkills = phrase => {
  const finalPhrase = `${phrase} Minhas cinco principais soft kills são:
  ${logList(softSkills)}`;
  return finalPhrase;
}

console.log(addSkills(replaceX("Vinicius")));