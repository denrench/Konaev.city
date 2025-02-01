document.addEventListener("DOMContentLoaded", () => {
    console.log("Сайт успешно загружен!");
    // Вы можете добавить интерактивность, если необходимо
});

    const cardsData = [
        {
            title: "История",
            content: "Конаев имеет богатую и интересную историю, которая восходит к древним временам.",
            image: "history.jpg"
        },
        {
            title: "Культура",
            content: "Город славится своими традициями и культурными мероприятиями.",
            image: "culture.jpg"
        },
        {
            title: "Достопримечательности",
            content: "Посетите уникальные архитектурные памятники и природные зоны!",
            image: "landmarks.jpg"
        }
    ];

    const cardsContainer = document.getElementById("info-cards");

    cardsData.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.title}">
            <h3>${card.title}</h3>
            <p>${card.content}</p>
        `;
        cardsContainer.appendChild(cardElement);
    });
;

function learnMore() {
    alert("Больше информации доступно скоро!");
}
