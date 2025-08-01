/*import { test, expect } from '@playwright/test'; 
test('Открыть случайную статью на Wikipedia и вывести заголовок', async ({ page 
}) => { 
// Переход на главную страницу Wikipedia 
await page.goto('https://www.wikipedia.org'); 
// Нажимаем на ссылку "Русский", чтобы открыть русскую версию сайта 
await page.getByRole('link', { name: 'Русский' }).click(); 
// Нажимаем на "Случайная статья" 
await page.getByRole('link', { name: 'Случайная статья' }).click(); 
// Ждём загрузку новой страницы и получаем заголовок 
const articleTitle = await page.locator('#firstHeading').textContent(); 
// Выводим заголовок в консоль 
console.log('Заголовок статьи:', articleTitle); 
// Проверка: заголовок должен существовать 
expect(articleTitle).not.toBeNull(); 
});*/
import { test, expect } from '@playwright/test'; 
import { WikiHomePage } from '../pages/WikiHomePage'; 
import { WikiMainPage } from '../pages/WikiMainPage'; 
 
test('Случайная статья на Википедии — вывод заголовка', async ({ page }) => { 
  // Шаг 1: открываем wikipedia.org и выбираем русский язык 
  const home = new WikiHomePage(page); 
  await home.goto(); 
  await home.chooseLanguage();        // «Русский» по умолчанию 
 
  // Шаг 2: кликаем «Случайная статья» 
  const wiki = new WikiMainPage(page); 
  await wiki.openRandomArticle(); 
 
  // Шаг 3: извлекаем заголовок статьи прямо здесь, в тесте 
  const title = await page.locator('#firstHeading').textContent(); 
  console.log('Заголовок статьи:', title); 
 
  // Шаг 4: проверяем, что заголовок не пустой 
  expect(title?.trim()).not.toBeNull(); 
});