import { Box, Input } from "@mui/material"
import styles from "./non_mobile_header.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import { AddButton } from "../../../Widgets/Buttons/AddButton";
import SucessSnackbar from "../../../Widgets/Snackbars/SucessSnackbar";

interface NonMobileHeaderProps {
    setOpenProjectModal: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
    openSnackBar: boolean;
    setOpenSnackBar: React.Dispatch<React.SetStateAction<boolean>>;
    snackBarMessage: string
    setOpenDailyTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function NonMobileHeader({
    setOpenProjectModal,
    setOpenTaskModal,
    openSnackBar,
    setOpenSnackBar,
    snackBarMessage,
    setOpenDailyTaskModal
}: NonMobileHeaderProps) {    
    const handleOpenProjectModal = () => {
        setOpenProjectModal(true);
    }
    const handleOpenTaskModal = () => {
        setOpenTaskModal(true);
    }

    const handleOpenDailyTaskModal = () => {
        setOpenDailyTaskModal(true);
    }
    
    return (
        <>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, gap: 5 }}>
                <div className={styles.searchContainer}>
                    <Input
                        placeholder="Search..."
                        className={styles.searchInput}
                        inputProps={{ 'aria-label': 'search' }}
                    />
                    <SearchIcon className={styles.searchIcon} />
                </div>
                <div className={styles.buttonContainer}>
                    <AddButton 
                        onClick={handleOpenProjectModal}
                        title="Add Project"
                        variant="contained"
                    />
                    <AddButton
                        onClick={handleOpenTaskModal}
                        title="Add Task"
                        variant="contained"
                    />
                    <AddButton
                        onClick={handleOpenDailyTaskModal}
                        title="Add Daily Task"
                        variant="contained"
                    />
                </div>
                <SucessSnackbar 
                    snackBarMessage={snackBarMessage}
                    openSnackBar={openSnackBar}
                    setOpenSnackBar={setOpenSnackBar}
                />
            </Box>
        </>
    )
}

export default NonMobileHeader