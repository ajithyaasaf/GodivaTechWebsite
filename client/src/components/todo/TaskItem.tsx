import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { Trash } from "lucide-react";
import { Todo } from "@/lib/todoStorage";

interface TaskItemProps {
  task: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function TaskItem({ task, onToggle, onDelete }: TaskItemProps) {
  return (
    <div 
      className="bg-white rounded-md shadow-sm p-3 flex items-center transition-all duration-200"
      data-task-id={task.id}
    >
      <Checkbox
        checked={task.completed}
        onCheckedChange={() => onToggle(task.id)}
        className="h-5 w-5 rounded border-slate-300 text-primary mr-3 cursor-pointer"
      />
      
      <span 
        className={cn(
          "flex-grow",
          task.completed && "text-slate-400 line-through"
        )}
      >
        {task.text}
      </span>
      
      <button
        onClick={() => onDelete(task.id)}
        className="ml-2 text-slate-400 hover:text-red-500 transition-colors duration-200"
        aria-label="Delete task"
      >
        <Trash className="h-5 w-5" />
      </button>
    </div>
  );
}
