// Local storage interface for todos

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: string;
}

const STORAGE_KEY = 'todos';

export const todoStorage = {
  getAll: (): Todo[] => {
    try {
      const todos = localStorage.getItem(STORAGE_KEY);
      return todos ? JSON.parse(todos) : [];
    } catch (error) {
      console.error('Error loading todos from localStorage:', error);
      return [];
    }
  },

  save: (todos: Todo[]): void => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    } catch (error) {
      console.error('Error saving todos to localStorage:', error);
    }
  },

  add: (text: string): Todo => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text: text.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    const todos = todoStorage.getAll();
    todos.unshift(newTodo);
    todoStorage.save(todos);
    return newTodo;
  },

  toggle: (id: string): Todo[] => {
    const todos = todoStorage.getAll().map((todo) => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    todoStorage.save(todos);
    return todos;
  },

  delete: (id: string): Todo[] => {
    const todos = todoStorage.getAll().filter((todo) => todo.id !== id);
    todoStorage.save(todos);
    return todos;
  },

  getRemainingCount: (): number => {
    return todoStorage.getAll().filter(todo => !todo.completed).length;
  }
};
