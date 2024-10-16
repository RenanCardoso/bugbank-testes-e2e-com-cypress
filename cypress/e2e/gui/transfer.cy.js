import { faker } from '@faker-js/faker'

describe('Transferência', () => {
  let user = {
    email: faker.internet.email().toLowerCase(),
    name: faker.person.fullName(),
    password: faker.internet.password({ length: 20 }),
    haveBalance: true,
    number_account: '',
    digit: ''
  }

  let transfer = {
    value: faker.number.float({ min: 1, max: 100, fractionDigits: 2 }),
    description: faker.lorem.lines(1)
  }

  before(() => {
    cy.guiCreateAccount(user)
  })

  beforeEach(() => {
    cy.restoreLocalStorage()
    cy.guiLogin(user)
    cy.get('#textAccountNumber > span')
    .invoke('text')
    .then((text) => {
      const partes = text.split('-')
      user.number_account = partes[0]
      user.digit = partes[1]
    })
  })

  /* a aplicação de teste não possui armazenamento em banco de dados, portanto, todas as informações são
   * armazenadas no local storage do navegador, e por isso fiz esse tratamento para salvar e restaurar
   * os dados da conta criada anteriormente para que não seja necessário criar uma nova conta para cada teste
   * buscando assim uma maior agilidade e velocidade de execução dos testes.
   */
  afterEach(() => {
    cy.saveLocalStorage()
  })

  it('realizar transferência com sucesso', () => {
    cy.contains('Sair').click()
    const newUser = {
      email: faker.internet.email().toLowerCase(),
      name: faker.person.fullName(),
      haveBalance: true,
      password: faker.internet.password({ length: 20 })
    }
    cy.guiCreateAccount(newUser)
    cy.guiLogin(newUser)
    cy.doTransfer(user, transfer)
    cy.get('#modalText')
      .should('contain.text', 'Transferencia realizada com sucesso')
  })

  context('falha ao realizar transferência', () => {
    it('conta não existe', () => {
      user.number_account = '0000'
      user.digit = '0'
      cy.doTransfer(user, transfer)
      cy.get('#modalText')
        .should('contain.text', 'Conta inválida ou inexistente')
    })

    it('saldo insuficiente para realizar transferência', () => {
      cy.contains('Sair').click()
      const newUser = {
        email: faker.internet.email().toLowerCase(),
        name: faker.person.fullName(),
        haveBalance: false,
        password: faker.internet.password({ length: 20 })
      }
      cy.guiCreateAccount(newUser)
      cy.guiLogin(newUser)
      cy.doTransfer(user, transfer)
      cy.get('#modalText')
        .should('contain.text', 'Você não tem saldo suficiente para essa transação')
    })

    it('realizar transferência para si mesmo', () => {
      cy.doTransfer(user, transfer)
      cy.get('#modalText')
        .should('contain.text', 'Nao pode transferir pra mesmo conta')
    })
  })
})
