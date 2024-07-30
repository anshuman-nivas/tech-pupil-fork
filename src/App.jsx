import Nav from './Components/nav.jsx';
import Banner from './Components/Banner.jsx';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Team from './Components/Team';
import Blog from './Components/Blog';

const App = () => {
  return (
    <div className="bg-stone-950">
      <Nav />
      <Banner />
      <About />
      <Services />
      <Team />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;