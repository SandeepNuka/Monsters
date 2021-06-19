import "./cardlist_container1.css";
const Card = (props) => (
  <div className="cardlist_container">
    <img
      alt="monsters"
      src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
    />
    <h2> {props.monster.name}</h2>
    <p>{props.monster.website}</p>
    <p> {props.monster.email}</p>
  </div>
);

export default Card;
