import { test, expect } from '@playwright/test'; 
import { WikiHomePage } from '../pages/WikiHomePage'; 
 
test('Поле поиска', async ({ page }) => {  
    const home = new WikiHomePage(page); 
    await home.goto(); 
    await home.chooseLanguage(); 

    const input = page.locator('input[name="search"]');
    await expect(input).toBeVisible();
    await input.fill('Тестирование')
    await input.press('Enter')
    const firstLink = page.locator('a', { hasText: 'Тестирование' }).first();
    await firstLink.click();
    const title = page.locator('#firstHeading')
    await expect(title).toHaveText('Тестирование');

})