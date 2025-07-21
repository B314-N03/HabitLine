import { useEffect, useState } from "react";
import { useCreateOrUpdateProject, useDeleteProject } from "../../../hooks/useProjects";
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
}: ProjectModalProps) {
    const { id, title: projectTitle, description, projectColor } = project;
    const isEditing = title.toLowerCase().includes("edit");
    const mutation = useCreateOrUpdateProject();
    const deleteMutation = useDeleteProject();
    const [titleState, setTitleState] = useState(projectTitle);
    const [descriptionState, setDescriptionState] = useState(description);
    const [projectColorState, setProjectColorState] = useState(projectColor);
    const handleSubmit = () => {
        mutation.mutate(
            {
                id,
                title: titleState,
                description: descriptionState,
                projectColor: projectColorState,
                isEditing
            },
            {
                onSuccess: () => {
                    setTitleState('');
                    setDescriptionState('');
                    setProjectColorState('');
                    onClose();
                },
                onError: (error) => {
                    console.error(error);
                }
            },
        )
    }

    const handleDelete = () => {
        if (!window.confirm("Are you sure you want to delete this project?")) return;
        deleteMutation.mutate(
            id,
            {
                onSuccess: () => {
                    setTitleState('');
                    setDescriptionState('');
                    setProjectColorState('');
                    onClose();
                },
                onError: (error) => {
                    console.log(error);
                }
            }
        );
    }

    useEffect(() => {
        setTitleState(projectTitle);
        setDescriptionState(description);
        setProjectColorState(projectColor);
    }, [projectTitle, description, projectColor]);

    return (
        <BaseModal
            isOpen={isOpen}
            onClose={onClose}
            size="large"
            title={title}
            showFooter
            displayedButtons={["cancel", "save", "delete"]}
            onCancel={onClose}
            onDelete={handleDelete}
            onSave={handleSubmit}
            isEditing={isEditing}
        >
            <ProjectForm
                titleState={titleState}
                setTitleState={setTitleState}
                projectColorState={projectColorState}
                setProjectColorState={setProjectColorState}
                descriptionState={descriptionState}
                setDescriptionState={setDescriptionState}
            />

        </BaseModal>
    )
}

export default ProjectModal
