import { useState } from 'react';
import styles from './comment_section.module.scss'
import { Input, Typography } from '@mui/material';
import IconButtonHL from '../../../Widgets/Buttons/IconButton';
import { Icons } from '../../../../assets/JSX_Icons/Icons';
import type { ITaskFrontend } from '../../../../Interfaces/ITask';

interface CommentSectionProps {
    comments: ITaskFrontend['comments'];
    onAddComment: (comment: string) => void;
    onDeleteComment: (index: number) => void;
    onEditComment: (index: number, newComment: string) => void;
}

function CommentSection({
    comments = [],
    onAddComment,
    onDeleteComment,
    onEditComment
}: CommentSectionProps) {
    const [commentInput, setCommentInput] = useState('');
    const [editingCommentIndex, setEditingCommentIndex] = useState<number | null>(null);
    const [editingCommentInput, setEditingCommentInput] = useState('');

    return (
        <div className={styles.commentSection}>
            <Typography variant='h4' className={styles.commentSectionTitle}>Comments</Typography>
            <div className={styles.commentSectionContent}>
                {comments.length > 0 ?
                    comments.map((comment, index) => (
                        <div key={index} className={styles.comment}>
                            <Typography variant='h6' component="b" className={styles.commentHeader}>
                                Comment {index + 1}:
                            </Typography>
                            <div className={styles.commentContent}>

                                {editingCommentIndex === index ?
                                    <Input
                                        value={editingCommentInput}
                                        onChange={(e) => setEditingCommentInput(e.target.value)}
                                        className={styles.commentInput}
                                    />
                                    :
                                    <p className={styles.commentInput}>{comment.content}</p>
                                }
                                <div className={styles.commentActions}>
                                    {editingCommentIndex !== index
                                        ?
                                        <IconButtonHL
                                            variant="contained"
                                            onClick={() => {
                                                setEditingCommentIndex(index);
                                                setEditingCommentInput(comment.content || '');
                                            }}
                                            title='Edit'
                                            icon={<Icons.EditIcon />}
                                        />
                                        :
                                        <IconButtonHL
                                            variant="contained"
                                            onClick={() => {
                                                onEditComment(index, editingCommentInput);
                                                setEditingCommentIndex(null)
                                            }}
                                            title='Save'
                                            color='success'
                                            icon={<Icons.CheckMarkIcon />}
                                        />
                                    }
                                    <IconButtonHL
                                        variant="contained"
                                        onClick={() => { onDeleteComment(index); setEditingCommentIndex(null) }}
                                        color="error"
                                        title='Delete'
                                        icon={<Icons.TrashIcon />}
                                    />
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    <p>No comments yet.</p>
                }
            </div>
            <div className={styles.commentSectionInput}>

                <Input
                    value={commentInput}
                    onChange={(e) => setCommentInput(e.target.value)}
                    className={styles.commentInput}
                    multiline
                />
                <IconButtonHL
                    variant="contained"
                    onClick={() => { onAddComment(commentInput); setCommentInput('') }}
                    title='Add Comment'
                    icon={<Icons.AddIcon />}
                />
            </div>
        </div>
    )
}

export default CommentSection