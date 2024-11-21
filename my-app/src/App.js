
import './App.css';
import './global.css';

function App() {
  return (
    <div className="App">
      <div class="search-box">
        <input type="search" id="search-bar" name="searchbar" placeholder="Search the store"></input>
      </div>
      <div class="grid-canvas">
        <div class="grid-item">
            <div class="test-img"></div>
            <div class="product-info">
                <div class="product-name">iPhone Pro</div>
                
                <div class="product-description">Renewed</div>
                <div class="price-normal">$129.99</div>

            </div>  

        </div> 

        <div class="grid-item">
            <div class="test-img"></div>
            <div class="product-info">
                <div class="product-name">iPhone Pro</div>
                
                <div class="product-description">Some Description</div>
                <div class="price-normal">$320.76</div>

            </div>  

        </div> 

        <div class="grid-item">
            <div class="test-img"></div>
            <div class="product-info">
                <div class="product-name">iPhone Pro</div>
                <div class="product-description">Some Description</div>
                <div class="price-normal">$320.76</div>
            </div>  
        </div> 
        <div class="grid-item">
            <div class="test-img"></div>
            <div class="product-info">
                <div class="product-name">iPhone Pro</div>
                <div class="product-description">Replaced with recycled</div>
                <div class="price-normal">$320.76</div>
            </div>  
        </div> 
        <div class="grid-item">
            <div class="test-img"></div>
            <div class="product-info">
                <div class="product-name">iPhone Pro</div>
                <div class="product-description">Some Description</div>
                <div class="price-normal">$320.76</div>
            </div>  
        </div>
     </div>
    </div>
  );
}

export default App;
