import { useState, useEffect } from "react";

function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);
  }, []);

  const toggleDark = () => {
    document.documentElement.classList.toggle("dark");
    setDark((prev) => !prev);
  };

  return (
    <button
      onClick={toggleDark}
      className="relative w-14 h-8 flex items-center rounded-full 
                 bg-[#e7ded3] dark:bg-[#2a211c] 
                 transition-all duration-500 shadow-inner"
    >
      <div className="absolute inset-0 rounded-full blur-md opacity-40 bg-[#c7a27c] dark:bg-[#5b3e31]" />

      <div
        className={`
          w-6 h-6 rounded-full shadow-md z-10 transition-all duration-500
          ${dark ? "translate-x-7 bg-[#f7f3ed]" : "translate-x-1 bg-[#8c735a]"}
        `}
      />
    </button>
  );
}

export default DarkModeToggle;