import OrderButton from './OrderButton';

export default function Footer() {
  const openTime = 12;
  const closeTime = 22;
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= openTime && currentHour <= closeTime;
  return (
    <footer className="footer order">
      {isOpen && <p>We're open from 12:00 to 22:00. Come visit us or order online.</p>}
      {!isOpen && <p>We are currently closed. We will be open from 12:00 to 22:00.</p>}
      <OrderButton />
    </footer>
  );
}
