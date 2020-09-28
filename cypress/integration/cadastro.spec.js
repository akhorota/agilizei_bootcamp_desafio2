/// <reference types="cypress" />

import cadastro from '../support/pages/cadastro'

context('Cadastro', () => {
  it('Cadastrar um novo usuário', () => {
    // Preparação
    cadastro.acessarRegistro();
    
    // Ação
    cadastro.preencherFormularioDeCadastro();
    cadastro.submeterFormularioDeCadastro();
    
    // Validação
    cadastro.validarUsuarioCriado();

  });
});