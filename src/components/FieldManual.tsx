// At-the-creek quick reference, plus the app's reusable SVG diagrams.
// The diagrams are exported so other pages can reuse them without
// duplicating the markup.

export function PanAngleDiagram() {
  return (
    <figure className="diagram">
      <svg viewBox="0 0 360 220" role="img" aria-labelledby="d-pa">
        <title id="d-pa">
          Hold the pan tilted slightly forward just under the water. Wash the
          light sand over the front edge while the heavy gold stays at the
          bottom.
        </title>
        <rect x="0" y="150" width="360" height="70" fill="#dcebeb" />
        <line x1="0" y1="150" x2="360" y2="150" stroke="#9fd2d0" strokeWidth="2" />
        <text x="8" y="170" fontSize="12" fill="#1f6f73">
          water line
        </text>
        <g transform="rotate(-9 180 110)">
          <path
            d="M60,72 Q180,150 300,72"
            fill="none"
            stroke="#15494c"
            strokeWidth="13"
            strokeLinecap="round"
          />
          <path
            d="M60,72 Q180,150 300,72"
            fill="none"
            stroke="#2b8d8f"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="170" cy="120" r="5" fill="#d8a02b" />
          <circle cx="184" cy="123" r="3.4" fill="#f0c95a" />
          <circle cx="197" cy="118" r="2.6" fill="#d8a02b" />
        </g>
        <path
          d="M300,78 C330,70 340,86 351,92"
          fill="none"
          stroke="#9a5a05"
          strokeWidth="3"
        />
        <polygon points="351,92 343,87 345,96" fill="#9a5a05" />
        <text x="246" y="52" fontSize="12.5" fill="#9a5a05">
          wash light sand
        </text>
        <text x="256" y="67" fontSize="12.5" fill="#9a5a05">
          over this edge
        </text>
        <text x="120" y="186" fontSize="12.5" fill="#b9851a" fontWeight="700">
          gold stays here (heaviest)
        </text>
      </svg>
      <figcaption>
        <strong>Pan angle.</strong> Keep the pan barely tilted forward and just
        under the surface. Shake, then let only the top, lighter material spill
        over the lip.
      </figcaption>
    </figure>
  );
}

export function InsideBendDiagram() {
  return (
    <figure className="diagram">
      <svg viewBox="0 0 360 240" role="img" aria-labelledby="d-ib">
        <title id="d-ib">
          Gold drops out on the slow inside of a creek bend and behind
          boulders, not on the fast outer bank.
        </title>
        <rect x="0" y="0" width="360" height="240" fill="#eef4f3" />
        <path
          d="M40,30 C150,70 130,180 330,210"
          fill="none"
          stroke="#9fd2d0"
          strokeWidth="50"
          strokeLinecap="round"
        />
        {/* flow direction */}
        <path d="M70,52 L96,60" stroke="#1f6f73" strokeWidth="3" fill="none" />
        <polygon points="96,60 88,57 89,64" fill="#1f6f73" />
        <path d="M250,196 L276,202" stroke="#1f6f73" strokeWidth="3" fill="none" />
        <polygon points="276,202 268,199 269,206" fill="#1f6f73" />
        {/* boulder */}
        <circle cx="170" cy="120" r="15" fill="#8a948f" stroke="#5b635f" strokeWidth="2" />
        {/* gold deposits inside bend + behind boulder */}
        <circle cx="150" cy="150" r="4" fill="#d8a02b" />
        <circle cx="160" cy="158" r="3" fill="#f0c95a" />
        <circle cx="143" cy="160" r="2.5" fill="#d8a02b" />
        <circle cx="186" cy="132" r="3.2" fill="#d8a02b" />
        <text x="120" y="210" fontSize="12.5" fill="#b9851a" fontWeight="700">
          slow inside bend — gold drops
        </text>
        <text x="210" y="46" fontSize="12.5" fill="#b3261e">
          fast outer bank
        </text>
        <text x="210" y="61" fontSize="12.5" fill="#b3261e">
          (erosion, less gold)
        </text>
        <text x="188" y="118" fontSize="11.5" fill="#44504c">
          behind boulders
        </text>
      </svg>
      <figcaption>
        <strong>Read the bend.</strong> Dig on the slow, inside curve and just
        downstream of big rocks — wherever the current eases, heavy gold settles.
      </figcaption>
    </figure>
  );
}

export function GravelTrapDiagram() {
  return (
    <figure className="diagram">
      <svg viewBox="0 0 360 220" role="img" aria-labelledby="d-gt">
        <title id="d-gt">
          Gold sinks through gravel until it reaches bedrock or hard clay and
          collects in cracks.
        </title>
        <rect x="0" y="0" width="360" height="55" fill="#dcebeb" />
        <text x="8" y="34" fontSize="12.5" fill="#1f6f73">
          moving water
        </text>
        <rect x="0" y="55" width="360" height="95" fill="#d9d2c2" />
        <text x="8" y="80" fontSize="12.5" fill="#6b5a32">
          gravel &amp; sand
        </text>
        {/* speckles */}
        <g fill="#b6ac93">
          <circle cx="60" cy="100" r="4" />
          <circle cx="120" cy="120" r="5" />
          <circle cx="210" cy="95" r="4" />
          <circle cx="280" cy="125" r="5" />
          <circle cx="330" cy="100" r="4" />
        </g>
        {/* bedrock */}
        <path
          d="M0,150 L120,150 L150,168 L240,150 L360,150 L360,220 L0,220 Z"
          fill="#7d867f"
        />
        <text x="8" y="200" fontSize="12.5" fill="#26302c">
          bedrock / hard clay
        </text>
        {/* crevice */}
        <path d="M150,150 L156,150 L153,170 Z" fill="#26302c" />
        {/* gold settling to bedrock + crevice */}
        <circle cx="152" cy="166" r="3.4" fill="#f0c95a" />
        <circle cx="100" cy="146" r="3.6" fill="#d8a02b" />
        <circle cx="250" cy="146" r="3.2" fill="#d8a02b" />
        <circle cx="300" cy="147" r="2.6" fill="#f0c95a" />
        {/* arrow down */}
        <path d="M210,70 L210,138" stroke="#9a5a05" strokeWidth="3" fill="none" />
        <polygon points="210,144 205,134 215,134" fill="#9a5a05" />
        <text x="218" y="110" fontSize="12" fill="#9a5a05">
          gold sinks
        </text>
      </svg>
      <figcaption>
        <strong>Dig down.</strong> Gold keeps sinking until something stops it.
        The best material is at the bottom of the gravel, on bedrock, and packed
        into crevices.
      </figcaption>
    </figure>
  );
}

export function LayeredPanDiagram() {
  return (
    <figure className="diagram">
      <svg viewBox="0 0 320 220" role="img" aria-labelledby="d-lp">
        <title id="d-lp">
          After shaking and settling, the pan holds light sand on top, heavy
          black sand below it, and gold at the very bottom.
        </title>
        {/* bowl */}
        <path
          d="M40,70 Q160,150 280,70"
          fill="none"
          stroke="#15494c"
          strokeWidth="12"
          strokeLinecap="round"
        />
        {/* settled layers */}
        <ellipse cx="160" cy="118" rx="104" ry="26" fill="#d9d2c2" />
        <ellipse cx="160" cy="132" rx="70" ry="15" fill="#0b2a2c" />
        <ellipse cx="160" cy="140" rx="38" ry="7.5" fill="#d8a02b" />
        {/* labels */}
        <line x1="250" y1="100" x2="300" y2="86" stroke="#6b5a32" strokeWidth="2" />
        <text x="232" y="80" fontSize="12" fill="#6b5a32">
          light sand (wash off)
        </text>
        <line x1="214" y1="130" x2="296" y2="128" stroke="#26302c" strokeWidth="2" />
        <text x="240" y="126" fontSize="12" fill="#26302c">
          black sand (heavy)
        </text>
        <line x1="180" y1="142" x2="250" y2="166" stroke="#b9851a" strokeWidth="2" />
        <text x="206" y="180" fontSize="12.5" fill="#b9851a" fontWeight="700">
          gold (heaviest)
        </text>
      </svg>
      <figcaption>
        <strong>What's in the pan.</strong> Work slowly once you see dark
        "black sand" — gold hides right at the bottom of it. Never rush the last
        few washes.
      </figcaption>
    </figure>
  );
}

export function PanningSequenceDiagram() {
  const steps = [
    "1 · Fill the pan about 2/3 with screened gravel",
    "2 · Lower it into the water and break up any clay",
    "3 · Shake gently side to side to settle the gold",
    "4 · Tilt forward and wash the top layer off",
  ];
  return (
    <figure className="diagram">
      <svg viewBox="0 0 480 170" role="img" aria-labelledby="d-seq">
        <title id="d-seq">
          The panning sequence: fill, submerge and break clay, shake to settle,
          then tilt and wash.
        </title>
        {steps.map((_, i) => {
          const x = 20 + i * 116;
          return (
            <g key={i}>
              <ellipse cx={x + 44} cy="54" rx="44" ry="26" fill="#15494c" />
              <ellipse cx={x + 44} cy="49" rx="44" ry="26" fill="#2b8d8f" />
              <ellipse cx={x + 44} cy="49" rx="26" ry="14" fill="#15494c" />
              {/* a few gold specks from step 3 on */}
              {i >= 2 && (
                <>
                  <circle cx={x + 40} cy="52" r="3" fill="#d8a02b" />
                  <circle cx={x + 50} cy="55" r="2.2" fill="#f0c95a" />
                </>
              )}
              <circle cx={x + 12} cy="18" r="12" fill="#b9851a" />
              <text
                x={x + 12}
                y="22"
                fontSize="12"
                fill="#fff"
                fontWeight="700"
                textAnchor="middle"
              >
                {i + 1}
              </text>
              {i < 3 && (
                <text x={x + 100} y="55" fontSize="20" fill="#6b7771">
                  ›
                </text>
              )}
            </g>
          );
        })}
      </svg>
      <figcaption>
        <strong>The motion, start to finish.</strong> Repeat steps 3 and 4 —
        shake to settle, tilt to wash — until only a little heavy sand is left.
      </figcaption>
      <ol style={{ margin: "0.6rem 0 0", paddingLeft: "1.3rem" }}>
        {steps.map((s) => (
          <li key={s}>{s.replace(/^\d+ · /, "")}</li>
        ))}
      </ol>
    </figure>
  );
}

export default function FieldManual() {
  return (
    <div className="wrap">
      <div className="page prose">
        <div className="page-head">
          <p className="page-eyebrow">Field manual</p>
          <h1>Quick reference for the creek</h1>
          <p className="lede">
            A short, picture-first cheat sheet to glance at while you're out.
            Read the Beginner Guide and Learning Course first, then bring this
            along.
          </p>
        </div>

        <div className="callout callout--warn">
          <h4>Before you put a pan in the water</h4>
          Be sure you are somewhere panning is allowed, you are not alone, and
          someone knows your plan. On public land, use hand tools only.
        </div>

        <h2>Where gold hides</h2>
        <p>
          Gold is about eight times heavier than sand, so it settles wherever
          moving water slows down. Look for the slow, low spots.
        </p>
        <div className="diagram-grid">
          <InsideBendDiagram />
          <GravelTrapDiagram />
        </div>

        <h2>How to work the pan</h2>
        <p>
          The whole skill is letting gravity and water do the sorting. Shake to
          settle the gold to the bottom, then wash only the light material off
          the top — slowly.
        </p>
        <div className="diagram-grid">
          <PanAngleDiagram />
          <LayeredPanDiagram />
        </div>

        <h2>The full motion</h2>
        <PanningSequenceDiagram />

        <div className="callout callout--gold">
          <h4>If you feel rushed, stop and shake again</h4>
          Re-settling the pan keeps the gold safely on the bottom. Patience is
          what separates a good pan from a lost flake.
        </div>
      </div>
    </div>
  );
}
