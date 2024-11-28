document.addEventListener("DOMContentLoaded", () => {
    // Add event listener for checkout button
    const checkoutButton = document.querySelector(".checkout-button");
    checkoutButton.addEventListener("click", () => {
        alert("Proceeding to checkout...");
    });

    this.input = this.document.querySelector("#quantity-input");
    this.decrementBtn = this.document.querySelector("#decrement-btn");
    this.incrementBtn = this.document.querySelector("#increment-btn");

    this.input.value = 1;
    this.input.min = 1;


    const itemPrice = document.querySelector(".item-price");
    const totalPrice = document.querySelector(".total-price");

    function changeValue(delta) {
        const newValue = parseInt(this.input.value || 0) + delta;
        if (newValue >= this.input.min) {
            this.input.value = newValue;
            updateQuantityPrice();
            updateButtonsState();
        }
    }

    function validateInput() {
        const value = parseInt(this.input.value) || 0;
        if (value < this.input.min) {
            this.input.value = this.input.min;
        }
        updateButtonsState();
    }

    function updateButtonsState() {
        this.decrementBtn.disabled = parseInt(this.input.value) <= parseInt(this.input.min);
    }

    function updateQuantityPrice(price=1299.99) {
        itemPrice.innerHTML = (this.input.value*price).toFixed(2);
        totalPrice.innerHTML = itemPrice.innerHTML;
    }


    updateButtonsState();
    updateQuantityPrice();

    this.incrementBtn.addEventListener("click", () => changeValue(1));
    this.decrementBtn.addEventListener("click", () => changeValue(-1));
    this.input.addEventListener("input", () => validateInput());
});
