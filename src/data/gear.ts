export interface GearItem {
  name: string;
  why: string;
  /** "essential" shows first; "nice-to-have" and "safety" follow. */
  priority: "essential" | "nice-to-have" | "safety";
  beginnerTip?: string;
}

export interface GearGroup {
  group: string;
  intro: string;
  items: GearItem[];
}

export const gearGroups: GearGroup[] = [
  {
    group: "The core panning kit",
    intro:
      "You truly only need a few things to start. A pan, a way to scoop, and a way to sort out big rocks will get you panning your first day.",
    items: [
      {
        name: 'Gold pan (plastic, 12–14", with riffles)',
        why: "Plastic pans are light, cheap, won't rust, and the dark color makes gold easier to see than metal pans.",
        priority: "essential",
        beginnerTip:
          "Green or black pans help fine gold stand out. Two pans are handy so a friend can pan with you.",
      },
      {
        name: "Classifier / sieve (1/4 inch mesh)",
        why: "Sits on top of a bucket and screens out big rocks so you only pan the small material where fine gold hides.",
        priority: "essential",
        beginnerTip: "A kitchen colander can work in a pinch, but a real classifier is cheap.",
      },
      {
        name: "Small hand shovel or garden trowel",
        why: "Allowed on most public land (big shovels and digging tools are not). Used to scoop gravel from the streambed.",
        priority: "essential",
      },
      {
        name: "Two five-gallon buckets",
        why: "One to hold material, one to sit on or carry gear. The classifier rests on the rim.",
        priority: "essential",
      },
      {
        name: "Snuffer bottle + small glass vial",
        why: "A snuffer bottle sucks up tiny gold flakes from your pan; the vial stores your finds.",
        priority: "nice-to-have",
        beginnerTip: "Add a little water to the vial so flakes sink and don't stick to the sides.",
      },
      {
        name: "Tweezers and a small magnet",
        why: "Tweezers pick up 'pickers' (bigger flakes). A magnet pulls out black magnetic sand to leave gold behind.",
        priority: "nice-to-have",
      },
    ],
  },
  {
    group: "Clothing and comfort",
    intro: "Panning means kneeling by cold water, often for hours. Comfort keeps it fun.",
    items: [
      {
        name: "Waterproof boots or old sturdy shoes",
        why: "Wet feet and slick rocks are the norm. Closed-toe, good-grip footwear prevents slips.",
        priority: "essential",
        beginnerTip: "Never wade in flip-flops. Felt or rubber soles grip mossy rocks better.",
      },
      {
        name: "Kneeling pad or waterproof knee pads",
        why: "Saves your knees and back on hard, rocky banks. This single item makes the day much nicer.",
        priority: "essential",
      },
      {
        name: "Gloves (waterproof or fingerless)",
        why: "Cold water and sharp rocks are hard on hands. Some panners prefer bare hands to feel the material.",
        priority: "nice-to-have",
      },
      {
        name: "Hat, sunglasses, sunscreen",
        why: "You'll be out in the open near reflective water for hours.",
        priority: "essential",
      },
      {
        name: "Change of dry clothes and a towel (in the car)",
        why: "You will get wet. Dry clothes make the drive home comfortable.",
        priority: "nice-to-have",
      },
    ],
  },
  {
    group: "Safety and navigation",
    intro:
      "These items are not optional. Older adults especially should plan for slips, heat, and being out of cell range.",
    items: [
      {
        name: "First-aid kit",
        why: "Cuts, scrapes, and slips happen around rocks and water.",
        priority: "safety",
      },
      {
        name: "Plenty of drinking water",
        why: "Panning is physical. Dehydration sneaks up on you, especially in summer.",
        priority: "safety",
      },
      {
        name: "Fully charged phone + a backup battery",
        why: "For navigation and emergencies. Service is often poor in creek valleys.",
        priority: "safety",
        beginnerTip:
          "Download an offline map of the area before you leave home, and text someone your plan.",
      },
      {
        name: "Whistle",
        why: "Carries farther than your voice if you're separated or need help.",
        priority: "safety",
      },
      {
        name: "Walking/wading stick",
        why: "A third point of contact greatly reduces falls on slick, uneven creek beds.",
        priority: "safety",
      },
      {
        name: "Bug spray and a snack",
        why: "Comfort matters; a hungry, bitten-up day ends early.",
        priority: "nice-to-have",
      },
    ],
  },
  {
    group: "Leave the heavy machinery at home",
    intro:
      "On most public land you are limited to hand tools. These items are NOT allowed on Forest Service streams and many other public areas.",
    items: [
      {
        name: "Sluice boxes / high-bankers (in-stream)",
        why: "Not allowed on National Forest streams and many public lands. Only at private/commercial sites that permit them.",
        priority: "nice-to-have",
      },
      {
        name: "Suction dredges / any motorized equipment",
        why: "Prohibited on National Forest land. Heavily regulated everywhere. Beginners should never start here.",
        priority: "nice-to-have",
      },
      {
        name: "Large shovels, picks, pry bars",
        why: "Cause 'significant disturbance' and bank digging, which is prohibited. Hand trowel only on public land.",
        priority: "nice-to-have",
      },
    ],
  },
];
