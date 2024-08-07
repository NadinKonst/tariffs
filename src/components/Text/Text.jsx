import { useState } from "react";
import "./Text.scss";

export default function AddText() {
  const [newText, setNewText] = useState("");
  const [showText, setShowText] = useState("");
  const [error, setError] = useState("");

  const handleAddText = (e) => {
    setNewText(e.target.value);
    setError("");
  };

  const handleShowText = () => {
    if (newText.trim() === "") {
      setError("Type something");
      return;
    }

    setShowText(newText);
    setNewText("");
  };

  return (
    <div className="container">
      <input type="text" required value={newText} onChange={handleAddText} />
      <button type="button" onClick={handleShowText}>
        Add Text
      </button>
      {error && <p className="error">{error}</p>}
      <p className="text">{showText}</p>
    </div>
  );
}
