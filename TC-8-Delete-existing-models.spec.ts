import { leapwork } from "./leapwork";

leapwork.variables.set("email", "nina@leapwork.com", leapwork.storage.LOCAL);
const lw__email = leapwork.variables.get("email", leapwork.storage.LOCAL) as string;

// ai-studio-step-id: pwy04ha000
await leapwork.step("Delete exisitng models created by user", async () => {
    await page.waitForTimeout(3000);
    await page.locator('button.brandbar-model-button').click();
    const savedModels = page.locator('.line.own-model-saved-line');

    while (await savedModels.count()) {
        await savedModels.first().getByRole('button', { name: /^Open actions for/ }).click();
        await page.getByText('Delete Key').click();
        await page.getByRole('button', { name: 'Delete' }).click();
    }
});

// ai-studio-step-id: pwgoz4yr00
await leapwork.step("Click the email field on the Leapwork Play login page", async () => {
    // Click textbox "email"
    await page.getByRole('textbox', { name: 'email' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"workos-email\"]" });

// ai-studio-step-id: pwpey5ow00
await leapwork.step(`Fill the email field with "${lw__email}"`, async () => {
    // Fill textbox "email"
    await page.getByRole('textbox', { name: 'email' }).fill(String(lw__email));
}, { action: "input", relativeXpath: "//*[@id=\"workos-email\"]" });

// ai-studio-step-id: pwtpjvjx00
await leapwork.step("Press Enter to submit the login form", async () => {
    // Press Enter on element
    await page.keyboard.press("Enter");
}, { action: "keydown" });

// ai-studio-step-id: pw104hl560
await leapwork.step("Click the “Log in with email” button on the login form", async () => {
    // Click button "Log in with email"
    await page.getByRole('button', { name: 'Log in with email' }).click();
}, { action: "click", relativeXpath: ".//section/div/div/div/form/button" });

// ai-studio-step-id: pw1iokpz30
await leapwork.step("Fill the password field for nina@leapwork.com", async () => {
    // Fill textbox "Enter the password for nina@leapwork.com"
    await page.getByRole('textbox', { name: 'Enter the password for nina@' }).fill(leapwork.variables.getSecret("pwd_ep8GtAn8"));
}, { action: "input", relativeXpath: "//*[@id=\"i0118\"]" });

// ai-studio-step-id: pw4ai0c200
await leapwork.step("Press Enter to submit the Microsoft sign-in form", async () => {
    // Press Enter on element
    await page.keyboard.press("Enter");
}, { action: "keydown" });

// ai-studio-step-id: pw1fpj2tz0
await leapwork.step("Fill the password field for nina@leapwork.com", async () => {
    // Change textbox "Enter the password for nina@leapwork.com"
    await page.getByRole('textbox', { name: 'Enter the password for nina@' }).fill(leapwork.variables.getSecret("pwd_owDolc93"));
}, { action: "input", relativeXpath: "//*[@id=\"i0118\"]" });

// ai-studio-step-id: pw18l06400
await leapwork.step("Click the Sign in button after entering the password for nina@leapwork.com", async () => {
    // Click button "Sign in"
    await page.getByRole('button', { name: 'Sign in' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"idSIButton9\"]" });

// ai-studio-step-id: pw1p0p46b0
await leapwork.step("Fill the password field for nina@leapwork.com", async () => {
    // Fill textbox "Enter the password for nina@leapwork.com"
    await page.getByRole('textbox', { name: 'Enter the password for nina@' }).fill(leapwork.variables.getSecret("pwd_Sm1G6SPN"));
}, { action: "input", relativeXpath: "//*[@id=\"i0118\"]" });

// ai-studio-step-id: pw1uecltn0
await leapwork.step("Press Enter to submit the login form", async () => {
    // Press Enter on element
    await page.keyboard.press("Enter");
}, { action: "keydown" });

// ai-studio-step-id: pwtmd54a00
await leapwork.step("Fill the password field for nina@leapwork.com", async () => {
    // Change textbox "Enter the password for nina@leapwork.com"
    await page.getByRole('textbox', { name: 'Enter the password for nina@' }).fill(leapwork.variables.getSecret("pwd_Fov1nBMP"));
}, { action: "input", relativeXpath: "//*[@id=\"i0118\"]" });

// ai-studio-step-id: pwvf0hl900
await leapwork.step("Click Sign in on the Microsoft password form for nina@leapwork.com", async () => {
    // Click button "Sign in"
    await page.getByRole('button', { name: 'Sign in' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"idSIButton9\"]" });

// ai-studio-step-id: pwg1lmq200
await leapwork.step("Fill the password field for nina@leapwork.com", async () => {
    // Fill textbox "Enter the password for nina@leapwork.com"
    await page.getByRole('textbox', { name: 'Enter the password for nina@' }).fill(leapwork.variables.getSecret("pwd_kCHa4GVI"));
}, { action: "input", relativeXpath: "//*[@id=\"i0118\"]" });

// ai-studio-step-id: pw1yisjlz0
await leapwork.step("Press Enter to submit the login form", async () => {
    // Press Enter on element
    await page.keyboard.press("Enter");
}, { action: "keydown" });

// ai-studio-step-id: pw1xwqcom0
await leapwork.step("Fill the password field for nina@leapwork.com", async () => {
    // Change textbox "Enter the password for nina@leapwork.com"
    await page.getByRole('textbox', { name: 'Enter the password for nina@' }).fill(leapwork.variables.getSecret("pwd_zuD5knPx"));
}, { action: "input", relativeXpath: "//*[@id=\"i0118\"]" });

// ai-studio-step-id: pw5p5rnx00
await leapwork.step("Click the Sign in button for the nina@leapwork.com account", async () => {
    // Click button "Sign in"
    await page.getByRole('button', { name: 'Sign in' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"idSIButton9\"]" });

// ai-studio-step-id: pw1b7uq120
await leapwork.step("Set \"Don't ask again for 14 days\" checkbox", async () => {
    const donTAskAgainFor14DaysCheckbox = page.getByRole('checkbox', { name: "Don't ask again for 14 days", exact: true });
    await expect(donTAskAgainFor14DaysCheckbox).toHaveCount(1);
    await donTAskAgainFor14DaysCheckbox.setChecked(true, { force: true });
}, { action: "click", relativeXpath: "//*[@id=\"idChkBx_SAOTCAS_TD\"]" });

// ai-studio-step-id: pwnbguf000
await leapwork.step("Click the Next button on the Microsoft sign-in page", async () => {
    // Click button "Next"
    await page.getByRole('button', { name: 'Next' }).click();
}, { action: "click", relativeXpath: "//*[@id=\"idSubmit_ProofUp_Redirect\"]" });

// ai-studio-step-id: pw26tts000
await leapwork.step("Click the Upload file button", async () => {
    // Click button "Upload file"
    await page.getByRole('button', { name: 'Upload file' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div/div/span/button" });

// ai-studio-step-id: pw1gzgxj40
await leapwork.step("Click the Upload file button", async () => {
    // Click button "Upload file"
    await page.getByRole('button', { name: 'Upload file' }).click();
}, { action: "click", relativeXpath: ".//div[2]/div[1]/div/div/span/button" });
//fsdfsdfksdl;fkdsl;