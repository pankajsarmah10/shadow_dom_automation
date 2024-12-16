describe("Shadow DOM Example", () => {
  it("Interacts with Shadow DOM elements", () => {
    cy.visit("https://shop.polymer-project.org/");

    // Access Shadow DOM using the plugin
    cy.get("shop-app").shadow().find("shop-home").should("be.visible");
  });
});
