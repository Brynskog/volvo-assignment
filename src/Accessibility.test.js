import { browser } from '@wdio/globals'
import AxeBuilder from '@axe-core/webdriverio'

describe('Accessibility Test', () => {
    //Fetching accessibility results
    it('should get the accessibility results from a page', async () => {
        const builder = new AxeBuilder({ client: browser })

        await browser.url('https://www.volvocars.com/intl/v/safety/highlights')
        const result = await builder.analyze()
        console.log('Acessibility Results:', result)
    })
});