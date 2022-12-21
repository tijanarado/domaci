import { homePage } from "../pageObjects/homePage.js"
import { loginPage } from "../pageObjects/loginPage.js"


describe("Logout", () => {
    beforeEach(() => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        homePage.clickLoginButton()
    })

    it.only('Intercept logout', () => {

        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', (req) => {
        }).as('validLogin')
        loginPage.login('tt@tt.tt', 'ttttttt8')
        cy.wait('@validLogin').then((request) => {
            // cy.log(JSON.stringfy(request.response.statusCode))
            expect(request.response.statusCode).to.eql(200)
        })

        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/logout', (req) => {
        }).as('validLogout')
        homePage.clickLogoutButton()
        cy.wait('@validLogout').then((request) => {
            // cy.log(JSON.stringfy(request.response.statusCode))
            expect(request.response.statusCode).to.eql(200)
        })
    })
})



