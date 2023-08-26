const API_BASE_URL = '/test_api_url/v2/projects/test_project_id'
const LOCALES_ENDPOINT = `${API_BASE_URL}/locales`

describe('Locales selector', () => {
  before(() => {
    // Mocking locales list response
    cy.intercept('GET', LOCALES_ENDPOINT, {
      fixture: 'locales.json'
    }).as('localesRequest')

    // Mocking 'de' locale response
    cy.intercept('GET', `${LOCALES_ENDPOINT}/1`, {
      fixture: 'locale_de.json'
    }).as('localeDERequest')

    // Mocking 'en' locale response
    cy.intercept('GET', `${LOCALES_ENDPOINT}/2`, {
      fixture: 'locale_en.json'
    }).as('localeENRequest')
  })

  it('should show locales list and locale data when selected', () => {
    cy.visit('/')

    cy.wait('@localesRequest').its('response.statusCode').should('eq', 200)

    // Check if required locales are visible
    cy.get('[role="listbox"]').contains('en').should('be.visible')
    cy.get('[role="listbox"]').contains('de').should('be.visible')

    // Select 'de' and check if its data is shown
    cy.get('[role="listbox"]').contains('de').click()
    cy.wait('@localeDERequest').its('response.statusCode').should('eq', 200)
    cy.get('[data-cy="table"]').should('be.visible').contains('de').should('be.visible')

    // Switch to 'en' and check if its data is shown
    cy.get('[role="listbox"]').contains('en').click()
    cy.wait('@localeENRequest').its('response.statusCode').should('eq', 200)
    cy.get('[data-cy="table"]').should('be.visible').contains('en').should('be.visible')
  })
})
