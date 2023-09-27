describe('Navigation Test', () => {
  it('All navigation work', () => {
    cy.visit('http://dimas-caka.vercel.app')
    // cy.viewport('iphone-xr')
    cy.contains('About').click({force:true})
    cy.contains('Projects').click()
    cy.contains('Contact').click({force:true})
    cy.contains('Home').click()
    cy.get('#button-to-about').click()
    cy.get('#button-to-projects').click()
  })
})

describe('Form Test', () => {
  it("Form working fine", () => {
    cy.visit('http://dimas-caka.vercel.app')
    // cy.viewport('iphone-xr')
    cy.Form({
      Name: "Cypress",
      Email: "cypress@email.com",
      Message: "Hello im testing your contact form",
    })   
    cy.get('#button').click()
    cy.wait(3000)
 
    // cy.get('#name').type('Cypress')
    // cy.get('#email').type('cypress@email.com')
    // cy.get('#message').type('Im testing your contact form')
    // cy.get('form').submit();
  })
})

describe('Direct-button Test', () => {
  beforeEach(() => {
    cy.visit('http://dimas-caka.vercel.app')
  })
  it('All working', () => {
    cy.get('#button-github-repo').click()
    cy.get('#button-github-page').click()
    cy.get('#button-github').click()
    cy.get('#button-twitter').click()
    cy.get('#button-yt').click()
  })
})
// describe('My First Test', () => {
//   it('finds the content "type"', () => {
//     cy.visit('https://example.cypress.io')

//     cy.contains('type')
//   })
// })
export{}