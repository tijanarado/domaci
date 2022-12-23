class DeleteGallery {

    get deleteButton() {

        return cy.get(':nth-child(5) > button.btn')
    }
}

export const deleteGallery = new DeleteGallery()