describe('todos', () => {

  beforeEach(() => {
    cy.visit('/');
  });

  it('add todo', () => {
    cy.findByRole('textbox', { name: /title/i })
      .type('todo1');
    cy.findByRole('button', { name: /submit/i })
      .click();

    cy.findByText(/todo1/i).should('exist');
    cy.findByText(/total todos: 1/i).should('exist');
  });

  // remove todo
  it('remove todo', () => {
    cy.findByRole('textbox', { name: /title/i })
      .type('todo1');
    cy.findByRole('button', { name: /submit/i })
      .click();
    cy.findByRole('textbox', { name: /title/i })
      .type('todo2');
    cy.findByRole('button', { name: /submit/i })
      .click();

    cy.wait(2000);

    cy.get('[data-cy=todo-todo2]')
      .within(() => {
        cy.findByRole('button', { name: /remove/i }).click();
      });

    cy.findByText(/todo2/i).should('not.exist');
    cy.findByText(/total todos: 1/i).should('exist');
  })


  // check a todo

  // todo count values updated
});