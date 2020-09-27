/// <reference types="cypress" />

const faker = require('faker');

const el = require('./elements').ELEMENTS;

import routes from '../../routes';

class Articles {

    acessarFormularioDeNovoArtigo(){
        cy.get(el.linkNovoArtigo).click();
    }
    
    preencherFormulario() {
        cy.get(el.inputTitle).type('Agilizei Title');
        cy.get(el.inputDescription).type('Cypress');
        cy.get(el.textAreaContent).type(faker.lorem.paragraph());
        cy.get(el.inputTagField).type('cypress');        
    }
    
    submeterArtigo(){
        cy.get(el.submitBtn).click();

    }

    validarArtigoCriado(){
        cy.wait(`@${routes.as.postArticles}`).then((postArticlesResponse) => {
            expect(postArticlesResponse.status).to.eq(200);
        });

        cy.wait(`@${routes.as.getArticlesTile}`).then((getArticlesResponse) => {
            expect(getArticlesResponse.status).to.eq(200);
        });

        cy.wait(`@${routes.as.getArticlesTitleComments}`).then((getArticlesCommentsResponse) => {
            expect(getArticlesCommentsResponse.status).to.eq(200);
        });
    }
}

export default new Articles();