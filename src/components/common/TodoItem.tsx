import Button from '../ui/Button'

export interface Todo {
  id: string
  text: string
  completed: boolean
  createdAt: number
}

interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <div
      className="group flex items-center gap-3 rounded-lg border border-border bg-surface-2 p-4 transition-all hover:border-primary/30 hover:shadow-soft-md"
      role="listitem"
    >
      <button
        onClick={() => onToggle(todo.id)}
        className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded border-2 border-primary transition-all hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
        aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
      >
        {todo.completed && (
          <svg
            className="h-4 w-4 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M5 13l4 4L19 7"
            />
          </svg>
        )}
      </button>

      <span
        className={`flex-1 text-base transition-all ${
          todo.completed
            ? 'text-muted line-through'
            : 'text-text'
        }`}
      >
        {todo.text}
      </span>

      <Button
        variant="ghost"
        size="sm"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
        className="opacity-0 transition-opacity group-hover:opacity-100"
      >
        <svg
          className="h-5 w-5 text-error"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      </Button>
    </div>
  )
}