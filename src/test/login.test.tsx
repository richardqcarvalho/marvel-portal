import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Routes from "../routes";

test("should show login page", () => {
  render(<Routes />);

  const emailInput = screen.getByPlaceholderText("Type your email");

  expect(emailInput).toBeInTheDocument();
});

test("should show error if email is invalid", () => {
  render(<Routes />);

  const emailInput = screen.getByPlaceholderText("Type your email");
  const nextButton = screen.getByRole("button", { name: "Next" });
  userEvent.type(emailInput, "test@");
  userEvent.click(nextButton);
  const errorMessage = screen.getByText("Type a valid email");

  expect(errorMessage).toBeInTheDocument();
});

test("should show password input if email is valid", () => {
  render(<Routes />);

  const emailInput = screen.getByPlaceholderText("Type your email");
  const nextButton = screen.getByRole("button", { name: "Next" });
  userEvent.type(emailInput, "test@test.com");
  userEvent.click(nextButton);
  const passwordInput = screen.getByPlaceholderText("Type your password");

  expect(passwordInput).toBeInTheDocument();
});

test("should go back to email input if click to use another email", () => {
  render(<Routes />);

  const nextButton = screen.getByRole("button", { name: "Next" });
  userEvent.click(nextButton);
  const useAnotherEmailLink = screen.getByText("Use another email");
  userEvent.click(useAnotherEmailLink);
  const newEmailInput = screen.getByPlaceholderText("Type your email");

  expect(newEmailInput).toBeInTheDocument();
});

test("should go to home after sign in", () => {
  render(<Routes />);

  const nextButton = screen.getByRole("button", { name: "Next" });
  userEvent.click(nextButton);
  const passwordInput = screen.getByPlaceholderText("Type your password");
  const signInButton = screen.getByRole("button", { name: "Sign in" });
  userEvent.type(passwordInput, "t3stp4ssw0rd");
  userEvent.click(signInButton);
  const homeTitle = screen.getByText("Home");

  expect(homeTitle).toBeInTheDocument();
});
