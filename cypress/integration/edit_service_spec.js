describe('Edit a service', () => {
    it('edits a service price', () => {
        // Visit the home page
        cy.visit('http://localhost:3000/')

        // Click the admin login button
        cy.get('#b_admin').click()

        // Fill out the form and submit
        cy.get('input[name=username]').type('Larry')
        cy.get('input[name=password]').type('password123')
        cy.get('button[type=submit]').click()
        
        // Visit the admin services page
        cy.visit('http://localhost:3000/services')

        // Click an edit link
        cy.get('#edit').click()

        // Update the price and submit
        cy.wait(2000)
        cy.get('input[name=price]').clear().type('75 p/hr')
        cy.get('input[type=submit]').click()
    })


})