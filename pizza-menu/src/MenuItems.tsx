import type { PizzaData } from './data';
import MenuItem from './MenuItem';

export default function MenuItems({ pizzas }: { pizzas: PizzaData[] }) {
  return (
    <section className="pizzas">
      {pizzas.map((pizza) => (
        <MenuItem key={pizza.name} pizza={pizza} />
      ))}
    </section>
  );
}
