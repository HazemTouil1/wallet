import React from 'react'

const Partners = () => {
  const partners = [
    {
      name: 'CoinGecko',
      logo: '/assets/images/partners/cg.png',
      description: 'شريك في بيانات العملات المشفرة'
    },
    {
      name: 'CoinMarketCap',
      logo: '/assets/images/partners/cmc.png',
      description: 'مزود بيانات السوق'
    },
    {
      name: 'DappRadar',
      logo: '/assets/images/partners/dapp radar.png',
      description: 'تتبع التطبيقات اللامركزية'
    },
    {
      name: 'DEX',
      logo: '/assets/images/partners/dex.png',
      description: 'منصة التداول اللامركزي'
    },
    {
      name: 'Nomics',
      logo: '/assets/images/partners/nomics.png',
      description: 'بيانات العملات المشفرة'
    },
    {
      name: 'PancakeSwap',
      logo: '/assets/images/partners/pancake.png',
      description: 'منصة التداول اللامركزي'
    },
    {
      name: 'PinkSale',
      logo: '/assets/images/partners/pinksale.png',
      description: 'منصة إطلاق المشاريع'
    },
    {
      name: 'Wallet Connect',
      logo: '/assets/images/partners/wallet.png',
      description: 'بروتوكول ربط المحافظ'
    }
  ]

  return (
    <section id="partners" className="section partners-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">
              شركاؤنا 
              <span className="gradient-text">الموثوقون</span>
            </h2>
            <p className="section-description">
              نتعاون مع أفضل الشركات في مجال العملات المشفرة لنقدم لك 
              أفضل خدمة ممكنة وأحدث التقنيات
            </p>
          </div>
        </div>

        <div className="row align-items-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="col-lg-3 col-md-4 col-6 mb-4" 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
            >
              <div className="partner-item text-center">
                <div className="partner-logo-container">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="partner-logo"
                    title={partner.description}
                  />
                </div>
                <h5 className="partner-name">{partner.name}</h5>
                <p className="partner-description">{partner.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5">
          <div className="col-lg-12 text-center" data-aos="fade-up">
            <div className="partnership-cta">
              <h3 className="cta-title">
                هل تريد أن تصبح شريكاً؟
              </h3>
              <p className="cta-description">
                انضم إلى شبكة شركائنا واستفد من فرص النمو والتطوير المشترك
              </p>
              <button className="btn btn-primary btn-lg">
                <i className="bx bx-handshake me-2"></i>
                تواصل معنا
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="row mt-5">
          <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up">
            <div className="trust-indicator text-center">
              <div className="trust-icon">
                <i className="bx bx-shield-alt-2"></i>
              </div>
              <h4 className="trust-number">100%</h4>
              <p className="trust-label">أمان مضمون</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="100">
            <div className="trust-indicator text-center">
              <div className="trust-icon">
                <i className="bx bx-check-circle"></i>
              </div>
              <h4 className="trust-number">50+</h4>
              <p className="trust-label">شريك موثوق</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="200">
            <div className="trust-indicator text-center">
              <div className="trust-icon">
                <i className="bx bx-globe"></i>
              </div>
              <h4 className="trust-number">25+</h4>
              <p className="trust-label">دولة</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mb-4" data-aos="fade-up" data-aos-delay="300">
            <div className="trust-indicator text-center">
              <div className="trust-icon">
                <i className="bx bx-time"></i>
              </div>
              <h4 className="trust-number">24/7</h4>
              <p className="trust-label">دعم مستمر</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .partners-section {
          background: white;
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

        .partner-item {
          padding: 1.5rem;
          border-radius: 15px;
          transition: all 0.3s ease;
        }

        .partner-item:hover {
          background: #f8f9fa;
          transform: translateY(-5px);
        }

        .partner-logo-container {
          width: 120px;
          height: 80px;
          margin: 0 auto 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: white;
          border-radius: 10px;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .partner-logo {
          max-width: 100px;
          max-height: 60px;
          object-fit: contain;
          filter: grayscale(100%);
          transition: all 0.3s ease;
        }

        .partner-item:hover .partner-logo {
          filter: grayscale(0%);
        }

        .partner-item:hover .partner-logo-container {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .partner-name {
          font-size: 1.1rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 0.5rem;
        }

        .partner-description {
          font-size: 0.9rem;
          color: #666;
          margin: 0;
        }

        .partnership-cta {
          background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%);
          padding: 3rem 2rem;
          border-radius: 20px;
          color: white;
          text-align: center;
        }

        .cta-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .cta-description {
          font-size: 1.1rem;
          margin-bottom: 2rem;
          opacity: 0.9;
        }

        .partnership-cta .btn {
          background: white;
          color: #6c5ce7;
          border: none;
        }

        .partnership-cta .btn:hover {
          background: #f8f9fa;
          transform: translateY(-2px);
        }

        .trust-indicator {
          padding: 1.5rem;
        }

        .trust-icon {
          width: 60px;
          height: 60px;
          background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          font-size: 1.5rem;
          color: white;
        }

        .trust-number {
          font-size: 2rem;
          font-weight: 700;
          color: #6c5ce7;
          margin-bottom: 0.5rem;
        }

        .trust-label {
          font-size: 1rem;
          color: #666;
          margin: 0;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .cta-title {
            font-size: 1.5rem;
          }

          .partnership-cta {
            padding: 2rem 1rem;
          }

          .partner-logo-container {
            width: 100px;
            height: 70px;
          }

          .partner-logo {
            max-width: 80px;
            max-height: 50px;
          }
        }
      `}</style>
    </section>
  )
}

export default Partners