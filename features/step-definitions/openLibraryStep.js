const { Given, Then } = require('@cucumber/cucumber');
const { request, expect } = require('@playwright/test');

let apiContext;
let responseBody;

// Step definitions for OpenLibrary API tests
//to run the tests, use the command: npm test

Given('I will send a GET request to the OpenLibrary author endpoint', async function () {
    apiContext = await request.newContext();
    const response = await apiContext.get('https://openlibrary.org/authors/OL1A.json');
    
    expect(response.status()).toBe(200);
    responseBody = await response.json();
});

Then('the personal_name should be {string}', async function (expectedName) {
    expect(responseBody.personal_name).toBe(expectedName);
});

Then('the alternate_names should contain {string}', async function (expectedAltName) {
    expect(responseBody.alternate_names).toContain(expectedAltName);
});
