import { loginPage } from "../pageObjectsZavrsni/loginPage";

describe('Login test', () => {

    beforeEach(() => {
        cy.visit('https://cypress.vivifyscrum-stage.com/login')
    })

    it('Login with valid credentials', () => {
        loginPage.login('tt@tt.tt', 'ttttttt8')
    })

    it('Login with invalid credentials', () => {
        loginPage.login('tr@tt.tt', 'ttttttt8')
    })

})