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