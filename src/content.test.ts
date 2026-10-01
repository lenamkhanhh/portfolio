import { describe, expect, it } from "vitest";
import {
  aiChallengeEvidence,
  contact,
  currentCompetitionEvidence,
  headlineEvidence,
  interests,
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
      expect.objectContaining({ label: "AI Challenge 2026", value: "Finalist · Bảng A" }),
      expect.objectContaining({ label: "Codeforces", value: "Expert · 1796" }),
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
      "AI Agent Systems & Security",
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
      team: "Reply 404",
      focus: "Multimodal Video Retrieval · GEMTRA DP Alignment",
      paper: "SOICT 2026 Full Paper First Author",
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
});
