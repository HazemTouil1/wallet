import React from 'react'

const Features = () => {
  const features = [
    {
      icon: 'bx-shield-alt-2',
      title: 'أمان متقدم',
      description: 'تشفير AES-256 وحماية متعددة الطبقات لضمان أمان محفظتك'
    },
    {
      icon: 'bx-mobile-alt',
      title: 'متوافق مع الجوال',
      description: 'تطبيق محسن للهواتف الذكية مع واجهة سهلة الاستخدام'
    },
    {
      icon: 'bx-transfer-alt',
      title: 'تحويلات سريعة',
      description: 'إرسال واستقبال العملات المشفرة بسرعة وأمان'
    },
    {
      icon: 'bx-support',
      title: 'دعم متعدد العملات',
      description: 'دعم أكثر من 50 عملة مشفرة مختلفة'
    },
    {
      icon: 'bx-chart',
      title: 'تتبع الأسعار',
      description: 'متابعة أسعار العملات المشفرة في الوقت الفعلي'
    },
    {
      icon: 'bx-history',
      title: 'سجل المعاملات',
      description: 'تتبع جميع معاملاتك مع تفاصيل شاملة'
    }
  ]

  return (
    <section id="features" className="section features-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">
              مميزات 
              <span className="gradient-text">رائعة</span>
            </h2>
            <p className="section-description">
              اكتشف المميزات المتقدمة التي تجعل محفظتنا الخيار الأمثل 
              لإدارة عملاتك المشفرة بأمان وسهولة
            </p>
          </div>
        </div>

        <div className="row">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="col-lg-4 col-md-6 mb-4" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="feature-card card h-100">
                <div className="card-body">
                  <div className="feature-icon">
                    <i className={`bx ${feature.icon}`}></i>
                  </div>
                  <h4 className="card-title">{feature.title}</h4>
                  <p className="card-text">{feature.description}</p>
                  <a href="#" className="feature-link">
                    اعرف المزيد
                    <i className="bx bx-left-arrow-alt ms-1"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-lg-6" data-aos="fade-right">
            <div className="feature-highlight">
              <h3 className="highlight-title">
                تجربة مستخدم 
                <span className="gradient-text">استثنائية</span>
              </h3>
              <p className="highlight-description">
                صممنا واجهة المستخدم لتكون بسيطة وسهلة الاستخدام، مع دعم كامل 
                للغة العربية وتجربة محسنة للمستخدمين في المنطقة العربية.
              </p>
              <ul className="highlight-list">
                <li>
                  <i className="bx bx-check text-success me-2"></i>
                  واجهة عربية بالكامل
                </li>
                <li>
                  <i className="bx bx-check text-success me-2"></i>
                  تصميم متجاوب لجميع الأجهزة
                </li>
                <li>
                  <i className="bx bx-check text-success me-2"></i>
                  تحديثات مستمرة ومجانية
                </li>
                <li>
                  <i className="bx bx-check text-success me-2"></i>
                  دعم فني باللغة العربية
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="feature-image text-center">
              <img 
                src="/assets/images/works-img-1.png" 
                alt="Features" 
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .features-section {
          background: #f8f9fa;
          padding: 100px 0;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 1rem;
        }

        .section-description {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.8;
          max-width: 600px;
          margin: 0 auto;
        }

        .gradient-text {
          background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .feature-card {
          background: white;
          border: none;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          padding: 1rem;
          text-align: center;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .feature-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          font-size: 1.8rem;
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
          margin-bottom: 1.5rem;
        }

        .feature-link {
          color: #6c5ce7;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .feature-link:hover {
          color: #5a4fcf;
          text-decoration: none;
        }

        .feature-highlight {
          padding: 2rem 0;
        }

        .highlight-title {
          font-size: 2rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 1.5rem;
        }

        .highlight-description {
          font-size: 1.1rem;
          color: #666;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .highlight-list {
          list-style: none;
          padding: 0;
        }

        .highlight-list li {
          padding: 0.5rem 0;
          font-size: 1rem;
          color: #333;
        }

        .feature-image img {
          max-width: 100%;
          height: auto;
          filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1));
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .highlight-title {
            font-size: 1.5rem;
          }

          .feature-card {
            margin-bottom: 2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Features