Cypress.Commands.add('openSite', () => { 
    cy.visit('/').wait(500)
})

Cypress.Commands.add('clickAnElement', (element) => { 
    cy.get(element).should('be.visible').click()
})

Cypress.Commands.add('verifyFirstText', (element, dateText) => { 
    cy.get(element).invoke('text').then((text) => {
        expect(text.trim()).equal(dateText)
    })
})

Cypress.Commands.add('typeAndEnterText', (element, text) => { 
    cy.get(element).should('be.visible').type(text).type('{enter}')
})