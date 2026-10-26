
import {
  FiGithub,
  FiExternalLink,
  FiArrowUpRight,
  FiLayers,
} from 'react-icons/fi';

const projects = [
  {
    number: '01',
    title: 'AfriQueue',
    category: 'Queue Management Platform',
    description:
      'A platform designed to help people check office queues, estimate waiting times, and plan visits to public service offices across Africa.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Python',
      'Django REST Framework',
    ],
    features: [
      'Queue status and waiting-time information',
      'JWT authentication and user accounts',
      'Office-specific tickets and staff dashboard',
    ],
    github: 'https://github.com/yourusername/afriqueue',
    demo: 'https://your-afriqueue-demo.com',
  },
  {
    number: '02',
    title: 'DePrecious Bakery',
    category: 'Business Website',
    description:
      'A modern bakery website concept designed to present cakes, pastries, and desserts through an elegant, responsive user experience.',
    technologies: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'React Router',
      'Framer Motion',
    ],
    features: [
      'Responsive page layouts',
      'Product and menu presentation',
      'Animated user interface',
    ],
    github: 'https://github.com/yourusername/deprecious-bakery',
    demo: 'https://your-bakery-demo.com',
  },
  {
    number: '03',
    title: 'AI Sales Copilot',
    category: 'AI-Powered Software Concept',
    description:
      'An AI-focused application concept for helping sales teams organize follow-ups, prioritize opportunities, and improve their workflow.',
    technologies: [
      'React',
      'JavaScript',
      'Tailwind CSS',
      'AI Integration',
    ],
    features: [
      'Sales activity dashboard concept',
      'Follow-up prioritization workflow',
      'AI-assisted productivity features',
    ],
    github: 'https://github.com/yourusername/ai-sales-copilot',
    demo: 'https://your-sales-copilot-demo.com',
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#080d19] px-6 py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
              What I've been building
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
              Featured <span className="text-emerald-400">Projects</span>
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-gray-400">
              A selection of software projects and concepts that demonstrate
              my approach to frontend development, backend integration, and
              practical problem-solving.
            </p>
          </div>

          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-emerald-400 transition hover:text-emerald-300"
          >
            More on GitHub <FiArrowUpRight size={18} />
          </a>
        </div>

        {/* Project cards */}
        <div className="grid gap-7 lg:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group flex flex-col rounded-2xl border border-white/10 bg-[#0b1120] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 sm:p-8"
            >
              {/* Project header */}
              <div className="mb-7 flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-emerald-400/20 bg-emerald-400/10 text-emerald-400">
                  <FiLayers size={27} />
                </div>

                <span className="text-3xl font-bold text-white/10">
                  {project.number}
                </span>
              </div>

              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                {project.category}
              </p>

              <h3 className="text-2xl font-bold transition group-hover:text-emerald-300">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                {project.description}
              </p>

              {/* Project features */}
              <div className="mt-6">
                <h4 className="mb-3 text-sm font-semibold text-gray-200">
                  Key Features
                </h4>

                <ul className="space-y-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm leading-6 text-gray-400"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technology tags */}
              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-gray-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project links */}
              <div className="mt-8 flex gap-4 border-t border-white/10 pt-6">
                <a
                  href="https://github.com/hartzfrancis2-sketch/Precious-bakery"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium transition hover:border-emerald-400/40 hover:text-emerald-400"
                >
                  <FiGithub size={17} />
                  GitHub
                </a>

                <a
                  href="https://depreciousbakery.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-4 py-2.5 text-sm font-semibold text-gray-950 transition hover:bg-emerald-300"
                >
                  Live Demo
                  <FiExternalLink size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;