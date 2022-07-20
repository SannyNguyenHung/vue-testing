
import App from '../src/App.vue'

describe('App methods', () => {

    test('has different values after refresh', () => {
        const before_data = App.data()

        App.methods.refresh()

        const after_data = App.data()
        expect(after_data).not.toBe(before_data)
    })
})