function loadState() {
    const quantity = parseInt(window.localStorage.getItem("Apple Macbook Air M3"));
    if (!quantity || quantity <= 0) {
        document.getElementById("cartItem").style.visibility="hidden";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Add event listener for checkout button
    const checkoutButton = document.querySelector(".checkout-button");
    checkoutButton.addEventListener("click", () => {
        // alert("Proceeding to checkout...");
        const modal = document.querySelector('#modal');
        modal.showModal();
    });

    const deleteButton = document.getElementById("delete-btn");
    deleteButton.addEventListener("click", () => {
        window.localStorage.removeItem("Apple Macbook Air M3");
        loadState();
        updateQuantityPrice(0);
        updateRecycledAmount(0);
    });

    const continueShopButton = document.getElementById("continueShopBtn");
    continueShopButton.addEventListener("click", () => {
        window.localStorage.removeItem("Apple Macbook Air M3");
        const url = window.location.href;
        window.location.href = url.includes('index.html') ? './index.html' : '../index.html';
    });

    const input = document.querySelector("#quantity-input");
    const decrementBtn = document.querySelector("#decrement-btn");
    const incrementBtn = document.querySelector("#increment-btn");

    input.value = parseInt(window.localStorage.getItem("Apple Macbook Air M3")) || 0;
    input.min = 1;


    const itemPrice = document.querySelector(".item-price");
    const totalPrice = document.querySelector(".total-price");
    const amountRecycled = document.querySelector(".amount-recycled");
    const amountRecycledModal = document.getElementById("amountRecycledModal");

    function changeValue(delta) {
        const newValue = parseInt(input.value || 0) + delta;
        if (newValue >= input.min) {
            input.value = newValue;
            window.localStorage.setItem("Apple Macbook Air M3", input.value);
            updateQuantityPrice();
            updateRecycledAmount();
            updateRecycledAmount();
            updateButtonsState();
        }
    }

    function validateInput() {
        const value = parseInt(input.value) || 0;
        if (value < input.min) {
            input.value = input.min;
        }
        updateQuantityPrice();
        updateRecycledAmount();
        updateRecycledAmount();
        updateButtonsState();
    }

    function updateButtonsState() {
        decrementBtn.disabled = parseInt(input.value) <= parseInt(input.min);
    }

    function updateQuantityPrice(price=999.99) {
        itemPrice.innerHTML = (input.value*price).toFixed(2);
        totalPrice.innerHTML = itemPrice.innerHTML;
    }

    function updateRecycledAmount(amount=3.5) {
        amountRecycled.innerHTML = (input.value*amount).toFixed(1);
        amountRecycledModal.innerHTML = amountRecycled.innerHTML;
    }

    updateButtonsState();
    updateQuantityPrice();
    updateRecycledAmount();

    incrementBtn.addEventListener("click", () => changeValue(1));
    decrementBtn.addEventListener("click", () => changeValue(-1));
    input.addEventListener("blur", () => validateInput());
});

loadState();
