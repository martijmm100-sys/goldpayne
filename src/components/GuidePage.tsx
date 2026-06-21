import type { PageId } from "../App";
import { PanAngleDiagram, PanningSequenceDiagram } from "./FieldManual";

interface Props {
  setPage: (p: PageId) => void;
}

export default function GuidePage({ setPage }: Props) {
  return (
    <div className="wrap">
      <div className="page prose">
        <div className="page-head">
          <p className="page-eyebrow">Beginner guide</p>
          <h1>Brand new? Start right here</h1>
          <p className="lede">
            Gold panning is one of the most relaxing, low-cost ways to enjoy a
            creek — and yes, there really is gold in our region. This page walks
            you through the whole idea in plain language, with no rush and no
            jargon.
          </p>
        </div>

        <h2>What gold panning actually is</h2>
        <p>
          You scoop up a little gravel from the right spot in a creek, then swirl
          it with water in a shallow pan. Because gold is much heavier than sand
          and rock, it sinks and stays in the pan while the lighter material
          washes away. In our area you will mostly find tiny flakes, not nuggets
          — and finding any gold at all is a genuine thrill.
        </p>
        <div className="callout callout--water">
          <h4>Set your expectations the friendly way</h4>
          Think of it as a peaceful afternoon by the water with a fun treasure
          puzzle, not a way to get rich. That mindset makes every speck feel like
          a win.
        </div>

        <h2>First, make sure it's allowed</h2>
        <p>
          This is the one rule that matters most. Some places welcome panners,
          some allow it only with limits, and some forbid it entirely (like
          national parks and most state parks). Always check before you go.
        </p>
        <p>
          <button className="btn btn-ghost" onClick={() => setPage("legal")}>
            Read the Legal &amp; Safety Guide →
          </button>{" "}
          <button className="btn btn-ghost" onClick={() => setPage("map")}>
            See what's allowed on the map →
          </button>
        </p>

        <h2>What you need to start</h2>
        <p>
          Surprisingly little. A pan, something to scoop with, and a way to
          screen out big rocks will get you going on day one. Everything else is
          comfort and safety.
        </p>
        <p>
          <button className="btn btn-ghost" onClick={() => setPage("gear")}>
            See the full Gear Guide →
          </button>
        </p>

        <h2>The basic idea, in one picture</h2>
        <p>
          Hold the pan barely tilted forward, just under the water. Shake it to
          settle the gold to the bottom, then let only the top, lighter layer
          spill over the front edge.
        </p>
        <PanAngleDiagram />

        <h2>Your first motions</h2>
        <p>
          Here is the whole rhythm. The secret is to go slow and shake often —
          every time you shake, the gold sinks a little safer to the bottom.
        </p>
        <PanningSequenceDiagram />

        <div className="callout callout--gold">
          <h4>Practice in the backyard first</h4>
          Fill a tub with water, drop a few small metal washers into your pan as
          pretend "gold," and practice until you can wash the sand away without
          losing them. It's free, and it makes your first real trip go smoothly.
        </div>

        <h2>Your easy first trip</h2>
        <p>
          The simplest start is a commercial pay-to-pan site where panning is
          clearly allowed and friendly staff can help. Go with a companion, tell
          someone your plan, and just enjoy learning the motion.
        </p>
        <p>
          <button className="btn btn-primary" onClick={() => setPage("course")}>
            Take the 5-lesson course →
          </button>{" "}
          <button className="btn btn-ghost" onClick={() => setPage("trip")}>
            Open the Trip Planner &amp; checklist →
          </button>
        </p>
      </div>
    </div>
  );
}
