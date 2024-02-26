describe("Check the Home Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Check the Header", () => {
    cy.get("header").should("exist");
    cy.getItem("title").contains("Al-Qur'an Indonesia");
  });

  it("Search item and check the result ", () => {
    const existingValue = "Al-F";
    cy.get("input").should("exist");
    cy.get("input").type(existingValue);
    cy.getItem("surah-card").then((check) => {
      cy.wrap(check).find("p").contains(existingValue);
    });

    const notExistingValue = "tes";
    cy.get("input").should("exist");
    cy.get("input").type(notExistingValue);
    cy.getItem("surah-card").should("not.contain");
  });

  it("Match the total surah count with total cards that appear", () => {
    const userInput = "Al";
    cy.get("input").type(userInput);
    cy.getItem("total-surah")
      .invoke("text")
      .then((text: string) => {
        cy.getItem("surah-card").should("have.length", text);
      });
  });

  it("Check the card", () => {
    cy.getItem("surah-card-container").then(($card) => {
      cy.wrap($card)
        .find("a")
        .each(($inspect) => {
          cy.wrap($inspect)
            .should("have.attr", "href")
            .and("match", /\/surah\/\d+\?start=\d+&to=\d+/);
        });

      // isi teks dari card diambil lewat API semua, jd anggep aja testingnya udah di API
    });
  });

  it("Check the Footer", () => {
    cy.get("footer").then(($footer) => {
      cy.wrap($footer).should(
        "contain.text",
        "Developed by\u00a0Naufal Nasrullah\u00a0©\u00a0API & Font Kemenag RI",
      );
      cy.get("a").then(($anchor) => {
        cy.wrap($anchor[0]).should(
          "have.attr",
          "href",
          "https://github.com/nflnsr",
        );
        cy.wrap($anchor[1]).should(
          "have.attr",
          "href",
          "https://kemenag.go.id",
        );
      });
    });
  });
});
