// FaqSection.tsx
import React, { useState } from 'react';
import './FaqSection.css'; // Import your CSS for styling (you can create this file)

import group7333 from '../../assets/Group 7333.png'
import group7234 from '../../assets/Group 7234.png'
import group7339 from '../../assets/Group 7339.svg'
import frameSvg from '../../assets/Frame.svg'


interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqItems: FaqItem[];
}

const FaqSection: React.FC<FaqSectionProps> = ({ faqItems }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <div className="faqWrapper">
      <div className="innerSEC">
    <div className="innerLtSec">
    <div className="innerRtSec">
      <img className='faqImgquestio' src={group7234} alt="" />
    </div>
      <img className='faqImg' src={group7333} alt="" />
      <img className='faqImgquestionn' src={group7339} alt="" />
    </div>
    <div className="faq-section">
      {faqItems.map((item, index) => (
        <div className="faq-item" key={index}>
          <div
            className={`faq-question ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {item.question}
          </div>
          {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
      <img className="faq-sectionImg" src={frameSvg} alt="" />
    </div>

      </div>
    </div>
    </>
  );
};

export default FaqSection;
