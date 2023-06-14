// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.addAll({
   login: (username, password, url) => {
    cy.visit(url);
    cy.get("#username").type(username);
    cy.get("#password").type(password);
    cy.get("div.buttons span").click();
   }, 
   editRoute: ( rowIndex, newLabel) => {
    cy.get(`tr:nth-of-type(${rowIndex}) button.icon-primary svg`).click();
    cy.get(`tr:nth-of-type(${rowIndex}) > td.cdk-column-label input`).click().clear().type(newLabel);
    cy.get("button.icon-success").click();
   }, 
   addRoute: (label, companyCode, siteCode, userLevels) => {
    cy.get("div.actions-container > app-btn-action:nth-of-type(1) span").click();
    cy.get("tr:nth-of-type(1) > td.cdk-column-label input").click().type(label);
    cy.get("tr:nth-of-type(1) > td.cdk-column-companyCode input").type(companyCode);
    cy.get("tr:nth-of-type(1) > td.cdk-column-siteCode input").click().type(siteCode);
    cy.get("tr:nth-of-type(1) > td.cdk-column-usersLevel1 div.p-multiselect-label-container").click();
    userLevels.forEach((level) => {
      cy.get(`p-multiselectitem:nth-of-type(${level}) div > div`).click();
    });
    cy.get(".icon.icon-success.rows.text-success.ng-star-inserted").first().click();
    // cy.get("button.icon-success svg").first().click();
    },
    deleteRoute: () => {
    cy.get(`button.icon-danger svg`).last().click();
    cy.get("button.btn-primary").click();
    },
    checkApiCall: (url, method, alias) => {
      cy.intercept(method, url).as(alias);
      cy.wait(`@${alias}`).then((interception) => {
        assert.isNotNull(interception.response.body, `API ${alias} call has data`)
      })
    }
    
})
