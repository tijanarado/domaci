import { homePage } from "../pageObjects/homePage";
import { loginPage } from "../pageObjects/loginPage";
import { createGallery } from "../pageObjects/createGallObjects";
import { deleteGallery } from "../pageObjects/deleteObjects";

const { faker } = require("@faker-js/faker")

let newGalleryId = 0;

beforeEach(() => {
    cy.visit('/')
    cy.loginThroughBackend('tt@tt.tt', 'ttttttt8')

})

it('Create before delete', () => {
    cy.reload() 
    homePage.clickCreateButton()

    cy.intercept(
        'POST',
        'https://gallery-api.vivifyideas.com/api/galleries',
        (req) => { }
    )
        .as('newGall');
    createGallery.create('Create before delete', 'Cy description', 'https://thumbs.dreamstime.com/z/flower-7-1096082.jpg')
    cy.wait(5000)
    cy.wait('@newGall').then((request) => {
    cy.log(JSON.stringify(request.response.statusCode))

        newGalleryId = request.response.body.id;
        cy.log(newGalleryId)

    })
})


it("Delete Gallery", () => {
    cy.visit(`/galleries/${newGalleryId}`)
    deleteGallery.deleteButton.click()
    cy.intercept(
        'DELETE',
        `https://gallery-api.vivifyideas.com/api/galleries/${newGalleryId}`,
        (req) => { }
    )
        .as('deleteGallery')
    cy.wait(5000)
    cy.wait('@deleteGallery').then((request) => {
    cy.log(JSON.stringify(request.response.statusCode))

    })
})

afterEach(() => {
    cy.clearCookies()
})



