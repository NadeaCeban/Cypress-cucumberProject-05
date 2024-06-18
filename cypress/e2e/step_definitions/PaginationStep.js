/// <reference types="cypress" />

import { DataTable, Given ,Then,When} from "@badeball/cypress-cucumber-preprocessor";
import PaginationPage from '../pages/PaginationHeadingPage';

const paginationPage = new PaginationPage;


Given(/^the user is on "([^"]*)"$/, (url) => {
cy.visit(url)
});

Then(/^the user should see the “Pagination” heading$/, () => {
paginationPage.getHeading1().should('have.text','Pagination')
});


Then(/^the user should see the “World City Populations 2022” heading$/, () => {
paginationPage.getHeading2().should('have.text','World City Populations 2022')
});


Then("the user should see the “What are the most populated cities in the world? Here is a list of the top five most populated cities in the world:” paragraph", function () {
paginationPage.getParagraph().should('have.text','What are the most populated cities in the world? Here is a list of the top five most populated cities in the world:')
  });




Then(/^the user should see the “Previous” button is disabled$/, () => {
paginationPage.getPreviousButton().should('be.visible').and('be.disabled')
});


Then(/^the user should see the “Next” button is enabled$/, () => {
paginationPage.getNextButton().should('be.visible').and('be.enabled')
});


When(/^the user clicks on the “Next” button$/, () => {
paginationPage.getNextButton().click()
});

Then(/^the user should see the “Previous” button is enabled$/, () => {
	paginationPage.getPreviousButton().should('be.enabled')

})

When(/^the user clicks on the “Next” button till it becomes disabled$/, () => {
  const clickNextUntilDisabled = () => {
 paginationPage.getNextButton().then(($nextButton) => {
      if (!$nextButton.prop('disabled')) {
        cy.wrap($nextButton).click(); // Click on the Next button
        clickNextUntilDisabled(); // Recursive call until Next button is disabled
      }
    });
  };

	clickNextUntilDisabled()
});


Then(/^the user should see the “Next” button is disabled$/, () => {
paginationPage.getNextButton().should('be.disabled')
});



Then(/^the user should see “Tokyo” City with the info below and an image$/, (dataTable) => {
  const city = dataTable.rawTable.flat()
paginationPage.getTokyoCityInfo().each(($el, index) => {
    cy.wrap($el).should('have.text', city[index])
  })
});


Then(/^the user should see “Delhi” City with the info below and an image$/, (dataTable) => {
  const city = dataTable.rawTable.flat()
  paginationPage.getDelhiCityInfo().each(($el, index) => {
      cy.wrap($el).should('have.text', city[index])
    })
});


Then(/^the user should see “Shangai“ City with the info below and an image$/, (dataTable) => {
  const city = dataTable.rawTable.flat()
  paginationPage.getShangaiCityInfo().each(($el, index) => {
      cy.wrap($el).should('have.text', city[index])
    })
});



Then(/^the user should see “Sao Paulo“ City with the info below and an image$/, (dataTable) => {
  const city = dataTable.rawTable.flat()
  paginationPage.getSaoPauloCityInfo().each(($el, index) => {
      cy.wrap($el).should('have.text', city[index])
    })
});


Then(/^the user should see “Mexico City” City with the info below and an image$/, (dataTable) => {
  const city = dataTable.rawTable.flat()
  paginationPage.getMexicoCityInfo().each(($el, index) => {
      cy.wrap($el).should('have.text', city[index])
    })
});
