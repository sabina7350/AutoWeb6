it("Should successfully login", () => {
    cy.visit("/");
    cy.login("bropet@mail.ru", "123");
    cy.contains("Добро пожаловать bropet@mail.ru").should("be.visible");
  });
  
  it("Should not login with empty login", () => {
    cy.visit("localhost:3000");
    cy.contains("Log in").click();
    cy.get("#mail").type(" ");
    cy.get("#pass").type("123");
    cy.contains("Submit").click();
    cy.get("#mail")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });
  
  it("Should not login with empty password", () => {
    cy.visit("localhost:3000");
    cy.contains("Log in").click();
    cy.get("#mail").type("bropet@mail.ru");
    cy.contains("Submit").click();
    cy.get("#pass")
      .then(($el) => $el[0].checkValidity())
      .should("be.false");
  });