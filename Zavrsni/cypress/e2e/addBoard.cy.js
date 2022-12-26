import { loginPage } from "../pageObjectsZavrsni/loginPage";
import { addBoard } from "../pageObjectsZavrsni/addBoardPage";

describe('Add board', () => {

    before(() => {
        cy.visit('https://cypress.vivifyscrum-stage.com/login')
    })

    it('Login with valid credentials', () => {
        loginPage.login('tt@tt.tt', 'ttttttt8')
    })

    it('Add new board', () => {

        cy.get('.vs-c-icon').invoke('Add board').click()
        cy.contains('Add Board').click()
        addBoard.createBoard('My Organisation', 'Proba')

    })
})