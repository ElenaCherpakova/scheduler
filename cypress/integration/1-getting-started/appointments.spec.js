it("should book an interview", () => {
  cy.visit("/");
  cy.contains("Monday");

  cy.contains("[data-testid=day]", "Tuesday")
      .click()
      .should("have.class", "day-list__item--selected");
});