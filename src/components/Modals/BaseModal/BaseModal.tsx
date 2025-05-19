import type { JSX } from "@emotion/react/jsx-runtime";
import { Modal } from "@mui/material";
import styles from "./base_modal.module.scss";
import XIcon from '@mui/icons-material/Clear';
import { type ReactNode } from "react";
interface IBaseModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
    size?: "small" | "medium" | "large";
    title: string
}

function BaseModal({
    isOpen,
    onClose,
    children,
    size = "medium",
    title,
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
                    <XIcon onClick={() => onClose()} className={styles.modal_close} fontSize="large" />
                </div>
                {children}
            </div>
        </Modal>
    )
}

export default BaseModal