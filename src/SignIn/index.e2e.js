describe('SignIn', () => {
    it('should show the password field when the app loads', () => {
      cy.visit('http://localhost:3000/')
      cy.contains(/password/i)
    })
  })
  