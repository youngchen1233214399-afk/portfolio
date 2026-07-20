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
  liveLabel?: string;
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
      "It was my pleasure to work with the Heaven Company team. Through user research and iterative design, we explored how AI could transform complex ESG content into understandable, contextualised and user-centred experiences.",
    slides: [
      {
        chapter: "Project Overview",
        title: "Making ESG information accessible",
        description:
          "It was my pleasure to work with the Heaven Company team. Through user research and iterative design, we explored how AI could transform complex ESG content into understandable, contextualised and user-centred experiences.",
        image: "/projects/eco-bridge-thumbnail.webp",
        alt: "Eco-Bridge dashboard and ESG decoder shown across a laptop and layered screens",
        surface: "#edf1ea",
      },
      {
        chapter: "Strategy",
        title: "Building ESG trust",
        description:
          "Through community research, expert interviews and stakeholder analysis, we identified that climate communication challenges were not only caused by information complexity, but also by gaps in trust and everyday relevance. We reframed the challenge into designing a more accessible and context-aware information experience, exploring an AI-assisted ESG interpretation workflow that connects sustainability information with community needs.",
        image: "/projects/eco-role-system-collage.webp",
        alt: "Eco-Bridge business and community interface system shown across a layered screen composition",
        surface: "#e8eee2",
      },
      {
        chapter: "Results",
        title: "Validating an AI-assisted ESG workflow",
        description:
          "We developed an interactive prototype covering resource discovery, AI-assisted ESG interpretation and community feedback flows. Using Claude and Codex for rapid prototyping, we validated core interactions through usability testing, achieving 4.5/5 usability and 100% perceived usefulness feedback from community-side testing, while enterprise feedback helped refine the product direction.",
        image: "/projects/eco-outcome-decoder-display.webp",
        alt: "Eco-Bridge ESG Report Decoder shown on a desktop display",
        surface: "#e9ece7",
      },
    ],
  },
  {
    slug: "wandering-wonderland",
    name: "Wonderland",
    type: "Adaptive AI narrative",
    year: "2026",
    liveUrl: "https://aialicegame.netlify.app/wonderland.html",
    liveLabel: "Play the game",
    previewImage: "/projects/wonderland-overview.webp",
    previewAlt: "Wonderland opening screen with Alice falling through a dark dreamscape",
    previewSurface: "#081411",
    summary:
      "I was proud to be a part of the Bristol Game Lab, exploring how AI can transform player behaviour into narrative.",
    slides: [
      {
        chapter: "Project Overview",
        title: "Behaviour becomes the story",
        description:
          "I was proud to be a part of the Bristol Game Lab, exploring how AI can transform player behaviour into narrative.",
        image: "/projects/wonderland-overview.webp",
        alt: "Wonderland opening screen with Alice falling through a dark dreamscape",
        surface: "#081411",
      },
      {
        chapter: "Strategy",
        title: "Movement as narrative input",
        description:
          "I designed a behavioural-driven gameplay system where player actions become the foundation of narrative. By analysing exploration patterns, movement choices and re-entry behaviours, the system transforms wandering, repetition and recovery into meaningful interactions, creating an adaptive environment where the world responds to the player's unique way of navigating space.",
        image: "/projects/wonderland-strategy.webp",
        alt: "Wonderland gameplay showing the green Curious attention state and hidden dream objects",
        surface: "#10241b",
      },
      {
        chapter: "Results",
        title: "A self-rewriting dream",
        description:
          "Developed an AI-driven interactive prototype integrating behavioural analysis, AI reflection and adaptive world changes. The project demonstrates how AI can function as an environmental storytelling engine, enabling games to generate personalised experiences through the relationship between player behaviour and responsive systems.",
        image: "/projects/wonderland-results.webp",
        alt: "Wonderland gameplay showing the purple Adrift state and a responsive Cheshire Cat message",
        surface: "#25162d",
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
      "It was my pleasure to work with the GCS team to explore how AI can support high-risk policy communication workflows by designing a human-AI collaboration experience for government document review, focusing on transparency, efficiency and human decision-making.",
    slides: [
      {
        chapter: "Project Overview",
        title: "Human-AI policy review",
        description:
          "It was my pleasure to work with the GCS team to explore how AI can support high-risk policy communication workflows by designing a human-AI collaboration experience for government document review, focusing on transparency, efficiency and human decision-making.",
        image: "/projects/claritybrief-thumbnail.webp",
        alt: "ClarityBrief review workspace shown across layered desktop screens",
        surface: "#eef2f6",
      },
      {
        chapter: "Strategy",
        title: "Keeping human reviewers in control",
        description:
          "Through user research and workflow analysis, we identified that the key challenge in government communication was not content generation, but the complexity of reviewing, verifying and approving policy documents. We designed an AI-assisted review workflow that transforms complex documents into structured insights while keeping human reviewers in control.",
        image: "/projects/clarity-role-system-collage.webp",
        alt: "ClarityBrief AI review system shown across multiple layered interface screens",
        surface: "#e7eef5",
      },
      {
        chapter: "Results",
        title: "Testing the review workflow",
        description:
          "I designed and developed a high-fidelity prototype covering document analysis, risk indication and approval workflows. I conducted early usability testing with 77% task completion, refining AI transparency, information hierarchy and user control.",
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
