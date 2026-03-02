/// <reference types="cypress"/>
import user from "../fixtures/usuario.json"

describe('Funcionalidade: login', () => {

    beforeEach(() => {
        cy.visit('login.html')
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('#email').type('teste26@teste.com')
        cy.get('#password').type('Teste@123')
        cy.get('#login-btn').click()
        cy.url().should('include', 'dashboard')
    });
    it('Deve fazer login com sucesso - Usando comando customizado', () => {
        cy.login('teste26@teste.com', 'Teste@123')
    });
    it('Deve fazer login com sucesso com conta Admin - Usando comando customizado', () => {
        cy.login('admin@biblioteca.com', 'admin123')
    });

    it('Deve fazer login com sucesso - Usando importação da massa de dados', () => {
        cy.login(user.email, user.senha)

    });
});