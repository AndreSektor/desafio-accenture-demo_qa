import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import WidgetsPage from '../../../support/page/05-widgets_page'

When("I choose the Widgets option on the home page", () => {

    WidgetsPage.clickWidgetsOpt()
});
  
When("I choose the Sub menu Progress Bar", () => {

    WidgetsPage.clickSubMenuProgressBar()
});

When("I click button startStop", () => {

    WidgetsPage.clickBtnStartAndStop()
});

Then("pause the progression bar before {string}", (percent) => {
    
    WidgetsPage.validateProgressBar(percent)
});