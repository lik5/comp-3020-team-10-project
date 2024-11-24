import './store.css';
import { useNavigate } from 'react-router-dom';

function Store() {
    let navigate = useNavigate();
    function navigateTo(type, name) {
        navigate("/product/"+type+"/"+name);
    }

<<<<<<< Updated upstream
=======
    // the tabs
    function displayAll(event) {
        const tabs = document.getElementsByClassName("tab");
        for (let i=0; i < tabs.length; i++)
            tabs[i].className = "tab";
        event.currentTarget.className += " active";
    
    }
    function displayTVs (event){
        const tabs = document.getElementsByClassName("tab");
        for (let i=0; i < tabs.length; i++)
            tabs[i].className = "tab";
        event.currentTarget.className += " active";
    
    }
    function displayComputers(event){
        const tabs = document.getElementsByClassName("tab");
        for (let i=0; i < tabs.length; i++)
            tabs[i].className = "tab";
        event.currentTarget.className += " active";
        
    }
    function displayPhones(event) {
        const tabs = document.getElementsByClassName("tab");
        for (let i=0; i < tabs.length; i++)
            tabs[i].className = "tab";
        event.currentTarget.className += " active";
    
    }

    function filterPrice(val){
        var slider = document.getElementById("price-slider");
        var textbox = document.getElementById("price-textbox");
    
        textbox.value = val;
        slider.value = val;
    }
        

>>>>>>> Stashed changes
    return(   
    <div className="outer-grid">
        <div className="button-tabs">
            <button className="tab active" onclick="displayAll(event)">All</button>
            <button className="tab" onclick="displayTVs(event)">TVs</button>
            <button className="tab" onclick="displayComputers(event)">Computers</button>
            <button className="tab" onclick="displayPhones(event)">Phones</button>
        </div>
        <div className="empty"></div>
        <div className="filters">
            <div className="filter-content"> 
                <div className="filter-header">Filter</div>
                <ul>
                    <li><input type="checkbox"/> Apple</li>
                    <li><input type="checkbox"/> Google</li>
                    <li><input type="checkbox"/> Lenovo</li>
                    <li><input type="checkbox"/> Samsung</li>
                    <li><input type="checkbox"/> TND</li>
                    <li><input type="checkbox"/> Other</li>

                </ul>
                
                <div className="slide-container">
                    <label for="maxPrice">Max Price:</label>
                    <input type="range" id="price-slider" onInput={(value) => filterPrice(value)} min="0" max="5000" value="1000" step="1"/>
                    <input type="text" id="price-textbox" onInput={(value) => filterPrice(value)} value="1000"/>
                </div>

                <ul>
                    <li><input type="checkbox"/> TND Recycled</li>
                    <li><input type="checkbox"/> Renewed</li>
                    <li><input type="checkbox"/> Used</li>
                </ul>
            </div>


            <div className="ad">
                <h4>What does TND Recycled mean?</h4>
                    <p>
                        <strong>TND Recycled</strong> - some of the parts have been replaced by recycled materials, such as batteries, plastics and glass from screens. 
                    </p>
                    <p>TND collects your donated devices, recycles their components, and transforms them into new components helping to reduce waste</p>
                    <p>
                        <strong>Renewed</strong> - refers to a used product that have been repaired to working condition. 
                    </p>
                    <p>
                        We replace broken parts with donated parts making it work like brand new again!
                    </p>
              
                    <p>
                        <strong>Used</strong> - second hand products that do not need replacement parts and guaranteed to work like brand new
                    </p>
                    
                    <h4>Contribute to our website!</h4>
                    <p>Donate your old items for recycling. We accept anything!</p>
                    <button>Donate</button>
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