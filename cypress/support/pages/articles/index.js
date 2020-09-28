/// <reference types="cypress" />

const faker = require('faker');

const el = require('./elements').ELEMENTS;

import routes from '../../routes';

var postTitle = faker.lorem.words(2);
var postContent = faker.lorem.paragraph();

class Articles {

    acessarFormularioDeNovoArtigo(){
        cy.get(el.linkNovoArtigo).click();
    }
    
    preencherFormulario() {
        cy.get(el.inputTitle).type(postTitle);
        cy.get(el.inputDescription).type('Cypress');
        cy.get(el.textAreaContent).type(postContent);
        cy.get(el.inputTagField).type('cypress');        
    }
    
    submeterArtigo(){
        cy.get(el.submitBtn).click();

    }

    validarArtigoCriado(){

        // Validar rotas
        cy.wait(`@${routes.as.postArticles}`).then((postArticlesResponse) => {
            expect(postArticlesResponse.status).to.eq(200);
        });

        cy.wait(`@${routes.as.getArticlesTile}`).then((getArticlesResponse) => {
            expect(getArticlesResponse.status).to.eq(200);
        });

        cy.wait(`@${routes.as.getArticlesTitleComments}`).then((getArticlesCommentsResponse) => {
            expect(getArticlesCommentsResponse.status).to.eq(200);
        });

        // Validações em tela
        cy.get(el.postTitle).should('contain',postTitle);
        cy.get(el.postContent).should('contain', postContent);
        cy.get(el.postAuthor).should('contain', Cypress.config().user.username);
    }
}

export default new Articles();