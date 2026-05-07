export default function navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-cyan-400">Carla.dev</h1>

        <div className="hidden gap-6 md:flex">
          <a href="#about" className="hover:text-cyan-400">À propos</a>
          <a href="#skills" className="hover:text-cyan-400">Compétences</a>
          <a href="#projects" className="hover:text-cyan-400">Projets</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}