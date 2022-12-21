import { loginPage } from "../pageObjects/loginPage.js";
import { homePage } from "../pageObjects/homePage.js";

describe("Login tests", () => {
    beforeEach(() => {
        cy.visit('/')
        homePage.clickLoginButton()

    })

    it('Login with valid credentials', () => {
        loginPage.login('tt@tt.tt', 'ttttttt8')

    })

    it('Login with invalid credentials', () => {
        loginPage.login('tt@tt.tt', 'ttttttt9')

    })

    it('logout', () => {
        loginPage.login('tt@tt.tt', 'ttttttt8')
        homePage.clickLogoutButton()
    })

})