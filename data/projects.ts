export type ProjectSlide = {
  chapter: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  surface: string;
};

export type PortfolioProject = {
  slug: string;
  name: string;
  displayCode?: string;
  type: string;
  year: string;
  liveUrl: string;
  previewImage: string;
  previewAlt: string;
  previewSurface: string;
  summary: string;
  slides: ProjectSlide[];
};

export const projects: PortfolioProject[] = [
  {
    slug: "eco-bridge",
    name: "Eco-Bridge",
    type: "Community intelligence",
    year: "2026",
    liveUrl: "https://eco-bridgeai.netlify.app/",
    previewImage: "/projects/eco-bridge-thumbnail.webp",
    previewAlt: "Eco-Bridge dashboard and ESG decoder shown across a laptop and layered screens",
    previewSurface: "#17251b",
    summary:
      "Based on a client brief from Heaven Company, Eco-Bridge explores how AI-assisted interpretation can make ESG information easier to understand and connect corporate information with community needs.",
    slides: [
      {
        chapter: "Project Overview",
        title: "Connecting ESG information with community needs",
        description:
          "Based on a client brief from Heaven Company, Eco-Bridge explores how AI-assisted information interpretation can lower the barrier to understanding ESG content and connect corporate information with community needs through an AI information experience prototype.",
        image: "/projects/eco-bridge-thumbnail.webp",
        alt: "Eco-Bridge dashboard and ESG decoder shown across a laptop and layered screens",
        surface: "#edf1ea",
      },
      {
        chapter: "Role",
        title: "UX research, interaction design and AI prototyping",
        description:
          "I was responsible for UX research, interaction design and AI prototyping for Eco-Bridge, contributing across the complete design process from user insights and experience-flow design to high-fidelity prototype validation.",
        image: "/projects/eco-role-system-collage.webp",
        alt: "Eco-Bridge business and community interface system shown across a layered screen composition",
        surface: "#e8eee2",
      },
      {
        chapter: "Outcome",
        title: "A tested prototype direction",
        description:
          "I completed the core interaction prototypes for resource browsing, AI explanations and company information. User testing validated the experience direction: the community-facing prototype achieved a 4.5/5 usability score, and 100% of participants found it useful. The project remains at the prototype validation stage.",
        image: "/projects/eco-outcome-decoder-display.webp",
        alt: "Eco-Bridge ESG Report Decoder shown on a desktop display",
        surface: "#e9ece7",
      },
    ],
  },
  {
    slug: "claritybrief",
    name: "ClarityBrief",
    type: "Explainable AI review",
    year: "2025",
    liveUrl: "https://gcs-ai.netlify.app/",
    previewImage: "/projects/claritybrief-thumbnail.webp",
    previewAlt: "ClarityBrief review workspace shown across layered desktop screens",
    previewSurface: "#d7e7f2",
    summary:
      "GCS Assist is an AI-assisted content review tool for government communications that uses structured information and human review mechanisms to improve the review of high-risk content.",
    slides: [
      {
        chapter: "Project Overview",
        title: "AI-assisted review for government communications",
        description:
          "GCS Assist is an AI-assisted content review tool designed for government communication scenarios. Through structured information presentation and human review mechanisms, it helps users improve the experience of reviewing high-risk content.",
        image: "/projects/claritybrief-thumbnail.webp",
        alt: "ClarityBrief review workspace shown across layered desktop screens",
        surface: "#eef2f6",
      },
      {
        chapter: "Role",
        title: "AI experience design and interactive prototyping",
        description:
          "I was responsible for AI experience design and interactive prototype development, working from user research and information architecture through to Human-AI workflow design to explore how AI can support complex review scenarios.",
        image: "/projects/clarity-role-system-collage.webp",
        alt: "ClarityBrief AI review system shown across multiple layered interface screens",
        surface: "#e7eef5",
      },
      {
        chapter: "Outcome",
        title: "A complete high-fidelity review workflow",
        description:
          "I completed a high-fidelity interactive prototype covering document analysis, risk alerts and the end-to-end review flow. Early usability testing informed refinements to AI transparency and the level of control available to users.",
        image: "/projects/clarity-outcome-router-display.webp",
        alt: "ClarityBrief AI Review Router shown on a desktop display with layered workflow screens",
        surface: "#dfe9f3",
      },
    ],
  },
  {
    slug: "741",
    name: "741 Performance",
    displayCode: "741",
    type: "Athlete brand experience",
    year: "2025",
    liveUrl: "https://741qrcode.netlify.app/",
    previewImage: "/projects/741-outcome-flatlay.webp",
    previewAlt: "741 community, leaderboard, shop and performance screens shown in a flat-lay composition",
    previewSurface: "#e6e8e5",
    summary:
      "It was my pleasure to work with the 741 Performance team to design a post-purchase digital membership experience. By turning the shoebox QR code into a member entry point, the concept connects product purchase with community participation, exclusive benefits and personalised repurchase.",
    slides: [
      {
        chapter: "Project Overview",
        title: "A post-purchase digital membership experience",
        description:
          "It was my pleasure to work with the 741 Performance team to design a post-purchase digital membership experience. By turning the shoebox QR code into a member entry point, the concept connects product purchase with community participation, exclusive benefits and personalised repurchase.",
        image: "/projects/741-outcome-flatlay.webp",
        alt: "741 community, leaderboard, shop and performance screens shown in a flat-lay composition",
        surface: "#e6e8e5",
      },
      {
        chapter: "Strategy",
        title: "From club management to post-purchase engagement",
        description:
          "We combined persona analysis, stakeholder mapping, affinity mapping and brand interviews to shift the project from club management to post-purchase engagement. I then defined the QR membership journey, core features and information architecture, and used Claude to build and test a high-fidelity prototype.",
        image: "/projects/741-role-collage.webp",
        alt: "741 hero, shop and community forum shown across an isometric device layout",
        surface: "#e6e8e5",
      },
      {
        chapter: "Outcome",
        title: "An end-to-end membership journey",
        description:
          "The project delivered an end-to-end journey from QR activation to points, leaderboards, community participation and personalised repurchase. Userbrain testing validated the motivational value of gamification and identified issues around navigation, mobile expectations and detachable pods.",
        image: "/projects/741-thumbnail.webp",
        alt: "741 brand experience shown across laptop, tablet and phone screens",
        surface: "#e8eae7",
      },
    ],
  },
  {
    slug: "bristopia",
    name: "Bristopia",
    type: "Gamified sustainability",
    year: "2025",
    liveUrl: "https://bristopia.netlify.app/",
    previewImage: "/projects/bristopia-thumbnail.webp",
    previewAlt: "Bristopia garden quest map",
    previewSurface: "#dcebe1",
    summary:
      "I worked with a team to design a gamified mobile experience for the University of Bristol Botanic Garden, helping students discover its sustainability work through garden exploration, QR-based challenges, rewards, and community activities.",
    slides: [
      {
        chapter: "Project Overview",
        title: "A gamified mobile experience for the Botanic Garden",
        description:
          "I worked with a team to design a gamified mobile experience for the University of Bristol Botanic Garden, helping students discover its sustainability work through garden exploration, QR-based challenges, rewards, and community activities.",
        image: "/projects/bristopia-thumbnail.webp",
        alt: "Bristopia map showing an active Pollinator Trail through the Botanic Garden",
        surface: "#dcebe1",
      },
      {
        chapter: "Strategy",
        title: "Designing for active garden exploration",
        description:
          "We combined stakeholder analysis, competitor research, personas, STEEPLE, and on-site AEIOU observation to understand students’ motivations and barriers. Based on these insights, we shifted from digital signage and AI plant recognition toward a lightweight gamified experience centred on exploration, sustainability challenges, rewards, and community participation.",
        image: "/projects/bristopia-role-map-collage-v2.webp",
        alt: "Bristopia mobile screens showing the garden map, quest selection and QR task flow",
        surface: "#e3eee7",
      },
      {
        chapter: "Results",
        title: "Testing the gamified garden experience",
        description:
          "We delivered a low-fidelity Figma prototype and a higher-fidelity interactive prototype in Claude. Mobile usability testing validated the appeal of challenges, rewards, achievements, and community activities, while identifying QR onboarding, map usability, navigation, and sustainability messaging as the main priorities for further iteration.",
        image: "/projects/bristopia-outcome-collage-v2.webp",
        alt: "Bristopia community, profile and challenge screens shown across mobile mockups",
        surface: "#e0ede4",
      },
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
