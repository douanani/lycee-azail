// components/Navbar.js
import { NAV_LINKS, SCHOOL_NAME } from "../Data/constants";
import { BI } from "../Utils/icons";

export default function Navbar({ page, setPage }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-lg sticky-top"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
        zIndex: 1000,
      }}
    >
      <div className="container">
      <button
  className="navbar-brand d-flex align-items-center gap-2 border-0 bg-transparent"
  onClick={() => setPage("home")}
>
          <BI
            icon="bi-building"
            style={{ fontSize: "1.8rem", color: "#60a5fa" }}
            marginEnd="me-0"
          />
          <div>
            <div className="fw-bold" style={{ fontSize: "1rem" }}>
              {SCHOOL_NAME}
            </div>
          </div>
        </button>
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2">
            {NAV_LINKS.map((link) => (
              <li className="nav-item" key={link.id}>
                <button
                  className={`nav-link btn btn-link text-white d-flex align-items-center gap-2 ${page === link.id ? "active fw-bold" : ""}`}
                  onClick={() => setPage(link.id)}
                  style={{
                    background:
                      page === link.id
                        ? "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)"
                        : "transparent",
                    borderRadius: "10px",
                    padding: "8px 16px",
                    transition: "all 0.3s ease",
                  }}
                >
                  <BI icon={link.icon} marginEnd="me-0" />
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}