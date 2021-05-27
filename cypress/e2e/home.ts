/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference path="../support/index.d.ts" />

describe('Home page', () => {
  it('should render home sections', () => {
    //visitar a página
    cy.visit('/')

    cy.get('.slick-slider').within(() => {
      cy.findByRole('heading', { name: /cyber shadow/i })
      cy.findByRole('link', { name: /buy now/i })

      cy.get('.slick-dots > :nth-child(2) > button').click()
      cy.wait(500)

      cy.findByRole('heading', { name: /the medium/i })
      cy.findByRole('link', { name: /buy now/i })

      cy.get('.slick-dots > :nth-child(3) > button').click()
      cy.wait(500)

      cy.findByRole('heading', { name: /Wasteland 3/i })
      cy.findByRole('link', { name: /buy now/i })
    })
  });
});
