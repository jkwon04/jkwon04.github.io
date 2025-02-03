document.addEventListener("DOMContentLoaded", function () {
    const sortButton = document.getElementById("sort-button");
    const sortIcon = document.getElementById("sort-icon");
    let ascending = true;

    sortButton.addEventListener("click", function () {
        const container = document.querySelector(".image-container"); // Parent container for images
        const items = Array.from(container.querySelectorAll(".item")); // Select all items

        // Sort items alphabetically based on the text content
        items.sort((a, b) => {
            const nameA = a.querySelector(".text").textContent.trim();
            const nameB = b.querySelector(".text").textContent.trim();

            return ascending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        });

        // Append sorted items back to the container in new order
        items.forEach(item => container.appendChild(item));

        // Toggle sorting order for next click
        ascending = !ascending;

        // Update arrow icon (↓ for A-Z, ↑ for Z-A)
        sortIcon.textContent = ascending ? "↓" : "↑";
    });
});