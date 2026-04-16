// components/Navbar.js
import { NAV_LINKS, SCHOOL_NAME } from "../Data/constants";
import { BI } from "../Utils/icons";

export default function Navbar({ page, setPage }) {
  return (
    <nav 
      className="navbar navbar-expand-lg navbar-dark sticky-top"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)",
        zIndex: 1000,
        fontFamily: "'Cairo', 'Tajawal', 'Noto Sans Arabic', sans-serif",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="container py-2">
        <button
          className="navbar-brand d-flex align-items-center gap-3 border-0 bg-transparent"
          onClick={() => setPage("home")}
          style={{
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.02)"}
          onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)",
              borderRadius: "12px",
              padding: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 15px rgba(59,130,246,0.3)",
            }}
          >
            <BI
              icon="bi-building"
              style={{ fontSize: "1.5rem", color: "white" }}
              marginEnd="me-0"
            />
          </div>
          <div>
            <div 
              className="fw-bold" 
              style={{ 
                fontSize: "1.2rem", 
                letterSpacing: "0.5px",
                background: "linear-gradient(135deg, #ffffff 0%, #93c5fd 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {SCHOOL_NAME}
            </div>
            <div style={{ fontSize: "0.7rem", color: "#93c5fd", marginTop: "2px" }}>
             مديرية التربية لولاية تلمسان
            </div>
          </div>
        </button>
        
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-label="Toggle navigation"
          style={{
            boxShadow: "none",
            border: "1px solid rgba(255,255,255,0.2)",
            padding: "8px 12px",
          }}
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
                    background: page === link.id
                      ? "linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)"
                      : "transparent",
                    borderRadius: "12px",
                    padding: "10px 20px",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    fontSize: "0.95rem",
                    fontWeight: page === link.id ? "700" : "500",
                    letterSpacing: "0.3px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    if (page !== link.id) {
                      e.currentTarget.style.background = "rgba(59,130,246,0.2)";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (page !== link.id) {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.transform = "translateY(0)";
                    }
                  }}
                >
                  <BI 
                    icon={link.icon} 
                    marginEnd="me-0" 
                    style={{ 
                      fontSize: "1.1rem",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (page !== link.id) {
                        e.currentTarget.style.transform = "scale(1.1)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                  <span>{link.label}</span>
                  
                  {/* Active page indicator */}
                  {page === link.id && (
                    <div
                      style={{
                        position: "absolute",
                        bottom: "0",
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "30px",
                        height: "3px",
                        background: "linear-gradient(90deg, #60a5fa, #ffffff)",
                        borderRadius: "3px",
                      }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}