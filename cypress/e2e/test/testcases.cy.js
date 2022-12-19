/// <reference types="cypress" />

describe('Tunga QA Challenge answers', () => {
    beforeEach(() => {
        //Launch site
        cy.openSite()
    })

    it('Should print the date and name of each card', () => {
        for (let i = 1; i <= 52; i++) {
            // Select the current item using the :nth-child locator
            cy.get(`:nth-child(${i}) > .MuiCardContent-root > [data-testid="date"]`).invoke('text').then((text) => {
                //Print the date
                cy.log(`Date ${i}: ${text}`)
            })
            cy.get(`:nth-child(${i}) > .MuiCardContent-root > .MuiTypography-h5`).invoke('text').then((text) => {
                //Print the company name 
                cy.log((`Name ${i}: ${text}`))
            })
        }
    });

    it('Sort by earliest date', () => {
        cy.fixture('elements').then((em) => {
            //Click on the 'Earliest' button
            cy.clickAnElement(em.earliest_btn)
            //Compare the first date with what is supposed to be the earliest date
            cy.verifyFirstText(em.first_date, em.earliest_date)
            cy.wait(2000)
        })

    })

    it('Sort by latest date', () => {
        cy.fixture('elements').then((em) => {
            //Click on the 'Latest' button
            cy.clickAnElement(em.latest_btn)
            //Compare the first date with what is supposed to be the latest date
            cy.verifyFirstText(em.first_date, em.latest_date)
            cy.wait(2000)

        })
    })

    it('Search in the list of company cards by name', () => {
        cy.fixture('elements').then((em) => {
            //Type a company name into the search box and press enter
            cy.typeAndEnterText(em.search_box, em.search_text)
            //Verify the text typed into the search box is what is displayed
            cy.verifyFirstText(em.filtered_result, em.search_text)
            cy.get('.MuiInputBase-input',{timeout: 2000}).clear()

        })
    })

})