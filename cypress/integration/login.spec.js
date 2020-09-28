/// <reference types="cypress" />

import login from '../support/pages/login'

context('Login', () => {
    it('Realizar login com sucesso', () => {
        // Preparação
        login.acessarLogin();

        // Ação
        login.preencherFormulario();
        login.submeterFormulario();

        // Validação
        login.validarLogin();

    });
});