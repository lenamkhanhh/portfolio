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
  degree: "Information Technology · Student",
  thesis: "From algorithms to multimodal AI research.",
  intro:
    "Competitive programming trained how I reason under constraints. I design and build end-to-end multimodal video retrieval pipelines, temporal event alignment algorithms, and verifiable AI systems.",
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
    label: "AI Challenge 2026",
    value: "Finalist · Bảng A",
    context: "Team Lead, Reply 404 · SOICT First Author",
    tone: "academic",
    href: "https://github.com/lenamkhanhh/HCMAIC-Retrieval",
  },
  {
    label: "Codeforces",
    value: "Expert · 1796",
    context: "Verified profile",
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

export const aiChallengeEvidence = {
  result: "Finalist · Bảng A",
  event: "AI Challenge HCMC 2026",
  role: "Team Lead & Core Architect",
  team: "Reply 404 (Team Lead)",
  focus: "Multimodal Video Retrieval · GEMTRA DP Alignment",
  paper: "SOICT 2026 Full Paper First Author",
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

export const preUniversityArchivePeriod = "2022–2025";

export const work: WorkItem[] = [
  {
    title: "Reply 404 Video Retrieval",
    status: "Current work",
    type: "Multimodal retrieval system",
    focus: "Team Lead & Core Architect · SigLIP2 · GEMTRA DP · DRES",
    detail:
      "Led team Reply 404 to architect and deploy an interactive multimodal video search platform indexing 1,487 videos and 533K keyframes with sub-7ms temporal DP alignment (GEMTRA) and evidence-linked VQA for AI Challenge HCMC 2026.",
    artifact: "Team Lead · 1,487 videos · 533K keyframes · GEMTRA DP engine (6.6ms) · SOICT 2026 Paper",
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
      "A realtime collaborative travel planning workbench with authentication, multi-view timelines, priority assignment, group expense splitting, and realtime synchronization.",
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
      "A desktop application to manage and switch between multi-account AI coding tools (Claude Code, Codex) with an OpenAI-compatible local proxy gateway and real-time quota tracking.",
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
      "A structured 2026–2027 training plan with topic task banks, verified anchors, audit reports, and a reproducible workbook generator.",
    artifact: "Training plan → Topic task bank → Verified anchors → Audit reports → Workbook generator",
    artifactKind: "training",
    href: "https://github.com/lenamkhanhh/CP",
    action: "Open training evidence",
  },
];

export const interests = [
  "Multimodal Video Retrieval",
  "Temporal Event Reasoning",
  "Vision-Language Models",
  "AI Agent Systems & Security",
] as const;
