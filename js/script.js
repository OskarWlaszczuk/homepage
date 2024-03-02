const personalDatas = {
    name: "Oskar",
    lastName: "Właszczuk",
    age: 17,
    profession: "front-end developer",
    payment: 5000,
    currency: "PLN",
};

const { name, lastName, age, profession, payment, currency } = personalDatas;

const addNewProperty = () => {
    const { home = "Warszawa" } = personalDatas;
};

const displayFullName = ({ name, lastName }) => console.log(`${name} ${lastName}`);

const displayBio = ({ name, lastName, age, profession, payment, currency, home }) => console.log(`Cześć, mam na imię ${name} ${lastName}, mam ${age} lat i pracuję, jako ${profession}. Miesięcznie zarabiam, ponad ${payment} złoty w ${currency}! Na codzień mieszkam w ${home}`);

addNewProperty(personalDatas);
displayFullName(personalDatas);
displayBio(personalDatas);

