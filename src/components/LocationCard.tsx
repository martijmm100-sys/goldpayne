import type { PanningLocation, LegalStatus } from "../data/locations";

export type StatusKey =
  | "allowed"
  | "restricted"
  | "permission"
  | "prohibited"
  | "unknown";

/** Map a legal status to the short key used by the CSS (stripes, badges, pins). */
export function legalStatusKey(status: LegalStatus): StatusKey {
  switch (status) {
    case "Allowed":
      return "allowed";
    case "Allowed With Restrictions":
      return "restricted";
    case "Permission Required":
      return "permission";
    case "Prohibited":
      return "prohibited";
    case "Unknown/Verify":
    default:
      return "unknown";
  }
}

/** Solid color for each status — used for the Leaflet map pins and legend. */
export const STATUS_COLORS: Record<StatusKey, string> = {
  allowed: "#1f7a3d",
  restricted: "#1f6f73",
  permission: "#9a5a05",
  prohibited: "#b3261e",
  unknown: "#545b6e",
};

/** Beginner-friendliness shown as ★ out of 5. */
export function Stars({ rating, max = 5 }: { rating: number; max?: number }) {
  return (
    <span
      className="stars"
      role="img"
      aria-label={`Beginner friendliness: ${rating} out of ${max}`}
    >
      {Array.from({ length: max }, (_, i) => (
        <span key={i} className={i < rating ? "" : "off"} aria-hidden="true">
          ★
        </span>
      ))}
    </span>
  );
}

export default function LocationCard({ location }: { location: PanningLocation }) {
  const key = legalStatusKey(location.legalStatus);

  return (
    <article className="loc-card">
      <div className={`loc-stripe loc-stripe--${key}`} />
      <div className="loc-body">
        <div className="loc-top">
          <h3 className="loc-name">{location.name}</h3>
          <span className="loc-meta">
            {location.state} · ~{location.distanceFromFortPayneMiles} mi
          </span>
        </div>

        <div className="loc-badges">
          <span className={`badge badge--${key}`}>{location.legalStatus}</span>
          <span className="badge badge--plain">{location.accessType}</span>
          <span className="badge badge--plain">{location.category}</span>
          <Stars rating={location.beginnerRating} />
        </div>

        <p className="loc-summary">{location.summary}</p>

        <details className="loc-details">
          <summary>Details · tools · safety · source</summary>

          <dl className="kv">
            <dt>What to expect</dt>
            <dd>{location.whatToExpect}</dd>

            <dt>Tools you can use</dt>
            <dd>
              <ul className="toollist yes">
                {location.toolsAllowed.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </dd>

            <dt>Not allowed</dt>
            <dd>
              <ul className="toollist no">
                {location.toolsNotAllowed.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </dd>

            <dt>Safety notes</dt>
            <dd>
              <ul className="toollist">
                {location.safetyNotes.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </dd>

            <dt>Permission &amp; rules</dt>
            <dd>{location.permissionNotes}</dd>

            <dt>Tags</dt>
            <dd>
              <div className="taglist">
                {location.tags.map((t) => (
                  <span className="chip" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </dd>
          </dl>

          <p className="verify-note">
            ⚠️ Rules change. Always verify current rules with the agency or
            landowner before going.
          </p>

          <p className="src-line">
            Source:{" "}
            <a href={location.officialSourceUrl} target="_blank" rel="noreferrer">
              {location.officialSourceName}
            </a>
            <br />
            <span className="checked">Last checked: {location.lastChecked}</span>
          </p>
        </details>
      </div>
    </article>
  );
}
