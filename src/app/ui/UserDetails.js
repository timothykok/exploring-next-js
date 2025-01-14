"use client";

import { useState } from "react";

export default function UserDetails() {
  const [detailsVisible, setDetailsVisible] = useState(false); // Correct variable and setter name

  return (
    <button
      className="user-details-button"
      onClick={() => setDetailsVisible(!detailsVisible)}
    >
      {detailsVisible ? "Hide Details" : "Show Details"}
    </button>
  );
}
