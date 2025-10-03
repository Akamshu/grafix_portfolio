import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MyForm from "./MyForm"; // adjust path if needed
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faDribbble,
  faGithub,
  faWhatsapp,
  faInstagram,

} from "@fortawesome/free-brands-svg-icons";

import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaPenNib,
  FaEnvelope,
  FaGraduationCap, FaBriefcase, FaChalkboardTeacher,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { ReactTyped } from "react-typed";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

// ✅ NAV LINKS
const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];
// ✅ Define type for projects
interface Project {
  id: number;
  title: string;
  tags: string[];
  description: string;
  gallery: string[];
}

// ✅ MAIN PORTFOLIO COMPONENT
// ✅ MAIN PORTFOLIO COMPONENT
export default function PortfolioPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [selected, setSelected] = useState<Project | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);

  // Scrollspy logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      let current = "Home";

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (
          section &&
          section instanceof HTMLElement &&
          section.offsetTop <= scrollPos &&
          section.offsetTop + section.offsetHeight > scrollPos
        ) {
          current = link.name;
        }
      });

      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Define skills array (above return)
  const skills: string[] = [
    "Logo & Brand Identity Design",
    "Flyers, Brochures, Posters",
    "Packaging & Label Design",
    "Social Media Graphics & Ads",
    "Web & App UI/UX Design",
    "Typography & Custom Lettering",
    "Infographic & Icon Design",
    "Motion Graphics & Animation",
    "Adobe Illustrator",
    "Canva",
    "Figma (UI/UX & Prototyping)",
    "Motion Design",
    "Mockups",
    "Vector",
    "Adobe InDesign",
  ];

  const timeline = [
    {
      year: "2017 – 2018",
      title: "Freelance Graphics Designer",
      place: "LCCC, Ikeja, Lagos State",
      description:
        "Started freelancing, creating flyers, posters, and brand identities for local businesses while building a foundation in design tools like CorelDRAW and Photoshop.",
      icon: <FaBriefcase className="text-blue-500" />,
    },
    {
      year: "2021 – 2022",
      title: "UI/UX Designer (Internship)",
      place: "Kponkius Designz, Mubi Adamawa State",
      description:
        "Gained hands-on experience in web and app interface design. Worked with Figma to design user-friendly layouts and assisted developers in implementing responsive designs.",
      icon: <FaChalkboardTeacher className="text-green-500" />,
    },
    {
      year: "2023 – Present",
      title: "Graphics & Web Designer",
      place: "Kponkius Dev, Ogoja, Cross River State",
      description:
        "Designed branding materials, social media graphics, and web assets that improved organizational communication and outreach impact.",
      icon: <FaBriefcase className="text-purple-500" />,
    },
   
  ];


  const projects: Project[] = [
    {
      id: 1,
      title: "Brand Identity",
      tags: ["Branding", "Logo", "Guidelines"],
      description:
        "Full brand system including logo set, color palette, type scale and mockups.",
      gallery: [
        "/assets/img/projects/webui/Screenshot_20250929-133730_WhatsApp.jpg",
        "/assets/img/projects/webui/Screenshot_20250929-133735_WhatsApp.jpg",
        "/assets/img/projects/webui/Screenshot_20250929-133740_WhatsApp.jpg",
      ],
    },
    {
      id: 2,
      title: "Packaging",
      tags: ["Packaging", "Illustration", "Mockups"],
      description:
        "Illustrated product packaging converging heritage motifs with modern layouts.",
      gallery: [
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1200&q=80",
        "https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&q=80",
        "/assets/img/projects/webui/Screenshot_20250929-133730_WhatsApp.jpg",
      ],
    },
    {
      id: 3,
      title: "Company Profile Designs",
      tags: ["Business Branding", "Corporate Identity", "Marketing"],
      description:
    "Professional and well-structured company profiles designed to showcase your brand’s identity, values, services, and achievements. Each profile is crafted to leave a lasting impression on clients, investors, clarity, credibility, and visual appeal.",
      gallery: [
        "/assets/img/projects/webui/1.jpg",
        "/assets/img/projects/webui/3-1.jpg",
        "/assets/img/projects/webui/4-1.jpg",
        "/assets/img/projects/webui/8.jpg",
        "/assets/img/projects/webui/9.jpg",
        "/assets/img/projects/webui/10.jpg",
        "/assets/img/projects/webui/11.jpg",
        "/assets/img/projects/webui/12.jpg",
      ],
    },
    {
      id: 4,
      title: "Flyers Design",
      tags: ["Web Design", "Schools", "Church", "Business"],
      description:
        "Eye-catching and professional flyer designs that effectively communicate your message for schools, churches, businesses, and events",
      gallery: [
        "/assets/img/projects/webui/Screenshot_20250929-133647_WhatsApp.jpg",
        "/assets/img/projects/webui/Screenshot_20250929-133654_WhatsApp.jpg",
        "/assets/img/projects/webui/Screenshot_20250929-133657_WhatsApp.jpg",
        "/assets/img/projects/webui/Screenshot_20250929-133710_WhatsApp.jpg",
        "/assets/img/projects/webui/Screenshot_20250929-140836_WhatsAppBusiness.jpg",
        "/assets/img/projects/webui/Screenshot_20250929-140829_WhatsAppBusiness.jpg",
        "/assets/img/projects/webui/Screenshot_20250929-140823_WhatsAppBusiness.jpg",
      ],
    },
    {
      id: 5,
      title: "UX/UI Designs",
      tags: ["UX/UI Designs", "Mobile & Web Design", "Prototyping"],
      description:
        "Interactive mobile and web app interface designed with a clean layout, intuitive navigation, and modern color systems to enhance user engagement.",
      gallery: [
        "/assets/img/projects/webui/1.png",
        "/assets/img/projects/webui/2.JPG",
        "/assets/img/projects/webui/3.JPG",
        "/assets/img/projects/webui/4.JPG",
        "/assets/img/projects/webui/5.JPG",
       "/assets/img/projects/webui/FB_IMG_1756732854278.jpg",
      ],
    },
    {
      id: 6,
      title: "Jotter Designs",
      tags: ["Stationery", "Branding", "Custom Printing"],
      description:
        "Beautifully crafted jotter designs that blend functionality with creativity, perfect for schools, events, businesses, and personal use.",
      gallery: [
        "/assets/img/projects/webui/Screenshot_20250929-140920_WhatsAppBusiness.jpg",
        "/assets/img/projects/webui/Screenshot_20250929-140912_WhatsAppBusiness.jpg",
        "/assets/img/projects/webui/Screenshot_20250929-140904_WhatsAppBusiness.jpg",
      ],
    },
    {
      id: 7,
      title: "Awards & Certificate Designs",
      tags: ["Recognition", "Corporate", "Education"],
description:
"Elegant and professional award and certificate designs created to celebrate achievements, recognize excellence, and mark special milestones.",
      gallery: [
        "/assets/img/projects/webui/Screenshot_20250929-140935_WhatsAppBusiness.jpg",
        "/assets/img/projects/webui/Screenshot_20250929-140939_WhatsAppBusiness.jpg",
        "/assets/img/projects/webui/Screenshot_20250929-141112_WPS Office.jpg",
      ],
    },
    {
      id: 8,
      title: "Social Media Ads",
      tags: ["Social Media", "Marketing", "Visuals"],
      description:
        "Carousel and post templates for Instagram, boosting brand engagement and consistency.",
      gallery: [
        "/assets/img/projects/webui/Screenshot_20250929-133704_WhatsApp.jpg",
        "/assets/img/projects/webui/Screenshot_20250929-133708_WhatsApp.jpg",
        
      ],
    },
    {
      id: 9,
      title: "Magazine Layout",
      tags: ["Editorial", "Print", "Layout"],
      description:
        "Editorial design project with clean grid-based magazine spreads and strong visual hierarchy.",
      gallery: [
        "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=1200&q=80",
        "https://images.unsplash.com/photo-1520975918319-38a52f0d4c4b?w=1200&q=80",
        "https://images.unsplash.com/photo-1581093588401-97b6aefc9d3f?w=1200&q=80",
      ],
    },
  ];


  const nextImage = () => {
    if (selected) {
      setGalleryIndex((prev) => (prev + 1) % selected.gallery.length);
    }
  };

  const prevImage = () => {
    if (selected) {
      setGalleryIndex(
        (prev) => (prev - 1 + selected.gallery.length) % selected.gallery.length
      );
    }
  };

  return (
    <div className="relative">
      {/* ✅ NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-2xl font-bold text-purple-600">Kponkius</h1>

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8 font-medium">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`transition ${activeLink === link.name
                    ? "text-purple-600 font-bold"
                    : "text-gray-700 hover:text-purple-600"
                    }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-2xl text-gray-700"
            onClick={() => setMenuOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      {/* ✅ MOBILE MENU DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-50 md:bg-white sm:bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
          >
            <motion.div
              className="absolute top-0 right-0 h-full w-64 bg-white shadow-lg p-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="text-2xl mb-6 text-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                <FaTimes />
              </button>
              <ul className="flex flex-col space-y-6 text-lg font-medium">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className={`block ${activeLink === link.name
                        ? "text-purple-600 font-bold"
                        : "text-gray-700 hover:text-purple-600"
                        }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="max-w-7xl mx-auto px-6 py-16">

        {/* ✅ HERO with animated background + typing */}
        <div
          id="hero"
          className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-screen"
        >

          {/* ✅ Animated Gradient Background */}
          <div className="absolute inset-0 -z-10 animate-gradient" />

          <style jsx>{`
  .animate-gradient {
    background: linear-gradient(270deg, #9333ea, #ec4899, #f9a8d4, #ffffff);
    background-size: 600% 600%;
    animation: gradientShift 15s ease infinite;
  }
  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`}</style>


          {/* Left: Text */}
          <motion.section
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-sm font-medium text-pink-600">
              Portfolio • Branding • UI
            </p>

            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              <span className="inline-flex items-center text-6xl">
                I CRE <FaPenNib className="mx-1 transform -rotate-225 text-current" /> TE
              </span>
              <span className="block text-purple-500">
                <ReactTyped
                  strings={[
                    "bold visual identities",
                    " engaging UI/UX",
                    " wow! concepts designs",
                    "and bring ideas to life with motion",
                  ]}
                  typeSpeed={50}
                  backSpeed={30}
                  loop

                />
              </span>
            </h1>

            <p className="text-lg text-gray-600 text-justify">
              I bring ideas to life with bold, creative designs that not only look
              stunning but also connect with your audience. From branding and logos to
              social media graphics, print materials, and digital assets, my work is all
              about blending creativity with strategy to make your brand stand out.
            </p>

            {/* CTA buttons */}
            <div className="flex items-center gap-4">
              <a
                href="#work"
                className="inline-flex items-center gap-3 rounded-full px-4 py-2 bg-purple-600 text-white shadow hover:scale-[1.02] transform transition"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full px-4 py-2 bg-pink-600 text-white shadow hover:scale-[1.02] transform transition"
              >
                Hire Me
              </a>
            </div>
          </motion.section>

          {/* Right: Image */}
          <motion.section
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/headshot.png"
                alt="Design studio desk"
                className="w-full h-80 object-cover"
              />
              <div className="p-4 bg-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Graphics Designer</p>
                    <p className="font-semibold">Kponkius Gabriel</p>
                  </div>
                  <div className="text-sm text-gray-400">2025</div>
                </div>
              </div>
            </div>
          </motion.section>
        </div>
        {/* { CARREL TIMELINE} */}

        <section id="timeline" className="mt-24 relative">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-5xl font-extrabold text-gray-900 text-center">
              Career Timeline
            </h2>
            <p className="mt-2 text-center text-gray-700 max-w-2xl mx-auto">
              A quick journey through my education, roles, and professional milestones.
            </p>

            <div className="mt-12 relative border-l-4 border-green-500">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="mb-12 ml-6"
                >
                  <span className="absolute -left-6 flex items-center justify-center w-10 h-10 bg-white border-4 border-green-500 rounded-full">
                    {item.icon}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.place}</p>
                  <p className="mt-2 text-gray-700">{item.description}</p>
                  <span className="text-xs text-green-600 font-semibold">
                    {item.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ✅ PROJECTS */}
        <section id="work" className="mt-20">
          <h2 className="text-4xl font-bold">Featured Projects</h2>
          <p className="mt-2 text-gray-600 text-justify">I create visually compelling designs that combine creativity with strategy, ensuring every piece not only looks appealing but also communicates effectively. My work spans branding, logo design, social media graphics, print materials, digital assets, and UI visuals — each crafted through a process of understanding the vision, exploring creative concepts, and refining them into polished results. For me, design is more than decoration; it’s a problem-solving tool that tells stories, builds recognition, and inspires action. Click to view details and samples.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.article
                key={p.id}
                className="rounded-2xl overflow-hidden bg-white border shadow-sm cursor-pointer"
                whileHover={{ scale: 1.03 }}
                onClick={() => {
                  setSelected(p);
                  setGalleryIndex(0);
                }}
              >
                <img
                  src={p.gallery[0]}
                  alt={p.title}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-2">
                    {p.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* ✅ ABOUT */}
        <section id="about" className="mt-24 relative">
          <div className="max-w-12xl mx-auto px-6">
            <h2 className="text-5xl font-extrabold text-gray-900 text-center">
              About Me
            </h2>
            <p className="mt-2 text-center text-gray-700 max-w-8xl mx-auto">
              Hello! I'm <span className="font-semibold">Gabriel</span>, a
              passionate graphic and UI designer from Ogoja, Nigeria. Over the past
              5+ years, I’ve helped startups and companies build strong brand
              identities and engaging digital products. I combine storytelling,
              design strategy, and technical skills to deliver meaningful
              visuals that resonate.
            </p>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left: Image + Social */}
              <div className="flex flex-col items-center">
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200">
                    <img
                      src="/headshot.png"
                      alt="Designer portrait"
                      className="w-72 h-80 object-cover"
                    />
                  </div>
                </div>

                {/* Social Icons */}
                {/* Social Icons */}
                <div className="flex gap-5 mt-6 text-gray-500">
                  <a
                    href="https://wa.me/2348068941990"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-green-500 transition"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                  </a>
                  <a
                    href="https://instagram.com/yourhandle"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-500 transition"
                  >
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-600 transition"
                  >
                    <FontAwesomeIcon icon={faLinkedin} size="lg" />
                  </a>

                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-600 transition"
                  >
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                  </a>
                </div>

              </div>

              {/* Right: Content */}
              <div>
                <p className="text-gray-700 text-justify leading-relaxed mb-6">
                  These are my Skillset and Expertise as Graphics Designer
                </p>


                {/* ✅ Dynamic Skills List */}
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ✅ CONTACT */}
        <section id="contact" className="mt-24">
          <h2 className="text-3xl font-bold">Contact</h2>
          <p className="mt-2 text-gray-600">
            Interested in working together? Let’s talk.
          </p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            {/* Left: Contact Actions */}
            <div className="flex flex-col gap-4">
              <div className="mt-6 max-w-lg">
                <MyForm />
              </div>

            </div>

            {/* Right: Google Maps Embed */}
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                title="My Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.123456789!2d8.123456!3d6.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104123456789abcd%3A0x123456789abcdef!2sOgoja%2C%20Cross%20River%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1691234567890!5m2!1sen!2sus"
                width="100%"
                height="320"
                className="border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
              {/* Social Links */}
              <div className="flex justify-center gap-6 mt-12 text-gray-600">
                <a
                  href="https://wa.me/2348068941990?text=Hi%20Gabriel,%20I'm%20interested%20in%20working%20with%20you"
                  target="_blank"
                  className="hover:text-green-600 text-4xl"
                  rel="noreferrer"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://instagram.com/yourprofile"
                  target="_blank"
                  className="hover:text-pink-600 text-4xl"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  className="hover:text-blue-600 text-4xl"
                  rel="noreferrer"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

          </div>


        </section>


        {/* ✅ PROJECT MODAL */}
        <AnimatePresence>
          {selected && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden relative z-50"
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ duration: 0.25 }}
              >
                {/* MAIN IMAGE */}
                <div className="relative">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={galleryIndex}
                      src={selected.gallery[galleryIndex]}
                      alt={selected.title}
                      className="w-full h-full object-contain mx-auto p-2 bg-black"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.4 }}
                    />
                  </AnimatePresence>

                  {/* NAV BTNS */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-white/80 rounded-full shadow hover:bg-white"
                  >
                    &larr;
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-white/80 rounded-full shadow hover:bg-white"
                  >
                    &rarr;
                  </button>
                </div>

                {/* THUMBNAILS */}
                <div className="flex gap-3 overflow-x-auto px-4 py-3 bg-gray-50">
                  {selected.gallery.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`Thumb ${i + 1}`}
                      className={`w-20 h-16 object-cover rounded-md cursor-pointer border-2 ${i === galleryIndex
                        ? "border-purple-500"
                        : "border-transparent"
                        }`}
                      onClick={() => setGalleryIndex(i)}
                    />
                  ))}
                </div>

                {/* INFO */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold">{selected.title}</h3>
                  <p className="mt-3 text-gray-600">{selected.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {selected.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full bg-gray-100"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* BACKDROP */}
              <motion.div
                className="fixed inset-0 bg-black z-40"
                onClick={() => setSelected(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* ✅ FOOTER */}
      <footer className="mt-16 pb-12 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} KponkiusDev — Made with Creativity at it's Peak
      </footer>
    </div>
  );
}
