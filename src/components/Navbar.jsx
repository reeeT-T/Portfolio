import { motion } from "framer-motion";
import Container from "./Container";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      
      {/* GLASS + FADE LAYER */}
      <div className="relative backdrop-blur-md bg-[#f7f3ed]/30">
        
        {/* SOFT FADE INTO PAGE */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f7f3ed]/80 via-[#f7f3ed]/40 to-transparent pointer-events-none" />

        <Container>
          <nav className="relative flex justify-between items-center py-3">

            {/* LOGO */}
            <a
              href="#hero"
              className="text-sm tracking-[0.3em] uppercase"
            >
              Gauree
            </a>

            {/* LINKS */}
            <div className="flex gap-8 text-sm">
              <a href="#about" className="hover:opacity-50 transition-opacity duration-300">
                About
              </a>
              
              <a href="#work" className="hover:opacity-50 transition-opacity duration-300">
                Work
              </a>

              <a href="#archive" className="hover:opacity-50 transition-opacity duration-300">
                Archive
              </a>

              <a href="#contact" className="hover:opacity-50 transition-opacity duration-300">
                Contact
              </a>
            </div>

          </nav>
        </Container>

      </div>
    </header>
  );
}

export default Navbar;