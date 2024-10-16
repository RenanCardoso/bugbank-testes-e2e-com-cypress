import { faker } from '@faker-js/faker'

describe('Login', () => {
  const user = {
    email: faker.internet.email().toLowerCase(),
    name: faker.person.fullName(),
    password: faker.internet.password({ length: 20 })
  }

  it('realizar login com sucesso', () => {
    cy.guiCreateAccount(user)
    cy.guiLogin(user)
    cy.get('#textName')
      .should('contain.text', `Olá ${user.name},`)
    cy.get('#textName').siblings()
      .should('contain.text', 'bem vindo ao BugBank :)')
    // Verificar se estou na home
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/home`)
  })

  it('realizar login com usuário que não existe', () => {
    cy.guiLogin(user)
    cy.get('#modalText')
      .should('have.text', 'Usuário ou senha inválido.\nTente novamente ou verifique suas informações!')
    // Verificar se ainda estou na página de login
    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/`)
  })
})
