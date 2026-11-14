# Personal Portfolio Website — Mehedi Hossen Fahim

A modern, responsive, and interactive personal portfolio website for **Mehedi Hossen Fahim** (AI Engineer specializing in LLM Agents, Hybrid RAG, Computer Vision, and Python Backend), built with **React.js**, **Vite**, and **Tailwind CSS**.

---

## 🌟 Live Demo & Links

- **Portfolio URL**: [portfolio-mehedi-hossen-fahim.vercel.app](https://portfolio-mehedi-hossen-fahim.vercel.app)
- **GitHub Profile**: [github.com/MehdiHossenFahim](https://github.com/MehdiHossenFahim)
- **LinkedIn**: [linkedin.com/in/mehedihossenfahim](https://linkedin.com/in/mehedihossenfahim)
- **Email**: [mehdihossenfahim@gmail.com](mailto:mehdihossenfahim@gmail.com)

---

## 🚀 Features & Assignment Requirements

### 1. Required Sections
- [x] **A. Navbar**: Brand logo, navigation links (`Home`, `About`, `Skills`, `Projects`, `Experience`, `Contact`), responsive mobile menu, smooth scrolling to sections.
- [x] **B. Home / Hero**: Name, professional title, introduction, stylized avatar/profile card, "Download CV" & "View Projects" buttons, social links.
- [x] **C. About Me**: Professional background, educational history (Notre Dame University Bangladesh, B.Sc. CSE, CGPA 3.58), career goals, profile info cards.
- [x] **D. Skills Section**: Categorized technical competencies with percentage progress bars and proficiency badges (AI/LLM, Backend, Databases, DevOps & Cloud, Hardware & IoT, Frontend).
- [x] **E. Projects Section**: 5 real-world production projects stored in an array and rendered using `.map()`, with visual previews, descriptions, tech tags, Live Demo, and GitHub buttons.
- [x] **F. Contact Section**: Controlled form with React state (`name`, `email`, `subject`, `message`), `onSubmit` handler, regex and length validation, inline error indicators, and success confirmation alert.
- [x] **G. Footer**: Name, social links (GitHub, LinkedIn, Facebook, Portfolio), copyright statement, and quick navigation.
- [x] **Bonus Experience & Achievements**: Software Developer Intern (White Services Technology Ltd.), Robotics Instructor (Motijheel Model High School), and 3x Robotics Competition awards.

### 2. All 5 Additional Features Completed
1. **Dark / Light Mode**: Theme toggle button in Navbar with `localStorage` persistence and automatic class switching.
2. **Project Filtering**: Filter projects by technology and domain (`All`, `AI & LLM Agents`, `Full-Stack & Backend`, `Computer Vision`).
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
   cd "mhf-portfolio"
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

---

