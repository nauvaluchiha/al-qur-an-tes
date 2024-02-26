describe("Check the Navbar", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Inspect for piljurian header", () => {
    cy.get("header").should("exist");
    cy.getItem("title").contains("Al-Qur'an Indonesia");
  });
});
