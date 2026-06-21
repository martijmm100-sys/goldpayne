export interface Lesson {
  id: string;
  title: string;
  minutes: number;
  goal: string;
  steps: string[];
  keyPoint: string;
}

export const lessons: Lesson[] = [
  {
    id: "what-is-gold-panning",
    title: "Lesson 1 — What gold panning really is",
    minutes: 5,
    goal: "Set honest expectations so your first trip is fun, not disappointing.",
    steps: [
      "Gold panning means swirling water and gravel in a shallow pan so the heavy gold settles to the bottom while the lighter sand and rock wash away.",
      "In our region you will mostly find tiny flakes ('flour gold' or 'pickers'), not big nuggets. Finding any gold is a win.",
      "The real reward is being outdoors, learning a skill, and the thrill of seeing a few specks shine in the bottom of your pan.",
      "It is slow, patient, hands-in-cold-water work. Treat it like relaxing by a creek with a fun puzzle, not a get-rich activity.",
    ],
    keyPoint:
      "Gold is about eight times heavier than sand. Every technique in this course is just a way to let gravity and water do the sorting for you.",
  },
  {
    id: "where-gold-hides",
    title: "Lesson 2 — Where gold hides in a creek",
    minutes: 7,
    goal: "Learn to read a creek so you dig in the right spots.",
    steps: [
      "Gold is heavy, so it drops out of the water wherever the current slows down.",
      "Look at the INSIDE of bends (the slower side), not the fast outside of the curve.",
      "Check behind and in front of big boulders, where water slows and swirls.",
      "Dig down to where gravel meets bedrock or hard-packed clay if you can reach it — gold sinks until it can't go lower.",
      "Crevices in bedrock are natural gold traps. Clean them out with a spoon or trowel.",
    ],
    keyPoint:
      "Think 'where would a heavy marble stop rolling?' That slow, low spot is where gold collects.",
  },
  {
    id: "the-panning-motion",
    title: "Lesson 3 — The basic panning motion",
    minutes: 8,
    goal: "Learn the shake-settle-tilt rhythm that separates gold from everything else.",
    steps: [
      "Fill your pan about two-thirds full of classified (screened) gravel, then lower it into the water.",
      "Break up any clay with your fingers so gold can sink freely.",
      "Shake the pan gently side to side (not in circles) to let gold settle to the bottom. This step is the secret — do it often.",
      "Tilt the pan slightly forward and let the top layer of light material wash over the front lip.",
      "Repeat: shake to settle, then wash off the top. Slow down as the pan empties.",
      "When only a small amount of dark, heavy 'black sand' is left, swirl gently and look for gold along the edge.",
    ],
    keyPoint:
      "Shake to settle, tilt to wash. If you ever feel rushed, stop and shake again — that keeps gold safely at the bottom.",
  },
  {
    id: "practice-at-home",
    title: "Lesson 4 — Practice before you drive anywhere",
    minutes: 10,
    goal: "Build muscle memory at home so your first creek trip goes smoothly.",
    steps: [
      "Fill a large tub or kiddie pool with water in the backyard.",
      "Put sand and gravel in your pan, then add a few small lead split-shot fishing weights or a couple of cheap brass washers to act as 'pretend gold' (they are heavy like gold).",
      "Practice the shake-settle-tilt motion until you can wash away the sand WITHOUT losing your heavy 'gold' pieces.",
      "Once you can keep every weight in the pan three times in a row, you're ready for a real creek.",
    ],
    keyPoint:
      "Losing pretend weights at home is free. Practicing first means you won't wash real gold away on your trip.",
  },
  {
    id: "first-real-trip",
    title: "Lesson 5 — Your first real trip, step by step",
    minutes: 8,
    goal: "Turn everything above into a safe, simple first outing.",
    steps: [
      "Start at a commercial pay-to-pan site (see the Map) where panning is clearly allowed and staff can help.",
      "Go with at least one other person. Tell someone at home your plan and when you'll be back.",
      "Set up where you can kneel comfortably and safely reach the water.",
      "Screen a bucket of material with your classifier, then pan small batches.",
      "Be patient: work each pan all the way down before starting the next.",
      "Store finds in your vial, pack out all trash, and fill any holes you dug.",
    ],
    keyPoint:
      "A guided commercial site removes the legal and 'where do I even start' stress, so your first day is all fun.",
  },
];
