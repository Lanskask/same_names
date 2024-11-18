import { namesDatabase } from './name_variants.js';

function searchNameVariant() {
    const input = document.getElementById("nameInput").value.trim().toLowerCase();
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    for (const [key, value] of Object.entries(namesDatabase)) {
        if (key.toLowerCase().startsWith(input) || value.variants.some(variant => variant.toLowerCase().startsWith(input))) {
            const nameCard = document.createElement("div");
            nameCard.classList.add("name-card");

            value.variants.forEach(variant => {
                const variantElement = document.createElement("div");
                variantElement.classList.add("name-variant");
                variantElement.textContent = `${variant}`;
                nameCard.appendChild(variantElement);
            });

            resultsContainer.appendChild(nameCard);
        }
    }
}

function displayAllNames() {
    const allNamesContainer = document.getElementById("results");
    allNamesContainer.innerHTML = "";

    for (const [key, value] of Object.entries(namesDatabase)) {
        const nameCard = document.createElement("div");
        nameCard.classList.add("name-card");

        value.variants.forEach(variant => {
            const variantElement = document.createElement("div");
            variantElement.classList.add("name-variant");
            variantElement.textContent = `${variant}`;
            nameCard.appendChild(variantElement);
        });

        allNamesContainer.appendChild(nameCard);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const nameInput = document.getElementById("nameInput");
    displayAllNames();
    nameInput.addEventListener("input", searchNameVariant);
});