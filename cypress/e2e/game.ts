/// <reference path="../support/index.d.ts" />

describe('Game Page', () => {
  it('should render game page sections', () => {
    cy.visit('/game/the-medium')
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5000) //Sem isso esta quebrando meu teste

    cy.getByDataCy('game-info').within(() => {
      cy.findAllByRole('heading', { name: /the medium/i }).should('exist')
      cy.findByText(/Discover a dark mystery only a medium can solve./i).should('exist')
      cy.findByText('$44.99').should('exist')
      cy.findByRole('button', { name: /add to cart/i }).should('exist')
    })

    // gallery
    cy.findAllByRole('button', { name: /thumb \-/i }).should('have.length.gt', 0)

     // content
    cy.getByDataCy('content').within(() => {
      cy.findByRole('heading', { name: /description/i }).should('exist')
    })

    cy.getByDataCy('content').children().should('have.length.at.least', 2)
  });
})
