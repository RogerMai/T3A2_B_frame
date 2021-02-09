describe('Test log in and out', () => {
    it('logs the user in', () => {
        // Visit the home page
        cy.visit('http://localhost:3000/')

        // Click the admin login button
        cy.get('#b_admin').click()

        // Fill out the form and submit
        cy.get('input[name=username]').type('Larry')
        cy.get('input[name=password]').type('password123')
        cy.get('button[type=submit]').click()

    })

    it('logs the user out', () => {
        cy.contains('Log out').click()
    })
} )