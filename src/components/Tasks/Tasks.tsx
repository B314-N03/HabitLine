import { Skeleton } from "@mui/material";
import { useProjects } from "../../hooks/useProjects";
import { useTasks } from "../../hooks/useTasks";
import type { IProject } from "../../Interfaces/IProject";
import type { ITask } from "../../Interfaces/ITask";
import { useEffect, useState } from "react";
import AccordionGroup, { type AccordionItem } from "../Widgets/AccordionGroup/AccordionGroup";
import ProjectBoard from "../Widgets/ProjectBoard/ProjectBoard";
import { Alert, Snackbar } from "@mui/material";
import TaskModal from "../Modals/TaskModal/TaskModal";

function Tasks() {
  const { data: projects, isLoading } = useProjects();
  const { data: tasks } = useTasks();
  const [skeletonDimensions, setSkeletonDimensions] = useState({
    width: window.innerWidth / 2,
    height: window.innerHeight / 2,
  });
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const [taskToView, setTaskToView] = useState<ITask>({} as ITask);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState('');

  useEffect(() => {
    const handleResize = () => {
      setSkeletonDimensions({
        width: window.innerWidth / 2,
        height: window.innerHeight / 4,
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (isLoading || !projects || !tasks) {
    return (
      <Skeleton
        variant="rounded"
        width={skeletonDimensions.width}
        height={skeletonDimensions.height}
      />
    );
  }

  const accordionItems: AccordionItem[] = projects.map((project: IProject) => {
    const projectTasks = tasks.filter((task: ITask) => task.projectId === project.id);
    return {
      title: 
        `${project.title} ${project.openTasks + project.doneTasks > 0 ? `(${project.openTasks} open task${project.openTasks > 1 ? 's' : " "})` : "(No Tasks)"}`,
      content: <ProjectBoard tasks={projectTasks} key={project.id} setOpenTaskModal={setOpenTaskModal} setTaskToView={setTaskToView} />,
    };
  });

  return (
    <main>
      <AccordionGroup items={accordionItems} />
       <TaskModal
        isOpen={openTaskModal}
        onClose={() => setOpenTaskModal(false)}
        modalTitle="Edit Task"
        task={taskToView}
        isEditing
        setOpenSnackBar={setOpenSnackBar}
        setSnackBarMessage={setSnackBarMessage}
      />
      <Snackbar
        open={openSnackBar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackBar(false)}
      >
        <Alert
          onClose={() => setOpenSnackBar(false)}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackBarMessage}
        </Alert>
      </Snackbar>
    </main>
  );
}

export default Tasks;
