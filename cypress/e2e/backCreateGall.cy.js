import { homePage } from "../pageObjects/homePage.js";

describe('Create gallery', () => {
    before(() => {
         /* cy.request('POST', 'https://gallery-api.vivifyideas.com/api/auth/login', {

            email: 'tt@tt.tt',
            password: 'ttttttt8'

        }).its('body').then((response) => {
            window.localStorage.setItem('token', response.access_token)

    
        })
        */

        cy.loginThroughBackend('tt@tt.ttvalid', 'ttttttt8') // => support/commands.js

        // cy.loginThroughBackend('validLoginEmail', 'validLoginPassword')
    })

    it('Visit default url', () => {
        cy.visit('/')
        // homePage.loginBtn.should('not.exit')

    })

})

