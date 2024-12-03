import Navbar from './components/Navbar/Navbar';
import HeroCard from './components/HeroCard/HeroCard';
import Classes from './components/Classes/Classes';
import BMICalculator from './components/BMICalculator/BMICalculator';
import Trainers from './components/Trainers/Trainers';
import Purchase from './components/Purchase/Purchase';
import Review from './components/Review/Review';  
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
const App = () => {
  return (
    <div>
     <Navbar/>
     <HeroCard/>
     <Classes/>
     <BMICalculator/>
     <Trainers/>
     <Purchase/>
     <Review/>
     <Contact/>
     <Footer/>
    </div>
  );
};

export default App;
