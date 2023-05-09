describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it ('should update display when operation completed', ()=>{
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '4');
  })

  it ('should chain multiple operations together', ()=>{
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number5').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '14');
  })

  it ('should display positive numbers correctly', ()=>{
    cy.get('#number2').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '25');
  })
  
  it ('should display negative numbers correctly', ()=>{
    cy.get('#number2').click();
    cy.get('#operator-subtract').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-3');
  })

  it ('should display decimal numbers correctly', ()=>{
    cy.get('#number0').click();
    cy.get('#decimal').click();
    cy.get('#number7').click();
    cy.get('#number5').click();
    cy.get('.display').should('contain', '0.75')
  })

  it ('should display outcome for large numbers', ()=>{
    cy.get('#number8').click();
    cy.get('#number0').click();
    cy.get('#number0').click();
    cy.get('#number8').click();
    cy.get('#operator-multiply').click();
    cy.get('#number4').click();
    cy.get('#number5').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '360360');
  })

  it ('should behave e.g. it should divide by 0', ()=>{
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '0');
  })

})