import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes as RoutesContainer,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function PrivateRoute() {
  if (!localStorage.getItem("id")) return <Navigate to="/login" />;

  return <Outlet />;
}

function Routes() {
  return (
    <BrowserRouter>
      <RoutesContainer>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </RoutesContainer>
    </BrowserRouter>
  );
}

export default Routes;
