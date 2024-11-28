function createBreadcrumb(productType, productName) {
    const breadcrumb = document.getElementById('breadcrumb');

    // Home link
    const homeItem = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.href = "../index.html";
    homeLink.innerText = "Home";
    homeItem.appendChild(homeLink);
    breadcrumb.appendChild(homeItem);

    // Type link
    const typeItem = document.createElement('li');
    const typeLink = document.createElement('a');
    typeLink.href = `../store/store.html`;
    typeLink.innerText = productType.charAt(0).toUpperCase()+productType.slice(1);
    typeItem.appendChild(typeLink);
    breadcrumb.appendChild(typeItem);

    // Current page name
    const nameItem = document.createElement('li');
    nameItem.innerText = productName;
    breadcrumb.appendChild(nameItem);
}
