import type { DropResult } from "@hello-pangea/dnd";
import { DragDropContext, Droppable, Draggable} from "@hello-pangea/dnd";
import type { ITask, TaskStatus } from "../../../Interfaces/ITask";
import styles from "./project_board.module.scss";
import { useState } from "react";
import TaskCard from "../Cards/TaskCard/TaskCard";
import { useCreateOrUpdateTask } from "../../../hooks/useTasks";
import TaskModal from "../../Modals/TaskModal/TaskModal";
const formatStatusLabel = (status: TaskStatus): string => {
  return status
    .split("_")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

const allStatuses: TaskStatus[] = [
  "on_hold",
  "to_do",
  "in_progress",
  "in_review",
  "done",
];

function ProjectBoard({ tasks }: { tasks: ITask[] }) {
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const [taskToView, setTaskToView] = useState<ITask>({} as ITask);
  const mutation = useCreateOrUpdateTask();
  const [columns, setColumns] = useState(() =>
    allStatuses.reduce((acc, status) => {
      acc[status] = tasks.filter((task) => task.status === status);
      return acc;
    }, {} as Record<TaskStatus, ITask[]>)
  );

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = columns[source.droppableId as TaskStatus];
    const destCol = columns[destination.droppableId as TaskStatus];
    const [movedTask] = sourceCol.splice(source.index, 1);
    movedTask.status = destination.droppableId as TaskStatus;
    destCol.splice(destination.index, 0, movedTask);
    mutation.mutate({...movedTask, isEditing: true});
    setColumns({
      ...columns,
      [source.droppableId]: sourceCol,
      [destination.droppableId]: destCol,
    });
  };

  return (
    <div className={styles.board}>
      <DragDropContext onDragEnd={onDragEnd}>
        {allStatuses.map((status) => (
          <Droppable droppableId={status} key={status}>
            {(provided) => (
              <div
                className={styles.column}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h4 className={styles.columnTitle}>
                  {`${formatStatusLabel(status)} ${columns[status].length}`}
                </h4>
                {columns[status].map((task, index) => (
                  <Draggable draggableId={task.id} index={index} key={task.id}>
                    {(provided) => (
                      <div
                        className={styles.card}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TaskCard
                          id={task.id}
                          taskType={task.taskType}
                          priority={task.priority}
                          title={task.title}
                          description={task.description}
                          createdAt={task.createdAt}
                          updatedAt={task.updatedAt}
                          handleClick={() => {setTaskToView(task); setOpenTaskModal(true)}}
                          projectId={task.projectId}
                          variant="xsmall"
                          showProject={false}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
      <TaskModal
        isOpen={openTaskModal}
        onClose={() => setOpenTaskModal(false)}
        title="Edit Task"
        task={taskToView}
      ></TaskModal>
    </div>
  );
}

export default ProjectBoard;
