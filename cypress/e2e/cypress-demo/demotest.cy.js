/// <reference types="cypress" />

describe('Cypress Demo Login', ()=>{
   beforeEach(()=>{
    //viewport koyulabilir
   })
   
   
    it('SauceDemoPageLogin-Fail',()=>{
        cy.fixture("userdata").as("user")
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq','Swag Labs')  //assert
        cy.get("@user").then((user)=>{
            cy.login(user.failusername,user.failpassword)
        })
        cy.get("[data-test='error']").should('be.visible') //assert
    })
    
    it('SauceDemoPageLogin',()=>{
        //cy.visit('https://demo.netbox.dev/login/')
        cy.fixture("userdata").as("user")
        cy.visit('https://www.saucedemo.com/')
        cy.title().should('eq','Swag Labs')  //assert 
        cy.get("@user").then((user)=>{
            cy.login(user.username,user.password)
        })
        cy.get('span').should('have.class','title') //assert
      
        //logout 


        //cy.go() kullanımı

        //cy.go('back') string veya number olarak atayabiliriz. 1 , -1 veya forward , back

    })
  

})