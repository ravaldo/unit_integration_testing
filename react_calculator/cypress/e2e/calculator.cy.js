describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3006");
  })

  
  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })
  
  
  it('should be able to add numbers', () => {
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '7')
  })
  

  it('should update the dispplay with number presses', () => {
    cy.get('#number2').click();
    cy.get('#number3').click();
    cy.get('#number1').click();
    cy.get('#number5').click();
    cy.get('#number6').click();
    cy.get('#number7').click();
    cy.get('.display').should('contain', '231567')
  })
  
  
  it('should update the display after arithmetic operations', () => {
  	cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number1').click();
    cy.get('#operator_add').click();
    cy.get('.display').should('contain', '3')
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8')
  })
  
  it('should have expected output for positive numbers', () => {
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '81')
  })


  it('should have expected output for negative numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number7').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-6')
  })
  
  
  it('should have expected output for decimal numbers', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4.5')
  })
  
  
  it('should have expected output for very large numbers', () => {
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    
    cy.get('#operator-multiply').click();
 
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number9').click();   
    
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '999999998000000000')
  })
  
  
  it('should handle divide by zero', () => {
    cy.get('#number9').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Error')

  
  })
  
  
  
  

  
  
  
})