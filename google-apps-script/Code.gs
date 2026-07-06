/**
 * Господар Кам'янця-Подільського — приймач заявок з сайту.
 *
 * Що робить: приймає POST-запит з форми на сайті і дописує рядок
 * у активний аркуш цієї Google Таблиці.
 *
 * Як підключити — див. README.md поруч із цим файлом.
 */
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  var data = {};
  try {
    data = JSON.parse(e.postData.contents);
  } catch (err) {
    data = e.parameter || {};
  }

  // Створюємо заголовки, якщо аркуш порожній
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Дата', "Ім'я", 'Телефон', 'Напрямок', 'Послуга', 'Коментар', 'Сторінка']);
  }

  sheet.appendRow([
    new Date(),
    data.name || '',
    data.phone || '',
    data.categoryTitle || '',
    data.serviceTitle || '',
    data.message || '',
    data.page || '',
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService
    .createTextOutput('OK. Це прийомний скрипт для форми сайту Господар Кам\'янця-Подільського.')
    .setMimeType(ContentService.MimeType.TEXT);
}
