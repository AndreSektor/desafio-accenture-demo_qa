/// <reference types="cypress" />

const el = require('../elements/2-alerts_elements').alertsElement

class AlertsPage {
    clickAlertsOpt(){ 
        cy.get(el.option_menu).contains('Alerts, Frame & Windows')
        .should('be.visible')
        .click()

        cy.get(el.opt_btn_browser_windows).contains('Browser Windows')
        .should('be.visible')
    }

    clickAlertsBrowserWindows(){
        cy.get(el.opt_btn_browser_windows).contains('Browser Windows')
        .should('be.visible')
        .click()
    }

    clickButtonNewWindow(){ 
        cy.window().then((win) => {
            cy.stub(win, 'open').as('newWindow'); 
        });

        cy.get(el.button_new_window).should('be.visible')
        .click()
    }

    validateNewWindow() { 
            cy.get('@newWindow').should('be.called').then((stub) => {
            const newUrl = stub.args[0][0]; 
        
            cy.visit(Cypress.env('URL_BASE') + newUrl);
        
            cy.contains('This is a sample page').should('be.visible');
        
            cy.go('back');
    })};

} export default new AlertsPage();