function renderTextcard(review, containerId = "textcard-container") {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error(`Container with ID "${containerId}" not found!`);
        return;
    }

    // Create the card
    const card = document.createElement("div");
    card.className = "card";

    // Create the card text
    const cardText = document.createElement("div");
    cardText.className = "card-text";
    cardText.textContent = review.text;

    // Assemble the card
    card.appendChild(cardText);

    // Add the card to the container
    container.appendChild(card);
}
