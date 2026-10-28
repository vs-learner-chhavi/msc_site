import type { EventItem } from "./types";

const insiderAbout =
  "Insider Series is MSC IGDTUW's career-focused series where industry insiders share their journeys, lessons and practical advice, so students can make informed decisions about internships, placements and careers.";

const insiderWhoFor = [
  "Students planning internships and placements",
  "Anyone who wants honest, first-hand career advice from people already in the industry",
];

export const firstHalfEvents: EventItem[] = [
  // ───────────────────────── Competitions (first 2) ─────────────────────────
  {
    slug: "think-tank",
    title: "Think-Tank",
    category: "Competition",
    date: "2026-04-18",
    displayDate: "18th April 2026",
    mode: "Online",
    venue: "Online",
    image: "/images/think_tank.jpeg",
    tagline: "Challenge ideas. Sharpen communication.",
    summary:
      "An online technical group discussion to challenge ideas and build collaborative thinking.",
    about: [
      "Think-Tank is MSC IGDTUW's online technical group discussion, held on 18th April 2026. It's designed to challenge ideas, sharpen communication and build collaborative thinking, the skills that group-discussion rounds and team projects demand.",
      "Participants were placed in groups, took on technical topics together, and received feedback from both judges and peers.",
    ],
    highlights: [
      "Online technical group discussion",
      "Feedback from judges and peers",
      "Held on 18th April 2026",
    ],
    takeaways: [
      "How to structure and present your argument clearly in a group setting",
      "Listening, building on others' points and disagreeing constructively",
      "Honest feedback on your communication from judges and peers",
    ],
    whoFor: [
      "Students preparing for GD and interview rounds in placements",
      "Anyone who wants to get more confident speaking about technical topics",
    ],
    tags: ["group discussion", "gd", "communication", "online"],
  },
  {
    slug: "mind-matrix",
    title: "Mind Matrix",
    category: "Competition",
    date: "2026-03-18", // VERIFY: same date as Ideate-it-Up on the live site
    displayDate: "18th March 2026",
    mode: "Offline",
    venue: "IGDTUW",
    image: "/images/Mind-matrix.png",
    tagline: "Strategy. Logic. Psychology.",
    summary:
      "A multi-stage strategy showdown of auctions, logic grids and psychological rounds.",
    about: [
      "Mind Matrix 2026 is a multi-stage strategy showdown that tests how participants think, bid and decide under pressure. Its rounds mix auctions, logic grids and psychological challenges.",
      "It was powered by MSC IGDTUW in collaboration with IGTS-DTU, and held in person at IGDTUW.",
    ],
    highlights: [
      "Three stages: Prelims → Advanced → Grand Finals",
      "Rounds of auctions, logic grids and psychological challenges",
      "Powered by MSC IGDTUW × IGTS-DTU",
    ],
    takeaways: [
      "Practice in strategic thinking and decision-making under time pressure",
      "Logical reasoning skills that carry over to aptitude and technical rounds",
      "Experience competing and collaborating across stages of a multi-round event",
    ],
    whoFor: [
      "Students who enjoy puzzles, strategy and competitive thinking",
      "Participants from any branch, as no coding is required",
    ],
    partners: ["IGTS-DTU"],
    tags: ["strategy", "logic", "auction", "puzzle"],
  },

  // ───────────────────────── Seminars (first 5) ─────────────────────────
  {
    slug: "insider-series-3-ep-03",
    title: "Insider Series 3.0 - Ep 03",
    category: "Seminar",
    date: "2026-02-11",
    displayDate: "11th February 2026",
    time: "08:00 PM - 09:00 PM",
    mode: "Online",
    venue: "Online",
    image: "/images/Insider-series(3).png",
    tagline: "Tech Roles Explained: ctc vs in-hand",
    summary:
      "Tech Roles Explained: ctc vs in-hand with Radhika Bansal, Software Developer @ Uber.",
    about: [
      "Salary conversations rarely feature in college, yet they shape how you read your first offer letter. In Episode 3 of Insider Series 3.0, Radhika Bansal, a Software Developer at Uber, explained the difference between CTC and in-hand pay for tech roles.",
      insiderAbout,
    ],
    highlights: [
      "Episode 3 of Insider Series 3.0",
      "Speaker: Radhika Bansal, Software Developer @ Uber",
      "Online session, 8:00 PM – 9:00 PM",
    ],
    takeaways: [
      "How CTC is structured and why it differs from take-home pay",
      "What to look for in an offer letter beyond the headline number",
      "How to compare offers across roles and companies",
    ],
    whoFor: [
      "Pre-final and final year students preparing for placements",
      "Anyone about to receive their first tech offer",
    ],
    speakers: [{ name: "Radhika Bansal", role: "Software Developer @ Uber" }],
    tags: ["uber", "ctc", "salary", "offer", "insider series"],
  },
  {
    slug: "insider-series-3-ep-02",
    title: "Insider Series 3.0 - Ep 02",
    category: "Seminar",
    date: "2026-02-10",
    displayDate: "10th February 2026",
    time: "09:00 PM - 10:00 PM",
    mode: "Online",
    venue: "Online",
    image: "/images/Insider-series(2).png",
    tagline: "How to secure a DRDO Intern",
    summary: "How to secure a DRDO Intern with Anusha Mahajan, Product @ Fabric.",
    about: [
      "A DRDO internship is one of the most sought-after research opportunities for engineering students, but the path to it is rarely obvious. In Episode 2 of Insider Series 3.0, Anusha Mahajan, Product at Fabric, shared how to go about securing one.",
      insiderAbout,
    ],
    highlights: [
      "Episode 2 of Insider Series 3.0",
      "Speaker: Anusha Mahajan, Product @ Fabric",
      "Online session, 9:00 PM – 10:00 PM",
    ],
    takeaways: [
      "How to find DRDO internship openings and apply",
      "How to put together an application that gets noticed",
      "What to expect from a research internship and how to prepare for it",
    ],
    whoFor: [
      "Students interested in research, defence technology and government labs",
      "First and second-year students planning an early internship",
    ],
    speakers: [{ name: "Anusha Mahajan", role: "Product @ Fabric" }],
    tags: ["drdo", "internship", "research", "insider series"],
  },
  {
    slug: "insider-series-3-ep-01",
    title: "Insider Series 3.0 - Ep 01",
    category: "Seminar",
    date: "2026-02-09",
    displayDate: "9th February 2026",
    time: "08:00 PM - 09:00 PM",
    mode: "Online",
    venue: "Online",
    image: "/images/Insider-series(1).png",
    tagline: "Resume and LinkedIn optimisation",
    summary:
      "Resume and LinkedIn optimisation with Sripriya Aggarwal, Founder @TechNeeds.",
    about: [
      "Your resume and LinkedIn profile are often the first thing a recruiter sees. Episode 1 of Insider Series 3.0 opened the season with Sripriya Aggarwal, Founder of TechNeeds, on how to make both work harder for you, including how the LinkedIn algorithm works.",
      insiderAbout,
    ],
    highlights: [
      "Episode 1 of Insider Series 3.0",
      "Speaker: Sripriya Aggarwal, Founder @TechNeeds",
      "Online session, 8:00 PM – 9:00 PM",
    ],
    takeaways: [
      "How to structure a resume that recruiters can scan quickly",
      "How to optimise your LinkedIn headline, summary and profile",
      "How the LinkedIn algorithm works and how to be more visible on it",
    ],
    whoFor: [
      "Students preparing their first resume or LinkedIn profile",
      "Anyone applying for internships and placements this season",
    ],
    speakers: [{ name: "Sripriya Aggarwal", role: "Founder @TechNeeds" }],
    tags: ["resume", "linkedin", "career", "insider series"],
  },
  {
    slug: "insider-series-2-ep-04",
    title: "Insider Series 2.0 - Ep 04",
    category: "Seminar",
    date: "2024-11-18",
    displayDate: "18th November 2024",
    time: "07:00 PM - 08:00 PM",
    mode: "Online",
    venue: "Online",
    image: "/images/Insider-series 2.0 (4).png",
    tagline: "Guide to the FFE Scholarship & Amazon Internship",
    summary:
      "Guide to the FFE Scholarship & Amazon Internship with Tanisha Bansal.",
    about: [
      "Episode 4 of Insider Series 2.0 was a practical guide to two opportunities: the FFE Scholarship and an internship at Amazon. Tanisha Bansal shared her experience with both.",
      insiderAbout,
    ],
    highlights: [
      "Episode 4 of Insider Series 2.0",
      "Speaker: Tanisha Bansal",
      "Online session, 7:00 PM – 8:00 PM",
    ],
    takeaways: [
      "What the FFE Scholarship offers and how to apply",
      "How to prepare for the Amazon internship selection process",
      "How scholarships and internships can complement each other on your profile",
    ],
    whoFor: [
      "Students looking for scholarships alongside internships",
      ...insiderWhoFor,
    ],
    speakers: [{ name: "Tanisha Bansal" }],
    tags: ["ffe", "scholarship", "amazon", "internship", "insider series"],
  },
  {
    slug: "insider-series-2-ep-03",
    title: "Insider Series 2.0 - Ep 03",
    category: "Seminar",
    date: "2024-11-17",
    displayDate: "17th November 2024",
    time: "08:00 PM - 09:00 PM",
    mode: "Online",
    venue: "Online",
    image: "/images/Insider-series 2.0 (3).png",
    tagline: "Living the Google Dream: The Path to Google STEP",
    summary:
      "Living the Google Dream: The Path to Google STEP with Rishita Makde and Ayushi Arora.",
    about: [
      "Episode 3 of Insider Series 2.0, \"Living the Google Dream\", was about the path to Google's STEP internship. Rishita Makde and Ayushi Arora shared how they got there and what helped along the way.",
      insiderAbout,
    ],
    highlights: [
      "Episode 3 of Insider Series 2.0",
      "Speakers: Rishita Makde and Ayushi Arora",
      "Online session, 8:00 PM – 9:00 PM",
    ],
    takeaways: [
      "What the Google STEP internship is and who can apply",
      "How to prepare for the application and interview rounds",
      "How to build a profile that stands out early in college",
    ],
    whoFor: [
      "First and second-year students aiming for early-career internships",
      ...insiderWhoFor,
    ],
    speakers: [{ name: "Rishita Makde" }, { name: "Ayushi Arora" }],
    tags: ["google", "step", "internship", "insider series"],
  },

  // ───────────────────────── Bootcamp ─────────────────────────
  {
    slug: "bootcamp-24",
    title: "Bootcamp'24",
    category: "Bootcamp",
    date: "2024-07-01",
    displayDate: "July-August, 2024",
    time: "10:00 AM",
    mode: "Online",
    venue: "Online",
    image:
      "https://res.cloudinary.com/duxmh9dws/image/upload/v1694947654/bootcamp_modal_cauj6h.jpg",
    tagline: "The spirit of the season",
    summary:
      "The 2024 edition of MSC IGDTUW's Summer Bootcamp, run under the AI-DS department of IGDTUW.",
    about: [
      "The Summer Bootcamp is the flagship mentorship programme of the Microsoft Student Chapter, IGDTUW, run under the AI-DS department of the university. The 2024 edition ran across July and August, online, with the theme \"the spirit of the season\".",
      "The bootcamp is built around hands-on learning, with peers and mentors guiding participants through in-demand tech skills over several weeks.",
    ],
    highlights: [
      "Organised under the AI-DS department, IGDTUW",
      "Ran through July–August 2024, online",
      "Mentor-led, hands-on format",
    ],
    takeaways: [
      "A structured, multi-week start in in-demand tech skills",
      "Guidance from peers and mentors who have been through it",
      "Practical, project-style learning you can add to your portfolio",
    ],
    whoFor: [
      "Beginners and first-year students looking for a guided start in tech",
      "Anyone who wants to use the summer break to build real skills",
    ],
    tags: ["bootcamp", "summer", "mentorship", "learning"],
  },
];