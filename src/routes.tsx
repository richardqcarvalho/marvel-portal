import {
  BrowserRouter,
  Route,
  Routes as RoutesContainer,
} from "react-router-dom";
import Home from "./pages/Home";

function Routes() {
  return (
    <BrowserRouter>
      <RoutesContainer>
        <Route path="/" element={<Home />} />
      </RoutesContainer>
    </BrowserRouter>
  );
}

export default Routes;
