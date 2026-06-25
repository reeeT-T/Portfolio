import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="min-h-screen bg-[#f7f3ed] p-6 md:p-10">

      {/* subtle background grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(28,26,23,0.18) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* CONTAINER */}
      <div className="relative z-10 flex flex-wrap gap-6">



        {/* SMALL RANDOMIZED BLOCKS (bottom collage) */}
        <motion.div className="w-[30%] h-[80px] rounded-2xl bg-[#e7ded3]" />
        <motion.div className="w-[25%] h-[30px] rounded-2xl bg-[#e7ded3]" />
        <motion.div className="w-[40%] h-[100px] rounded-2xl bg-[#e7ded3]" />
        <motion.div className="w-[35%] h-[260px] rounded-2xl bg-[#e7ded3]" />
        {/* BIG IMAGE BLOCK (left dominant) */}
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="w-full md:w-[18%] h-[300px] rounded-2xl overflow-hidden bg-[#e7ded3]"
        >
          <img
            src="/profile.jpg"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>
        <motion.div className="w-[35%] h-[400px] rounded-2xl bg-[#e7ded3]" />
        <motion.div className="w-[60%] h-[160px] rounded-2xl bg-[#e7ded3]" />

      </div>
    </section>
  );
}

export default Hero;