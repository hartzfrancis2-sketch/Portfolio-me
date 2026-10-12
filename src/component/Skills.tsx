
import {
  FiCode,
  FiDatabase,
  FiTool,
  FiCpu,
  FiCheckCircle,
} from 'react-icons/fi';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: FiCode,
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'Tailwind CSS',
      'Responsive Design',
    ],
  },
  {
    title: 'Backend Development',
    icon: FiDatabase,
    skills: [
      'Python',
      'Django',
      'Django REST Framework',
      'REST APIs',
      'JWT Authentication',
      'API Integration',
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: FiTool,
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Vite',
      'npm',
      'Postman',
      'SQL Fundamentals',
    ],
  },
  {
    title: 'AI & Software Testing',
    icon: FiCpu,
    skills: [
      'AI Integration',
      'AI-Assisted Development',
      'API Testing',
      'Debugging',
      'Quality Assurance',
      'Problem Solving',
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-[#080d19] px-6 py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            My technical toolkit
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Technical <span className="text-emerald-400">Skills</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-400">
            Technologies and tools I use to build responsive interfaces,
            develop backend services, integrate APIs, and solve real-world
            problems through software.
          </p>
        </div>

        {/* Skills cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category) => {
            const Icon = category.icon;

            return (
              <article
                key={category.title}
                className="group rounded-2xl border border-white/10 bg-[#0b1120] p-7 transition duration-300 hover:-translate-y-1 hover:border-emerald-400/40 sm:p-8"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400 transition group-hover:bg-emerald-400 group-hover:text-gray-950">
                    <Icon size={24} />
                  </div>

                  <h3 className="text-xl font-semibold">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-gray-300 transition hover:border-emerald-400/40 hover:text-emerald-300"
                    >
                      <FiCheckCircle
                        size={14}
                        className="shrink-0 text-emerald-400"
                      />
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;