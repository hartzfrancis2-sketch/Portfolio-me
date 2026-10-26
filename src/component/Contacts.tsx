
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
} from 'react-icons/fi';
import { useState, type FormEvent } from 'react';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const recipient = 'your-email@example.com'; // Replace with your email
    const emailSubject = encodeURIComponent(subject);
    const emailBody = encodeURIComponent(
      `Hello Francis,\n\n${message}\n\nFrom: ${name}\nReply email: ${email}`
    );

    window.location.href =
      `mailto:${recipient}?subject=${emailSubject}&body=${emailBody}`;
  };

  const contactDetails = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'your-email@example.com',
      href: 'mailto:your-email@example.com',
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '08132360187',
      href: 'tel:+2348132360187',
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Lagos, Nigeria',
      href: null,
    },
  ];

  return (
    <section
      id="contact"
      className="bg-[#0b1120] px-6 py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-14">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            Let's connect
          </p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Get In <span className="text-emerald-400">Touch</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-400">
            Have a project in mind, a job opportunity, or an idea you'd like
            to discuss? I'd be happy to hear from you.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Contact information */}
          <div>
            <h3 className="text-2xl font-semibold">
              Let's talk about your next project.
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              I'm open to software development opportunities, collaborations,
              and projects where technology can solve meaningful problems.
            </p>

            <div className="mt-8 space-y-4">
              {contactDetails.map((item) => {
                const Icon = item.icon;

                const content = (
                  <>
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400">
                      <Icon size={22} />
                    </div>

                    <div>
                      <p className="text-sm text-gray-500">{item.label}</p>
                      <p className="mt-1 font-medium text-gray-200">
                        {item.value}
                      </p>
                    </div>
                  </>
                );

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#080d19] p-4"
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        className="flex items-center gap-4"
                      >
                        {content}
                      </a>
                    ) : (
                      content
                    )}
                  </div>
                );
              })}
            </div>

            {/* Social links */}
            <div className="mt-8">
              <p className="mb-4 text-sm font-medium text-gray-400">
                Find me online
              </p>

              <div className="flex gap-3">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub profile"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-gray-300 transition hover:border-emerald-400/40 hover:text-emerald-400"
                >
                  <FiGithub size={21} />
                </a>

                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn profile"
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 text-gray-300 transition hover:border-emerald-400/40 hover:text-emerald-400"
                >
                  <FiLinkedin size={21} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-white/10 bg-[#080d19] p-6 sm:p-8"
          >
            <h3 className="text-xl font-semibold">Send me a message</h3>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Fill in the form below to prepare a message in your email app.
            </p>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Name
                </label>

                <input
                  id="contact-name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Enter your name"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-emerald-400"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Your Email
                </label>

                <input
                  id="contact-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-emerald-400"
                />
              </div>
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Subject
              </label>

              <input
                id="contact-subject"
                type="text"
                value={subject}
                onChange={(event) => setSubject(event.target.value)}
                placeholder="What would you like to discuss?"
                required
                className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-emerald-400"
              />
            </div>

            <div className="mt-5">
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-medium text-gray-300"
              >
                Message
              </label>

              <textarea
                id="contact-message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Tell me about your project or opportunity..."
                rows={5}
                required
                className="w-full resize-y rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-emerald-400"
              />
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-lg bg-emerald-400 px-6 py-3.5 font-semibold text-gray-950 transition hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              Send Message <FiSend size={18} />
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-gray-500">
              This form opens your email application; it does not send
              messages directly from the website.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;