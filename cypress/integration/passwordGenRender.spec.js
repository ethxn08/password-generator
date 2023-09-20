describe("Password Generation", () => {
  it("Generate a password by clicking the button", () => {
    cy.visit("http://localhost:5173");

    let initialPassword = "";
    cy.get("h3").then(($password) => {
      initialPassword = $password.text();
    });

    cy.get("button").contains("Generate the new password").click();

    cy.wait(1000);

    cy.get("h3").should(($password) => {
      const newPassword = $password.text();

      expect(newPassword).not.to.equal(initialPassword);
    });
  });
  it("Generate a password with special characters", () => {
    cy.visit("http://localhost:5173");

    cy.get('input[id="yes"]').check();

    cy.contains("Generate the new password").click();
    cy.wait(1000);

    cy.get("h3")
      .invoke("text")
      .then((password) => {
        expect(password).to.match(/[.,&%$!?¿]/);
      });
  });
  it("Generate a password without special characters", () => {
    cy.visit("http://localhost:5173");

    cy.get('input[id="no"]').check();

    cy.contains("Generate the new password").click();
    cy.wait(1000);

    cy.get("h3")
      .invoke("text")
      .then((password) => {
        expect(password).not.match(/[.,&%$!?¿]/);
      });
  });
});
