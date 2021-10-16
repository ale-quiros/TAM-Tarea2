/// <reference types="Cypress" />

describe('Ejercicios resueltos de la Tarea2', () => {
  // Hooks
  beforeEach(() => {
    cy.visit('/challenges/actions');
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
      const CLICKED_MESSAGE = "clicked";
      const HIDDEN_BUTTON_CLICKED = "This popover shows up because we forced the click on the button";
      //click on each children
      cy.get('.action-labels').children().each(($el, index, $list) => {
        cy.wrap($el).click();
        cy.wrap($el).next().should('contain', CLICKED_MESSAGE)
      });

      //click on the hidden button
      cy.get('button[class="btn btn-lg btn-primary"]').click({ force: true });
      cy.get('.popover-content').contains(HIDDEN_BUTTON_CLICKED).should('be.visible');
    });
  });
});
