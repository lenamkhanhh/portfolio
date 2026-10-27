export type EvidenceTone = "academic" | "competitive" | "achievement";
export type WorkStatus = "Current work" | "Early project" | "Evolving notes" | "Live learning tool";
export type ArtifactKind = "retrieval" | "workbench" | "switcher" | "training" | "voxel" | "fft";

export interface EvidenceItem {
  label: string;
  value: string;
  context: string;
  tone: EvidenceTone;
  href?: string;
}

export interface TrajectoryStage {
  title: string;
  description: string;
  marker: string;
}

export interface WorkItem {
  title: string;
  status: WorkStatus;
  type: string;
  focus: string;
  detail: string;
  artifact: string;
  artifactKind: ArtifactKind;
  href: string;
  action: string;
}

export interface PreUniversityAchievement {
  event: string;
  award: string;
  context: string;
  href?: string;
}

export const profile = {
  name: "LÊ NAM KHÁNH",
  shortName: "Nam Khánh",
  school: "University of Science, VNU-HCM (HCMUS)",
  degree: "Second-year Student",
  thesis: "From algorithms to multimodal AI research.",
  intro:
    "HCMUS student building video retrieval systems, grounded in competitive programming and exploring LLM agents.",
};

export const contact = {
  email: {
    label: "Email",
    value: "lenamkhanh07082007@gmail.com",
    href: "mailto:lenamkhanh07082007@gmail.com",
  },
  github: {
    label: "GitHub",
    value: "lenamkhanhh",
    href: "https://github.com/lenamkhanhh",
  },
  codeforces: {
    label: "Codeforces",
    value: "Average2k7",
    href: "https://codeforces.com/profile/Average2k7",
  },
  cv: {
    label: "Download CV",
    value: "PDF",
    href: "/le-nam-khanh-cv.pdf",
  },
};

export const headlineEvidence: EvidenceItem[] = [
  {
    label: "VBS at MMM 2027",
    value: "Accepted Paper",
    context: "Reply 404 · Sole Author (LNCS)",
    tone: "academic",
    href: "https://github.com/lenamkhanhh/HCMAIC-Retrieval",
  },
  {
    label: "Codeforces",
    value: "Expert · 1854",
    context: "Peak rating · Average2k7",
    tone: "competitive",
    href: contact.codeforces.href,
  },
  {
    label: "HCMUS Coding Challenge",
    value: "Champion · 2026",
    context: "University competition",
    tone: "achievement",
  },
];

export const trajectory: TrajectoryStage[] = [
  {
    title: "Algorithms",
    description: "Data structures, graph algorithms, mathematics, and proof-oriented reasoning.",
    marker: "01",
  },
  {
    title: "Competitive Programming",
    description: "Problem solving under time, implementation, and correctness constraints.",
    marker: "02",
  },
  {
    title: "AI Foundations",
    description: "Building foundations in linear algebra, probability, optimization, and learning.",
    marker: "03",
  },
  {
    title: "Current Interests",
    description: "Questions across machine learning, language, vision, and large language models.",
    marker: "04",
  },
];

export const preUniversityAchievements: PreUniversityAchievement[] = [
  {
    event: "Provincial Excellent Student Selection Examination",
    award: "Third Prize",
    context: "Informatics · Grade 10",
  },
  {
    event: "Provincial Excellent Student Selection Examination",
    award: "Third Prize",
    context: "Informatics · Grade 11",
  },
  {
    event: "Provincial Excellent Student Selection Examination",
    award: "Second Prize",
    context: "Informatics · Grade 12",
  },
  {
    event: "The 30th National Young Informatics Contest",
    award: "First Prize",
    context: "Central Region · Table C2 · 2024",
    href: "https://www.facebook.com/tuoitretinhninhthuan/posts/pfbid02wf7ZJXUyrVeDraiQnX2BvFnTZvxhPSGM8J4gWyLWsne4N9Y72ewgreu6dCNjHMSDl",
  },
  {
    event: "The 30th National Young Informatics Contest",
    award: "Honourable Mention",
    context: "National Finals · 2024",
  },
  {
    event: "The 28th Traditional April 30 Olympiad",
    award: "Bronze Medal",
    context: "Informatics · 2024",
  },
];

export interface PublicationItem {
  title: string;
  author: string;
  authorRole: string;
  venue: string;
  track: string;
  series: string;
  status: string;
  competition: string;
  paperId: string;
  abstract: string;
  highlights: string[];
  href: string;
}

export const acceptedPublication: PublicationItem = {
  title: "Reply 404 at VBS 2027: Interactive Video Retrieval with Temporal Alignment and Native DRES Integration",
  author: "Le Nam Khanh",
  authorRole: "Sole Author",
  venue: "The 33rd International Conference on Multimedia Modeling (MMM 2027)",
  track: "Video Browser Showdown (VBS 2027)",
  series: "Springer Lecture Notes in Computer Science (LNCS)",
  status: "Accepted · Camera-ready in preparation",
  competition: "Live on-site evaluation in January 2027",
  paperId: "Paper #874",
  abstract:
    "An interactive multimodal video retrieval system evaluated on 1,487 videos and 533,286 keyframes. Combines visual, text and speech signals with GEMTRA temporal-event alignment, interactive evidence inspection, and native DRES evaluation protocol integration.",
  highlights: [
    "Sole author peer-reviewed paper accepted to VBS @ MMM 2027 (Springer LNCS proceedings)",
    "Indexed 1,487 videos & 533,286 keyframes using SigLIP2 (ViT-B/16) and FAISS vector indices",
    "GEMTRA temporal-event alignment engine for multi-event temporal query sequences",
    "Native DRES integration with sub-second live query latency for real-time competition rounds",
  ],
  href: "https://github.com/lenamkhanhh/HCMAIC-Retrieval",
};

export const aiChallengeEvidence = {
  result: "Finalist · Bảng A",
  event: "AI Challenge HCMC 2026",
  role: "Team Lead & Core Architect",
  team: "Reply 404 (Team Lead)",
  focus: "Multimodal Video Retrieval · Temporal Alignment",
  paper: "Accepted at VBS @ MMM 2027",
  paperRole: "Sole author (Paper #874 · Springer LNCS)",
  href: "https://github.com/lenamkhanhh/HCMAIC-Retrieval",
  coverSrc: "/assets/achievement/ai-challenge-2026-team-backdrop.webp",
  certSrc: "/assets/achievement/ai-challenge-2026-certificate.webp",
  stageSrc: "/assets/achievement/ai-challenge-2026-team-stage.webp",
} as const;

export const currentCompetitionEvidence = {
  result: "Top 20 Outstanding Team",
  event: "GDGoC AI Challenge 2026",
  team: "Khô gà xé xợi",
  approach: "Reinforcement Learning",
  href: "https://drive.google.com/drive/folders/1QbcPpmv--MbtQ9fTujXMJVWtJOp69Z2s",
  coverSrc: "/assets/achievement/gdgoc-ai-challenge-cover.webp",
} as const;

export const ktcIdeathonEvidence = {
  result: "Finalist · Vòng Chung Kết",
  event: "K-Tech College Ideathon 2026",
  subEvent: "Hackathon: Idea · Solve with AI",
  role: "Finalist · Team HrClaw",
  team: "Phan Minh Hoài, Lê Nam Khánh",
  organizers: "LIKELION Vietnam · K-Tech College · KOSME · JOBKOREA",
  focus: "AI Recruitment Agent for Smart CV Matching",
  href: "https://github.com/Mhoaii/HrClaw",
  reelHref: "https://www.facebook.com/reel/2529462844182785",
  stageSrc: "/assets/achievement/ktc-ideathon-2026-stage-group.webp",
} as const;

export const preUniversityArchivePeriod = "2022–2025";

export const work: WorkItem[] = [
  {
    title: "Reply 404 Video Retrieval",
    status: "Current work",
    type: "Multimodal retrieval system",
    focus: "Multimodal retrieval · Temporal alignment · DRES",
    detail:
      "Interactive video retrieval for AI Challenge HCMC 2026, combining visual, text and speech signals with temporal-event alignment, evidence inspection and DRES submission.",
    artifact: "1,487 videos · 533,286 keyframes · GEMTRA temporal alignment · Accepted at VBS @ MMM 2027",
    artifactKind: "retrieval",
    href: "https://github.com/lenamkhanhh/HCMAIC-Retrieval",
    action: "Open retrieval repository",
  },
  {
    title: "TripFlow Workbench",
    status: "Current work",
    type: "Collaborative web platform",
    focus: "React 19 · TypeScript · Firebase · Firestore Rules",
    detail:
      "A collaborative travel planning workbench featuring interactive timelines, priority scheduling, group expense splitting, and live synchronization.",
    artifact: "Overview · Timeline planning · Expense split ledger · Member synchronization",
    artifactKind: "workbench",
    href: "https://mxhuit26.vercel.app/final-group/",
    action: "Open live workbench",
  },
  {
    title: "AI Account Switcher",
    status: "Current work",
    type: "Desktop application & local gateway",
    focus: "Tauri · Rust · React · Local API Gateway",
    detail:
      "A desktop application to switch between multi-account AI coding agents with an OpenAI-compatible local proxy gateway and live quota tracking.",
    artifact: "Tauri desktop app · Local OpenAI-compatible gateway · CLI wrappers · Quota tracking",
    artifactKind: "switcher",
    href: "https://github.com/lenamkhanhh/ai-switcher",
    action: "Open project repository",
  },
  {
    title: "ICPC Solo Training System",
    status: "Live learning tool",
    type: "Learning system",
    focus: "Algorithms · Data Structures",
    detail:
      "A structured competitive programming syllabus with topic task banks, verified problem anchors, progress audits, and automated workbook generation.",
    artifact: "Training plan → Topic task bank → Verified anchors → Audit reports → Workbook generator",
    artifactKind: "training",
    href: "https://github.com/lenamkhanhh/CP",
    action: "Open CP repository",
  },
];

export const interests = [
  "Multimodal Video Retrieval",
  "Temporal Event Reasoning",
  "Vision-Language Models",
  "LLM & Agentic AI",
] as const;
