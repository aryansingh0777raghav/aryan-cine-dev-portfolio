import os
import sys
from reportlab.lib.pagesizes import letter
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, HRFlowable, KeepTogether
)
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super(NumberedCanvas, self).__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super(NumberedCanvas, self).showPage()
        super(NumberedCanvas, self).save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#737373"))
        
        # Header (pages > 1)
        if self._pageNumber > 1:
            self.drawString(54, 750, "ARYAN SINGH — MASTER PROFILE & PORTFOLIO DOSSIER")
            self.drawRightString(612 - 54, 750, "A TO Z COMPLETE SPECIFICATION")
            self.setStrokeColor(colors.HexColor("#E5E5E5"))
            self.setLineWidth(0.5)
            self.line(54, 742, 612 - 54, 742)

        # Footer
        page_str = f"Page {self._pageNumber} of {page_count}"
        self.drawString(54, 36, "Confidential • Aryan Singh Portfolio & Credentials Archive")
        self.drawRightString(612 - 54, 36, page_str)
        self.setStrokeColor(colors.HexColor("#E5E5E5"))
        self.setLineWidth(0.5)
        self.line(54, 48, 612 - 54, 48)
        self.restoreState()

def build_pdf(filename="Aryan_Singh_Master_Dossier.pdf"):
    doc = SimpleDocTemplate(
        filename,
        pagesize=letter,
        leftMargin=54,
        rightMargin=54,
        topMargin=54,
        bottomMargin=54
    )

    styles = getSampleStyleSheet()
    
    # Custom Palette
    c_primary = colors.HexColor("#0A0A0A")
    c_secondary = colors.HexColor("#262626")
    c_muted = colors.HexColor("#525252")
    c_accent = colors.HexColor("#0284C7")
    c_border = colors.HexColor("#E5E5E5")
    c_card_bg = colors.HexColor("#F8F9FA")

    # Typography Styles
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=24,
        leading=28,
        textColor=c_primary,
        spaceAfter=4
    )
    
    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=c_muted,
        spaceAfter=12
    )

    sec_heading = ParagraphStyle(
        'SecHeading',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=13,
        leading=16,
        textColor=c_primary,
        spaceBefore=14,
        spaceAfter=6
    )

    item_title = ParagraphStyle(
        'ItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=c_secondary
    )

    item_meta = ParagraphStyle(
        'ItemMeta',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=11,
        textColor=c_muted
    )

    body_style = ParagraphStyle(
        'DocBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=9,
        leading=12.5,
        textColor=c_secondary
    )

    bullet_style = ParagraphStyle(
        'DocBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=c_secondary,
        leftIndent=12,
        firstLineIndent=-12
    )

    link_style = ParagraphStyle(
        'DocLink',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=c_accent
    )

    story = []

    # ==================== HEADER / HERO ====================
    story.append(Paragraph("ARYAN SINGH", title_style))
    story.append(Paragraph("Software Engineer & Full-Stack Architect &bull; Independent Film Director & Screenwriter", subtitle_style))
    
    contact_text = (
        "<b>Location:</b> Gorakhpur, UP, India &nbsp;|&nbsp; "
        "<b>Email:</b> <font color='#0284C7'>aryansingh979211@gmail.com</font><br/>"
        "<b>Portfolio:</b> <a href='https://aryan-cine-dev-portfolio.vercel.app/'><u>aryan-cine-dev-portfolio.vercel.app</u></a> &nbsp;|&nbsp; "
        "<b>Google Knowledge Panel:</b> <a href='https://share.google/rvj5TA6ZWVsg3A3GH'><u>share.google/rvj5TA6ZWVsg3A3GH</u></a><br/>"
        "<b>GitHub:</b> <a href='https://github.com/aryansingh0777raghav'><u>github.com/aryansingh0777raghav</u></a> &nbsp;|&nbsp; "
        "<b>LinkedIn:</b> <a href='https://www.linkedin.com/in/iamaryan07'><u>linkedin.com/in/iamaryan07</u></a> &nbsp;|&nbsp; "
        "<b>Instagram:</b> <a href='https://www.instagram.com/iam_aryannnn07'><u>@iam_aryannnn07</u></a>"
    )
    story.append(Paragraph(contact_text, body_style))
    story.append(Spacer(1, 8))
    story.append(HRFlowable(width="100%", thickness=1, color=c_border, spaceBefore=4, spaceAfter=10))

    # ==================== 1. EXECUTIVE SUMMARY ====================
    story.append(Paragraph("1. EXECUTIVE SUMMARY & IDENTITY", sec_heading))
    summary_p = (
        "Aryan Singh is a dual-discipline Software Engineer and Independent Filmmaker based in Gorakhpur, India. "
        "He is the Founder & Lead Full-Stack Architect of <b>ArKTest Beta</b>, building crowdsourced QA marketplaces with "
        "FastAPI, PostgreSQL, and tokenized escrow economies. Simultaneously, as founder of <b>CineOn Studio 7</b>, "
        "he wrote, directed, scored, and edited the psychological drama short film <i>'The Night of Life: Before You Think About It'</i>, "
        "featured in national press and officially verified in Google's Knowledge Graph."
    )
    story.append(Paragraph(summary_p, body_style))
    story.append(Spacer(1, 10))

    # ==================== 2. EDUCATION & ACADEMIC CREDENTIALS ====================
    story.append(Paragraph("2. EDUCATION & ACADEMICS", sec_heading))
    edu_data = [
        [
            Paragraph("<b>Bachelor of Computer Applications (BCA)</b>", item_title),
            Paragraph("<b>Sep 2024 – Dec 2027 (Pursuing)</b>", item_meta)
        ],
        [
            Paragraph("Institute of Technology & Management (ITM), Gorakhpur &bull; CGPA: 7.49/10 | Sem III SGPA: 7.96/10", body_style),
            Paragraph("Gorakhpur, UP", item_meta)
        ],
        [
            Paragraph("<b>Relevant Coursework:</b> Data Structures & Algorithms (DSA), Database Management Systems (DBMS), Object-Oriented Programming (OOP), Operating Systems, Software Engineering, C/C++ Programming.", bullet_style),
            ""
        ],
        [
            Paragraph("<b>Senior Secondary (Class XII)</b> — 67% | SR International Academy, Nathnagar", body_style),
            Paragraph("Nathnagar, UP", item_meta)
        ],
        [
            Paragraph("<b>Secondary School (Class X)</b> — 60% | Surya International Academy, Khalilabad", body_style),
            Paragraph("Khalilabad, UP", item_meta)
        ]
    ]
    t_edu = Table(edu_data, colWidths=[380, 124])
    t_edu.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('TOPPADDING', (0,0), (-1,-1), 2),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t_edu)
    story.append(Spacer(1, 10))

    # ==================== 3. TECHNICAL & CREATIVE SKILLS MATRIX ====================
    story.append(Paragraph("3. TECHNICAL & CREATIVE COMPETENCY MATRIX", sec_heading))
    skills_table_data = [
        [
            Paragraph("<b>Core Programming Languages:</b>", item_title),
            Paragraph("Python, C, C++, SQL, Java (Core/Basic), HTML", body_style)
        ],
        [
            Paragraph("<b>Backend & API Engineering:</b>", item_title),
            Paragraph("FastAPI, RESTful APIs, PostgreSQL, SQLite, SQLAlchemy ORM Schema Design", body_style)
        ],
        [
            Paragraph("<b>Developer Tools & Platforms:</b>", item_title),
            Paragraph("Git, GitHub, VS Code, Vercel, Postman, Chrome Extension APIs, IndexedDB", body_style)
        ],
        [
            Paragraph("<b>Modern AI & Engineering Workflows:</b>", item_title),
            Paragraph("AI-Augmented Software Development, API Integration, Rapid Prototyping, Concurrency, PWA", body_style)
        ],
        [
            Paragraph("<b>Cinematic & Directorial Craft:</b>", item_title),
            Paragraph("Screenwriting & Scriptwriting, Film Directing, Atmospheric Cinematography & Lighting, DaVinci Resolve Color Grading, Premiere Pro Editorial, Sound Design & Mixing", body_style)
        ]
    ]
    t_skills = Table(skills_table_data, colWidths=[160, 344])
    t_skills.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BACKGROUND', (0,0), (-1,-1), c_card_bg),
        ('BOX', (0,0), (-1,-1), 0.5, c_border),
        ('INNERGRID', (0,0), (-1,-1), 0.5, c_border),
        ('TOPPADDING', (0,0), (-1,-1), 4),
        ('BOTTOMPADDING', (0,0), (-1,-1), 4),
        ('LEFTPADDING', (0,0), (-1,-1), 6),
        ('RIGHTPADDING', (0,0), (-1,-1), 6),
    ]))
    story.append(t_skills)
    story.append(Spacer(1, 10))

    # ==================== 4. PROFESSIONAL EXPERIENCE & ROLES ====================
    story.append(Paragraph("4. PROFESSIONAL WORK EXPERIENCE & ROLES", sec_heading))
    
    # ArKTest
    story.append(Paragraph("<b>Founder & Lead Full-Stack Architect &bull; ArKTest Beta</b>", item_title))
    story.append(Paragraph("Jan 2026 – Present &nbsp;|&nbsp; Live: <a href='https://arktest-beta.vercel.app/'><u>https://arktest-beta.vercel.app/</u></a>", item_meta))
    story.append(Paragraph("&bull; Architected and deployed a full-stack crowdsourced QA testing marketplace connecting indie developers with verified beta testers.", bullet_style))
    story.append(Paragraph("&bull; Engineered an automated tokenized escrow reward economy in FastAPI and PostgreSQL with pessimistic row-level locking (with_for_update()) to prevent financial race conditions during concurrent payouts.", bullet_style))
    story.append(Paragraph("&bull; Implemented OWASP-compliant security: PBKDF2 SHA-256 password hashing, rate-limited OTP dispatches, JWT authorization, and CORS whitelisting.", bullet_style))
    story.append(Paragraph("&bull; Developed multi-account Gmail SMTP pool with automated failover handling, single-user CSV exports, PWA capabilities, and 100% Pytest test coverage.", bullet_style))
    story.append(Spacer(1, 6))

    # CineOn
    story.append(Paragraph("<b>Film Director, Screenwriter & Editor &bull; CineOn Studio 7</b>", item_title))
    story.append(Paragraph("2026 – Present &nbsp;|&nbsp; YouTube: <a href='https://www.youtube.com/@cineonstudio7'><u>@cineonstudio7</u></a>", item_meta))
    story.append(Paragraph("&bull; Wrote, directed, scored, and edited 'The Night of Life: Before You Think About It' — a psychological drama addressing youth mental health and existential resilience.", bullet_style))
    story.append(Paragraph("&bull; Managed full post-production pipeline, sound design, color grading, and distribution across IMDb, TMDB, Letterboxd, and FilmFreeway.", bullet_style))
    story.append(Spacer(1, 6))

    # Data Culture Intern
    story.append(Paragraph("<b>Python Training Intern &bull; Data Culture Technology</b>", item_title))
    story.append(Paragraph("Jun 2025 – Aug 2025", item_meta))
    story.append(Paragraph("&bull; Completed intensive industry training in Core Python engineering, OOP architectures, database normalization, and automated script testing.", bullet_style))
    story.append(Paragraph("&bull; Developed backend data parsing utilities and modular automation scripts with high execution efficiency.", bullet_style))
    story.append(Spacer(1, 10))

    # ==================== 5. CERTIFICATIONS & PRESS ====================
    story.append(Paragraph("5. CERTIFICATIONS, AWARDS & PRESS RECOGNITION", sec_heading))
    certs = [
        ("Google Knowledge Panel Verified Entity", "Google Search (Aug 2026)", "Officially indexed and recognized in Google's Knowledge Graph as an independent filmmaker and director. Entity link: share.google/rvj5TA6ZWVsg3A3GH"),
        ("The Indian Blog Press Editorial Feature", "The Indian Blog (July 2026)", "Featured in exclusive editorial spotlight 'Aryan Singh: The Young Filmmaker Redefining Independent Storytelling' for directorial debut and auteur philosophy."),
        ("Data Analytics Summer Training & Capstone", "Techpile Technology Pvt. Ltd. (July 2026)", "45-day training in Python analytics, SQL databases, and business intelligence. Awarded Grade A++ and Outstanding Performer Gold Medal (ID: TechpileST260123)."),
        ("Samsung Innovation Campus Big Data Credential", "Samsung Electronics (Nov 2025)", "Certified in Big Data analytics, dataset manipulation, data cleaning, and Python predictive modeling pipelines (Certificate ID: SIC08720).")
    ]
    for c_title, c_pub, c_desc in certs:
        story.append(Paragraph(f"<b>&bull; {c_title}</b> — <i>{c_pub}</i>", item_title))
        story.append(Paragraph(f"&nbsp;&nbsp;&nbsp;&nbsp;{c_desc}", body_style))
        story.append(Spacer(1, 3))

    story.append(Spacer(1, 10))

    # ==================== 6. MASTER PROJECTS DIRECTORY (A TO Z) ====================
    story.append(PageBreak())
    story.append(Paragraph("6. MASTER PROJECTS ARCHIVE (A TO Z COMPLETE CATALOG)", sec_heading))
    story.append(Paragraph("Comprehensive catalog of all 18+ software systems, AI applications, web tools, games, and cinematic works authored by Aryan Singh:", body_style))
    story.append(Spacer(1, 8))

    projects = [
        ("1. SaveAlly. (Flagship Privacy Memory PWA)", "React, TypeScript, Vite, Tailwind CSS, IndexedDB, PWA / Service Workers, Node.js, Groq AI", "https://saveally.vercel.app", "Privacy-first personal memory for the internet with Android Web Share Target PWA, client-side Service Worker request interception, local-first IndexedDB persistence, a custom serverless OpenGraph metadata pipeline (zero 3rd-party CORS proxies), and BYOK Groq AI natural language search with dynamic multi-model discovery."),
        ("2. ArKTest Beta (Flagship Platform)", "Python, FastAPI, PostgreSQL, SQLite, JS, Bootstrap 5, PWA, Vercel", "https://arktest-beta.vercel.app/", "Crowdsourced QA marketplace connecting indie devs with verified beta testers. Features tokenized escrow rewards, pessimistic DB locking, CSV transaction exports, and multi-account SMTP failover."),
        ("2. ArVerse OS (Web Virtual OS)", "React, Tailwind CSS, Vite, Framer Motion, Context API, AI", "https://github.com/aryansingh0777raghav/ArVerse-OS", "Browser-based virtual OS simulator with window manager (draggable/resizable), AppSwitcher, customizable wallpapers, and ArKon Brain AI assistant with Ctrl+K spotlight search."),
        ("3. ArFt (AI Frontend Sandbox)", "React, Monaco Code Editor, Groq API, IndexedDB, Filesystem API", "https://github.com/aryansingh0777raghav/ArFt", "In-browser IDE with live multi-device preview, virtual filesystem (VFS), directory importing via showDirectoryPicker(), and AI website generation via Groq Llama-3.3-70b."),
        ("4. ArLip (AI Video Shorts Pipeline)", "Python, FastAPI, React, Groq Whisper-v3, FFmpeg, yt-dlp, SQLite", "https://github.com/aryansingh0777raghav/ArLip", "Automated pipeline that downloads YouTube videos, transcribes speech with word-level timestamps, detects viral hooks, center-crops to 9:16 vertical ratio, and burns animated subtitles."),
        ("5. ArCh (Aryan Search Engine)", "Python, FastAPI, Electron.js, BeautifulSoup4, Vosk STT, Piper TTS", "https://github.com/aryansingh0777raghav/ArCh", "Desktop Perplexity-style AI search engine that concurrently scrapes web pages to compile cited AI summaries with zero paid search API dependencies."),
        ("6. ArType (AI Android Assistant Overlay)", "Kotlin, Jetpack Compose, Android Accessibility Service, Groq API", "https://github.com/aryansingh0777raghav/ArType", "System-level floating AI bubble overlay for Android that provides multilingual voice typing (English, Hindi, Hinglish), smart replies, and context-aware text rewriting across any keyboard."),
        ("7. Solexplain AI (Web3 Transaction Parser)", "TypeScript, Solana Web3.js, OpenAI API, React, Tailwind CSS", "https://github.com/aryansingh0777raghav/solexplain-ai", "Decodes low-level Solana blockchain transactions into plain human-readable summaries, protecting users from malicious drains and phishing."),
        ("8. Personal AI Voice Assistant", "Python, SpeechRecognition, Pyttsx3, OS / Subprocess", "Offline Automation", "Voice-activated automation assistant that executes desktop commands, launches applications, takes screenshots, and monitors hardware stats via voice."),
        ("9. Certilink (Credential Verification Engine)", "HTML5, CSS3, JavaScript ES6, LocalStorage API", "https://aryansingh0777raghav.github.io/certilink/", "Digital credential repository for hosting, indexing, and validating verified academic and industry certifications with instant audit verification links and high-res preview modals."),
        ("10. ArTools YouTube Chrome Extension", "JavaScript, Chrome Extension API Manifest V3, DOM Parser", "https://github.com/aryansingh0777raghav/ArTools-Chrome-Youtube-Extension", "Browser productivity extension enabling instant 1-click downloads of YouTube video streams, audio files, and HD video thumbnails directly from the native web player."),
        ("11. Chess Web Game", "JavaScript, HTML5 Canvas, MiniMax Logic", "https://aryansingh0777raghav.github.io/Chess-Game/", "Interactive 2-player browser chess game with complete legal move validation, turn switching, and board state rendering."),
        ("12. MySites Portal", "JavaScript ES6, LocalStorage API, CSS3", "https://aryansingh0777raghav.github.io/MySites/", "Developer deployment saver that organizes live projects, stores metadata, and offers fast instantaneous search."),
        ("13. Portfolio Terminal", "JavaScript, Bash Emulator, CSS3", "https://aryansingh0777raghav.github.io/Aryan-Interactive-portfolio/", "Interactive retro CLI terminal portfolio supporting authentic shell commands (help, about, projects, skills, clear)."),
        ("14. Cine-Dev Showcase Portal", "HTML5, CSS3, JavaScript ES6", "https://aryansingh0777raghav.github.io/Aryan-Singh-Cine-Portfolio/", "Dual-theme split interface engineered with vanilla JavaScript ES6 and semantic CSS for multimedia showcases."),
        ("15. 3D Concept Portfolio", "React, Three.js, Canvas, Tailwind CSS", "https://aryansingh0777raghav.github.io/3D-Concept-Portfolio-project/", "Interactive 3D concept portfolio showcasing creative interactive web capabilities and spatial canvas rendering."),
        ("16. Scrollytelling Portfolio", "React, Framer Motion, Tailwind CSS, Lenis Scroll", "https://github.com/aryansingh0777raghav/Scrollytelling-Portfolio-of-Aryan-Singh", "Cinematic scrollytelling web experience featuring smooth hardware-accelerated scrolling and animated typography."),
        ("17. Personal Portfolio Minimal V3", "Vanilla JavaScript, CSS3, HTML5", "https://aryansingh0777raghav.github.io/Personal-Portfolio-MinimalV3/", "Ultra-fast, clean personal portfolio with a sharp focus on simplicity, typography, and lightweight performance."),
        ("18. Personal Portfolio NetUI", "React, Tailwind CSS, Glassmorphic UI", "https://aryansingh0777raghav.github.io/Personal-Portfolio-NetUI/", "Clean personal portfolio built with NetUI showcasing translucent layered cards and dynamic lighting."),
        ("19. The Night of Life: Before You Think About It", "4K DCI, 24fps Narrative Cinema &bull; CineOn Studio 7", "https://youtu.be/tEvYeAHmCHg", "Directorial debut short film exploring existential conflict, student academic despair, and life-changing decisions. Written, directed, scored, and edited by Aryan Singh. Indexed on IMDb (tt39846631), TMDB, Letterboxd, and FilmFreeway.")
    ]

    for p_title, p_tech, p_link, p_desc in projects:
        p_block = [
            Paragraph(f"<b>{p_title}</b>", item_title),
            Paragraph(f"<i>Stack:</i> {p_tech} &nbsp;|&nbsp; <i>URL:</i> <a href='{p_link}'><u>{p_link}</u></a>", item_meta),
            Paragraph(f"{p_desc}", body_style),
            Spacer(1, 4)
        ]
        story.append(KeepTogether(p_block))

    story.append(Spacer(1, 8))

    # ==================== 7. VERIFIED DIGITAL ENTITIES & PROFILES ====================
    story.append(Paragraph("7. VERIFIED DIGITAL ENTITIES & OFFICIAL WEB REGISTRIES", sec_heading))
    entities = [
        ("Google Knowledge Graph", "share.google/rvj5TA6ZWVsg3A3GH", "Official Verified Entity under query 'Aryan Singh Filmmaker'"),
        ("IMDb Profile", "imdb.com/name/nm18214429/", "Official Director & Writer credit registry"),
        ("The Indian Blog", "indianblog.co.in/aryan-singh-filmmaker/", "Independent media editorial coverage"),
        ("TMDB Person", "themoviedb.org/person/6018661-aryan-singh", "The Movie Database official biography and director entry"),
        ("Letterboxd", "boxd.it/2VQn1", "Cinephile directorial film entry"),
        ("FilmFreeway", "filmfreeway.com/iamaryannnn07", "Verified festival filmmaker profile"),
        ("LinkedIn", "linkedin.com/in/iamaryan07", "Professional software engineering profile"),
        ("GitHub", "github.com/aryansingh0777raghav", "Open-source code repositories and project architectures")
    ]
    t_ent_data = [
        [Paragraph(f"<b>{name}:</b>", item_title), Paragraph(f"<a href='https://{url}'><u>https://{url}</u></a>", link_style), Paragraph(desc, body_style)]
        for name, url, desc in entities
    ]
    t_ent = Table(t_ent_data, colWidths=[120, 180, 204])
    t_ent.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 3),
        ('TOPPADDING', (0,0), (-1,-1), 3),
        ('LEFTPADDING', (0,0), (-1,-1), 4),
        ('RIGHTPADDING', (0,0), (-1,-1), 4),
        ('BACKGROUND', (0,0), (-1,-1), c_card_bg),
        ('BOX', (0,0), (-1,-1), 0.5, c_border),
        ('INNERGRID', (0,0), (-1,-1), 0.5, c_border),
    ]))
    story.append(t_ent)

    # Build Document with NumberedCanvas
    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF build successful:", filename)

if __name__ == "__main__":
    out_path = "Aryan_Singh_Master_Dossier_A_to_Z.pdf"
    if len(sys.argv) > 1:
        out_path = sys.argv[1]
    build_pdf(out_path)
