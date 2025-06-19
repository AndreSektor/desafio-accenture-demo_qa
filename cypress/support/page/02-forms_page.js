/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

const el = require('../elements/1-forms_elements').formsElement
const practice_form_text = "Practice Form"

class FormPage { 

    clickFormOpt() { 

        cy.get(el.option_menu)
            .contains('Forms')
            .should('be.visible')
            .click()

        cy.get(el.opt_btn_practice_form)
            .contains(practice_form_text)
            .should('be.visible')
    }

    clickPracticeForm() { 

        cy.get(el.opt_btn_practice_form)
            .contains(practice_form_text)
            .should('be.visible')
            .click()

        cy.get(el.title_practice_form)
            .contains(practice_form_text)
            .should('be.visible')
    }

    fillOutForm() { 

        const radios = [el.radio_button_gender_1, el.radio_button_gender_2, el.radio_button_gender_3]
        const check_hobbies = [el.check_box_hobbies_1, el.check_box_hobbies_2, el.check_box_hobbies_3]
        const months = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const subjectInitials = ["M", "S", "H", "G", "P", "C", "B", "E", "A", "L", "T"];

        const year_select_string = Math.floor(Math.random() * (2025 - 1950 + 1)) + 1950
        const randomNum = Math.floor(Math.random() * 28) + 1 

        const data_day = el.data_day_element + randomNum.toString().padStart(3, '0')

        cy.get(el.input_first_name)
            .should('be.visible')
            .type(faker.person.firstName())
        cy.get(el.input_last_name)
            .should('be.visible')
            .type(faker.person.lastName())
        cy.get(el.input_email)
            .should('be.visible')
            .type(faker.internet.email())

        cy.get(radios[Math.floor(Math.random() * 3)])
            .should('be.visible')
            .click()

        cy.get(el.input_phone)
            .should('be.visible')
            .type(faker.string.numeric(10))
        
        cy.get(el.input_date_of_birth)
            .should('be.visible')
            .click()

        cy.get(el.months_select)
            .should('be.visible')
            .select(months[Math.floor(Math.random() * 12)])

        cy.get(el.year_select)
            .should('be.visible')
            .select(year_select_string.toString())

        cy.get(data_day).then($elements => {
            if ($elements.length > 0) {
              const randomIndex = Math.floor(Math.random() * $elements.length);
              cy.wrap($elements[randomIndex]).click();
            }
        });

        cy.get(el.input_subjects)
            .should('be.visible')
            .type(faker.helpers.arrayElement(subjectInitials))

        cy.get(el.input_auto_subjects)
            .should('be.visible')
            .click()

        cy.get(check_hobbies[Math.floor(Math.random() * 3)])
            .should('be.visible')
            .click()

        cy.get(el.button_upload).should('be.visible')
            .attachFile('example.txt')

        cy.get(el.input_current_address)
            .should('be.visible')
            .type(faker.location.streetAddress({useFullAddress: true}))

        const estateArray = [el.estate_ncr, el.estate_uttar_pradesh, el.estate_haryana, el.estate_rajasthan]
        const number_array_estate = Math.floor(Math.random() * 4)
        cy.get(el.estate_select).should('be.visible')
            .click()    
        
        cy.get(estateArray[number_array_estate])
            .should('be.visible')
            .click()
        
        cy.get(el.city_select)
            .should('be.visible')
            .click()

        const citiesArray = [
            el.city_delhi, el.city_gurgaon, el.city_noida, 
            el.city_agra, el.city_lucknow, el.city_merrut, 
            el.city_karnal, el.city_panipat, el.city_jaipur, 
            el.city_jaiselmer
          ];

        switch (number_array_estate) {
        case 0:
            cy.get(citiesArray[Math.floor(Math.random() * 2)]).should('be.visible')
                .click()
            break;
        case 1:
            cy.get(citiesArray[Math.floor(Math.random() * (5 - 3 + 1)) + 3]).should('be.visible')
                .click()
            break;
        case 2:
            cy.get(citiesArray[Math.floor(Math.random() * (7 - 6 + 1)) + 6]).should('be.visible')
                .click()
        break;
        case 3:
            cy.get(citiesArray[Math.floor(Math.random() * (9 - 8 + 1)) + 8]).should('be.visible')
                .click()
        break;
        }

        cy.get(el.button_submit)
            .should('be.visible')
            .click()
    }

    validatePopUpFormConfirmation() { 
        cy.get(el.title_popup_confirmation)
            .should('be.visible')
            .contains('Thanks for submitting the form')

        cy.get(el.button_close_modal)
            .click({force: true})

        cy.get(el.title_popup_confirmation)
            .should('not.exist')
    }
} export default new FormPage();