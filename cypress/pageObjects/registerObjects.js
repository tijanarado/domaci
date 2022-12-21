
class RegisterPage {

    get registerButton() {
        return cy.get("a[href='/register']")
    }

    get firstName() {
        return cy.get("#first-name")
    }

   get lastName() {
        return cy.get("#last-name")
   }

   get emailInput() {
        return cy.get("#email")
   }

   get passwordInput() {
        return cy.get("#password")
   }

   get confirmPasswordInput() {
        return cy.get("#password-confirmation")
   }

   get termsInput() {
        return cy.get(".form-check-input")
   }

   get submitButton() {
        return cy.get(".btn")
   }

   get errorAllert() {
     return cy.get('p[class="alert alert-danger"]')
   }

   submit(firstName, lastName, emailInput, passwordInput) {
    this.firstName.type(firstName)
    this.lastName.type(lastName)
    this.emailInput.type(emailInput)
    this.passwordInput.type(passwordInput)
    this.confirmPasswordInput.type(passwordInput)
    this.termsInput.click()
    this.submitButton.click()

   }
} 

export const registerPage = new RegisterPage()