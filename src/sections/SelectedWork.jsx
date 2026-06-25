import Container from "../components/Container";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function SelectedWork() {
  const leftColumn = projects.filter((p) => p.column === "left");
  const rightColumn = projects.filter((p) => p.column === "right");

  return (
    <section id="work" className="py24">
      <Container>

        {/* HEADER */}
        <div className="mb-24">
          <p className="text-xs tracking-[0.3em] uppercase opacity-60">
            02
          </p>
          <h2 className="text-5xl md:text-6xl font-serif mt-4">
            Selected Work
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">

          {/* LEFT */}
          <div className="flex flex-col gap-24">
            {leftColumn.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* RIGHT (starts lower like your design) */}
          <div className="flex flex-col gap-24 md:pt-32 lg:pt-48">
            {rightColumn.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

        </div>

      </Container>
    </section>
  );
}

export default SelectedWork;