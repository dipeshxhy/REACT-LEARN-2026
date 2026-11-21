import type { PizzaData } from './data';

export default function MenuItem({ pizza }: { pizza: PizzaData }) {
  return (
    <article className="pizza">
      <img src={pizza.photoName} alt={pizza.name} />
      <div>
        <h3>{pizza.name}</h3>
        <p>{pizza.ingredients}</p>
        <span>{pizza.price}</span>
      </div>
    </article>
  );
}
