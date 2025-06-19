import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

const Dashboard = lazy(() => import("../../components/Dashboard/Dashboard"));
const Tasks = lazy(() => import("../../components/Tasks/Tasks"));
const Analytics = lazy(() => import("../../components/Analytics/Analytics"));
const DailyTasks = lazy(() => import("../../components/DailyTasks/DailyTasks"));
const SplashScreen = lazy(() => import("../../components/SplashScreen/SplashScreen"));

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