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

    cy.get("#yes").check();

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

    cy.get("#no").check();

    cy.contains("Generate the new password").click();
    cy.wait(1000);

    cy.get("h3")
      .invoke("text")
      .then((password) => {
        expect(password).not.match(/[.,&%$!?¿]/);
      });
  });

  it("generates a password with the selected length", () => {
    cy.visit("http://localhost:5173");

    const selectedLength = 25;
    cy.get("#rangeInput")
      .as("range")
      .invoke("val", selectedLength)
      .trigger("input");

    cy.wait(1000);
    cy.get("#charCounter").should("have.text", selectedLength);

    cy.get("#yes").check();

    cy.get("button").click();
    cy.wait(1000);

    cy.get("#finallyPassword").then((text) => {
      expect(text.text().length).equal(selectedLength);
    });
  });
});
