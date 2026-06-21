import { gearGroups } from "../data/gear";

const PRIO_LABEL: Record<string, string> = {
  essential: "Essential",
  "nice-to-have": "Nice to have",
  safety: "Safety",
};

export default function GearGuide() {
  return (
    <div className="wrap">
      <div className="page">
        <div className="page-head">
          <p className="page-eyebrow">Gear guide</p>
          <h1>What to bring — and what to leave home</h1>
          <p className="lede">
            You need very little to start. Here is the simple kit, the comfort
            and safety items that make a long day pleasant, and the heavy
            equipment that is not allowed on most public land.
          </p>
        </div>

        <div className="callout callout--gold">
          <h4>The golden rule on public land: hand tools only</h4>
          On National Forest streams and most public areas you may use only a
          pan and a small hand shovel or trowel. Sluices, dredges, and any
          motorized equipment are not allowed there — those belong only at
          private or commercial sites that permit them.
        </div>

        {gearGroups.map((group) => (
          <section className="gear-group" key={group.group}>
            <h2>{group.group}</h2>
            <p>{group.intro}</p>
            <div className="gear-list">
              {group.items.map((item) => (
                <div className="gear-item" key={item.name}>
                  <span className={`prio prio--${item.priority}`}>
                    {PRIO_LABEL[item.priority]}
                  </span>
                  <h4>{item.name}</h4>
                  <p>{item.why}</p>
                  {item.beginnerTip && (
                    <p className="gear-tip">
                      <strong>Tip:</strong> {item.beginnerTip}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
