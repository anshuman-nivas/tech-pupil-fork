import Nav from "./Components/nav/";
import Banner from "./Components/Banner/";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer"; 
import {HashLink} from 'react-router-hash-link';


const App = () => {
  
  return (
      <div className="bg-stone-950">
        <Nav/>
        <Banner/>
        <About/>
        <Services/>
        <Contact/>
        <Footer/>
        
      
        
          
      </div>
  );
};

export default App;

