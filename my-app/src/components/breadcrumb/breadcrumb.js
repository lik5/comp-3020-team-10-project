import './breadcrumb.css';

function Breadcrumb({links}) {
    const productType = links.type.charAt(0).toUpperCase()+links.type.slice(1);
    return (
        <ul className="breadcrumb">
            <li><a href="../../">Home</a></li>
            <li><a href={"../../store/"+links.type}>{productType}</a></li>
            <li>{links.name}</li>
        </ul>
    )
}

export default Breadcrumb;