// store.js

let activeTab = 1;

function updateTab(tabId) {
    activeTab = tabId;
    document.querySelectorAll(".tab").forEach((tab, index) => {
        tab.classList.toggle("active", index + 1 === tabId);
    });
    renderProducts();
}

function filterPrice(value) {
    document.getElementById("price-slider").value = value;
    document.getElementById("price-textbox").value = value;
}

function handleDonate() {
    alert("Thank you for donating!");
}

function navigateTo(type, name) {
    alert(`Navigating to ${type}/${name}`);
}

// Sample products
const products = [
    {
        id: 1,
        type: "computers",
        name: "Apple Macbook Air M3",
        description: "Renewed",
        price: "$1299.99",
        imgSrc: "apple macbook air m3.jpg",
    },
    {
        id: 2,
        type: "phones",
        name: "Samsung Galaxy S24 Ultra",
        description: "Recycled",
        price: "$999.00",
        imgSrc: "samsung galaxy s24 ultra.jpg",
    },
    // Add more products as needed
];

function renderProducts() {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = ""; // Clear existing products

    products
        .filter((product) => activeTab === 1 || product.type === (activeTab === 2 ? "computers" : "phones"))
        .forEach((product) => {
            const productElement = document.createElement("div");
            productElement.className = "grid-item";
            productElement.innerHTML = `
                <div class="test-img">
                    <img src="../images/${product.imgSrc}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-description">${product.description}</div>
                    <div class="price-normal">${product.price}</div>
                </div>
            `;
            productElement.onclick = () => navigateTo(product.type, product.name);
            productGrid.appendChild(productElement);
        });
}

// Initial render
renderProducts();
