import { loginPage } from "../pageObjectsZavrsni/loginPage";

describe('Login intercept test', () => {

    it('Intercept login with valid credentials', () => {
        cy.intercept('POST', 'https://cypress.vivifyscrum-stage.com/login', (req) => {
        }).as('validLogin')
        loginPage.login('tt@tt.tt', 'ttttttt8')
        cy.wait('@validLogin').then((request) => {

            expect(request.response.statusCode).to.eql(200)
            expect(request.response.headers['content-type']).to.eql('application/json')
        })
    })
})