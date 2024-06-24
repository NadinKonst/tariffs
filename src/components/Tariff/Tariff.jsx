import { useState } from "react";
import "./Tariff.css";

export default function Tariff({ name, price, speed, traffic, color }) {
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  const style = {
    backgroundColor: color,
  };

  const styles = selected ? "tariff selected" : "tariff";

  return (
    <div className={styles} style={style} onClick={handleClick}>
      <h2>{name}</h2>
      <p>{price}</p>
      <p>{speed}</p>
      <p>{traffic}</p>
    </div>
  );
}
