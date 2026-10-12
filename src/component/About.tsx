
import {
  FiCode,
  FiDatabase,
  FiLayers,
  FiCpu,
  FiMapPin,
  FiArrowUpRight,
} from 'react-icons/fi';

const highlights = [
  {
    icon: FiCode,
    title: 'Frontend Development',
    description:
      'Building responsive, accessible, and user-friendly interfaces with React, TypeScript, and Tailwind CSS.',
  },
  {
    icon: FiDatabase,
    title: 'Backend Development',
    description:
      'Developing APIs, authentication systems, and application logic with Python, Django, and Django REST Framework.',
  },
  {
    icon: FiLayers,
    title: 'Full-Stack Solutions',
    description:
      'Connecting frontend experiences to reliable backend services to deliver complete software solutions.',
  },
  {
    icon: FiCpu,
    title: 'AI & Innovation',
    description:
      'Exploring AI integration and automation to improve workflows and solve practical business problems.',
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0b1120] px-6 py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Get to know me
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            About <span className="text-emerald-400">Me</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-400">
            A passionate software developer focused on building useful,
            reliable, and modern digital products.
          </p>
        </div>

        <div className="grid items-start gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Personal introduction */}
          <div>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-sm text-emerald-300">
              <FiMapPin size={16} />
              Lagos, Nigeria
            </div>

            <h3 className="text-2xl font-semibold leading-snug sm:text-3xl">
              I turn ideas into{' '}
              <span className="text-emerald-400">
                practical software solutions.
              </span>
            </h3>

            <div className="mt-6 space-y-5 leading-8 text-gray-400">
              <p>
                I'm Chibueze Francis, a Full-Stack Software Developer
                passionate about creating digital products that solve
                real-world problems. I work across frontend and backend
                development, combining clean interfaces with reliable
                application logic.
              </p>

              <p>
                My development toolkit includes React, JavaScript,
                TypeScript, Tailwind CSS, Python, Django, and Django REST
                Framework. I enjoy building responsive web applications,
                REST APIs, authentication systems, dashboards, and
                data-driven features.
              </p>

              <p>
                Through my software projects and work with MetroBlue Tech
                Systems Ltd., I've gained practical experience in application
                development, debugging, testing, and collaborating on
                technology solutions. I'm also interested in artificial
                intelligence and how it can make software more useful.
              </p>

              <p>
                I believe great software combines thoughtful design,
                maintainable code, and a clear understanding of the problem
                being solved. I'm committed to learning, improving, and
                delivering meaningful results.
              </p>
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-emerald-400 px-6 py-3.5 font-semibold text-gray-950 transition hover:-translate-y-1 hover:bg-emerald-300"
            >
              Let's Work Together
              <FiArrowUpRight size={19} />
            </a>
          </div>

          {/* Technical highlights */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <article
                  key={item.title}
                  className="group rounded-2xl border border-white/10 bg-[#101827] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400 transition group-hover:bg-emerald-400 group-hover:text-gray-950">
                    <Icon size={24} />
                  </div>

                  <h4 className="text-lg font-semibold text-white">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-gray-400">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;