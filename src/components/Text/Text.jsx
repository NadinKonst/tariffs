import { useState } from "react";
import "./Text.scss";

export default function AddText() {
  const [newText, setNewText] = useState("");
  const [showText, setShowText] = useState("");

  const handleAddText = (e) => {
    setNewText(e.target.value);
  };

  const handleShowText = () => {
    setShowText(newText);
    setNewText("");
  };

  return (
    <div className="container">
      <input type="text" required value={newText} onChange={handleAddText} />
      <button type="button" onClick={handleShowText}>
        Add Text
      </button>
      <p className="text">{showText}</p>
    </div>
  );
}
