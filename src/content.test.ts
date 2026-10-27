import { describe, expect, it } from "vitest";
import {
  acceptedPublication,
  aiChallengeEvidence,
  contact,
  currentCompetitionEvidence,
  headlineEvidence,
  interests,
  ktcIdeathonEvidence,
  preUniversityAchievements,
  preUniversityArchivePeriod,
  profile,
  trajectory,
  work,
} from "./content";

describe("portfolio evidence contract", () => {
  it("keeps the verified academic identity without exposing a phone number", () => {
    expect(profile.name).toBe("LÊ NAM KHÁNH");
    expect(profile.school).toBe("University of Science, VNU-HCM (HCMUS)");
    expect(profile.degree).toContain("Student");
    expect(contact.email.value).toBe("lenamkhanh07082007@gmail.com");
    expect(contact).not.toHaveProperty("phone");
  });

  it("surfaces only the three verified headline facts", () => {
    expect(headlineEvidence).toEqual([
      expect.objectContaining({ label: "VBS at MMM 2027", value: "Accepted Paper" }),
      expect.objectContaining({ label: "Codeforces", value: "Expert · 1854" }),
      expect.objectContaining({
        label: "HCMUS Coding Challenge",
        value: "Champion · 2026",
      }),
    ]);
  });

  it("describes a direction toward multimodal AI research", () => {
    expect(trajectory.map((stage) => stage.title)).toEqual([
      "Algorithms",
      "Competitive Programming",
      "AI Foundations",
      "Current Interests",
    ]);
    expect(interests).toEqual([
      "Multimodal Video Retrieval",
      "Temporal Event Reasoning",
      "Vision-Language Models",
      "LLM & Agentic AI",
    ]);
  });

  it("keeps the confirmed pre-university Informatics record specific and chronological", () => {
    expect(preUniversityAchievements).toEqual([
      expect.objectContaining({ award: "Third Prize", context: "Informatics · Grade 10" }),
      expect.objectContaining({ award: "Third Prize", context: "Informatics · Grade 11" }),
      expect.objectContaining({ award: "Second Prize", context: "Informatics · Grade 12" }),
      expect.objectContaining({ award: "First Prize", context: "Central Region · Table C2 · 2024" }),
      expect.objectContaining({ award: "Honourable Mention", context: "National Finals · 2024" }),
      expect.objectContaining({ award: "Bronze Medal", context: "Informatics · 2024" }),
    ]);
  });

  it("keeps the proof-led record grouped around its verified progression and official source", () => {
    expect(preUniversityAchievements.slice(0, 3).map((achievement) => achievement.award)).toEqual([
      "Third Prize",
      "Third Prize",
      "Second Prize",
    ]);
    expect(preUniversityAchievements[3]).toMatchObject({
      award: "First Prize",
      context: "Central Region · Table C2 · 2024",
    });
    expect(preUniversityAchievements[3]).toHaveProperty("href", "https://www.facebook.com/tuoitretinhninhthuan/posts/pfbid02wf7ZJXUyrVeDraiQnX2BvFnTZvxhPSGM8J4gWyLWsne4N9Y72ewgreu6dCNjHMSDl");
  });

  it("records the verified AI Challenge HCMC 2026 result and evidence assets", () => {
    expect(aiChallengeEvidence).toEqual({
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
    });
  });

  it("records the verified GDGoC team result without inflating its scope", () => {
    expect(currentCompetitionEvidence).toEqual({
      result: "Top 20 Outstanding Team",
      event: "GDGoC AI Challenge 2026",
      team: "Khô gà xé xợi",
      approach: "Reinforcement Learning",
      href: "https://drive.google.com/drive/folders/1QbcPpmv--MbtQ9fTujXMJVWtJOp69Z2s",
      coverSrc: "/assets/achievement/gdgoc-ai-challenge-cover.webp",
    });
  });

  it("records the verified KTC Ideathon 2026 hackathon finalist result and assets", () => {
    expect(ktcIdeathonEvidence).toEqual({
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
    });
  });

  it("keeps the approved 2022–2025 archive period and official GDGoC cover asset", () => {
    expect(preUniversityArchivePeriod).toBe("2022–2025");
    expect(currentCompetitionEvidence).toHaveProperty("coverSrc", "/assets/achievement/gdgoc-ai-challenge-cover.webp");
  });

  it("keeps every selected work item honest and inspectable", () => {
    expect(work).toHaveLength(4);
    expect(work.every((item) => item.href.startsWith("https://"))).toBe(true);
    expect(work.every((item) => item.status.length > 0)).toBe(true);
    expect(work.every((item) => item.artifact.length > 0)).toBe(true);
    expect(work.find((item) => item.title === "Reply 404 Video Retrieval")).toMatchObject({
      href: "https://github.com/lenamkhanhh/HCMAIC-Retrieval",
      status: "Current work",
    });
  });

  it("does not model unsupported career claims", () => {
    const serialized = JSON.stringify({ profile, headlineEvidence, work });
    for (const forbidden of [
      "employment",
      "testimonial",
      "researchImpact",
      "solvedCount",
    ]) {
      expect(serialized).not.toContain(forbidden);
    }
  });

  it("records the accepted VBS 2027 publication and contains no outdated SOICT submission", () => {
    expect(aiChallengeEvidence.paper).toContain("Accepted at VBS @ MMM 2027");
    expect(aiChallengeEvidence.paperRole).toContain("Sole author");
    expect(JSON.stringify({ profile, headlineEvidence, aiChallengeEvidence, work })).not.toContain("SOICT");
    expect(JSON.stringify({ profile, headlineEvidence, aiChallengeEvidence, work })).not.toMatch(/sub-7ms|6\.6ms/);
  });

  it("records accepted publication specifications accurately", () => {
    expect(acceptedPublication.title).toContain("Reply 404 at VBS 2027");
    expect(acceptedPublication.venue).toContain("MMM 2027");
    expect(acceptedPublication.paperId).toBe("Paper #874");
    expect(acceptedPublication.authorRole).toBe("Sole Author");
  });
});
