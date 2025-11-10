import Button from '../ui/Button'

interface HeaderProps {
  onThemeToggle: () => void
  currentTheme: 'light' | 'dark'
}

export default function Header({ onThemeToggle, currentTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-surface-1/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-4">
        <h1 className="text-2xl font-bold text-headline">Todo App</h1>
        
        <Button
          variant="ghost"
          size="md"
          onClick={onThemeToggle}
          aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
          className="gap-2"
        >
          {currentTheme === 'light' ? (
            <>
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </>
          ) : (
            <>
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </>
          )}
        </Button>
      </div>
    </header>
  )
}