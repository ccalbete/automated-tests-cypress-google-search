import { GoogleResultsPage } from "../pages/GoogleResultsPage";

const googleResultsPage = new GoogleResultsPage();

export class GoogleResultsHelpers {

    //get div container from page object and return a list of children divs
    getResultsQuantity() {
        return googleResultsPage.getResults().children("div");
    }

}