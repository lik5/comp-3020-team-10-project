// nav-bar.js
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.nav-tabs .button');
    const url = window.location.href;

    function getToggleState(url) {
        if (url.endsWith('/') || url.endsWith('index.html')) {
            return 'home-button';
        } else if (url.includes('store/all')) {
            return 'products-button';
        } else if (url.includes('cart')) {
            return 'cart-button';
        } else {
            return 'home-button';
        }
    }

    function updateToggle(activeId) {
        buttons.forEach(button => button.classList.remove('active'));
        document.getElementById(activeId).classList.add('active');
    }

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            const target = e.target.id;
            if (target === 'home-button') {
                window.location.href = '/';
            } else if (target === 'products-button') {
                window.location.href = '/store/all';
            } else if (target === 'cart-button') {
                window.location.href = '/cart';
            }
            updateToggle(target);
        });
    });

    // Initialize toggle state
    const initialToggle = getToggleState(url);
    updateToggle(initialToggle);
});
