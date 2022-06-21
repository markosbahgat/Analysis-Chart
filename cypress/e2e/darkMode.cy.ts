export const TestingDarkMode = () => {
  it("DarkMode", () => {
    cy.restoreLocalStorage();
    cy.visit("localhost:3000/");
    cy.get('button[id="headlessui-switch-:r1:"]').click();
    cy.get("main[data-testid=main]").should("have.class", "bg-gray-400");
  });
};
