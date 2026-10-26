
import { useState } from 'react';
import { FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
   
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#080d19]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#home" className="text-xl font-bold tracking-tight text-white flex">
          <img src="public/myname.jpeg" alt="My Name" className="h-15 w-15 rounded-full border-2 border-emerald-400" />
        <span className="text-emerald-400"></span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-400 transition hover:text-emerald-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-gray-400 transition hover:text-white"
          >
            <FiGithub size={19} />
          </a>

          <a
            href="https://github.com/hartzfrancis2-sketch"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-gray-400 transition hover:text-white"
          >
            <FiLinkedin size={19} />
          </a>

          <a
            href="#contact"
            className="rounded-lg bg-emerald-400 px-5 py-2.5 text-sm font-semibold text-gray-950 transition hover:bg-emerald-300"
          >
            Hire Me
          </a>
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="text-white md:hidden"
        >
          {isOpen ? <FiX size={25} /> : <FiMenu size={25} />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 px-6 py-4 md:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-gray-300 transition hover:text-emerald-400"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-3 block rounded-lg bg-emerald-400 px-5 py-3 text-center font-semibold text-gray-950"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;