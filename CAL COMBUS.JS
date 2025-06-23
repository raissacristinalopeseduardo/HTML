function mudarTela() {
    const distancia = parseFloat(document.getElementById('distance').value);
    const preco = parseFloat(document.getElementById('fuel-price').value);
    const consumo = parseFloat(document.getElementById('fuel-consumption').value);

    if (isNaN(distancia) || isNaN(preco) || isNaN(consumo) || consumo <= 0) {
        alert("Por favor, preencha todos os campos corretamente!");
        return;
    }

    const litrosGastos = distancia / consumo;
    const custoTotal = litrosGastos * preco;

    // Preencher tabela
    document.getElementById('litros').innerText = litrosGastos.toFixed(2) + ' L';
    document.getElementById('custo').innerText = 'R$ ' + custoTotal.toFixed(2);

    // Trocar telas com animação
    document.getElementById('tela1').classList.add('escondido');
    document.getElementById('tela1').classList.remove('mostrar');

    document.getElementById('tela2').classList.add('mostrar');
    document.getElementById('tela2').classList.remove('escondido');
}

function voltar() {
    document.getElementById('tela2').classList.add('escondido');
    document.getElementById('tela2').classList.remove('mostrar');

    document.getElementById('tela1').classList.add('mostrar');
    document.getElementById('tela1').classList.remove('escondido');
}
