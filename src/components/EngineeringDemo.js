import React, { useState } from "react";

const records = [
  { title: "The Attention Trap", stage: "published", reviewed: true },
  { title: "The Evidence Trail", stage: "draft", reviewed: true },
  { title: "A new field study", stage: "published", reviewed: false },
];
export function evaluateRecord(record, gate) {
  if (record.stage !== "published")
    return { visible: false, reason: "Draft stays private" };
  if (gate && !record.reviewed)
    return { visible: false, reason: "Review required" };
  return {
    visible: true,
    reason: gate ? "Published + reviewed" : "Published; review gate off",
  };
}

export default function EngineeringDemo() {
  const [gate, setGate] = useState(true);
  const results = records.map((record) => ({
    ...record,
    ...evaluateRecord(record, gate),
  }));
  return (
    <div className="engineering-demo">
      <div className="demo-header">
        <span className="eyebrow">TRY A SMALL SYSTEM</span>
        <span className="demo-label">Illustrative data</span>
      </div>
      <h3>What gets published?</h3>
      <p>
        A status flag alone is not always enough. Toggle the review rule and
        watch which records reach the reader.
      </p>
      <label className="switch-label">
        <input
          type="checkbox"
          checked={gate}
          onChange={(e) => setGate(e.target.checked)}
        />
        <span className="switch-track" aria-hidden="true" />
        <span>Require editorial review</span>
      </label>
      <div className="demo-records">
        {results.map((record) => (
          <div
            key={record.title}
            className={`demo-record ${record.visible ? "record-visible" : ""}`}
          >
            <div>
              <strong>{record.title}</strong>
              <span>
                {record.stage} · {record.reviewed ? "reviewed" : "unreviewed"}
              </span>
            </div>
            <span className="record-result">
              {record.visible ? "↗" : "—"} {record.reason}
            </span>
          </div>
        ))}
      </div>
      <p className="demo-output" role="status">
        {results.filter((record) => record.visible).length} of {results.length}{" "}
        records reach the public collection.
      </p>
      <p className="demo-footnote">
        A simplified rules demo, inspired by my publishing work. These records
        do not reflect the live catalog.
      </p>
    </div>
  );
}
