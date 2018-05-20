import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

const pageCheck = {
    "Self-Evaluation": async () => {
        await browser.get("localhost:4200");
        await $('a[name="autoavaliacao"]').click();
    }
};

const fieldNameAttribute = {
    "Gerência de Configuração": "gdc",
    "Requisitos": "req"
};

defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I am at the "(.*)" page$/, async (pageName) => {
        await pageCheck[<string> pageName];
    });

    When(/^I fill field "(.*)" with "(.*)"$/, async (fieldName, conceptValue) => {
        await element.all(by.name(<string> fieldNameAttribute[<string> fieldName]))
            .first().sendKeys(<string> conceptValue);
    });

    Then(/^I see field "(.*)" has "(.*)"$/, async(fieldName, conceptValue) => {
        await expect(
            element.all(
                by.name(
                    <string> fieldNameAttribute[<string> fieldName]
                )
            ).first().getText).to.eventually.equal(<string> conceptValue);
    });
});