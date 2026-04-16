// App.js
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

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

export default function App() {
  const [page, setPage] = useState("home");

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
      disable: false,
    });
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
      <main className="flex-grow-1">{renderPage()}</main>
      <Footer setPage={setPage} />
    </div>
  );
}