describe('Login Page', () => {
  before(() => {
    cy.visit('/#/login');
  });

  it('navigates to the correct page and logs in successfully', () => {
    cy.url()
      .should('contain', 'login');

    cy.get('[data-test=login-username-input]')
      .clear()
      .type('john.smith');

    cy.get('[data-test=login-password-input]')
      .clear()
      .type('pa$$w0rd');

    cy.get('[data-test=login-login-button]')
      .click();

    cy.url()
      .should('contain', 'dashboard');
  });
});
