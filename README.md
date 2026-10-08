# Riya Rawat — Personal Portfolio Website

A clean, modern, responsive, and beginner-friendly portfolio website created specifically for a first-year **B.Tech Computer Science Engineering (CSE)** student.

Built with **vanilla HTML5, CSS3, and JavaScript** — zero frameworks required, lightweight, loads instantly, and works both offline and online.

---

## 🚀 Live Preview / How to Open

### Method 1: Direct Browser Open (Easiest)
1. Open File Explorer and navigate to `c:\my portforio`.
2. Double-click **`index.html`** to open it directly in Google Chrome, Microsoft Edge, Brave, or any modern web browser.

### Method 2: VS Code Live Server
1. Open this folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click on `index.html` and click **"Open with Live Server"**.

---

## 📁 File Structure

```text
c:\my portforio\
│
├── index.html        # Main HTML structure with all 7 sections & comments
├── style.css         # Modern styling, responsive layout & Dark/Light mode tokens
├── script.js         # Theme toggle, mobile menu, active link scroll spy & form handler
└── README.md         # Instructions and customization guide
```

---

## 🌟 Sections Included

1. **Home**: Clean hero introduction with student badge, "View My Work" button, code card snippet, and quick summary pills.
2. **About Me**: Narrative of a first-year student learning computer science, personal philosophy, and quick student facts.
3. **Education**: Interactive vertical timeline covering:
   - **Currently Pursuing**: B.Tech in Computer Science & Engineering (1st Year).
   - **Completed**: Class 12 (Science PCM).
4. **Skills**:
   - **C Programming** (Syntax, loops, functions, basic logic building)
   - **Basic HTML & CSS** (Semantic structure, flexbox, grid, styling)
   - **Basic Computer Skills** (VS Code, Git & GitHub basics, Terminal, Windows OS)
   - **Communication Skills** (Active listening, teamwork, verbal communication)
5. **Projects**:
   - Beginner projects with live tags and GitHub buttons:
     - *Personal Portfolio Website* (HTML/CSS/JS)
     - *Console Calculator & Number Tools* (C Language)
     - *Student Grade Tracker* (In-progress placeholder)
     - *Add Your Next Project* (Template placeholder for future semesters)
6. **Learning Goals**:
   - Software Engineering principles & SDLC
   - Deep Programming & OOP foundations
   - Modern Web Development (JavaScript & modern UI)
   - Problem Solving & Data Structures and Algorithms (DSA)
7. **Contact**:
   - One-click copy email button
   - Direct clickable social media links (GitHub, LinkedIn, Twitter/X, Email)
   - Clean contact form with client feedback

---

## ✏️ Step-by-Step Customization Guide

All sections in `index.html` have clear comments so you can easily update your details:

### 1. Update College & School Names
Open `index.html` and search for `Your College / University Name`:
```html
<!-- Inside Education section (around line 170) -->
<p class="timeline-institution">
  Your Actual College Name, City
</p>
```
Similarly, update your Class 12 school name:
```html
<p class="timeline-institution">
  Your School Name, CBSE / State Board
</p>
```

### 2. Update Your Email and Social Profiles
In `index.html` (under Contact section, around line 350-410):
- **Email**: Change `riyarawat.cse@example.com` to your real email address.
- **GitHub**: Replace `https://github.com/your-username` with your GitHub profile link.
- **LinkedIn**: Replace `https://linkedin.com/in/your-username` with your LinkedIn URL.
- **Twitter/X**: Replace `https://twitter.com/your-username` with your handle.

### 3. Adding a New Project
To add a new project you build in the future, copy and paste this template inside the `<div class="projects-grid">` in `index.html`:

```html
<article class="project-card">
  <div class="project-card-header">
    <div class="project-status-tag current-tag">Completed</div>
    <span class="project-category">Category (e.g. C / Web)</span>
  </div>
  <h3 class="project-title">Project Name</h3>
  <p class="project-desc">
    Brief 2-3 line description of what your project does and what you learned.
  </p>
  <div class="project-tech-stack">
    <span class="tech-badge">C Language</span>
    <span class="tech-badge">File I/O</span>
  </div>
  <div class="project-actions">
    <a href="https://github.com/your-username/repo-name" target="_blank" class="btn-text">
      View Code
    </a>
  </div>
</article>
```

### 4. Making the Contact Form Send Real Emails
Currently, the form gives a friendly on-screen confirmation. If you'd like messages to be sent straight to your email inbox for free:
1. Register at [Formspree.io](https://formspree.io) (free tier allows 50 submissions/month).
2. Create a new form and copy your Formspree endpoint (e.g. `https://formspree.io/f/xyzabcde`).
3. In `index.html`, set:
   ```html
   <form action="https://formspree.io/f/YOUR_ENDPOINT_HERE" method="POST" class="contact-form">
   ```
4. In `script.js`, remove `e.preventDefault()` if you want Formspree to handle the submission natively.

---

## 🌐 How to Host Online for Free

### Option 1: GitHub Pages (Recommended for Students)
1. Create a free account on [GitHub.com](https://github.com).
2. Create a new public repository named `portfolio` (or `<your-username>.github.io`).
3. Upload `index.html`, `style.css`, `script.js`, and `README.md`.
4. Go to **Settings** → **Pages** → under **Branch**, choose `main` / `/root` and click **Save**.
5. Your website will be live in 1-2 minutes at `https://<your-username>.github.io/portfolio`!

### Option 2: Vercel or Netlify
1. Go to [netlify.com](https://www.netlify.com) or [vercel.com](https://vercel.com).
2. Drag and drop your `my portforio` folder into the Netlify Drop area.
3. It goes live instantly with a free SSL certificate!
