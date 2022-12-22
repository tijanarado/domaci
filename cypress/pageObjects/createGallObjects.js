class CreateGallery {

    get titleInput() {
        return cy.get('#title')
    }

    get descriptionInput() {
        return cy.get("#description")
    }

    get imageUrl() {
        return cy.get('input[type=url]')
    }

    get createButton() {
        return cy.get('form > :nth-child(4')
    }

    get cancelBtn() {
        return cy.get('form > :nth-child(5)')
    }

    get pageTitle() {
        return cy.get('h1')
    }

    get errorAlert() {
        // return cy.get('p[class="alert alert-danger"]')
        return cy.get(".alert")
    }

    create(title, description, url) {
        this.titleInput.type(title)
        this.descriptionInput.type(description)
        this.imageUrl.type(url)
        this.createButton.click()
    }
}

export const createGallery = new CreateGallery()