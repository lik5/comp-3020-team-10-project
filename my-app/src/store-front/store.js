import './store.css';
import { useNavigate } from 'react-router-dom';

function Store() {
    let navigate = useNavigate();
    function navigateTo(type, name) {
        navigate("/product/"+type+"/"+name);
    }

    return(   
    <div className="outer-grid">
        <div className="button-tabs">
            <button className="tab active" onclick="displayAll(event)">All</button>
            <button className="tab" onclick="displayTVs(event)">TVs</button>
            <button className="tab" onclick="displayComputers(event)">Computers</button>
            <button className="tab" onclick="displayPhones(event)">Phones</button>
        </div>

        <div className="filters">
            <div className="filter-content">
                Filters
                <ul>
                    <li>Apple</li>
                    <li>Samsung</li>
                    <li>Google</li>

                </ul>
                
                <div className="slide-container">
                    <label for="minPrice">Max Price:</label>
                    <input type="range" id="maxPrice" min="0" max="1000" value="1000" step="1"/>
                    <span>$1000</span>
                </div>
            </div>
            
        </div>


        <div className="product-grid">
            <div className="grid-item" onClick={()=>navigateTo("computers", "apple-macbook-air-m3")}>
                <div className="test-img">
                    <img src={require("../data/images/apple macbook air m3.jpg")} alt="Product"/>
                </div>
                <div className="product-info">
                    <div className="product-name">Apple Macbook Air M3</div>
                    <div className="product-description special">Renewed</div>
                    <div className="price-normal">$1299.99</div>
                </div>
            </div>

            <div className="grid-item">
                <div className="test-img"></div>
                <div className="product-info">
                    <div className="product-name">iPhone Pro</div>
                    <div className="product-description">Some Description</div>
                    <div className="price-normal">$320.76</div>

                </div>

            </div>

            <div className="grid-item">
                <div className="test-img"></div>
                <div className="product-info">
                    <div className="product-name">iPhone Pro</div>
                    <div className="product-description">Some Description</div>
                    <div className="price-normal">$320.76</div>

                </div>

            </div>


            <div className="grid-item">
                <div className="test-img"></div>
                <div className="product-info">
                    <div className="product-name">iPhone Pro</div>
                    <div className="product-description special">Replaced with <strong>TND</strong> recycled materials <br/> <strong>(45% recycled parts)</strong></div>
                    <div className="price-normal">$320.76</div>

                </div>
            </div>


            <div className="grid-item">
                <div className="test-img"></div>
                <div className="product-info">
                    <div className="product-name">iPhone Pro</div>
                    <div className="product-description">Some Description</div>
                    <div className="price-normal">$320.76</div>
                </div>
            </div>

        </div>

    </div>)
}

export default Store;