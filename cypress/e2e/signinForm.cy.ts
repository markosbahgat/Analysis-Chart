export const SignInForm = () => {
	it('Test SignIn', () => {
		cy.get('input[name="email"]').type('markos.a7a@gmail.com');
		cy.get('input[name="password"]').type('dfsafdsfdsadsfsda');
		cy.get('form').submit();
		cy.saveLocalStorage();
	});
};
