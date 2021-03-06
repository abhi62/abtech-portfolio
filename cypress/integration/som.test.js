/// <reference types="cypress" />

describe("sample test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays two todo items by default", () => {
    // We use the `cy.get()` command to get all elements that match the selector.
    // Then, we use `should` to assert that there are two matched items,
    // which are the two default items.
    cy.get(".icon-down-circle").click();
    cy.get(".button");
    cy.get("#contactName").type("abhishek");
  });
});
