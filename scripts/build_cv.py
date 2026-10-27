from pathlib import Path
from html import escape
import argparse, os
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, KeepTogether, HRFlowable
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from pypdf import PdfReader
import fitz

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description='Build the approved one-page research CV.')
parser.add_argument('--output', type=Path, default=ROOT / 'public/le-nam-khanh-cv.pdf')
parser.add_argument('--markdown', type=Path, default=ROOT / 'docs/personal-portfolio/le-nam-khanh-cv.md')
parser.add_argument('--preview', type=Path, default=ROOT / 'docs/cv-preview.png')
args = parser.parse_args()

OUT_PDF = args.output
for target in (args.output, args.markdown, args.preview):
    target.parent.mkdir(parents=True, exist_ok=True)

FONTS = Path(os.environ.get('WINDIR', r'C:\Windows')) / 'Fonts'
for name, file in [('Academic', 'times.ttf'), ('Academic-Bold', 'timesbd.ttf'), ('Academic-Italic', 'timesi.ttf'), ('Academic-BoldItalic', 'timesbi.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(FONTS / file)))
pdfmetrics.registerFontFamily('Academic', normal='Academic', bold='Academic-Bold', italic='Academic-Italic', boldItalic='Academic-BoldItalic')

styles = {
    'name': ParagraphStyle('name', fontName='Academic-Bold', fontSize=25, leading=29, spaceAfter=4),
    'contact': ParagraphStyle('contact', fontName='Academic', fontSize=10.2, leading=13, textColor=HexColor('#313131')),
    'section': ParagraphStyle('section', fontName='Academic-Bold', fontSize=11.5, leading=15, spaceBefore=9, spaceAfter=2, keepWithNext=True),
    'body': ParagraphStyle('body', fontName='Academic', fontSize=10.7, leading=13.2),
    'entry': ParagraphStyle('entry', fontName='Academic', fontSize=10.7, leading=13.2),
    'date': ParagraphStyle('date', fontName='Academic', fontSize=10.4, leading=13.2, alignment=2),
    'bullet': ParagraphStyle('bullet', fontName='Academic', fontSize=10.7, leading=13.2, leftIndent=10, firstLineIndent=-8),
}
W = A4[0] - 108

def para(s, style='body'): return Paragraph(s, styles[style])
def section(title): return [para(title, 'section'), HRFlowable(width='100%', thickness=.4, color=HexColor('#626262'), spaceAfter=5)]
def dated(text, date):
    t = Table([[para(text, 'entry'), para(date, 'date')]], colWidths=[W - 75, 75], hAlign='LEFT')
    t.setStyle(TableStyle([('VALIGN', (0, 0), (-1, -1), 'TOP'), ('LEFTPADDING', (0, 0), (-1, -1), 0), ('RIGHTPADDING', (0, 0), (-1, -1), 0), ('TOPPADDING', (0, 0), (-1, -1), 0), ('BOTTOMPADDING', (0, 0), (-1, -1), 0)]))
    return t
def url(href, label): return f'<link href="{escape(href)}" color="#303030">{escape(label)}</link>'

flow = [
    para('Lê Nam Khánh', 'name'),
    para('Faculty of Information Technology · University of Science, VNU-HCM', 'contact'),
    para(url('mailto:lenamkhanh07082007@gmail.com', 'lenamkhanh07082007@gmail.com') + ' · ' + url('https://lenamkhanh.netlify.app/', 'lenamkhanh.netlify.app') + ' · ' + url('https://github.com/lenamkhanhh', 'github.com/lenamkhanhh'), 'contact'),
    Spacer(1, 3)
]

flow += section('Education')
flow.append(dated('<b>University of Science, Vietnam National University Ho Chi Minh City</b>', 'Year 2'))
flow.append(para('Undergraduate student, Faculty of Information Technology.'))
flow.append(para('<b>Cumulative GPA: 8.37/10</b>'))

flow += section('Current Research Interests')
flow.append(para('LLMs and Agentic AI.'))

flow += section('Research Experience')
flow.append(dated('<b>Reply 404 — Interactive Video Retrieval</b>', '2026'))
flow.append(para('AI Challenge TP.HCM · ' + url('https://github.com/lenamkhanhh/HCMAIC-Retrieval', 'github.com/lenamkhanhh/HCMAIC-Retrieval')))
flow.append(para('• Contributed to a multimodal video retrieval system over 1,487 videos and 533,286 keyframes.', 'bullet'))
flow.append(para('• System combines visual, text and speech signals with temporal-event alignment, evidence inspection and DRES submission. Technologies include Python, SigLIP2, FAISS and GEMTRA.', 'bullet'))

flow += section('Accepted Research Paper')
flow.append(para('<b>Le Nam Khanh</b>.'))
flow.append(para('<i>Reply 404 at VBS 2027: Interactive Video Retrieval with Temporal Alignment and Native DRES Integration.</i>'))
flow.append(para('Accepted, VBS at MMM 2027 · Camera-ready in preparation.'))

flow += section('Selected Technical Projects')
projects = [
    ('<b>HrClaw</b> — AI-assisted recruitment and CV scoring.', 'Finalist team, K-Tech College Ideathon 2026. ' + url('https://github.com/Mhoaii/HrClaw', 'github.com/Mhoaii/HrClaw')),
    ('<b>TripFlow Workbench</b> — Collaborative trip planning and group expense application.', 'AI-assisted development. ' + url('https://mxhuit26.vercel.app/final-group/', 'Live demo')),
    ('<b>AI Account Switcher</b> — Desktop tooling with a local API gateway and CLI integration.', 'AI-assisted development. ' + url('https://github.com/lenamkhanhh/ai-switcher', 'github.com/lenamkhanhh/ai-switcher')),
]
for a, b in projects:
    flow.append(KeepTogether([para(a), para(b), Spacer(1, 4)]))

flow += section('Honors & Competition Record')
awards = [
    ('<b>HCMUS Coding Challenge</b> — Champion.', '2026'),
    ('<b>AI Challenge TP.HCM</b> — Finalist, Table A.', '2026'),
    ('<b>GDGoC AI Challenge</b> — Top 20 Outstanding Team; team “Khô gà xé xợi”.', '2026'),
    ('<b>30th National Young Informatics Contest</b> — First Prize, Central Region, Table C2;<br/>Honourable Mention at the national finals.', '2024'),
    ('<b>28th Traditional April 30 Olympiad</b> — Bronze Medal in Informatics.', '2024'),
    ('<b>Provincial Informatics Examination</b> — Second Prize, Grade 12, 2025;<br/>Third Prize, Grade 11, 2024; Third Prize, Grade 10.', ''),
    ('Provincial team participant, National Excellent Student Examination in Informatics.', '2024–25'),
]
for a, b in awards: flow.append(dated(a, b))
flow.append(para('<b>Codeforces</b> — Expert; peak rating: 1854. ' + url('https://codeforces.com/profile/Average2k7', 'Average2k7')))

flow += section('Technical Skills & Languages')
flow.append(para('<b>Programming:</b> C++, Python.'))
flow.append(para('<b>English:</b> IELTS 6.5.'))

doc = SimpleDocTemplate(str(OUT_PDF), pagesize=A4, leftMargin=54, rightMargin=54, topMargin=39, bottomMargin=36, title='Lê Nam Khánh — Research CV', author='Lê Nam Khánh')
doc.build(flow)

reader = PdfReader(OUT_PDF)
text = '\n'.join(p.extract_text() for p in reader.pages)
assert '6.6' not in text and 'warm-cache' not in text
assert 'Accepted Research Paper' in text
assert 'Reply 404 at VBS 2027' in text
assert '1854' in text
assert '8.37/10' in text
assert len(reader.pages) == 1, f'CV spills onto {len(reader.pages)} pages'

links = sum(1 for p in reader.pages for a in p.get('/Annots', []) if a.get_object().get('/Subtype') == '/Link')
assert links >= 7

# Render page 1 preview
doc_fitz = fitz.open(OUT_PDF)
page = doc_fitz[0]
pix = page.get_pixmap(dpi=150)
pix.save(str(args.preview))

md = '''# Lê Nam Khánh

Faculty of Information Technology · University of Science, VNU-HCM

lenamkhanh07082007@gmail.com · https://lenamkhanh.netlify.app/ · https://github.com/lenamkhanhh

## Education

**University of Science, Vietnam National University Ho Chi Minh City** — Year 2

Undergraduate student, Faculty of Information Technology.

**Cumulative GPA: 8.37/10**

## Current Research Interests

LLMs and Agentic AI.

## Research Experience

**Reply 404 — Interactive Video Retrieval** — 2026

AI Challenge TP.HCM · https://github.com/lenamkhanhh/HCMAIC-Retrieval

- Contributed to a multimodal video retrieval system over 1,487 videos and 533,286 keyframes.
- System combines visual, text and speech signals with temporal-event alignment, evidence inspection and DRES submission. Technologies include Python, SigLIP2, FAISS and GEMTRA.

## Accepted Research Paper

**Le Nam Khanh**.

*Reply 404 at VBS 2027: Interactive Video Retrieval with Temporal Alignment and Native DRES Integration.*

Accepted, VBS at MMM 2027 · Camera-ready in preparation.

## Selected Technical Projects

**HrClaw** — AI-assisted recruitment and CV scoring.

Finalist team, K-Tech College Ideathon 2026. https://github.com/Mhoaii/HrClaw

**TripFlow Workbench** — Collaborative trip planning and group expense application.

AI-assisted development. [Live demo](https://mxhuit26.vercel.app/final-group/)

**AI Account Switcher** — Desktop tooling with a local API gateway and CLI integration.

AI-assisted development. https://github.com/lenamkhanhh/ai-switcher

## Honors & Competition Record

- **2026:** HCMUS Coding Challenge — Champion.
- **2026:** AI Challenge TP.HCM — Finalist, Table A.
- **2026:** GDGoC AI Challenge — Top 20 Outstanding Team; team “Khô gà xé xợi”.
- **2024:** 30th National Young Informatics Contest — First Prize, Central Region, Table C2; Honourable Mention at the national finals.
- **2024:** 28th Traditional April 30 Olympiad — Bronze Medal in Informatics.
- **Provincial Informatics Examination:** Second Prize, Grade 12, 2025; Third Prize, Grade 11, 2024; Third Prize, Grade 10.
- **2024–25:** Provincial team participant, National Excellent Student Examination in Informatics.
- **Codeforces:** Expert; peak rating: 1854. [Average2k7](https://codeforces.com/profile/Average2k7)

## Technical Skills & Languages

**Programming:** C++, Python.

**English:** IELTS 6.5.
'''
args.markdown.write_text(md, encoding='utf-8')
print("Successfully generated CV PDF (1 page), markdown, and preview with Codeforces peak 1854!")
