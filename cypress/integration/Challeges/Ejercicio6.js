/// <reference types="Cypress" />

describe('Ejercicios resueltos de la Tarea2', () => {
  // Hooks
  beforeEach(() => {
    cy.visit('/challenges/actions');
  });

  context('Ejercicio6: Right click element', () => {
    it('should complete Exercise 6:', () => {
      cy.get('.rightclick-action-div').rightclick();
      cy.get('input[value="Right click to edit"]').should('be.visible');
    });

  });
});
