# Personal Portfolio Website — Mehedi Hossen Fahim (MHF)

<div align="center">



<br/>

### [![Live Demo](https://img.shields.io/badge/LIVE%20DEMO-mhf--portfolio.vercel.app-2563EB?style=for-the-badge&logo=vercel&logoColor=white)](https://mhf-portfolio.vercel.app/)


<br/>

</div>

---

A modern, responsive, and interactive personal portfolio website for **Mehedi Hossen Fahim** (AI Engineer specializing in LLM Agents, Hybrid RAG, Computer Vision, and Python Backend), built with **React.js**, **Vite**, and **Tailwind CSS**.

---



## 🚀 Features & Assignment Requirements

### 1. Required Sections
- [x] **A. Navbar**: Brand logo (`MHF`), navigation links (`Home`, `About`, `Skills`, `Projects`, `Experience`, `Contact`), responsive mobile menu drawer, active section highlighting, theme switcher.
- [x] **B. Home / Hero**: Name, professional title, introduction, profile photo with customized transparent PNG backdrop, **"Download Resume"** (1-page PDF download) & **"View Projects"** buttons, social links.
- [x] **C. About Me**: Professional background, educational history (*Notre Dame University Bangladesh, B.Sc. CSE, CGPA 3.58*), career goals, and verified profile cards.
- [x] **D. Skills Section**: Categorized technical competencies with percentage progress bars and proficiency badges (AI/LLM, Backend, Databases, DevOps & Cloud, Hardware & IoT, Frontend).
- [x] **E. Projects Section**: Real-world production projects stored in an array and rendered using `.map()`, with visual previews, descriptions, tech tags, Live Demo, and GitHub buttons.
- [x] **F. Contact Section**: Controlled form with React state (`name`, `email`, `subject`, `message`), `onSubmit` handler, regex and length validation, inline error indicators, and success confirmation alert.
- [x] **G. Footer**: Name, social links (GitHub, LinkedIn, Facebook, Portfolio), copyright statement, and quick navigation.
- [x] **Bonus Experience & Achievements**: Software Developer Intern (*White Services Technology Ltd.*), Robotics Instructor (*Motijheel Model High School*), and 3x Robotics Competition awards (*1st, 2nd, and 3rd place*).

### 2. All 5 Additional Features Completed
1. **Dark / Light Mode**: Theme toggle button in Navbar with `localStorage` persistence (defaults to Light Mode).
2. **Project Filtering**: Filter projects by technology and domain (`All`, `AI & LLM Agents`, `Computer Vision`, `Full-Stack & Web`).
3. **Mobile Responsive**: Fully responsive layout tailored for mobile, tablet, and desktop screens with mobile drawer navigation.
4. **Scroll to Top**: Floating button that appears dynamically after scrolling down and smoothly brings visitors to the top.
5. **Dynamic Navbar**: Scroll-spy that automatically highlights the active navigation section while scrolling.

---

## 🛠️ Tech Stack

- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React + Custom SVG Brand Icons
- **Fonts**: Inter & JetBrains Mono

---

## 📂 Project Structure

```text
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
│   ├── AI_Engineer_Resume_Mehedi_Hossen_Fahim.pdf   # 1-page PDF Resume
│   ├── profile.png                                  # Profile image
│   └── favicon.svg                                  # Custom vector terminal favicon
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── data/
│   │   └── portfolioData.js     # Resume content & project datasets
│   └── components/
│       ├── Navbar.jsx           # Responsive navbar with theme toggle & scroll-spy
│       ├── Hero.jsx             # Hero section with CTA & stylized profile card
│       ├── About.jsx            # About Me, education & career goals
│       ├── Skills.jsx           # Categorized skills with progress bars
│       ├── Projects.jsx         # Project showcase with .map() and filter tabs
│       ├── Experience.jsx       # Internship history & robotics competition awards
│       ├── Contact.jsx          # Controlled contact form with validation
│       ├── Footer.jsx           # Social links & copyright
│       ├── ScrollToTop.jsx      # Smooth scroll-to-top floating button
│       └── Icons.jsx            # Custom vector brand icons
```

---

## 💻 Getting Started Locally

1. **Clone the repository or open the project folder**:
   ```bash
   git clone https://github.com/MehdiHossenFahim/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Preview the production build**:
   ```bash
   npm run preview
   ```
