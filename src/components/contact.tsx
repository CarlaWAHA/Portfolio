import { profile } from "../data/portfolio";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-8 text-center">
        <h2 className="mb-4 text-3xl font-bold text-cyan-400">Contact</h2>

        <p className="mb-6 text-slate-300">
          Intéressé par mon profil ? Contactez-moi pour discuter d’une
          opportunité ou d’un projet.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300"
        >
          Envoyer un email
        </a>
      </div>
    </section>
  );
}