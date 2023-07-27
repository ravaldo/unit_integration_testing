
describe('App', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:3005');
  
  
  });


  it('Loads the app with a counter', () => {
    const counter = cy.get('h1');
    counter.should('contain', 0)
  });
  
  
  it('should have prepopulated comments', () => {
  	const commentListItems = cy.get('#comment-list > li');
  	commentListItems.should('have.length' , 2);
  });
  
  it('should be able to add a comment', () => {
  	cy.get('#name-input').type("John Jackson");
  	cy.get('#comment-input').type("This is a test");
  	cy.get('#comment-form').submit();
  	
  	const commentListItems = cy.get('#comment-list > li');
  	commentListItems.should('have.length' , 3);


  })
  
  
})