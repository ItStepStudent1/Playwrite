import { test, expect } from '@playwright/test'; 
test('Простой тест — проверка заголовка', async ({ page }) => { 
await page.goto('https://example.com'); 
await expect(page).toHaveTitle('Example Domain');
console.log("This is first commit in new branch")  
});

/*import { defineConfig } from '@playwright/test'; 
export default defineConfig({ 
    use: { 
        headless: false, // запускать тесты с видимым браузером 
        screenshot: 'only-on-failure', // делать скриншоты при ошибках 
        video: 'retain-on-failure', // сохранять видео только при ошибках 
        baseURL: 'https://example.com', // можно указать базовый URL 
    }, 
}); */