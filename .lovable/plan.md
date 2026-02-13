

# 🏛️ Romanian Luxury Law Firm Website

A stunning, high-converting single-page website for a Romanian lawyer — dark, cinematic, editorial aesthetic with gold accents. Designed to make visitors pick up the phone.

---

## Visual Identity
- **Color palette**: Deep navy `#0A1628`, warm gold `#C9A84C`, white `#FFFFFF`, warm grey `#F5F3EF`
- **Typography**: Playfair Display (headings) + Nunito Sans (body) via Google Fonts
- **Feel**: Luxury editorial — Hermès meets justice. No clichés, no stock imagery vibes.

---

## Visual Enhancements (NEW)
- **Gold particles in hero**: Lightweight canvas animation with tiny floating gold dots drifting across the hero background
- **Parallax scrolling**: Layered elements in hero and key sections move at different speeds for depth
- **Dark marble texture**: Subtle luxury marble background for the Despre Mine (About) section
- **Bucharest architectural photos**: Moody, dark photos of landmarks like Palatul Justiției used as section background accents
- **Ornamental section dividers**: Elegant gold flourish SVG ornaments between sections instead of plain lines
- **Text reveal sweep**: Headings paint in with a gold highlight sweep animation as they scroll into view

---

## Sections (Single-Page, Smooth Scroll)

### 1. Sticky Navbar
- Text logo: "Av. [Nume] | Cabinet de Avocatură" 
- Nav links: Acasă · Servicii · Despre Mine · Cazuri · Testimoniale · Contact
- Pulsing gold CTA button: "Consultație Gratuită →"
- Frosted glass effect on scroll
- Mobile hamburger with slide-in drawer

### 2. Hero (100vh)
- Dark cinematic gradient background with **floating gold particles** canvas animation
- **Parallax** layered depth on background elements
- Staggered word-by-word headline animation: "Apărarea Drepturilor Tale Este Misiunea Noastră."
- Two CTAs: gold primary + ghost secondary
- 3 animated count-up trust stats: 98% Cazuri Câștigate · 500+ Clienți · 15+ Ani
- Bouncing scroll-down indicator

### 3. Trust Bar
- Marquee auto-scroll strip with credentials
- Gold dot separators

### 4. Servicii (Practice Areas)
- "Domenii de Practică" with **gold highlight text reveal** animation
- **Gold flourish ornament** divider above section
- 6 dark cards in 3×2 grid (stacks on mobile)
- Gold hover glow border, line-style Lucide icons
- Staggered scroll-in animations

### 5. Despre Mine (About)
- **Dark marble texture background**
- **Gold ornamental divider** above section
- Two-column: portrait placeholder (left) + text (right)
- Realistic Romanian placeholder bio text
- 4 achievement badges with gold icons
- Italic gold quote block
- **Parallax** subtle shift on portrait image

### 6. Process (Cum Funcționează)
- **Gold ornamental divider** above section
- 3-step horizontal stepper with animated gold connecting line
- Headings with **text reveal sweep**
- Sequential scroll-triggered animations
- Vertical layout on mobile

### 7. Cazuri & Rezultate
- **Moody Bucharest architectural photo** as section background (with dark overlay)
- 3 case study cards: Situație → Acțiune → Rezultat format
- Bold centered 98% success rate stat in gold

### 8. Testimoniale
- **Gold ornamental divider** above section
- Auto-advancing carousel (5s interval) with navigation dots
- Featured large testimonial above carousel
- Gold quote marks, 5-star ratings

### 9. FAQ
- Accordion with rotating gold chevrons
- 5-6 realistic Romanian legal questions & answers

### 10. Contact / Final CTA
- Diagonal split dark background
- Left: compelling headline "Drepturile Tale Nu Pot Aștepta." with **text reveal sweep**
- Right: minimal 3-field form (Nume, Telefon, Mesaj) + gold submit
- Click-to-call phone + email buttons
- Reassurance text about 2-hour response time

### 11. Footer
- Three columns: logo + tagline, quick links, contact info
- Gold top border with **ornamental flourish**, copyright bar

---

## Interactions & Animations
- Word-by-word hero text animation on load
- **Gold particle canvas** animation in hero background
- **Text reveal sweep** — headings paint in with gold highlight on scroll
- Count-up stats animation
- Scroll-triggered fade + slide-up for all sections (Intersection Observer)
- **Parallax** depth on hero layers and portrait
- Gold shimmer sweep on CTA hover
- Floating "Sună Acum" button after scrolling past hero (pulses gently)
- Mobile: full-width sticky bottom call bar
- Form fields with gold bottom-border focus states
- **Ornamental gold SVG flourishes** as section dividers

---

## Technical Approach
- React + Tailwind CSS, all text in Romanian
- Google Fonts (Playfair Display + Nunito Sans)
- All icons from lucide-react
- Custom Intersection Observer hook for scroll animations
- Lightweight canvas for gold particle effect
- CSS-only carousel for testimonials
- Smooth scroll behavior throughout
- Fully responsive mobile-first design with fluid typography
- SVG ornamental dividers as reusable components

