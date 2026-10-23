"""Rebuild the public, text-based resume from Kai's supplied career history."""
from pathlib import Path
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / 'public/resume/Kai-Indigo-Wolf-Resume.pdf'
FONTS = Path('/usr/share/fonts/truetype/dejavu')
for name, filename in [('Body','DejaVuSans.ttf'), ('Bold','DejaVuSans-Bold.ttf'), ('Title','DejaVuSerif.ttf')]:
    pdfmetrics.registerFont(TTFont(name,str(FONTS/filename)))
pdfmetrics.registerFontFamily('Body',normal='Body',bold='Bold')
ink=HexColor('#242a35');muted=HexColor('#535b60');violet=HexColor('#574e97')
styles={
 'name':ParagraphStyle('name',fontName='Title',fontSize=25,leading=29,textColor=ink,spaceAfter=5),
 'role':ParagraphStyle('role',fontName='Bold',fontSize=11,leading=15,textColor=violet,spaceAfter=8),
 'contact':ParagraphStyle('contact',fontName='Body',fontSize=8,leading=12,textColor=muted,spaceAfter=8),
 'body':ParagraphStyle('body',fontName='Body',fontSize=9,leading=13,textColor=ink,spaceAfter=6),
 'section':ParagraphStyle('section',fontName='Bold',fontSize=8.5,leading=13,textColor=violet,spaceBefore=9,spaceAfter=5),
 'job':ParagraphStyle('job',fontName='Bold',fontSize=9.5,leading=14,textColor=ink,spaceAfter=3),
 'bullet':ParagraphStyle('bullet',fontName='Body',fontSize=8.7,leading=12.5,textColor=ink,leftIndent=10,firstLineIndent=-8,spaceAfter=3),
}
story=[]
def p(text,style='body'):story.append(Paragraph(text,styles[style]))
def bullet(text):p('• '+text,'bullet')
def job(title,company,dates):p(f'{title} | {company} <font name="Body" size="8" color="#535b60"> · {dates}</font>','job')
p('Kai Indigo Wolf','name');p('SOFTWARE ENGINEER','role')
p('Columbia, MO · <link href="mailto:kai.indigo.wolf@gmail.com">kai.indigo.wolf@gmail.com</link><br/><link href="https://github.com/IndigoW0lf">github.com/IndigoW0lf</link> · <link href="https://www.linkedin.com/in/indigowolf">linkedin.com/in/indigowolf</link><br/><link href="https://www.indigowolf.tech/">www.indigowolf.tech</link>','contact')
p('Software engineer building React and TypeScript applications at Pantheon and independent learning, publishing, and AI projects through Lunara LLC. Brings a UX foundation and experience taking work from product decisions through implementation and testing.')
p('TECHNICAL SKILLS','section')
p('React · TypeScript · JavaScript · Next.js · Python · GraphQL / Apollo · REST APIs · SQL / PostgreSQL · Supabase · Vitest · React Testing Library · Jest · Git · CircleCI · Java / Spring Boot','body')
p('EXPERIENCE','section')
job('Software Engineer','Pantheon','Mar 2025 - Present')
bullet('Led development of the Unified Notifications Hub: People’s Choice, 1st Place, and Overall, 2nd Place, at the 2026 Pantheon Hackathon.')
bullet('Delivered trial-workspace and dashboard flows across authentication, upgrade paths, workspace invitations, and site/environment management.')
bullet('Drove an Auth0/OAuth2 login migration, including session-expiry detection and logout behavior; instrumented product events with Segment and Amplitude.')
bullet('Migrated dashboard interfaces to shared design-system components, contributed upstream fixes, and built reusable empty states and route-level tests with Vitest and React Testing Library.')
story.append(Spacer(1,5))
job('Founder / Product Builder','The Lunara Edit (Lunara LLC)','Sep 2026 - Present')
bullet('Built and maintain an educational publishing and digital-products platform, connecting editorial content, resource discovery, checkout links, analytics, and publishing workflows.')
bullet('Develop learning tools and structured curriculum systems using Next.js, TypeScript, and Supabase, with content validation, automated checks, and human editorial review.')
bullet('Own product direction, UX, engineering, publishing, and iteration for an independent resource business.')
story.append(Spacer(1,5))
job('AI Prompt Engineer (Freelance)','Data Annotation Tech','Jan 2023 - Mar 2025')
bullet('Created and reviewed prompts for AI training and evaluation; analyzed, corrected, tagged, and scored model responses.')
story.append(Spacer(1,5))
job('Software Engineer Intern','Pantheon Platform','Jun 2022 - Aug 2022')
bullet('Shipped dependency upgrades and dashboard changes using React, JavaScript, and GraphQL; contributed design-system fixes and refactoring for a router migration.')
p('SELECTED INDEPENDENT WORK','section')
p('<b>Lunara Quest:</b> Family learning platform with parent planning and learner quests. <b>Agent Behavior Lab:</b> Python evaluations with matched controls and paired analysis. More case studies and source links are available in the portfolio.')
p('EDUCATION &amp; ADDITIONAL EXPERIENCE','section')
p('<b>Tech Elevator</b> · Full-stack Java development bootcamp · Jan - Apr 2022<br/>700+ hours covering Java, Spring Boot, Vue.js, SQL, testing, and Agile development.<br/><b>Earlier leadership:</b> Manufacturing Supervisor, Schneider Electric (2025); supervised 15-25 production associates.')
OUTPUT.parent.mkdir(parents=True,exist_ok=True)
doc=SimpleDocTemplate(str(OUTPUT),pagesize=(612,792),leftMargin=43,rightMargin=43,topMargin=33,bottomMargin=30,title='Kai Indigo Wolf - Software Engineer',author='Kai Indigo Wolf',subject='Software engineering resume',pageCompression=1)
doc.build(story)
r=PdfReader(OUTPUT)
assert len(r.pages)==1,f'Expected one page, got {len(r.pages)}'
text=r.pages[0].extract_text()
assert all(t in text for t in ['Kai Indigo Wolf','Pantheon','Tech Elevator','kai.indigo.wolf@gmail.com'])
print(f'Created {OUTPUT.name}: {len(r.pages)} page, {OUTPUT.stat().st_size} bytes, selectable text and links.')
