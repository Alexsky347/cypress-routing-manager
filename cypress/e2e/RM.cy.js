import { PASSWORD, USERNAME, TOKEN_PROVIDER_URL } from '../constants';

Cypress.Commands.add('uMLogin', (username, password, url) => {
  cy.visit(url);
  cy.get("#username").type(USERNAME);
  cy.get("#password").type(PASSWORD);
  cy.get("div.buttons span").click();
});
describe("Routing Manager", () => {

  before(() => {
    cy.login(USERNAME, PASSWORD, TOKEN_PROVIDER_URL);
    cy.checkApiCall('http://localhost:8085/api/rules?', 'GET', 'getRules');
    // cy.checkApiCall('http://localhost:8085/api/config', 'GET', 'getFlow');
    // cy.checkApiCall('http://localhost:8085/api/um/userinfo_autocomplete?approvers=*&limit=20&offset=0', 'GET', 'getUsers');
  });
  beforeEach(() => {
    cy.visit('/');
    cy.get("#mat-select-value-1").click();
    cy.get("#mat-option-1 > span").click();
  });

  afterEach(() => {
    // Perform any necessary cleanup here
  });

  it("should export csv", () => {
    cy.get("div.actions-container > app-btn-action:nth-of-type(2) > button").click();
    cy.get("span.mat-mdc-button-touch-target").click();
    cy.get("mat-tree-node:nth-of-type(2) span.mat-mdc-button-touch-target").click();
    cy.get("mat-tree-node:nth-of-type(5) span.mat-mdc-button-touch-target").click();
    cy.get("#mat-mdc-checkbox-1-input").click();
    cy.get("button.btn-primary").click();
  });

  xit("should import csv with 2 routes", () => {
    cy.get("button.file-upload").first().selectFile('../fixtures/base_routes.csv');
    cy.get('input[type=file]')
  .invoke('show')
  .selectFile('../fixtures/base_routes.csv')
    // cy.get("div.actions-container input").type("../fixtures/base_routes.csv");
    cy.get("button.btn-primary").click();
    // cy.get("div.cdk-overlay-container button").click();
  });

  xit("should import csv with 300 routes", () => {
    cy.get("div.actions-container input").type("../fixtures/routes.csv");
    cy.get("button.btn-primary").click();
    // cy.get("div.cdk-overlay-container button").click();
  });

  it("should edit a route", () => {
    cy.editRoute(2, "Ma route 28589");
    cy.editRoute(2, "Ma route 2");
  })

  it('should create a route', () => {
    cy.addRoute("route", "er", "trt", [1]);
  });

  it("should delete a route", () => {
    cy.deleteRoute();
  });
});


