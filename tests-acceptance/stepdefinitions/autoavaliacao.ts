import { defineSupportCode } from 'cucumber';
import { browser, $, element, ElementArrayFinder, by } from 'protractor';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

const idSet = {
	"Requisitos": "req",
	"Gerência de Configuração": "gdc"
};

const checkSet = {
	"Self-Evaluation": async (pageName) => {
		await browser.get("http://localhost:4200/");
		await element(by.id("metas")).click();
	}
}

function getCheckFunc(pageName: string) {
	checkSet[pageName];
}

defineSupportCode(function ({ Given, When, Then}) {
	Given(/^I am at the "(.*)" page$/, getCheckFunc(pageName));

	When(/^I fill field "(.*)" with "(.*)"$/, async (fieldName, concept) => {
		await element(by.id(idSet[<string> fieldName])).sendKeys(<string> concept);
	});

	Then(/^I see the field "(.*)" has "(.*)"$/, async(fieldName, concept) => {
		var inputText: Promise<string> =
			element(by.id(idSet[<string> fieldName])).getAttribute('value');
		await expect(inputText.to.eventually.equal(concept));
	});
});