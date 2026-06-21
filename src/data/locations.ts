import { roundedMilesFromFortPayne } from "../utils/distance";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type AccessType =
  | "Public"
  | "Private"
  | "Commercial"
  | "Historical Only"
  | "Restricted"
  | "Verify First";

export type LegalStatus =
  | "Allowed"
  | "Allowed With Restrictions"
  | "Permission Required"
  | "Prohibited"
  | "Unknown/Verify";

export type LocationCategory =
  | "Commercial Mine / Pay-to-Pan"
  | "National Forest"
  | "Creek / River"
  | "National Park Unit"
  | "State Park"
  | "Corps of Engineers Land"
  | "Historical District";

export interface PanningLocation {
  id: string;
  name: string;
  state: string;
  lat: number;
  lng: number;
  /** Straight-line miles from downtown Fort Payne (computed from coordinates). */
  distanceFromFortPayneMiles: number;
  accessType: AccessType;
  legalStatus: LegalStatus;
  /** 1 (hard for beginners) to 5 (very beginner friendly). */
  beginnerRating: number;
  category: LocationCategory;
  summary: string;
  whatToExpect: string;
  toolsAllowed: string[];
  toolsNotAllowed: string[];
  safetyNotes: string[];
  permissionNotes: string;
  officialSourceName: string;
  officialSourceUrl: string;
  /** YYYY-MM-DD — when this entry's rules were last reviewed by the app author. */
  lastChecked: string;
  tags: string[];
}

// All entries reviewed against official/operator sources on this date.
// Coordinates are APPROXIMATE (good enough for a map pin and a distance estimate).
// Distances are straight-line, not driving distance.
const REVIEWED = "2026-06-21";

type LocationSeed = Omit<PanningLocation, "distanceFromFortPayneMiles">;

// ---------------------------------------------------------------------------
// Location seeds
// ---------------------------------------------------------------------------

const SEEDS: LocationSeed[] = [
  // ----- COMMERCIAL / PAY-TO-PAN (best beginner options) --------------------
  {
    id: "alabama-gold-camp",
    name: "Alabama Gold Camp",
    state: "AL",
    lat: 33.301,
    lng: -85.829,
    accessType: "Commercial",
    legalStatus: "Allowed",
    beginnerRating: 5,
    category: "Commercial Mine / Pay-to-Pan",
    summary:
      "Private pay-to-dig camp near Lineville in Alabama's gold belt. Family-style, beginner friendly, with creek access and equipment rentals. This is the closest beginner-friendly option to Fort Payne where panning is clearly allowed (on the property, for a fee).",
    whatToExpect:
      "A relaxed, rural camp with miles of creek to pan. Staff and other prospectors are usually happy to help newcomers. Expect fine gold (flakes) rather than nuggets. Cash or checks only — no credit cards. You must sign a liability waiver and start an activity card at the general store before going past it.",
    toolsAllowed: [
      "Gold pan",
      "Hand trowel / small hand shovel",
      "Classifier / sieve",
      "Sluice, high-banker, and dredge are advertised by the camp (ask staff what is permitted in your area and on your activity card)",
    ],
    toolsNotAllowed: [
      "Whatever the camp staff says is off-limits that day — always ask first",
    ],
    safetyNotes: [
      "Do not go alone — bring at least one companion.",
      "Tell staff where on the creek you will be.",
      "Wading: watch footing on slick rocks; cold water and uneven creek beds cause falls.",
      "Bring sun protection, water, and a basic first-aid kit.",
    ],
    permissionNotes:
      "Open to the public for a fee. Call ahead for current hours, rates, and rules (cash/check only). Verify current rules before going.",
    officialSourceName: "Alabama Gold Camp (official site)",
    officialSourceUrl: "https://www.alabamagoldcamp.com/",
    lastChecked: REVIEWED,
    tags: ["beginner", "fee", "family", "creek", "alabama", "best-first-trip"],
  },
  {
    id: "crisson-gold-mine",
    name: "Crisson Gold Mine",
    state: "GA",
    lat: 34.547,
    lng: -83.985,
    accessType: "Commercial",
    legalStatus: "Allowed",
    beginnerRating: 5,
    category: "Commercial Mine / Pay-to-Pan",
    summary:
      "Long-running tourist gold mine in Dahlonega (the heart of Georgia's gold belt). You pan pre-loaded ore at supervised stations with instruction. Excellent for a guaranteed, low-stress first experience.",
    whatToExpect:
      "Buy a pan (or bucket) of salted ore, get hands-on panning instruction, and keep what you find. There is an open-air museum with historic equipment and a working stamp mill. Open seven days a week, rain or shine. Great for kids and first-timers.",
    toolsAllowed: ["Provided pans and stations (no personal equipment needed)"],
    toolsNotAllowed: [
      "Personal dredges/sluices are not needed here — this is a station-based attraction",
    ],
    safetyNotes: [
      "Very controlled environment — low risk.",
      "Closed-toe shoes recommended; concrete and water can be slick.",
    ],
    permissionNotes:
      "Open to the public for a fee (typically a modest per-person price that includes a pan of ore). Verify current hours and prices before going.",
    officialSourceName: "Crisson Gold Mine (official site)",
    officialSourceUrl: "https://www.crissongoldmine.com/",
    lastChecked: REVIEWED,
    tags: ["beginner", "fee", "guided", "museum", "georgia", "dahlonega", "kids"],
  },
  {
    id: "consolidated-gold-mine",
    name: "Consolidated Gold Mine",
    state: "GA",
    lat: 34.534,
    lng: -83.981,
    accessType: "Commercial",
    legalStatus: "Allowed",
    beginnerRating: 4,
    category: "Commercial Mine / Pay-to-Pan",
    summary:
      "Dahlonega attraction built around the largest hard-rock gold mine east of the Mississippi. Includes a guided underground tour plus gold panning instruction and gem mining. Beginner friendly, but the tour involves stairs.",
    whatToExpect:
      "A roughly 40-minute guided walk ~200 feet underground, then panning instruction from experienced panners and a free gold sample. Gemstone 'grubbing' flumes are also available. The mine stays around 60 degrees year-round.",
    toolsAllowed: ["Provided pans and stations (instruction included)"],
    toolsNotAllowed: ["No personal mining equipment needed for the attraction"],
    safetyNotes: [
      "The underground tour requires stairs and ramps — closed-toe shoes are required (no flip-flops); not stroller accessible.",
      "If stairs or tight spaces are difficult, do the surface panning only.",
    ],
    permissionNotes:
      "Open to the public for a fee. Verify current hours, prices, and accessibility before going.",
    officialSourceName: "Consolidated Gold Mine (official site)",
    officialSourceUrl: "https://consolidatedgoldmine.com/",
    lastChecked: REVIEWED,
    tags: ["beginner", "fee", "guided", "underground", "georgia", "dahlonega"],
  },
  {
    id: "dukes-creek-gold-ruby-mines",
    name: "Duke's Creek Gold & Ruby Mines",
    state: "GA",
    lat: 34.62,
    lng: -83.78,
    accessType: "Commercial",
    legalStatus: "Allowed",
    beginnerRating: 5,
    category: "Commercial Mine / Pay-to-Pan",
    summary:
      "Commercial pay-dirt operation near the Helen / Cleveland area. You work buckets of pay dirt to find gold and gems at outdoor flume stations. Marketed as great for kids and first-timers. (This is the commercial attraction — not the protected natural Dukes Creek inside Smithgall Woods State Park.)",
    whatToExpect:
      "Buy buckets of pay dirt, then use water flumes to wash and sort. A friendly, low-pressure way to practice the panning/sorting motion and learn what gold and gems look like in the pan.",
    toolsAllowed: ["Provided flumes, pans, and classifiers"],
    toolsNotAllowed: ["Personal dredges/sluices are not relevant to a pay-dirt station"],
    safetyNotes: [
      "Controlled outdoor stations — low risk.",
      "Sun protection and water recommended in summer.",
    ],
    permissionNotes:
      "Open to the public for a fee. Hours can be seasonal — call ahead and verify before going.",
    officialSourceName: "Explore Georgia / local listing (verify operator hours)",
    officialSourceUrl: "https://exploregeorgia.org/",
    lastChecked: REVIEWED,
    tags: ["beginner", "fee", "pay-dirt", "georgia", "helen", "kids"],
  },
  {
    id: "coker-creek-gold-camp",
    name: "Coker Creek Gold Camp (private)",
    state: "TN",
    lat: 35.24,
    lng: -84.27,
    accessType: "Private",
    legalStatus: "Allowed",
    beginnerRating: 4,
    category: "Commercial Mine / Pay-to-Pan",
    summary:
      "Private creek-side camp at historic Coker Creek, Tennessee. Because panning on Coker Creek is only allowed on PRIVATE property, a private camp/outfitter is the legal way for beginners to pan this famous creek.",
    whatToExpect:
      "Creek-side camping and panning with on-site instruction in proper technique. Modest day-use / camping fees. Expect mostly fine gold; gold replenishes after high-water events.",
    toolsAllowed: [
      "Gold pan",
      "Hand trowel / small hand shovel",
      "Classifier",
      "Ask the camp what else is permitted on their property",
    ],
    toolsNotAllowed: ["Whatever the property owner does not allow — always ask first"],
    safetyNotes: [
      "Do not go alone.",
      "Steep, fast water in the Coker Creek gorge — stay in calm, shallow zones.",
      "Slick rocks: wade carefully and watch footing.",
    ],
    permissionNotes:
      "Private property — you must have the owner/operator's permission (typically via a paid stay or day pass). Reserve and confirm details before going.",
    officialSourceName: "Tennessee Overhill — Coker Creek info (verify operator)",
    officialSourceUrl: "https://www.tennesseeoverhill.com/coker-creek-gold-panning-dist/",
    lastChecked: REVIEWED,
    tags: ["beginner", "fee", "private", "tennessee", "coker-creek", "creek"],
  },

  // ----- PUBLIC LAND WITH RESTRICTIONS --------------------------------------
  {
    id: "chattahoochee-oconee-nf-streams",
    name: "Chattahoochee-Oconee National Forest (general streams)",
    state: "GA",
    lat: 34.7,
    lng: -84.0,
    accessType: "Public",
    legalStatus: "Allowed With Restrictions",
    beginnerRating: 3,
    category: "National Forest",
    summary:
      "On most National Forest streambeds in north Georgia, recreational hand panning is allowed without a permit or fee — but with strict rules. This is real free public access, but you must confirm you are actually on Forest Service land (not private or a Wildlife Management Area with extra rules) and that the stream is open.",
    whatToExpect:
      "Hand panning in a streambed using only a pan and a small hand shovel or trowel. No fee, no permit for hand panning. Finding a productive, legally open, publicly owned stretch takes homework — call the ranger district first.",
    toolsAllowed: [
      "Gold pan",
      "Small hand shovel or garden trowel",
      "Classifier / sieve (keep it hand-scale)",
    ],
    toolsNotAllowed: [
      "In-stream sluices",
      "Suction dredges",
      "Any motorized equipment",
      "Digging into / undercutting the stream banks (no significant disturbance)",
    ],
    safetyNotes: [
      "Do not go alone — cell service is often poor in the forest.",
      "Tell someone your plan and expected return time.",
      "Forest roads can require high clearance or 4WD; some access is on foot only.",
      "Check for seasonal trout-stream closures before you go.",
    ],
    permissionNotes:
      "No state surface-mining permit is required for hobby hand panning (Georgia EPD recreational mining exemption), but land ownership and local rules still control. Wilderness areas, scenic-river corridors, and many WMAs are off-limits. Call the Blue Ridge Ranger District at (706) 745-6928 to confirm the stream is on Forest Service land, who owns the mineral rights, and whether any closures apply. Verify current rules before going.",
    officialSourceName: "USDA Forest Service — Chattahoochee-Oconee NF FAQs",
    officialSourceUrl:
      "https://www.fs.usda.gov/r08/chattahoochee-oconee/about-area/faqs",
    lastChecked: REVIEWED,
    tags: ["free", "public", "national-forest", "georgia", "hand-tools-only"],
  },
  {
    id: "lake-allatoona-tributaries",
    name: "Lake Allatoona tributary creeks (USACE)",
    state: "GA",
    lat: 34.16,
    lng: -84.73,
    accessType: "Restricted",
    legalStatus: "Allowed With Restrictions",
    beginnerRating: 3,
    category: "Corps of Engineers Land",
    summary:
      "On U.S. Army Corps of Engineers land at Lake Allatoona, the published policy allows recreational gold panning in tributary creek beds on government property, except organizational lease areas or prohibited areas. Closer to Fort Payne than the Dahlonega area, but rules are restrictive and should be confirmed with the Corps.",
    whatToExpect:
      "Pan-and-shovel-only recreational panning in feeder creek beds, where the Corps policy allows it. Mostly fine gold. Access points and parking vary; confirm specific creeks, property boundaries, and posted restrictions with the Corps office before you go.",
    toolsAllowed: ["Gold pan", "Small shovel"],
    toolsNotAllowed: [
      "Sluice boxes",
      "Rockers / high-bankers",
      "Suction dredges",
      "Metal detectors",
      "Chemicals such as mercury or arsenic",
    ],
    safetyNotes: [
      "Do not go alone.",
      "Watch water levels — Corps reservoirs can change level; avoid panning near dam releases.",
      "Slick banks and rocks.",
    ],
    permissionNotes:
      "Corps of Engineers land has its own rules and they vary by site and over time. Confirm current panning rules and approved creeks with the Lake Allatoona Project Office before going. Verify current rules before going.",
    officialSourceName: "U.S. Army Corps of Engineers — Allatoona Lake Gold Panning Policy",
    officialSourceUrl: "https://www.sam.usace.army.mil/Portals/46/docs/recreation/OP-AL%20%28Allatoona%29/Docs/Gold%20panningpolicy.pdf",
    lastChecked: REVIEWED,
    tags: ["public", "corps", "pan-shovel-only", "georgia", "verify"],
  },
  {
    id: "tellico-river-cherokee-nf",
    name: "Tellico River (Cherokee National Forest)",
    state: "TN",
    lat: 35.36,
    lng: -84.18,
    accessType: "Public",
    legalStatus: "Allowed With Restrictions",
    beginnerRating: 2,
    category: "National Forest",
    summary:
      "A larger Cherokee National Forest river near Coker Creek with reported placer gold. Recreational hand panning is generally treated as casual use on Forest Service land, but the river is big water and gold distribution is spotty — harder for beginners.",
    whatToExpect:
      "Sampling gravel bars in a sizeable river. Lots of walking and testing for little reward unless you find the right gravel. Better as a second outing once you know the panning motion.",
    toolsAllowed: [
      "Gold pan",
      "Small hand shovel / trowel",
      "Classifier",
      "(Non-motorized sluice use varies by area — ask the ranger district)",
    ],
    toolsNotAllowed: [
      "Motorized equipment (requires Forest Service authorization)",
      "Suction dredges as casual use",
    ],
    safetyNotes: [
      "Do not go alone — moving river water is dangerous.",
      "Never wade in fast or deep water; stay on gravel bars and shallow edges.",
      "Cold water and slick rounded stones.",
    ],
    permissionNotes:
      "Confirm current rules for hand panning and any equipment with the Cherokee NF Tellico / Ocoee-Hiwassee Ranger District. Stay out of wilderness and specially designated areas. Verify current rules before going.",
    officialSourceName: "USDA Forest Service — Cherokee National Forest (Recreation)",
    officialSourceUrl: "https://www.fs.usda.gov/r08/cherokee",
    lastChecked: REVIEWED,
    tags: ["public", "national-forest", "tennessee", "big-water", "verify"],
  },

  // ----- PERMISSION REQUIRED / VERIFY FIRST ---------------------------------
  {
    id: "coker-creek-community",
    name: "Coker Creek (community streams)",
    state: "TN",
    lat: 35.247,
    lng: -84.265,
    accessType: "Verify First",
    legalStatus: "Permission Required",
    beginnerRating: 2,
    category: "Historical District",
    summary:
      "Coker Creek is one of the most famous gold creeks in the Southeast. IMPORTANT: the Forest Service states that gold panning on Coker Creek is only allowed on PRIVATE property. Treat the public Forest Service banks as off-limits to panning and use a private camp/outfitter instead.",
    whatToExpect:
      "Historic, scenic gold country. Realistically, your legal entry point is a private camp or outfitter (see 'Coker Creek Gold Camp'). Some older or third-party sources mention a 'free permit' for sections of the creek; the official Forest Service page does not, so confirm the current status before assuming public panning is allowed.",
    toolsAllowed: ["Only what a private landowner permits on their property"],
    toolsNotAllowed: [
      "Panning on Forest Service (public) land along Coker Creek",
      "Trespassing on private land without written permission",
    ],
    safetyNotes: [
      "Do not go alone.",
      "Steep gorge and fast water in places — stay in calm shallows.",
      "Know exactly whose land you are on before you put a pan in the water.",
    ],
    permissionNotes:
      "Conflicting information exists. Official Cherokee NF guidance: panning on Coker Creek is only allowed on private property. Before going, call the Cherokee NF Ocoee/Hiwassee or Tellico Ranger District and/or the Coker Creek Welcome Center to confirm what (if anything) is currently open on public land, and get written permission for any private land. Verify current rules before going.",
    officialSourceName: "USDA Forest Service — Cherokee NF: Coker Creek",
    officialSourceUrl: "https://www.fs.usda.gov/r08/cherokee/recreation/coker-creek",
    lastChecked: REVIEWED,
    tags: ["historical", "private", "tennessee", "permission", "verify", "famous"],
  },
  {
    id: "chestatee-river-dahlonega",
    name: "Chestatee River access (near Dahlonega)",
    state: "GA",
    lat: 34.49,
    lng: -83.99,
    accessType: "Verify First",
    legalStatus: "Permission Required",
    beginnerRating: 3,
    category: "Creek / River",
    summary:
      "A historic gold-bearing river in the Dahlonega area. Some stretches touch National Forest land, but most banks are private and some bridge areas are only easements that do NOT grant public access. Ownership must be confirmed for every spot.",
    whatToExpect:
      "Classic north-Georgia gold belt water. If you can confirm a legal, publicly owned or permission-granted stretch, expect fine gold. The hard part is access, not technique.",
    toolsAllowed: [
      "Gold pan and small hand tools (only where panning is legally allowed)",
    ],
    toolsNotAllowed: [
      "Sluices / dredges on public land",
      "Entering private banks without permission",
    ],
    safetyNotes: [
      "Do not go alone.",
      "Moving river water — wade only in shallow, slow edges.",
      "Slick rocks and sudden drop-offs.",
    ],
    permissionNotes:
      "Do not assume bridge pull-offs are public. Confirm ownership and mineral rights with the Blue Ridge Ranger District (706) 745-6928 for Forest Service stretches, and get written landowner permission for private stretches. Verify current rules before going.",
    officialSourceName: "Discover Dahlonega — gold panning guidance (verify locally)",
    officialSourceUrl: "https://www.dahlonega.org/things-to-do/gold-mining/",
    lastChecked: REVIEWED,
    tags: ["river", "georgia", "permission", "verify", "ownership-varies"],
  },
  {
    id: "etowah-river-dawsonville",
    name: "Etowah River (near Dawsonville)",
    state: "GA",
    lat: 34.4,
    lng: -84.05,
    accessType: "Verify First",
    legalStatus: "Unknown/Verify",
    beginnerRating: 2,
    category: "Creek / River",
    summary:
      "A historic gold-producing river that drains a wide part of the gold belt. Access and ownership are mixed and unclear, so this is a 'verify first' entry rather than a confirmed legal spot.",
    whatToExpect:
      "Potential gold in a less-pressured drainage, but you must do real homework to find a legal, accessible stretch. Listed here for planning and research, not as a confirmed open site.",
    toolsAllowed: ["Only where you have confirmed panning is legal and permitted"],
    toolsNotAllowed: [
      "Sluices / dredges on public land",
      "Any access without confirming ownership first",
    ],
    safetyNotes: [
      "Do not go alone.",
      "River currents and slick rounded stones.",
      "Confirm you are not on private land before entering the water.",
    ],
    permissionNotes:
      "Treat as UNKNOWN until you confirm. Identify the exact parcel, find the land manager or owner, and get permission. For Forest Service stretches, call the Blue Ridge Ranger District (706) 745-6928. Verify current rules before going.",
    officialSourceName: "Georgia EPD — Recreational Mining Exemption (background)",
    officialSourceUrl: "https://epd.georgia.gov/recreational-mining-exemption",
    lastChecked: REVIEWED,
    tags: ["river", "georgia", "unknown", "verify", "research"],
  },

  // ----- PROHIBITED (educational examples; do NOT pan here) ------------------
  {
    id: "little-river-canyon-nps",
    name: "Little River Canyon National Preserve",
    state: "AL",
    lat: 34.388,
    lng: -85.617,
    accessType: "Restricted",
    legalStatus: "Prohibited",
    beginnerRating: 1,
    category: "National Park Unit",
    summary:
      "A beautiful National Park Service unit right next to Fort Payne — and a clear example of where panning is NOT allowed. Collecting, rockhounding, and gold panning are generally prohibited in all National Park System units. Enjoy it for hiking and the views, not for prospecting.",
    whatToExpect:
      "Waterfalls, canyon rims, pools, and sandstone cliffs atop Lookout Mountain. Excellent for a safe family hike — but leave rocks, minerals, and pans at home.",
    toolsAllowed: ["None for prospecting — no collecting or panning"],
    toolsNotAllowed: [
      "Gold pans",
      "Any collecting of rocks, minerals, or natural objects",
      "Metal detectors",
    ],
    safetyNotes: [
      "Stay back from cliff edges and slick rock near waterfalls.",
      "Currents and rocks near the falls are dangerous — obey posted signs.",
    ],
    permissionNotes:
      "Gold panning and rock collecting are prohibited under National Park Service regulations (36 CFR 2.1 and 2.5). Violations carry federal penalties. Use this preserve for hiking only. Verify current rules before going.",
    officialSourceName: "National Park Service — Little River Canyon National Preserve",
    officialSourceUrl: "https://www.nps.gov/liri/",
    lastChecked: REVIEWED,
    tags: ["prohibited", "national-park", "alabama", "hiking", "scenic", "educational"],
  },
  {
    id: "chickamauga-chattanooga-nmp",
    name: "Chickamauga & Chattanooga National Military Park",
    state: "GA",
    lat: 34.94,
    lng: -85.26,
    accessType: "Restricted",
    legalStatus: "Prohibited",
    beginnerRating: 1,
    category: "National Park Unit",
    summary:
      "Another nearby National Park Service unit where panning and collecting are prohibited. Included so the rule is unmistakable: National Park units are for visiting, not prospecting.",
    whatToExpect:
      "Historic battlefield grounds and trails. Worth a respectful visit — but no panning, digging, or collecting.",
    toolsAllowed: ["None for prospecting"],
    toolsNotAllowed: [
      "Gold pans",
      "Collecting of any natural or historic objects",
      "Metal detectors",
    ],
    safetyNotes: ["Standard trail safety; stay on marked paths."],
    permissionNotes:
      "Prohibited under National Park Service regulations (36 CFR 2.1). Verify current rules before going.",
    officialSourceName: "National Park Service — Chickamauga & Chattanooga NMP",
    officialSourceUrl: "https://www.nps.gov/chch/",
    lastChecked: REVIEWED,
    tags: ["prohibited", "national-park", "georgia", "historic", "educational"],
  },
  {
    id: "desoto-state-park",
    name: "DeSoto State Park",
    state: "AL",
    lat: 34.5,
    lng: -85.622,
    accessType: "Restricted",
    legalStatus: "Prohibited",
    beginnerRating: 1,
    category: "State Park",
    summary:
      "A scenic Alabama state park near Fort Payne. State parks protect their natural features, so treat panning and rock collecting as not allowed unless the park provides specific written permission. Great for a safe practice hike before a real panning trip.",
    whatToExpect:
      "Waterfalls, wildflowers, and well-marked trails — ideal for the 'Hiking Basics' practice walk recommended in this app.",
    toolsAllowed: ["None for prospecting"],
    toolsNotAllowed: ["Gold pans / collecting unless the park grants written permission"],
    safetyNotes: [
      "Slick rock near waterfalls.",
      "A perfect, low-risk place to practice the hiking and trip-prep habits in this guide.",
    ],
    permissionNotes:
      "State parks generally prohibit collecting/panning of natural features unless an official rule or written permission says otherwise. Contact the park before assuming anything is allowed. Verify current rules before going.",
    officialSourceName: "Alabama State Parks — DeSoto State Park",
    officialSourceUrl: "https://www.alapark.com/parks/desoto-state-park",
    lastChecked: REVIEWED,
    tags: ["prohibited", "state-park", "alabama", "hiking", "practice"],
  },
  {
    id: "smithgall-woods-dukes-creek",
    name: "Smithgall Woods State Park (Dukes Creek)",
    state: "GA",
    lat: 34.7,
    lng: -83.77,
    accessType: "Restricted",
    legalStatus: "Prohibited",
    beginnerRating: 1,
    category: "State Park",
    summary:
      "The natural Dukes Creek runs through Smithgall Woods, a Georgia State Park near Helen. Despite the area's gold history, this is protected state-park land — treat panning and collecting as not allowed. (Do not confuse it with the nearby commercial 'Duke's Creek Gold & Ruby Mines' attraction, which is a paid, legal option.)",
    whatToExpect:
      "A protected conservation area with trails and a beautiful stream. Visit for nature, not prospecting.",
    toolsAllowed: ["None for prospecting"],
    toolsNotAllowed: ["Gold pans / collecting in the state park"],
    safetyNotes: ["Standard trail and stream-edge caution."],
    permissionNotes:
      "Georgia State Parks protect natural features; panning/collecting is not permitted without specific official authorization. Verify current rules before going.",
    officialSourceName: "Georgia State Parks — Smithgall Woods",
    officialSourceUrl: "https://gastateparks.org/SmithgallWoods",
    lastChecked: REVIEWED,
    tags: ["prohibited", "state-park", "georgia", "conservation", "easy-to-confuse"],
  },
];

// ---------------------------------------------------------------------------
// Public export — distance is computed from coordinates for every record.
// ---------------------------------------------------------------------------

export const locations: PanningLocation[] = SEEDS.map((seed) => ({
  ...seed,
  distanceFromFortPayneMiles: roundedMilesFromFortPayne(seed.lat, seed.lng),
})).sort((a, b) => a.distanceFromFortPayneMiles - b.distanceFromFortPayneMiles);

// Helpful, hand-picked starter trips for the dashboard + travel guide.
export const bestFirstTripIds = [
  "alabama-gold-camp",
  "crisson-gold-mine",
  "consolidated-gold-mine",
];

export const ACCESS_TYPES: AccessType[] = [
  "Public",
  "Private",
  "Commercial",
  "Historical Only",
  "Restricted",
  "Verify First",
];

export const LEGAL_STATUSES: LegalStatus[] = [
  "Allowed",
  "Allowed With Restrictions",
  "Permission Required",
  "Prohibited",
  "Unknown/Verify",
];

export const STATES = Array.from(new Set(locations.map((l) => l.state))).sort();
