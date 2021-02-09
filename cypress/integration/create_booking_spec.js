describe('Create a booking', () => {
    it('creates a booking', () => {
        // Visit the booking page
        cy.visit('http://localhost:3000/booking')

        // Fill out the form and submit
        cy.get('input[name=first_name]').type('Test')
        cy.get('input[name=last_name]').type('Test')
        cy.get('input[name=phonenumber]').type('0000000000')
        cy.get('input[name=email]').type('test@test.com')
        cy.get('input[name=address]').type('Test')
        // cy.get('#services').select('Slashing')
        cy.get('input[type=submit]').click()

    })
})