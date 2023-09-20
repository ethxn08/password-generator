describe("The page renders correctly", () => {
  it("The title is rendered", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Password Gen").should("exist");
  });
});
