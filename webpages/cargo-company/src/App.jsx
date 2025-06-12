import Header from './Header/Header';
import Jumbotron from './Jumbotron/Jumbotron.jsx';
import PriceCalculating from './PriceCalculating/PriceCalculating.jsx';
import WhyChooseUs from './WhyChooseUs/WhyChooseUs.jsx';
import ShippingMethods from './ShippingMethods/ShippingMethods.jsx';
import Services from './Services/Services.jsx';
import AboutCompany from './AboutCompany/AboutCompany.jsx';
import Faq from './Faq/Faq.jsx';

function App() {

  return (
    <>
      <Header/>
      <Jumbotron/>
      <PriceCalculating/>
      <WhyChooseUs/>
      <ShippingMethods/>
      <Services/>
      <AboutCompany/>
      <Faq/>
    </>
  )
}

export default App;
