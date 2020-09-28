const el = require('./elements').ELEMENTS;

const faker = require('faker');

import routes from '../../routes';

var username = faker.name.firstName() + faker.name.lastName()

class Cadastro {


    acessarRegistro(){
        cy.visit('register');
    }

    preencherFormularioDeCadastro(){
        cy.get(el.inputUsername).type(username);
        cy.get(el.inputEmail).type(faker.internet.email());
        cy.get(el.inputPassword).type('12345678');
    }

    submeterFormularioDeCadastro(){
        cy.get(el.submitBtn).click();
    }

    validarUsuarioCriado(){
        // Validar rota
        cy.wait(`@${routes.as.postUser}`).then((postUserResponse) => {
            expect(postUserResponse.status).to.eq(200);
        });

        // Validações em tela
        cy.get(el.userFeed).should('contain','Your Feed');
        cy.get(el.userLink).should('contain', username);
    }
}

export default new Cadastro();
