/// <reference types="cypress" />

import { faker } from "@faker-js/faker";
const el = require("../elements/3-elements_elements").webTableElement;

let email_validation = [];

class ElementsPage {

    clickElementsOpt() {

        cy.get(el.option_menu)
            .contains("Elements")
            .should("be.visible")
            .click();

        cy.get(el.opt_btn_web_tables)
            .contains("Web Tables")
            .should("be.visible");
    }

    clickWebTablesMenu() {

        cy.get(el.opt_btn_web_tables)
            .contains("Web Tables")
            .should("be.visible")
            .click();
    }

    createRegister(quantity) {

        for (let i = 0; i < quantity; i++) {

            cy.get(el.button_add)
                .should("be.visible")
                .click();

            cy.get(el.input_form_first_name)
                .should("be.visible")
                .type(faker.person.firstName());

            cy.get(el.input_form_last_name)
                .should("be.visible")
                .type(faker.person.lastName());

            const email = faker.internet.email();
            email_validation[i] = email;

            cy.get(el.input_form_user_email)
                .should("be.visible")
                .type(email);

            cy.get(el.input_form_age)
                .should("be.visible")
                .type(faker.number.int({ min: 18, max: 65 }));

            cy.get(el.input_form_salary)
                .should("be.visible")
                .type(faker.number.int({ min: 1000, max: 10000 }));

            cy.get(el.input_form_department)
                .should("be.visible")
                .type(faker.person.jobArea());

            cy.get(el.button_submit).should("be.visible").click();

            cy.get(el.input_searchbox)
                .should("be.visible")
                .clear()
                .type(email_validation[i]);

            cy.get(el.validation_param_email)
                .should("be.visible")
                .contains(email_validation[i]);
        }
    }

    customerRegister(opt) {
        switch (opt) {
            case "Edit":
                for (let i = 0; i < email_validation.length; i++) {
                    cy.get(el.input_searchbox)
                        .should("be.visible")
                        .clear()
                        .type(email_validation[i]);

                    cy.get(el.validation_param_email)
                        .should("be.visible")
                        .contains(email_validation[i]);

                    cy.get(el.button_actions)
                        .eq(0)
                        .should("be.visible")
                        .click();

                    const email = faker.internet.email();
                    email_validation[i] = email;

                    cy.get(el.input_form_user_email)
                        .should("be.visible")
                        .clear()
                        .type(email);

                    cy.get(el.button_submit)
                        .should("be.visible")
                        .click();

                    cy.get(el.input_searchbox)
                        .should("be.visible")
                        .clear()
                        .type(email_validation[i]);

                    cy.get(el.validation_param_email)
                        .should("be.visible")
                        .contains(email_validation[i]);
                }
                break;
            case "Delete":
                for (let i = 0; i < email_validation.length; i++) {
                    cy.get(el.input_searchbox)
                        .should("be.visible")
                        .clear()
                        .type(email_validation[i]);

                    cy.get(el.validation_param_email)
                        .should("be.visible")
                        .contains(email_validation[i]);

                    cy.get(el.button_actions)
                        .eq(1)
                        .should("be.visible")
                        .click();

                    cy.get(el.input_searchbox)
                        .should("be.visible")
                        .clear()
                        .type(email_validation[i]);

                    cy.get(el.validation_param_email).should(
                        "not.have.text",
                        email_validation[i]
                    );
                }
                cy.get(el.input_searchbox).should("be.visible").clear();
                email_validation.length = 0;
                break;

            case "Edit and Delete":
                for (let i = 0; i < email_validation.length; i++) {
                    cy.get(el.input_searchbox)
                        .should("be.visible")
                        .clear()
                        .type(email_validation[i]);

                    cy.get(el.validation_param_email)
                        .should("be.visible")
                        .contains(email_validation[i]);

                    cy.get(el.button_actions)
                        .eq(0)
                        .should("be.visible")
                        .click();

                    const email = faker.internet.email();
                    email_validation[i] = email;

                    cy.get(el.input_form_user_email)
                        .should("be.visible")
                        .clear()
                        .type(email);

                    cy.get(el.button_submit).should("be.visible").click();

                    cy.get(el.input_searchbox)
                        .should("be.visible")
                        .clear()
                        .type(email_validation[i]);

                    cy.get(el.validation_param_email)
                        .should("be.visible")
                        .contains(email_validation[i]);

                    cy.get(el.button_actions)
                        .eq(1)
                        .should("be.visible")
                        .click();

                    cy.get(el.input_searchbox)
                        .should("be.visible")
                        .clear()
                        .type(email_validation[i]);

                    cy.get(el.validation_param_email).should(
                        "not.have.text",
                        email_validation[i]
                    );
                }
                cy.get(el.input_searchbox).should("be.visible").clear();
                email_validation.length = 0;
                break;
            default:
                break;
        }
    }
} export default new ElementsPage();