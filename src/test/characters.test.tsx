import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Routes from "../routes";

test("should go back to home if clicking on back button", () => {
  render(<Routes />);

  const emailInput = screen.getByPlaceholderText("Type your email");
  const nextButton = screen.getByRole("button", { name: "Next" });
  userEvent.type(emailInput, "test@test.com");
  userEvent.click(nextButton);
  const passwordInput = screen.getByPlaceholderText("Type your password");
  const signInButton = screen.getByRole("button", { name: "Sign in" });
  userEvent.type(passwordInput, "t3stp4ssw0rd");
  userEvent.click(signInButton);
  const charactersContentButton = screen.getByRole("button", {
    name: "See characters",
  });
  userEvent.click(charactersContentButton);
  const backButton = screen.getByRole("button", { name: "arrow-left.svg" });
  userEvent.click(backButton);
  const homeTitle = screen.getByText("Home");

  expect(homeTitle).toBeInTheDocument();
});
