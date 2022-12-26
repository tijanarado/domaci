

const locators = require('../fixtures/locators.json')
const { faker } = require('@faker-js/faker')

/* describe("Register test", ()=>{

    beforeEach(() => {

        cy.visit('/')
        // cy.get("a[href='/login']").click()
        cy.get(locators.header.registreBtn).click()
    })

    //it('Register tab', () => {
    //cy.visit('/')
    //cy.get('.nav-link').eq(2).click()
   // });

    it ("Register valid credentials",() =>{
    // cy.visit('/')
    // cy.get('.nav-link').eq(2).click()
    cy.get(locators.registre.firstName).type("tijana")
    cy.get(locators.registre.lastName).type("radosavljevic")
    cy.get(locators.registre.emailInput).type("tija1000@gmail.com")
    cy.get(locators.registre.passwordInput).type("tr12345678")
    cy.get(locators.registre.confirmPassword).type("tr12345678")
    cy.get(locators.registre.terms).click()
    cy.get(locators.registre.registreBtn).click()

    })

    })

    */


    describe("Register test", ()=>{

        beforeEach(() => {
    
            cy.visit('/')
            // cy.get("a[href='/login']").click()
            cy.get(locators.header.registreBtn).click()
        })
    
        //it('Register tab', () => {
        //cy.visit('/')
        //cy.get('.nav-link').eq(2).click()
       // });
    
        it ("Register valid credentials",() =>{
        // cy.visit('/')
        // cy.get('.nav-link').eq(2).click()
        cy.get(locators.registre.firstName).type(faker.name.firstName())
        cy.get(locators.registre.lastName).type(faker.name.lastName())
        cy.get(locators.registre.emailInput).type(faker.internet.email())
        cy.get(locators.registre.passwordInput).type("tr12345678")
        cy.get(locators.registre.confirmPassword).type("tr12345678")
        cy.get(locators.registre.terms).click()
        cy.get(locators.registre.registreBtn).click()
    
        })
    
        })