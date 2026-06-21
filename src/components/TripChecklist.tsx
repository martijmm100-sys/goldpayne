import { useState } from "react";

const CHECKLIST: { group: string; items: string[] }[] = [
  {
    group: "Before you go",
    items: [
      "Confirm panning is allowed at your exact spot (call the agency or landowner)",
      "Check the weather forecast for the day",
      "Tell someone at home where you're going and when you'll be back",
      "Confirm you have at least one companion — never go alone",
      "Download an offline map of the area to your phone",
      "Check for any seasonal stream closures",
    ],
  },
  {
    group: "Gear to pack",
    items: [
      "Gold pan (and a spare for a friend)",
      "Classifier / sieve",
      "Small hand trowel or shovel",
      "Two five-gallon buckets",
      "Snuffer bottle and a vial for your finds",
      "Kneeling pad",
    ],
  },
  {
    group: "Clothing & comfort",
    items: [
      "Waterproof or sturdy closed-toe shoes with good grip",
      "Change of dry clothes and a towel (leave in the car)",
      "Hat, sunglasses, and sunscreen",
      "Gloves",
    ],
  },
  {
    group: "Safety",
    items: [
      "First-aid kit",
      "Plenty of drinking water",
      "Fully charged phone and a backup battery",
      "Whistle",
      "Wading / walking stick",
      "A snack and bug spray",
    ],
  },
  {
    group: "At the creek",
    items: [
      "Set up where you can kneel and reach the water safely",
      "Screen a bucket of material, then pan small batches",
      "Work each pan all the way down — don't rush",
      "Store your finds in the vial as you go",
    ],
  },
  {
    group: "Leave no trace",
    items: [
      "Fill in any holes you dug",
      "Pack out all trash",
      "Avoid disturbing the stream banks and wildlife",
    ],
  },
];

export default function TripChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggle = (key: string) =>
    setChecked((prev) => ({ ...prev, [key]: !prev[key] }));
  const reset = () => setChecked({});

  return (
    <div className="wrap">
      <div className="page">
        <div className="page-head">
          <p className="page-eyebrow">Trip planner</p>
          <h1>Plan the day &amp; print your checklist</h1>
          <p className="lede">
            Tick items off as you pack and prepare, or print the whole list to
            carry with you. Your checkmarks stay only on this screen — nothing is
            saved or shared.
          </p>
        </div>

        <div className="callout callout--water">
          <h4>A simple plan for the day</h4>
          Confirm the rules and the weather the night before. Leave in the
          morning with a companion. Pan for a few patient hours, take breaks,
          drink water, and head home with plenty of daylight to spare. A relaxed
          half-day beats an exhausting full one.
        </div>

        <div className="check-actions no-print">
          <button className="btn btn-primary" onClick={() => window.print()}>
            🖨️ Print this checklist
          </button>
          <button className="btn btn-ghost" onClick={reset}>
            Reset checkmarks
          </button>
        </div>

        {CHECKLIST.map((group, gi) => (
          <section className="checklist-group" key={group.group}>
            <h3>{group.group}</h3>
            {group.items.map((item, ii) => {
              const key = `${gi}:${ii}`;
              const id = `chk-${key}`;
              return (
                <div className="check-row" key={key}>
                  <input
                    type="checkbox"
                    id={id}
                    checked={!!checked[key]}
                    onChange={() => toggle(key)}
                  />
                  <label htmlFor={id}>{item}</label>
                </div>
              );
            })}
          </section>
        ))}

        <div className="callout callout--warn" style={{ marginBottom: 0 }}>
          <h4>The two non-negotiables</h4>
          Never go alone, and never pan anywhere until you have confirmed it is
          allowed. Everything else on this list is comfort; these two are safety.
        </div>
      </div>
    </div>
  );
}
