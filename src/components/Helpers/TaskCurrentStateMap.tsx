import type { TaskStatus } from "../../Interfaces/ITask";

type TaskCurrentStateMap = {
  [K in TaskStatus]: string;
};



export const taskCurrentStateMap: TaskCurrentStateMap = {
    "on_hold": "On Hold",
    "to_do": "To Do",
    "in_progress": "In Progress",
    "in_review": "In Review",
    "done": "Done"
}