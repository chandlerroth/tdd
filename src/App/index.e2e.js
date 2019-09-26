describe('App', () => {
  it('should display edit', () => {
    cy.visit('http://localhost:3000/')
    cy.contains(/edit/i)
  })
})
