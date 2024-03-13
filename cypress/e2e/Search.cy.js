// search.spec.js
describe('Search Functionality', () => {
    it('Should display relevant products for the entered keyword', () => {
        cy.visit('https://maax.com/');
        cy.contains('Accept All Cookies').click();
        cy.get('input[type="text"][autocomplete="off"][aria-autocomplete="list"][aria-controls="react-autowhatever-1"].search-input').type('shower', { force: true });
        cy.get('.link').contains('Utile 3636 Composite Direct-to-Stud Two-Piece Corner').click();
        //cy.get('.search-results').should('contain', 'Shower');
        cy.contains('Utile 3636 Composite Direct-to-Stud Two-Piece Corner Shower Wall Kit in Metro Tux').should('be.visible');
    });
});
