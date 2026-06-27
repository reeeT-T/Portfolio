import Container from "./Container";
import DarkModeToggle from "./DarkModeToggle";

function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* GLASS LAYER */}
      <div className="
        relative backdrop-blur-xl
        bg-white/10 dark:bg-black/40
        border-b border-white/20 dark:border-white/10
      ">

        {/* FADE */}
        <div className="
          absolute inset-0
          bg-gradient-to-b
          from-white/40 dark:from-black/60
          via-white/10 dark:via-black/20
          to-transparent
          pointer-events-none
        " />

        <Container>
          <nav className="
            relative flex justify-between items-center py-3
            text-[var(--text-primary)]
          ">

            {/* LOGO */}
            <a
              href="#hero"
              className="text-sm tracking-[0.3em] uppercase"
            >
              Gauree
            </a>

            {/* LINKS */}
            <div className="flex items-center gap-8 text-sm text-[var(--text-secondary)]">
              <DarkModeToggle />
              <a className="hover:text-[var(--text-primary)] transition" href="#about">
                About
              </a>

              <a className="hover:text-[var(--text-primary)] transition" href="#work">
                Work
              </a>

              <a className="hover:text-[var(--text-primary)] transition" href="#archive">
                Archive
              </a>

              <a className="hover:text-[var(--text-primary)] transition" href="#contact">
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