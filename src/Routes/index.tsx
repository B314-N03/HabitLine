import { Route, Routes } from "react-router-dom";
import SplashScreen from "../components/SplashScreen/SplashScreen";
import Dashboard from "../components/Dashboard/Dashboard";
import Tasks from "../components/Tasks/Tasks";
import Analytics from "../components/Analytics/Analytics";
import Projects from "../components/Projects/Projects";

function RoutesComponent() {

  return (
    <Routes>
      <Route index element={<SplashScreen />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/tasks" element={<Tasks />} />
      <Route path="/analytics" element={<Analytics />} />

      <Route path="*" element={<div />} />
    </Routes>
  )
}

export default RoutesComponent;