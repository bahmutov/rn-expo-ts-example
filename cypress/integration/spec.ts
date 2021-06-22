// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

describe('app', () => {
  it('shows greeting', function () {
    cy.visit('/')
    cy.contains('[data-testid=greeting]', 'App.tsx')
  })
})
