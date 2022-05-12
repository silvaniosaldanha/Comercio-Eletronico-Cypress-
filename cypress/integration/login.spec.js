describe('Automation Practice', ()=>{

    //Aqui estamos testando um login utilizando e-mail e senha válidos, e validando
    //se o usuário realmente foi logado no sistema, identificado pela mensagem
    //de boas vindas "Welcome to your account."
    it('Login com sucesso', ()=>{
        cy.visit(Cypress.config().baseUrl)
        cy.get('.login').click()
        cy.get('#email').type('silvaniosaldanha1@hotmail.com')
        cy.get('#passwd').type('cypress')
        cy.get('#SubmitLogin > span').click()
        cy.get('.info-account').should('contain.text','Welcome to your account.')
    })

    //Aqui estamos testando um login utilizando e-mail válido, porém senha inválida, e validando
    //se o usuário realmente foi barrado no login, identificado pela mensagem
    //de erro "Authentication failed."
    it('Login inválido', ()=>{
        cy.visit(Cypress.config().baseUrl)
        cy.get('.login').click()
        cy.get('#email').type('silvaniosaldanha1@hotmail.com')
        cy.get('#passwd').type('selenium')
        cy.get('#SubmitLogin > span').click()
        cy.get('ol > li').should('contain.text','Authentication failed.')
    })

    //Aqui estamos testando o comportamento do sistema ao tentar realizar login
    //Sem preencher e-mail e senha, e validando a exibição da mensagem de erro "An email address required."
    it('Login em branco', ()=>{
        cy.visit(Cypress.config().baseUrl)
        cy.get('.login').click()
        cy.get('#SubmitLogin > span').click()
        cy.get('ol > li').should('contain.text','An email address required.')
    })
})