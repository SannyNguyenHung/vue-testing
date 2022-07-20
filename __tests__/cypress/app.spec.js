import { mount } from '@cypress/vue'; // import the vue-test-utils mount function
import App from '../../src/App.vue'


describe('Click on refresh', () => {

    it('has diffrent values after refresh', () => {
        mount(App, {
            data() {
                return {
                    x1: 5,
                    x2: 10
                }
            }
        })

        cy.get('#numbers').should('not.have.text', '5 + 10')
    })
})