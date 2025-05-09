import { Box, Input } from "@mui/material"
import styles from "./non_mobile_header.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import { AddButton } from "../../../Widgets/Cards/Buttons/AddButton";

interface NonMobileHeaderProps {
    setOpenTaskModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function NonMobileHeader({
    setOpenTaskModal
}: NonMobileHeaderProps) {
    const handleAddProject = () => {
        // Logic to add a project
    }
    const handleOpenTaskModal = () => {
        setOpenTaskModal(true);
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
                        onClick={handleAddProject}
                        title="Add Project"
                        variant="contained"
                    />
                    <AddButton
                        onClick={handleOpenTaskModal}
                        title="Add Task"
                        variant="contained"
                    />
                </div>
            </Box>
        </>
    )
}

export default NonMobileHeader