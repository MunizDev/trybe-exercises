let valuesStates = ['', 'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'EX'];

let optionsStates = ['Selecione seu estado', 'Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Estrangeiro'];

let formCurriculo = document.getElementById('formCurriculo');
let comboBox = document.getElementById('states');
let dataInput = document.getElementById('data-inicio');
let buttonSubimit = document.getElementById('submit');
let divConsolidacao = document.getElementById('consolidacao');
let buttonClear = document.getElementById('clear');

for (let index = 0; index < optionsStates.length; index += 1) {
    let optionTag = document.createElement('option');
    optionTag.value = valuesStates[index];
    optionTag.innerText = optionsStates[index];
    comboBox.appendChild(optionTag);
}

dataInput.DatePickerX.init();

function stopAction(evt) {
    evt.preventDefault();
}

buttonSubimit.addEventListener('click', function () {
    divConsolidacao.innerHTML = "";
    let allLabels = document.querySelectorAll('label');
    let allInputs = document.querySelectorAll('input');

    //nome até cidade
    for (let index = 0; index < 5; index += 1) {
        divConsolidacao.innerText += allLabels[index].innerText + allInputs[index].value + '\n';
    }
    //Escolha um estado
    divConsolidacao.innerText += "Escolha um estado:" + comboBox.options[comboBox.selectedIndex].text + '\n';

    //Moradia
    let selected = "";
    if (document.getElementById('casa').checked) {
        selected = "Casa"
    }
    if (document.getElementById('apartamento').checked) {
        selected = "Apartamento"
    }
    divConsolidacao.innerText += allLabels[5].innerText + selected + '\n';

    // Textarea
    divConsolidacao.innerText += allLabels[8].innerText + document.querySelector('textarea').value + '\n';

    // cargo até data inicio
    for (let index = 9; index < 12; index += 1) {
        divConsolidacao.innerText += allLabels[index].innerText + allInputs[index - 2].value + '\n';
    }
});

buttonClear.addEventListener('click', function () {
    divConsolidacao.innerHTML = "";
    formCurriculo.reset();
});

validation.init("#formCurriculo");