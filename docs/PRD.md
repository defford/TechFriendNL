# 🧾 Product Requirements Document (PRD)

**Product Name:** Tech Friend NL Website
**Prepared by:** Daniel Efford
**Last Updated:** May 30, 2025

---

## 🧭 1. Objective

To build a fast, accessible, and mobile-friendly **React-based** website for **Tech Friend NL**, a local tech support business in Grand Falls-Windsor. The site will showcase services, generate leads, and establish local trust — all while using React for modularity and component reuse.

---

## 🎯 2. Goals

| Goal                  | Description                                             |
| --------------------- | ------------------------------------------------------- |
| Establish credibility | Build trust through testimonials and clear design       |
| Explain services      | Use structured, easy-to-navigate UI                     |
| Generate leads        | Push users toward contacting or booking Daniel          |
| Maintainability       | Component-based structure with state-light architecture |
| Mobile-first          | Responsive layout with touch-friendly interactions      |

---

## 🧱 3. React App Architecture

### 📁 Folder Structure

```plaintext
tech-friend-nl/
├── public/
│   └── index.html
│
├── src/
│   ├── assets/           # Logos, icons, illustrations
│   ├── components/       # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ServiceCard.jsx
│   │   ├── TestimonialCard.jsx
│   │   └── ContactForm.jsx
│   │
│   ├── pages/            # Route-based page components
│   │   ├── Home.jsx
│   │   ├── Services.jsx
│   │   ├── About.jsx
│   │   ├── Testimonials.jsx
│   │   └── Contact.jsx
│   │
│   ├── App.jsx           # Root app wrapper
│   ├── main.jsx          # ReactDOM render
│   ├── App.css
│   └── index.css
│
├── .env
├── package.json
└── README.md
```

---

## ⚛️ 4. Tech Stack

| Layer                  | Tool                                  |
| ---------------------- | ------------------------------------- |
| **Frontend Framework** | React (with Vite or Create React App) |
| **Routing**            | React Router                          |
| **Styling**            | CSS Modules or Tailwind CSS (TBD)     |
| **State**              | useState / Context (minimal)          |
| **Form Backend**       | Formspree, EmailJS, or Netlify Forms  |
| **Hosting**            | Netlify or Vercel                     |
| **Analytics**          | Plausible.io or Google Analytics      |

---

## 🔧 5. Component Overview

| Component             | Purpose                                       |
| --------------------- | --------------------------------------------- |
| `<Navbar />`          | Responsive nav with scroll-to links or routes |
| `<Footer />`          | Contact info, links, branding                 |
| `<ServiceCard />`     | Reusable for each tech support offering       |
| `<TestimonialCard />` | Quote, name, optional avatar                  |
| `<ContactForm />`     | Handles form submission and validation        |
| `<CTA />`             | Reusable call-to-action blocks with buttons   |
| `<Hero />`            | Homepage intro section with branding/message  |

---

## 🔁 6. Page Routes

| Route           | Component          | Purpose                                     |
| --------------- | ------------------ | ------------------------------------------- |
| `/`             | `<Home />`         | Hero, service previews, about preview, CTA  |
| `/services`     | `<Services />`     | Detailed list of offerings                  |
| `/about`        | `<About />`        | Daniel’s story, mission, and trust elements |
| `/testimonials` | `<Testimonials />` | Full reviews and success stories            |
| `/contact`      | `<Contact />`      | Form, contact info, hours, booking CTA      |

---

## 🎨 7. UI/UX Guidelines

| Principle              | Notes                                               |
| ---------------------- | --------------------------------------------------- |
| **Mobile-first**       | Navigation toggles, touch padding, readable fonts   |
| **Simple typography**  | 2-font max: header + body                           |
| **Consistent spacing** | Use a 4/8/16 px rhythm                              |
| **Accessibility**      | Use semantic elements, aria labels, keyboard nav    |
| **Color palette**      | Calm + friendly: blue, white, orange, green accents |

---

## 📈 8. Performance Goals

| Metric                  | Target                        |
| ----------------------- | ----------------------------- |
| Load time (first paint) | < 1.5s                        |
| Lighthouse Score        | > 90 across all categories    |
| Bundle size             | < 200kb initial (tree-shaken) |
| Accessibility           | WCAG 2.1 AA compliant         |

---

## 📨 9. Contact Form Requirements

* Fields: Name, Email, Message
* Validate required fields and email format
* Handle submission via Formspree or EmailJS
* Provide user feedback: success/error message
* Optionally send email confirmation to user

---

## 📡 10. SEO & Meta Strategy

| Page Element     | Rule                                  |
| ---------------- | ------------------------------------- |
| `<title>`        | Unique for each route                 |
| Meta description | Per route; focus on local keywords    |
| OG Tags          | For social preview cards              |
| Sitemap.xml      | Auto-generated or manually maintained |
| Robots.txt       | Allow all, unless staging             |

---

## 🚀 11. Deployment Plan

| Task      | Tool                                         |
| --------- | -------------------------------------------- |
| Git repo  | GitHub                                       |
| Hosting   | Netlify or Vercel                            |
| Domain    | techfriendnl.ca                              |
| HTTPS     | Automatic with Netlify/Vercel                |
| CI/CD     | Automatic on push to `main` branch           |
| Analytics | Plausible.io or Google Analytics integration |

---

## 📅 12. Suggested Timeline

| Week | Focus                                  |
| ---- | -------------------------------------- |
| 1    | Set up React project + routing         |
| 2    | Implement layout shell: Navbar, Footer |
| 3    | Build Homepage                         |
| 4    | Services + About                       |
| 5    | Testimonials + Contact                 |
| 6    | Polish, QA, deploy, launch locally     |

---

## 🔮 13. Future Features

* Blog or resource center
* Embedded booking calendar
* Newsletter signup
* Customer portal
* FAQ page
* Multi-language toggle

