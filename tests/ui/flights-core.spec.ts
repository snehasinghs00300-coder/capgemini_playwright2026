import { test, expect, Page } from '@playwright/test';
import { flightData } from '../../test-data/flights.data';

async function openFlights(page: Page) {
  await page.goto(flightData.baseUrl);
  const demoWarningModal = page.locator('#demoWarningModal');
  if (await demoWarningModal.isVisible().catch(() => false)) {
    await demoWarningModal.getByRole('button').last().click();
    await expect(demoWarningModal).toBeHidden();
  }
  await page.getByRole('tab', { name: /Flights/ }).click();
  const form = page.locator('form[action*="/flights"]');
  await expect(form).toBeVisible();
  return form;
}

test.describe('Flights core controls', () => {
  test('opens the default One Way form', async ({ page }) => {
    const form = await openFlights(page);
    await expect(page.getByRole('button', { name: /One Way/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Round Trip/ })).toBeVisible();
    await expect(page.getByRole('button', { name: /Multi-City/ })).toBeVisible();
    await expect(form.getByRole('button', { name: /Economy/ })).toBeVisible();
    await expect(form.getByText('1 Passenger', { exact: true })).toBeVisible();
    await expect(form.getByText('Departure City or Airport', { exact: true }).first()).toBeVisible();
    await expect(form.getByText('Arrival City or Airport', { exact: true }).first()).toBeVisible();
  });

  // test('changes cabin class and passenger count', async ({ page }) => {
  //   const form = await openFlights(page);
  //   await form.getByRole('button', { name: /Economy/ }).click();
  //   const businessOption = page.getByText('Business', { exact: true }).last();
  //   if (await businessOption.isVisible().catch(() => false)) {
  //     await businessOption.click();
  //     await expect(form.locator('input[name="class"]')).toHaveValue('business');
  //   }
  //   await form.getByText('1 Passenger', { exact: true }).click();
  //   await form.getByRole('button', { name: 'add' }).first().click();
  //   await expect(form.getByText(/2 Passengers/)).toBeVisible();
  //   await expect(form.locator('input[name="adults"]')).toHaveValue('2');
  // });

  test('switches between Round Trip and Multi-City modes', async ({ page }) => {
    await openFlights(page);
    await page.getByRole('button', { name: /Round Trip/ }).click();
    await expect(page.locator('#return_date_picker')).toBeVisible();
    await expect(page.locator('#flights_return_date')).toBeVisible();
    await page.getByRole('button', { name: /Multi-City/ }).click();
    await expect(page.locator('#multi_city_container')).toBeVisible();
    await expect(page.getByRole('button', { name: /Add Flight/ })).toBeVisible();
  });
});
