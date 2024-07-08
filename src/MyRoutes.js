import { Route, Routes } from "react-router-dom";
import SignInPage from "./pages/signIn/SignInPage";
import SchedulePage from "./pages/signIn/schedule/SchedulePage";

function MyRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignInPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
      </Routes>
    </>
  );
}

export default MyRoutes;
