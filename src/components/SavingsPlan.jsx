import React from "react";

const MUSTARD_DARK = "#E2A85E";
const CALC_MINT = "#BFE0D3";
const BADGE = "#4B5D3A";
const INK = "#2B2A22";
const INK_MUTED = "#8B8577";
const TRACK_LIGHT = "#E7E1CE";

function inr(n) {
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

function Bar({ pct, color = MUSTARD_DARK, track = TRACK_LIGHT, height = 10 }) {
  return (
    <div style={{ height: `${height}px`, borderRadius: "6px", background: track, overflow: "hidden" }}>
      <div
        style={{
          width: `${Math.max(0, Math.min(100, pct))}%`,
          height: "100%",
          background: color,
          borderRadius: "6px",
          transition: "width 0.25s ease",
        }}
      />
    </div>
  );
}

export default function SavingsPlan({ result }) {
  if (!result) return null;

  const noBuffer = result.noBuffer;
  const needsPlan = !noBuffer && result.price > result.leftover;
  
  const aggressiveMonthly = needsPlan ? result.leftover : 0;
  const aggressiveMonths = needsPlan ? Math.max(1, Math.ceil(result.price / result.leftover)) : null;
  const comfortableMonthly = needsPlan ? result.leftover * 0.5 : 0;
  const comfortableMonths = needsPlan ? Math.max(1, Math.ceil(result.price / comfortableMonthly)) : null;
  const isLongWait = aggressiveMonths !== null && aggressiveMonths > 6;
  const monthsCap = comfortableMonths ? Math.max(comfortableMonths, 2) : 2;

  if (!noBuffer && !needsPlan) return null;

  return (
    <div style={{ marginTop: "18px", paddingTop: "14px", borderTop: "1px dashed #DDD6C4" }}>
      <span
        style={{
          display: "inline-block",
          background: BADGE,
          color: "#fff",
          fontSize: "9px",
          fontWeight: 700,
          letterSpacing: "0.06em",
          padding: "3px 10px",
          borderRadius: "999px",
          marginBottom: "12px",
        }}
      >
        GETTING THERE
      </span>

      {noBuffer ? (
        <div
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "13px",
            color: INK,
            background: "#F3EFE2",
            borderRadius: "10px",
            padding: "12px 14px",
            lineHeight: 1.5,
          }}
        >
          <strong>Milo's honest take:</strong> your bills already use up everything you make. Free up some room in your budget — lower a bill, add income — before saving toward this.
        </div>
      ) : (
        <div>
          {isLongWait && (
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12.5px",
                color: INK,
                background: "#F3EFE2",
                borderRadius: "10px",
                padding: "10px 12px",
                lineHeight: 1.5,
                marginBottom: "12px",
              }}
            >
              Even going all-in, this is a <strong>{aggressiveMonths}-month</strong> commitment. Worth asking if a cheaper option gets you 80% of the way there.
            </div>
          )}
          
          {/* Plan 1: Aggressive */}
          <div style={{ marginBottom: "12px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "5px" }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, color: INK }}>Save it all</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: "13.5px", color: INK }}>
                {inr(aggressiveMonthly)}/mo{" "}
                <span style={{ color: INK_MUTED, fontWeight: 400, fontSize: "11.5px" }}>
                  · {aggressiveMonths} mo{aggressiveMonths === 1 ? "" : "s"}
                </span>
              </span>
            </div>
            <Bar pct={(aggressiveMonths / monthsCap) * 100} color={MUSTARD_DARK} />
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: INK_MUTED, marginTop: "4px" }}>
              every rupee you have left over, each month
            </div>
          </div>

          {/* Plan 2: Comfortable */}
          <div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "5px" }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, color: INK }}>Save half</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontWeight: 700, fontSize: "13.5px", color: INK }}>
                {inr(comfortableMonthly)}/mo{" "}
                <span style={{ color: INK_MUTED, fontWeight: 400, fontSize: "11.5px" }}>
                  · {comfortableMonths} mo{comfortableMonths === 1 ? "" : "s"}
                </span>
              </span>
            </div>
            <Bar pct={(comfortableMonths / monthsCap) * 100} color={CALC_MINT} />
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", color: INK_MUTED, marginTop: "4px" }}>
              keeps a cushion for the rest of your month
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
