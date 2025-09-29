import React from 'react'

const About = () => {
  const features = [
    {
      icon: 'bx-shield-alt-2',
      title: 'أمان عالي',
      description: 'تشفير متقدم وحماية متعددة الطبقات لضمان أمان أموالك'
    },
    {
      icon: 'bx-mobile-alt',
      title: 'سهولة الاستخدام',
      description: 'واجهة بسيطة وسهلة تناسب جميع المستخدمين'
    },
    {
      icon: 'bx-support',
      title: 'دعم 24/7',
      description: 'فريق دعم متاح على مدار الساعة لمساعدتك'
    }
  ]

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="about-content">
              <h2 className="section-title mb-4">
                لماذا تختار 
                <span className="gradient-text"> محفظتنا؟</span>
              </h2>
              <p className="section-description mb-4">
                نحن نقدم أفضل حلول المحافظ الرقمية مع التركيز على الأمان والسهولة. 
                محفظتنا مصممة خصيصاً للمستخدمين العرب مع دعم كامل للغة العربية 
                وأحدث تقنيات الحماية.
              </p>
              
              <div className="about-stats">
                <div className="row">
                  <div className="col-6 mb-3">
                    <div className="stat-box">
                      <h3 className="stat-number gradient-text">100K+</h3>
                      <p className="stat-label">مستخدم راضٍ</p>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="stat-box">
                      <h3 className="stat-number gradient-text">50+</h3>
                      <p className="stat-label">عملة مدعومة</p>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="stat-box">
                      <h3 className="stat-number gradient-text">99.9%</h3>
                      <p className="stat-label">وقت التشغيل</p>
                    </div>
                  </div>
                  <div className="col-6 mb-3">
                    <div className="stat-box">
                      <h3 className="stat-number gradient-text">24/7</h3>
                      <p className="stat-label">دعم فني</p>
                    </div>
                  </div>
                </div>
              </div>

              <button className="btn btn-primary btn-lg">
                <i className="bx bx-download me-2"></i>
                تحميل الآن
              </button>
            </div>
          </div>
          
          <div className="col-lg-6" data-aos="fade-left">
            <div className="about-image text-center">
              <img 
                src="/assets/images/about-1.png" 
                alt="About Wallet" 
                className="img-fluid"
              />
            </div>
          </div>
        </div>

        <div className="row mt-5">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="about-card card h-100">
                <div className="card-body text-center">
                  <div className="about-icon">
                    <i className={`bx ${feature.icon}`}></i>
                  </div>
                  <h4 className="card-title">{feature.title}</h4>
                  <p className="card-text">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .about-section {
          background: white;
          padding: 100px 0;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #333;
          line-height: 1.2;
        }

        .section-description {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.8;
        }

        .gradient-text {
          background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-box {
          text-align: center;
          padding: 1rem;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          font-size: 0.9rem;
          color: #666;
          margin: 0;
        }

        .about-image img {
          max-width: 100%;
          height: auto;
          filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1));
        }

        .about-card {
          border: none;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          padding: 1rem;
        }

        .about-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }

        .about-icon {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 2rem;
          color: white;
        }

        .card-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 1rem;
        }

        .card-text {
          color: #666;
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .about-stats {
            margin-bottom: 2rem;
          }

          .stat-number {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  )
}

export default About