import type { JSX } from "@emotion/react/jsx-runtime";
import { Tooltip } from "@mui/material";

import BugIcon from '@mui/icons-material/BugReportOutlined';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpwardOutlined';
import { taskTypeIconSize } from "../Widgets/Cards/TaskCard/const";

export const taskTypeMap: { [key: string]: JSX.Element } = {
        "Bug":
            <Tooltip title="Bug" placement="top" arrow>
                <BugIcon color="error" fontSize={taskTypeIconSize} />
            </Tooltip>,
        "Feature":
            <Tooltip title="Feature" placement="top" arrow>
                <ArrowUpwardIcon color="success" fontSize={taskTypeIconSize}/>
            </Tooltip>,
        "ToDo":
        <Tooltip title="ToDo" placement="top" arrow>
            <CheckBoxIcon color="info" fontSize={taskTypeIconSize}/>
        </Tooltip>,
    };
