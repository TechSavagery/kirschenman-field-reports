/// <reference types="cypress" />
describe('Health Checks', () => {
  beforeEach(() => {});

  it('Home Page Loads', () => {
    cy.viewport('macbook-13');
    cy.visit(Cypress.env('baseUrl'));
    cy.contains('Live Produce Data', { matchCase: false });
    cy.contains('Join Mailing List', { matchCase: false });
  });

  it('Capture Latest Screenshot', function () {
    cy.viewport('macbook-16');
    cy.visit(Cypress.env('baseUrl'));
    cy.get('#desktop-screenshot').click();
    cy.wait(3000);
    cy.get('#login-button').click({ force: true });
    cy.get('#input-email-for-sanity-login-provider').clear();
    cy.get('#input-email-for-sanity-login-provider').type('test');
    cy.get('#input-password-for-sanity-login-provider').clear();
    cy.get('#input-password-for-sanity-login-provider').type('test');
    cy.get('button').click();
    cy.wait(3000);
    cy.screenshot('kei-reports-desktop', { capture: 'viewport' });
    cy.exec('cd public/screenshots/health.spec.js');
    cy.exec('cp -f kei-reports-desktop.png /public')
  });
});
