import DoubleArrow from '@mui/icons-material/DoubleArrow';
import ChevronUp from '@mui/icons-material/ChevronRight';
import MediumPrio from '@mui/icons-material/DensityMedium';
import type { JSX } from '@emotion/react/jsx-runtime';
import { priorityIconSize } from "../Widgets/Cards/TaskCard/const";
import { Tooltip } from "@mui/material";

export const priorityMap: { [key: string]: JSX.Element } = {
        "Critical": 
            <Tooltip title="Critical Priority" placement="top" arrow>
                <DoubleArrow color="error" sx={{ transform: 'rotate(-90deg)' }} fontSize={priorityIconSize}  />
            </Tooltip>,
        "High": 
            <Tooltip title="High Priority" placement="top" arrow>
                <ChevronUp color="error" sx={{ transform: 'rotate(-90deg)' }} fontSize={priorityIconSize}/>
            </Tooltip>,
        "Medium": 
            <Tooltip title="Medium Priority" placement="top" arrow>
                <MediumPrio color="warning" fontSize="medium"/>
            </Tooltip>,
        "Low": 
            <Tooltip title="Low Priority" placement="top" arrow>
                <ChevronUp color="success" sx={{ transform: 'rotate(90deg)' }} fontSize={priorityIconSize}/>
            </Tooltip>,
};