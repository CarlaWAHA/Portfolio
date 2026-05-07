import { experiences } from "../data/portfolio";

export default function Experience() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="mb-8 text-3xl font-bold text-cyan-400">Expériences</h2>

      <div className="space-y-6">
        {experiences.map((experience) => (
          <div
            key={experience.role}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h3 className="text-xl font-bold">{experience.role}</h3>
            <p className="text-cyan-300">{experience.company}</p>
            <p className="mb-3 text-sm text-slate-500">{experience.period}</p>
            <p className="text-slate-300">{experience.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}