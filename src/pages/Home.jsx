import AboutUs from "../components/AboutUs";
import Pricelist from "../components/Pricelist";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Panel from "../components/Panel";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Panel />
        <Intro />
        <AboutUs />
        <Gallery />
        <Pricelist />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};
export default Home;
