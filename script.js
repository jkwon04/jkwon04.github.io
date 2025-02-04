document.addEventListener("DOMContentLoaded", function () {
    const sortButton = document.getElementById("sort-button");
    const sortIcon = document.getElementById("sort-icon");
    const container = document.querySelector(".image-container");

    let ascending = true; // Track sorting order

    sortButton.addEventListener("click", function () {
        let items = Array.from(container.querySelectorAll("a"));
        
        // Sort based on the alt attribute of the nested div inside <a>
        items.sort((a, b) => {
            let nameA = a.querySelector(".item").getAttribute("alt").toLowerCase();
            let nameB = b.querySelector(".item").getAttribute("alt").toLowerCase();
            return ascending ? nameA.localeCompare(nameB) : nameB.localeCompare(nameA);
        });

        // Clear container and append sorted elements
        container.innerHTML = "";
        items.forEach(item => container.appendChild(item));

        // Toggle sorting order and button text/icon
        ascending = !ascending;
        sortButton.innerHTML = ascending ? 'Sort A-Z <span id="sort-icon">↓</span>' : 'Sort Z-A <span id="sort-icon">↑</span>';
    });
});