// pages/HomePage.js
import lyceeImage from "../images/azail.jpg";
import { SCHOOL_NAME, SCHOOL_YEAR, STATS } from "../Data/constants";
import { BI } from "../Utils/icons";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section
        className="position-relative d-flex align-items-center"
        style={{
          minHeight: "100vh",
          paddingTop: "76px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background Image with Blue Fade Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url(${lyceeImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Blue Fade Gradient Overlay */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(30, 58, 95, 0.75) 50%, rgba(29, 78, 216, 0.8) 100%)",
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row justify-content-center text-center">
            <div className="col-lg-8" data-aos="fade-up">
              <span className="badge bg-white bg-opacity-25 text-white mb-4 px-4 py-3 rounded-pill d-inline-flex align-items-center gap-2">
                <BI icon="bi-mortarboard-fill" marginEnd="me-0" />
                <span>السنة الدراسية {SCHOOL_YEAR}</span>
              </span>
              <h1 className="display-3 fw-bold text-white mb-4">
                {SCHOOL_NAME}
              </h1>
              <p className="lead text-info mb-5 fs-4">
                نبني أجيالاً بالعلم والقيم
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <button
                  className="btn btn-primary btn-lg px-5 py-3 rounded-pill shadow-lg d-inline-flex align-items-center gap-2"
                  onClick={() =>
                    document
                      .getElementById("about")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <span>اكتشف المؤسسة</span>
                  <BI icon="bi-arrow-left" marginEnd="me-0" />
                </button>
                <button className="btn btn-outline-light btn-lg px-5 py-3 rounded-pill d-inline-flex align-items-center gap-2">
                  <span>تحميل الدروس</span>
                  <BI icon="bi-download" marginEnd="me-0" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary bg-gradient py-4">
        <div className="container">
          <div className="row g-0">
            {STATS.map((stat, i) => (
              <div
                className="col-6 col-md-3"
                key={i}
                data-aos="flip-left"
                data-aos-delay={i * 100}
              >
                <div className="text-center p-4 p-md-5 border-start border-white border-opacity-25">
                  <BI
                    icon={stat.icon}
                    className="display-4 text-white mb-3"
                    style={{ opacity: 0.9, fontSize: "3rem" }}
                    marginEnd="me-0"
                  />
                  <div className="display-5 fw-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white-50">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6" data-aos="fade-left">
              <span className="badge bg-primary bg-opacity-10 text-primary mb-3 px-3 py-2 d-inline-flex align-items-center gap-2">
                <BI icon="bi-building" marginEnd="me-0" />
                <span>من نحن</span>
              </span>
              <h2 className="display-6 fw-bold mb-4">تعريف بالمؤسسة</h2>
              <p className="text-secondary mb-3 lh-base">
                ثثانوية حاج بن جعفر هي مؤسسة تربوية حديثة تم إنشاؤها لخدمة تلاميذ المنطقة وتوفير ظروف تعليمية أفضل لهم. سُمّيت هذه الثانوية تكريمًا لروح الشهيد حاج بن جعفر، الذي يُعد أول شهيد في المنطقة خلال ثورة التحرير الجزائرية، تقديرًا لتضحياته في سبيل الوطن.
تقع الثانوية في بلدية العزايل التابعة لدائرة بني سنوس، وقد تم افتتاحها سنة 2019، لتكون أول ثانوية في المنطقة وثاني ثانوية على مستوى الدائرة. ساهم افتتاحها في تخفيف معاناة التلاميذ الذين كانوا يضطرون للتنقل لمسافة بعيدة لمواصلة دراستهم.
وتلعب الثانوية اليوم دورًا مهمًا في دعم المسار التعليمي للشباب، وتعزيز التحصيل العلمي في المنطقة، مع الحفاظ على قيم الوطنية والاعتزاز بتاريخ الشهداء.
              </p>
              <p className="text-secondary mb-4 lh-base">
                تضم الثانوية ثلاثة مستويات دراسية: السنة الأولى، الثانية، والثالثة ثانوي، في شعبتي علوم تجريبية و آداب و فلسفة
              </p>
              <div className="row g-3">
                {[
                  { text: "مخابر علمية مجهزة", icon: "bi-ubuntu" },
                  {
                    text: "مكتبة", icon: "bi-journal-bookmark-fill",
                  },
                  { text: "قاعة إعلام آلي", icon: "bi-laptop" },
                  { text: "ملعب وقاعة رياضية", icon: "bi-dribbble" },
                ].map((feature, i) => (
                  <div
                    className="col-sm-6"
                    key={i}
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <div className="bg-success bg-opacity-10 p-3 rounded-3">
                        <BI
                          icon={feature.icon}
                          className="text-success fs-4"
                          marginEnd="me-0"
                        />
                      </div>
                      <span className="fw-medium">{feature.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6" data-aos="fade-right">
             <div
  className="rounded-4 overflow-hidden border"
  style={{ minHeight: "350px" }}
>
  <img
    src={lyceeImage} // ولا أي رابط صورة عندك
    alt="ثانوية حاج بن جعفر"
    className="w-100 h-100"
    style={{ objectFit: "cover", minHeight: "350px" }}
  />
</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" data-aos="fade-up">
            <span className="badge bg-primary bg-opacity-10 text-primary mb-3 px-3 py-2 d-inline-flex align-items-center gap-2">
              <BI icon="bi-rocket-takeoff-fill" marginEnd="me-0" />
              <span>روابط سريعة</span>
            </span>
            <h2 className="display-6 fw-bold">خدمات الموقع</h2>
          </div>
          <div className="row g-4">
            {[
              {
                icon: "bi-file-pdf-fill",
                title: "تحميل الدروس",
                desc: "جميع الدروس مرتبة حسب المستوى والمادة",
                color: "primary",
              },
              {
                icon: "bi-calendar-week-fill",
                title: "استعمال الزمن",
                desc: "جداول دراسية لجميع الأقسام",
                color: "success",
              },
              {
                icon: "bi-calendar-event-fill",
                title: "النشاطات",
                desc: "آخر الأخبار والفعاليات المدرسية",
                color: "warning",
              },
              {
                icon: "bi-headset",
                title: "اتصل بنا",
                desc: "تواصل مع إدارة المؤسسة",
                color: "danger",
              },
            ].map((card, i) => (
              <div
                className="col-sm-6 col-lg-3"
                key={i}
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="card h-100 border-0 shadow-sm hover-shadow-lg transition">
                  <div className="card-body text-center p-4">
                    <div
                      className={`bg-${card.color} bg-opacity-10 p-4 rounded-4 d-inline-block mb-4`}
                    >
                      <BI
                        icon={card.icon}
                        className={`display-6 text-${card.color}`}
                        style={{ fontSize: "2.5rem" }}
                        marginEnd="me-0"
                      />
                    </div>
                    <h3 className="h5 fw-bold mb-3">{card.title}</h3>
                    <p className="text-secondary small mb-0">{card.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}