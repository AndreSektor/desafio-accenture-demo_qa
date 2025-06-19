import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import InteractionsPage from '../../../support/page/06-interactions_page'

When("I choose the Interaction option on the home page", () => {

  InteractionsPage.clickInteractionsOpt()
});
  
When("I choose the Sub menu Sortable", () => {

  InteractionsPage.clickMenuSortable()
});

Then("I order the bars in ascending order", () => {

  InteractionsPage.orderBarsCrescent()
});