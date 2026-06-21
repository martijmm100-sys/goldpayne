import type { PageId } from "../App";
import { NAV_ITEMS } from "../App";
import { locations, bestFirstTripIds } from "../data/locations";
import { Stars, legalStatusKey } from "./LocationCard";

interface Props {
  setPage: (p: PageId) => void;
}

/** Larger gold-pan illustration for the hero. */
function PanArt() {
  return (
    <svg
      viewBox="0 0 240 200"
      role="img"
      aria-label="A gold pan with a few flakes of gold and water"
      style={{ width: "100%", maxWidth: 280, height: "auto" }}
    >
      <defs>
        <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#cfeae9" />
          <stop offset="1" stopColor="#9fd2d0" />
        </linearGradient>
      </defs>
      <rect x="0" y="150" width="240" height="50" fill="url(#water)" />
      <ellipse cx="120" cy="120" rx="92" ry="56" fill="#0f3b3e" />
      <ellipse cx="120" cy="110" rx="92" ry="56" fill="#2b8d8f" />
      <ellipse cx="120" cy="110" rx="64" ry="38" fill="#0f3b3e" />
      <ellipse cx="120" cy="107" rx="64" ry="38" fill="#15494c" />
      {/* black sand + gold settled in the bottom */}
      <ellipse cx="120" cy="120" rx="40" ry="16" fill="#0b2a2c" opacity="0.7" />
      <circle cx="108" cy="120" r="4.5" fill="#d8a02b" />
      <circle cx="122" cy="124" r="3.2" fill="#f0c95a" />
      <circle cx="134" cy="118" r="2.6" fill="#d8a02b" />
      <circle cx="116" cy="114" r="2.1" fill="#f0c95a" />
    </svg>
  );
}

const LITTLE_RIVER_PHOTOS = [
  {
    src: "https://www.nps.gov/articles/images/LIRI_river_overlook_links.jpg?autorotate=false&maxwidth=900",
    alt: "Little River Canyon overlook with forested cliffs and a river below",
    caption: "Little River Canyon overlook, near Fort Payne",
    credit: "National Park Service",
    sourceUrl:
      "https://www.nps.gov/articles/nps-geodiversity-atlas-little-river-canyon-national-preserve-alabama.htm",
  },
  {
    src: "https://www.nps.gov/articles/images/LIRI_falls_fall_nocover.jpg?autorotate=false&maxwidth=900",
    alt: "Little River Falls flowing over layered rock with autumn trees behind it",
    caption: "Little River Falls and layered canyon rock",
    credit: "National Park Service",
    sourceUrl:
      "https://www.nps.gov/articles/nps-geodiversity-atlas-little-river-canyon-national-preserve-alabama.htm",
  },
  {
    src: "https://www.nps.gov/liri/planyourvisit/images/Falls-GBishop2.jpg?autorotate=false&maxwidth=900",
    alt: "Little River Falls with water dropping into a dark pool below",
    caption: "Little River Falls visitor area",
    credit: "NPS / Gail Bishop",
    sourceUrl: "https://www.nps.gov/liri/planyourvisit/little-river-falls.htm",
  },
];

export default function Dashboard({ setPage }: Props) {
  return (
    <div className="wrap">
      <div className="page">
        <section className="hero">
          <div>
            <p className="page-eyebrow">Fort Payne, Alabama · a 150-mile guide</p>
            <h1>Learn to pan for gold — safely, legally, and for fun</h1>
            <p className="lede">
              A friendly, no-pressure guide built for first-timers. Start with the
              basics, see exactly where panning is allowed on the map, and plan an
              easy first trip the whole family can enjoy.
            </p>
            <div
              style={{
                display: "flex",
                gap: "0.6rem",
                flexWrap: "wrap",
                marginTop: "1rem",
              }}
            >
              <button
                className="btn btn-primary"
                onClick={() => setPage("beginner")}
              >
                Start here: Beginner Guide
              </button>
              <button className="btn btn-ghost" onClick={() => setPage("map")}>
                Open the map
              </button>
            </div>
          </div>
          <div className="hero-art">
            <PanArt />
          </div>
        </section>

        <section className="section">
          <div className="split-head">
            <div>
              <p className="page-eyebrow">Northern Alabama mountain setting</p>
              <h2>Little River Canyon: beautiful to visit, not a panning site</h2>
            </div>
            <p>
              These official NPS images show the local canyon-and-mountain feel
              around Fort Payne. The preserve is included for orientation and
              hiking inspiration only — National Park Service units are marked
              <strong> Prohibited</strong> for panning in this app.
            </p>
          </div>

          <div className="photo-grid" aria-label="Little River Canyon photo gallery">
            {LITTLE_RIVER_PHOTOS.map((photo) => (
              <figure className="photo-card" key={photo.src}>
                <img src={photo.src} alt={photo.alt} loading="lazy" decoding="async" />
                <figcaption>
                  <strong>{photo.caption}</strong>
                  <br />
                  <a href={photo.sourceUrl} target="_blank" rel="noreferrer">
                    Source: {photo.credit}
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <div className="reminder-row">
          <div className="reminder is-stop">
            <strong>Do not go alone</strong>
            Bring at least one companion, and tell someone at home your plan and
            expected return time.
          </div>
          <div className="reminder is-call">
            <strong>Call before you go</strong>
            Confirm current rules with the agency, land manager, or landowner. A
            quick call can save your trip.
          </div>
          <div className="reminder">
            <strong>Leave no trace</strong>
            Pack out all trash, fill any holes you dig, and protect the stream
            banks and wildlife.
          </div>
        </div>

        <div className="section">
          <h2>Explore the guide</h2>
          <div className="dash-grid">
            {NAV_ITEMS.map((item) => (
              <button
                className="dash-card"
                key={item.id}
                onClick={() => setPage(item.id)}
              >
                <span
                  className="dash-card-ico"
                  aria-hidden="true"
                  style={{ fontSize: "1.5rem" }}
                >
                  {item.icon}
                </span>
                <h3>{item.label}</h3>
                <p>{item.blurb}</p>
                <span className="dash-card-go">Open →</span>
              </button>
            ))}
          </div>
        </div>

        <div className="section">
          <h2>Best first trips</h2>
          <p>
            If you only do one thing, pick one of these. They are beginner
            friendly, clearly legal, and you will almost certainly find a little
            gold to take home.
          </p>
          <div className="dash-grid">
            {bestFirstTripIds.map((id) => {
              const loc = locations.find((l) => l.id === id);
              if (!loc) return null;
              const key = legalStatusKey(loc.legalStatus);
              return (
                <button
                  className="dash-card"
                  key={id}
                  onClick={() => setPage("map")}
                >
                  <h3>{loc.name}</h3>
                  <div className="loc-badges">
                    <span className={`badge badge--${key}`}>
                      {loc.legalStatus}
                    </span>
                    <Stars rating={loc.beginnerRating} />
                  </div>
                  <p>{loc.summary.split(". ")[0]}.</p>
                  <span className="loc-meta">
                    {loc.state} · ~{loc.distanceFromFortPayneMiles} mi
                  </span>
                  <span className="dash-card-go">See on the map →</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
