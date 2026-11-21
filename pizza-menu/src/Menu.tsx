import { pizzaData } from './data';
import MenuItems from './MenuItems';
import Title from './Title';

export default function Menu() {
  return (
    <>
      {pizzaData.length === 0 && <p>We are still working on our menu. Please come back later.</p>}
      {pizzaData.length > 0 && (
        <main className="menu">
          <Title>Our Menu</Title>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven,
            all organic, all delicious.
          </p>
          <MenuItems pizzas={pizzaData} />
        </main>
      )}
    </>
  );
}
