describe("Mi primera prueba Cypress", () => {
  it("Visita la página principal", () => {
    cy.visit("http://localhost:5173/");
    cy.contains("Password Gen").should("exist");
  });
});
