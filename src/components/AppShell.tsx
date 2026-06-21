import type { PageId } from "../App";
import { NAV_ITEMS } from "../App";
import Dashboard from "./Dashboard";
import GuidePage from "./GuidePage";
import FieldManual from "./FieldManual";
import LearningCourse from "./LearningCourse";
import MapView from "./MapView";
import GearGuide from "./GearGuide";
import LegalGuide from "./LegalGuide";
import TripChecklist from "./TripChecklist";
import HikingBasics from "./HikingBasics";
import Glossary from "./Glossary";

interface Props {
  page: PageId;
  setPage: (p: PageId) => void;
}

/** Small gold-pan logo mark. */
function PanMark({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <ellipse cx="24" cy="26" rx="19" ry="13" fill="#0f3b3e" />
      <ellipse cx="24" cy="23" rx="19" ry="13" fill="#2b8d8f" />
      <ellipse cx="24" cy="23" rx="13" ry="8.5" fill="#0f3b3e" />
      <ellipse cx="24" cy="22.4" rx="13" ry="8.5" fill="#15494c" />
      <circle cx="21" cy="22" r="2.1" fill="#d8a02b" />
      <circle cx="27" cy="24" r="1.5" fill="#d8a02b" />
      <circle cx="24.5" cy="20.2" r="1.1" fill="#f0c95a" />
    </svg>
  );
}

export default function AppShell({ page, setPage }: Props) {
  return (
    <>
      <div className="topbanner">
        <div className="wrap">
          <span className="topbanner-icon" aria-hidden="true">⚠️</span>
          <span>
            Rules change. Always verify with the land manager, agency, or landowner
            before panning. This app is a guide, not legal advice.
          </span>
        </div>
      </div>

      <header className="masthead">
        <div className="wrap">
          <button className="brand" onClick={() => setPage("dashboard")} aria-label="Go to home dashboard">
            <span className="brand-mark"><PanMark /></span>
            <span>
              <span className="brand-title">Fort Payne Gold Panning</span>
              <span className="brand-sub"> Resource Hub · learn to pan safely &amp; legally</span>
            </span>
          </button>
        </div>
      </header>

      <nav className="nav" aria-label="Main">
        <div className="nav-scroll">
          <button
            className={"navbtn" + (page === "dashboard" ? " is-active" : "")}
            onClick={() => setPage("dashboard")}
          >
            🏠 Home
          </button>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={"navbtn" + (page === item.id ? " is-active" : "")}
              onClick={() => setPage(item.id)}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </div>
      </nav>

      <main>
        {page === "dashboard" && <Dashboard setPage={setPage} />}
        {page === "beginner" && <GuidePage setPage={setPage} />}
        {page === "field-manual" && <FieldManual />}
        {page === "course" && <LearningCourse setPage={setPage} />}
        {page === "map" && <MapView travelGuide={false} setPage={setPage} />}
        {page === "travel" && <MapView travelGuide={true} setPage={setPage} />}
        {page === "gear" && <GearGuide />}
        {page === "legal" && <LegalGuide setPage={setPage} />}
        {page === "trip" && <TripChecklist />}
        {page === "hiking" && <HikingBasics />}
        {page === "glossary" && <Glossary />}
      </main>

      <footer className="footer">
        <div className="wrap">
          <div className="footer-rem">
            <div>
              <h4>Do not go alone</h4>
              Always bring at least one companion, and tell someone at home your plan
              and expected return time.
            </div>
            <div>
              <h4>Call before you go</h4>
              Confirm current rules with the agency, land manager, or landowner. A
              quick phone call can save your trip — and keep it legal.
            </div>
            <div>
              <h4>Leave no trace</h4>
              Pack out all trash, fill any holes you dig, and never disturb stream
              banks or wildlife.
            </div>
          </div>
          <p className="footer-fine">
            Fort Payne Gold Panning Resource Hub · For general education only — not
            legal advice. Centered on downtown Fort Payne, AL (34.444256, −85.719582),
            covering locations within 150 miles. Map data ©{" "}
            <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noreferrer">
              OpenStreetMap
            </a>{" "}
            contributors. Always verify rules with the responsible agency or landowner
            before panning.
          </p>
        </div>
      </footer>
    </>
  );
}
