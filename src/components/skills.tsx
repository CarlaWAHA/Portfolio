import { skills } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-8 text-3xl font-bold text-cyan-400">Compétences</h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-5 py-2 text-cyan-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}