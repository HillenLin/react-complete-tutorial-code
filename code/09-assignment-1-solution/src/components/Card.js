import "./Card.css";

function Card(props) {
  return <div className={`card ${props.otherClassName}`}>{props.children}</div>;
}

export default Card;
