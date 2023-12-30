let buttonAuthorInformation = document.querySelector(".buttonAuthorInformation");
let paragraphAuthor = document.querySelector(".paragraphAuthor");

buttonAuthorInformation.addEventListener("click", () => {
    paragraphAuthor.innerHTML = "Oskar Właszczuk <br>Pochodzę z Warszawy i pisanie dla Was to dla mnie niezwykła szansa, cieszę się, że mogę przelewać swoje opinię o serialach, książkach i filmach na stronnice internetowej przeglądarki. Moim konikiem od zawsze były klimaty dark fantasy, między innymi Berserk, czy Wiedźmin. Jako niezmienny autorytet książkowy uznaje, takich pisarkich geniuszy, jak Dmitry Glukhovsky, Andrzej Sapkowski, czy George R. R. Martin."
    if (buttonAuthorInformation.innerText === "Pokaż informacje o autorze" && paragraphAuthor.innerHTML === "Oskar Właszczuk <br>Pochodzę z Warszawy i pisanie dla Was to dla mnie niezwykła szansa, cieszę się, że mogę przelewać swoje opinię o serialach, książkach i filmach na stronnice internetowej przeglądarki. Moim konikiem od zawsze były klimaty dark fantasy, między innymi Berserk, czy Wiedźmin. Jako niezmienny autorytet książkowy uznaje, takich pisarkich geniuszy, jak Dmitry Glukhovsky, Andrzej Sapkowski, czy George R. R. Martin.") {
        buttonAuthorInformation.innerText = "Ukryj informacje o autorze"
    } else {
        buttonAuthorInformation.innerText = "Pokaż informacje o autorze"
        paragraphAuthor.innerText = "Oskar Właszczuk"
    };
});

let buttonChangeBackgroundColor = document.querySelector(".buttonChangeBackgroundColor");
let container = document.querySelector(".container");

buttonChangeBackgroundColor.addEventListener("click", () => {
    container.classList.toggle("containerDark");
    buttonChangeBackgroundColor.innerText === "Ciemny motyw" ? buttonChangeBackgroundColor.innerText = "Jasny motyw" : buttonChangeBackgroundColor.innerText = "Ciemny motyw";
});

let buttonRemoveImage = document.querySelector(".buttonRemoveImage");
let image = document.querySelector(".image");

buttonRemoveImage.addEventListener("click", () => {
    image.classList.toggle("imageRemove");
    buttonRemoveImage.innerText === "Usuń zdjęcie" ? buttonRemoveImage.innerText = "Pokaż zdjęcie" : buttonRemoveImage.innerText = "Usuń zdjęcie"
});

