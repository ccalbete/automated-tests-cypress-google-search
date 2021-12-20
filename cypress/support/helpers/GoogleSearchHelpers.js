import { GoogleSearchPage } from "../pages/GoogleSearchPage";

const googleSearchPage = new GoogleSearchPage();

export class GoogleSearchHelpers {

    //Get search element, type text received by parameter and press enter
    search(text) {
        googleSearchPage.getSearchInput().type(text).type('{enter}');
    }

}