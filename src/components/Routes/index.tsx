import { Route, Routes } from "react-router-dom";
import SplashScreen from "../SplashScreen/SplashScreen";
import Dashboard from "../Dashboard/Dashboard";
import Tasks from "../Tasks/Tasks";
import Analytics from "../Analytics/Analytics";

function RoutesComponent() {

  return (
    <Routes>
      <Route index element={<SplashScreen />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/analytics" element={<Analytics />} />
      <Route path="*" element={<div />} />
    </Routes>
  )
}

export default RoutesComponent;