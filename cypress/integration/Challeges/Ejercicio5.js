/// <reference types="Cypress" />

describe('Ejercicios resueltos de la Tarea2', () => {
  // Hooks
  beforeEach(() => {
    cy.visit('/challenges/actions');
  });

  context('Ejercicio5  Double click element', () => {
    it('should complete Exercise 5: ', () => {
      cy.get('.action-div').dblclick();
      cy.get('input[value="Double click to edit"]').should('be.visible');
    });
  });
});
