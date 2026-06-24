import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import SelectedWork from "./sections/SelectedWork";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
      </main>
    </>
  );
}

export default App;