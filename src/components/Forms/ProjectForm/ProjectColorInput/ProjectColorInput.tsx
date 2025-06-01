import { Typography } from "@mui/material"
import styles from "./project_color_input.module.scss"

interface ProjectColorInputProps {
  colorState: string,
  setColorState: React.Dispatch<React.SetStateAction<string>>
}

function ProjectColorInput({
  colorState,
  setColorState
} : ProjectColorInputProps) { 
  return (
    <div className={styles.projectColorInputContainer}>
      <Typography>Project Color: </Typography>
      <input
        type="color"
        value={colorState}
        onChange={(e) => setColorState(e.target.value)}
      />
      <Typography>{colorState}</Typography>
    </div>
  )
}

export default ProjectColorInput