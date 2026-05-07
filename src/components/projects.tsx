import { projects } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-8 text-3xl font-bold text-cyan-400">Projets</h2>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:bg-white/10"
          >
            <h3 className="mb-3 text-xl font-bold">{project.title}</h3>

            <p className="mb-4 text-slate-400">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}