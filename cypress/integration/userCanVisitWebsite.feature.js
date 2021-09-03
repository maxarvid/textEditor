describe("user can visit the website", () => {
  it("is expected that the website will load", () => {
    cy.visit("http://localhost:3000");
  });
});
