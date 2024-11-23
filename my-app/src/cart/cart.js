import './cart.css';
import NumInput from '../components/num-input/num-input';

function Cart() {
    return(
        <div class="container">
            <div class="cart">
                <div class="cart-header">
                    <h1>Your Cart</h1>
                </div>
                <div class="cart-items">
                    <div class="cart-item">
                        <section class="cart-item-image">
                            <div class="cart-item-image">
                                <img src={require("../data/images/apple macbook air m3.jpg")} alt="Product"/>
                            </div>
                        </section>
                        <section class="cart-item-details">
                            <div class="cart-item-header">
                                <h1>Apple Macbook Air M3</h1>
                            </div>
                            <div class="cart-item-quantity-price">
                                <form class="cart-item-quantity">
                                    <label for="quantity">Quantity:</label>
                                    <NumInput />
                                </form>
                                <div class="cart-item-price">
                                    <h2>$1299.99</h2>
                                </div>
                            </div>
                        </section>
                    </div>
                    
                </div>
                <div class="cart-footer">
                    <hr/>
                    <div class="cart-e-waste-recycled">
                        <p>Your purchase today is helping to recycle <b>3.5kg</b> of e-waste!</p>
                    </div>
                    <div class="cart-total-price">
                        <h2>Total: $1299.99</h2>
                    </div>
                    <div class="cart-checkout-button">
                        <button className="checkout-button action-button" type="checkout">Checkout</button>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Cart;