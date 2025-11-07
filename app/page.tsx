"use client"
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Suspense } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Database, Palette, Smartphone, Atom, FileType2, Server, Landmark, Leaf, ChevronUp, X, Check } from "lucide-react"
import Workspace3D from "@/components/3d-workspace"
import Skills3D from "@/components/skills-3d"
import { createElement } from "react"

// Skills data - reduced to 6 items
const skills = [
  { name: "React", icon: Atom, color: "#61dafb", bgColor: "bg-blue-500", description: "Frontend Library" },
  { name: "Next.js", icon: ChevronUp, color: "#000000", bgColor: "bg-gray-900", description: "React Framework" },
  { name: "TypeScript", icon: FileType2, color: "#3178c6", bgColor: "bg-blue-600", description: "Type Safety" },
  { name: "Node.js", icon: Server, color: "#339933", bgColor: "bg-green-600", description: "Backend Runtime" },
  { name: "Python", icon: Landmark, color: "#3776ab", bgColor: "bg-blue-700", description: "Programming Language" },
  { name: "MongoDB", icon: Leaf, color: "#47a248", bgColor: "bg-green-500", description: "NoSQL Database" },
]

// Projects data
const projects = [
  {
    title: "Idara Al-Khair (IAK)",
    description: "Non-profit organization website showcasing healthcare & community services",
    image: "/Iak.png",
    tech: ["Next.js", "Design", "3D", "TypeScript"],
    github: "https://github.com/Rahatali8/",
    live: "https://iak.ngo/",
  },
  {
    title: "School Management System (SMS)",
    description: "Comprehensive school management system for efficient administration",
    image: "/SMS.png",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Django"],
    github: "https://github.com/Rahatali8/",
    live: "https://sms.idaraalkhair.sbs/Universal_Login",
  },
  {
    title: "E-Commerce Website",
    description: "Online platform for buying and selling products with user-friendly interface",
    image: "/e-commerce.jpg",
    tech: ["React", "TypeScript", "Node.js"],
    github: "https://github.com/Rahatali8/",
    live: "#",
  },
]

// AnimatedText with left-in, right-out, and repeat
const AnimatedText = ({ text }: { text: string }) => {
  const [show, setShow] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const letters = text.split("");

  useEffect(() => {
    if (show) {
      timeoutRef.current = setTimeout(() => setShow(false), letters.length * 120 + 1200);
    } else {
      timeoutRef.current = setTimeout(() => setShow(true), letters.length * 120 + 1200);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [show, letters.length]);

  return (
    <div className="flex space-x-1 text-5xl lg:text-6xl font-bold">
      {letters.map((char, i) => (
        <motion.span
          key={i + (show ? "in" : "out")}
          initial={show ? { opacity: 0, x: -40 } : { opacity: 1, x: 0 }}
          animate={show ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{
            duration: 0.4,
            delay: i * 0.07,
            type: "spring",
            bounce: 0.3,
          }}
          style={{ display: char === " " ? "inline-block" : undefined }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

// Alternate AnimatedText2: typewriter in from left, then out to right, repeat, single line, faster, simple style
const AnimatedText2 = ({ text }: { text: string }) => {
  const [visibleCount, setVisibleCount] = useState(0);
  const [reverse, setReverse] = useState(false);
  const letters = text.split("");
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (!reverse && visibleCount < letters.length) {
      timeout = setTimeout(() => setVisibleCount(visibleCount + 1), 35);
    } else if (!reverse && visibleCount === letters.length) {
      timeout = setTimeout(() => setReverse(true), 700);
    } else if (reverse && visibleCount > 0) {
      timeout = setTimeout(() => setVisibleCount(visibleCount - 1), 35);
    } else if (reverse && visibleCount === 0) {
      timeout = setTimeout(() => setReverse(false), 400);
    }
    return () => clearTimeout(timeout);
  }, [visibleCount, reverse, letters.length]);
  return (
    <div className="whitespace-nowrap text-5xl lg:text-6xl font-bold">
      {letters.map((char, i) => (
        <motion.span
          key={i + (reverse ? "out" : "in")}
          initial={{ opacity: 0, x: -20 }}
          animate={{
            opacity: i < visibleCount ? 1 : 0,
            x: i < visibleCount ? 0 : reverse ? 20 : -20,
          }}
          transition={{
            duration: 0.18,
            type: "tween",
            delay: 0,
          }}
          style={{ display: char === " " ? "inline-block" : undefined }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </div>
  );
};

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [selectedProject, setSelectedProject] = useState<any | null>(null)
  const [showProjectModal, setShowProjectModal] = useState(false)
  const [sendLoading, setSendLoading] = useState(false)
  const [showThanksModal, setShowThanksModal] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-cyan-400">• Rahat Ali Sheikh •</div>
            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-cyan-400 transition-colors ${activeSection === item.toLowerCase() ? "text-cyan-400" : "text-gray-300"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-cyan-400 text-lg">Hello, I'm</p>

                {/* Animated Text */}
                <AnimatedText2 text="Rahat Ali Sheikh" />

                <p className="text-xl text-gray-300">Full Stack Developer</p>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
                Passionate full-stack developer with expertise in modern web technologies. I create scalable,
                user-friendly applications that solve real-world problems.
              </p>
              <div className="flex gap-4">
                <Button
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 transform hover:scale-105 transition-all duration-300"
                  onClick={() => scrollToSection("projects")}
                >
                  View Projects
                </Button>
                <Button
                  variant="outline"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 bg-transparent transform hover:scale-105 transition-all duration-300"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Me
                </Button>
              </div>
            </div>

            {/* Enhanced 3D Scene */}
            {/* Wrap 3D workspace so we can blur / disable it when a modal opens */}
            <div className={`transition-all duration-300 ${showProjectModal ? 'pointer-events-none select-none opacity-60 blur-sm scale-95' : ''}`}>
              <Suspense fallback={<div className="h-96 lg:h-[600px] bg-slate-800 rounded-lg animate-pulse" />}>
                <Workspace3D />
              </Suspense>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section - New Layout */}
      <section id="skills" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-cyan-400">•</span> Skills
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Technologies and tools I work with to bring ideas to life</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - 3D Skills Visualization */}
            <div className="order-2 lg:order-1">
              <Skills3D />
            </div>

            {/* Right Side - Skills Cards (2x3 Grid) */}
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <Card
                    key={index}
                    className="bg-slate-800 border-slate-700 hover:border-cyan-500 transition-all duration-500 group relative overflow-hidden cursor-pointer group rounded-xl"
                    style={{
                      animationDelay: `${index * 150}ms`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    {/* Animated Background */}
                    <div
                      className={`absolute inset-0 ${skill.bgColor} opacity-0 group-hover:opacity-20 transition-all duration-500 transform group-hover:scale-110`}
                    />

                    {/* Glowing Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:animate-pulse" />

                    <CardContent className="p-6 text-center relative z-10 transform group-hover:translateZ-4 transition-all duration-500 group-hover:-translate-y-2">
                      {/* Icon with enhanced animation */}
                      <motion.div
                        className="mb-3 flex justify-center items-center group-hover:drop-shadow-lg"
                        whileHover={{ rotate: 360 }}
                        transition={{ type: "spring", duration: 0.7 }}
                      >
                        {skill.icon && createElement(skill.icon, { size: 38, color: skill.color })}
                      </motion.div>

                      {/* Skill Name */}
                      <h3 className="font-semibold text-white mb-2 transform group-hover:scale-105 transition-all duration-300">
                        {skill.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                        {skill.description}
                      </p>

                      {/* Animated Progress Bar */}
                      <div className="mt-3 h-1 bg-slate-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${skill.bgColor} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 delay-200`}
                        />
                      </div>

                      {/* Floating Particles Effect */}
                      <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-2 right-2 w-1 h-1 bg-cyan-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 delay-300" />
                        <div className="absolute bottom-2 left-2 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300 delay-500" />
                        <div className="absolute top-1/2 left-1 w-0.5 h-0.5 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 delay-700" />
                      </div>
                    </CardContent>

                    {/* 3D Shadow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:translate-x-1 group-hover:translate-y-1" />
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="text-cyan-400">•</span> Projects
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">A showcase of my recent work and personal projects</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-slate-800 border-slate-700 hover:border-cyan-500 transition-all duration-500 group overflow-hidden cursor-pointer rounded-xl"
                style={{ animationDelay: `${index * 100}ms` }}
                whileHover={{ y: -14, scale: 1.045, boxShadow: '0 8px 32px 0 rgba(6,182,212,0.15)' }}
                onClick={() => { setSelectedProject(project); setShowProjectModal(true); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              >
                <Card className="bg-transparent border-none shadow-none rounded-xl">
                  {project.image && (
                    <>
                      <div className="relative overflow-hidden">
                        {/* Featured ribbon for the first project */}
                        {index === 0 && (
                          <div className="absolute top-3 left-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg z-20">
                            Featured
                          </div>
                        )}
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-semibold mb-2 text-white relative overflow-hidden">
                          <span className="block group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 group-hover:bg-clip-text group-hover:animate-gradient-move transition-all duration-500">
                            {project.title}
                          </span>
                        </h3>
                        <p className="text-gray-400 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, techIndex) => {
                            const skillData = skills.find((s) => s.name === tech)
                            return (
                              <Badge
                                key={techIndex}
                                variant="secondary"
                                className={`${skillData?.bgColor || "bg-cyan-500"}/20 text-cyan-400 border border-cyan-500/30`}
                              >
                                {tech}
                              </Badge>
                            )
                          })}
                        </div>
                        <div className="flex gap-4">
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white bg-transparent transform hover:scale-105 transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <a href={project.github || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center">
                              <Github className="w-4 h-4 mr-2" />
                              Code
                            </a>
                          </Button>
                          <Button
                            size="sm"
                            className="bg-cyan-500 hover:bg-cyan-600 transform hover:scale-105 transition-all duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <a href={project.live || '#'} target="_blank" rel="noopener noreferrer" className="flex items-center">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Project Preview Modal */}
          {showProjectModal && selectedProject && (
            <motion.div
              key="project-modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[99999] flex items-center justify-center p-4 md:p-6"
            >
              {/* Backdrop: dark + blur to ensure 3D canvas is visually behind modal */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-black/90 to-slate-900/95 backdrop-blur-md"
                onClick={() => { setShowProjectModal(false); setSelectedProject(null); }} />
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="relative z-50 max-w-4xl w-full bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl shadow-2xl overflow-hidden border border-slate-700/50"
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-title"
              >
                <div className="flex items-start justify-between p-6 border-b border-slate-800/50 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900">
                  <h3 id="project-title" className="text-2xl font-bold bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => { setShowProjectModal(false); setSelectedProject(null); }}
                    className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-slate-800/50 transition-all"
                    aria-label="Close preview"
                  >
                    <X />
                  </button>
                </div>

                <div className="grid md:grid-cols-2 gap-8 p-8">
                  <div className="rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700/50 shadow-lg group">
                    <div className="relative overflow-hidden">
                      <img
                        src={selectedProject.image || '/placeholder.svg'}
                        alt={selectedProject.title}
                        className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60" />
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-300 mb-6 text-lg leading-relaxed">{selectedProject.description}</p>
                    <div className="flex flex-wrap gap-3 mb-8">
                      {selectedProject.tech.map((t: string, i: number) => (
                        <span key={i} className="text-xs px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-cyan-300">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href="https://github.com/Rahatali8/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 border border-cyan-500 text-cyan-400 rounded-xl hover:from-cyan-500 hover:to-cyan-600 hover:text-white transition-all duration-300 shadow-lg shadow-cyan-500/20"
                      >
                        <Github className="w-5 h-5 mr-2" /> View Code
                      </a>
                      <a
                        href={selectedProject.live || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white rounded-xl hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300 shadow-lg shadow-cyan-500/20"
                      >
                        <ExternalLink className="w-5 h-5 mr-2" /> Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-cyan-400">•</span> About Me
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  I'm a passionate full-stack developer with over 3 years of experience creating web applications that
                  make a difference. I specialize in modern JavaScript frameworks and have a strong background in both
                  frontend and backend development.
                </p>
                <p>
                  My journey in tech started with a curiosity about how things work on the web. Since then, I've worked
                  on various projects ranging from e-commerce platforms to AI-powered applications, always focusing on
                  clean code and user experience.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                  or sharing knowledge with the developer community.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="flex items-center gap-3 transform hover:scale-105 transition-transform duration-300 p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                  <Code className="w-6 h-6 text-blue-400" />
                  <div>
                    <p className="font-semibold text-blue-400">Frontend</p>
                    <p className="text-sm text-gray-400">React, Next.js, Vue.js</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 transform hover:scale-105 transition-transform duration-300 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                  <Database className="w-6 h-6 text-green-400" />
                  <div>
                    <p className="font-semibold text-green-400">Backend</p>
                    <p className="text-sm text-gray-400">Node.js, Python, PostgreSQL</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 transform hover:scale-105 transition-transform duration-300 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <Palette className="w-6 h-6 text-purple-400" />
                  <div>
                    <p className="font-semibold text-purple-400">Design</p>
                    <p className="text-sm text-gray-400">UI/UX, Figma, Tailwind</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 transform hover:scale-105 transition-transform duration-300 p-4 bg-orange-500/10 rounded-lg border border-orange-500/20">
                  <Smartphone className="w-6 h-6 text-orange-400" />
                  <div>
                    <p className="font-semibold text-orange-400">Mobile</p>
                    <p className="text-sm text-gray-400">React Native, Flutter</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 p-1 animate-pulse">
                  <img
                    src="/rahat.jpg?height=320&width=320"
                    alt="Rahat Ali Sheikh"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-3 rounded-full animate-bounce shadow-lg">
                  <Code className="w-6 h-6" />
                </div>
                <div className="absolute -top-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded-full animate-pulse shadow-lg">
                  <Database className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - VIP layout */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold mb-4">
              <span className="text-cyan-400">•</span> Let's Connect
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">Have a project, idea or just want to chat? Drop a message — I respond quickly.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left - Info card (col-span 5) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-slate-900/80 to-slate-800 border border-slate-700/50 shadow-2xl p-8">
                <div className="absolute -left-24 top-8 w-56 h-56 bg-gradient-to-tr from-cyan-600/30 to-transparent rounded-full blur-3xl pointer-events-none" />
                <div className="absolute -right-16 bottom-6 w-40 h-40 bg-gradient-to-br from-purple-600/20 to-transparent rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white">Get in touch</h3>
                    <p className="text-sm text-gray-400">I&apos;m available for freelance and full-time roles.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <a href="mailto:rahatalisheikh45@email.com" className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/40 hover:scale-102 transform transition">
                    <div className="p-2 rounded-md bg-cyan-500/10">
                      <Mail className="w-5 h-5 text-cyan-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 font-medium">Email</p>
                      <p className="text-xs text-gray-400">rahatalisheikh45@email.com</p>
                    </div>
                  </a>

                  <a href="tel:+923342813133" className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/40 hover:scale-102 transform transition">
                    <div className="p-2 rounded-md bg-green-500/10">
                      <Phone className="w-5 h-5 text-green-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 font-medium">Phone</p>
                      <p className="text-xs text-gray-400">+92 334 2813133</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-lg bg-slate-800/50 border border-slate-700/40">
                    <div className="p-2 rounded-md bg-purple-500/10">
                      <MapPin className="w-5 h-5 text-purple-300" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300 font-medium">Location</p>
                      <p className="text-xs text-gray-400">Karachi, Pakistan</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex gap-3">
                  <a href="https://github.com/Rahatali8" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full shadow-md hover:scale-105 transition">
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  <a href="https://www.linkedin.com/in/rahat-ali-sheikh-811043302/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-600 text-cyan-300 rounded-full hover:bg-cyan-600/10 transition">
                    <Linkedin className="w-4 h-4" /> LinkedIn
                  </a>
                </div>

                <div className="mt-8 bg-slate-900/60 p-4 rounded-lg border border-slate-700/30">
                <p className="text-sm text-gray-400">Passionate Full-Stack Developer | Building seamless digital experiences with modern web technologies.</p>

                </div>
              </div>
            </div>

            {/* Right - Form (col-span 7) */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-800/60 border border-slate-700/40 shadow-2xl overflow-hidden">
                <div className="p-8 md:p-10">
                  <form className="grid grid-cols-1 gap-6" onSubmit={(e) => { e.preventDefault(); setSendLoading(true); setTimeout(() => { setSendLoading(false); setShowThanksModal(true); }, 1200); }}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">Name</label>
                        <input disabled={sendLoading} type="text" placeholder="Your name" className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition" />
                      </div>
                      <div>
                        <label className="block text-sm text-gray-300 mb-2">Email</label>
                        <input disabled={sendLoading} type="email" placeholder="you@email.com" className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Subject</label>
                      <input disabled={sendLoading} type="text" placeholder="Project subject" className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition" />
                    </div>

                    <div>
                      <label className="block text-sm text-gray-300 mb-2">Message</label>
                      <textarea disabled={sendLoading} rows={6} placeholder="Tell me about your project..." className="w-full px-4 py-3 rounded-lg bg-slate-700 border border-slate-600 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 transition resize-none" />
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <input id="subscribe" disabled={sendLoading} type="checkbox" className="rounded border-slate-600 text-cyan-500 focus:ring-cyan-500" />
                        <label htmlFor="subscribe" className="text-sm text-gray-400">Subscribe to updates</label>
                      </div>

                      <button type="submit" disabled={sendLoading} className={`ml-auto inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full transform ${sendLoading ? 'opacity-80 cursor-wait' : 'hover:scale-105'} transition shadow-xl`}>
                        {sendLoading ? (
                          <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="4" />
                            <path d="M22 12a10 10 0 00-10-10" stroke="white" strokeWidth="4" strokeLinecap="round" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path></svg>
                        )}
                        {sendLoading ? ' Sending...' : ' Send Message'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thanks Modal after sending message */}
      {showThanksModal && (
        <motion.div key="thanks-modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[99999] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setShowThanksModal(false)} />
          <motion.div initial={{ scale: 0.9, y: 10 }} animate={{ scale: 1, y: 0 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }} className="relative z-50 max-w-lg w-full bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl shadow-2xl overflow-hidden border border-slate-700/50 p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-400/30">
                <Check className="w-8 h-8 text-emerald-400" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Thanks — I&apos;ll be in touch!</h3>
            <p className="text-sm text-gray-400 mb-6">Your message has been received. I typically reply within 24–48 hours.</p>
            <div className="flex justify-center">
              <button onClick={() => setShowThanksModal(false)} className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:scale-105 transition">Close</button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="py-8 bg-slate-800 border-t border-slate-700">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">© 2024 Rahat Ali Sheikh. All rights reserved.</p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">Built with Next.js & Three.js</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
