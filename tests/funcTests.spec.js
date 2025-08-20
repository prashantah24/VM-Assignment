import {test,expect} from '@playwright/test';
import invalidMobiles from '../testdata/invalidMobileData.json' assert { type: 'json' };
import panData from '../testdata/panTestData.json' assert { type: "json" };

//Verify page loads correctly
test('functional Tests',async({page})=>{
    await page.goto("https://voltmoney.in/check-loan-eligibility-against-mutual-funds");

    // Assertion to check if the logo is visible
    await expect(page.locator("//img[@alt='Volt money logo']")).toBeVisible();

})

test('Valid PAN and Username',async({page})=>{
    await page.goto("https://voltmoney.in/check-loan-eligibility-against-mutual-funds");

    // Assertion to check if the logo is visible
    await expect(page.locator("//button[@type='button']")).toBeDisabled();
    await page.locator("//input[@placeholder='Enter mobile number']").fill("9876543210");
    await page.locator("//input[@placeholder='Enter PAN']").fill("ABCDE1234F");
    await expect(page.locator("//button[@type='button']")).toBeEnabled();
    await page.click("//button[@type='button']");
    await expect(page.locator("//div[@class='mfcInit_label1__gEG5N']")).toBeVisible();

    // Currently the success scenario is not been checked if the response gives success

})

// Tests for invalid mobile numbers
test.describe('Mobile Number Validation', () => {

  // Loop through test data
  for (const data of invalidMobiles) {
    test(`Invalid Mobile Test - ${data.case}`, async ({ page }) => {
      await page.goto("https://voltmoney.in/check-loan-eligibility-against-mutual-funds");

      // Fill mobile number
      await page.locator("//input[@placeholder='Enter mobile number']").fill(data.mobile);

      // Try to proceed (simulate submit)
      await page.locator("//button[@type='button']").click({ force: true });

      // Assert error message
      await expect(page.locator("//div[normalize-space()='Enter a valid mobile number']")).toBeVisible();
    });
  }
});

// Tests for PAN validation
test.describe('PAN Validation Tests', () => {
  
  for (const data of panData) {
    test(`${data.case}`, async ({ page }) => {
      await page.goto("https://voltmoney.in/check-loan-eligibility-against-mutual-funds");

      // Fill mobile number with dummy valid input (required for submit)
      await page.locator("//input[@placeholder='Enter mobile number']").fill("9876543210");

      // Fill PAN with test data
      await page.locator("//input[@placeholder='Enter PAN']").fill(data.pan);

      // Try clicking submit button
      await page.locator("//button[@type='button']").click({ force: true });

      if (data.expectedValid) {
        // Expect form to proceed Check for the OTP page visible
        await expect(page.locator("//div[@class='mfcInit_label1__gEG5N']")).toBeVisible();
        
      } else {
        // Expect error message to appear
        await expect(page.locator("//div[normalize-space()='Enter a valid PAN']")).toBeVisible();
      }
      
    });
  }
});




