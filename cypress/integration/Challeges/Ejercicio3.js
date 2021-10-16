/// <reference types="Cypress" />

describe('Ejercicios resueltos de la Tarea2', () => {
  // Hooks
  beforeEach(() => {
    cy.visit('/challenges/actions');
  });

  context('Ejercicio3:  Submitting a form:', () => {
    it('should complete Exercise 3', () => {
      const SUBMITED_MESSAGE = 'Your form has been submitted!'
      const CUPON_INFO = "Cupon456";

      cy.get('#couponCode1').clear().type(CUPON_INFO);
      cy.get('#couponCode1').clear().type('{enter}');
      cy.get('div[data-exercise="3"]')
      .should('contain', SUBMITED_MESSAGE)
      .and('be.visible')
    });
  });
});
