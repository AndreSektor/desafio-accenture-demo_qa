/// <reference types="cypress" />

class BasePage {

    accessPage() {

      cy.visit(Cypress.env('URL_BASE'));
        Cypress.on(
            "uncaught:exception", (err, Runnable) => false
        );
    }    
} export default new BasePage();