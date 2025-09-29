import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#home">
          <img src="/assets/images/logo.png" alt="Wallet Logo" height="40" />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
        >
          <i className={`bx ${isMobileMenuOpen ? 'bx-x' : 'bx-menu'}`}></i>
        </button>

        <div className={`collapse navbar-collapse ${isMobileMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link"
                onClick={() => scrollToSection('home')}
              >
                الرئيسية
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link"
                onClick={() => scrollToSection('about')}
              >
                حول
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link"
                onClick={() => scrollToSection('features')}
              >
                المميزات
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link"
                onClick={() => scrollToSection('partners')}
              >
                الشركاء
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link"
                onClick={() => scrollToSection('faq')}
              >
                الأسئلة الشائعة
              </button>
            </li>
            <li className="nav-item">
              <button className="btn btn-primary ms-2">
                تحميل التطبيق
              </button>
            </li>
          </ul>
        </div>
      </div>

      <style jsx>{`
        .navbar {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          padding: 1rem 0;
        }

        .navbar-scrolled {
          background: rgba(255, 255, 255, 0.98);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
          padding: 0.5rem 0;
        }

        .navbar-brand img {
          transition: all 0.3s ease;
        }

        .navbar-scrolled .navbar-brand img {
          height: 35px;
        }

        .nav-link {
          color: #333 !important;
          font-weight: 500;
          margin: 0 0.5rem;
          padding: 0.5rem 1rem !important;
          border-radius: 25px;
          transition: all 0.3s ease;
          border: none;
          background: none;
        }

        .nav-link:hover {
          color: #6c5ce7 !important;
          background: rgba(108, 92, 231, 0.1);
        }

        .navbar-toggler {
          border: none;
          padding: 0.25rem 0.5rem;
        }

        .navbar-toggler i {
          font-size: 1.5rem;
          color: #333;
        }

        @media (max-width: 991px) {
          .navbar-collapse {
            background: white;
            margin-top: 1rem;
            padding: 1rem;
            border-radius: 10px;
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          }

          .nav-item {
            margin-bottom: 0.5rem;
          }

          .btn-primary {
            margin-top: 1rem;
            width: 100%;
          }
        }
      `}</style>
    </nav>
  )
}

export default Header