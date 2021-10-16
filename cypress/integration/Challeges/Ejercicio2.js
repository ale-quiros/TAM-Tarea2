/// <reference types="Cypress" />

describe('Ejercicios resueltos de la Tarea2', () => {
  // Hooks
  beforeEach(() => {
    cy.visit('/challenges/actions');
  });

   context('Ejercicio 2 Part 1: Focus', () => {
    it('should complete Exercise 2 - Part 1', () => {
      cy.get('#password1')
      .focus()
      .should('have.css', 'border-color', 'rgb(255, 165, 0)');      // borde color naranja con RGB
      cy.get('label[for="password1"]').should('have.attr', 'style', 'color: orange;');
     });
  });

  context('Ejercicio2 Part 2: Blur', () => {
    it('should complete Exercise 2 - Part 2', () => {
      cy.get('#fullName1')
      .focus()
      .blur()
      .should('have.css', 'border-color', 'rgb(255, 0, 0)')   // borde color rojo con RGB
      .prev()
      .should('have.attr', 'style', 'color: red;')
    });
  });
});
