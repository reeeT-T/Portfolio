import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Loader() {
  const name = "GAUREE VIKRAM";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayedText(name.slice(0, i + 1));
      i++;

      if (i >= name.length) {
        clearInterval(interval);
      }
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-[#5a3a2e] flex items-center justify-center z-[9999]">
      <div className="text-centre">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#f7f3ed] leading-none min-w-[14ch] inline-block text-left">
          {displayedText}

          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            |
          </motion.span>
        </h1>

        <div className="w-[90vw] max-w-[600px] flex flex-col items-end">
            <div className="h-[2px] w-full bg-[#8b6d5c]/40 overflow-hidden rounded-full">
                <motion.div
                className="h-full bg-[#f7f3ed]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                    duration: 2.5,
                    ease: "easeInOut",
                }}
                />
            </div>
            </div>
      </div>
    </div>
  );
}

export default Loader;