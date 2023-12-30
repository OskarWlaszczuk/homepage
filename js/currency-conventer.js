let formElement = document.querySelector(".js-form");
let inputElemnet = document.querySelector(".js-pln__input");
let strongElement = document.querySelector(".js-form__strong");
let euroElement = document.querySelector(".js-radioEuro__input");
let usdElement = document.querySelector(".js-radioUsd__input");
let cadElement = document.querySelector(".js-radioCad__input");
let gbpElement = document.querySelector(".js-radioGbp__input");

formElement.addEventListener("submit", (even) => {
    even.preventDefault()

    let pln = inputElemnet.value;
    let euro = `${pln}` * 0.23;
    let usd = `${pln}` * 0.25;
    let cad = `${pln}` * 0.34;
    let gbp = `${pln}` * 0.20;

    if (euroElement.checked === true) {
        strongElement.innerText = (`${pln} złotych to w przeliczeniu ${euro.toFixed(2)} euro`);
    } else if (usdElement.checked === true) {
        strongElement.innerText = (`${pln} złotych to w przeliczeniu ${usd.toFixed(2)} dolarów amerykańskich`);
    } else if (cadElement.checked === true) {
        strongElement.innerText = (`${pln} złotych to w przeliczeniu ${cad.toFixed(2)} dolarów kanadyjskich`);
    } else if (gbpElement.checked === true) {
        strongElement.innerText = (`${pln} złotych to w przeliczeniu ${gbp.toFixed(2)} funtów brytyjskich`);
    }
});