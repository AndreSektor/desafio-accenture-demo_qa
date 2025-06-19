import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import FormPage from '../../../support/page/02-forms_page'
import base from '../../../support/page/base'

Given("I visit demoqa.com", () => {
  base.accessPage()
});

When("I choose the Forms option on the home page", () => {
  FormPage.clickFormOpt()
});

When("I choose the Sub menu Practice Forms", () => {
  FormPage.clickPracticeForm()
});

When("I fill out form", () => {
  FormPage.fillOutForm()
});

Then("I validate that the confirmation modal has opened and I close it", () => {
  FormPage.validatePopUpFormConfirmation()
});