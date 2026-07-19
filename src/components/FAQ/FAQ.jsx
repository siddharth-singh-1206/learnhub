import { useState } from 'react';

const FAQ = ({ faqs }) => {
  const [activeId, setActiveId] = useState(null);

  const toggleFAQ = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div className="faq-accordion">
      {faqs.map((faq) => {
        const isOpen = activeId === faq.id;
        return (
          <div key={faq.id} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button
              type="button"
              className="faq-question"
              onClick={() => toggleFAQ(faq.id)}
            >
              <span>{faq.question}</span>
              <span className="faq-toggle-icon">{isOpen ? '−' : '+'}</span>
            </button>
            {isOpen && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default FAQ;
