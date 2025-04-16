import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle } from "lucide-react";

interface AddTaskFormProps {
  onAddTask: (text: string) => void;
}

export default function AddTaskForm({ onAddTask }: AddTaskFormProps) {
  const [newTaskText, setNewTaskText] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newTaskText.trim()) {
      setError(true);
      return;
    }
    
    onAddTask(newTaskText);
    setNewTaskText("");
    setError(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTaskText(e.target.value);
    if (error) setError(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex">
        <Input
          value={newTaskText}
          onChange={handleInputChange}
          placeholder="Add a new task..."
          className="rounded-r-none focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <Button 
          type="submit" 
          className="rounded-l-none"
        >
          <PlusCircle className="h-5 w-5" />
        </Button>
      </div>
      {error && (
        <div className="text-red-500 text-sm mt-1">
          Please enter a task
        </div>
      )}
    </form>
  );
}
