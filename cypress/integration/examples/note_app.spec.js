describe('Note app', function () {
    beforeEach(function () {
        cy.request('POST','http://localhost:3001/api/testing/reset')
        const user = {
            name:'wangxiaoming',
            username:'wangxiaoming',
            password:'wangxiaoming'
        }
        cy.request('POST','http://localhost:3001/api/users/',user)
        cy.visit('http://localhost:3000')
    })

    it('front page can be opened', function () {
        cy.contains('Notes')
        cy.contains('Note app, Department of Compute Science')
    })

    it('login grom can be opened', function () {
        cy.contains('login').click()
    })

    it('use can login', function () {
        cy.contains('login').click()
        cy.get('#username').type('wangxiaoming')
        cy.get('#password').type('wangxiaoimng')
        cy.get('#login-button').click()
        cy.contains('wangxiaoming logged-in')
    })

    describe('when logged in', function () {
        beforeEach(function () {
            cy.contains('login').click()
            cy.get('#username').type('wangxiaoming')
            cy.get('#password').type('wangxiaoimng')
            cy.get('#login-button').click()
        })

        it('a new note can be creted',function(){
            cy.get('#new_note').click()
            cy.get('#newnote').type('this is a note from test')
            cy.contains('save').click()
            cy.contains('this is a note from test')
        })
    })
})