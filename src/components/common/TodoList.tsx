import { useState } from 'react'
import Button from '../ui/Button'
import TodoItem, { type Todo } from './TodoItem'

interface TodoListProps {
  todos: Todo[]
  onAddTodo: (text: string) => void
  onToggleTodo: (id: string) => void
  onDeleteTodo: (id: string) => void
}

export default function TodoList({
  todos,
  onAddTodo,
  onToggleTodo,
  onDeleteTodo,
}: TodoListProps) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = inputValue.trim()
    
    if (trimmed) {
      onAddTodo(trimmed)
      setInputValue('')
    }
  }

  const activeTodos = todos.filter((t) => !t.completed)
  const completedTodos = todos.filter((t) => t.completed)

  return (
    <div className="w-full space-y-6">
      {/* Add Todo Form */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="What needs to be done?"
          className="flex-1 rounded-lg border border-border bg-surface-2 px-4 py-2 text-text placeholder-muted transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50"
          aria-label="New todo"
          maxLength={200}
        />
        <Button
          type="submit"
          variant="primary"
          size="md"
          disabled={!inputValue.trim()}
        >
          Add
        </Button>
      </form>

      {/* Stats */}
      {todos.length > 0 && (
        <div className="flex items-center justify-between text-sm text-muted">
          <span>
            {activeTodos.length} {activeTodos.length === 1 ? 'task' : 'tasks'}{' '}
            remaining
          </span>
          {completedTodos.length > 0 && (
            <span>{completedTodos.length} completed</span>
          )}
        </div>
      )}

      {/* Todo Lists */}
      <div className="space-y-6">
        {/* Active Todos */}
        {activeTodos.length > 0 && (
          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
              Active
            </h2>
            <div className="space-y-2" role="list">
              {activeTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={onToggleTodo}
                  onDelete={onDeleteTodo}
                />
              ))}
            </div>
          </div>
        )}

        {/* Completed Todos */}
        {completedTodos.length > 0 && (
          <div className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-muted">
              Completed
            </h2>
            <div className="space-y-2" role="list">
              {completedTodos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={onToggleTodo}
                  onDelete={onDeleteTodo}
                />
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {todos.length === 0 && (
          <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-surface-1 py-12 text-center">
            <svg
              className="mb-4 h-16 w-16 text-muted"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <h3 className="mb-2 text-lg font-semibold text-headline">
              No todos yet
            </h3>
            <p className="text-sm text-muted">
              Add your first task to get started!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}