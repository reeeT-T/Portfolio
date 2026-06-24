import { motion } from "framer-motion";
import Container from "./Container";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 py-8">
      <Container>
        <nav className="flex justify-between items-start">
          
          <a 
            href="#hero"
            className="text-sm tracking-[0.3em] uppercase"
          >
            Gauree
          </a>

          <div className="flex gap-8 text-sm">
            <a 
              href="#work"
              className="hover:opacity-50 transition-opacity duration-300"
            >
              Work
            </a>

            <a 
              href="#about"
              className="hover:opacity-50 transition-opacity duration-300"
            >
              About
            </a>

            <a 
              href="#archive"
              className="hover:opacity-50 transition-opacity duration-300"
            >
              Archive
            </a>

            <a 
              href="#contact"
              className="hover:opacity-50 transition-opacity duration-300"
            >
              Contact
            </a>
          </div>
        </nav>
      </Container>
    </header>
  );
}

export default Navbar;