describe('Visibility tests', () => {
    beforeEach(async () => {
        await browser.url('https://www.volvocars.com/intl/v/safety/highlights');
    })
    it('Header should exist', async () => {
        //Testing wether or not the page title/header is displayed and contains the correct text
        const h1 = await $('#ModelIntro-1 h1');

        expect(h1).toBeDisplayed();
        expect(h1).toHaveText('Safety');
    });

    it('Menu item should exist', async () => {
        //Testing menu items through text
        const menuItem = await $$('#LocalSubmenu-1 #Z94pe8rGn_ImRa3OF-H0E div')[2].$('a');

        expect(menuItem).toHaveText('Features');
    });
});
