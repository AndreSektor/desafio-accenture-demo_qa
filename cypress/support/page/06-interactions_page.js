/// <reference types="cypress" />
// import "../commands.js";
const el = require("../elements/5-interactions_elements").interactionsElement

class InteractionsPage {

    clickInteractionsOpt() {

        cy.get(el.option_menu)
            .contains("Interactions")
            .should("be.visible")
            .click({ force: true });

        cy.get(el.opt_btn_sortable)
            .contains("Sortable")
            .should("be.visible");
    }

    clickMenuSortable() {

        cy.get(el.opt_btn_sortable)
            .contains("Sortable")
            .should("be.visible")
            .click({ force: true });
    }

    orderBarsCrescent() {

        const initialOrder = ["One", "Two", "Three", "Four", "Five", "Six"];
        cy.get(".vertical-list-container > div").each((card, index) => {
            cy.wrap(card)
                .should("be.visible")
                .should("contain.text", initialOrder[index]);
        });

        cy.get(el.bar_position_one).scrollIntoView();
        cy.wait(1000);

        this.dragCardToPosition(el.bar_position_one, el.bar_position_six);
        this.dragCardToPosition(el.bar_position_one, el.bar_position_five);
        this.dragCardToPosition(el.bar_position_one, el.bar_position_four);
        this.dragCardToPosition(el.bar_position_one, el.bar_position_three);
        this.dragCardToPosition(el.bar_position_one, el.bar_position_two);

        const expectedOrder = ["Six", "Five", "Four", "Three", "Two", "One"];
        cy.get(".vertical-list-container > div").each((card, index) => {
            cy.wrap(card)
                .should("be.visible")
                .should("contain.text", expectedOrder[index]);
        });
    }


    dragCardToPosition(cardSelector, positionSelector) {

        cy.get(cardSelector).drag(positionSelector, {
            force: true,
        });

        cy.wait(200);
        cy.get(positionSelector)
            .should("be.visible")
            .click({ force: true });
    }

} export default new InteractionsPage();