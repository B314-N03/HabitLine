import { Skeleton, Grid, Container, Card, Box, Typography } from "@mui/material";
import styles from "./dashboard.module.scss";

export const DashboardSkeleton = () => {
  return (
    <Container className={styles.skeletonContainer}>
      {/* Most Urgent Tasks */}
      <Card className={styles.skeletonCard} elevation={6}>
        <Box>
          <Typography variant="h5" component="h5" className={styles.dashboard_card_title}>
            Most Urgent open Tasks:
          </Typography>
        </Box>
        <Grid container spacing={2} className={styles.cardsContainer}>
          {[...Array(5)].map((_, index) => (
            <Grid component="div" width={300} key={`urgent-${index}`}>
              <Skeleton variant="rounded" height={200} />
            </Grid>
          ))}
        </Grid>
      </Card>

      {/* Middle Section: Daily Tasks, Weather, Done */}
      <Grid container spacing={2}>
        {[...Array(4)].map((_, index) => (
          <Grid component="div" sx={{ flex: index % 2 === 0 ? 1 : .5 }} wrap="nowrap" key={`middle-${index}`}>
            <Skeleton variant="rounded" height={160} className="bg-skeleton" />
          </Grid>
        ))}
      </Grid>

      {/* Active Projects */}
      <Grid container spacing={2}>
        {[...Array(4)].map((_, index) => (
          <Grid component="div" width={1 / 4} wrap="nowrap" key={`project-${index}`}>
            <Skeleton variant="rounded" height={200} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DashboardSkeleton;
