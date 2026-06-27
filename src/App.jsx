import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import HeroPinterest from "./sections/HeroPinterest";
import About from "./sections/About"
import SelectedWork from "./sections/SelectedWork";
import Footer from "./components/Footer"


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔥 DARK MODE HERE
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full min-h-screen">
      <Navbar />

      <main>
        <HeroPinterest />
        <About />
        <SelectedWork />
      </main>

      <Footer />
    </div>
  );
}
export default App;