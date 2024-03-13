describe('Where to Buy Functionality', () => {
  it('should search for authorized dealers in a specified location', () => {
    // Visit MAAX website
    cy.visit('https://maax.com/');

    // Click on the 'Where to Buy' link
    cy.contains('Where to Buy').click({force: true});
    cy.contains('Accept All Cookies').click();
    // Enter a location in the search box and click search
    cy.get('input[type="text"].mapboxgl-ctrl-geocoder--input[aria-label="zip code, city, street, address ..."]').type('L0M 1B3, Angus, Ontario, Canada');
    cy.get('.mapboxgl-ctrl-geocoder--suggestion').contains('L0M 1B3').click();
    cy.contains('HOME HARDWARE').should('be.visible');
  });
});


/*Challenges

Answer: 

Dynamic Elements: The website might have dynamic elements that could pose a challenge in test automation.

Cross-browser Testing: Ensuring the tests work consistently across different browsers may require additional configuration.

Handling Asynchronous Behavior: Dealing with asynchronous behavior like AJAX requests or animations. */

/* How to execute test

Answer:
1. Install Cypress:
Install Cypress using npm: npm install cypress --save-dev

2. Create Test Files:
Create test files under the 'cypress/e2e' directory, e.g., 'Home.cy.js' and 'Search.cy.js'.

3. Write Test Code

4. Run Tests:
npx cypress open
 
5. View Test Results