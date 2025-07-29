import { Skeleton } from "@mui/material";
import { useProjects } from "../../hooks/useProjects";
import { useTasks } from "../../hooks/useTasks";
import type { IProject } from "../../Interfaces/IProject";
import type { ITask } from "../../Interfaces/ITask";
import { useEffect, useState } from "react";
import type { AccordionItem } from "../../components/Widgets/AccordionGroup/AccordionGroup";
import ProjectBoard from "../../components/Widgets/ProjectBoard/ProjectBoard";
import AccordionGroup from "../../components/Widgets/AccordionGroup/AccordionGroup";
import TaskModal from "../../components/Modals/TaskModal/TaskModal";
import SuccessSnackbar from "../../components/Widgets/Snackbars/SuccessSnackbar";
import { MainWrapper } from "../../components/Helpers/Wrappers/MainWrapper/MainWrapper";

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
    const taskSummary =
      project.openTasks + project.doneTasks > 0
        ? `(${project.openTasks} open task${project.openTasks > 1 ? 's' : ''})`
        : '(No Tasks)';
    return {
      title:
        // this displays the title of the project and the number of tasks in the project
        `${project.title} ${taskSummary}`,
      content:
        <ProjectBoard
          tasks={projectTasks}
          key={project.id}
          setOpenTaskModal={setOpenTaskModal}
          setTaskToView={setTaskToView}
        />,
      disabled: project.openTasks === 0,
    };
  });

  return (
    <MainWrapper>
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
      <SuccessSnackbar
        openSnackBar={openSnackBar}
        setOpenSnackBar={setOpenSnackBar}
        snackBarMessage={snackBarMessage}
      />
    </MainWrapper>
  );
}

export default Tasks;
