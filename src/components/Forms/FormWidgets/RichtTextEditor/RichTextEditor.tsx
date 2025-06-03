import Editor, { type ContentEditableEvent } from 'react-simple-wysiwyg';
import styles from './rich_text_editor.module.scss'
interface RichTextEditorProps {
    editorValue: string;
    setEditorValue: (value: string) => void;
    readOnly?: boolean,
    showOnlyText?: boolean
}

function RichTextEditor({
    editorValue,
    setEditorValue,
    readOnly = false,
    showOnlyText = false
}: RichTextEditorProps) {
    
    const handleChange = (event: ContentEditableEvent) => {
        setEditorValue(event.target.value)
    };

    return (
        <Editor
            value={editorValue}
            onChange={handleChange}
            containerProps={{
                className: `${styles.richTextEditorContainer} ${showOnlyText ? styles.hideToolbar : ''}`,
            }}
            disabled={readOnly}
            sx={{ color: 'var(--text-main)' }}
        />
  )
}

export default RichTextEditor