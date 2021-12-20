import { GoogleSearchHelpers } from "../support/helpers/GoogleSearchHelpers";
import { GoogleResultsPage } from "../support/pages/GoogleResultsPage";

describe("Get university names in order to search it in Google", () => {

    //create instance of helper and page object so that can use generic functions
    const googleSearchHelpers = new GoogleSearchHelpers();
    const googleResultsPage = new GoogleResultsPage;

    it("Should get the universities and search each one", () => {
        cy.request({
            method: 'GET',
            url: 'http://universities.hipolabs.com/search?country=United+States',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            //validate request works ok
            expect(response.status).to.eq(200);

            //create new array just with the university names
            const universityNames = response.body.map(university => university.name);

            //Search each university and check if results page is displayed
            universityNames.forEach(name => {
                cy.visit("https://www.google.com");
                cy.url().should('contain', Cypress.config().baseUrl);
                googleSearchHelpers.search(name);
                googleResultsPage.getResults().should('be.visible');
                cy.get("body").should('contain', name);
            })

        });

    })
});