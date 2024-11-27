import NumInput from "../components/num-input/num-input.js";

document.addEventListener("DOMContentLoaded", () => {
    // Initialize NumInput for each quantity wrapper in the cart
    document.querySelectorAll(".quantity-wrapper").forEach(wrapper => {
        new NumInput(wrapper);
    });

    // Add event listener for checkout button
    const checkoutButton = document.querySelector(".checkout-button");
    checkoutButton.addEventListener("click", () => {
        alert("Proceeding to checkout...");
    });
});
