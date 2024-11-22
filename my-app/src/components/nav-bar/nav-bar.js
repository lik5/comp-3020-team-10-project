import './nav-bar.css';
import { useNavigate } from 'react-router-dom';

function NavBar() {
    let navigate = useNavigate();
    const navigateTo = (path) => {
        navigate("/"+path);
    }

   return ( <div className="nav-bar">
        <div className='logo'>TechNeverDies</div>
        <div className="search-box">
            <input type="search" id="search-bar" name="searchbar" placeholder="Search the store"></input>
        </div>
        <div className='nav-tabs'>
            <button onClick={() => navigateTo("")}>Home</button>
            <button onClick={() => navigateTo("store")} >Products</button>
            <button onClick={() => navigateTo("cart")}>Cart</button>
        </div>
    </div>)
}

export default NavBar;