/// <reference types="cypress" />

import {Login} from "../../pageObjects/login";

const login = new Login();

describe('Cypress Demo POM Login', ()=>{
    it('SauceDemoPageLogin-POM1',()=>{
      login.navigate()
      login.checkTitle()
    })
    it('SauceDemoPageLogin-POM2',()=>{
        login.username() //fixtures/userdata ile marsları cagırıp kullanılabilir
        login.password()
        login.loginBtn()
      })

    
})