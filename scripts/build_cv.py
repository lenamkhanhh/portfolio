from html import escape
from pathlib import Path

import fitz  # PyMuPDF
from reportlab.lib import colors
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import mm
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas
from reportlab.platypus import Paragraph

ROOT = Path(__file__).resolve().parents[1]
OUT_PDF = ROOT / "public" / "le-nam-khanh-cv.pdf"
OUT_IMG = ROOT / "docs" / "cv-preview.png"
OUT_PDF.parent.mkdir(parents=True, exist_ok=True)
OUT_IMG.parent.mkdir(parents=True, exist_ok=True)

PAGE_W, PAGE_H = A4
MARGIN_X = 18 * mm
CONTENT_W = PAGE_W - 2 * MARGIN_X

DARK = HexColor("#0f172a")
MUTED = HexColor("#475569")
PURPLE = HexColor("#6366f1")
CYAN = HexColor("#0891b2")
LAVENDER = HexColor("#f5f3ff")
MINT = HexColor("#f0fdf4")
PALE = HexColor("#f8fafc")
GRID = HexColor("#e2e8f0")
WHITE = colors.white


def register_fonts() -> None:
    fonts = {
        "Segoe": r"C:\Windows\Fonts\segoeui.ttf",
        "Segoe-Bold": r"C:\Windows\Fonts\segoeuib.ttf",
        "Segoe-Italic": r"C:\Windows\Fonts\segoeuii.ttf",
    }
    for name, path in fonts.items():
        pdfmetrics.registerFont(TTFont(name, path))


def style(name: str, size: float, leading: float, color=DARK, font="Segoe", **kwargs):
    return ParagraphStyle(
        name=name,
        fontName=font,
        fontSize=size,
        leading=leading,
        textColor=color,
        alignment=TA_LEFT,
        **kwargs,
    )


BODY = style("body", 8.2, 10.2)
BODY_SMALL = style("body-small", 7.4, 9.1, color=MUTED)
FOCUS_BODY = style("focus-body", 7.1, 8.2, color=MUTED)
CARD_BODY = style("card-body", 7.05, 8.5)
CARD_LINK = style("card-link", 6.8, 7.9, color=PURPLE)
EDU = style("edu", 8.0, 9.4)
SKILL = style("skill", 7.45, 8.9)
SKILL_LABEL = style("skill-label", 7.6, 9.0, color=CYAN, font="Segoe-Bold")
ACH_TITLE = style("achievement-title", 6.75, 7.4)
ACH = style("achievement", 6.95, 7.7)
FOOT = style("footer", 7.3, 8.9, color=MUTED)


def para(c: canvas.Canvas, text: str, x: float, top: float, width: float, st: ParagraphStyle) -> float:
    p = Paragraph(text, st)
    _, h = p.wrap(width, PAGE_H)
    p.drawOn(c, x, top - h)
    return h


def para_in_box(
    c: canvas.Canvas,
    text: str,
    x: float,
    top: float,
    width: float,
    bottom: float,
    st: ParagraphStyle,
    label: str,
) -> float:
    p = Paragraph(text, st)
    _, h = p.wrap(width, PAGE_H)
    if top - h < bottom - 0.2:
        raise ValueError(
            f"Layout overflow in {label}: top={top:.1f}, bottom={bottom:.1f}, height={h:.1f}, diff={top - h - bottom:.2f}"
        )
    p.drawOn(c, x, top - h)
    return h


def plain(text: str) -> str:
    return escape(text).replace("\n", "<br/>")


def section_title(c: canvas.Canvas, title: str, x: float, y: float, color=PURPLE) -> None:
    c.setFillColor(color)
    c.setFont("Segoe-Bold", 10.2)
    c.drawString(x, y, title.upper())


def rounded_box(c: canvas.Canvas, x: float, y: float, w: float, h: float, fill, stroke=GRID, radius=3) -> None:
    c.setFillColor(fill)
    c.setStrokeColor(stroke)
    c.setLineWidth(0.55)
    c.roundRect(x, y, w, h, radius, fill=1, stroke=1)


def draw_header(c: canvas.Canvas) -> None:
    top = PAGE_H - 16 * mm
    c.setFillColor(DARK)
    c.setFont("Segoe-Bold", 25)
    c.drawString(MARGIN_X, top, "LÊ NAM KHÁNH")

    c.setFillColor(PURPLE)
    c.setFont("Segoe-Bold", 10.0)
    c.drawString(MARGIN_X, top - 15, "AI / ML ENGINEERING  |  MULTIMODAL RETRIEVAL  |  RESEARCH")

    c.setFillColor(MUTED)
    c.setFont("Segoe", 9.0)
    c.drawString(MARGIN_X, top - 28, "Information Technology student | University of Science, VNU-HCM (HCMUS)")

    box_x = PAGE_W - MARGIN_X - 165
    box_y = top - 43
    rounded_box(c, box_x, box_y, 165, 47, PURPLE, PURPLE, radius=2)
    c.setFillColor(WHITE)
    c.setFont("Segoe", 8.0)
    c.drawString(box_x + 10, box_y + 30, "lenamkhanh07082007@gmail.com")
    c.setFont("Segoe", 7.2)
    c.drawString(box_x + 10, box_y + 17, "github.com/lenamkhanhh")
    c.drawString(box_x + 10, box_y + 6, "lenamkhanh.netlify.app")

    c.setStrokeColor(GRID)
    c.setLineWidth(0.65)
    c.line(MARGIN_X, top - 55, PAGE_W - MARGIN_X, top - 55)


def draw_highlights(c: canvas.Canvas) -> None:
    x, y, w, h = MARGIN_X, 666, CONTENT_W, 52
    rounded_box(c, x, y, w, h, PALE, GRID, radius=1.5)
    cells = [
        ("AI CHALLENGE 2026", "Finalist | Bảng A (Top Teams)"),
        ("HCMUS CODING", "Champion | 2026"),
        ("CODEFORCES", "Expert | Max 1796"),
        ("SOICT 2026", "Paper First Author"),
    ]
    cell_w = w / len(cells)
    for i, (label, value) in enumerate(cells):
        cx = x + i * cell_w
        if i:
            c.setStrokeColor(GRID)
            c.line(cx, y, cx, y + h)
        c.setFillColor(DARK)
        c.setFont("Segoe", 6.9)
        c.drawString(cx + 8, y + h - 13, label)
        c.setFillColor(PURPLE if i in (0, 3) else CYAN)
        c.setFont("Segoe-Bold", 7.9)
        c.drawString(cx + 8, y + 10, value)


def draw_profile_and_education(c: canvas.Canvas) -> None:
    profile_y = 642
    section_title(c, "Profile", MARGIN_X, profile_y, PURPLE)
    profile = (
        "Information Technology student at HCMUS with a rigorous competitive programming background and practical expertise in "
        "multimodal video retrieval and AI systems. First & corresponding author of SOICT 2026 research on structured temporal event "
        "alignment (GEMTRA) and Finalist at the Ho Chi Minh City AI Challenge 2026. Skilled in architecting end-to-end retrieval pipelines, "
        "fast algorithmic reasoning under constraints, and full-stack engineering."
    )
    para(c, plain(profile), MARGIN_X, profile_y - 9, CONTENT_W, BODY)

    edu_title_y = 579
    section_title(c, "Education", MARGIN_X, edu_title_y, PURPLE)
    y, h = 516, 49
    left_w = CONTENT_W * 0.52
    rounded_box(c, MARGIN_X, y, CONTENT_W, h, LAVENDER, GRID, radius=1.5)
    c.setFillColor(DARK)
    c.setFont("Segoe-Bold", 8.6)
    c.drawString(MARGIN_X + 8, y + h - 13, "University of Science, VNU-HCM (HCMUS)")
    para_in_box(
        c,
        plain("Information Technology | Second-year student"),
        MARGIN_X + 8,
        y + h - 17,
        left_w - 16,
        y + 6,
        EDU,
        "education details",
    )
    c.setStrokeColor(GRID)
    c.line(MARGIN_X + left_w, y, MARGIN_X + left_w, y + h)
    c.setFillColor(DARK)
    c.setFont("Segoe-Bold", 8.2)
    c.drawString(MARGIN_X + left_w + 8, y + h - 13, "Current direction")
    para_in_box(
        c,
        plain("Multimodal video retrieval, temporal event reasoning, and foundation model systems."),
        MARGIN_X + left_w + 8,
        y + h - 17,
        CONTENT_W - left_w - 16,
        y + 6,
        EDU,
        "education direction",
    )


def draw_skills(c: canvas.Canvas, x: float, y_top: float, w: float) -> None:
    section_title(c, "Technical skills", x, y_top, CYAN)
    box_y, box_h = y_top - 167, 156
    rounded_box(c, x, box_y, w, box_h, MINT, GRID, radius=1.5)
    rows = [
        ("Algorithms", "Data structures, graph algorithms, dynamic programming, constraint optimization"),
        ("Languages", "Python, C++, TypeScript / JavaScript, Rust, SQL, Bash / PowerShell"),
        ("AI / Retrieval", "Visual embeddings (SigLIP2), FAISS, RF-DETR, OCR/ASR, VQA, GEMTRA alignment"),
        ("Engineering", "React 19 / Vite, Firebase / Firestore, Tauri, FastAPI, Git, testing, DRES API"),
    ]
    label_w = 66
    row_h = box_h / len(rows)
    for i, (label, value) in enumerate(rows):
        ry = box_y + box_h - (i + 1) * row_h
        if i:
            c.setStrokeColor(GRID)
            c.line(x, ry + row_h, x + w, ry + row_h)
        para_in_box(
            c,
            plain(label),
            x + 7,
            ry + row_h - 8,
            label_w - 12,
            ry + 3,
            SKILL_LABEL,
            f"skill label {label}",
        )
        para_in_box(
            c,
            plain(value),
            x + label_w + 5,
            ry + row_h - 8,
            w - label_w - 12,
            ry + 3,
            SKILL,
            f"skill value {label}",
        )


def achievement_cell(
    c: canvas.Canvas,
    text_title: str,
    text_value: str,
    x: float,
    top: float,
    bottom: float,
    w: float,
) -> None:
    title_h = para_in_box(
        c,
        plain(text_title),
        x,
        top - 6,
        w,
        bottom + 1,
        ACH_TITLE,
        f"achievement title {text_title}",
    )
    body_top = top - 8 - title_h
    para_in_box(
        c,
        plain(text_value),
        x,
        body_top,
        w,
        bottom + 1,
        ACH,
        f"achievement value {text_title}",
    )


def draw_achievements(c: canvas.Canvas, x: float, y_top: float, w: float) -> None:
    section_title(c, "Achievements", x, y_top, CYAN)
    box_y, box_h = y_top - 158, 147
    rounded_box(c, x, box_y, w, box_h, LAVENDER, GRID, radius=1.5)
    col_w = w / 2
    row_h = box_h / 3
    cells = [
        (("AI Challenge HCMC 2026", "Finalist (Bảng A) | Team Lead, Reply 404"), ("HCMUS Coding Challenge", "Champion | 2026")),
        (("SOICT 2026 Full Paper", "First & Corresponding Author (LNCS)"), ("Codeforces", "Expert | Max rating 1796")),
        (("National Young Informatics", "First Prize (Central) | Nat'l Honourable Mention"), ("Provincial & Olympic 30/4", "Provincial 2nd & 3rd Prizes | Bronze Medal")),
    ]
    for r, row in enumerate(cells):
        top = box_y + box_h - r * row_h
        if r:
            c.setStrokeColor(GRID)
            c.line(x, top, x + w, top)
        c.setStrokeColor(GRID)
        c.line(x + col_w, top - row_h, x + col_w, top)
        achievement_cell(c, row[0][0], row[0][1], x + 6, top, top - row_h, col_w - 12)
        achievement_cell(c, row[1][0], row[1][1], x + col_w + 6, top, top - row_h, col_w - 12)


def project_card(c: canvas.Canvas, x: float, y: float, w: float, h: float, title: str, tech: str, desc: str, link_label: str) -> None:
    rounded_box(c, x, y, w, h, PALE, GRID, radius=1.5)
    c.setFillColor(DARK)
    c.setFont("Segoe-Bold", 8.8)
    c.drawString(x + 8, y + h - 12, title)
    c.setFillColor(CYAN)
    c.setFont("Segoe", 6.8)
    c.drawString(x + 8, y + h - 22, tech)
    para_in_box(c, plain(desc), x + 8, y + h - 26, w - 16, y + 13, CARD_BODY, f"project body {title}")
    para_in_box(
        c,
        f'<font color="#6366f1">{escape(link_label)}</font>',
        x + 8,
        y + 10,
        w - 16,
        y + 2,
        CARD_LINK,
        f"project link {title}",
    )


def draw_projects(c: canvas.Canvas, x: float, y_top: float, w: float) -> None:
    section_title(c, "Selected projects", x, y_top, PURPLE)
    card_h = 69
    gap = 6
    c1_y = y_top - 14 - card_h
    c2_y = c1_y - gap - card_h
    c3_y = c2_y - gap - card_h

    project_card(
        c,
        x,
        c1_y,
        w,
        card_h,
        "Reply 404 — Video Retrieval System",
        "Team Lead & Core Architect | Python, SigLIP2, GEMTRA DP, DRES API",
        "Led 4-member team to design and build an interactive video search platform for 1,487 videos & 533K keyframes with sub-7ms temporal DP alignment (GEMTRA) and evidence-linked VQA under AIC countdowns.",
        "SOICT 2026 Paper | GitHub / HCMAIC-Retrieval",
    )
    project_card(
        c,
        x,
        c2_y,
        w,
        card_h,
        "TripFlow Workbench",
        "React 19 | TypeScript | Vite | Firebase Auth & Firestore Rules",
        "Built a collaborative travel planning workbench featuring 4 realtime workflows: timeline scheduling with priority/assignees, expense splitting, and team member synchronization.",
        "Live App / mxhuit26.vercel.app | GitHub",
    )
    project_card(
        c,
        x,
        c3_y,
        w,
        card_h,
        "AI Account Switcher",
        "Tauri | Rust | React | Local API Gateway | CLI Wrappers",
        "Desktop app managing multi-account rotation for AI coding assistants (Claude Code, Codex) with an OpenAI-compatible local proxy gateway and real-time quota tracking.",
        "GitHub / ai-switcher",
    )

    focus_h = 62
    focus_y = c3_y - gap - focus_h
    rounded_box(c, x, focus_y, w, focus_h, MINT, GRID, radius=1.5)
    c.setFillColor(CYAN)
    c.setFont("Segoe-Bold", 7.8)
    c.drawString(x + 8, focus_y + focus_h - 13, "RESEARCH-ORIENTED INTERESTS")
    para_in_box(
        c,
        plain("Multimodal Video Retrieval | Temporal Event Reasoning | Vision-Language Models | AI Agents"),
        x + 8,
        focus_y + focus_h - 18,
        w - 16,
        focus_y + 26,
        FOCUS_BODY,
        "research interests",
    )
    para_in_box(
        c,
        plain("Also building competitive programming training artifacts and reproducible benchmarks."),
        x + 8,
        focus_y + 24,
        w - 16,
        focus_y + 2,
        FOCUS_BODY,
        "research interests note",
    )


def draw_footer(c: canvas.Canvas) -> None:
    y_top = 130
    section_title(c, "Relevant strengths", MARGIN_X, y_top, PURPLE)
    box_y, box_h = 32, 76
    rounded_box(c, MARGIN_X, box_y, CONTENT_W, box_h, PALE, GRID, radius=1.5)
    left_w = CONTENT_W / 2
    c.setStrokeColor(GRID)
    c.line(MARGIN_X + left_w, box_y, MARGIN_X + left_w, box_y + box_h)
    left = (
        "- Fast at translating mathematical formulations & constraints into efficient implementations.<br/>"
        "- Resilient operator with high debugging agility under live competition countdowns.<br/>"
        "- Rigorous engineering mindset: separating empirical evidence from benchmark claims."
    )
    right = (
        "- Full-stack capability: bridging ML/AI backend systems with fast, intuitive user experiences.<br/>"
        "- Strong team collaborator across research ideation, system benchmarking, and code review.<br/>"
        "- English: IELTS 6.5 | GitHub: lenamkhanhh | Codeforces: Average2k7"
    )
    para_in_box(c, left, MARGIN_X + 8, box_y + box_h - 8, left_w - 16, box_y + 5, FOOT, "left strengths")
    para_in_box(c, right, MARGIN_X + left_w + 8, box_y + box_h - 8, left_w - 16, box_y + 5, FOOT, "right strengths")


def add_links(c: canvas.Canvas) -> None:
    box_x = PAGE_W - MARGIN_X - 165
    box_y = PAGE_H - 16 * mm - 43
    c.linkURL("https://github.com/lenamkhanhh", (box_x, box_y + 14, box_x + 165, box_y + 27), relative=0)
    c.linkURL("https://lenamkhanh.netlify.app/", (box_x, box_y + 2, box_x + 165, box_y + 14), relative=0)


def build() -> None:
    register_fonts()
    c = canvas.Canvas(str(OUT_PDF), pagesize=A4)
    c.setTitle("Le Nam Khanh - Curriculum Vitae")
    c.setAuthor("Le Nam Khanh")

    draw_header(c)
    draw_highlights(c)
    draw_profile_and_education(c)

    left_x = MARGIN_X
    right_x = MARGIN_X + CONTENT_W * 0.51
    left_w = CONTENT_W * 0.47
    right_w = CONTENT_W * 0.49
    main_top = 493
    draw_skills(c, left_x, main_top, left_w)
    draw_achievements(c, left_x, main_top - 181, left_w)
    draw_projects(c, right_x, main_top, right_w)
    draw_footer(c)
    add_links(c)

    c.showPage()
    c.save()
    print("PDF generated successfully:", OUT_PDF)

    # Render preview image
    doc = fitz.open(OUT_PDF)
    page = doc[0]
    pix = page.get_pixmap(dpi=150)
    pix.save(str(OUT_IMG))
    print("Preview image saved:", OUT_IMG)


if __name__ == "__main__":
    build()
