/// <reference path="../support/index.d.ts" />

describe('Home page', () => {
  it('should render home sections', () => {
    //visitar a página
    cy.visit('/')

    cy.get('.slick-slider').within(() => {
      cy.findByRole('heading', { name: /cyber shadow/i })
      cy.findByRole('link', { name: /buy now/i })
    })
  });
});
