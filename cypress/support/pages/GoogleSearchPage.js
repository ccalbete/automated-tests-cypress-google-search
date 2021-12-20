export class GoogleSearchPage {

    constructor() { }

    getSearchInput() {
        return cy.get(".SDkEP");
    }

    getSearchButton() {
        return cy.get('.FPdoLc > center > .gNO89b');
    }

    getFeelingLuckyButton() {
        return cy.get('.FPdoLc > center > .RNmpXc');
    }
}