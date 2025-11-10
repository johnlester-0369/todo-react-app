import { useEffect, useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import TodoList from './components/common/TodoList'
import { type Todo } from './components/common/TodoItem'
import { useTheme } from './hooks/useTheme'

const STORAGE_KEY = 'todos'

function App() {
  const { theme, toggleTheme } = useTheme()
  const [todos, setTodos] = useState<Todo[]>(() => {
    // Load todos from localStorage on mount
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      return stored ? JSON.parse(stored) : []
    } catch (error) {
      console.error('Failed to load todos:', error)
      return []
    }
  })

  // Save todos to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    } catch (error) {
      console.error('Failed to save todos:', error)
    }
  }, [todos])

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
      createdAt: Date.now(),
    }
    setTodos((prev) => [newTodo, ...prev])
  }

  const handleToggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleDeleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header onThemeToggle={toggleTheme} currentTheme={theme} />
      
      <main className="flex-1 py-8">
        <div className="mx-auto max-w-4xl px-4">
          <TodoList
            todos={todos}
            onAddTodo={handleAddTodo}
            onToggleTodo={handleToggleTodo}
            onDeleteTodo={handleDeleteTodo}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App