import React, { useState } from "react";

export default function SavingsTimeline({ price, monthlyIncome, monthlyExpenses }) {
  const leftover = Math.max(monthlyIncome - monthlyExpenses, 0);

  if (leftover <= 0) {
    return (
      <div style={{
        marginTop: "18px",
        paddingTop: "14px",
        borderTop: "1px dashed #DDD6C4",
        fontFamily: "'Inter', sans-serif",
        fontSize: "13px",
        color: "#2B2A22",
        lineHeight: 1.5
      }}>
        There's no monthly buffer to save from right now.
      </div>
    );
  }

  const minMonths = Math.ceil(price / leftover);
  const comfortableMonths = Math.max(minMonths, Math.ceil(minMonths * 1.5));

  // Maintain months in state, initialized to comfortableMonths
  const [months, setMonths] = useState(comfortableMonths);

  const decrement = () => {
    if (months > minMonths) {
      setMonths(months - 1);
    }
  };

  const increment = () => {
    if (months < 24) {
      setMonths(months + 1);
    }
  };

  const monthlySavings = price / months;
  const percentOfIncome = monthlyIncome > 0 ? (monthlySavings / monthlyIncome) * 100 : 0;

  const formattedSavings = Math.round(monthlySavings).toLocaleString("en-IN");
  const roundedPercent = Math.round(percentOfIncome);

  return (
    <div style={{
      marginTop: "18px",
      paddingTop: "14px",
      borderTop: "1px dashed #DDD6C4",
      fontFamily: "'Inter', sans-serif",
      color: "#2B2A22"
    }}>
      {/* Row 1: label "Buy it in:" then a stepper */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "12px"
      }}>
        <span style={{ fontSize: "13.5px", fontWeight: 600 }}>Buy it in:</span>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <button
            onClick={decrement}
            disabled={months <= minMonths}
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              border: "1.5px solid #2B2A22",
              background: "#FFF",
              color: "#2B2A22",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: months <= minMonths ? "not-allowed" : "pointer",
              opacity: months <= minMonths ? 0.35 : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              outline: "none"
            }}
          >
            −
          </button>
          <span style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "13.5px",
            fontWeight: 700,
            minWidth: "75px",
            textAlign: "center"
          }}>
            {months} {months === 1 ? "month" : "months"}
          </span>
          <button
            onClick={increment}
            disabled={months >= 24}
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              border: "1.5px solid #2B2A22",
              background: "#FFF",
              color: "#2B2A22",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: months >= 24 ? "not-allowed" : "pointer",
              opacity: months >= 24 ? 0.35 : 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
              outline: "none"
            }}
          >
            +
          </button>
        </div>
      </div>

      {/* Row 2: Save ₹{monthlySavings}/month as bold headline number */}
      <div style={{ marginBottom: "4px" }}>
        <span style={{ fontSize: "18px", fontWeight: 800 }}>
          Save ₹{formattedSavings}/month
        </span>
      </div>

      {/* Row 3: smaller/muted text percentage */}
      <div>
        <span style={{ fontSize: "12.5px", color: "#8B8577" }}>
          that's about {roundedPercent}% of what you take home
        </span>
      </div>
    </div>
  );
}
