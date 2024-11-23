import './breadcrumb.css';

function Breadcrumb({links}) {
    return (
        <ul className="breadcrumb">
            <li><a href="../../">Home</a></li>
            <li><a href="../../store">{links.type}</a></li>
            <li>{links.name}</li>
        </ul>
    )
}

export default Breadcrumb;