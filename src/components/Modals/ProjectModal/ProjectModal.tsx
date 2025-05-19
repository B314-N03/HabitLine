import type { IProject } from "../../../Interfaces/IProject";
import ProjectForm from "../../Forms/ProjectForm/ProjectForm";
import BaseModal from "../BaseModal/BaseModal";

interface ProjectModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    project: IProject
}

function ProjectModal({
    isOpen,
    onClose,
    title,
    project
} : ProjectModalProps) {
    return (
        <BaseModal
            isOpen={isOpen}
            onClose={onClose}
            size="large"
            title={title}
        >
            <ProjectForm project={project} onClose={onClose} isEditing={title.toLowerCase().includes("edit")} />

        </BaseModal>
    )
}

export default ProjectModal