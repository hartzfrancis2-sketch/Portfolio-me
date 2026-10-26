
import {
  FiGithub,
  FiLinkedin,
  FiArrowUp,
  FiCode,
} from 'react-icons/fi';

const footerLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#080d19] px-6 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Main footer */}
        <div className="flex flex-col gap-10 py-12 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-sm">
            <a href="#home" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-400 text-gray-950">
                <FiCode size={23} />
              </span>

              <span className="text-lg font-bold tracking-tight">
                Chibueze <span className="text-emerald-400">Francis</span>
              </span>
            </a>

            <p className="mt-5 leading-7 text-gray-400">
              Full-Stack Software Developer building modern web applications
              and practical software solutions.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition hover:border-emerald-400/40 hover:text-emerald-400"
              >
                <FiGithub size={19} />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-gray-300 transition hover:border-emerald-400/40 hover:text-emerald-400"
              >
                <FiLinkedin size={19} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 font-semibold">Quick Links</h3>

            <nav className="grid grid-cols-2 gap-x-8 gap-y-4 sm:grid-cols-3">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 transition hover:text-emerald-400"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Back to top */}
          <div>
            <h3 className="mb-4 font-semibold">Let's Connect</h3>

            <p className="mb-5 max-w-xs text-sm leading-6 text-gray-400">
              Have a project or opportunity in mind? Let's build something
              meaningful together.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-400 px-5 py-3 text-sm font-semibold text-gray-950 transition hover:bg-emerald-300"
            >
              Contact Me <FiArrowUp size={16} />
            </a>
          </div>
        </div>

        {/* Copyright bar */}
        <div className="flex flex-col gap-3 border-t border-white/10 py-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Chibueze Francis. All rights reserved.
          </p>

          <a
            href="#home"
            className="inline-flex w-fit items-center gap-2 transition hover:text-emerald-400"
          >
            Back to top <FiArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;