import type { PageId } from "../App";
import { legalRules, legalBuckets } from "../data/legalRules";

interface Props {
  setPage: (p: PageId) => void;
}

function bucketKey(status: string) {
  if (status.startsWith("Allowed With")) return "restricted";
  if (status.startsWith("Allowed")) return "allowed";
  if (status.startsWith("Permission")) return "permission";
  if (status.startsWith("Prohibited")) return "prohibited";
  return "unknown";
}

export default function LegalGuide({ setPage }: Props) {
  return (
    <div className="wrap">
      <div className="page">
        <div className="page-head">
          <p className="page-eyebrow">Legal &amp; safety guide</p>
          <h1>Where can you legally pan?</h1>
          <p className="lede">
            The rules depend entirely on who owns or manages the land. This page
            explains the color-coded categories used across the app, then the
            rule of thumb for each type of land in our region.
          </p>
        </div>

        <div className="callout callout--warn">
          <h4>Please read this first — this is not legal advice</h4>
          This guide is general education to help you ask the right questions.
          Rules change, ownership varies creek-by-creek, and only the responsible
          agency or landowner can tell you what is allowed today. When in doubt,
          do not pan — call and confirm.
        </div>

        <div className="section">
          <h2>What the colors mean</h2>
          <div className="loc-grid">
            {legalBuckets.map((b) => {
              const key = bucketKey(b.status);
              return (
                <div className="card" key={b.status}>
                  <span className={`badge badge--${key}`}>{b.status}</span>
                  <p style={{ marginTop: "0.6rem" }}>
                    <strong>{b.meaning}</strong>
                  </p>
                  <p style={{ margin: 0, color: "var(--ink-soft)" }}>
                    {b.whatToDo}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="section">
          <h2>Rules by type of land</h2>
          {legalRules.map((rule) => (
            <div className="card" key={rule.id} style={{ marginBottom: "1rem" }}>
              <h3>{rule.landType}</h3>
              <div className="callout callout--gold" style={{ margin: "0.6rem 0" }}>
                <h4>Rule of thumb</h4>
                {rule.ruleOfThumb}
              </div>
              <ul>
                {rule.details.map((d, i) => (
                  <li key={i}>{d}</li>
                ))}
              </ul>
              <div className="callout callout--water" style={{ marginBottom: 0 }}>
                <h4>Bottom line for beginners</h4>
                {rule.bottomLine}
              </div>
              <p className="src-line">
                Source:{" "}
                <a href={rule.sourceUrl} target="_blank" rel="noreferrer">
                  {rule.sourceName}
                </a>
                <br />
                <span className="checked">Last checked: {rule.lastChecked}</span>
              </p>
            </div>
          ))}
        </div>

        <div className="callout callout--warn">
          <h4>The safest beginner path</h4>
          Start at a commercial pay-to-pan site. You skip all of the
          land-ownership guesswork, panning is clearly allowed, and someone is
          there to help. Move to public or private creeks only once you have done
          the homework and made the calls.
        </div>

        <p style={{ marginTop: "1.2rem" }}>
          <button className="btn btn-primary" onClick={() => setPage("map")}>
            See every location color-coded on the map →
          </button>
        </p>
      </div>
    </div>
  );
}
