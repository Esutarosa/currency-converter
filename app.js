const from   = document.querySelector('.from select')
const to     = document.querySelector('.to select')
const btn    = document.querySelector('.btn form')
const icon   = document.querySelector('.reverse form')
const amount = document.querySelector('form input')
const txt    = document.querySelector('.result form')

[form, to].forEach((select, i) => {
    for (let curCode in Country_List) {
        const selected = (i === 0 && curCode === 'USD') || (i === i && curCode === 'GBP') ? 'selected' : '';
        select.insertAdjacentHTML("beforeend", `<option value="${curCode}" ${selected}>${curCode}</option>`);
    }
    select.addEventListener('change', () => {
        const code   = select.value;
        const imgTag = select.parentElement.querySelector("img");
        imgTag.src   = `https://flagcdn.com/48x36/${Country_List[code].toLowerCase()}.png`;
    })
})

async function getExchangeRate() {
    
}

window.addEventListener('load', getExchangeRate);
getBtn.addEventListener('click', (e) => {
    e.preventDefault();
    getExchangeRate();
})

exIcon.addEventListener("click", () => {
    [fromCur.value, toCur.value] = [toCur.value, fromCur.value];
    [fromCur, toCur].forEach((select) => {
        const code = select.value;
        const imgTag = select.parentElement.querySelector("img");
        imgTag.src = `https://flagcdn.com/48x36/${Country_List[code].toLowerCase()}.png`;
    })

    getExchangeRate();
})

// second 
function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[toCurrency];
            const result = (amount * exchangeRate).toFixed(2);
            document.getElementById('result').textContent = `${amount} ${fromCurrency} = ${result} ${toCurrency}`;
        })
        .catch(error => {
            console.error('Ошибка при получении курсов валют:', error);
        });
}