export class GoogleResultsPage {

    constructor() { }

    //get div container of each div suggestion
    getResults() {
        return cy.get("#rso");
    }

}