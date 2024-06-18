class PaginationPage {

getHeading1 () {
    return cy.get('.mb-5 h1')
  }

getHeading2 () {
return cy.get('#sub_heading')
}

getParagraph () {
  return cy.get('#content')
}
getPreviousButton () {
  return cy.get('#previous')
}

getNextButton () {
  return  cy.get('#next')
}

getTokyoCityInfo(){
  return cy.get('.Pagination_pagBodyData__vG6oj > p')

}

getDelhiCityInfo () {
return cy.get('.Pagination_pagBodyData__vG6oj > p')
}

getShangaiCityInfo () {
  return cy.get('.Pagination_pagBodyData__vG6oj > p')
  }

  getSaoPauloCityInfo () {
    return cy.get('.Pagination_pagBodyData__vG6oj > p')
    }

    getMexicoCityInfo () {
      return cy.get('.Pagination_pagBodyData__vG6oj > p')
      }
}
export default PaginationPage;