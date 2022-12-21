import { loginPage } from "../pageObjects/loginPage.js";
import { homePage } from "../pageObjects/homePage.js";


describe("Login tests", () => {
    beforeEach(() => {
        cy.visit('https://gallery-app.vivifyideas.com/')
        homePage.clickLoginButton()
    })

    it.only('Login with valid credentials', () => {
        cy.intercept('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', (req) => {
        }).as('validLogin')
        loginPage.login('tt@tt.tt', 'ttttttt8')
        cy.wait('@validLogin').then((request) => {
            // cy.log(JSON.stringfy(request.response.statusCode))
            expect(request.response.statusCode).to.eql(200)
            expect(request.response.headers['content-type']).to.eql('application/json')
        })
    })
})

