import { faker } from '@faker-js/faker'

describe('Logout', () => {
  const user = {
    email: faker.internet.email().toLowerCase(),
    name: faker.person.fullName(),
    password: faker.internet.password({ length: 20 })
  }
  beforeEach(() => {
    cy.guiCreateAccount(user)
    cy.guiLogin(user)
  })
  it('realizar logout com sucesso', () => {
    cy.guiLogout()

    // Verificar se estou na página de login
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/`)
  })
})
