"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const protractor_1 = require("protractor");
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;
const pageCheck = {
    "Self-Evaluation": () => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get("localhost:4200");
        yield protractor_1.$('a[name="autoavaliacao"]').click();
    })
};
const fieldNameAttribute = {
    "Gerência de Configuração": "gdc",
    "Requisitos": "req"
};
cucumber_1.defineSupportCode(function ({ Given, When, Then }) {
    Given(/^I am at the "(.*)" page$/, (pageName) => __awaiter(this, void 0, void 0, function* () {
        yield pageCheck[pageName];
    }));
    When(/^I fill field "(.*)" with "(.*)"$/, (fieldName, conceptValue) => __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.element.all(protractor_1.by.name(fieldNameAttribute[fieldName]))
            .first().sendKeys(conceptValue);
    }));
    Then(/^I see field "(.*)" has "(.*)"$/, (fieldName, conceptValue) => __awaiter(this, void 0, void 0, function* () {
        yield expect(protractor_1.element.all(protractor_1.by.name(fieldNameAttribute[fieldName])).first().getText).to.eventually.equal(conceptValue);
    }));
});
