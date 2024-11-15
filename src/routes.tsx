import {
  BrowserRouter,
  Route,
  Routes as RoutesContainer,
} from "react-router-dom";
import App from "./App";

function Routes() {
  return (
    <BrowserRouter>
      <RoutesContainer>
        <Route path="/" element={<App />} />
      </RoutesContainer>
    </BrowserRouter>
  );
}

export default Routes;
