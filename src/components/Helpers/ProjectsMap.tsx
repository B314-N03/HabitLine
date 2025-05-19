import type { JSX } from "@emotion/react/jsx-runtime";
import { Tooltip } from "@mui/material";

export const projectsMap: { [key: string]: JSX.Element } = {
    "AGSHP": 
        <Tooltip title="AGSHP" placement="top" arrow>
            <span>AGSHP</span>
        </Tooltip>,
    "Podmans Otter Attack": 
        <Tooltip title="Podmans Otter Attack" placement="top" arrow>
            <span>Podmans Otter Attack</span>
        </Tooltip>,
    "Portfolio Website": 
        <Tooltip title="Portfolio Website" placement="top" arrow>
            <span>Portfolio Website</span>
        </Tooltip>,
    "LED-Matrix": 
        <Tooltip title="LED-Matrix" placement="top" arrow>
            <span>LED-Matrix</span>
        </Tooltip>,
};