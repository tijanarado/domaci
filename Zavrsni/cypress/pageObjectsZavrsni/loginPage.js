class LoginPage {

    get emailInput() {
        return cy.get('[type="email"]')
    }

    get passwordInput() {
        return cy.get('[type="password"]')
    }

    get loginBtn() {
        return cy.get('.vs-u-text--left > .vs-c-btn')
    }

    login(email, password) {
        this.emailInput.type(email)
        this.passwordInput.type(password)
        this.loginBtn.click()
    }
}

export const loginPage = new LoginPage()