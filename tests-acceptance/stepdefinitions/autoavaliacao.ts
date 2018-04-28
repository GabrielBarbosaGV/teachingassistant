import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

const idSet = {
	"Requisitos": "req",
	"Gerência de Configuração": "gdc"
};

const checkSet = {
	"Self-Evaluation": async () => {
		await browser.get("http://localhost:4200/");
		await $("a[id='metas']").click();
	}
}

defineSupportCode(function ({ Given, When, Then }) {
	Given(/^I am at the "(.*)" page$/, async (pageName) => {
		await checkSet[<string> pageName]();
	});

	When(/^I fill field "(.*)" with "(.*)"$/, async (fieldName, concept) => {
		var id = idSet[<string> fieldName];
		await $("input[id='" + id + "']").clear();
		await $("input[id='" + id + "']").sendKeys(<string> concept);
	});

	Then(/^I see the field "(.*)" has "(.*)"$/, async(fieldName, concept) => {
		var id = idSet[<string> fieldName];
		var inputText = $("input[id='" + id + "']").getAttribute('value');
		await expect(inputText).to.eventually.equal(concept);
	});
});