const locators = require('../fixtures/locators.json')
const { faker } = require('@faker-js/faker')


describe("Register test", ()=>{

    it('Register tab', () => {
    cy.visit('/')
    cy.get('.nav-link').eq(2).click()
    });

    it ("Register valid credentials",() =>{
    cy.visit('/')
    cy.get('.nav-link').eq(2).click()
    cy.get(locators.registre.firstName).type(faker.name.firstName())
    cy.get(locators.registre.lastName).type(faker.name.lastName())
    cy.get(locators.registre.emailInput).type(faker.internet.email())

    let pass = faker.internet.password(20)
    cy.get(locators.registre.passwordInput).type(pass) 
    cy.get(locators.registre.confirmPassword).type(pass)

    cy.get('.form-check-input').click()
    cy.get(locators.registre.registreBtn).click()

    })

    afterEach(() => {
        cy.clearCookies()
    })

    })


describe("Login tests", () =>{
beforeEach(() => {

    cy.visit('/')
    cy.get(locators.header.loginBtn).click()
})

    it ('Login with valid credentials', () => {

        cy.get(locators.login.emailInput).type(faker.internet.email())
        cy.get(locators.login.passwordInput).type(faker.internet.password())
        cy.get(locators.login.submitBtn).click()
    })

    it ('Login with invalid credentials', () => {

        cy.get(locators.login.emailInput).type(faker.internet.email())
        cy.get(locators.login.passwordInput).type(faker.internet.password())
        cy.get(locators.login.submitBtn).click()
    })

 
    it ('Logout', () => {
       
        cy.get(locators.logout.emailInput).type('tt@tt.tt')
        cy.get(locators.logout.passwordInput).type('ttttttt8')
        cy.get(locators.logout.submitBtn).click()
        cy.get('.ml-auto > :nth-child(3) > .nav-link').click()
      
    })

    afterEach(() => {
        cy.clearCookies()
    })

})


