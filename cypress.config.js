const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://bugbank.netlify.app', // URL base da aplicação em teste
    env: {
      hideCredentials: true, // Como boa prática, é usado este variável de teste para que o token de acesso (o qual é um dados sensível) fique protegido
      requestMode: true // feedback visual ocorra mesmo que estejamos utilizando o comando cy.request()
    },
    experimentalRunAllSpecs: true // para rodar todos os testes em modo interativo
  },
  fixturesFolder: false, // não uso de fixture
  video: false // não geração geração de vídeos após a execução dos testes em modo headless.
})
