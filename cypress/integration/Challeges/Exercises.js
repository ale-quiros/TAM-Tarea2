/// <reference types="Cypress" />

describe('Tarea2', () => {
  // Hooks
  beforeEach(() => {
    cy.visit('/challenges/actions');
  });

  context('Ejercicio1', () => {
    it('should complete Exercise 1', () => {
      const EMAIL_ADDRESS = "fake@email.com";
      const DISABLED_TEXT = "Text typed inside disabled textarea";

      cy.get('#email1').clear().type(EMAIL_ADDRESS);
      cy.get('#email1').should('have.value', EMAIL_ADDRESS);
      cy.get('#email1').type('{ctrl+a}{del}');
      cy.get('#email1').clear();
      cy.get('#email1').should('have.value', '');

      cy.get('.action-disabled')
      .type(DISABLED_TEXT, { force: true })
      .should('have.value', DISABLED_TEXT);
    });
  });

  context('Ejercicio2 parte 1', () => {
    it('should complete Exercise 2 - Part 1', () => {
      cy.get('#password1')
      .focus()
      .should('have.css', 'border-color', 'rgb(255, 165, 0)');      // borde color naranja con RGB
      cy.get('label[for="password1"]').should('have.attr', 'style', 'color: orange;');
     });
  });

  context('Ejercicio2 parte2', () => {
    it('should complete Exercise 2 - Part 2', () => {
      cy.get('#fullName1')
      .focus()
      .blur()
      .should('have.css', 'border-color', 'rgb(255, 0, 0)')   // borde color rojo con RGB
      .prev()
      .should('have.attr', 'style', 'color: red;')
    });
  });

  context('Ejercicio3', () => {
    it('should complete Exercise 3', () => {
      const SUBMITED_MESSAGE = 'Your form has been submitted!'
      const CUPON_INFO = "123456";

      cy.get('#couponCode1').clear().type(CUPON_INFO);
      cy.get('#couponCode1').clear().type('{enter}');
      cy.get('div[data-exercise="3"]')
      .should('contain', SUBMITED_MESSAGE)
      .and('be.visible')
    });
  });

  context('Ejercicio5', () => {
    it('should complete Exercise 5', () => {
      cy.get('.action-div').dblclick();
      cy.get('input[value="Double click to edit"]').should('be.visible');
    });
  });

  context('Ejercicio6', () => {
    it('should complete Exercise 5', () => {
      cy.get('.rightclick-action-div').rightclick();
      cy.get('input[value="Right click to edit"]').should('be.visible');
    });

  });
});
