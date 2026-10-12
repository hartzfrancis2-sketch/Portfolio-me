
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiCode,
  FiDownload,
} from 'react-icons/fi';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#080d19] px-6 pb-20 pt-32 text-white"
    >
      <div className="pointer-events-none absolute -right-40 -top-20 h-96 w-96 rounded-full bg-emerald-400/10 blur-[120px]" />

      <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2">
        <div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-sm text-emerald-300">
              Available for opportunities
            </span>
          </div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
            Hello, I'm
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl xl:text-7xl">
            Chibueze
            <br />
            <span className="text-emerald-400">Francis.</span>
          </h1>

          <h2 className="mt-6 text-xl font-medium text-gray-200 sm:text-2xl">
            Full-Stack Software Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            I build modern web applications, scalable backend systems, and
            digital experiences that solve real-world problems. I turn ideas
            into practical, reliable software.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 rounded-lg bg-emerald-400 px-6 py-3.5 font-semibold text-gray-950 transition hover:-translate-y-1 hover:bg-emerald-300"
            >
              Explore My Work
              <FiArrowUpRight size={19} />
            </a>

            <a
              href="https://drive.google.com/file/d/1Rzoodu8SXrJ5oYJQNeZb1e83hNitD_Ml/view?usp=sharing"
              download
              className="inline-flex items-center gap-3 rounded-lg border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-emerald-400 hover:text-emerald-400"
            >
              Download CV
              <FiDownload size={18} />
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl font-bold text-white">Full-Stack</p>
              <p className="mt-1 text-sm text-gray-500">Development</p>
            </div>

            <div className="h-12 w-px bg-white/10" />

            <div>
              <p className="text-2xl font-bold text-white">React + Django</p>
              <p className="mt-1 text-sm text-gray-500">Core Technologies</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-emerald-400/20 to-blue-500/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101827] shadow-2xl">
            <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
              <span className="ml-3 text-xs text-gray-500">
                developer.ts
              </span>
            </div>

            <div className="space-y-5 p-6 font-mono text-sm sm:p-8">
              <div className="flex items-center gap-3 text-emerald-400">
                <FiCode size={20} />
                <span>const developer = {'{'}</span>
              </div>

              <div className="space-y-4 pl-5">
                <p>
                  <span className="text-purple-400">name:</span>{' '}
                  <span className="text-amber-300">"Chibueze Francis"</span>,
                </p>
                <p>
                  <span className="text-purple-400">role:</span>{' '}
                  <span className="text-amber-300">"Full-Stack Developer"</span>,
                </p>
                <p>
                  <span className="text-purple-400">frontend:</span>{' '}
                  <span className="text-amber-300">"React + TypeScript"</span>,
                </p>
                <p>
                  <span className="text-purple-400">backend:</span>{' '}
                  <span className="text-amber-300">"Python + Django"</span>,
                </p>
                <p>
                  <span className="text-purple-400">location:</span>{' '}
                  <span className="text-amber-300">"Lagos, Nigeria"</span>,
                </p>
                <p>
                  <span className="text-purple-400">passion:</span>{' '}
                  <span className="text-amber-300">"Building solutions"</span>
                </p>
              </div>

              <div className="text-emerald-400">{'};'}</div>

              <div className="rounded-lg border border-emerald-400/10 bg-emerald-400/5 p-4">
                <p className="text-emerald-300">
                  <span className="mr-2">{'>'}</span>
                  Building something meaningful...
                  <span className="ml-1 animate-pulse">_</span>
                </p>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-xl border border-white/10 bg-[#101827] p-4 shadow-xl sm:flex">
            <div className="rounded-lg bg-emerald-400/10 p-3 text-emerald-400">
              <FiCode size={22} />
            </div>
            <div>
              <p className="font-semibold text-white">Clean Code</p>
              <p className="text-xs text-gray-500">Built with purpose</p>
            </div>
          </div>

          <a
            href="#about"
            aria-label="Scroll to About section"
            className="absolute -right-3 top-12 hidden rounded-full border border-white/10 bg-[#101827] p-3 text-emerald-400 transition hover:bg-emerald-400 hover:text-gray-950 sm:block"
          >
            <FiArrowDownRight size={22} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;