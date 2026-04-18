// App.js
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
import { Analytics } from "@vercel/analytics/react"


// Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage";
import LessonsPage from "./Pages/LessonsPage";
import ActivitiesPage from "./Pages/ActivitiesPage";
import TimetablePage from "./Pages/TimetablePage";
import ContactPage from "./Pages/ContactPage";

// Import global styles
import "./Styles/global.css";

// Import Bootstrap JS dynamically
if (typeof window !== "undefined") {
  import("bootstrap/dist/js/bootstrap.bundle.min.js");
}

// Add Bootstrap Icons CSS
const bootstrapIconsLink = document.createElement("link");
bootstrapIconsLink.rel = "stylesheet";
bootstrapIconsLink.href =
  "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css";
document.head.appendChild(bootstrapIconsLink);

// Page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn",
    },
  },
};

export default function App() {
  const [page, setPage] = useState("home");

  // Optional: Add scroll reveal animation for elements
  useEffect(() => {
    // You can add intersection observer logic here if needed
    // Framer Motion works with whileInView prop on components
  }, []);

  const renderPage = () => {
    switch (page) {
      case "home":
        return <HomePage />;
      case "lessons":
        return <LessonsPage />;
      case "activities":
        return <ActivitiesPage />;
      case "timetable":
        return <TimetablePage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="d-flex flex-column min-vh-100" dir="rtl">
      <link
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <Navbar page={page} setPage={setPage} />
      <main className="flex-grow-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer setPage={setPage} />
      <Analytics/>
    </div>
  );
}