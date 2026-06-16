import SmoothScroll from './components/layout/SmoothScroll';
import CustomCursor from './components/layout/CustomCursor';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AnimatedThread from './components/layout/AnimatedThread';
import FloatingWhatsApp from './components/layout/FloatingWhatsApp';

import Hero from './components/sections/Hero';
import WhyDhaagaa from './components/sections/WhyDhaagaa';
import Manifesto from './components/sections/Manifesto';
import IndiaIsBuilding from './components/sections/IndiaIsBuilding';
import MadeInIndia from './components/sections/MadeInIndia';
import InvisibleProblem from './components/sections/InvisibleProblem';
import Transformation from './components/sections/Transformation';
import ThreadFramework from './components/sections/ThreadFramework';
import WhoWeHelp from './components/sections/WhoWeHelp';
import HowWeWork from './components/sections/HowWeWork';
import StrategicPartners from './components/sections/StrategicPartners';
import Pricing from './components/sections/Pricing';
import IndiaBrands from './components/sections/IndiaBrands';
import Founder from './components/sections/Founder';
import FinalCTA from './components/sections/FinalCTA';

function App() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <AnimatedThread />
      
      <main className="relative z-10">
        <Hero />
        <WhyDhaagaa />
        <Manifesto />
        <IndiaIsBuilding />
        <MadeInIndia />
        <InvisibleProblem />
        <Transformation />
        <ThreadFramework />
        <WhoWeHelp />
        <HowWeWork />
        <StrategicPartners />
        <Pricing />
        <IndiaBrands />
        <Founder />
        <FinalCTA />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </SmoothScroll>
  );
}

export default App;
