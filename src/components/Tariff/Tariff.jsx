import { useState } from "react";
import "./Tariff.scss";

export default function Tariff({ name, price, speed, traffic, color }) {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  const styleSelected = selected ? "tariff selected" : "tariff";

  return (
    <div
      className={styleSelected}
      style={{ backgroundColor: color }}
      onClick={handleClick}
    >
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{speed}</p>
      <p>{traffic}</p>
    </div>
  );
}
