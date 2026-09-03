const navLinks = [
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Digital Store', href: '#store' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  return (
    <header>
      <div className="overflow-hidden px-2">
        <h1
          className="select-none whitespace-nowrap font-sans font-black uppercase leading-none text-crimson"
          style={{
            fontSize: 'clamp(2.75rem, 14vw, 18rem)',
            letterSpacing: '-0.03em',
          }}
        >
          Chanborey
        </h1>
      </div>

      <nav className="grid grid-cols-1 items-center gap-3 border-y border-border px-4 py-3 sm:grid-cols-3 sm:px-6">
        <span className="font-mono text-xs uppercase tracking-wider text-ink">
          Senior Product Lead &amp; AI Architect
        </span>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-wider text-ink sm:justify-center">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-crimson"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="mailto:nhimchanborey@gmail.com"
          className="font-mono text-xs uppercase tracking-wider text-ink transition-colors hover:text-crimson sm:justify-self-end"
        >
          nhimchanborey@gmail.com
        </a>
      </nav>
    </header>
  )
}
