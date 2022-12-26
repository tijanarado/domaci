import { registerPage } from "../pageObjectsZavrsni/registerPage";

describe('Registration', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('Registration test1', () => {

        registerPage.plan
        registerPage.freeSignUp
        registerPage.register('rr@rr.rr', 'rrrrrrr8', '10')
    })
})

