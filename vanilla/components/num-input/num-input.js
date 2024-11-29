document.addEventListener('DOMContentLoaded', () => {
    this.input = this.document.querySelector("#quantity-input");
    this.decrementBtn = this.document.querySelector("#decrement-btn");
    this.incrementBtn = this.document.querySelector("#increment-btn");

    this.input.value = 1;
    this.input.min = 1;

    function changeValue(delta) {
        const newValue = parseInt(this.input.value || 0) + delta;
        if (newValue >= this.input.min) {
            this.input.value = newValue;
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


    updateButtonsState();

    this.incrementBtn.addEventListener("click", () => changeValue(1));
    this.decrementBtn.addEventListener("click", () => changeValue(-1));
    this.input.addEventListener("blur", () => validateInput());
});
