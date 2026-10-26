
import {
  FiBriefcase,
  FiCalendar,
  FiMapPin,
  FiArrowUpRight,
} from 'react-icons/fi';

function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#0b1120] px-6 py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            My professional journey
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Work <span className="text-emerald-400">Experience</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-400">
            My professional experience building software, solving technical
            problems, and contributing to development projects.
          </p>
        </div>

        <div className="relative border-l border-emerald-400/30 pl-6 sm:pl-10">
          {/* Experience item */}
          <article className="relative rounded-2xl border border-white/10 bg-[#080d19] p-6 transition hover:border-emerald-400/40 sm:p-8">
            {/* Timeline marker */}
            <div className="absolute -left-[33px] top-8 h-4 w-4 rounded-full border-4 border-[#0b1120] bg-emerald-400 sm:-left-[49px]" />

            <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                  <FiBriefcase size={24} />
                </div>

                <h3 className="text-xl font-bold sm:text-2xl">
                  Software Developer
                </h3>

                <p className="mt-2 text-lg font-medium text-emerald-400">
                  MetroBlue Tech Systems Ltd.
                </p>

                <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-400">
                  <span className="flex items-center gap-2">
                    <FiMapPin size={15} />
                    Lagos, Nigeria
                  </span>

                  <span className="flex items-center gap-2">
                    <FiCalendar size={15} />
                    Professional Experience
                  </span>
                </div>
              </div>

              <span className="w-fit rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-2 text-xs font-semibold text-emerald-300">
                Software Development
              </span>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <h4 className="mb-4 font-semibold text-white">
                Responsibilities & Contributions
              </h4>

              <ul className="space-y-4 text-sm leading-7 text-gray-400">
                <li className="flex items-start gap-3">
                  <FiArrowUpRight className="mt-1 shrink-0 text-emerald-400" />
                  Developing and improving software applications using modern
                  web development technologies.
                </li>

                <li className="flex items-start gap-3">
                  <FiArrowUpRight className="mt-1 shrink-0 text-emerald-400" />
                  Contributing to frontend development, backend integration,
                  API functionality, and application debugging.
                </li>

                <li className="flex items-start gap-3">
                  <FiArrowUpRight className="mt-1 shrink-0 text-emerald-400" />
                  Supporting software testing and quality assurance to improve
                  application reliability and usability.
                </li>

                <li className="flex items-start gap-3">
                  <FiArrowUpRight className="mt-1 shrink-0 text-emerald-400" />
                  Collaborating with team members, coordinating development
                  tasks, and supporting technical problem-solving.
                </li>
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

export default Experience;