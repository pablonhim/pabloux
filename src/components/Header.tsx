export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 sm:px-10">
      <a
        href="#top"
        aria-label="Pablo UX — home"
        className="flex h-8 w-8 items-center justify-center rounded-full border border-ink font-davinci text-sm text-ink"
      >
        P
      </a>
      <a
        href="#contact"
        className="font-sans text-xs text-ink underline-offset-4 transition-[text-decoration] hover:underline"
      >
        Pablo UX
      </a>
    </header>
  )
}
