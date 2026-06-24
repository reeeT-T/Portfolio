import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -6 }}
      className="flex flex-col gap-6 group"
    >

      {/* IMAGE */}
      <div className="w-full aspect-[4/3] overflow-hidden rounded-sm bg-[#e7ded3]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top block"
        />
      </div>

      {/* TEXT */}
      <div>
        <p className="text-xs tracking-[0.3em] uppercase opacity-60 mb-3">
          {project.category}
        </p>

        <h3 className="text-3xl md:text-4xl font-serif mb-4">
          {project.title}
        </h3>

        <p className="opacity-70 leading-relaxed">
          {project.description}
        </p>
      </div>

    </motion.div>
  );
}

export default ProjectCard;