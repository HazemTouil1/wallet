import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'حول الشركة', href: '#about' },
      { name: 'فريق العمل', href: '#team' },
      { name: 'الوظائف', href: '#careers' },
      { name: 'الأخبار', href: '#news' }
    ],
    product: [
      { name: 'المميزات', href: '#features' },
      { name: 'الأمان', href: '#security' },
      { name: 'التسعير', href: '#pricing' },
      { name: 'التحديثات', href: '#updates' }
    ],
    support: [
      { name: 'مركز المساعدة', href: '#help' },
      { name: 'تواصل معنا', href: '#contact' },
      { name: 'الأسئلة الشائعة', href: '#faq' },
      { name: 'الدعم الفني', href: '#support' }
    ],
    legal: [
      { name: 'سياسة الخصوصية', href: '#privacy' },
      { name: 'شروط الاستخدام', href: '#terms' },
      { name: 'سياسة الأمان', href: '#security-policy' },
      { name: 'إخلاء المسؤولية', href: '#disclaimer' }
    ]
  }

  const socialLinks = [
    { name: 'Facebook', icon: 'bxl-facebook', href: '#' },
    { name: 'Twitter', icon: 'bxl-twitter', href: '#' },
    { name: 'Instagram', icon: 'bxl-instagram', href: '#' },
    { name: 'LinkedIn', icon: 'bxl-linkedin', href: '#' },
    { name: 'Telegram', icon: 'bxl-telegram', href: '#' },
    { name: 'Discord', icon: 'bxl-discord', href: '#' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="footer-brand">
              <img 
                src="/assets/images/logo.png" 
                alt="Wallet Logo" 
                className="footer-logo mb-3"
              />
              <p className="footer-description">
                محفظة رقمية آمنة وسهلة الاستخدام للعملات المشفرة. 
                نحن نوفر أفضل تجربة لإدارة أموالك الرقمية بأمان تام.
              </p>
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.href} 
                    className="social-link"
                    title={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className={`bx ${social.icon}`}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="footer-title">الشركة</h5>
            <ul className="footer-links">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="footer-title">المنتج</h5>
            <ul className="footer-links">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="footer-title">الدعم</h5>
            <ul className="footer-links">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <h5 className="footer-title">قانوني</h5>
            <ul className="footer-links">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-lg-12">
            <div className="footer-newsletter">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <h4 className="newsletter-title">
                    اشترك في النشرة الإخبارية
                  </h4>
                  <p className="newsletter-description">
                    احصل على آخر الأخبار والتحديثات حول العملات المشفرة
                  </p>
                </div>
                <div className="col-lg-6">
                  <div className="newsletter-form">
                    <div className="input-group">
                      <input 
                        type="email" 
                        className="form-control" 
                        placeholder="أدخل بريدك الإلكتروني"
                      />
                      <button className="btn btn-primary" type="button">
                        اشتراك
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="row">
          <div className="col-lg-6">
            <p className="footer-copyright">
              © {currentYear} محفظة رقمية. جميع الحقوق محفوظة.
            </p>
          </div>
          <div className="col-lg-6 text-lg-end">
            <div className="footer-actions">
              <button 
                className="btn btn-outline-light btn-sm me-2"
                onClick={scrollToTop}
              >
                <i className="bx bx-up-arrow-alt me-1"></i>
                العودة للأعلى
              </button>
              <span className="footer-language">
                <i className="bx bx-globe me-1"></i>
                العربية
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #2d3436;
          color: white;
          padding: 60px 0 30px;
        }

        .footer-logo {
          max-width: 150px;
          filter: brightness(0) invert(1);
        }

        .footer-description {
          color: #b2bec3;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .social-link {
          width: 40px;
          height: 40px;
          background: #636e72;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 1.2rem;
        }

        .social-link:hover {
          background: #6c5ce7;
          color: white;
          transform: translateY(-2px);
        }

        .footer-title {
          font-size: 1.2rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: white;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 0.8rem;
        }

        .footer-links a {
          color: #b2bec3;
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 0.95rem;
        }

        .footer-links a:hover {
          color: #6c5ce7;
        }

        .footer-newsletter {
          background: #636e72;
          padding: 2rem;
          border-radius: 15px;
          margin-bottom: 2rem;
        }

        .newsletter-title {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
          color: white;
        }

        .newsletter-description {
          color: #ddd;
          margin-bottom: 1rem;
        }

        .newsletter-form .form-control {
          border: none;
          border-radius: 25px 0 0 25px;
          padding: 12px 20px;
          font-size: 0.95rem;
        }

        .newsletter-form .btn {
          border-radius: 0 25px 25px 0;
          padding: 12px 25px;
          border: none;
        }

        .footer-divider {
          border-color: #636e72;
          margin: 2rem 0 1.5rem;
        }

        .footer-copyright {
          color: #b2bec3;
          margin: 0;
          font-size: 0.9rem;
        }

        .footer-actions {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 1rem;
        }

        .footer-language {
          color: #b2bec3;
          font-size: 0.9rem;
        }

        .btn-outline-light {
          border-color: #636e72;
          color: #b2bec3;
        }

        .btn-outline-light:hover {
          background: #6c5ce7;
          border-color: #6c5ce7;
          color: white;
        }

        @media (max-width: 768px) {
          .footer {
            padding: 40px 0 20px;
          }

          .footer-newsletter {
            padding: 1.5rem;
            text-align: center;
          }

          .newsletter-form {
            margin-top: 1rem;
          }

          .newsletter-form .input-group {
            flex-direction: column;
          }

          .newsletter-form .form-control {
            border-radius: 25px;
            margin-bottom: 1rem;
          }

          .newsletter-form .btn {
            border-radius: 25px;
            width: 100%;
          }

          .footer-actions {
            justify-content: center;
            margin-top: 1rem;
            flex-direction: column;
            gap: 0.5rem;
          }

          .social-links {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer