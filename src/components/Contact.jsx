import { FaWhatsapp, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FiMail, FiArrowUpRight } from "react-icons/fi";
import { contacts, isPlaceholder } from "../data/site.js";

function ContactLink({ icon: Icon, label, value, url, className = "" }) {
  const todo = isPlaceholder(url);
  return (
    <a
      href={todo ? undefined : url}
      target={url?.startsWith("http") ? "_blank" : undefined}
      rel="noopener noreferrer"
      aria-disabled={todo || undefined}
      className={`group flex items-center gap-4 py-4 transition-colors hover:text-violet ${className}`}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet/10 text-violet">
        <Icon size={15} aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="label-mono block">{label}</span>
        {value && <span className="block truncate text-sm">{value}</span>}
        {todo && <span className="font-mono text-[10px] text-violet">à compléter</span>}
      </span>
      <FiArrowUpRight
        className="shrink-0 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="bg-base-200/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:px-10 lg:grid-cols-2 lg:py-28">
        <div>
          <h2 className="text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Un projet en tête ?<br />
            Parlons-en.
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink/65">
            Je suis disponible pour des collaborations, missions freelance et nouvelles
            conversations créatives.
          </p>
          <a
            href={contacts.email.url}
            className="btn btn-primary mt-8 rounded-full px-6 font-normal normal-case"
          >
            Me contacter <FiArrowUpRight />
          </a>
        </div>

        <div className="divide-y divide-ink/15 border-y border-ink/15 self-start">
          <ContactLink
            icon={FaWhatsapp}
            label="WhatsApp"
            value={contacts.whatsapp.display}
            url={contacts.whatsapp.url}
          />
          <ContactLink
            icon={FiMail}
            label="Email"
            value={contacts.email.display}
            url={contacts.email.url}
          />
          <div className="grid divide-ink/15 sm:grid-cols-2 sm:divide-x">
            <ContactLink icon={FaLinkedinIn} label="LinkedIn" url={contacts.linkedin.url} />
            <ContactLink
              icon={FaGithub}
              label="GitHub"
              url={contacts.github.url}
              className="sm:pl-5"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
