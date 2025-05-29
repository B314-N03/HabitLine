import styles from './comment_section.module.scss'

interface CommentSectionProps {
    comments: string[];
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
  return (
    <div className={styles.commentSection}>
        <h3 className={styles.commentSectionTitle}>Comments</h3>
        <div className={styles.commentSectionContent}>
            {comments.length > 0 ?
                comments.map((comment, index) => (
                    <div key={index} className={styles.comment}>
                        <p>{comment}</p>
                        <div className={styles.commentActions}>
                            <button type="button" onClick={() => onEditComment(index, comment)}>Edit</button>
                            <button type="button" onClick={() => onDeleteComment(index)}>Delete</button>
                        </div>
                    </div>
                ))
            :
            <p>No comments yet.</p>
            }
        </div>
        <div className={styles.commentSectionInput}>
            
            <input type="text" placeholder="Add a comment..." />
            <button type="button" onClick={() => onAddComment("")}>Add Comment</button>
        </div>
    </div>
  )
}

export default CommentSection