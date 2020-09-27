/// <reference types="cypress" />

import articles from '../support/pages/articles'

context('Publicação', () => {

    beforeEach(() => { 
        // Preparação
        cy.backgroundLogin();
        articles.acessarFormularioDeNovoArtigo();

    });

    it('Criar uma nova publicação', () => {
        
        // Ação
        articles.preencherFormulario();
        articles.submeterArtigo();

        // Validação

        articles.validarArtigoCriado();
    });
});