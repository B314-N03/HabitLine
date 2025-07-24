import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import type { AccordionProps } from '@mui/material/Accordion';
import type { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(() => ({
  border: `1px solid var(--divider-border-color)`,
  backgroundColor: "unset",
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'var(--color-decimal)',
  color: 'var(--text-main)',
  flexDirection: 'row-reverse',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
  {
    transform: 'rotate(90deg)',
  },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'var(--color-decimal)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid var(--divider-border-color)',
  backgroundColor: 'var(--color-decimal)',
}));

export interface AccordionItem {
  title: string;
  content: React.ReactNode;
  disabled: boolean;
}

interface AccordionGroupProps {
  items: AccordionItem[];
}

export default function AccordionGroup({
  items,
}: AccordionGroupProps) {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      event.preventDefault();
      setExpanded(newExpanded ? panel : false);
    };

  // sort the items by title
  const sortedItems = items.sort((a, b) => {
    if (a.disabled && !b.disabled) {
      return 1;
    }
    if (!a.disabled && b.disabled) {
      return -1;
    }
    return 0;
  });

  // set the first item to be expanded
  React.useEffect(() => {
    if (sortedItems.length > 0) {
      setExpanded(`panel${sortedItems[0].title}`);
    }
  }, [sortedItems]);

  return (
    <div>
      {sortedItems.map((item: AccordionItem) => (
        <Accordion
          key={item.title}
          expanded={expanded === `panel${item.title}`}
          onChange={handleChange(`panel${item.title}`)}
          disabled={item.disabled}
        >
          <AccordionSummary aria-controls={`panel${item.title}-content`} id={`panel${item.title}-header`}>
            <Typography>{item.title} </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              {item.content}
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
