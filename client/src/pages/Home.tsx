import { useEffect, useState } from "react";
import AddTaskForm from "@/components/todo/AddTaskForm";
import TaskList from "@/components/todo/TaskList";
import { Todo, todoStorage } from "@/lib/todoStorage";

export default function Home() {
  const [tasks, setTasks] = useState<Todo[]>([]);
  const [remainingCount, setRemainingCount] = useState(0);

  // Load tasks from localStorage on initial render
  useEffect(() => {
    const storedTasks = todoStorage.getAll();
    setTasks(storedTasks);
    updateRemainingCount(storedTasks);
  }, []);

  const updateRemainingCount = (currentTasks: Todo[]) => {
    const count = currentTasks.filter(task => !task.completed).length;
    setRemainingCount(count);
  };

  const handleAddTask = (text: string) => {
    const newTodo = todoStorage.add(text);
    const updatedTasks = [newTodo, ...tasks];
    setTasks(updatedTasks);
    updateRemainingCount(updatedTasks);
  };

  const handleToggleTask = (id: string) => {
    const updatedTasks = todoStorage.toggle(id);
    setTasks(updatedTasks);
    updateRemainingCount(updatedTasks);
  };

  const handleDeleteTask = (id: string) => {
    const updatedTasks = todoStorage.delete(id);
    setTasks(updatedTasks);
    updateRemainingCount(updatedTasks);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <header className="mb-6">
        <h1 className="text-2xl font-semibold text-slate-800 mb-1">My Todo List</h1>
        <p className="text-sm text-slate-500">
          <span>{remainingCount}</span> tasks remaining
        </p>
      </header>

      <AddTaskForm onAddTask={handleAddTask} />
      
      <TaskList 
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
