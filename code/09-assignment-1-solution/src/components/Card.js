/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import './Card.css'

const Card = props => {
  return <div className={`card ${props.otherClassName}`}>{props.children}</div>
}

export default Card
