import { ACCESS_TYPES, LEGAL_STATUSES, STATES } from "../data/locations";

export interface MapFilters {
  /** "all" or a two-letter state code. */
  state: string;
  /** "all" or a LegalStatus value. */
  legalStatus: string;
  /** "all" or an AccessType value. */
  accessType: string;
  /** Minimum beginner rating, 1 (= any) through 5. */
  minBeginner: number;
}

export const DEFAULT_FILTERS: MapFilters = {
  state: "all",
  legalStatus: "all",
  accessType: "all",
  minBeginner: 1,
};

interface Props {
  filters: MapFilters;
  setFilters: (f: MapFilters) => void;
  resultCount: number;
  onReset: () => void;
}

export default function FilterPanel({
  filters,
  setFilters,
  resultCount,
  onReset,
}: Props) {
  return (
    <section className="filters" aria-label="Filter locations">
      <h3>Filter locations</h3>
      <div className="filter-grid">
        <div className="field">
          <label htmlFor="f-state">State</label>
          <select
            id="f-state"
            value={filters.state}
            onChange={(e) => setFilters({ ...filters, state: e.target.value })}
          >
            <option value="all">All states</option>
            {STATES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="f-legal">Legal status</label>
          <select
            id="f-legal"
            value={filters.legalStatus}
            onChange={(e) =>
              setFilters({ ...filters, legalStatus: e.target.value })
            }
          >
            <option value="all">Any status</option>
            {LEGAL_STATUSES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="f-access">Access type</label>
          <select
            id="f-access"
            value={filters.accessType}
            onChange={(e) =>
              setFilters({ ...filters, accessType: e.target.value })
            }
          >
            <option value="all">Any access type</option>
            {ACCESS_TYPES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="f-beginner">Beginner friendliness</label>
          <select
            id="f-beginner"
            value={String(filters.minBeginner)}
            onChange={(e) =>
              setFilters({ ...filters, minBeginner: Number(e.target.value) })
            }
          >
            <option value="1">Any</option>
            <option value="2">2★ and up</option>
            <option value="3">3★ and up</option>
            <option value="4">4★ and up</option>
            <option value="5">5★ only</option>
          </select>
        </div>
      </div>

      <div className="filter-foot">
        <span className="result-count">
          Showing {resultCount} {resultCount === 1 ? "location" : "locations"}
        </span>
        <button className="btn btn-ghost" onClick={onReset}>
          Reset filters
        </button>
      </div>
    </section>
  );
}
