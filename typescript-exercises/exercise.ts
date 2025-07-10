// Create your interfaces and enum below:
interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: string;
}

enum Priority {
    Low,
    Medium,
    High
}

interface TaskPriority extends Task{
    priority: Priority;
}
// Create your task below:
const task: TaskPriority = {
    id: 1,
    title: "Sleepover Planning",
    description: "Buy food and board games",
    dueDate: "July 7",
    priority: Priority.Medium
}

// ONCE DONE, UNCOMMENT THE LINE BELOW AND RUN THE FILE
console.log(task);