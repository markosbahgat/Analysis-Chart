export const TestingDropDowns = () => {
	it('DropDowns', () => {
		cy.get('button[id="headlessui-listbox-button-:r5:"]').click();
		cy.get('ul[role=listbox]').should('have.class', 'absolute');
		cy.get('ul[role=listbox]').children().should('have.length', 4);
		cy.get('button[id="headlessui-listbox-button-:r7:"]').click();
		cy.get('ul[role=listbox]').should('have.class', 'absolute');
		cy.get('ul[role=listbox]').children().should('have.length', 4);
		cy.get('button[id="headlessui-listbox-button-:r9:"]').click();
		cy.get('ul[role=listbox]').should('have.class', 'absolute');
		cy.get('ul[role=listbox]').children().should('have.length', 17);
	});
};
