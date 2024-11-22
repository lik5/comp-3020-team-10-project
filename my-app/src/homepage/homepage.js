import './homepage.css';

function Homepage() {

    return (
        <div className="Homepage">
            <header id="home">
                <h1>TechNeverDies</h1>
            </header>
            <section id="about">
                <h2>About Us</h2>
                <p>TechNeverDies is committed to revolutionizing the way we handle electronic waste by promoting sustainability and responsible recycling practices.<br/> As a dedicated e-waste recycling company, our mission is to reduce environmental impact by providing individuals and businesses<br/>with an easy and efficient way to recycle outdated or unused electronics. We believe that no tech should ever truly "die," and by <br/>repurposing materials, we aim to give them a second life while conserving natural resources</p>
                <p>Total e-waste recycled: <strong>9,654 kg</strong></p>
                <button className="donate action-button">Donate</button>
            </section>
            <section id="products">
                <h2>Shop by Category</h2>
                <div className="categories">
                    <button className="category-button" onClick={()=>alert('Shop All Clicked!')}>Shop All</button>
                    <button className="category-button" onClick={()=>alert('TVs Clicked!')}>TVs</button>
                    <button className="category-button" onClick={()=>alert('Computers Clicked!')}>Computers</button>
                    <button className="category-button" onClick={()=>alert('Phones Clicked!')}>Phones</button>
                    <button className="category-button" onClick={()=>alert('Gaming Clicked!')}>Gaming</button>
                    <button className="category-button" onClick={()=>alert('Parts Clicked!')}>Parts</button>
                </div>
            </section>
        </div>
    );
}

export default Homepage;
