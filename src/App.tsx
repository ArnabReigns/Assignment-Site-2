import "./App.scss";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import FirstPage from "./pages/FirstPage";
import SecondPage from "./pages/SecondPage";

const AuthGuard = () => {
  const user = useAuth();
  if (!user) return <Navigate to="/?re=true" />;
  return <Outlet />;
};

const GuestGuard = () => {
  const user = useAuth();
  if (user) return <Navigate to="/home" />;
  return <Outlet />;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<GuestGuard />}>
        <Route index element={<FirstPage />} />
      </Route>
      <Route path="/home" element={<AuthGuard />}>
        <Route index element={<SecondPage />} />
      </Route>
      <Route path="*" element={<>404</>} />
    </Routes>
  );
};

export default App;
