import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));
const Tasks = lazy(() => import("../pages/Tasks/Tasks"));
const Analytics = lazy(() => import("../pages/Analytics/Analytics"));
const DailyTasks = lazy(() => import("../pages/DailyTasks/DailyTasks"));
const SplashScreen = lazy(() => import("../pages/SplashScreen/SplashScreen"));

function RoutesComponent() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<SplashScreen />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/tasks" element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          } />
          <Route path="/analytics" element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          } />
          <Route path="/daily-tasks" element={
            <ProtectedRoute>
              <DailyTasks />
            </ProtectedRoute>
          } />
          <Route path="*" element={<div />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default RoutesComponent;