describe('example to-do app', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('should show title', () => {
        cy.contains('Business Card App');
        cy.contains('Here you will find business cards');
    });

    it('should see cards', () => {
        cy.get('.card').should('have.length', 6);
    });

    it('should see cards', () => {
        cy.get('.card').should('have.length', 6);
        cy.get('.card').first().within(() => {
            cy.contains('Delete').click();
        });
        cy.get('.card').should('have.length', 5);
    });
});
