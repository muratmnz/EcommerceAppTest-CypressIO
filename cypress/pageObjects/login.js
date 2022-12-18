export class Login {
    navigate(){
        cy.visit('https://www.saucedemo.com/')
    }
    checkTitle(){
        cy.title().should('eq','Swag Labs')  //assert
    }
    username(){
        cy.get('#user-name').should('be.visible').clear().type("standard_user")
        return this;
    }
    password(){
        cy.get('#password').should('be.visible').clear().type("secret_sauce")
    }
    loginBtn(){
        cy.get('#login-button').click() //click
    }

   
}