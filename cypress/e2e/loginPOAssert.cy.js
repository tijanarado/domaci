
// reference types="Cypress"

import { loginPage } from "../pageObjects/loginPage.js";
import { homePage } from "../pageObjects/homePage.js";

describe("Login tests", () => {

    beforeEach( () => {
        cy.visit('/')
        cy.url().should('include', 'gallery-app')
        homePage.clickLoginButton()
        cy.url().should('include', '/login')
        loginPage.loginTitle.should('have.text', 'Please login')

    })

    it('Login with valid credentials', () => {
        loginPage.login('tt@tt.tt', 'ttttttt8')
    })

    it('Login with invalid credentials', () => {
        loginPage.login('tt@tt.tt', 'ttttttt9')
        loginPage.errorAlert.should('have.text', 'Bad Credentials')
    })

    it('logout', () => {
        loginPage.login('tt@tt.tt', 'ttttttt8')
        homePage.loginBtn.should('not.exist')
        homePage.clickLogoutButton()
        cy.wait(5000)
        homePage.logoutBtn.should('not.exist')
    })

})