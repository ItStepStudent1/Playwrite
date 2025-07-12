import { test, expect } from '@playwright/test'; 
import { WikiHomePage } from '../pages/WikiHomePage';  

test('Случайная статья на Википедии — вывод заголовка', async ({ page }) => { 
  // Шаг 1: открываем wikipedia.org и выбираем русский язык 
    const home = new WikiHomePage(page); 
    await home.goto(); 
    await home.chooseLanguage();        // «Русский» по умолчанию 

    const selectedPage = page.locator(`#n-featured`)
    await selectedPage.click()
    const heading = page.locator('#firstHeading')
    await expect(heading).toBeVisible();

    const paragraphs = page.locator('#mw-content-text p');
    const count = await paragraphs.count();
    expect(count).toBeGreaterThan(0);
})