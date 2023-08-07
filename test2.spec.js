/// <reference types="cypress" />

it('Test', () => {
    cy.visit('https://forhemer.github.io/React-Todo-List/');
    cy.get('.input-text').type('Номер 1');
    cy.get('.input-submit').click();
    cy.get('.input-text').type('Номер 2');
    cy.get('.input-submit').click();
    cy.get('.input-text').type('Номер 3');
    cy.get('.input-submit').click();
    cy.get('ul').eq(0).find('li').should('have.length', 3);
    cy.get(':nth-child(1) > .TodoItem_checkbox__Tf0FQ').click();
    cy.get(':nth-child(1) > span').invoke('attr', 'style').should('contain', 'text-decoration: line-through');
    cy.get(':nth-child(3) > button').click();
    cy.get('ul li').contains('Номер 3').should('not.exist');
})