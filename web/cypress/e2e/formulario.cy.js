describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000')


    cy.get('#email').type('4dt@gmail.com')
    cy.get('#password').type('4DT')

    cy.contains('button', 'Entrar').click()


    cy.contains('h4', 'Formulários').click()

    cy.get('#name').type('João Vitor Aguiar Souza')

    cy.get('#email').type('joao@gmail.com')
    cy.get('#phone').type('11999990000')
      .should('have.value', '(11) 99999-0000')

    cy.get('#consultancyType').select('In Company')

    cy.contains('span', 'Pessoa Jurídica').should('be.not.checked')

    cy.contains('span', 'Pessoa Física', { timeout: 10000 })
      .should('be.not.checked')

    cy.get('#document')
      .type('74831066000160')
      .should('have.value', '748.310.660-00160')

    const redes = [
      'Instagram',
      'Udemy',
      'LinkedIn',
      'Indicação de Amigo',
      'YouTube',
    ]


    redes.forEach((item) => {
      cy.contains('label', item)
        .find('input').check().should('be.checked')
    })

    cy.get('input[type="file"]').selectFile('./dist/header.png', { force: true })
    //  cy.contains('label', 'LinkedIn')
    //   .find('input').check().should('be.checked')

    cy.get('#details').type('Esses são os detalhes do formulário')

  })
})