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
}
export const homePage = new HomePage()