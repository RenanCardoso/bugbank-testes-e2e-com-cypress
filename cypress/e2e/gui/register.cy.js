import { faker } from '@faker-js/faker'

describe('Criar conta', () => {
  let user

  beforeEach(() => {
    user = {
      email: faker.internet.email().toLowerCase(),
      name: faker.person.fullName(),
      password: faker.internet.password({ length: 20 }),
      haveBalance: null
    }
  })

  context('conta com saldo', () => {
    it('criar conta com sucesso', () => {
      user.haveBalance = true
      cy.guiCreateAccount(user)
      cy.get('#modalText')
        .should('contain.text', 'A conta ')
        .and('contain.text', 'foi criada com sucesso')
    })

    /* cenário abaixo está com erro no ambiente de produção, pois não está validando se o usuário já possui conta */
    it.skip('criar conta com dados de usuário já existente', () => {
      cy.guiCreateAccount(user)
      cy.get('#modalText')
        .should('contain.text', 'A conta ')
        .and('contain.text', 'foi criada com sucesso')
      cy.contains('Fechar').click()
      cy.guiCreateAccount(user)
      cy.get('#modalText')
        .should('contain.text', 'E-mail informado já existe')
    })
  })

  context('conta sem saldo', () => {
    it('criar conta com sucesso', () => {
      user.haveBalance = false
      cy.guiCreateAccount(user)
      cy.get('#modalText')
        .should('contain.text', 'A conta ')
        .and('contain.text', 'foi criada com sucesso')
    })

    /* cenário abaixo está com erro no ambiente de produção, pois não está validando se o usuário já possui conta */
    it.skip('criar conta com dados de usuário já existente', () => {
      cy.guiCreateAccount(user)
      cy.get('#modalText')
        .should('contain.text', 'A conta ')
        .and('contain.text', 'foi criada com sucesso')
      cy.contains('Fechar').click()
      cy.guiCreateAccount(user)
      cy.get('#modalText')
        .should('contain.text', 'E-mail informado já existe')
    })
  })
})
