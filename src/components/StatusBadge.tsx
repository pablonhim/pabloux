export function StatusBadge() {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-success animate-pulse-ring" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
      </span>
      <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
        Available for Strategy Contracts
      </span>
    </div>
  )
}
