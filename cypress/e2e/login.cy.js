

const locators = require('../fixtures/locators.json')
const { faker } = require('@faker-js/faker')

describe("Login tests", () =>{
beforeEach(() => {

    cy.visit('/')
    // cy.get("a[href='/login']").click()
    cy.get(locators.header.loginBtn).click()
})

   // it ('Visit gallery app', () => {
       // cy.visit('/')
        //cy.get("a[href='/login']").click()
        
   // })
 
    it ('Login with valid credentials', () => {

        // cy.visit('/')
        // cy.get("a[href='/login']").click()

        cy.get(locators.login.emailInput).type(faker.internet.email())
        cy.get(locators.login.passwordInput).type(faker.internet.password())
        cy.get(locators.login.submitBtn).click()
    })

    it ('Login with invalid credentials', () => {

        // cy.visit('/')
        // cy.get("a[href='/login']").click()

        cy.get(locators.login.emailInput).type(faker.internet.email())
        cy.get(locators.login.passwordInput).type(faker.internet.password())
        cy.get(locators.login.submitBtn).click()
    })

 
    it ('Logout', () => {
        // cy.visit('https://gallery-app.vivifyideas.com/')
        // cy.get('.nav-link').eq(1).click()
        cy.get('#email').type('tt@tt.tt')
        cy.get('#password').type('ttttttt8')
        cy.get('button').click()
        cy.get('.ml-auto > :nth-child(3) > .nav-link').click()
        // cy.get('.nav-link').eq(3).click()
    })

    afterEach(() => {
        cy.clearCookies()
    })

})




describe("Register test", ()=>{

    it('Register tab', () => {
    cy.visit('/')
    cy.get('.nav-link').eq(2).click()
    });

    it ("Register valid credentials",() =>{
    cy.visit('/')
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