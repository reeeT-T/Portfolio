import { motion } from "framer-motion";

function HeroPinterest() {
        const item = {
        hidden: { opacity: 0, x: 25, y: 10, scale: 0.98 },
        show: { opacity: 1, x: 0, y: 0, scale: 1 },
        };

        const itemRight = {
        hidden: { opacity: 0, x: -25, y: 10, scale: 0.98 },
        show: { opacity: 1, x: 0, y: 0, scale: 1 },
        };

        const itemUp = {
        hidden: { opacity: 1, x: -20, y: 25, scale: 1.1 },
        show: { opacity: 1, x: 0, y: 0, scale: 1 },
        };
        const itemBottom = {
        hidden: {opacity: 0, x: 0, y: -25, scale: 0.98,},
        show: {opacity: 1,x: 0, y: 0, scale: 1,},
        };

  return (
    <section className="py32 bg-[#f7f3ed] p-4 md:p-6 mt-10">

      <div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[120px] gap-4">

          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="col-span-1 md:col-span-2 row-span-2 bg-[#e7ded3] rounded-2xl p-4 flex items-end"
          >
            <div>
              <p className="text-xs opacity-60 uppercase">CV</p>
              <h3 className="text-lg font-medium mt-1">
                Gesture Control
              </h3>
            </div>
          </motion.div>

          
          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="col-span-1 md:col-span-3 row-span-3 bg-[#5a3a2e] rounded-2xl  min-w-0 overflow-hidden flex items-end justify-end p-4 min-w-0"
            >
            <div className="text-right">
                <p
                style={{ color: "#f7f3ed" }}
                className="text-[11px] uppercase tracking-[0.2em] mb-2"
                >
                Portfolio
                </p>

                <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif leading-tight text-[#f7f3ed]">
                    GAUREE
                    <br />
                    VIKRAM
                </h2>
            </div>
            </motion.div>
          
          {/* IMAGE BLOCK 1 (kept neutral, anchor feel) */}
          <motion.div
            variants={itemUp}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut"}}
            className="col-span-1 md:col-span-3 row-span-2 bg-[#e7ded3] rounded-2xl overflow-hidden"
            >
            <img
                src="/me2.png"
                className="w-full h-full object-cover object-top"
            />
            </motion.div>

        <motion.div
            variants={itemRight}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="col-span-1 md:col-span-4 row-span-1 bg-[#9D7F65] rounded-2xl overflow-hidden border border-[#d8cabd]"
            >
            <div className="h-full px-6 flex flex-col justify-center">

                <p className="text-[10px] tracking-[0.25em] uppercase text-[#8b735f] mb-2">
                Role
                </p>

                <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[#4a2f24] font-medium">
                    Developer
                </span>

                <div className="w-1 h-1 rounded-full bg-[#8b735f]" />

                <span className="text-[#4a2f24] font-medium">
                    Designer
                </span>

                <div className="w-1 h-1 rounded-full bg-[#8b735f]" />

                <span className="text-[#4a2f24] font-medium">
                    AI Builder
                </span>
                </div>

            </div>
        </motion.div>

          <motion.div
            variants={itemRight}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="col-span-1 md:col-span-3 row-span-3 bg-[#e7ded3] rounded-2xl p-4 flex items-end"
          >
            <div>
              <p className="text-xs opacity-60 uppercase">Project</p>
              <h3 className="text-lg font-medium mt-1">
                Canteen System
              </h3>
            </div>
          </motion.div>

          <motion.div
            variants={itemRight}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="hidden md:block col-span-1 row-span-1 bg-[#e7ded3]  rounded-2xl overflow-hidden"
          >
             <img
              src="/public/plaid.png"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="hidden md:block col-span-2 row-span-1 bg-[#e7ded3]  rounded-2xl overflow-hidden"
          >
             <img
              src="/public/plaid.png"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

          <motion.div
            variants={itemBottom}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="hidden md:block col-span-3 row-span-1 bg-[#e7ded3]  rounded-2xl overflow-hidden"
          >
             <img
              src="/public/glow.png"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

          <motion.div
            variants={itemRight}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="col-span-1 md:col-span-1 row-span-2 bg-[#8b6b52] rounded-2xl overflow-hidden border border-[#a88b74]"
            >
            <div className="h-full p-3 flex flex-col justify-center gap-2">

                <span className="text-[9px] sm:text-xs px-2 py-1 rounded-full border border-[#c9b5a1] bg-[#f3ece4] text-[#5a3a2e] text-center whitespace-nowrap overflow-hidden text-ellipsis">
                React
                </span>

                <span className="text-[9px] sm:text-xs px-2 py-1 rounded-full border border-[#c9b5a1] bg-[#f3ece4] text-[#5a3a2e] text-center whitespace-nowrap overflow-hidden text-ellipsis">
                Node
                </span>

                <span className="text-[9px] sm:text-xs px-2 py-1 rounded-full border border-[#c9b5a1] bg-[#f3ece4] text-[#5a3a2e] text-center whitespace-nowrap overflow-hidden text-ellipsis">
                AI
                </span>

            </div>
            </motion.div>

          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="col-span-1 md:col-span-4 row-span-1 bg-[#d8c6b4] rounded-2xl overflow-hidden"
            >
            <div className="h-full flex items-center justify-between px-6">

                <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-[#8b735f]">
                    Connect
                </p>

                <h3 className="text-lg font-serif text-[#4a2f24] mt-1">
                    Find me online
                </h3>
                </div>

                <div className="flex gap-2">

                <a
                    href="#"
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-[#f7f3ed] border border-[#c8b6a4]
                    flex items-center justify-center
                    hover:-translate-y-1 transition-all duration-300"
                >
                    <img src="/github.png" className="w-5 h-5 opacity-80" />
                </a>

                <a
                    href="#"
                    className="w-11 h-11 rounded-full bg-[#f7f3ed] border border-[#c8b6a4]
                    flex items-center justify-center
                    hover:-translate-y-1 transition-all duration-300"
                >
                    <img src="/linkedin.png" className="w-5 h-5 opacity-80" />
                </a>

                <a
                    href="#"
                    className="w-11 h-11 rounded-full bg-[#f7f3ed] border border-[#c8b6a4]
                    flex items-center justify-center
                    hover:-translate-y-1 transition-all duration-300"
                >
                    <img src="/mail.png" className="w-5 h-5 opacity-80" />
                </a>

                </div>
            </div>
            </motion.div>

          <motion.div
            variants={itemBottom}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="col-span-1 md:col-span-4 row-span-1 bg-[#5b3e31] rounded-2xl overflow-hidden"
            >
            <div className="h-full flex flex-row items-center justify-center">

                    <h3 className="text-xl font-serif text-[#d8cbc4] mr-2">
                    Explore   
                    </h3>

                    <motion.div
                    animate={{ y: [0, 5, 0] }}
                    transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="text-xl text-[#d8cbc4] mt-1 "
                    >
                    ↓
                    </motion.div>

            </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
}

export default HeroPinterest;