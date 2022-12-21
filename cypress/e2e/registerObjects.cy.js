import { homePage } from "../pageObjects/homePage.js";
import { registerPage } from "../pageObjects/registerObjects.js";


const { faker } = require("@faker-js/faker")

describe("Register tests", () => {

    beforeEach(() => {
        cy.visit('/')
        homePage.clickRegisterButton()
    })

    it('Register with valid credentials', () => {
        registerPage.submit('titi', 'rado', 'ttt@ttt.ttt', 'titi1234', 'titi1234')
    })

    it('Register with PO and faker', () => {
        registerPage.submit(faker.name.firstName(), faker.name.lastName(), faker.internet.email(), faker.internet.password())
        cy.wait(7000)
        homePage.loginBtn.should('not.exist')
    })

    it('Register with the same email', () => {
        registerPage.submit('tt', 'tt', 'tt@tt.tt', 'ttttttt8', 'ttttttt8')
        cy.wait(7000)
        registerPage.errorAllert.should('be.visible')
    })

})

