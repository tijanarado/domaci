class AllGalleries {

    get loginBtn() {
        return cy.get("a[href='/login']")
    }

    get logoutBtn() {
        return cy.get(".ml-auto > :nth-child(3) > .nav-link")

    }

    get registerBtn() {
        return cy.get(":nth-child(2) > .nav-link")
    }

    get allGallButton() {
        return cy.get("a[href=" / "]".eq(1))
    }

}

export const allGalleries = new AllGalleries()