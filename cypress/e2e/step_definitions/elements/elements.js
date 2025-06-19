import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ElementsPage from '../../../support/page/04-elements_page'

When("I choose the Elements option on the home page", () => {
    
    ElementsPage.clickElementsOpt()
});

When("I choose the Sub menu Web tables", () => {

    ElementsPage.clickWebTablesMenu()
});

When("I create {int} itens", (quantity) => {

    ElementsPage.createRegister(quantity)
});

Then("I {string} itens", (option) => {

    ElementsPage.customerRegister(option)
});