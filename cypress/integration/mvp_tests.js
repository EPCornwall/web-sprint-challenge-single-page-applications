//- [ ] test that you can add text to the box
describe('Can add text', function(){
    it('can visit the url', function(){
        cy.visit('http://localhost:3000/pizza')
    
    })
    it('can add text', function (){
        cy.get('input[name="name"]')
        .type('Test text')
        .should('have.value', 'Test text')
    })

    it('can select multiple toppings', function(){
        cy.get('input[name="pepperoni"]')
        .click()
        cy.get('input[name="olives"]')
        .click()
    })

    it('can submit the form', function(){
        cy.pause()
        cy.get('button')
        .click()
    })


    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })


})

//- [ ] test that you can select multiple toppings
//- [ ] test that you can submit the form


