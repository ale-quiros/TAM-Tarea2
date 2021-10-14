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
      .type('{ctrl+a}{del}')
      .clear()
      .should('have.value', '');

      cy.get('.action-disabled')
      .type(DISABLED_TEXT, { force: true })
      .should('have.value', DISABLED_TEXT);
    });
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

  context('Ejercicio3:  Submitting a form:', () => {
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

  context('Ejercicio4 Part 1: Popover and canvas', () => {
    it('should complete Exercise 4', () => {

      cy.get('button[class="btn btn-lg btn-danger action-btn"]').click();
      cy.get('div[class="popover fade top in"]').should('be.visible');
      cy.get('#action-canvas')
      .click(80, 75)
      .click(170, 75)
      .click(80, 165)
      .click(100, 185)
      .click(125, 190)
      .click(150, 185)
      .click(170, 165)
    });
  });

  context('Ejercicio4 Part 2: Multiple clicks and force', () => {
    it('should complete Exercise 4', () => {
      //click on each children
      cy.get('.action-labels').children().click({ multiple: true });

      //click on the hidden button
      cy.get('button[class="btn btn-lg btn-primary"]').click({ force: true });
      cy.get('.popover-content').contains("This popover shows up because we forced the click on the button").should('be.visible');
    });
  });

  context('Ejercicio5  Double click element', () => {
    it('should complete Exercise 5: ', () => {
      cy.get('.action-div').dblclick();
      cy.get('input[value="Double click to edit"]').should('be.visible');
    });
  });

  context('Ejercicio6: Right click element', () => {
    it('should complete Exercise 6:', () => {
      cy.get('.rightclick-action-div').rightclick();
      cy.get('input[value="Right click to edit"]').should('be.visible');
    });

  });
});
