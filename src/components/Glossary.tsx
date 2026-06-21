import type { ReactNode } from "react";

const TERMS: { term: string; def: string }[] = [
  {
    term: "Bedrock",
    def: "The solid rock beneath the loose gravel of a streambed. Gold sinks until it reaches bedrock, so the gravel right on top of it is often the richest.",
  },
  {
    term: "Black sand",
    def: "Heavy, dark, often magnetic sand left in the bottom of your pan after the lighter material washes away. Gold hides in and just under it.",
  },
  {
    term: "Claim",
    def: "A legal right to mine a specific piece of public land. Casual recreational panning is different and usually does not require a claim in our region — but never pan an active claim without permission.",
  },
  {
    term: "Classifier",
    def: "A screen or sieve that sits on top of a bucket and filters out the larger rocks, so you only pan the small material where fine gold collects.",
  },
  {
    term: "Concentrate",
    def: "The small amount of heavy material left at the very end of panning — this is where your gold is.",
  },
  {
    term: "Crevice",
    def: "A crack in bedrock that naturally traps and holds gold. Cleaning crevices with a small tool can be surprisingly productive.",
  },
  {
    term: "Dredge (suction dredge)",
    def: "A motorized machine that vacuums gravel from a streambed. It is not allowed for casual panning, is prohibited on National Forest streams, and is heavily regulated everywhere. Beginners should never start here.",
  },
  {
    term: "Easement",
    def: "A limited right to use land for a specific purpose, such as a road crossing a creek. An easement usually does NOT give you the right to enter the water or pan.",
  },
  {
    term: "Flour gold",
    def: "Extremely fine, flake-like gold about the size of flour grains. It is the most common kind of gold in our area.",
  },
  {
    term: "Gold pan",
    def: "A shallow dish — usually dark plastic with molded ridges (riffles) — used to wash gravel and concentrate gold at the bottom.",
  },
  {
    term: "High-banker",
    def: "A sluice fed by a pump and set up on the bank. Like sluices and dredges, it is not allowed on National Forest streams.",
  },
  {
    term: "Inside bend",
    def: "The slower, inner side of a curve in a creek, where the current eases and heavy gold tends to settle. A prime place to dig.",
  },
  {
    term: "Mineral rights",
    def: "Legal ownership of the minerals (including gold) beneath a property. These can belong to someone other than the surface landowner, which is why ownership must be confirmed.",
  },
  {
    term: "National Forest",
    def: "Federal land managed by the U.S. Forest Service. Recreational hand panning is often allowed here with strict rules — hand tools only, no significant disturbance — but confirm the specific stream is open.",
  },
  {
    term: "NPS unit",
    def: "Any area run by the National Park Service — parks, preserves, monuments, military parks, seashores. Collecting and gold panning are generally prohibited in all of them.",
  },
  {
    term: "Pay dirt",
    def: "Gravel that contains gold. Commercial sites sell buckets of pay dirt so beginners can practice and reliably find some.",
  },
  {
    term: "Pickers",
    def: "Gold flakes big enough to pick up with tweezers or your fingers — a step up from flour gold.",
  },
  {
    term: "Placer gold",
    def: "Loose gold found in streambeds and gravel, as opposed to gold still locked inside solid rock. Placer gold is what panners look for.",
  },
  {
    term: "Prospecting",
    def: "The general activity of searching for gold or other minerals.",
  },
  {
    term: "Recreational mining exemption",
    def: "A state rule (for example, in Georgia) that lets hobbyists pan without a state surface-mining permit. Important: it removes the permit, but you still must be on land where panning is actually allowed.",
  },
  {
    term: "Riffles",
    def: "The molded ridges inside a gold pan or sluice that catch heavy gold as lighter material washes past.",
  },
  {
    term: "Salted (ore or pay dirt)",
    def: "Material that a commercial site has deliberately added gold to, so first-timers are guaranteed to find some. Great for learning the motion.",
  },
  {
    term: "Sluice box",
    def: "An open channel lined with riffles that uses flowing water to separate gold. In-stream use is not allowed on National Forest land and many public areas.",
  },
  {
    term: "Snuffer bottle",
    def: "A small squeeze bottle that sucks up tiny gold flakes from your pan so you don't lose them.",
  },
  {
    term: "Tailings",
    def: "Leftover rock and gravel from past mining. Hobbyists sometimes re-pan old tailings.",
  },
  {
    term: "WMA (Wildlife Management Area)",
    def: "State-managed land for wildlife, hunting, and fishing. WMAs often have extra rules or seasonal restrictions, so panning may be limited or off-limits — always check.",
  },
];

export default function Glossary() {
  const sorted = [...TERMS].sort((a, b) =>
    a.term.toLowerCase().localeCompare(b.term.toLowerCase())
  );

  const nodes: ReactNode[] = [];
  let lastLetter = "";
  for (const t of sorted) {
    const letter = t.term[0].toUpperCase();
    if (letter !== lastLetter) {
      nodes.push(
        <dt className="glossary-letter" key={`L-${letter}`}>
          {letter}
        </dt>
      );
      lastLetter = letter;
    }
    nodes.push(<dt key={`t-${t.term}`}>{t.term}</dt>);
    nodes.push(<dd key={`d-${t.term}`}>{t.def}</dd>);
  }

  return (
    <div className="wrap">
      <div className="page">
        <div className="page-head">
          <p className="page-eyebrow">Glossary</p>
          <h1>Plain-language meanings</h1>
          <p className="lede">
            Every gold-panning term used in this app, explained simply. If you
            run into a word anywhere else in the guide, look it up here.
          </p>
        </div>

        <dl className="glossary">{nodes}</dl>
      </div>
    </div>
  );
}
