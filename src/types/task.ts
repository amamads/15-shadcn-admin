export interface Task {
  taskId: number;
  title: string;
  status: "canceled"|'done'|'todo'|'backlog'|'in Progress';
  priority:'low'| 'medium'| 'high'
  type:'feature' | 'documentation'|'bug'
}
