import './nav-bar.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function NavBar() {
    let navigate = useNavigate();
    const url = window.location.href;

    function getToggleState(url) {
        const objInfo = url.split("http://localhost:3000/");
        if (objInfo.length < 2) {
            return 1;
        } else if (objInfo[1].includes("cart")) {
            return 3;
        } else {
            return 2;
        }
    }

    const [toggle, setToggle] = useState(getToggleState(url));

    function updateToggle(id) {
        setToggle(id);
    }
    const navigateTo = (path, id) => {
        navigate("/"+path);
        updateToggle(id);
    }

   return ( <div className="nav-bar">
        <div className='logo'>TechNeverDies</div>
        <div className="search-box">
            <input type="search" id="search-bar" name="searchbar" placeholder="Search the store"></input>
        </div>
        <div className='nav-tabs'>
            <button className= {toggle === 1 ? 'button active' : 'button'} onClick={() => navigateTo("", 1)}>Home</button>
            <button className= {toggle === 2 ? 'button active' : 'button'} onClick={() => navigateTo("store/all", 2)} >Products</button>
            <button className= {toggle === 3 ? 'button active' : 'button'} onClick={() => navigateTo("cart", 3)}>Cart</button>
        </div>
    </div>)
}

export default NavBar;