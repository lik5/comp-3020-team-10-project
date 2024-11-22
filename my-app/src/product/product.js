import './product.css';

function Product() {
    return(<div class="container">
        <ul class="breadcrumb">
            <li><a href="../">Home</a></li>
            <li><a href="../store">Computers</a></li>
            <li>Macbook Air M3</li>
        </ul>
    <div class="product">
        <section class="product-section">
            <div class="product-image">
                <img src={require("../data/images/apple macbook air m3.jpg")} alt="Product Image"/>
            </div>
        </section>

        <section class="product-details" >
            <div class="product-header">
                <h1>Macbook Air M3</h1>
            </div>
            <div class="product-description">
                <p>The latest iteration of Apple's ultra-portable laptop, combining a sleek design with cutting-edge performance powered by the next-generation M3 chip. The M3 chip starts the next generation of Apple silicon, with even more speed and power efficiency. You can work with more streams of 4K and 8K ProRes video with the high‑performance media engine, and keep working — or playing — all day and into the night with up to 18 hours of battery life.</p>
            </div>
            <div class="price-normal">$1299.99</div>

            <div class="product-components">
                <h2>Specifications</h2>
                <ul>
                    <li>Processor: Apple M3</li>
                    <li>Ram: 8 GB</li>
                    <li>Storage: 256 GB SSD</li>
                    <li>Display: 13.6-inch Retina</li>
                    <li>BatteryLife: Up to 18 hours</li>
                    <li>Weight: 2.7 pounds</li>
                </ul>
            </div>
        
            <div class="quantity-section">
                <form>
                    <input type="number" id="quantity" name="quantity" min="1" value="1"/>
                    <button type="submit">Add to Cart</button>
                </form>
            </div>
        </section>
    </div>
        <section>
            <div class="review-section">
                <h2>Leave a Review</h2>
                <form>
                    <textarea id="review" name="review" placeholder="Write your review here..."></textarea>
                    <button type="submit">Submit Review</button>
                </form>
                <div class="reviews">

                </div>
            </div>
        </section>
    </div>)
}

export default Product;