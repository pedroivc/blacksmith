/// <reference types="Cypress" />


describe('spec.cy.js', () => {
    beforeEach(() => {
        cy.visit('https://dev-bsa-dev-test.pantheonsite.io/')
    })

    it('Verify application title', function () {
        cy.title().should('equal', 'BSA Developer Test')
    })

    it('Verify submenu list', function () {
        cy.get('#navigation-menu > ul > li.navigation-menu__item.navigation-menu__item--has-submenu > ul > li:nth-child(1) > a > span').should('have.text', 'Welding')
        cy.get('#navigation-menu > ul > li.navigation-menu__item.navigation-menu__item--has-submenu > ul > li:nth-child(2) > a > span').should('have.text', 'Inspection')
        cy.get('#navigation-menu > ul > li.navigation-menu__item.navigation-menu__item--has-submenu > ul > li:nth-child(3) > a > span').should('have.text', 'Coating')
        cy.get('#navigation-menu > ul > li.navigation-menu__item.navigation-menu__item--has-submenu > ul > li:nth-child(4) > a > span').should('have.text', 'Personnel Training')
        cy.get('#navigation-menu > ul > li.navigation-menu__item.navigation-menu__item--has-submenu > ul > li:nth-child(5) > a > span').should('have.text', 'Consulting')
        cy.get('#navigation-menu > ul > li.navigation-menu__item.navigation-menu__item--has-submenu > ul > li:nth-child(6) > a > span').should('have.text', 'Project Management')

    })
})

