
import Header from './components/header/header';
import HeroSec from './components/heroSec/heroSec';
import Banner from './components/banner/banner';
import FaqSection from './components/faq/FaqSection';
import Testimonial from './components/testimonial/testimonial';
import AboutUs from './components/aboutUs/aboutUs';
import Contact from './components/contactUs/contactUs';
import Footer from './components/footer/footer';

import './App.css'

const faqItems = [
  {
    question: 'What differentiates your Facebook marketing approach for e-commerce brands??',
    answer: 'We mix creative stories, smart plans based on data, and a good understanding of online selling to make special Facebook ads for each brand.',
  },
  {
    question: 'Can I see case studies or examples of past campaigns for e-commerce brands?',
    answer: 'Answer 2',
  },
  {
    question: 'How do you measure the success of a campaign?',
    answer: 'Answer 3',
  },
];

function App() {

  return (
    <>
       <Header /> 
      <HeroSec />
      <AboutUs />
      <Banner />
      <Testimonial />
      <FaqSection faqItems={faqItems} />
      <Contact />
      <Footer />  

    </>
  )
}

export default App
