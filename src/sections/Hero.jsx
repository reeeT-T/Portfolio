import { motion } from "framer-motion";
import Container from "../components/Container";

function Hero() {
  return (
    
    <section 
        id="hero" 
        className="min-h-screen flex items-center relative overflow-visible"
    >
     <div
  className="
    absolute
    -top-32
    -right-32
    h-[800px]
    w-[800px]
    rounded-full
    bg-[#FFD9B3]/35
    blur-[200px]
    pointer-events-none
  "
></div>
      <Container>
        <div className="max-w-3xl">        
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="uppercase tracking-[0.3em] text-sm mb-8"
            >
            Developer • Designer • AI Explorer
        </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95]"
            >
            Designing intelligent <br />
            digital experiences.
        </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.75, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 max-w-xl text-lg leading-relaxed"
            >
            I create thoughtful digital products where software engineering,
            artificial intelligence, and visual design come together.
        </motion.p>
        </div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.25em]"
            >
            Explore ↓
        </motion.div>
      </Container>
    </section>
  );
}

export default Hero;