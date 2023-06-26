describe('Navigation Test', () => {
  it('passes', () => {
    cy.visit('http://dimas-caka.vercel.app')
    cy.contains('About').click()
    cy.contains('Projects').click()
    cy.contains('Contact').click()
    cy.contains('Home').click()
    cy.get('#button-to-about').click()
    cy.get('#button-to-projects').click()
  })
})

describe('Form Test', () => {
  it("passes", () => {
    cy.visit('http://dimas-caka.vercel.app')
    cy.Form({
      Name: "Tester",
      Email: "tester@email.com",
      Message: "Test",
    })
  })
})
describe('Navigation Test', () => {
  beforeEach(() => {
    cy.visit('https://dimas-caka.vercel.app/')
  })
  it('passes', () => {
    cy.contains('About').click()
    cy.contains('Projects').click()
    cy.contains('Contact').click()
    cy.contains('Home').click()
    cy.get('#button-to-about').click()
    cy.get('#button-to-projects').click()
  })
})
export{}