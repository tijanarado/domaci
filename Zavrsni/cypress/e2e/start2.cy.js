import { loginPage } from "../pageObjectsZavrsni/loginPage"
import { registerPage } from "../pageObjectsZavrsni/registerPage"

describe("Start Page", () => {

    it("Visit home page", () => {

        cy.visit('https://cypress.vivifyscrum-stage.com/login')
        cy.get('[data-cy="login-sign-up-link"]').click()

    })

})