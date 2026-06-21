export interface LegalRule {
  id: string;
  landType: string;
  ruleOfThumb: string;
  details: string[];
  /** What this means for a beginner, in one line. */
  bottomLine: string;
  sourceName: string;
  sourceUrl: string;
  lastChecked: string;
}

const REVIEWED = "2026-06-21";

export const legalRules: LegalRule[] = [
  {
    id: "national-parks",
    landType: "National Park Service units (parks, preserves, monuments, military parks, seashores)",
    ruleOfThumb: "Assume NO panning or collecting.",
    details: [
      "Collecting, rockhounding, and gold panning of rocks, minerals, and fossils for recreational or educational use is generally prohibited in all units of the National Park System (36 CFR 2.1 and 2.5).",
      "Violations can carry federal penalties.",
      "Narrow exceptions exist in a few specific units (for example, Whiskeytown in California and certain Alaska areas) — these do NOT apply to our region.",
      "Nearby examples to enjoy for hiking only: Little River Canyon National Preserve (next to Fort Payne) and Chickamauga & Chattanooga National Military Park.",
    ],
    bottomLine: "National Park units are for visiting and hiking — never for panning.",
    sourceName: "National Park Service — Geology / Permits",
    sourceUrl: "https://www.nps.gov/subjects/geology/permits.htm",
    lastChecked: REVIEWED,
  },
  {
    id: "chattahoochee-oconee-nf",
    landType: "Chattahoochee-Oconee National Forest (north Georgia)",
    ruleOfThumb: "Hand panning allowed in most streams — strict rules, no permit or fee.",
    details: [
      "Recreational panning for gold in most streambeds is allowed without special permission, permits, or fees, as long as you use only a small hand shovel or trowel and a pan and cause no significant stream disturbance.",
      "In-stream sluices and suction dredges are NOT allowed. No motorized equipment.",
      "Do not dig into or undercut the banks.",
      "Not every stream is open: wilderness areas, national scenic river corridors, and many Wildlife Management Areas have extra rules or are off-limits.",
      "Some primary trout streams close temporarily during spawning — check before you go.",
    ],
    bottomLine:
      "Free public panning is real here, but confirm the stream is on Forest Service land and is open by calling the ranger district first.",
    sourceName: "USDA Forest Service — Chattahoochee-Oconee NF FAQs",
    sourceUrl: "https://www.fs.usda.gov/r08/chattahoochee-oconee/about-area/faqs",
    lastChecked: REVIEWED,
  },
  {
    id: "georgia-state-permit",
    landType: "Georgia — state mining permit (recreational exemption)",
    ruleOfThumb: "No state surface-mining permit for hobby hand panning.",
    details: [
      "Georgia's Environmental Protection Division states that a surface mining permit is not required for hobbyists panning for rocks and minerals (including gold) as a recreational activity.",
      "Keep the operation within the stream channel with no disturbance to the banks.",
      "Suction dredging is not allowed in national forests and is not recommended in privately owned streams.",
      "Specific primary trout streams may close temporarily to protect spawning trout. Call Georgia DNR Wildlife Resources Division at (770) 535-5498 to check a stream's status.",
      "Important: 'no state permit needed' does NOT mean you can pan anywhere — land ownership and local rules still control where you may legally pan.",
    ],
    bottomLine:
      "The hobby exemption removes the state permit, but you still need to be on land where panning is allowed and permitted.",
    sourceName: "Georgia EPD — Recreational Mining Exemption",
    sourceUrl: "https://epd.georgia.gov/recreational-mining-exemption",
    lastChecked: REVIEWED,
  },
  {
    id: "georgia-state-parks",
    landType: "Georgia State Parks (and historic sites / conservation areas)",
    ruleOfThumb: "Assume NO panning or collecting.",
    details: [
      "Georgia State Parks state that wildlife, plant life, driftwood, artifacts, and other natural or man-made features are protected and may not be disturbed or removed.",
      "Possession of metal detecting equipment is prohibited in Georgia State Parks.",
      "This includes places with gold history, such as Dukes Creek inside Smithgall Woods State Park.",
      "Do not confuse a protected state park with a similarly named commercial attraction (e.g., the paid 'Duke's Creek Gold & Ruby Mines').",
    ],
    bottomLine:
      "Treat state parks as no-panning unless an official rule or written permission clearly says otherwise.",
    sourceName: "Georgia State Parks — Park Rules & Regulations",
    sourceUrl: "https://gastateparks.org/ParkRules",
    lastChecked: REVIEWED,
  },
  {
    id: "alabama-state-parks",
    landType: "Alabama State Parks",
    ruleOfThumb: "Assume NO panning or collecting.",
    details: [
      "Alabama State Parks rules state it is unlawful to destroy, disturb, deface, collect, or remove natural, cultural, historical, archeological, geological, mineralogical, or similar objects or artifacts from any Alabama State Park.",
      "This is why DeSoto State Park is included for hiking and scenery only, not for panning.",
      "Do not collect rocks, minerals, gold-bearing sand, or creek material inside Alabama State Parks unless an official written authorization clearly says otherwise.",
    ],
    bottomLine:
      "Enjoy Alabama State Parks for hiking and scenery only; do not pan or remove material.",
    sourceName: "Alabama State Parks — Rules and Regulations",
    sourceUrl:
      "https://www.alapark.com/sites/default/files/2019-09/State%20Park%20Regulations%20-%202_20_2019%20-%20WITHOUT%20CITATIONS%20-%20FOR%20WEBSITE.pdf",
    lastChecked: REVIEWED,
  },
  {
    id: "coker-creek-cherokee-nf",
    landType: "Coker Creek / Cherokee National Forest (Tennessee)",
    ruleOfThumb: "Coker Creek panning is allowed only on PRIVATE property.",
    details: [
      "The Forest Service's official Coker Creek page states that gold panning on Coker Creek is only allowed on private property.",
      "Some older or third-party sources mention a 'free permit' for sections of the creek on Forest Service land; the official page does not confirm this, so do not rely on it without checking.",
      "The legal beginner route is a private camp/outfitter that grants access for a fee.",
      "Elsewhere in the Cherokee NF, hand panning may be treated as casual use, but confirm with the ranger district and stay out of wilderness and special-designation areas.",
    ],
    bottomLine:
      "For Coker Creek, use a private camp/outfitter and confirm current rules with the Forest Service before going.",
    sourceName: "USDA Forest Service — Cherokee NF: Coker Creek",
    sourceUrl: "https://www.fs.usda.gov/r08/cherokee/recreation/coker-creek",
    lastChecked: REVIEWED,
  },
  {
    id: "private-land",
    landType: "Private land (most gold-bearing creeks in our region)",
    ruleOfThumb: "Always get written permission first.",
    details: [
      "Most productive gold-bearing streams in Georgia, Alabama, and Tennessee flow through private property.",
      "Entering private land — or a streambed on private land — without permission is trespassing, even if the creek looks 'public.'",
      "A bridge pull-off or road easement usually does NOT give you the right to access the water or to any gold.",
      "Pay-to-pan camps are simply private land where the owner sells you permission and instruction — the easiest legal option.",
    ],
    bottomLine:
      "If you can't confirm it's public and open, assume it's private and get the owner's written permission before you go.",
    sourceName: "Georgia EPD — Recreational Mining Exemption (ownership note)",
    sourceUrl: "https://epd.georgia.gov/recreational-mining-exemption",
    lastChecked: REVIEWED,
  },
  {
    id: "corps-of-engineers",
    landType: "U.S. Army Corps of Engineers land (e.g., Lake Allatoona)",
    ruleOfThumb: "Pan-only, where allowed — confirm with the Corps office.",
    details: [
      "At Allatoona Lake, the Corps publishes a gold panning policy allowing recreational gold panning in tributary creek beds on government property, except organizational lease areas or prohibited areas.",
      "At Allatoona Lake, pan and shovel are allowed; metal detectors, sluice boxes, rockers, suction dredges, and chemicals are not allowed.",
      "Rules vary by site and change over time — confirm specific creeks and current restrictions with the local Corps project office.",
    ],
    bottomLine:
      "Treat Corps land as restricted: pan only, and verify the exact creeks and rules first.",
    sourceName: "U.S. Army Corps of Engineers — Allatoona Lake Gold Panning Policy",
    sourceUrl: "https://www.sam.usace.army.mil/Portals/46/docs/recreation/OP-AL%20%28Allatoona%29/Docs/Gold%20panningpolicy.pdf",
    lastChecked: REVIEWED,
  },
];

// The five access/legal buckets the app is built around — used in the Legal Guide.
export interface LegalBucket {
  status: string;
  meaning: string;
  whatToDo: string;
}

export const legalBuckets: LegalBucket[] = [
  {
    status: "Allowed",
    meaning: "Panning is permitted here (often a commercial site, on the property, for a fee).",
    whatToDo: "You can go, but still confirm hours, prices, and current rules first.",
  },
  {
    status: "Allowed With Restrictions",
    meaning: "Panning is allowed only with specific limits (e.g., hand tools only, pan only, no dredging).",
    whatToDo: "Read the restrictions carefully and follow them exactly. Confirm the stream is open.",
  },
  {
    status: "Permission Required",
    meaning: "You may pan only with permission — usually written permission from a private landowner.",
    whatToDo: "Get permission in writing before you go. No permission = do not enter.",
  },
  {
    status: "Prohibited",
    meaning: "Panning and collecting are not allowed (National Park units, most state parks).",
    whatToDo: "Enjoy these places for hiking and history only. Never pan here.",
  },
  {
    status: "Unknown / Verify",
    meaning: "We could not confirm the rules or ownership, so treat it as closed until you check.",
    whatToDo: "Identify the land manager or owner and confirm before considering a visit.",
  },
];
