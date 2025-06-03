import type { JSX } from "@emotion/react/jsx-runtime";
import { Modal } from "@mui/material";
import styles from "./base_modal.module.scss";
import XIcon from '@mui/icons-material/Clear';
import { type ReactNode } from "react";
import CheckMark from '@mui/icons-material/Check';
import DeleteBin from '@mui/icons-material/Delete';
import CrossIcon from '@mui/icons-material/Clear';
import IconButtonHL from "../../Widgets/Buttons/IconButton";

type ModalFooterButtons = "cancel"| "delete" | "save"
interface IBaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    size?: "small" | "medium" | "large" | "fit_content";
    title: string,
    showFooter?: boolean;
    displayedButtons?: ModalFooterButtons[];
    onDelete?: () => void;
    onSave?: () => void;
    onCancel?: () => void;
    isEditing?: boolean;
}

function BaseModal({
    isOpen,
    onClose,
    children,
    size = "medium",
    title,
    showFooter = false,
    displayedButtons = ["cancel", "delete", "save"],
    onDelete,
    onSave,
    onCancel,
    isEditing = false
}: IBaseModalProps): JSX.Element {


    return (
        <Modal
            open={isOpen}
            onClose={onClose}
            className={styles.modal}
            tabIndex={-1}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            disableAutoFocus
        >
            <div className={`${styles.modal_content } ${styles[size]}`}  >
                <div className={styles.modal_header}>
                    <h3 className={styles.modal_title}>{title}</h3>
                    <XIcon onClick={onClose} className={styles.modal_close} fontSize="large" />
                </div>
                <div className={styles.modal_body}>
                    {children}
                </div>
                {showFooter && 
                    <div className={styles.modal_footer_buttons}>
                        {displayedButtons.includes("cancel") &&
                            <IconButtonHL 
                                onClick={onCancel}
                                title="Cancel"
                                icon={<CrossIcon />}
                                color="grey"
                            />
                        }
                        {displayedButtons.includes("delete") && 
                            <IconButtonHL 
                                disabled={!isEditing}
                                onClick={onDelete}
                                title="Delete"
                                icon={<DeleteBin />}
                                color="error"
                            />
                        }
                        {displayedButtons.includes("save") && 
                            <IconButtonHL
                                onClick={onSave}
                                title="Save"
                                icon={<CheckMark />}
                            />
                        }
                    </div>
                }
            </div>
        </Modal>
    )
}

export default BaseModal