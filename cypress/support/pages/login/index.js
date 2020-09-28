const el = require('./elements').ELEMENTS;

import routes from '../../routes';

class Login {

    acessarLogin(){
        cy.visit('login');
    }

    preencherFormulario(){
        cy.get(el.inputEmail).type(Cypress.config().user.email);
        cy.get(el.inputPassword).type(Cypress.config().user.password);
    }
    
    submeterFormulario(){
        cy.get(el.submitBtn).click();
    }

    validarLogin(){

        // Validar rotas
        cy.wait(`@${routes.as.postUserLogin}`).then((postUserLoginResponse) => {
            expect(postUserLoginResponse.status).to.eq(200);
        });

        cy.wait(`@${routes.as.getTags}`).then((getTagsResponse) => {
            expect(getTagsResponse.status).to.eq(200);
        });

        cy.wait(`@${routes.as.getFeed}`).then((getFeedResponse) => {
            expect(getFeedResponse.status).to.eq(200);
        });

        // Validações em tela
        cy.get(el.userFeed).should('contain','Your Feed');
        cy.get(el.userLink).should('contain', Cypress.config().user.username);

    }
}

export default new Login();