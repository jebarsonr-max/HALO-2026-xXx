# Aevix AI – Intelligent Resume & Job Compatibility Analyzer (CareerLens)

[![Node.js](https://img.shields.io/badge/Node.js-v24+-339933?logo=node.js)](https://nodejs.org)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://reactjs.org)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?logo=tailwind-css)](https://tailwindcss.com)
[![Status](https://img.shields.io/badge/Status-11--Modules--Ready-success)](#)

> **"Traditional resume screening asks: 'Does this keyword exist?'**  
> **Aevix AI asks: 'What does the candidate actually know? What evidence supports it? What does the job require? What is missing? How can the candidate improve, and how can the candidate prepare for the interview?'"**

---

## Complete 11-Module Architecture

1. **User Input / Profile Hub**:
   - Multi-format resume extraction (PDF, DOCX, TXT) and JD input.
   - Optional **LinkedIn Profile URL**, **GitHub URL**, and additional background notes.
   - Pre-analysis review and custom skill editing.
2. **Career Intelligence & Horizon**:
   - **Multi-Role Fit Radar**: Evaluates compatibility across 6+ industry roles (*ML Engineer, Data Scientist, Data Analyst, Backend Developer, DevOps Engineer, Frontend Developer*).
   - **Sequential Learning Paths**: 4-stage sequential milestone roadmaps with suggested hands-on capstone project tasks.
   - **Career Trajectory Roadmap**: Evidence-based career pathway from demonstrated skills to immediate and long-term target roles.
   - **Live Skill Fit Updater**: Add or remove skills and trigger real-time recalculation without page reloads.
3. **Language & Impact (Resume Improvement)**:
   - Diagnostic analysis of weak action verbs, long sentences, and missing metrics.
   - **BEFORE / AFTER** impact comparison cards strictly grounded in verified facts from the resume.
4. **Tailored Resume & Verified Cover Letter**:
   - Job-specific project keyword positioning recommendations.
   - One-click verified Cover Letter generator with copy and `.txt` download options.
5. **Qualification Detector**:
   - Scans explicit JD criteria (*Degrees, Years of Experience, Core Skills, Databases, Cloud, APIs*) and marks each as *Found / Partially Found / Not Found* with resume citations.
6. **ATS & Recruiter Simulation Matrix**:
   - **ATS Health Score (100/100)** and section parsing checklist.
   - **Visual Keyword Gap Heatmap Matrix** (*Strong Match, Partial Match, Missing*).
7. **Trust, Explainability & Fairness Guard**:
   - Deep evidence ledger with confidence ratings and resume citations.
   - **Fairness & Privacy Guard**: Guarantees exclusion of protected demographic characteristics from compatibility scoring.
8. **Gamification & Career Progress**:
   - Real calculated progress scores (**Resume Health 85%**, **Skill Coverage 80%**, **Profile Completeness 90%**, **Interview Readiness 85%**).
   - Unlocked milestone achievement badges and a **Shareable Career Profile Card**.
9. **Personalized Mock Interview & Live Arena**:
   - 10+ personalized questions categorized across 6 areas.
   - **Interactive Mock Interview Arena**: Step-by-step simulator with live AI grading on *Technical Relevance*, *Completeness*, *Clarity*, *Missing Concepts*, and dynamic follow-up challenges.

---

## Quick Start Guide

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation & Launch

```bash
# 1. Clone the repository
git clone <repo-url>
cd HALO-2026-xXx

# 2. Install dependencies
npm install
cd client && npm install && cd ..

# 3. Start development server
npm run dev
```

- **Frontend Application**: [http://localhost:3000](http://localhost:3000)
- **Backend API Server**: [http://localhost:5000](http://localhost:5000)

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `POST` | `/api/analyze` | Ingests resume, JD, and optional profile hub URLs; returns full 11-module compatibility analysis |
| `POST` | `/api/skills/update` | Live editing endpoint: updates skills and returns real-time recalculated analysis |
| `POST` | `/api/career/evaluate-roles` | Evaluates multi-role compatibility for custom or preset role lists |
| `POST` | `/api/interview/evaluate` | Evaluates interactive candidate answers and returns feedback critique |
| `GET` | `/api/demo` | Retrieves realistic demo dataset |
| `GET` | `/api/status` | Reports system health and active AI provider |

---

## Security & Privacy
- Zero client-side API key exposure.
- In-memory document processing without persistent disk caching of sensitive personal resume data.
- Strict 10MB payload thresholds with input sanitization.
- Bias & Fairness Guard ensuring demographic neutrality in scoring.
