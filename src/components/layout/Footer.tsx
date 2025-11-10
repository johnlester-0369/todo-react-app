export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border bg-surface-1">
      <div className="mx-auto max-w-4xl px-4 py-6">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <p className="text-sm text-muted">
            Built with React + TypeScript + Tailwind CSS
          </p>
          <p className="text-xs text-muted">
            © {currentYear} Todo App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}