function createBreadcrumb(links) {
    const breadcrumb = document.getElementById('breadcrumb');

    // Home link
    const homeItem = document.createElement('li');
    const homeLink = document.createElement('a');
    homeLink.href = "../../";
    homeLink.innerText = "Home";
    homeItem.appendChild(homeLink);
    breadcrumb.appendChild(homeItem);

    // Type link
    const typeItem = document.createElement('li');
    const typeLink = document.createElement('a');
    typeLink.href = `../../store/${links.type}`;
    typeLink.innerText = links.type;
    typeItem.appendChild(typeLink);
    breadcrumb.appendChild(typeItem);

    // Current page name
    const nameItem = document.createElement('li');
    nameItem.innerText = links.name;
    breadcrumb.appendChild(nameItem);
}

// Example usage
createBreadcrumb({
    type: "Electronics",
    name: "Smartphone"
});
