export const TestingArabicLang = () => {
  describe("ArabicLang", () => {
    it("Convert To Arabic", () => {
      cy.restoreLocalStorage();
      cy.visit("localhost:3000/");
      cy.get("select[data-testid=lang-switcher]");
      cy.get("select[data-testid=lang-switcher]").select("AR");
      cy.get("h2[data-testingId=Header]").should("have.text", "مخطط التحليل");
    });
  });
};
