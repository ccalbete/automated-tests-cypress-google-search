import { GoogleSearchPage } from "../support/pages/GoogleSearchPage";
import { GoogleSearchHelpers } from "../support/helpers/GoogleSearchHelpers";
import { GoogleResultsHelpers } from "../support/helpers/GoogleResultsHelpers";

describe("Search Redica Systems and Validate Google css", () => {

    //Create an instance of the class googleSearchPage who gets elements from DOM
    const googleSearchPage = new GoogleSearchPage();
    // Create instances of helpers to use generic functions
    const googleSearchHelpers = new GoogleSearchHelpers();
    const googleResultsHelpers = new GoogleResultsHelpers();

    //before each test, visit google and check the url
    beforeEach(() => {
        cy.visit("www.google.com/");
        cy.url().should('contain', Cypress.config().baseUrl);
    });

    //Visit google with before each and check css style of buttons
    it("Should go to google.com page and verify the page", () => {
        googleSearchPage.getSearchInput().should('be.visible');
        googleSearchPage.getSearchButton().should('have.css', 'background-color', 'rgb(248, 249, 250)').and('have.css', 'font-size', '14px');
        googleSearchPage.getFeelingLuckyButton().should('have.css', 'background-color', 'rgb(248, 249, 250)').and('have.css', 'font-size', '14px');
    });

    it("Should test 10 suggestions on the Google search page", () => {
        googleSearchHelpers.search("Redica");
        googleResultsHelpers.getResultsQuantity().should('have.length', 8);
        googleResultsHelpers.getResultsQuantity().contains("Redica Systems");
    });


});