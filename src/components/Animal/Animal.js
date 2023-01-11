import './Animal.css';

export default function Animal(props) {
  return (
    <div className="animal" style={{ top: props.top, left: props.left }}>
      <img src={`animals/${props.type}.svg`} alt={props.name}></img>
      <span className="name">{props.name}</span>
      <p>{props.says}</p>
    </div>
  );
}
