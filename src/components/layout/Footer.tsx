import { Github } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="mt-auto border-t border-border bg-surface-1">
      <div className="mx-auto max-w-4xl px-4 py-6">
        <div className="flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-sm text-muted">
            Built with React + TypeScript + Tailwind CSS
          </p>
          <div className="flex items-center gap-2">
            <p className="text-sm text-text">Made by John Lester</p>
            <span className="text-muted">•</span>
            <a
              href="https://github.com/johnlester-0369"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-primary transition-colors hover:text-primary/80"
            >
              <Github className="h-4 w-4" aria-hidden="true" />
              <span>My Github</span>
            </a>
          </div>
          <p className="text-xs text-muted">
            © {currentYear} Todo App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}