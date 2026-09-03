const navLinks = [
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Digital Store', href: '#store' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  return (
    <header>
      <div className="overflow-hidden px-2">
        <h1
          className="select-none whitespace-nowrap font-display uppercase leading-none text-electric"
          style={{
            fontSize: 'clamp(3.5rem, 17vw, 19rem)',
            letterSpacing: '0.01em',
          }}
        >
          Pablo UX
        </h1>
      </div>

      <nav className="grid grid-cols-1 items-center gap-3 border-y border-border px-4 py-3 sm:grid-cols-3 sm:px-6">
        <span className="font-mono text-xs uppercase tracking-wider text-ink">
          Product &amp; UX Design Studio
        </span>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-ink sm:justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-electric"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="mailto:nhimchanborey@gmail.com"
          className="font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:text-electric sm:justify-self-end"
        >
          nhimchanborey@gmail.com
        </a>
      </nav>
    </header>
  )
}
