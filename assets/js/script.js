document.getElementById('calculate').addEventListener('click', function(){
    const value = document.getElementById('value').value;
    const fee = (document.getElementById('fee').value) / 100;
    const time = document.getElementById('time').value;
// Seleciona o botão "Zerar"
const resetButton = document.querySelector('#reset');

// Adiciona um ouvinte de eventos para o clique no botão "Zerar"
resetButton.addEventListener('click', () => {
    // Define o valor total para zero
    document.querySelector('#total').textContent = 'R$ 0,00';
});

    const total = value * (1 + fee)**time;

    document.getElementById('total').innerHTML = ("R$ " + total.toFixed(2).replace('.', ','));
}); 