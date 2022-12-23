import { homePage } from "../pageObjects/homePage.js";
import { loginPage } from "../pageObjects/loginPage.js";
import { createGallery } from "../pageObjects/createGallObjects.js";

describe('Create new gallery', () => {
    beforeEach(() => {
        // cy.loginThroughBackend('tt@tt.tt', 'ttttttt8')
        cy.visit('https://gallery-app.vivifyideas.com/')
        homePage.clickLoginButton()
        loginPage.login('tt@tt.tt', 'ttttttt8')
        homePage.clickCreateButton()
    })

    it('Create new gallery', () => {
        // cy.reload() 
        homePage.clickCreateButton()

        cy.intercept(
            'POST',
            'https://gallery-api.vivifyideas.com/api/galleries',
            (req) => { }
        ).as('validCreate');
        createGallery.create('Cy title', 'Cy description', 'https://thumbs.dreamstime.com/z/flower-7-1096082.jpg')
        cy.wait('@validCreate').then((request) => {
            expect(request.response.statusCode).to.eql(201);

            const newGalleryId = request.response.body.id;
            cy.log(newGalleryId)

        })
    })


    it("Create new gallery without Title", () => {
        homePage.clickCreateButton()

        cy.intercept(
            'POST',
            'https://gallery-api.vivifyideas.com/api/galleries',
            (req) => { }
        )
            .as('validCreate');
        createGallery.create('', 'Cy description', 'https://thumbs.dreamstime.com/z/flower-7-1096082.jpg')
        cy.wait(5000)
        cy.wait('@validCreate').then((request) => {
            cy.log(JSON.stringify(request.response.statusCode))
            createGallery.errorAlert.should('be.visible')
        })
    })


    it("Create new gallery with invalid URL", () => {
        homePage.clickCreateButton()

        cy.intercept(
            'POST',
            'https://gallery-api.vivifyideas.com/api/galleries',
            (req) => { }
        )
            .as('validCreate');
        createGallery.create('Cy title', 'Cy description', 'http://yamataka01.web.fc2.com/02/14262gatinhos2.jpg')
        cy.wait(5000)
        cy.wait('@validCreate').then((request) => {
            cy.log(JSON.stringify(request.response.statusCode))
            createGallery.errorAlert.should('be.visible')

        })
    })
})
