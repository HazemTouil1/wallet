import React, { useState } from 'react'

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  const faqs = [
    {
      question: 'ما هي محفظة العملات المشفرة؟',
      answer: 'محفظة العملات المشفرة هي تطبيق رقمي يسمح لك بتخزين وإدارة وإرسال واستقبال العملات المشفرة بأمان. تحتوي على مفاتيح خاصة وعامة تمكنك من التحكم في أموالك الرقمية.'
    },
    {
      question: 'كيف أضمن أمان محفظتي؟',
      answer: 'نحن نستخدم أحدث تقنيات التشفير AES-256 وحماية متعددة الطبقات. كما ننصح بتفعيل المصادقة الثنائية وحفظ العبارة الاحتياطية في مكان آمن.'
    },
    {
      question: 'ما هي العملات المدعومة؟',
      answer: 'نحن ندعم أكثر من 50 عملة مشفرة مختلفة بما في ذلك Bitcoin وEthereum وBinance Coin وغيرها الكثير. نضيف عملات جديدة بانتظام.'
    },
    {
      question: 'هل يمكنني استخدام المحفظة على أجهزة متعددة؟',
      answer: 'نعم، يمكنك مزامنة محفظتك عبر أجهزة متعددة باستخدام العبارة الاحتياطية. هذا يتيح لك الوصول إلى أموالك من أي جهاز.'
    },
    {
      question: 'كم تستغرق المعاملات؟',
      answer: 'سرعة المعاملات تعتمد على نوع العملة المشفرة وحالة الشبكة. عادة ما تستغرق المعاملات من بضع ثوانٍ إلى عدة دقائق.'
    },
    {
      question: 'هل هناك رسوم على المعاملات؟',
      answer: 'نحن نتقاضى رسوماً منخفضة جداً على المعاملات لتغطية تكاليف الشبكة. الرسوم شفافة ومعروضة قبل تأكيد أي معاملة.'
    }
  ]

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index)
  }

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto text-center mb-5" data-aos="fade-up">
            <h2 className="section-title">
              الأسئلة 
              <span className="gradient-text">الشائعة</span>
            </h2>
            <p className="section-description">
              إجابات على أكثر الأسئلة شيوعاً حول محفظتنا الرقمية 
              وكيفية استخدامها بأمان وفعالية
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="faq-container" data-aos="fade-up">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <div 
                    className={`faq-question ${activeIndex === index ? 'active' : ''}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <h5 className="question-text">{faq.question}</h5>
                    <div className="question-icon">
                      <i className={`bx ${activeIndex === index ? 'bx-minus' : 'bx-plus'}`}></i>
                    </div>
                  </div>
                  <div className={`faq-answer ${activeIndex === index ? 'active' : ''}`}>
                    <p className="answer-text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-lg-12 text-center" data-aos="fade-up">
            <div className="faq-cta">
              <h3 className="cta-title">لم تجد إجابة لسؤالك؟</h3>
              <p className="cta-description">
                فريق الدعم الفني متاح على مدار الساعة لمساعدتك
              </p>
              <button className="btn btn-primary btn-lg me-3">
                <i className="bx bx-support me-2"></i>
                تواصل مع الدعم
              </button>
              <button className="btn btn-outline-primary btn-lg">
                <i className="bx bx-book-open me-2"></i>
                دليل المستخدم
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .faq-section {
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

        .faq-container {
          background: white;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        .faq-item {
          border-bottom: 1px solid #eee;
        }

        .faq-item:last-child {
          border-bottom: none;
        }

        .faq-question {
          padding: 1.5rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          transition: all 0.3s ease;
          background: white;
        }

        .faq-question:hover {
          background: #f8f9fa;
        }

        .faq-question.active {
          background: linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%);
          color: white;
        }

        .question-text {
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
          flex: 1;
        }

        .question-icon {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          margin-right: 1rem;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
          background: #f8f9fa;
        }

        .faq-answer.active {
          max-height: 200px;
          padding: 1.5rem 2rem;
        }

        .answer-text {
          color: #666;
          line-height: 1.8;
          margin: 0;
        }

        .faq-cta {
          background: white;
          padding: 3rem 2rem;
          border-radius: 20px;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .cta-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: #333;
          margin-bottom: 1rem;
        }

        .cta-description {
          font-size: 1.1rem;
          color: #666;
          margin-bottom: 2rem;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 2rem;
          }

          .faq-question {
            padding: 1rem 1.5rem;
          }

          .faq-answer.active {
            padding: 1rem 1.5rem;
          }

          .question-text {
            font-size: 1rem;
          }

          .cta-title {
            font-size: 1.5rem;
          }

          .faq-cta {
            padding: 2rem 1rem;
          }

          .btn-lg {
            width: 100%;
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default FAQ