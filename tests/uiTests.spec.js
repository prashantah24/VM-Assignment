import{test,expect}from '@playwright/test';

test('UI ELEMENTS',async({page})=>{
    await page.goto("https://voltmoney.in/check-loan-eligibility-against-mutual-funds");

    await expect(page.locator("//img[@alt='Volt money logo']")).toBeVisible();
    await expect(page.locator("//div[@class='header_benefitsContainer__RU8nQ']")).toBeVisible();
    await expect(page.locator("//div[normalize-space()='FAQs']")).toBeVisible();
    await expect(page.locator("//div[@class='button_buttonOutlineTransparentLarge___Dr9n']")).toBeVisible();
    await expect(page.locator("//div[@class='button_buttonPrimaryLarge__zgNyF']")).toBeVisible();
    await expect(page.locator("//input[@placeholder='Enter mobile number']")).toBeVisible();
    await expect(page.locator("//input[@placeholder='Enter PAN']")).toBeVisible();
    await expect(page.locator("//button[@type='button']")).toBeVisible();
    await expect(page.locator("//img[@alt='cams']")).toBeVisible();
    await expect(page.locator("//img[@alt='kfintech']")).toBeVisible();
    await expect(page.locator("//img[@alt='nsdl']")).toBeVisible();
    await expect(page.locator("//img[@alt='digilocker']")).toBeVisible();
    await expect(page.locator("//img[@alt='cersai']")).toBeVisible();
    await expect(page.locator("//div[@class='howitworks_HowItWorksContainerImageContainer__Yta2K']")).toBeVisible();
    await expect(page.locator("//img[@class='voltBenefits_VoltBenfitsContainerImageWeb___aMDT']")).toBeVisible();
    await expect(page.locator("//body/div[@id='__next']/div[@id='faq']/div[@class='faqs_Faqs_ContainerQuestionItemsContainer__Uz6jm']/div[1]/div[1]")).toBeVisible();
    await page.locator("//body/div[@id='__next']/div[@id='faq']/div[@class='faqs_Faqs_ContainerQuestionItemsContainer__Uz6jm']/div[1]/div[1]").click();
    await expect(page.locator("//li[contains(text(),'Borrow against your mutual fund investments withou')]")).toBeVisible();
    await expect(page.locator("img[alt='img_economic_times']")).toBeVisible();
    await expect(page.locator("//img[@alt='img_your_story']")).toBeVisible();
    await expect(page.locator("//img[@alt='img_entrepreneur']")).toBeVisible();
    await expect(page.locator("//img[@alt='twitter icon']")).toBeVisible();
    await expect(page.locator("//img[@alt='Volt money startup India']")).toBeVisible();

});
