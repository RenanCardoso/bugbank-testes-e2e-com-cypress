Cypress.Commands.add('guiLogin', (user) => {
  cy.visit('/')

  cy.get('input[name="email"]').eq(0).type(user.email, { force: true })
  cy.get('input[name="password"]').eq(0).type(user.password, { force: true }, { log: false })
  cy.contains('Acessar').click({ force: true })
})

Cypress.Commands.add('guiLogout', () => {
  cy.contains('Sair').click()
})

Cypress.Commands.add('guiCreateAccount', (user) => {
  cy.visit('/')
  cy.contains('Registrar').click()
  cy.get('input[name="email"]').eq(1).type(user.email, { force: true })
  cy.get('input[name="name"]').type(user.name, { force: true })
  cy.get('input[name="password"]').eq(1).type(user.password, { force: true }, { log: false })
  cy.get('input[name="passwordConfirmation"]').type(user.password, { force: true }, { log: false })
  if (user.haveBalance) {
    cy.get('#toggleAddBalance').click({ force: true })
  }
  cy.contains('Cadastrar').click({ force: true })
})

Cypress.Commands.add('MakeTransfer', (user, transfer) => {
  cy.get('#btn-TRANSFERÊNCIA').click()
  cy.get('input[name="accountNumber"]').type(user.number_account)
  cy.get('input[name="digit"]').type(user.digit)
  cy.get('input[name="transferValue"]').type(transfer.value)
  cy.get('input[name="description"]').type(transfer.description)
  cy.contains('Transferir agora').click()
})

const LOCAL_STORAGE_MEMORY = {}

Cypress.Commands.add('saveLocalStorage', () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key]
  })
})

Cypress.Commands.add('restoreLocalStorage', () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key])
  })
})
