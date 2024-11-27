class NumInput {
    constructor(wrapperElement, initialValue = 1, minValue = 1) {
        this.wrapper = wrapperElement;
        this.input = this.wrapper.querySelector("#quantity-input");
        this.decrementBtn = this.wrapper.querySelector("#decrement-btn");
        this.incrementBtn = this.wrapper.querySelector("#increment-btn");

        this.input.value = initialValue;
        this.input.min = minValue;

        this.updateButtonsState();

        this.incrementBtn.addEventListener("click", () => this.changeValue(1));
        this.decrementBtn.addEventListener("click", () => this.changeValue(-1));
        this.input.addEventListener("input", () => this.validateInput());
    }

    changeValue(delta) {
        const newValue = parseInt(this.input.value || 0) + delta;
        if (newValue >= this.input.min) {
            this.input.value = newValue;
            this.updateButtonsState();
        }
    }

    validateInput() {
        const value = parseInt(this.input.value) || 0;
        if (value < this.input.min) {
            this.input.value = this.input.min;
        }
        this.updateButtonsState();
    }

    updateButtonsState() {
        this.decrementBtn.disabled = parseInt(this.input.value) <= parseInt(this.input.min);
    }
}

export default NumInput;
