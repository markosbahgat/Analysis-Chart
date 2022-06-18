export const TestingSignOut = () => {
	it('SignOut', () => {
		cy.saveLocalStorage();
		cy.get('button[data-testid=menuButton]').click();
		cy.get('a[href=SignIn]').click();
		cy.url().should('include', '/SignIn');
	});
};
