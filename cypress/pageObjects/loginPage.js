class LoginPage {

    get emailInput() {
        return cy.get('#email')
    }

    get passwordInput() {
        return cy.get("#password")
    }

    get submitButton() {
        return cy.get("button")
    }

    get loginTitle() {
        return cy.get('h1')
    }
    get errorAlert() {
        return cy.get('p[class="alert alert-danger"]')
    }
    login(email, password) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.submitButton.click()
    }
}
export const loginPage = new LoginPage()