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
        hidden: { opacity: 0, x: 0, y: 25, scale: 0.98 },
        show: { opacity: 1, x: 0, y: 0, scale: 1 },
        };
        const itemBottom = {
        hidden: {opacity: 0, x: 0, y: -25, scale: 0.98,},
        show: {opacity: 1,x: 0, y: 0, scale: 1,},
        };

  return (
    <section className="min-h-screen bg-[#f7f3ed] p-4 md:p-6 mt-10">

      <div>
        
        <div className="grid grid-cols-12 auto-rows-[120px] gap-4">

          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="col-span-2 row-span-2 bg-[#e7ded3] rounded-2xl p-4 flex items-end"
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
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="col-span-3 row-span-3 bg-[#e7ded3] rounded-2xl overflow-hidden"
          >
            <p>1</p>
            <img
              src="/profile.jpg"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
          
          {/* IMAGE BLOCK 1 (kept neutral, anchor feel) */}
          <motion.div
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-3 row-span-2 bg-[#e7ded3] rounded-2xl p-4"
          ><p>10</p>

          </motion.div>

          <motion.div
            variants={itemRight}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="col-span-4 row-span-1 bg-[#e7ded3] rounded-2xl overflow-hidden"
          >
            <p>2</p>
            <img
              src="/profile.jpg"
              className="w-full h-full object-cover object-top"
            />
            
          </motion.div>

          <motion.div
            variants={itemRight}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="col-span-3 row-span-3 bg-[#e7ded3] rounded-2xl p-4 flex items-end"
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
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="col-span-1 row-span-1 bg-[#e7ded3] rounded-2xl p-4 flex items-end"
          >
            <p>plain</p>
          </motion.div>

          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="col-span-2 row-span-1 bg-[#e7ded3] rounded-2xl p-4 flex items-end"
          >
            <p>plain</p>
          </motion.div>

          <motion.div
            variants={itemBottom}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="col-span-3 row-span-1 bg-[#e7ded3] rounded-2xl p-4 flex items-end"
          >
            <div>
              <p className="text-xs opacity-60 uppercase">AI</p>
              <h3 className="text-lg font-medium mt-1">
                Resume Analyzer
              </h3>
            </div>
          </motion.div>

          <motion.div
            variants={itemRight}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="col-span-1 row-span-2 bg-[#e7ded3] rounded-2xl p-4 flex items-end"
          >
            <div>
              <p className="text-xs opacity-60 uppercase">System</p>
              <h3 className="text-lg font-medium mt-1">
                5
              </h3>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="col-span-4 row-span-1 bg-[#e7ded3] rounded-2xl overflow-hidden"
          >
            <p>8</p>
            <img
              src="/profile.jpg"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

          <motion.div
            variants={itemBottom}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="col-span-4 row-span-1 bg-[#e7ded3] rounded-2xl overflow-hidden"
          >
            <p>7</p>
            <img
              src="/profile.jpg"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default HeroPinterest;