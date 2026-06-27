import { motion } from "framer-motion";

function ProjectCard({ project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ y: -6 }}
      className="group rounded-2xl bg-[#3b241c]/95 border border-[#5a3a2e]/40 overflow-hidden backdrop-blur-sm"
    >

      <div className="p-6">

        {/* CATEGORY */}
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#d8c4b6]">
          {project.category}
        </p>

        {/* TITLE (BROWN FOCUS HERE) */}
        <h3 className="text-2xl font-serif text-[#f7f3ed] mt-2">
          {project.title}
        </h3>

        {/* DESCRIPTION */}
        <p className="text-sm text-[#d8c4b6] mt-3 leading-relaxed">
          {project.description}
        </p>

        {/* TECH STACK */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t, i) => (
            <span
              key={i}
              className="text-[10px] px-2 py-1 rounded-full border border-[#d8cabd] bg-[#f1ebe4] text-[#5a3a2e]"
            >
              {t}
            </span>
          ))}
        </div>

      </div>

      {/* IMAGE (neutral but framed with brown) */}
      <div className="border-t border-[#e0d2c3]">
        <img
          src={project.image}
          className="w-full h-[180px] object-cover"
        />
      </div>

    </motion.div>
  );
}

export default ProjectCard;