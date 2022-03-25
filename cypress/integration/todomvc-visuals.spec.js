/// <reference types="cypress" />
import * as todoPage from "../page-objects/todo-page";

describe("visual validation", () => {
  before(() => todoPage.navigate());

  beforeEach(() =>
    cy.eyesOpen({ appName: "TAU TodoMVC", bachName: "TAU TodoMVC Hey!" })
  );

  afterEach(() => cy.eyesClose());

  it("should look good", () => {
    cy.eyesCheckWindow("empty todo list");
    todoPage.addTodo("Clean room");
    todoPage.addTodo("Leanr JavaScript");

    cy.eyesCheckWindow("two todos");

    todoPage.toggleTodo(0);

    cy.eyesCheckWindow("mark as completed");
  });
});
