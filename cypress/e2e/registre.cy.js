 /* describe("Login tests", () =>{
    it ('Visit gallery app', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(1).click()
    })
 
    it ('Login with valid credentials', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(1).click()
        cy.get('#email').type('tt@tt.tt')
        cy.get('#password').type('ttttttt8')
        cy.get('button').click()
    })
 
    it ('Logout', () => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        cy.get('.nav-link').eq(1).click()
        cy.get('#email').type('tt@tt.tt')
        cy.get('#password').type('ttttttt8')
        cy.get('button').click()
        cy.get('.ml-auto > :nth-child(3) > .nav-link').click()
        // cy.get('.nav-link').eq(3).click()
    })
})

*/


describe("Register test", ()=>{

    it('Register tab', () => {
    cy.visit('https://gallery-app.vivifyideas.com/')
    cy.get('.nav-link').eq(2).click()
    });

    it ("Register valid credentials",() =>{
    cy.visit('https://gallery-app.vivifyideas.com/')
    cy.get('.nav-link').eq(2).click()
    cy.get('#first-name').type("tijana")
    cy.get('#last-name').type("radosavljevic")
    cy.get('#email').type("tija@gmail.com")
    cy.get('#password').type("tr12345678")
    cy.get('#password-confirmation').type("tr12345678")
    cy.get('.form-check-input').click()
    cy.get('.btn').click()

    })

    })

