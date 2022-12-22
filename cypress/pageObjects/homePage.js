class HomePage {

    get loginBtn() {
        return cy.get("a[href='/login']")
    }

    get logoutBtn() {
        return cy.get(".ml-auto > :nth-child(3) > .nav-link")
    }

    get registerBtn() {
        return cy.get("a[href='/register']")
    }

    get createGall() {
        // return cy.get("a[href='/create']")
        return cy.get('.mr-auto > :nth-child(3) > .nav-link')
    }

    clickLoginButton() {
        // cy.get("a[href='/login']").click()
        this.loginBtn.click()
    }

    clickLogoutButton() {
        this.logoutBtn.click()
    }

    clickRegisterButton() {
        this.registerBtn.click()
    }

    clickCreateButton() {
        this.createGall.click()
    }
}
export const homePage = new HomePage()