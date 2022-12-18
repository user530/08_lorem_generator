import React, { useState } from "react";
import data from "./data";

export default function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(number);
    amount = Math.min(amount, data.length);
    amount = Math.max(1, amount);
    setText(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="number">Number of paragraphs:</label>
        <input
          type="number"
          name="number"
          id="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />

        <button type="submit" className="btn">
          Generate text
        </button>
      </form>

      <article className="lorem-text">
        {text.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
  );
}
