import type { PageId } from "../App";
import { lessons } from "../data/lessons";

interface Props {
  setPage: (p: PageId) => void;
}

export default function LearningCourse({ setPage }: Props) {
  return (
    <div className="wrap">
      <div className="page">
        <div className="page-head">
          <p className="page-eyebrow">Learning course</p>
          <h1>Five short lessons to your first trip</h1>
          <p className="lede">
            Work through these in order. Together they take well under an hour to
            read, and they cover everything a first-timer needs — from honest
            expectations to a safe, simple first outing.
          </p>
        </div>

        {lessons.map((lesson) => (
          <article className="lesson" key={lesson.id}>
            <div className="lesson-head">
              <h3>{lesson.title}</h3>
              <span className="lesson-time">{lesson.minutes} min read</span>
            </div>
            <p className="lesson-goal">{lesson.goal}</p>
            <ol>
              {lesson.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
            <p className="lesson-key">
              <strong>Key point:</strong> {lesson.keyPoint}
            </p>
          </article>
        ))}

        <div className="callout callout--gold">
          <h4>You're ready</h4>
          Once you can keep your pretend "gold" in the pan at home, you have the
          only skill that matters. Pick a beginner-friendly spot and go enjoy it.
        </div>

        <p style={{ marginTop: "1.2rem" }}>
          <button className="btn btn-primary" onClick={() => setPage("trip")}>
            Open the Trip Planner &amp; printable checklist →
          </button>{" "}
          <button className="btn btn-ghost" onClick={() => setPage("map")}>
            Find a spot on the map →
          </button>
        </p>
      </div>
    </div>
  );
}
