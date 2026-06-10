/**
 * ============================================================
 *  RESOURCES DATA — Edit this file to add/remove resources
 * ============================================================
 *
 *  Each resource object has these fields:
 *
 *  id       : unique number
 *  module   : "DSA" | "OOP" | "DM" | "IS" | "TW" | "SE"
 *  type     : "mock" | "ref" | "notes"
 *  title    : short title shown on the card
 *  desc     : one-line description
 *  openUrl  : URL to open online (quiz link, Google Form, etc.)
 *             set to null if not applicable
 *  dlUrl    : URL or file path to download
 *             set to null if no download
 *
 * ============================================================
 */

const RESOURCES = [
  {
    id: 1,
    module: "OOP",
    type: "mock",
    title: "OOP Mock Exam #1",
    desc: "Covers encapsulation, inheritance, polymorphism & abstraction.",
    openUrl: "https://forms.gle/your-google-form-link",   // ← replace
    dlUrl:   null
  },
  {
    id: 2,
    module: "OOP",
    type: "ref",
    title: "OOP Reference Sheet",
    desc: "Quick-reference: class syntax, access modifiers, SOLID principles.",
    openUrl: null,
    dlUrl:   "assets/files/oop-reference.pdf"            // ← add your PDF
  },
  {
    id: 3,
    module: "DSA",
    type: "ref",
    title: "DSA Cheat Sheet",
    desc: "Big-O complexity table, sorting algorithms, tree traversals.",
    openUrl: null,
    dlUrl:   "assets/files/dsa-cheatsheet.pdf"
  },
  {
    id: 4,
    module: "DSA",
    type: "mock",
    title: "DSA Mock Exam #1",
    desc: "Linked lists, stacks, queues, binary search.",
    openUrl: "https://forms.gle/your-dsa-form-link",
    dlUrl:   null
  },
  {
    id: 5,
    module: "DM",
    type: "notes",
    title: "Discrete Math Notes",
    desc: "Set theory, logic gates, graph theory & combinations.",
    openUrl: null,
    dlUrl:   "assets/files/dm-notes.pdf"
  },
  {
    id: 6,
    module: "IS",
    type: "mock",
    title: "IS Mock Exam #1",
    desc: "Database concepts, ER diagrams, normalization.",
    openUrl: "https://forms.gle/your-is-form-link",
    dlUrl:   null
  },
  {
    id: 7,
    module: "TW",
    type: "ref",
    title: "Technical Writing Guide",
    desc: "Report structure, formal writing rules, IEEE citation format.",
    openUrl: null,
    dlUrl:   "assets/files/tw-guide.pdf"
  },
  {
    id: 8,
    module: "SE",
    type: "notes",
    title: "SE Module Notes",
    desc: "SDLC models, agile methodology, UML diagrams.",
    openUrl: null,
    dlUrl:   "assets/files/se-notes.pdf"
  }
];
