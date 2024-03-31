/// <reference types="cypress"/>

const navBarText = Cypress.env('navBarText')
describe('Test Suite 1', () => {

    // beforeEach(() =>{
    //     cy.visit('/')
    // })

    it.skip('TC-001 ', () => {
        cy.findByText(navBarText).should('exist')
    })

    it.skip('TC-002 async workflow', () => {
        cy.visit('/commands/actions')
        cy.findByPlaceholderText('Email').type('test@email.com')
        cy.wait(5000)
        console.log('test is finished')
    })

    it.skip('TC-003 non-async workflow by then()', () => {
        cy.visit('/commands/actions')
        cy.findByPlaceholderText('Email').type('test@email.com')
        cy.wait(2000).then(() => {
            console.log('test is finished')
            fetch('https://api.spacexdata.com/v3/missions')
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                })
        })
    })

    it.only('TC-004 assertions', () => {
        cy.visit('/commands/actions')
        cy.get('.dropdown-menu').find('li').eq(2).should('have.class', 'active')
        cy.get('.dropdown-menu').find('li').first().should('not.have.class', 'active')
            .find('a').should('have.attr', 'href', '/commands/querying')
    })
})