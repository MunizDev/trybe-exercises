let valuesStates = ['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO', 'EX'];

let optionsStates = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Estrangeiro'];

let comboBox = document.getElementById('states');
let dataInput = document.getElementById('data-inicio');
let buttonSubimit = document.getElementById('submit');

for (let index = 0; index < optionsStates.length; index += 1) {
    let optionTag = document.createElement('option');
    optionTag.value = valuesStates[index];
    optionTag.innerText = optionsStates[index];
    comboBox.appendChild(optionTag);
}

dataInput.addEventListener('keyup', function () {
    if (dataInput.value.length === 10) {
        let arrayData = dataInput.value.split('/');
        let dia = arrayData[0];
        let mes = arrayData[1];
        let ano = arrayData[2];
        if (dia <= 0 || dia > 31) {
            alert('o dia está incorreto')
        }
        if (parseInt(mes) <= 0 || parseInt(mes) > 12) {
            alert('o mês está incorreto')
        }
        if (parseInt(ano) <= 0) {
            alert('o ano está incorreto')
        }
    }
});
