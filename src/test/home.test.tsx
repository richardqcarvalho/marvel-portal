import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Routes from "../routes";

test("should go back to login page if clicking on logout", () => {
  render(<Routes />);

  const emailInput = screen.getByPlaceholderText("Type your email");
  const nextButton = screen.getByRole("button", { name: "Next" });
  userEvent.type(emailInput, "test@test.com");
  userEvent.click(nextButton);
  const passwordInput = screen.getByPlaceholderText("Type your password");
  const signInButton = screen.getByRole("button", { name: "Sign in" });
  userEvent.type(passwordInput, "t3stp4ssw0rd");
  userEvent.click(signInButton);
  const logoutButton = screen.getByRole("button", { name: "log-out.svg" });
  userEvent.click(logoutButton);
  const newEmailInput = screen.getByPlaceholderText("Type your email");

  expect(newEmailInput).toBeInTheDocument();
});

test("should have all credentials cleared after logout", () => {
  render(<Routes />);

  const localStorageEmail = localStorage.getItem("email");
  const localStoragePassword = localStorage.getItem("password");

  expect(localStorageEmail).toBeNull();
  expect(localStoragePassword).toBeNull();
});

test("should go to characters page if clicking on characters content button", () => {
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
  const homeTitle = screen.getByText("Characters");

  expect(homeTitle).toBeInTheDocument();
});

test("should go to events page if clicking on events content button", () => {
  render(<Routes />);

  const backButton = screen.getByRole("button", { name: "arrow-left.svg" });
  userEvent.click(backButton);
  const eventsContentButton = screen.getByRole("button", {
    name: "See events",
  });
  userEvent.click(eventsContentButton);
  const homeTitle = screen.getByText("Events");

  expect(homeTitle).toBeInTheDocument();
});
