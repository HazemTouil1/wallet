import React from 'react'

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="row align-items-center min-vh-100">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="hero-content">
              <h1 className="hero-title">
                محفظة رقمية
                <span className="d-block gradient-text">آمنة وسهلة</span>
              </h1>
              <p className="hero-subtitle">
                احتفظ بعملاتك المشفرة بأمان تام مع أحدث تقنيات الحماية والتشفير. 
                تجربة مستخدم سلسة وواجهة عربية بالكامل.
              </p>
              <div className="hero-buttons">
                <button 
                  className="btn btn-primary btn-lg me-3 mb-2"
                  onClick={() => scrollToSection('about')}
                >
                  <i className="bx bx-download me-2"></i>
                  تحميل التطبيق
                </button>
                <button 
                  className="btn btn-outline-light btn-lg mb-2"
                  onClick={() => scrollToSection('features')}
                >
                  <i className="bx bx-play-circle me-2"></i>
                  شاهد العرض التوضيحي
                </button>
              </div>
              <div className="hero-stats mt-4">
                <div className="row">
                  <div className="col-4">
                    <div className="stat-item">
                      <h3 className="stat-number">100K+</h3>
                      <p className="stat-label">مستخدم نشط</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-item">
                      <h3 className="stat-number">50+</h3>
                      <p className="stat-label">عملة مدعومة</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="stat-item">
                      <h3 className="stat-number">99.9%</h3>
                      <p className="stat-label">وقت التشغيل</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="hero-image-container text-center">
              <img 
                src="/assets/images/banner1.png" 
                alt="Wallet App" 
                className="hero-image img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="floating-elements">
        <div className="floating-element" style={{top: '20%', left: '10%'}}>
          <i className="bx bx-bitcoin"></i>
        </div>
        <div className="floating-element" style={{top: '60%', right: '15%'}}>
          <i className="bx bx-shield-alt-2"></i>
        </div>
        <div className="floating-element" style={{bottom: '20%', left: '20%'}}>
          <i className="bx bx-wallet"></i>
        </div>
      </div>

      <style jsx>{`
        .hero-section {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          position: relative;
          overflow: hidden;
        }

        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('/assets/images/banner-bg.jpg') center/cover;
          opacity: 0.1;
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          color: white;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          line-height: 1.2;
        }

        .gradient-text {
          background: linear-gradient(135deg, #ffeaa7 0%, #fab1a0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-subtitle {
          font-size: 1.25rem;
          margin-bottom: 2rem;
          opacity: 0.9;
          line-height: 1.6;
        }

        .hero-image {
          max-width: 100%;
          height: auto;
          filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
          animation: float 6s ease-in-out infinite;
        }

        .stat-item {
          text-align: center;
          color: white;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #ffeaa7;
        }

        .stat-label {
          font-size: 0.9rem;
          opacity: 0.8;
          margin: 0;
        }

        .floating-elements {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
        }

        .floating-element {
          position: absolute;
          width: 60px;
          height: 60px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1.5rem;
          animation: float 8s ease-in-out infinite;
        }

        .floating-element:nth-child(2) {
          animation-delay: -2s;
        }

        .floating-element:nth-child(3) {
          animation-delay: -4s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          
          .hero-subtitle {
            font-size: 1.1rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }

          .floating-element {
            width: 40px;
            height: 40px;
            font-size: 1rem;
          }
        }

        @media (max-width: 576px) {
          .hero-title {
            font-size: 2rem;
          }

          .hero-buttons .btn {
            width: 100%;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero