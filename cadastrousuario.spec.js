/// <reference types="cypress" />

 //Aqui estamos testando um cadastro inicial no site  de um usuario fictício.// Verificando se o cadastro foi realizado com sucesso. 

describe('Automation Practice', ()=>{
    it('Login com sucesso', ()=>{
        cy.visit("http://automationpractice.com/index.php");
        cy.get('.login').click()
        cy.get('#email_create').type('silvaniosaldanha1@gmail.com')
        cy.get('#SubmitCreate > span').click()
        cy.get(':nth-child(3) > .top').click()
        cy.get('#customer_firstname').type('Silvanio')
        cy.get('#customer_lastname').type('Saldanha')
        cy.get('#passwd').type('Maria');
        cy.get('#newsletter').click();
        cy.get('#company').type('TESTE');
        cy.get('#address1').type('Domingos Belem');
        cy.get('#address2').type('galpao');
        cy.get('#city').type('Contagem');
        cy.get('#postcode').type('32013');
        cy.get('button').dblclick('top');
        cy.get('#other').type('Proximo ao supermercado');
        cy.get('#phone').type('31-33984950');
        cy.get('#phone_mobile').type('31-992011029');
        cy.get('#alias').type('Rua Matipo');
        cy.get('#submitAccount > span').click();
    })   
    }) 
    