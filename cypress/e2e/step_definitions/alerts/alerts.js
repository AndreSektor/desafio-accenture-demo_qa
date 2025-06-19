import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import AlertsPage from '../../../support/page/03-alerts_page'

When("I choose the Alerts option on the home page", () => {

    AlertsPage.clickAlertsOpt()
});

When("I choose the Sub menu Browser Windows", () => {

    AlertsPage.clickAlertsBrowserWindows()
});

When("I click the button New Window", () => {

    AlertsPage.clickButtonNewWindow()
});

Then("validate New Window and close", () => {
  
    AlertsPage.validateNewWindow()
});