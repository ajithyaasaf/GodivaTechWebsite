import { Todo } from "@/lib/todoStorage";
import TaskItem from "./TaskItem";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TaskListProps {
  tasks: Todo[];
  onToggleTask: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export default function TaskList({ tasks, onToggleTask, onDeleteTask }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-10">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-slate-300 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <p className="text-slate-500">No tasks yet. Add some tasks to get started!</p>
      </div>
    );
  }

  return (
    <ScrollArea className="max-h-[60vh]">
      <div className="space-y-2">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={onToggleTask}
            onDelete={onDeleteTask}
          />
        ))}
      </div>
    </ScrollArea>
  );
}
