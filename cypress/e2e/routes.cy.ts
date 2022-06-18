export const TestingRoutes = () => {
	describe('Routes', () => {
		it('Testing Routes', () => {
			cy.restoreLocalStorage();
			cy.visit('localhost:3000/');
			cy.url().should('include', '/');
			cy.removeLocalStorage('token');
			cy.url().should('include', '/SignIn');
			cy.visit('localhost:3000/');
			cy.url().should('include', '/SignIn');
			cy.setLocalStorage('token', 'marko@gmail.com');
			cy.visit('localhost:3000/');
			cy.url().should('include', '/');
			cy.visit('localhost:3000/123');
			cy.url().should('include', '/123');
			cy.visit('localhost:3000/123/fds;kj');
			cy.get('p[data-testid=NotFound]').should('have.text', '404');
			cy.get('a[data-testid=gotodashboard]').click();
			cy.url().should('include', '/');
			cy.visit('localhost:3000/620af3a468e4b2e765e7c9e7');
			cy.get('a[data-testid=schoolName]').should('have.text', 'Burke High School');
		});
	});
};
