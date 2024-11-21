
function searchProducts() {
    // Get the search query and convert it to lowercase
    const query = document.getElementById('search-bar').value.toLowerCase();
    
    // Get all grid items
    const gridItems = document.querySelectorAll('.grid-item');
    
    // Loop through all items and hide those that don't match the search query
    gridItems[0].querySelector('.product-name').textContent.toLowerCase();
    for (let i = 0; i < gridItems.length; i++)
    {
        const productName = gridItems[i].querySelector('.product-name').textContent.toLowerCase();

        // If the product name includes the search query, show it, otherwise hide it
        if (productName.includes(query)) 
            gridItems[i].style.display = ''; // Show the item
        else 
            gridItems[i].style.display = 'none'; // Hide the item
        
    }
}

function addItem(theimg, type, name, descr, theprice, isSale){
    const gridContainer = document.getElementById("product-grid");

    const gridItem = document.createElement("div");
    const img = document.createElement("div");
    const productInfo = document.createElement("div");
    const productDesc = document.createElement("div");
    const price = document.createElement("div");
    const productName = document.createElement("div");
    
    //div class names
    if (type === "phones")
        gridItem.classList.add("grid-item", "phones");
    else if(type === "computers")
        gridItem.classList.add("grid-item", "computers");
    img.classList.add("test-img");
    productInfo.classList.add("product-info");
    productDesc.classList.add("product-description");
    productName.classList.add("product-name");
    
    // add content to div
    productName.textContent = name;
    productDesc.textContent = descr;
    if (!isSale)
        price.classList.add("price-normal");
    else
    {
        price.classList.add("price-sale");
    }
    
    price.textContent = theprice;
    
    
    productInfo.appendChild(productName);
    productInfo.appendChild(productDesc);
    
    gridItem.appendChild(img);
    gridItem.appendChild(productInfo)
    gridItem.appendChild(price);
    gridContainer.appendChild(gridItem);

}

function filterType(type){
    var items = document.getElementsByClassName("grid-item");

    for (let i=0; i < items.length; i++){
        if (type === "all")
            items[i].style.display = "";
        else if (items[i].className.indexOf(type) > -1)
            items[i].style.display = "";
        else
            items[i].style.display = "none";
    }
    
}

function displayAll(event) {
    const tabs = document.getElementsByClassName("tab");
    for (let i=0; i < tabs.length; i++)
        tabs[i].className = "tab";
    event.currentTarget.className += " active";

    filterType("all");

}
function displayTVs (event){
    const tabs = document.getElementsByClassName("tab");
    for (let i=0; i < tabs.length; i++)
        tabs[i].className = "tab";
    event.currentTarget.className += " active";

}
function displayComputers(event){
    const tabs = document.getElementsByClassName("tab");
    for (let i=0; i < tabs.length; i++)
        tabs[i].className = "tab";
    event.currentTarget.className += " active";

    filterType("computers");
    
}
function displayPhones(event) {
    const tabs = document.getElementsByClassName("tab");
    for (let i=0; i < tabs.length; i++)
        tabs[i].className = "tab";
    event.currentTarget.className += " active";

    filterType("phone");
}

/**
 * Add Products here
 * Parameters: img, product type, product name, description, price, isSale
 * 
 */
function startup(){
    addItem(0, "phones", "iPhone", "This is nice", "$120.99", true);
    addItem(0, "phones", "Samsung Galaxy S9", "This is nice", "$120.99", false);
    addItem(0, "phones", "Samsung Note 5", "This is/..", "$120.99", false);
    addItem(0, "phones", "a Phone", "This is nice", "$120.99", false);
    addItem(0, "computers", "Chromebook", "This is nice", "$120.99", false);

}