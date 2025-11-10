import { Moon, Sun, Github } from 'lucide-react'
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
        
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="md"
            onClick={() => window.open('https://github.com/johnlester-0369', '_blank')}
            aria-label="Visit GitHub profile"
          >
            <Github className="h-5 w-5" aria-hidden="true" />
          </Button>

          <Button
            variant="ghost"
            size="md"
            onClick={onThemeToggle}
            aria-label={`Switch to ${currentTheme === 'light' ? 'dark' : 'light'} mode`}
          >
            {currentTheme === 'light' ? (
              <Moon className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Sun className="h-5 w-5" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}