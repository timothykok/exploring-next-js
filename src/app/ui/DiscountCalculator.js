"use client";

import { useState } from "react";

export default function DiscountCalculator() {
  const [price, setPrice] = useState("");
  const [discountRate, setDiscountRate] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const calculateDiscount = async () => {
    try {
      const response = await fetch("/api/calculate-discount", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          price: parseFloat(price),
          discountRate: parseFloat(discountRate) / 100, // Convert percentage to decimal
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setError(errorData.error);
        return;
      }

      const data = await response.json();
      setResult(data.discountedPrice);
      setError(null); // Clear any previous errors
    } catch (err) {
      setError("An unexpected error occurred");
    }
  };

  return (
    <div className="discount-calculator">
      <h1 className="discount-calculator-title">Discount Calculator</h1>
      <p className="discount-calculator-description"> hidden server side business logic </p>
      <div className="input-group">
        <label htmlFor="price" className="input-label">
          Price:
        </label>
        <input
          id="price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="input-field"
        />
      </div>
      <div className="input-group">
        <label htmlFor="discountRate" className="input-label">
          Discount Rate (%):
        </label>
        <input
          id="discountRate"
          type="number"
          value={discountRate}
          onChange={(e) => setDiscountRate(e.target.value)}
          className="input-field"
        />
      </div>
      <button className="calculate-button" onClick={calculateDiscount}>
        Calculate
      </button>
      {result && <p className="result">Discounted Price: ${result.toFixed(2)}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}