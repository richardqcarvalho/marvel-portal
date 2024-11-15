import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes as RoutesContainer,
} from "react-router-dom";
import Characters from "./pages/Characters";
import Events from "./pages/Events";
import Home from "./pages/Home";
import Login from "./pages/Login";

function PrivateRoute() {
  if (!localStorage.getItem("password")) return <Navigate to="/login" />;

  return <Outlet />;
}

function Routes() {
  return (
    <BrowserRouter>
      <RoutesContainer>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/events" element={<Events />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </RoutesContainer>
    </BrowserRouter>
  );
}

export default Routes;
