import './store.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Store() {
    let navigate = useNavigate();
    const url = window.location.href;

    function getProductType(url) {
        const objInfo = url.split("http://localhost:3000/store/");
        return objInfo[1];
    }

    function getTabState(productType) {
        if(productType.toLowerCase() === "all"){
            return 1;
        } else if (productType.toLowerCase() === "computers") {
            return 2;
        } else if (productType.toLowerCase() === "phones") {
            return 3;
        }

        return 1;
    }

    const [tab, setTab] = useState(getTabState(getProductType(url)));

    function updateTab(id) {
        setTab(id);
    }
    
    function navigateTo(type, name) {
        navigate("/product/"+type+"/"+name);
    }

    return(   
    <div className="outer-grid">
        <div className="button-tabs">
            <button className= {tab === 1 ? 'tab active' : 'tab'} onClick={()=> updateTab(1)}>All</button>
            <button className= {tab === 2 ? 'tab active' : 'tab'} onClick={()=> updateTab(2)}>Computers</button>
            <button className= {tab === 3 ? 'tab active' : 'tab'} onClick={()=> updateTab(3)}>Phones</button>
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
            {tab === 1 || tab === 2 ? 
                <div className="grid-item" onClick={()=>navigateTo("computers", "apple-macbook-air-m3")}>
                    <div className="test-img">
                        <img src={require("../data/images/apple macbook air m3.jpg")} alt="Product"/>
                    </div>
                    <div className="product-info">
                        <div className="product-name">Apple Macbook Air M3</div>
                        <div className="product-description special">Renewed</div>
                        <div className="price-normal">$1299.99</div>
                    </div>
                </div> : <></>}

            {tab === 1 || tab === 3 ? 
                <div className="grid-item" onClick={()=>navigateTo("phones", "samsung-galaxy-s24-ultra")}>
                    <div className="test-img">
                        <img src={require("../data/images/samsung galaxy s24 ultra.jpg")} alt="Product"/>
                    </div>
                    <div className="product-info">
                        <div className="product-name">Samsung Galaxy S24 Ultra</div>
                        <div className="product-description">Recycled</div>
                        <div className="price-normal">$999.00</div>
                    </div>
                </div> : <></>}

            {tab === 1 || tab === 3 ? 
                <div className="grid-item">
                    <div className="test-img"></div>
                    <div className="product-info">
                        <div className="product-name">iPhone Pro</div>
                        <div className="product-description">Some Description</div>
                        <div className="price-normal">$320.76</div>
                    </div>
                </div> : <></>}

            {tab === 1 || tab === 3 ? 
                <div className="grid-item">
                    <div className="test-img"></div>
                    <div className="product-info">
                        <div className="product-name">iPhone Pro</div>
                        <div className="product-description special">Replaced with <strong>TND</strong> recycled materials <br/> <strong>(45% recycled parts)</strong></div>
                        <div className="price-normal">$320.76</div>

                    </div>
                </div> : <></>}


            {tab === 1 || tab === 3 ? 
                <div className="grid-item">
                    <div className="test-img"></div>
                    <div className="product-info">
                        <div className="product-name">iPhone Pro</div>
                        <div className="product-description">Some Description</div>
                        <div className="price-normal">$320.76</div>
                    </div>
                </div> : <></>}
        </div>

    </div>)
}

export default Store;