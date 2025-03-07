const searchInput = document.querySelector("input");
const searchButton = document.querySelector(".form_btn");
const cards = Array.from(document.querySelectorAll(".card"));

searchButton.addEventListener("click", function(event) {
    event.preventDefault();
    const query = searchInput.value.toLowerCase().trim();

    if (query === "") {
        cards.map(card => card.style.display = "block"); // Agar input bo'sh bo'lsa, hamma kartalarni qayta ko'rsatamiz
        return;
    }

    cards.map(card => card.style.display = "none"); // Hammasini yashirib qo'yamiz

    cards.filter(card => card.querySelector(".card_h2").textContent.toLowerCase().includes(query))
         .map(card => card.style.display = "block");
});
