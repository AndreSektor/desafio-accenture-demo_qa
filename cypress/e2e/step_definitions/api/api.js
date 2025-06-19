import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import ApiPage from '../../../support/page/01-api_page'

Given("create a user", () => {
    ApiPage.createUser()
});

When("generate token", () => {
    ApiPage.generateToken()
});

When("confirm create user", () => {
  ApiPage.validAuthentication()
});

When("list available books", () => {
  ApiPage.listBookAndStoreTwo()
});

When("rent two books", () => {
  ApiPage.rentTwoBooks()
});

Then("list the details of books purchased by the user", () => {
  ApiPage.MustListRentalDetails()
});