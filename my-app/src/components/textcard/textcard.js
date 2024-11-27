import './textcard.css';

function Textcard({review}) {

    return (<div className="card">
        <div className="card-text">{review.text}</div>
    </div>)
}

export default Textcard;