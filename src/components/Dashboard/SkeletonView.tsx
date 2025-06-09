import React from "react";
import { Skeleton, Box, Grid, Container } from "@mui/material";
import styles from "./dashboard.module.scss";
export const DashboardSkeleton = () => {
    const skeletonHeights = {
        top: 140,
        middle: 300,
        bottom: 400
    }
  return (
    <Container className={styles.skeletonContainer}>
      {/* Top row */}
      <Grid container spacing={2} marginBottom={3} wrap="nowrap">
        <Grid component="div" item xs={12} md={4} className="wFull">
          <Skeleton variant="rounded"  height={skeletonHeights.top} className="bg-skeleton"/>
        </Grid>
        <Grid component="div" item xs={12} md={4} className="wFull">
          <Skeleton variant="rounded" width="100%" height={skeletonHeights.top} className="bg-skeleton"/>
        </Grid>
        <Grid component="div" item xs={12} md={4} className="wFull">
          <Skeleton variant="rounded" width="100%" height={skeletonHeights.top} className="bg-skeleton"/>
        </Grid>
      </Grid>

      {/* Urgent Tasks */}
      <Container className={`${styles.skeletonContainer} ${styles.flex}`}>
          {[...Array(5)].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={5} key={index} className="wFull">
              <Skeleton variant="rounded" width="100%" height={skeletonHeights.middle} className="bg-skeleton" />
            </Grid>
          ))}
      </Container>

      {/* Active Projects */}
      <Container className={`${styles.skeletonContainer} ${styles.flex}`}>
          {[...Array(5)].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} lg={5} key={index} className="wFull">
              <Skeleton variant="rounded" width="100%" height={skeletonHeights.bottom} className="bg-skeleton" />
            </Grid>
          ))}
      </Container>

    </Container>
  );
};

export default DashboardSkeleton;
