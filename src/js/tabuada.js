const numero = document.querySelector('#numero');
const multiplicador = document.querySelector('#multiplicador');

const ntitle = document.querySelector('.n-title')
const text = document.querySelector('.text')

const form = document.querySelector('#form');
const multiplicationTable = document.querySelector('#tabela')

const criartabela = function (number, multiplicador) {
    ntitle.innerHTML = number;
    if(text === multiplicationTable.children[0]){
        multiplicationTable.removeChild(text);
    }
    for (let i = 1; i <= multiplicador; i++) {
        let resultado = number * i;

        const template = `<div class="row">
                <div class="operation">${number} x ${i} =</div>
                <div class="result">${resultado}</div>
            </div>`;

        const parser = new DOMParser;

        const htmlconvert = parser.parseFromString(template, 'text/html');

        const row = htmlconvert.querySelector('.row')

        multiplicationTable.appendChild(row);
        console.log(multiplicationTable.children)
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const numeroinput = numero.value;
    const multiplicadorInput = multiplicador.value;

    if (!numeroinput || !multiplicadorInput) return;

    const tableElements = multiplicationTable.childElementCount;
    
    if (tableElements > 1){
        multiplicationTable.innerHTML = ''
    }
    criartabela(numeroinput, multiplicadorInput);
})
