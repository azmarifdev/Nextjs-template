import type { Task } from "@/modules/task/types";

export function filterTasks(tasks: Task[], query: string, statusFilter: string): Task[] {
  return tasks.filter((task) => {
    const matchQuery = [task.title, task.assignee].join(" ").toLowerCase().includes(query.toLowerCase());
    const matchStatus = statusFilter === "all" ? true : task.status === statusFilter;
    return matchQuery && matchStatus;
  });
}

export function getTaskStats(tasks: Task[]) {
  return {
    total: tasks.length,
    todo: tasks.filter((task) => task.status === "todo").length,
    progress: tasks.filter((task) => task.status === "in-progress").length,
    done: tasks.filter((task) => task.status === "done").length
  };
}

export function updateTaskStatus(tasks: Task[], id: string, status: Task["status"]) {
  return tasks.map((task) => {
    if (task.id !== id) {
      return task;
    }

    return { ...task, status };
  });
}
