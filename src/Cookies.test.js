describe('Cookie consent', async () => {
    beforeEach(async () => {
        await browser.url('https://www.volvocars.com/intl/v/safety/highlights');
    })
    it('should delete all cookies and display consent modal', async () => {
        //Testing the deletion of all cookies and the display of the consent modal
        await browser.deleteCookies()
        const cookies = await browser.getCookies()
        expect(cookies).toMatchObject([])

        window.location.reload();

        const consentModal =  $('#onetrust-banner-sdk');
        expect(consentModal).toBeDisplayed(true);
    });

    it('Cookie consent', async () => {
        //Testing that the acceptance click for cookie consent closes the consent modal
        const button = $('#onetrust-accept-btn-handler');
        const consentModal =  $('#onetrust-banner-sdk');

        button.click();
        expect(consentModal).toBeDisplayed(false);
    });

})