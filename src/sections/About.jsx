import Container from "../components/Container";
import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-40">
      <Container>

        <motion.div
          initial={{ opacity: 0, y: 15, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >

          <div className="grid md:grid-cols-2 gap-20 items-start">

            {/* LEFT */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase opacity-60 mb-6">
                01
              </p>

              <h2 className="text-5xl md:text-6xl font-serif leading-tight">
                About Me
              </h2>

              <p className="mt-10 text-lg leading-relaxed opacity-80 max-w-xl">
                I’m a developer focused on creating intelligent digital products that feel
                simple on the surface but are carefully engineered underneath.
                My work sits at the intersection of full-stack development, AI systems,
                and interactive design.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex justify-center md:justify-end md:mt-10">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-[#e7ded3]">
                <img
                  src="/public/me.jpg"
                  className="w-full h-full object-cover object-top"
                  alt="Gauree"
                />
              </div>
            </div>

          </div>

        </motion.div>

      </Container>
    </section>
  );
}

export default About;