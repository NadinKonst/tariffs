import "./Card.css";
import Tariff from "../Tariff/Tariff";
import { data } from "../../data";

export default function Card() {
  return (
    <div className="tariff-card">
      {data.map((tariff, index) => (
        <Tariff key={index} {...tariff} />
      ))}
    </div>
  );
}
