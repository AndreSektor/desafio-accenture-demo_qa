/// <reference types="cypress" />

const el = require('../elements/4-widgets_elements').widgets_Element

class WidgetsPage {

    clickWidgetsOpt() { 
        cy.get(el.option_menu)
            .contains('Widgets')
            .should('be.visible')
            .click()

        cy.get(el.opt_btn_progress_bar)
            .contains('Progress Bar')
            .should('be.visible')
    }

    clickSubMenuProgressBar() {
        cy.get(el.opt_btn_progress_bar)
            .contains('Progress Bar')
            .should('be.visible')
            .click()
    }

    clickBtnStartAndStop() { 

        cy.get(el.button_start_stop)
            .should('be.visible')
            .click()
    }

    validateProgressBar(percent) { 

        const checkProgress = () => {
            cy.wait(1000);
            
            cy.get(el.progress_bar).should('be.visible')
                .invoke('text')
                .then((texto) => {
                    const percentFinal = parseInt(texto.replace('%', ''), 10);
                    const percentLimit = parseInt(percent.replace('%', ''), 10);
    
                    if (percentFinal <= percentLimit) {
                        cy.get(el.button_start_stop)
                            .should('be.visible')
                            .click()
                            .contains('Start')
                            .wait(3000)
                            .click()

                            checkProgressFinal()
                        return;
                    } else {
                        checkProgress();
                    }
                });
        };
        //loop
        checkProgress();

        const checkProgressFinal = () => {
            cy.wait(1000);
            
            cy.get(el.progress_bar).should('be.visible')
                .invoke('text')
                .then((texto) => {
                    const percentFinal = parseInt(texto.replace('%', ''), 10);
    
                    if (percentFinal === 100) {
                        cy.get(el.button_reset)
                            .should('be.visible')
                            .contains('Reset')
                            .click()
                        return;
                    } else {
                        checkProgressFinal();
                    }
                });
        };

        cy.get(el.button_start_stop)
            .should('be.visible')
            .contains('Start')
    }
    
} export default new WidgetsPage();