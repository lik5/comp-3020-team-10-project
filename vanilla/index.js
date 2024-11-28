// homepage.js

function handleDonate() {
    alert("Thank you for choosing to donate!");
}

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.category-button');
    const url = window.location.href;

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const target = e.target.id;
            if (target === 'shop-all') {
                window.location.href = './store/store.html';
            } else if (target === 'shop-computers') {
                window.location.href = './store/store.html';
            } else if (target === 'shop-phones') {
                window.location.href = './store/store.html';
            }
            updateToggle(target);
        });
    });
});
