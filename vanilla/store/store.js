// store.js
const tabProductType = window.localStorage.getItem("tabProductType");
let activeTab = 1;

if (tabProductType === "computers") {
    activeTab = 2;
} else if (tabProductType === "phones") {
    activeTab = 3;
} else if (tabProductType === "tnd") {
    activeTab = 4;
}

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

function navigateTo() {
    window.location.href = "../product/product.html";
}

const products = [
    {
        id: 1,
        type: "computers",
        name: "Apple Macbook Air M3",
        description: "Renewed",
        price: "$999.99",
        imgSrc: "apple macbook air m3.jpg",
    },
    {
        id: 2,
        type: "phones",
        name: "Samsung Galaxy S24 Ultra",
        description: "TND Recycled",
        price: "$799.00",
        imgSrc: "samsung galaxy s24 ultra.jpg",
    },
    {
        id: 3,
        type: "computers",
        name: "Google Chromebook",
        description: "Used",
        price: "$223.50",
        imgSrc: "",
    },
    {
        id: 4,
        type: "phones",
        name: "Google Pixel 8",
        description: "Used",
        price: "$599.00",
        imgSrc: "",
    },
    {
        id: 5,
        type: "computers",
        name: "Lenovo Thinkpad",
        description: "TND Recycled",
        price: "$150.12",
        imgSrc: "",
    },
    {
        id: 6,
        type: "phones",
        name: "Samsung Galaxy S9",
        description: "TND Recycled",
        price: "$194.99",
        imgSrc: "",
    },
    {
        id: 7,
        type: "phones",
        name: "Samsung Galaxy S9",
        description: "Renewed",
        price: "$230.99",
        imgSrc: "",
    },
    {
        id: 8,
        type: "computers",
        name: "Lenovo Yoga",
        description: "Used",
        price: "$463.99",
        imgSrc: "",
    },
    {
        id: 9,
        type: "computers",
        name: "Apple Macbook Air M3",
        description: "Used",
        price: "$647.98",
        imgSrc: "apple macbook air m3.jpg"
    },
    {
        id: 10,
        type: "phones",
        name: "Samsung Galaxy S9",
        description: "TND Recycled",
        price: "$194.99",
        imgSrc: "",
    },
    {
        id: 0,
        type: "tnd",
        name: "TND Office Mouse",
        description: "TND Brand </br> <strong>45%</strong> recycled plastic",
        price: "$6.00",
        imgSrc: "tnd office mouse.jpg",
    },
    {
        id: 0,
        type: "tnd",
        name: "TND Keyboard",
        description: "TND Brand </br> <strong>80%</strong> recycled plastic",
        price: "$12.10",
        imgSrc: "tnd keyboard.png",
    }
    // Add more products as needed
];

function renderProducts() {
    const productGrid = document.getElementById("product-grid");
    productGrid.innerHTML = ""; // Clear existing products

    products
    .filter((product) => 
        activeTab === 1 || 
        product.type === (activeTab === 2 ? "computers" : 
                          activeTab === 3 ? "phones" : 
                          "tnd"))

        .forEach((product) => {
            const productElement = document.createElement("div");
            productElement.className = "grid-item";
            if (product.description.includes("TND")){
                productElement.innerHTML = `
                <div class="test-img">
                    <img src="../images/${product.imgSrc}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <div class="product-name">${product.name}</div>
                    <div class="product-description special">${product.description}</div>
                    <div class="price-normal">${product.price}</div>
                </div>
            `;
            }
            else{

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
            }
            productElement.onclick = () => {
                window.localStorage.setItem("productType", product.type);
                window.localStorage.setItem("tabProductType", product.type);
                window.localStorage.setItem("productName", product.name);
                navigateTo();
            };
            productGrid.appendChild(productElement);
        });
}

// Initial render
renderProducts();
updateTab(activeTab);