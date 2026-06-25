import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import HeroPinterest from "./sections/HeroPinterest";
import About from "./sections/About"
import SelectedWork from "./sections/SelectedWork";
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroPinterest />
        <About />
        <SelectedWork />
      </main>

      <Footer />
    </>
  );
}

export default App;