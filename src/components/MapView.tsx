import { useMemo, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import L from "leaflet";
import type { PageId } from "../App";
import { locations } from "../data/locations";
import { FORT_PAYNE, SEARCH_RADIUS_MILES } from "../utils/distance";
import LocationCard, {
  legalStatusKey,
  STATUS_COLORS,
  Stars,
  type StatusKey,
} from "./LocationCard";
import FilterPanel, { DEFAULT_FILTERS, type MapFilters } from "./FilterPanel";

interface Props {
  travelGuide: boolean;
  setPage: (p: PageId) => void;
}

const RADIUS_METERS = SEARCH_RADIUS_MILES * 1609.344;

const GLYPH: Record<StatusKey, string> = {
  allowed: "A",
  restricted: "R",
  permission: "P",
  prohibited: "✕",
  unknown: "?",
};

const LEGEND: { key: StatusKey; label: string }[] = [
  { key: "allowed", label: "Allowed" },
  { key: "restricted", label: "Allowed with limits" },
  { key: "permission", label: "Permission required" },
  { key: "prohibited", label: "Prohibited" },
  { key: "unknown", label: "Unknown / verify first" },
];

function pinIcon(key: StatusKey): L.DivIcon {
  return L.divIcon({
    className: "",
    html: `<div class="pin" style="background:${STATUS_COLORS[key]}"><span>${GLYPH[key]}</span></div>`,
    iconSize: [26, 26],
    iconAnchor: [13, 26],
    popupAnchor: [0, -24],
  });
}

const centerIcon = L.divIcon({
  className: "",
  html: `<div class="pin pin--center"><span>★</span></div>`,
  iconSize: [26, 26],
  iconAnchor: [13, 13],
  popupAnchor: [0, -14],
});

// ---- Suggested routes for the travel guide (easiest + safest first) --------
interface Route {
  title: string;
  blurb: string;
  ids: string[];
}

const ROUTES: Route[] = [
  {
    title: "1 · Your easiest first trip",
    blurb:
      "The closest beginner-friendly spot to Fort Payne where panning is clearly allowed. Friendly staff, real creek access, and gold in your pan the same day. A perfect confidence-builder.",
    ids: ["alabama-gold-camp"],
  },
  {
    title: "2 · Dahlonega gold-country day",
    blurb:
      "The heart of Georgia's historic gold belt. Two famous attractions sit about five minutes apart — pair an underground mine tour with guided panning for one easy, memorable day.",
    ids: ["consolidated-gold-mine", "crisson-gold-mine"],
  },
  {
    title: "3 · Helen / Cleveland family day",
    blurb:
      "Relaxed pay-dirt panning that kids and grandkids love, in the pretty mountain-town area near Helen. Pair it with lunch in town.",
    ids: ["dukes-creek-gold-ruby-mines"],
  },
  {
    title: "4 · When you're ready for a real creek",
    blurb:
      "Free panning on national-forest streams is possible — but only with homework. Call the ranger district first to confirm the stream is on Forest Service land and open, or book a private Coker Creek camp. Hand tools only on public land.",
    ids: ["chattahoochee-oconee-nf-streams", "coker-creek-gold-camp"],
  },
];

const byId = (id: string) => locations.find((l) => l.id === id);

function RouteStop({ id }: { id: string }) {
  const loc = byId(id);
  if (!loc) return null;
  const key = legalStatusKey(loc.legalStatus);
  return (
    <li style={{ margin: "0.45rem 0" }}>
      <strong>{loc.name}</strong>{" "}
      <span className="loc-meta">
        {loc.state} · ~{loc.distanceFromFortPayneMiles} mi
      </span>
      <br />
      <span className={`badge badge--${key}`}>{loc.legalStatus}</span>{" "}
      <Stars rating={loc.beginnerRating} />
    </li>
  );
}

export default function MapView({ travelGuide, setPage }: Props) {
  const [filters, setFilters] = useState<MapFilters>(DEFAULT_FILTERS);

  const filtered = useMemo(
    () =>
      locations.filter((l) => {
        if (filters.state !== "all" && l.state !== filters.state) return false;
        if (filters.legalStatus !== "all" && l.legalStatus !== filters.legalStatus)
          return false;
        if (filters.accessType !== "all" && l.accessType !== filters.accessType)
          return false;
        if (l.beginnerRating < filters.minBeginner) return false;
        return true;
      }),
    [filters]
  );

  return (
    <div className="wrap">
      <div className="page">
        <div className="page-head">
          <p className="page-eyebrow">
            {travelGuide ? "Map-first travel guide" : "Interactive map"}
          </p>
          <h1>
            {travelGuide
              ? "Suggested trips & routes"
              : "Where can I pan? The map"}
          </h1>
          <p className="lede">
            {travelGuide
              ? "Hand-picked day trips ordered from the easiest and safest to the most advanced. Start at the top and work down as you gain confidence."
              : "Every location is pinned and color-coded by whether panning is allowed. Tap a pin for the basics, then read the full card below. Distances are straight-line miles from downtown Fort Payne."}
          </p>
        </div>

        {travelGuide && (
          <div className="section">
            <div className="callout callout--warn">
              <h4>Two rules for every single trip</h4>
              Never go alone, and call the agency, land manager, or landowner to
              confirm the current rules before you drive out. A five-minute phone
              call protects your safety, your wallet, and your trip.
            </div>
            {ROUTES.map((r) => (
              <div className="card" key={r.title} style={{ marginBottom: "1rem" }}>
                <h3>{r.title}</h3>
                <p>{r.blurb}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {r.ids.map((id) => (
                    <RouteStop key={id} id={id} />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <FilterPanel
          filters={filters}
          setFilters={setFilters}
          resultCount={filtered.length}
          onReset={() => setFilters(DEFAULT_FILTERS)}
        />

        <div className="map-canvas">
          <MapContainer
            center={[FORT_PAYNE.lat, FORT_PAYNE.lng]}
            zoom={7}
            scrollWheelZoom={false}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Circle
              center={[FORT_PAYNE.lat, FORT_PAYNE.lng]}
              radius={RADIUS_METERS}
              pathOptions={{
                color: "#1f6f73",
                weight: 1,
                fillColor: "#1f6f73",
                fillOpacity: 0.05,
              }}
            />
            <Marker
              position={[FORT_PAYNE.lat, FORT_PAYNE.lng]}
              icon={centerIcon}
            >
              <Popup>
                <p className="popup-title">Downtown Fort Payne, AL</p>
                <p className="popup-meta">Search center · 150-mile radius</p>
              </Popup>
            </Marker>

            {filtered.map((l) => {
              const key = legalStatusKey(l.legalStatus);
              return (
                <Marker key={l.id} position={[l.lat, l.lng]} icon={pinIcon(key)}>
                  <Popup>
                    <p className="popup-title">{l.name}</p>
                    <p className="popup-meta">
                      {l.state} · ~{l.distanceFromFortPayneMiles} mi ·{" "}
                      {l.legalStatus}
                    </p>
                    <p style={{ margin: 0 }}>{l.summary.split(". ")[0]}.</p>
                  </Popup>
                </Marker>
              );
            })}
          </MapContainer>
        </div>

        <div className="map-legend" aria-label="Map legend">
          {LEGEND.map((item) => (
            <span className="legend-item" key={item.key}>
              <span
                className="legend-dot"
                style={{ background: STATUS_COLORS[item.key] }}
              />
              {item.label}
            </span>
          ))}
        </div>

        <div className="section">
          <h2>
            {filtered.length}{" "}
            {filtered.length === 1 ? "location" : "locations"} in range
          </h2>
          <p>
            Each card lists what to expect, which tools are allowed, safety
            notes, and the official source. Rules change — always verify before
            you go.
          </p>
          <div className="loc-grid">
            {filtered.map((l) => (
              <LocationCard key={l.id} location={l} />
            ))}
          </div>
        </div>

        <div style={{ marginTop: "1.6rem" }}>
          {travelGuide ? (
            <button className="btn btn-ghost" onClick={() => setPage("legal")}>
              Read the full legal &amp; safety guide →
            </button>
          ) : (
            <button className="btn btn-ghost" onClick={() => setPage("travel")}>
              See suggested trips &amp; routes →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
