import { useState, useRef } from "react";
import { RotateCcw, Copy, Check } from "lucide-react";
import FrogMascot from "./components/FrogMascot";
import Calculator from "./components/Calculator";
import SavingsPlan from "./components/SavingsPlan";
import SavingsTimeline from "./components/SavingsTimeline";

const BG = "#E7EFC9";
const BLOB = "#D3E2A6";
const INK = "#2B2A22";
const INK_MUTED = "#8B8577";
const RED = "#B23A2E";
const GREEN = "#3E6B4F";
const AMBER = "#C98A2C";

function inr(n) {
  if (isNaN(n) || n === null || n === undefined) return "—";
  return "₹" + Math.round(n).toLocaleString("en-IN");
}

const QUESTIONS = [
  { key: "price", label: "What are you eyeing? 👀", short: "what are you eyeing", type: "number", placeholder: "1200" },
  { key: "income", label: "What do you actually take home a month?", short: "monthly take-home", type: "number", placeholder: "4000" },
  { key: "expenses", label: "What's already spoken for? (rent, bills, etc.)", short: "monthly fixed expenses", type: "number", placeholder: "2800" },
  {
    key: "need",
    label: "Want or need — be honest.",
    short: "want or need",
    type: "choice",
    options: [
      { value: "want", label: "It's a want" },
      { value: "need", label: "It's a need" },
    ],
  },
  {
    key: "usage",
    label: "How often will you actually use it?",
    short: "usage frequency",
    type: "choice",
    options: [
      { value: "once", label: "Once, maybe" },
      { value: "sometimes", label: "Sometimes" },
      { value: "constant", label: "Constantly" },
    ],
  },
  {
    key: "savings",
    label: "Got any savings set aside right now?",
    short: "savings buffer",
    type: "choice",
    options: [
      { value: "cushion", label: "Yes, a decent cushion" },
      { value: "little", label: "A little" },
      { value: "nothing", label: "Nothing right now" },
    ],
  },
  {
    key: "debt",
    label: "Carrying any credit card or loan debt at the moment?",
    short: "existing debt",
    type: "choice",
    options: [
      { value: "nodebt", label: "No debt" },
      { value: "manageable", label: "Some, but manageable" },
      { value: "tight", label: "Yes, it's tight" },
    ],
  },
];

function liveVal(key, step, answers, current) {
  const q = QUESTIONS[step];
  if (q && q.key === key && q.type === "number") {
    return parseFloat(current) || 0;
  }
  return parseFloat(answers[key]) || 0;
}

function liveCalc(step, answers, current) {
  const f = (n) => Math.round(n).toLocaleString("en-IN");
  const price = liveVal("price", step, answers, current);
  const income = liveVal("income", step, answers, current);
  const expenses = liveVal("expenses", step, answers, current);

  if (step === 0) {
    return {
      label: "PURCHASE PRICE",
      value: `₹${f(price)}`,
      formula: "",
      negative: false,
    };
  }

  if (step === 1) {
    if (income <= 0) {
      return {
        label: "VS INCOME",
        value: "₹0",
        formula: "keep typing income...",
        negative: false,
      };
    }
    const pct = (price / income) * 100;
    return {
      label: "VS INCOME",
      value: `${Math.round(Math.min(pct, 999))}%`,
      formula: `${f(price)} / ${f(income)}`,
      negative: false,
    };
  }

  if (step === 2) {
    const leftover = income - expenses;
    return {
      label: "LEFT AFTER BILLS",
      value: leftover < 0 ? `−₹${f(Math.abs(leftover))}` : `₹${f(leftover)}`,
      formula: `${f(income)} − ${f(expenses)}`,
      negative: leftover < 0,
    };
  }

  if (step === 3) {
    const leftover = Math.max(income - expenses, 0);
    const pct = leftover > 0 ? (price / leftover) * 100 : 999;
    return {
      label: "SHARE OF LEFTOVER",
      value: `${Math.round(Math.min(pct, 999))}%`,
      formula: `${f(price)} / ${f(leftover)}`,
      negative: pct > 100,
    };
  }

  // Step 4 and final result
  const leftoverAfterPurchase = income - expenses - price;
  return {
    label: "LEFT AFTER THIS",
    value: leftoverAfterPurchase < 0 ? `−₹${f(Math.abs(leftoverAfterPurchase))}` : `₹${f(leftoverAfterPurchase)}`,
    formula: `${f(income)} − ${f(expenses)} − ${f(price)}`,
    negative: leftoverAfterPurchase < 0,
  };
}

function computeVerdict(answers) {
  const price = parseFloat(answers.price) || 0;
  const income = parseFloat(answers.income) || 0;
  const expenses = parseFloat(answers.expenses) || 0;
  const leftover = Math.max(income - expenses, 0);
  const noBuffer = income - expenses <= 0;
  const pct = leftover > 0 ? (price / leftover) * 100 : Infinity;
  const need = answers.need;
  const usage = answers.usage;
  const usagePhrase = { once: "once, maybe", sometimes: "sometimes", constant: "all the time" }[usage] || "sometimes";
  const pctLabel = isFinite(pct) ? Math.round(Math.min(pct, 999)) : null;

  let score = 0;
  if (pct < 15) score += 2;
  else if (pct < 30) score += 1;
  else if (pct < 50) score += 0;
  else score -= 1;

  if (need === "need") score += 1;
  if (usage === "constant") score += 1;
  if (usage === "once") score -= 1;

  // New Questions Scoring
  if (answers.savings === "cushion") score += 1;
  if (answers.savings === "nothing") score -= 1;
  if (answers.debt === "nodebt") score += 1;
  if (answers.debt === "tight") score -= 1;

  let verdict, color;
  if (score >= 3) {
    verdict = "APPROVED";
    color = GREEN;
  } else if (score >= 1) {
    verdict = "RISKY";
    color = AMBER;
  } else {
    verdict = "DENIED";
    color = RED;
  }

  let headline, subline;
  const tightBudget = noBuffer || pct >= 50;
  const lowValue = need === "want" && usage === "once";

  if (verdict === "APPROVED") {
    headline = "This one's a smart buy.";
    subline = `It's only ${pctLabel}% of what's left after bills, and you said you'd use it ${usagePhrase}.`;
  } else if (verdict === "RISKY") {
    if (tightBudget) {
      headline = "Technically yes. Emotionally... we'll see.";
      subline = "Your bank account will survive. It will not be happy about it.";
    } else {
      headline = "The money's fine. The habit, less so.";
      subline = `It's only ${pctLabel}% of your leftover — but you said you'd use this ${usagePhrase}.`;
    }
  } else {
    if (noBuffer) {
      headline = "Your budget has no room for this.";
      subline = "Bills already consume everything you make. Add buffer income before looking at extras.";
    } else if (pct >= 50) {
      headline = "This one's too big for your budget.";
      subline = `It would consume ${pctLabel}% of what you have left after bills.`;
    } else if (lowValue) {
      headline = "Skip it — you'd barely use it.";
      subline = `It's a want that you would only use ${usagePhrase}. The value isn't there.`;
    } else {
      headline = "This one's not worth it right now.";
      subline = `Between the price tag and how little you'd use it, the numbers don't add up.`;
    }
  }

  return { price, income, expenses, leftover, noBuffer, pct, need, usage, verdict, color, headline, subline };
}

function getLiveResult(step, answers, current) {
  const price = parseFloat(answers.price) || 0;
  const income = parseFloat(answers.income) || 0;
  
  let expenses = parseFloat(answers.expenses) || 0;
  if (step === 2) {
    expenses = parseFloat(current) || 0;
  }

  const leftover = Math.max(income - expenses, 0);
  const noBuffer = income - expenses <= 0;
  const pct = leftover > 0 ? (price / leftover) * 100 : Infinity;
  
  const need = answers.need || (step === 3 ? current : null);
  const usage = answers.usage || (step === 4 ? current : null);

  return {
    price,
    income,
    expenses,
    leftover,
    noBuffer,
    pct,
    need,
    usage,
  };
}

function getScorecard(result, step) {
  if (!result) return { factors: [], summaryText: "" };
  const factors = [];
  
  // 1. Share of leftover (shown if step >= 2)
  if (step >= 2) {
    let leftoverRead = "neutral";
    let leftoverStatus = "neutral";
    if (result.noBuffer || result.pct >= 50) {
      leftoverRead = "against you";
      leftoverStatus = "against";
    } else if (result.pct < 30) {
      leftoverRead = "reasonable";
      leftoverStatus = "favor";
    }
    factors.push({
      icon: "💸",
      label: "Share of leftover",
      value: result.noBuffer ? "n/a" : `${Math.round(result.pct)}%`,
      read: leftoverRead,
      status: leftoverStatus
    });
  }

  // 2. Want or need (shown if step >= 4)
  if (step >= 4) {
    let needRead = "neutral";
    let needStatus = "neutral";
    if (result.need === "need") {
      needRead = "in your favor";
      needStatus = "favor";
    }
    factors.push({
      icon: "🎯",
      label: "Want or need",
      value: result.need === "need" ? "Need" : "Want",
      read: needRead,
      status: needStatus
    });
  }

  // 3. How often you'll use it (shown if step >= 5)
  if (step >= 5) {
    let usageRead = "neutral";
    let usageStatus = "neutral";
    if (result.usage === "constant") {
      usageRead = "in your favor";
      usageStatus = "favor";
    } else if (result.usage === "once") {
      usageRead = "against you";
      usageStatus = "against";
    }
    factors.push({
      icon: "🔁",
      label: "How often you'll use it",
      value: result.usage === "constant" ? "Constantly" : result.usage === "once" ? "Once, maybe" : "Sometimes",
      read: usageRead,
      status: usageStatus
    });
  }

  // Count summaries (only when completed, i.e. step >= 7)
  if (step >= 7) {
    const favorCount = factors.filter(f => f.status === "favor").length;
    const neutralCount = factors.filter(f => f.status === "neutral").length;
    const againstCount = factors.filter(f => f.status === "against").length;

    const parts = [];
    if (favorCount > 0) parts.push(`${favorCount} ${favorCount === 1 ? "factor" : "factors"} in your favor`);
    if (againstCount > 0) parts.push(`${againstCount} ${againstCount === 1 ? "factor" : "factors"} working against you`);
    if (neutralCount > 0) parts.push(`${neutralCount} neutral`);

    const summaryText = `→ ${parts.join(", ")} — ${result.verdict}`;
    return { factors, summaryText };
  }

  return { factors, summaryText: "" };
}

export default function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState("");
  const [copied, setCopied] = useState(false);
  const auditNo = useRef(String(Math.floor(1 + Math.random() * 99)).padStart(4, "0"));
  const dateStr = useRef(new Date().toLocaleDateString("en-GB").replace(/\//g, "."));

  const done = step >= QUESTIONS.length;
  const result = done ? computeVerdict(answers) : null;
  const liveResult = !done ? getLiveResult(step, answers, current) : result;
  const scorecard = getScorecard(liveResult, step);

  function submitAnswer(value) {
    const q = QUESTIONS[step];
    setAnswers({ ...answers, [q.key]: value });
    setCurrent("");
    setStep(step + 1);
  }

  function reset() {
    setStep(0);
    setAnswers({});
    setCurrent("");
    setCopied(false);
    auditNo.current = String(Math.floor(1 + Math.random() * 99)).padStart(4, "0");
  }

  function handleCopy() {
    if (!result) return;
    const text =
      `CROAK IT DOWN — AUDIT No. ${auditNo.current}\n` +
      `Item Price: ${inr(result.price)}\n` +
      `Milo's Verdict: ${result.verdict}\n` +
      `${result.headline}\n` +
      `${result.subline}`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const calc = liveCalc(step, answers, current);
  const leftoverAfterPurchase = result ? result.income - result.expenses - result.price : 0;

  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        background: BG,
        position: "relative",
        overflow: "hidden",
        padding: "48px 16px",
        boxSizing: "border-box",
      }}
    >
      {/* Background blobs */}
      <div style={{ position: "absolute", top: "-60px", left: "-60px", width: "220px", height: "220px", borderRadius: "50%", background: BLOB, opacity: 0.6, filter: "blur(2px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-80px", right: "-40px", width: "280px", height: "280px", borderRadius: "50%", background: BLOB, opacity: 0.5, filter: "blur(2px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", top: "30%", right: "6%", width: "90px", height: "90px", borderRadius: "50%", background: BLOB, opacity: 0.4, pointerEvents: "none" }} />

      <div
        className="bn-columns"
        style={{
          display: "flex",
          gap: "28px",
          maxWidth: "1000px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* LEFT COLUMN: Receipt Audit Card */}
        <div className="figma-card" style={{ flex: "1 1 450px", display: "flex", flexDirection: "column" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: "16px" }}>
            <h1 style={{ fontSize: "28px", fontWeight: "800", color: "#000", margin: 0 }}>
              Croak it Down
            </h1>
            <p style={{ fontSize: "13px", color: INK_MUTED, marginTop: "4px", margin: 0 }}>
              An unnecessarily thorough spending audit
            </p>
          </div>

          {/* Dotted separator above metadata */}
          <div className="dotted-divider-fine" />

          {/* Receipt Info metadata row */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontFamily: "'Space Mono', monospace",
              color: INK_MUTED,
              fontSize: "13px",
              padding: "2px 0",
            }}
          >
            <span>AUDIT No. {auditNo.current}</span>
            <span>{dateStr.current}</span>
          </div>

          {/* Dotted separator below metadata */}
          <div className="dotted-divider-fine" style={{ marginBottom: "20px" }} />

          {/* Questionnaire container */}
          <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
            {!done ? (
              <div>
                {/* 1. ANSWERED LOG LISTED ABOVE THE ACTIVE QUESTION INPUT (if any exist) */}
                {step > 0 && (
                  <div style={{ marginBottom: "24px" }}>
                    {QUESTIONS.slice(0, step).map((q) => (
                      <div
                        key={q.key}
                        className="row-in"
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "6px 0",
                          fontSize: "13.5px",
                        }}
                      >
                        <span style={{ color: INK_MUTED }}>{q.short}</span>
                        <span style={{ fontWeight: 700, color: INK, fontFamily: "'Space Mono', monospace" }}>
                          {q.type === "number"
                            ? inr(answers[q.key])
                            : q.options.find((o) => o.value === answers[q.key])?.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* 2. ACTIVE QUESTION SECTION (Always placed below the logs, starts at top when log is empty) */}
                <div className="row-in" style={{ marginBottom: "20px" }}>
                  <h2
                    style={{
                      fontSize: "18px",
                      fontWeight: "800",
                      color: "#2B2A22",
                      margin: "0 0 16px 0",
                      letterSpacing: "-0.01em",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {QUESTIONS[step].label}
                  </h2>

                  {QUESTIONS[step].type === "number" ? (
                    <div>
                      <div className="receipt-input" style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
                        <span
                          style={{
                            fontFamily: "'Space Mono', monospace",
                            color: "#8B8577",
                            marginRight: "8px",
                            fontWeight: "700",
                            fontSize: "16px",
                          }}
                        >
                          ₹
                        </span>
                        <input
                          inputMode="decimal"
                          value={current}
                          onChange={(e) => setCurrent(e.target.value.replace(/[^0-9.]/g, ""))}
                          onKeyDown={(e) => {
                            if (e.key === "Enter" && current !== "" && !isNaN(current)) submitAnswer(current);
                          }}
                          placeholder={QUESTIONS[step].placeholder}
                          style={{
                            border: "none",
                            outline: "none",
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "16px",
                            width: "100%",
                            color: INK,
                            background: "transparent",
                          }}
                        />
                      </div>
                      <button
                        type="button"
                        className={`next-btn ${current !== "" && !isNaN(current) ? "active" : ""}`}
                        onClick={() => current !== "" && !isNaN(current) && submitAnswer(current)}
                        disabled={current === "" || isNaN(current)}
                        style={{
                          cursor: current === "" || isNaN(current) ? "not-allowed" : "pointer",
                        }}
                      >
                        Next
                      </button>
                    </div>
                  ) : (
                    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                      {QUESTIONS[step].options.map((opt) => (
                        <button
                          key={opt.value}
                          className="choice-btn"
                          onClick={() => submitAnswer(opt.value)}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ) : (
              /* Completed State: Receipt summary layout matches Image 2 */
              <div>
                {/* List all items first */}
                <div style={{ marginBottom: "16px" }}>
                  {QUESTIONS.map((q) => (
                    <div
                      key={q.key}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "6px 0",
                        fontSize: "13.5px",
                      }}
                    >
                      <span style={{ color: INK_MUTED }}>{q.short}</span>
                      <span style={{ fontWeight: 700, color: INK, fontFamily: "'Space Mono', monospace" }}>
                        {answers[q.key] ? (
                          q.type === "number"
                            ? inr(answers[q.key])
                            : q.options.find((o) => o.value === answers[q.key])?.label
                        ) : "—"}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Separator line above left after this */}
                <div className="dotted-divider-fine" />

                {/* Left after this summary row */}
                <div style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", fontSize: "14px" }}>
                  <span style={{ fontWeight: 700, color: INK }}>Left after this</span>
                  <span className="orbit-num" style={{ fontWeight: 800, color: leftoverAfterPurchase < 0 ? RED : INK, fontSize: "16px" }}>
                    {leftoverAfterPurchase < 0 ? `−₹${Math.abs(leftoverAfterPurchase).toLocaleString("en-IN")}` : `₹${leftoverAfterPurchase.toLocaleString("en-IN")}`}
                  </span>
                </div>

                {/* Separator line below left after this */}
                <div className="dotted-divider-fine" />

                {/* Action Buttons */}
                <div style={{ display: "flex", gap: "8px", marginTop: "20px" }}>
                  <button
                    onClick={handleCopy}
                    style={{
                      flex: 1,
                      background: "#fff",
                      border: `1.5px solid ${INK}`,
                      borderRadius: "10px",
                      padding: "10px",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "13px",
                      color: INK,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                    }}
                  >
                    {copied ? <Check size={14} /> : <Copy size={14} />}
                    {copied ? "Copied" : "Copy verdict"}
                  </button>
                  <button
                    onClick={reset}
                    style={{
                      flex: 1,
                      background: INK,
                      border: "none",
                      borderRadius: "10px",
                      padding: "10px",
                      fontFamily: "'DM Sans', sans-serif",
                      fontWeight: 600,
                      fontSize: "13px",
                      color: "#fff",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "6px",
                    }}
                  >
                    <RotateCcw size={14} /> New audit
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Milo's working area */}
        <div className="figma-card verdict-card" style={{ flex: "1 1 450px", display: "flex", flexDirection: "column" }}>
          {step < 2 ? (
            /* Simple centered header for initial speech bubble state */
            <div style={{ textAlign: "center", marginBottom: "8px" }}>
              <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#000", margin: 0 }}>
                Milo’s verdict
              </h2>
            </div>
          ) : (
            /* Layout with noted subhead on the left and small frog mascot on the right */
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <div style={{ textAlign: "left" }}>
                <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#000", margin: 0 }}>
                  Milo’s verdict
                </h2>
                <p style={{ fontStyle: "italic", fontSize: "14px", color: INK_MUTED, margin: "4px 0 0 0" }}>
                  noted.
                </p>
              </div>
              <FrogMascot
                mood={done ? result.verdict.toLowerCase() : "thinking"}
                size={65}
                className="frog-idle"
              />
            </div>
          )}

          {!done ? (
            step < 2 ? (
              /* Thinking / Active questionnaire state: show Mascot and speech text */
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "20px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "10px" }}>
                  <div style={{
                    background: "#FFFBF2",
                    border: "1.5px solid #2B2A22",
                    borderRadius: "16px",
                    padding: "12px 14px",
                    position: "relative",
                    flex: 1,
                    fontFamily: "'DM Sans', sans-serif"
                  }}>
                    <p style={{ fontSize: "13px", color: INK, margin: 0, lineHeight: 1.45, fontWeight: 500 }}>
                      "I look at how much of your leftover this eats into, whether it's a want or a need, and how often you'll actually use it."
                    </p>
                    {/* Speech bubble pointer */}
                    <div style={{
                      position: "absolute",
                      right: "-7px",
                      top: "22px",
                      width: "12px",
                      height: "12px",
                      background: "#FFFBF2",
                      borderRight: "1.5px solid #2B2A22",
                      borderTop: "1.5px solid #2B2A22",
                      transform: "rotate(45deg)"
                    }} />
                  </div>
                  <FrogMascot
                    mood="thinking"
                    size={85}
                    className="frog-idle"
                    style={{ flexShrink: 0 }}
                  />
                </div>
                <p style={{ fontStyle: "italic", fontSize: "12.5px", color: INK_MUTED, margin: 0, fontFamily: "'Space Mono', monospace" }}>
                  let's calculate....
                </p>
              </div>
            ) : (
              /* Scorecard starts forming while answering subsequent questions */
              scorecard && scorecard.factors.length > 0 && (
                <div style={{
                  textAlign: "left",
                  marginBottom: "20px",
                  padding: "16px",
                  background: "#FFFBF2",
                  borderRadius: "16px",
                  border: "1.5px solid #2B2A22",
                  fontFamily: "'DM Sans', sans-serif"
                }} className="row-in">
                  <div style={{ fontWeight: 800, fontSize: "13.5px", marginBottom: "10px", color: INK }}>
                    What Milo's judging
                  </div>
                  {scorecard.factors.map((f, idx) => (
                    <div key={idx} style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "12.5px",
                      padding: "6px 0",
                      borderBottom: idx < scorecard.factors.length - 1 ? "1px solid rgba(43, 42, 34, 0.08)" : "none"
                    }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span>{f.icon}</span>
                        <span style={{ color: INK_MUTED }}>{f.label}</span>
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ fontWeight: 700, color: INK }}>{f.value}</span>
                        <span style={{
                          fontSize: "10.5px",
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: "999px",
                          textTransform: "lowercase",
                          background: f.status === "favor" ? "#D5E7D7" : f.status === "against" ? "#F5D6D3" : "#F3EFE2",
                          color: f.status === "favor" ? GREEN : f.status === "against" ? RED : INK_MUTED,
                        }}>
                          {f.read}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )
            )
          ) : (
            /* Completed state: clean Figma layout + scorecard */
            <div style={{ textAlign: "center", marginBottom: "24px" }}>
              {/* Stamp Badge centered */}
              <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
                <div
                  className="stamp"
                  style={{
                    border: `1.5px solid ${result.color === GREEN ? GREEN : result.color === RED ? RED : "#C05C1C"}`,
                    color: result.color === GREEN ? GREEN : result.color === RED ? RED : "#C05C1C",
                    background: result.color === GREEN ? "#D5E7D7" : result.color === RED ? "#F5D6D3" : "#F2DCB9",
                    borderRadius: "10px",
                    padding: "6px 28px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "28px",
                    fontWeight: "800",
                    letterSpacing: "0.02em",
                    display: "inline-block",
                  }}
                >
                  {result.verdict}
                </div>
              </div>

              {/* Headline & Subline */}
              <div className="row-in">
                <h3 style={{ fontWeight: 800, fontSize: "18px", color: INK, margin: "0 0 8px 0", lineHeight: 1.3 }}>
                  {result.headline}
                </h3>
                <p style={{ fontSize: "14px", color: INK_MUTED, margin: 0, lineHeight: 1.4 }}>
                  {result.subline}
                </p>
              </div>

              {/* Factor Scorecard Breakdown */}
              {scorecard && (
                <div style={{
                  textAlign: "left",
                  marginTop: "20px",
                  padding: "16px",
                  background: "#FFFBF2",
                  borderRadius: "16px",
                  border: "1.5px solid #2B2A22",
                  fontFamily: "'DM Sans', sans-serif"
                }} className="row-in">
                  <div style={{ fontWeight: 800, fontSize: "13.5px", marginBottom: "10px", color: INK }}>
                    What Milo's judging
                  </div>
                  {scorecard.factors.map((f, idx) => (
                    <div key={idx} style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      fontSize: "12.5px",
                      padding: "6px 0",
                      borderBottom: idx < scorecard.factors.length - 1 ? "1px solid rgba(43, 42, 34, 0.08)" : "none"
                    }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                        <span>{f.icon}</span>
                        <span style={{ color: INK_MUTED }}>{f.label}</span>
                      </span>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ fontWeight: 700, color: INK }}>{f.value}</span>
                        <span style={{
                          fontSize: "10.5px",
                          fontWeight: 700,
                          padding: "2px 8px",
                          borderRadius: "999px",
                          textTransform: "lowercase",
                          background: f.status === "favor" ? "#D5E7D7" : f.status === "against" ? "#F5D6D3" : "#F3EFE2",
                          color: f.status === "favor" ? GREEN : f.status === "against" ? RED : INK_MUTED,
                        }}>
                          {f.read}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div style={{
                    marginTop: "10px",
                    paddingTop: "10px",
                    borderTop: "1px dashed rgba(43, 42, 34, 0.15)",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: INK
                  }}>
                    {scorecard.summaryText}
                  </div>
                </div>
              )}

              {/* Savings Plan (only for Risky results) */}
              {result.verdict === "RISKY" && (
                <div style={{ textAlign: "left", marginTop: "14px" }} className="row-in">
                  <SavingsPlan result={result} />
                </div>
              )}

              {/* Savings Timeline (only for Denied results) */}
              {result.verdict === "DENIED" && (
                <div style={{ textAlign: "left", marginTop: "14px" }} className="row-in">
                  <SavingsTimeline price={result.price} monthlyIncome={result.income} monthlyExpenses={result.expenses} />
                </div>
              )}
            </div>
          )}

          {/* Calculator screen cropped at bottom */}
          <div className="calculator-clip">
            <Calculator
              badgeLabel={done ? "PURCHASE PRICE" : calc.label}
              formula={calc.formula}
              value={calc.value}
              isNegative={calc.negative}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
