export default function Tariff({ name, price, speed, traffic, color }) {
  const style = {
    padding: "16px",
    margin: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    maxWidth: "300px",
    backgroundColor: color,
    transform: price === "550 руб/мес" ? "scale(1.1)" : "none",
  };

  return (
    <div style={style}>
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{speed}</p>
      <p>{traffic}</p>
    </div>
  );
}
