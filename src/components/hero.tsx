import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-6xl items-center px-6 pt-24">
      <div>
        <p className="mb-4 text-cyan-400">Bonjour, je suis</p>

        <h2 className="mb-4 text-5xl font-extrabold md:text-7xl">
          {profile.name}
        </h2>

        <h3 className="mb-6 text-2xl font-semibold text-slate-300 md:text-4xl">
          {profile.title}
        </h3>

        <p className="mb-8 max-w-2xl text-lg text-slate-400">
          {profile.description}
        </p>

        <div className="flex gap-4">
          <a
            href="#projects"
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
          >
            Voir mes projets
          </a>

          <a
            href="#contact"
            className="rounded-xl border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 hover:bg-cyan-400 hover:text-slate-950"
          >
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
}