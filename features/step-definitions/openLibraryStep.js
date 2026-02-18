const { Given, Then } = require('@cucumber/cucumber');
const { request, expect } = require('@playwright/test');

let response;
let apiContext;

Given('I send a GET request to the OpenLibrary author endpoint', async function () {
  apiContext = await request.newContext();
  response = await apiContext.get('https://openlibrary.org/authors/OL1A.json');
});

Then('the personal_name should be {string}', async function (expectedName) {
  const body = await response.json();
  expect(body.personal_name).toBe(expectedName);
});

Then('the alternate_names should contain {string}', async function (expectedAltName) {
  const body = await response.json();
  expect(body.alternate_names).toContain(expectedAltName);
});
