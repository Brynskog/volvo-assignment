describe('Interaction tests', () => {
    beforeEach(async () => {
        await browser.url('https://www.volvocars.com/intl/v/safety/highlights');
    })

    it('Content should change', async () => {
        //Testing content switching by clicking a menu item and confirming the new content through text
        const menuItem = await $$('#LocalSubmenu-1 #Z94pe8rGn_ImRa3OF-H0E div')[2].$('a');

        expect(menuItem).toHaveText('Features');
        menuItem.click();

        const introText = await $('#TextStatement-1 .fp');
        expect(introText).toHaveText('Our Safe Space Technology');


    });

    it('Content should change again', async () => {
        //Testing the content switching to another section
        const menuItem = await $$('#LocalSubmenu-1 #Z94pe8rGn_ImRa3OF-H0E div')[3].$('a');

        expect(menuItem).toHaveText('Child Safety');
        
        menuItem.click();
        expect(browser.url).toBe('https://www.volvocars.com/intl/v/safety/child-safety')
    })

    it('Promotion clickable', async () => {
        //Testing the button clickability on a specific promotion
        const promotionButton = await $('#PromotionBackgroundImage-1 a');

        promotionButton.click();
        expect(broser.url).toBe('https://www.volvocars.com/intl/v/safety/child-safety/innovations-timeline');
    })
})