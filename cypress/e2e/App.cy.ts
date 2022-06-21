import { TestingArabicLang } from "./arabicLang.cy";
import { TestingRoutes } from "./routes.cy";
import { SignInForm } from "./signinForm.cy";
import { TestingDarkMode } from "./darkMode.cy";
import { TestingDropDowns } from "./dropDown.cy";
import { TestingSignOut } from "./signOut.cy";

Cypress.config("viewportHeight", 700);
Cypress.config("viewportWidth", 1600);

describe("Testing Application", () => {
  it("Visit the Website", () => {
    cy.visit("localhost:3000/");
    cy.url().should("include", "/SignIn");
  });
  context("SignIn Form", () => {
    SignInForm();
  });
  context("Routes", () => {
    TestingRoutes();
  });
  context("ARABIC LANG", () => {
    TestingArabicLang();
  });
  context("Dark Mode", () => {
    TestingDarkMode();
  });
  context("DropDown", () => {
    TestingDropDowns();
  });
  context("SignOut", () => {
    TestingSignOut();
  });
});
