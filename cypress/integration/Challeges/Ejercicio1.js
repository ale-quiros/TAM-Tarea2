/// <reference types="Cypress" />

describe('Ejercicios resueltos de la Tarea2', () => {
  // Hooks
  beforeEach(() => {
    cy.visit('/challenges/actions');
  });

  context('Ejercicio 1: Typing and sending keys:', () => {
    it('should complete Exercise 1', () => {
      const EMAIL_ADDRESS = "fake@email.com";
      const DISABLED_TEXT = "Text typed inside disabled textarea";
      
      cy.get('#email1')
      .clear().type(EMAIL_ADDRESS)
      .should('have.value', EMAIL_ADDRESS)
      .type('{selectall}',{ force: true })
      .type('{del}')
      .should('have.value', '');

      cy.get('.action-disabled')
      .type(DISABLED_TEXT, { force: true })
      .should('have.value', DISABLED_TEXT);
    });
  });
});
