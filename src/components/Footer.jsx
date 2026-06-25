import { motion } from "framer-motion";
import Container from "./Container";

function Footer() {
  return (
    <footer className="py-20">
  <Container>
    <div className="border-t border-[#ddd3c7] pt-10 flex justify-between text-sm opacity-70">
      <p>© 2026 Gauree</p>
      <p>Built with React + Tailwind</p>
    </div>
  </Container>
</footer>
  );
}

export default Footer;