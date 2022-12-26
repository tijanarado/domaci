class RegisterPage {

    get plan() {
        return cy.get('.vsp-c-switch-pricing-plan-list > :nth-child(1)').click({ force: true })
    }

    get freeSignUp() {
        return cy.get('.vsp-c-pricing-plan-list--monthly > :nth-child(1) > .vsp-c-btn').click({ force: true })
    }

    get emailInput() {
        return cy.get('input[data-vv-rules="required|email"]')
    }

    get passwordInput() {
        return cy.get('[type="password"]')
    }

    get userNumbers() {
        return cy.get('[name="number_of_users"]')
    }

    get submitForm() {
        return cy.get('.vs-c-checkbox-check')
    }

    get startBtn() {
        return cy.get('[data-cy="sign-up-submit-button"]')
    }

    register(emailInput, passwordInput, userNumbers) {
        this.emailInput.type(emailInput)
        this.passwordInput.type(passwordInput)
        this.userNumbers.type(userNumbers)
        this.submitForm.click()
        this.startBtn.click()
    }
}

export const registerPage = new RegisterPage()