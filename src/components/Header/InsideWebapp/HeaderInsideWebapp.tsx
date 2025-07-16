import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import styles from './header_inside_webapp.module.scss';
import MobileHeader from './Mobile/MobileHeader';
import NonMobileHeader from './NonMobile/NonMobileHeader';
import TaskModal from '../../Modals/TaskModal/TaskModal';
import ProjectModal from '../../Modals/ProjectModal/ProjectModal';
import { dailyTaskModalNewTaskData, taskModalNewTaskData } from '../../Helpers/modalBoilerPlateData';
import DailyTaskModal from '../../Modals/DailyTaskModal/DailyTaskModal';
import { useMe } from '../../../hooks/useAuth';

function HeaderInsideWebapp() {
  const { data: user } = useMe();
  const username = user?.username || '';
  const avatar = user?.avatar || '';
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [openProjectModal, setOpenProjectModal] = useState(false);
  const [openTaskModal, setOpenTaskModal] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState('');
  const [openDailyTaskModal, setOpenDailyTaskModal] = useState(false);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="fixed" className={styles.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <MobileHeader
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
            anchorElNav={anchorElNav}
          />

          <NonMobileHeader
            setOpenProjectModal={setOpenProjectModal}
            setOpenTaskModal={setOpenTaskModal}
            openSnackBar={openSnackBar}
            setOpenSnackBar={setOpenSnackBar}
            snackBarMessage={snackBarMessage}
            setOpenDailyTaskModal={setOpenDailyTaskModal}
          />
          <Box sx={{ flexGrow: 0 }}>
            <Avatar alt={username} src={avatar} />
          </Box>
        </Toolbar>
      </Container>


      {/* Modals */}
      <ProjectModal
        isOpen={openProjectModal}
        onClose={() => { setOpenProjectModal(false) }} title="Add Project"
        project={{
          id: "", title: "", description: "", projectColor: "", createdAt: new Date(), lastUpdatedAt: new Date(), openTasks: 0, doneTasks: 0
        }}
      />
      <TaskModal
        isOpen={openTaskModal}
        onClose={() => { setOpenTaskModal(false) }} modalTitle="Add Task"
        task={taskModalNewTaskData}
        setOpenSnackBar={setOpenSnackBar}
        setSnackBarMessage={setSnackBarMessage}
      />
      <DailyTaskModal
        isOpen={openDailyTaskModal}
        onClose={() => { setOpenDailyTaskModal(false) }}
        title="Create Daily Task"
        isEditing={false}
        dailyTask={dailyTaskModalNewTaskData}
      />

    </AppBar>
  );
}
export default HeaderInsideWebapp;
