 describe('template spec', () => {

   it('Logado com Sucesso', () => {
     //cy.viewport(1440,900)
     cy.visit('http://localhost:3000')

     cy.get('#email').type('4dt@gmail.com')
     cy.get('#password').type('4DT')

     cy.contains('button', 'Entrar').click()
     cy.wait(3000)
   })
 })

describe('template spec', () => {

  it('Campo em branco', () => {
    //cy.viewport(1440,900)
    cy.visit('http://localhost:3000')

    

    cy.contains('button', 'Entrar').click()

     cy.contains('Ei, não esqueça de digitar seu email!').click()

    cy.wait(3000)


  })
})



 describe('template spec', () => {

   it('Senha incorreta', () => {
     //cy.viewport(1440,900)
     cy.visit('http://localhost:3000')

     cy.get('#email').type('4dt@gmail.com')
     cy.get('#password').type('USER')

     cy.contains('button', 'Entrar').click()

     cy.contains('Acesso negado! Tente novamente.').click()

     cy.wait(3000)
   })
 })
