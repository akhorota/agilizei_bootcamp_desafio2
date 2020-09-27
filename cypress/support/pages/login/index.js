const el = require('./elements').ELEMENTS;

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

}

export default new Login();