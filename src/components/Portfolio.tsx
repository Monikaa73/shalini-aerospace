import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Rocket, Plane, Satellite, Cpu, Wrench, Users, Lightbulb,
  Mail, Phone, MapPin, Linkedin, Github, Download, ArrowRight,
  GraduationCap, Award, FileText, Briefcase, Send, Menu, X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-aerospace.jpg";
import profileImg from "@/assets/profile.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

function Section({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative py-24 px-6 md:px-10 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <motion.div
      initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp} className="mb-14 text-center"
    >
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs tracking-[0.2em] uppercase text-accent">
        <span className="w-1.5 h-1.5 rounded-full bg-accent shadow-cyan" /> {kicker}
      </div>
      <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gradient glow-text">{title}</h2>
    </motion.div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "about"], ["Skills", "skills"], ["Experience", "experience"],
    ["Projects", "projects"], ["Education", "education"], ["Contact", "contact"],
  ];
  return (
    <nav className="fixed top-0 inset-x-0 z-50 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 font-bold tracking-wider">
          <Rocket className="w-5 h-5 text-accent" />
          <span className="text-gradient">SHALINI.K</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          {links.map(([l, h]) => (
            <a key={h} href={`#${h}`} className="text-muted-foreground hover:text-accent transition-colors relative group">
              {l}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all" />
            </a>
          ))}
        </div>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="md:hidden glass border-t border-white/5 px-6 py-4 flex flex-col gap-3">
          {links.map(([l, h]) => (
            <a key={h} href={`#${h}`} onClick={() => setOpen(false)} className="text-muted-foreground hover:text-accent">{l}</a>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="hero" ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <img src={heroImg} alt="Aerospace HUD" className="w-full h-full object-cover opacity-40" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 grid-bg opacity-30" />
      </motion.div>

      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs tracking-[0.3em] uppercase text-accent mb-8">
          <Plane className="w-3.5 h-3.5" /> Aerospace · UAV · Innovation
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.9 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
          <span className="text-gradient glow-text">SHALINI</span>{" "}
          <span className="text-foreground">KUMAR</span>
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.8 }}
          className="mt-4 text-lg md:text-2xl text-accent tracking-[0.25em] uppercase font-light">
          Aerospace Engineer
        </motion.p>

        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65, duration: 0.9 }}
          className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Passionate about UAVs, Aerospace Design, CAD Modeling, and Aerospace Innovation.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.8 }}
          className="mt-10 flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-cyan transition-all border-0">
            <a href="#projects">View Projects <ArrowRight className="w-4 h-4 ml-2" /></a>
          </Button>
          <Button asChild size="lg" variant="outline" className="glass border-accent/40 text-foreground hover:bg-accent/10 hover:border-accent">
            <a href="#contact"><Download className="w-4 h-4 mr-2" /> Download Resume</a>
          </Button>
          <Button asChild size="lg" variant="ghost" className="text-foreground hover:bg-white/5">
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-accent text-xs tracking-widest">
        SCROLL ↓
      </motion.div>
    </section>
  );
}

function About() {
  const stats = [
    { v: "8.10", l: "CGPA" },
    { v: "B.Tech", l: "Aerospace Eng." },
    { v: "Now", l: "Ready to Join" },
  ];
  return (
    <Section id="about">
      <SectionTitle kicker="01 / About" title="Mission Brief" />
      <div className="grid md:grid-cols-5 gap-10 items-center">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="md:col-span-2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-primary rounded-2xl blur opacity-40 group-hover:opacity-70 transition" />
            <div className="relative glass rounded-2xl overflow-hidden">
              <img src={profileImg} alt="Shalini Kumar" className="w-full h-auto" loading="lazy" width={800} height={800} />
            </div>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="md:col-span-3 space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Highly motivated <span className="text-accent">Aerospace graduate</span> with hands-on experience in
            <span className="text-accent"> Hybrid VTOL UAV</span> projects and strong CAD skills in SolidWorks.
            Passionate about aerospace design, UAV systems, simulations, and innovative engineering solutions.
          </p>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((s, i) => (
              <motion.div key={s.l} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="glass rounded-xl p-5 text-center hover:border-accent/40 transition">
                <div className="text-2xl md:text-3xl font-bold text-gradient">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Skills() {
  const technical = [
    { n: "SolidWorks", v: 92 }, { n: "Creo", v: 80 }, { n: "Fusion 360", v: 88 },
    { n: "CATIA", v: 78 }, { n: "ANSYS", v: 82 }, { n: "GD&T", v: 75 },
    { n: "UAV Design", v: 90 }, { n: "MS Office", v: 85 },
  ];
  const soft = ["Teamwork", "Adaptability", "Problem Solving"];
  return (
    <Section id="skills">
      <SectionTitle kicker="02 / Skills" title="Engineering Arsenal" />
      <div className="grid md:grid-cols-2 gap-10">
        <div className="glass rounded-2xl p-8">
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-6 text-accent">
            <Cpu className="w-5 h-5" /> Technical
          </h3>
          <div className="grid grid-cols-2 gap-5">
            {technical.map((s, i) => (
              <motion.div key={s.n} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="text-foreground">{s.n}</span>
                  <span className="text-accent">{s.v}%</span>
                </div>
                <div className="h-1.5 bg-secondary/60 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: `${s.v}%` }}
                    viewport={{ once: true }} transition={{ duration: 1.2, delay: i * 0.05, ease: "easeOut" }}
                    className="h-full bg-gradient-primary rounded-full shadow-cyan" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="glass rounded-2xl p-8">
          <h3 className="flex items-center gap-2 text-xl font-semibold mb-6 text-accent">
            <Users className="w-5 h-5" /> Soft Skills
          </h3>
          <div className="space-y-4">
            {soft.map((s, i) => (
              <motion.div key={s} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex items-center gap-4 p-4 rounded-xl bg-secondary/40 border border-border hover:border-accent/40 transition group">
                <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition">
                  <Lightbulb className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-lg text-foreground">{s}</span>
              </motion.div>
            ))}
            <div className="mt-6 p-5 rounded-xl border border-accent/30 bg-accent/5">
              <p className="text-sm text-muted-foreground italic">
                "Engineering is not just the application of science — it's the art of solving tomorrow's problems today."
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Experience() {
  const items = [
    {
      role: "Project Intern", co: "Prime Toolings, Bangalore",
      pts: ["Designed aircraft engine and nozzle using Fusion 360 and ANSYS", "Worked on UAV assembly and agricultural drone systems"],
      icon: Plane,
    },
    {
      role: "Research Intern", co: "Aeroin Space Tech Pvt. Ltd, Chennai",
      pts: ["Worked on CubeSat and CanSat development", "Designed and 3D printed a 1U CubeSat model"],
      icon: Satellite,
    },
    {
      role: "Intern", co: "VaayuSastra Aerospace, Chennai",
      pts: ["Studied thrust vector control systems in rockets", "Built PVC rocket model for TVC demonstration"],
      icon: Rocket,
    },
  ];
  return (
    <Section id="experience">
      <SectionTitle kicker="03 / Experience" title="Flight Log" />
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/40 to-transparent" />
        {items.map((it, i) => {
          const Icon = it.icon;
          const left = i % 2 === 0;
          return (
            <motion.div key={it.co} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}
              className={`relative mb-12 md:w-1/2 ${left ? "md:pr-12" : "md:ml-auto md:pl-12"} pl-16 md:pl-12`}>
              <div className={`absolute top-3 ${left ? "md:-right-3" : "md:-left-3"} left-3 md:left-auto w-6 h-6 rounded-full bg-gradient-primary shadow-cyan flex items-center justify-center`}>
                <Icon className="w-3 h-3 text-primary-foreground" />
              </div>
              <div className="glass rounded-xl p-6 hover:border-accent/40 hover:shadow-cyan transition-all hover:-translate-y-1">
                <h4 className="text-lg font-semibold text-foreground">{it.role}</h4>
                <p className="text-accent text-sm mt-1">{it.co}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {it.pts.map((p) => (
                    <li key={p} className="flex gap-2"><span className="text-accent mt-1">▸</span>{p}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects">
      <SectionTitle kicker="04 / Projects" title="Featured Build" />
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="relative group max-w-5xl mx-auto">
        <div className="absolute -inset-0.5 bg-gradient-primary rounded-3xl blur opacity-30 group-hover:opacity-60 transition" />
        <div className="relative glass rounded-3xl p-8 md:p-12 overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 flex justify-center">
              <div className="relative w-44 h-44 rounded-full bg-gradient-primary shadow-cyan flex items-center justify-center">
                <Plane className="w-20 h-20 text-primary-foreground" />
                <div className="absolute inset-0 rounded-full border border-accent/40 animate-ping" />
              </div>
            </div>
            <div className="md:col-span-3">
              <span className="text-xs uppercase tracking-widest text-accent">Capstone Project</span>
              <h3 className="mt-2 text-2xl md:text-3xl font-bold text-foreground">
                AI-Enhanced Voice Controlled Hybrid VTOL UAV
              </h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Developed a Hybrid VTOL UAV with AI-based voice control using Python and Machine Learning.
                Converted a fixed-wing aircraft into VTOL configuration and conducted flight testing for
                stability and AI response evaluation.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {["Python", "Machine Learning", "VTOL", "Flight Testing", "AI Voice Control"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs glass text-accent border-accent/30">{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

function Publication() {
  return (
    <Section id="publication">
      <SectionTitle kicker="05 / Publication" title="Published Research" />
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="max-w-3xl mx-auto relative group">
        <div className="absolute -inset-1 bg-gradient-primary opacity-30 blur-xl group-hover:opacity-60 transition rounded-2xl" />
        <div className="relative glass rounded-2xl p-8 text-center">
          <FileText className="w-10 h-10 text-accent mx-auto mb-4" />
          <h3 className="text-xl md:text-2xl font-semibold text-foreground">
            Experimental Study of Optical Wireless Data Transmission in CubeSats
          </h3>
          <p className="mt-4 text-muted-foreground">
            Published in <span className="text-accent">IJSREM</span> — International Journal of Scientific
            Research in Engineering and Management
          </p>
          <p className="mt-2 text-sm text-muted-foreground">Vol. 8, Issue 7 · July 2024</p>
        </div>
      </motion.div>
    </Section>
  );
}

function Certifications() {
  const certs = [
    "Industrial Automation", "Basics of Aeromodelling", "AutoCAD & CATIA",
    "Space Surface Exploration Course", "Bharatiya Antariksh Hackathon 2024",
    "Agnirva Space Internship Program", "SolidWorks Certification",
  ];
  return (
    <Section id="certs">
      <SectionTitle kicker="06 / Certifications" title="Credentials" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certs.map((c, i) => (
          <motion.div key={c} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.06 }}
            className="glass rounded-xl p-5 flex items-center gap-4 hover:border-accent/50 hover:-translate-y-1 transition group">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0 shadow-glow group-hover:rotate-12 transition">
              <Award className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-foreground text-sm">{c}</span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education">
      <SectionTitle kicker="07 / Education" title="Academic Trajectory" />
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
        className="max-w-3xl mx-auto glass rounded-2xl p-8 md:p-10 hover:border-accent/40 transition">
        <div className="flex items-start gap-5">
          <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow shrink-0">
            <GraduationCap className="w-7 h-7 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="text-xl md:text-2xl font-semibold text-foreground">B.Tech in Aerospace Engineering</h3>
            <p className="text-accent mt-1">Periyar Maniammai Institute of Science and Technology</p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <span className="px-3 py-1 rounded-full glass border-accent/30 text-muted-foreground">2021 – 2025</span>
              <span className="px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground font-medium">CGPA 8.10</span>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };
  return (
    <Section id="contact">
      <SectionTitle kicker="08 / Contact" title="Initiate Transmission" />
      <div className="grid md:grid-cols-2 gap-10">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          className="space-y-4">
          {[
            { I: Mail, l: "Email", v: "shalinikajol2004@gmail.com", h: "mailto:shalinikajol2004@gmail.com" },
            { I: Phone, l: "Phone", v: "+91 9363282001", h: "tel:+919363282001" },
            { I: MapPin, l: "Location", v: "Thanjavur, Tamil Nadu, India", h: undefined },
            { I: Linkedin, l: "LinkedIn", v: "/in/shalini-kumar-7b9248293", h: "https://www.linkedin.com/in/shalini-kumar-7b9248293/" },
          ].map(({ I, l, v, h }) => (
            <a key={l} href={h ?? "#"} target={h?.startsWith("http") ? "_blank" : undefined} rel={h?.startsWith("http") ? "noopener noreferrer" : undefined} className="glass rounded-xl p-5 flex items-center gap-4 hover:border-accent/40 transition group">
              <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition">
                <I className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{l}</div>
                <div className="text-foreground">{v}</div>
              </div>
            </a>
          ))}
          <div className="flex gap-3 pt-2">
            {[
              { I: Linkedin, h: "https://www.linkedin.com/in/shalini-kumar-7b9248293/", ext: true },
              { I: Phone, h: "tel:+919363282001", ext: false },
              { I: Mail, h: "mailto:shalinikajol2004@gmail.com", ext: false },
            ].map(({ I, h, ext }, i) => (
              <a key={i} href={h} target={ext ? "_blank" : undefined} rel={ext ? "noopener noreferrer" : undefined} className="w-11 h-11 rounded-full glass flex items-center justify-center text-accent hover:shadow-cyan hover:bg-accent/10 transition">
                <I className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.form variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
          onSubmit={onSubmit} className="glass rounded-2xl p-8 space-y-4">
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
            <input required maxLength={100} className="w-full mt-2 bg-secondary/40 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Email</label>
            <input required type="email" maxLength={255} className="w-full mt-2 bg-secondary/40 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition" />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">Message</label>
            <textarea required rows={4} maxLength={1000} className="w-full mt-2 bg-secondary/40 border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-accent transition resize-none" />
          </div>
          <Button type="submit" size="lg" className="w-full bg-gradient-primary text-primary-foreground shadow-glow hover:shadow-cyan border-0">
            <Send className="w-4 h-4 mr-2" /> {sent ? "Transmission Sent ✓" : "Send Message"}
          </Button>
        </motion.form>
      </div>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="relative border-t border-border/50 mt-20 py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Rocket className="w-4 h-4 text-accent" />
          <span>© {new Date().getFullYear()} Shalini Kumar · Aerospace Engineer</span>
        </div>
        <div className="flex items-center gap-2 tracking-widest text-xs uppercase text-accent">
          <Briefcase className="w-3 h-3" /> Engineered with precision
        </div>
      </div>
    </footer>
  );
}

export function Portfolio() {
  return (
    <div className="relative min-h-screen text-foreground">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Publication />
      <Certifications />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}
