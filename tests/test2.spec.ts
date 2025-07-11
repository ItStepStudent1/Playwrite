import { test, expect } from '@playwright/test'; 
import { WikiHomePage } from '../pages/WikiHomePage'; 
import { WikiMainPage } from '../pages/WikiMainPage'; 
 
test('Случайная статья на Википедии — вывод заголовка', async ({ page }) => {  
    const home = new WikiHomePage(page); 
    await home.goto(); 
    await home.chooseLanguage(); 

    const wiki = new WikiMainPage(page); 
    await wiki.openRandomArticle(); 

    const paragraphs = page.locator('#mw-content-text p');
    const count = await paragraphs.count();
    expect(count).toBeGreaterThan(0);
})