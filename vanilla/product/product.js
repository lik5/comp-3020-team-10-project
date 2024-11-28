const data = {
    "computers": [
        {
            "name": "Apple MacBook Air M3",
            "processor": "Apple M3",
            "ram": "8 GB",
            "storage": "256 GB SSD",
            "display": "13.6-inch Retina",
            "batteryLife": "Up to 18 hours",
            "weight": "2.7 pounds",
            "description": "The latest iteration of Apple's ultra-portable laptop, combining a sleek design with cutting-edge performance powered by the next-generation M3 chip. The M3 chip starts the next generation of Apple silicon, with even more speed and power efficiency. You can work with more streams of 4K and 8K ProRes video with the high‑performance media engine, and keep working — or playing — all day and into the night with up to 18 hours of battery life.",
            "price": "$1299.99",
            "reviews": ["The M3 chip delivers a significant boost in speed and efficiency", "The best ultraportable laptop out there"]
        },
        {
            "name": "Asus Zenbook 14 OLED (UM3406)",
            "processor": "AMD Ryzen 7",
            "ram": "16 GB",
            "storage": "1 TB SSD",
            "display": "14-inch OLED, 2880 x 1800",
            "batteryLife": "Up to 10 hours",
            "weight": "3.1 pounds"
        },
        {
            "name": "Dell XPS 13 (9345)",
            "processor": "Intel Core Ultra 7",
            "ram": "16 GB",
            "storage": "512 GB SSD",
            "display": "13.4-inch InfinityEdge",
            "batteryLife": "Up to 26 hours",
            "weight": "2.6 pounds"
        },
        {
            "name": "Lenovo ThinkPad X1 Carbon Gen 12",
            "processor": "Intel Core i7-1365U",
            "ram": "16 GB",
            "storage": "512 GB SSD",
            "display": "14-inch, 1920 x 1200",
            "batteryLife": "Up to 15 hours",
            "weight": "2.5 pounds"
        },
        {
            "name": "HP Spectre x360 14",
            "processor": "Intel Core i7-1355U",
            "ram": "16 GB",
            "storage": "1 TB SSD",
            "display": "13.5-inch OLED, 3000 x 2000",
            "batteryLife": "Up to 12 hours",
            "weight": "2.95 pounds"
        },
        {
            "name": "Acer Chromebook Spin 714",
            "processor": "Intel Core i5-1235U",
            "ram": "8 GB",
            "storage": "256 GB SSD",
            "display": "14-inch, 1920 x 1200",
            "batteryLife": "Up to 10 hours",
            "weight": "3.2 pounds"
        },
        {
            "name": "Asus ROG Zephyrus G14",
            "processor": "AMD Ryzen 9",
            "ram": "32 GB",
            "storage": "1 TB SSD",
            "display": "14-inch, 2560 x 1600, 120Hz",
            "batteryLife": "Up to 8 hours",
            "weight": "3.64 pounds"
        },
        {
            "name": "Lenovo Yoga 9i 14 Gen 9",
            "processor": "Intel Core i7-1360P",
            "ram": "16 GB",
            "storage": "1 TB SSD",
            "display": "14-inch OLED, 2880 x 1800",
            "batteryLife": "Up to 12 hours",
            "weight": "3.09 pounds"
        },
        {
            "name": "Dell Inspiron 15",
            "processor": "Intel Core i5-1235U",
            "ram": "8 GB",
            "storage": "256 GB SSD",
            "display": "15.6-inch, 1920 x 1080",
            "batteryLife": "Up to 7 hours",
            "weight": "3.9 pounds"
        },
        {
            "name": "HP Chromebook 14",
            "processor": "Intel N200",
            "ram": "4 GB",
            "storage": "128 GB eMMC",
            "display": "14-inch, 1366 x 768",
            "batteryLife": "Up to 12 hours",
            "weight": "3.2 pounds"
        }
    ],
    "phones": [
        {
        "name": "Apple iPhone 16 Pro Max",
        "processor": "A18 Bionic",
        "ram": "8 GB",
        "storage": "256 GB",
        "display": "6.9-inch Super Retina XDR",
        "batteryLife": "Up to 28 hours",
        "weight": "8.5 ounces"
        },
        {
        "name": "Samsung Galaxy S24 Ultra",
        "processor": "Exynos 2400 / Snapdragon 8 Gen 3",
        "ram": "12 GB",
        "storage": "256 GB",
        "display": "6.8-inch Dynamic AMOLED 2X",
        "batteryLife": "Up to 25 hours",
        "weight": "8.3 ounces",
        "description": "The Samsung Galaxy S24 Ultra is the ultimate powerhouse in Samsung’s flagship lineup, combining cutting-edge technology, premium design, and industry-leading performance.",
        "price": "$1199.99",
        "reviews": []
        },
        {
        "name": "Google Pixel 9 Pro",
        "processor": "Google Tensor G3",
        "ram": "12 GB",
        "storage": "256 GB",
        "display": "6.7-inch LTPO AMOLED",
        "batteryLife": "Up to 24 hours",
        "weight": "7.9 ounces"
        },
        {
        "name": "OnePlus 12",
        "processor": "Snapdragon 8 Gen 3",
        "ram": "16 GB",
        "storage": "256 GB",
        "display": "6.7-inch Fluid AMOLED",
        "batteryLife": "Up to 23 hours",
        "weight": "7.8 ounces"
        },
        {
        "name": "Sony Xperia 1 VI",
        "processor": "Snapdragon 8 Gen 3",
        "ram": "12 GB",
        "storage": "256 GB",
        "display": "6.5-inch OLED 4K",
        "batteryLife": "Up to 22 hours",
        "weight": "7.6 ounces"
        },
        {
        "name": "Xiaomi 14 Pro",
        "processor": "Snapdragon 8 Gen 3",
        "ram": "12 GB",
        "storage": "256 GB",
        "display": "6.73-inch AMOLED",
        "batteryLife": "Up to 24 hours",
        "weight": "7.7 ounces"
        },
        {
        "name": "Oppo Find X7 Pro",
        "processor": "Snapdragon 8 Gen 3",
        "ram": "12 GB",
        "storage": "256 GB",
        "display": "6.78-inch AMOLED",
        "batteryLife": "Up to 23 hours",
        "weight": "7.8 ounces"
        },
        {
        "name": "Asus ROG Phone 9 Pro",
        "processor": "Snapdragon 8 Gen 3",
        "ram": "16 GB",
        "storage": "512 GB",
        "display": "6.78-inch AMOLED, 165Hz",
        "batteryLife": "Up to 20 hours",
        "weight": "9.1 ounces"
        },
        {
        "name": "Motorola Edge 50 Pro",
        "processor": "Snapdragon 8 Gen 3",
        "ram": "12 GB",
        "storage": "256 GB",
        "display": "6.7-inch OLED",
        "batteryLife": "Up to 22 hours",
        "weight": "7.5 ounces"
        },
        {
        "name": "Nokia X100 Pro",
        "processor": "Snapdragon 8 Gen 3",
        "ram": "12 GB",
        "storage": "256 GB",
        "display": "6.8-inch AMOLED",
        "batteryLife": "Up to 24 hours",
        "weight": "7.9 ounces"
        }
    ]
}

function getObjName(url) {
    const objInfo = url.split('?')[0].split("/");
    return objInfo[objInfo.length - 1].replace(/-/g, " ");
}

function getObjType(url) {
    const objInfo = url.split('?')[0].split("/");
    return objInfo[objInfo.length - 2].replace(/-/g, " ");
}

function getObj(type, name) {
    const products = data[type];
    return products.find(product => product.name.toLowerCase() === name.toLowerCase()) || {};
}

function loadProduct() {
    const url = window.location.href;
    const name = getObjName(url);
    const type = getObjType(url);
    const obj = getObj(type, name);

    if (!obj) return;

    document.getElementById("breadcrumb").innerText = `${type.charAt(0).toUpperCase() + type.slice(1)} > ${obj.name}`;
    document.getElementById("product-image").src = `../data/images/${name}.jpg`;
    document.getElementById("product-name").innerText = obj.name;
    document.getElementById("product-description").innerText = obj.description || "No description available.";
    document.getElementById("product-price").innerText = obj.price || "Price unavailable.";

    const specs = document.getElementById("specifications");
    specs.innerHTML = `
        <li>Processor: ${obj.processor}</li>
        <li>RAM: ${obj.ram}</li>
        <li>Storage: ${obj.storage}</li>
        <li>Display: ${obj.display}</li>
        <li>Battery Life: ${obj.batteryLife}</li>
        <li>Weight: ${obj.weight}</li>
    `;

    const reviewsContainer = document.getElementById("reviews");
    if (obj.reviews) {
        reviewsContainer.innerHTML = obj.reviews.map(review => `<p>${review}</p>`).join("");
    }
}

document.getElementById("review-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const reviewText = document.getElementById("review-text").value;
    const reviewsContainer = document.getElementById("reviews");

    if (reviewText.trim()) {
        const newReview = document.createElement("p");
        newReview.innerText = reviewText;
        reviewsContainer.prepend(newReview);
        document.getElementById("review-text").value = "";
    }
});

// Initialize page
loadProduct();