describe("user can enter text on website", () => {
  before(() => {
    cy.visit("http://localhost:3000");
    cy.get("#use-text-editor").click();
    cy.get("#text-editor").type("Hello world!");
  });

  it("displays the text the user entered", () => {
    cy.get("#text-editor").should("contain", "Hello world!");
  });
});
