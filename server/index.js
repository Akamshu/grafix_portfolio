var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FaBars, FaTimes, FaPenNib, FaWhatsapp, FaInstagram, FaLinkedin, FaBriefcase, FaChalkboardTeacher, FaGraduationCap } from "react-icons/fa";
import { ReactTyped } from "react-typed";
import "react-tsparticles";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx("link", {
        rel: "shortcut icon",
        href: "/assets/img/projects/webui/kponkiuslogo.png",
        type: "image/x-icon"
      }), /* @__PURE__ */ jsx("title", {
        children: "Kponkius Graphics || Portfolio"
      }), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
function Success(props) {
  return /* @__PURE__ */ jsxs("div", { className: "p-6 border rounded-lg text-center bg-green-50", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-green-600 text-4xl mb-2", children: "✔" }),
    /* @__PURE__ */ jsx("h2", { className: "text-xl font-semibold", children: "Your message has been sent" }),
    /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-2", children: "Thanks for reaching out to Kponkius. I’ll reply as soon as possible — usually within 24 hours." }),
    /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(
      "button",
      {
        onClick: props.display,
        className: "px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700",
        children: "Thank you, Kponkius Client"
      }
    ) })
  ] });
}
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    __publicField(this, "setStatus", () => {
      this.setState({ status: "" });
    });
    __publicField(this, "handleMessageChange", (e) => {
      this.setState({ messageLength: e.target.value.length });
    });
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
      loading: false,
      messageLength: 0
    };
  }
  submitForm(e) {
    e.preventDefault();
    this.setState({ loading: true });
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      this.setState({ loading: false });
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS", messageLength: 0 });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
  render() {
    const { status, loading, messageLength } = this.state;
    return /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs(
        "form",
        {
          name: "contact",
          method: "post",
          action: "https://formspree.io/f/xzzaodke",
          onSubmit: this.submitForm,
          className: "grid gap-4",
          children: [
            /* @__PURE__ */ jsx("input", { type: "hidden", name: "form-name", value: "contact" }),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "text",
                name: "name",
                placeholder: "Your Name*",
                required: true,
                className: "w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-500"
              }
            ),
            /* @__PURE__ */ jsx(
              "input",
              {
                type: "email",
                name: "email",
                placeholder: "Your Email*",
                required: true,
                className: "w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-500"
              }
            ),
            /* @__PURE__ */ jsxs(
              "select",
              {
                name: "subject",
                required: true,
                className: "w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-500",
                children: [
                  /* @__PURE__ */ jsx("option", { value: "", children: "Select Subject*" }),
                  /* @__PURE__ */ jsx("option", { value: "Project Inquiry", children: "Project Inquiry" }),
                  /* @__PURE__ */ jsx("option", { value: "Collaboration", children: "Collaboration" }),
                  /* @__PURE__ */ jsx("option", { value: "General Question", children: "General Question" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "budget",
                  placeholder: "Estimated Budget",
                  className: "w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-500"
                }
              ),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "timeline",
                  placeholder: "Expected Timeline",
                  className: "w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-500"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  name: "message",
                  rows: 4,
                  minLength: 10,
                  placeholder: "Your Message*",
                  required: true,
                  onChange: this.handleMessageChange,
                  className: "w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-purple-500"
                }
              ),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-gray-500 mt-1", children: [
                messageLength,
                "/500 characters"
              ] })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "submit",
                className: "flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-white font-medium shadow hover:bg-purple-700",
                children: loading ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("span", { className: "animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" }),
                  "Sending..."
                ] }) : "Send Message"
              }
            ),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 text-center mt-2", children: "🔒 Your information is safe with me. I’ll only use it to respond to your inquiry." })
          ]
        }
      ),
      status === "SUCCESS" && /* @__PURE__ */ jsx(Success, { display: this.setStatus }),
      status === "ERROR" && /* @__PURE__ */ jsx("p", { className: "mt-4 text-center text-red-500 font-medium", children: "Ooops! There was an error." })
    ] });
  }
}
const navLinks = [{
  name: "Home",
  href: "#hero"
}, {
  name: "Work",
  href: "#work"
}, {
  name: "About",
  href: "#about"
}, {
  name: "Contact",
  href: "#contact"
}];
const home = UNSAFE_withComponentProps(function PortfolioPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [selected, setSelected] = useState(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      let current = "Home";
      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section && section instanceof HTMLElement && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
          current = link.name;
        }
      });
      setActiveLink(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const skills = ["Logo & Brand Identity Design", "Flyers, Brochures, Posters", "Packaging & Label Design", "Social Media Graphics & Ads", "Web & App UI/UX Design", "Typography & Custom Lettering", "Infographic & Icon Design", "Motion Graphics & Animation", "Adobe Illustrator", "Canva", "Figma (UI/UX & Prototyping)", "Motion Design", "Mockups", "Vector", "Adobe InDesign"];
  const timeline = [{
    year: "2017 – 2018",
    title: "Freelance Graphics Designer",
    place: "LCCC, Ikeja, Lagos State",
    description: "Started freelancing, creating flyers, posters, and brand identities for local businesses while building a foundation in design tools like CorelDRAW and Photoshop.",
    icon: /* @__PURE__ */ jsx(FaBriefcase, {
      className: "text-blue-500"
    })
  }, {
    year: "2021 – 2022",
    title: "UI/UX Designer (Internship)",
    place: "Kponkius Designz, Mubi Adamawa State",
    description: "Gained hands-on experience in web and app interface design. Worked with Figma to design user-friendly layouts and assisted developers in implementing responsive designs.",
    icon: /* @__PURE__ */ jsx(FaChalkboardTeacher, {
      className: "text-green-500"
    })
  }, {
    year: "2023 – Present",
    title: "Graphics & Web Designer",
    place: "Kponkius Dev, Ogoja, Cross River State",
    description: "Designed branding materials, social media graphics, and web assets that improved organizational communication and outreach impact.",
    icon: /* @__PURE__ */ jsx(FaBriefcase, {
      className: "text-purple-500"
    })
  }, {
    year: "Future",
    title: "Creative Director / Senior Designer",
    place: "Global Design & Web Development Industry",
    description: "Aiming to expand into advanced UI/UX, product design, and creative direction, delivering impactful designs for startups and global brands.",
    icon: /* @__PURE__ */ jsx(FaGraduationCap, {
      className: "text-yellow-500"
    })
  }];
  const projects = [{
    id: 1,
    title: "Brand Identity — Oryx Co.",
    tags: ["Branding", "Logo", "Guidelines"],
    description: "Full brand system including logo set, color palette, type scale and mockups.",
    gallery: ["https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&q=80", "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80", "https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&q=80"]
  }, {
    id: 2,
    title: "Packaging — Mazi Foods",
    tags: ["Packaging", "Illustration"],
    description: "Illustrated product packaging converging heritage motifs with modern layouts.",
    gallery: ["https://images.unsplash.com/photo-1542831371-d531d36971e6?w=1200&q=80", "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1200&q=80", "https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&q=80"]
  }, {
    id: 3,
    title: "UI Design — Travel App",
    tags: ["UI/UX", "Mobile", "Prototype"],
    description: "Clean mobile interface for a travel booking platform with smooth flows and dark mode support.",
    gallery: ["https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=80", "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80", "https://images.unsplash.com/photo-1558655146-d09347e92766?w=1200&q=80"]
  }, {
    id: 4,
    title: "Web Redesign — Cafe Delights",
    tags: ["Web Design", "Responsive", "Brand Refresh"],
    description: "A warm, modern look for a cafe website optimized for all screen sizes.",
    gallery: ["https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80", "https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&q=80", "https://images.unsplash.com/photo-1521747116042-5a810fda9664?w=1200&q=80"]
  }, {
    id: 5,
    title: "UX/UI Designs",
    tags: ["UX/UI Designs", "Mobile & Web Design", "Prototyping"],
    description: "Interactive mobile and web app interface designed with a clean layout, intuitive navigation, and modern color systems to enhance user engagement.",
    gallery: ["/assets/img/projects/webui/1.png", "/assets/img/projects/webui/2.JPG", "/assets/img/projects/webui/3.JPG", "/assets/img/projects/webui/4.JPG", "/assets/img/projects/webui/5.JPG", "/assets/img/projects/webui/6.JPG", "/assets/img/projects/webui/7.JPG", "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=1200&q=80"]
  }, {
    id: 6,
    title: "E-commerce Website — StyleHub",
    tags: ["UI/UX", "E-commerce", "Web Design"],
    description: "Fashion e-commerce interface with clean product cards and modern checkout flow.",
    gallery: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&q=80", "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80", "https://images.unsplash.com/photo-1517430816045-df4b7de1d0f3?w=1200&q=80"]
  }, {
    id: 7,
    title: "Infographic — Climate Impact",
    tags: ["Data Viz", "Illustration", "Infographics"],
    description: "Educational infographic showing climate change impacts with engaging illustrations.",
    gallery: ["https://images.unsplash.com/photo-1564869735327-3e94b47a7d96?w=1200&q=80", "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=1200&q=80", "https://images.unsplash.com/photo-1581092334607-1ff1c62a8bc9?w=1200&q=80"]
  }, {
    id: 8,
    title: "Logo Design — NexaTech",
    tags: ["Logo", "Identity"],
    description: "Minimal and futuristic logo design for a growing SaaS startup.",
    gallery: ["https://images.unsplash.com/photo-1612832021085-8a502b7f84f4?w=1200&q=80", "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=1200&q=80", "https://images.unsplash.com/photo-1620641788421-7a1d3b9d95f0?w=1200&q=80"]
  }, {
    id: 9,
    title: "Social Media Campaign",
    tags: ["Social Media", "Marketing", "Visuals"],
    description: "Carousel and post templates for Instagram, boosting brand engagement and consistency.",
    gallery: ["https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=1200&q=80", "https://images.unsplash.com/photo-1503602642458-232111445657?w=1200&q=80", "https://images.unsplash.com/photo-1589987607627-1e2f3a39aea5?w=1200&q=80"]
  }, {
    id: 10,
    title: "Magazine Layout — Art Today",
    tags: ["Editorial", "Print", "Layout"],
    description: "Editorial design project with clean grid-based magazine spreads and strong visual hierarchy.",
    gallery: ["https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=1200&q=80", "https://images.unsplash.com/photo-1520975918319-38a52f0d4c4b?w=1200&q=80", "https://images.unsplash.com/photo-1581093588401-97b6aefc9d3f?w=1200&q=80"]
  }];
  const nextImage = () => {
    if (selected) {
      setGalleryIndex((prev) => (prev + 1) % selected.gallery.length);
    }
  };
  const prevImage = () => {
    if (selected) {
      setGalleryIndex((prev) => (prev - 1 + selected.gallery.length) % selected.gallery.length);
    }
  };
  return /* @__PURE__ */ jsxs("div", {
    className: "relative",
    children: [/* @__PURE__ */ jsx("nav", {
      className: "fixed top-0 left-0 w-full z-50 bg-white shadow",
      children: /* @__PURE__ */ jsxs("div", {
        className: "container mx-auto flex justify-between items-center px-6 py-4",
        children: [/* @__PURE__ */ jsx("h1", {
          className: "text-2xl font-bold text-purple-600",
          children: "Kponkius"
        }), /* @__PURE__ */ jsx("ul", {
          className: "hidden md:flex space-x-8 font-medium",
          children: navLinks.map((link) => /* @__PURE__ */ jsx("li", {
            children: /* @__PURE__ */ jsx("a", {
              href: link.href,
              className: `transition ${activeLink === link.name ? "text-purple-600 font-bold" : "text-gray-700 hover:text-purple-600"}`,
              children: link.name
            })
          }, link.name))
        }), /* @__PURE__ */ jsx("button", {
          className: "md:hidden text-2xl text-gray-700",
          onClick: () => setMenuOpen(true),
          children: /* @__PURE__ */ jsx(FaBars, {})
        })]
      })
    }), /* @__PURE__ */ jsx(AnimatePresence, {
      children: menuOpen && /* @__PURE__ */ jsx(motion.div, {
        className: "fixed inset-0 z-50 bg-black bg-opacity-50",
        initial: {
          opacity: 0
        },
        animate: {
          opacity: 1
        },
        exit: {
          opacity: 0
        },
        onClick: () => setMenuOpen(false),
        children: /* @__PURE__ */ jsxs(motion.div, {
          className: "absolute top-0 right-0 h-full w-64 bg-white shadow-lg p-6",
          initial: {
            x: "100%"
          },
          animate: {
            x: 0
          },
          exit: {
            x: "100%"
          },
          transition: {
            type: "spring",
            stiffness: 300,
            damping: 30
          },
          onClick: (e) => e.stopPropagation(),
          children: [/* @__PURE__ */ jsx("button", {
            className: "text-2xl mb-6 text-gray-700",
            onClick: () => setMenuOpen(false),
            children: /* @__PURE__ */ jsx(FaTimes, {})
          }), /* @__PURE__ */ jsx("ul", {
            className: "flex flex-col space-y-6 text-lg font-medium",
            children: navLinks.map((link) => /* @__PURE__ */ jsx("li", {
              children: /* @__PURE__ */ jsx("a", {
                href: link.href,
                className: `block ${activeLink === link.name ? "text-purple-600 font-bold" : "text-gray-700 hover:text-purple-600"}`,
                onClick: () => setMenuOpen(false),
                children: link.name
              })
            }, link.name))
          })]
        })
      })
    }), /* @__PURE__ */ jsxs("main", {
      className: "max-w-7xl mx-auto px-6 py-16",
      children: [/* @__PURE__ */ jsxs("div", {
        id: "hero",
        className: "relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-screen",
        children: [/* @__PURE__ */ jsx("div", {
          className: "absolute inset-0 -z-10 animate-gradient"
        }), /* @__PURE__ */ jsx("style", {
          jsx: true,
          children: `
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
`
        }), /* @__PURE__ */ jsxs(motion.section, {
          initial: {
            opacity: 0,
            x: -24
          },
          animate: {
            opacity: 1,
            x: 0
          },
          transition: {
            duration: 0.6
          },
          className: "space-y-6",
          children: [/* @__PURE__ */ jsx("p", {
            className: "inline-block px-3 py-1 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 text-sm font-medium text-pink-600",
            children: "Portfolio • Branding • UI"
          }), /* @__PURE__ */ jsxs("h1", {
            className: "text-4xl sm:text-5xl font-extrabold leading-tight",
            children: [/* @__PURE__ */ jsxs("span", {
              className: "inline-flex items-center text-6xl",
              children: ["I CRE ", /* @__PURE__ */ jsx(FaPenNib, {
                className: "mx-1 transform -rotate-225 text-current"
              }), " TE"]
            }), /* @__PURE__ */ jsx("span", {
              className: "block text-purple-500",
              children: /* @__PURE__ */ jsx(ReactTyped, {
                strings: ["bold visual identities", " engaging UI/UX", " wow! concepts designs", "and bring ideas to life with motion"],
                typeSpeed: 50,
                backSpeed: 30,
                loop: true
              })
            })]
          }), /* @__PURE__ */ jsx("p", {
            className: "text-lg text-gray-600 text-justify",
            children: "I bring ideas to life with bold, creative designs that not only look stunning but also connect with your audience. From branding and logos to social media graphics, print materials, and digital assets, my work is all about blending creativity with strategy to make your brand stand out."
          }), /* @__PURE__ */ jsxs("div", {
            className: "flex items-center gap-4",
            children: [/* @__PURE__ */ jsx("a", {
              href: "#work",
              className: "inline-flex items-center gap-3 rounded-full px-4 py-2 bg-purple-600 text-white shadow hover:scale-[1.02] transform transition",
              children: "View Work"
            }), /* @__PURE__ */ jsx("a", {
              href: "#contact",
              className: "inline-flex items-center gap-3 rounded-full px-4 py-2 bg-pink-600 text-white shadow hover:scale-[1.02] transform transition",
              children: "Hire Me"
            })]
          })]
        }), /* @__PURE__ */ jsx(motion.section, {
          initial: {
            opacity: 0,
            scale: 0.98
          },
          animate: {
            opacity: 1,
            scale: 1
          },
          transition: {
            duration: 0.7
          },
          className: "relative",
          children: /* @__PURE__ */ jsxs("div", {
            className: "rounded-2xl overflow-hidden shadow-2xl",
            children: [/* @__PURE__ */ jsx("img", {
              src: "/headshot.png",
              alt: "Design studio desk",
              className: "w-full h-80 object-cover"
            }), /* @__PURE__ */ jsx("div", {
              className: "p-4 bg-white",
              children: /* @__PURE__ */ jsxs("div", {
                className: "flex items-center justify-between",
                children: [/* @__PURE__ */ jsxs("div", {
                  children: [/* @__PURE__ */ jsx("p", {
                    className: "text-sm text-gray-500",
                    children: "Graphics Designer"
                  }), /* @__PURE__ */ jsx("p", {
                    className: "font-semibold",
                    children: "Kponkius Gabriel"
                  })]
                }), /* @__PURE__ */ jsx("div", {
                  className: "text-sm text-gray-400",
                  children: "2025"
                })]
              })
            })]
          })
        })]
      }), /* @__PURE__ */ jsx("section", {
        id: "timeline",
        className: "mt-24 relative",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-4xl mx-auto px-6",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-5xl font-extrabold text-gray-900 text-center",
            children: "Career Timeline"
          }), /* @__PURE__ */ jsx("p", {
            className: "mt-2 text-center text-gray-700 max-w-2xl mx-auto",
            children: "A quick journey through my education, roles, and professional milestones."
          }), /* @__PURE__ */ jsx("div", {
            className: "mt-12 relative border-l-4 border-green-500",
            children: timeline.map((item, index) => /* @__PURE__ */ jsxs(motion.div, {
              initial: {
                opacity: 0,
                x: -50
              },
              whileInView: {
                opacity: 1,
                x: 0
              },
              transition: {
                duration: 0.6,
                delay: index * 0.2
              },
              viewport: {
                once: true
              },
              className: "mb-12 ml-6",
              children: [/* @__PURE__ */ jsx("span", {
                className: "absolute -left-6 flex items-center justify-center w-10 h-10 bg-white border-4 border-green-500 rounded-full",
                children: item.icon
              }), /* @__PURE__ */ jsx("h3", {
                className: "text-xl font-bold text-gray-900",
                children: item.title
              }), /* @__PURE__ */ jsx("p", {
                className: "text-sm text-gray-500",
                children: item.place
              }), /* @__PURE__ */ jsx("p", {
                className: "mt-2 text-gray-700",
                children: item.description
              }), /* @__PURE__ */ jsx("span", {
                className: "text-xs text-green-600 font-semibold",
                children: item.year
              })]
            }, index))
          })]
        })
      }), /* @__PURE__ */ jsxs("section", {
        id: "work",
        className: "mt-20",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-4xl font-bold",
          children: "Featured Projects"
        }), /* @__PURE__ */ jsx("p", {
          className: "mt-2 text-gray-600 text-justify",
          children: "I create visually compelling designs that combine creativity with strategy, ensuring every piece not only looks appealing but also communicates effectively. My work spans branding, logo design, social media graphics, print materials, digital assets, and UI visuals — each crafted through a process of understanding the vision, exploring creative concepts, and refining them into polished results. For me, design is more than decoration; it’s a problem-solving tool that tells stories, builds recognition, and inspires action. Click to view details and samples."
        }), /* @__PURE__ */ jsx("div", {
          className: "mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
          children: projects.map((p) => /* @__PURE__ */ jsxs(motion.article, {
            className: "rounded-2xl overflow-hidden bg-white border shadow-sm cursor-pointer",
            whileHover: {
              scale: 1.03
            },
            onClick: () => {
              setSelected(p);
              setGalleryIndex(0);
            },
            children: [/* @__PURE__ */ jsx("img", {
              src: p.gallery[0],
              alt: p.title,
              className: "w-full h-44 object-cover"
            }), /* @__PURE__ */ jsxs("div", {
              className: "p-4",
              children: [/* @__PURE__ */ jsx("h3", {
                className: "font-semibold",
                children: p.title
              }), /* @__PURE__ */ jsx("p", {
                className: "mt-2 text-sm text-gray-500 line-clamp-2",
                children: p.description
              })]
            })]
          }, p.id))
        })]
      }), /* @__PURE__ */ jsx("section", {
        id: "about",
        className: "mt-24 relative",
        children: /* @__PURE__ */ jsxs("div", {
          className: "max-w-12xl mx-auto px-6",
          children: [/* @__PURE__ */ jsx("h2", {
            className: "text-5xl font-extrabold text-gray-900 text-center",
            children: "About Me"
          }), /* @__PURE__ */ jsxs("p", {
            className: "mt-2 text-center text-gray-700 max-w-8xl mx-auto",
            children: ["Hello! I'm ", /* @__PURE__ */ jsx("span", {
              className: "font-semibold",
              children: "Gabriel"
            }), ", a passionate graphic and UI designer from Ogoja, Nigeria. Over the past 5+ years, I’ve helped startups and companies build strong brand identities and engaging digital products. I combine storytelling, design strategy, and technical skills to deliver meaningful visuals that resonate."]
          }), /* @__PURE__ */ jsxs("div", {
            className: "mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center",
            children: [/* @__PURE__ */ jsxs("div", {
              className: "flex flex-col items-center",
              children: [/* @__PURE__ */ jsx("div", {
                className: "relative",
                children: /* @__PURE__ */ jsx("div", {
                  className: "rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200",
                  children: /* @__PURE__ */ jsx("img", {
                    src: "/headshot.png",
                    alt: "Designer portrait",
                    className: "w-72 h-80 object-cover"
                  })
                })
              }), /* @__PURE__ */ jsxs("div", {
                className: "flex gap-5 mt-6 text-gray-500",
                children: [/* @__PURE__ */ jsx("a", {
                  href: "https://wa.me/2348068941990",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "hover:text-green-500 transition",
                  children: /* @__PURE__ */ jsx(FontAwesomeIcon, {
                    icon: faWhatsapp,
                    size: "lg"
                  })
                }), /* @__PURE__ */ jsx("a", {
                  href: "https://instagram.com/yourhandle",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "hover:text-pink-500 transition",
                  children: /* @__PURE__ */ jsx(FontAwesomeIcon, {
                    icon: faInstagram,
                    size: "lg"
                  })
                }), /* @__PURE__ */ jsx("a", {
                  href: "https://linkedin.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "hover:text-purple-600 transition",
                  children: /* @__PURE__ */ jsx(FontAwesomeIcon, {
                    icon: faLinkedin,
                    size: "lg"
                  })
                }), /* @__PURE__ */ jsx("a", {
                  href: "https://github.com",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "hover:text-purple-600 transition",
                  children: /* @__PURE__ */ jsx(FontAwesomeIcon, {
                    icon: faGithub,
                    size: "lg"
                  })
                })]
              })]
            }), /* @__PURE__ */ jsxs("div", {
              children: [/* @__PURE__ */ jsx("p", {
                className: "text-gray-700 text-justify leading-relaxed mb-6",
                children: "These are my Skillset and Expertise as Graphics Designer"
              }), /* @__PURE__ */ jsx("div", {
                className: "flex flex-wrap gap-3",
                children: skills.map((skill, i) => /* @__PURE__ */ jsx("span", {
                  className: "px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium",
                  children: skill
                }, i))
              })]
            })]
          })]
        })
      }), /* @__PURE__ */ jsxs("section", {
        id: "contact",
        className: "mt-24",
        children: [/* @__PURE__ */ jsx("h2", {
          className: "text-3xl font-bold",
          children: "Contact"
        }), /* @__PURE__ */ jsx("p", {
          className: "mt-2 text-gray-600",
          children: "Interested in working together? Let’s talk."
        }), /* @__PURE__ */ jsxs("div", {
          className: "mt-6 grid grid-cols-1 md:grid-cols-2 gap-8",
          children: [/* @__PURE__ */ jsx("div", {
            className: "flex flex-col gap-4",
            children: /* @__PURE__ */ jsx("div", {
              className: "mt-6 max-w-lg",
              children: /* @__PURE__ */ jsx(MyForm, {})
            })
          }), /* @__PURE__ */ jsxs("div", {
            className: "rounded-lg overflow-hidden shadow-lg",
            children: [/* @__PURE__ */ jsx("iframe", {
              title: "My Location",
              src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.123456789!2d8.123456!3d6.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104123456789abcd%3A0x123456789abcdef!2sOgoja%2C%20Cross%20River%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1691234567890!5m2!1sen!2sus",
              width: "100%",
              height: "320",
              className: "border-0",
              allowFullScreen: true,
              loading: "lazy"
            }), /* @__PURE__ */ jsxs("div", {
              className: "flex justify-center gap-6 mt-12 text-gray-600",
              children: [/* @__PURE__ */ jsx("a", {
                href: "https://wa.me/2348068941990?text=Hi%20Gabriel,%20I'm%20interested%20in%20working%20with%20you",
                target: "_blank",
                className: "hover:text-green-600 text-4xl",
                rel: "noreferrer",
                children: /* @__PURE__ */ jsx(FaWhatsapp, {})
              }), /* @__PURE__ */ jsx("a", {
                href: "https://instagram.com/yourprofile",
                target: "_blank",
                className: "hover:text-pink-600 text-4xl",
                rel: "noreferrer",
                children: /* @__PURE__ */ jsx(FaInstagram, {})
              }), /* @__PURE__ */ jsx("a", {
                href: "https://linkedin.com/in/yourprofile",
                target: "_blank",
                className: "hover:text-blue-600 text-4xl",
                rel: "noreferrer",
                children: /* @__PURE__ */ jsx(FaLinkedin, {})
              })]
            })]
          })]
        })]
      }), /* @__PURE__ */ jsx(AnimatePresence, {
        children: selected && /* @__PURE__ */ jsxs(motion.div, {
          className: "fixed inset-0 z-50 flex items-center justify-center p-6",
          initial: {
            opacity: 1
          },
          animate: {
            opacity: 1
          },
          exit: {
            opacity: 0
          },
          children: [/* @__PURE__ */ jsxs(motion.div, {
            className: "max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden relative z-50",
            initial: {
              scale: 0.95,
              y: 20
            },
            animate: {
              scale: 1,
              y: 0
            },
            exit: {
              scale: 0.95,
              y: 20
            },
            transition: {
              duration: 0.25
            },
            children: [/* @__PURE__ */ jsxs("div", {
              className: "relative",
              children: [/* @__PURE__ */ jsx(AnimatePresence, {
                mode: "wait",
                children: /* @__PURE__ */ jsx(motion.img, {
                  src: selected.gallery[galleryIndex],
                  alt: selected.title,
                  className: "w-full h-96 object-cover",
                  initial: {
                    opacity: 0,
                    x: 50
                  },
                  animate: {
                    opacity: 1,
                    x: 0
                  },
                  exit: {
                    opacity: 0,
                    x: -50
                  },
                  transition: {
                    duration: 0.4
                  }
                }, galleryIndex)
              }), /* @__PURE__ */ jsx("button", {
                onClick: prevImage,
                className: "absolute left-2 top-1/2 -translate-y-1/2 p-3 bg-white/80 rounded-full shadow hover:bg-white",
                children: "←"
              }), /* @__PURE__ */ jsx("button", {
                onClick: nextImage,
                className: "absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-white/80 rounded-full shadow hover:bg-white",
                children: "→"
              })]
            }), /* @__PURE__ */ jsx("div", {
              className: "flex gap-3 overflow-x-auto px-4 py-3 bg-gray-50",
              children: selected.gallery.map((img, i) => /* @__PURE__ */ jsx("img", {
                src: img,
                alt: `Thumb ${i + 1}`,
                className: `w-20 h-16 object-cover rounded-md cursor-pointer border-2 ${i === galleryIndex ? "border-purple-500" : "border-transparent"}`,
                onClick: () => setGalleryIndex(i)
              }, i))
            }), /* @__PURE__ */ jsxs("div", {
              className: "p-6",
              children: [/* @__PURE__ */ jsx("h3", {
                className: "text-2xl font-bold",
                children: selected.title
              }), /* @__PURE__ */ jsx("p", {
                className: "mt-3 text-gray-600",
                children: selected.description
              }), /* @__PURE__ */ jsx("div", {
                className: "mt-4 flex flex-wrap gap-2",
                children: selected.tags.map((t) => /* @__PURE__ */ jsx("span", {
                  className: "text-xs px-3 py-1 rounded-full bg-gray-100",
                  children: t
                }, t))
              })]
            })]
          }), /* @__PURE__ */ jsx(motion.div, {
            className: "fixed inset-0 bg-black z-40",
            onClick: () => setSelected(null),
            initial: {
              opacity: 0
            },
            animate: {
              opacity: 0.4
            },
            exit: {
              opacity: 0
            }
          })]
        })
      })]
    }), /* @__PURE__ */ jsxs("footer", {
      className: "mt-16 pb-12 text-center text-gray-500 text-sm",
      children: ["© ", (/* @__PURE__ */ new Date()).getFullYear(), " KponkiusDev — Made with Creativity at it's Peak"]
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-BWBOP0Ds.js", "imports": ["/assets/chunk-PVWAREVJ-BGDX7Rsd.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-_d4o_tQH.js", "imports": ["/assets/chunk-PVWAREVJ-BGDX7Rsd.js"], "css": ["/assets/root-Cb3UxELI.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-DMu2Pykq.js", "imports": ["/assets/chunk-PVWAREVJ-BGDX7Rsd.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-020c5165.js", "version": "020c5165", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
